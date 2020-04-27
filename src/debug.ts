import * as fs from 'fs'
import * as path from 'path'
import * as cheerio from 'cheerio'
import * as http from 'https'
import * as crypto from 'crypto'

/**
 * Decorator for Prometheus counters
 */
export const Cachable = () => (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) => {
  const method = descriptor.value

  descriptor.value = async function (...args: any[]) {
    const key = args.reduce((acc, arg) => `${acc}-${arg.toString()}`, '')
    const md5sum = crypto.createHash('md5')
    const file = md5sum.update(key).digest('hex')
    const cachePath = path.join(__dirname, `../tmp/cache/${file}`)
    const exists = await new Promise((resolve) =>
      fs.access(cachePath, fs.constants.F_OK, (e) => resolve(!e)),
    )
    if (exists) {
      return (await fs.promises.readFile(cachePath)).toString()
    }

    const res = await method.apply(this, args)

    await fs.promises.writeFile(cachePath, res)

    return res
  }
}

class Request {
  constructor(
    private url: string,
    private apiInfo: Info = {},
    private moduleName = url
      .replace('https://developer.oanda.com/rest-live-v20/', '')
      .replace('-ep/', ''),
  ) {}

  @Cachable()
  private async get(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const req = http.request(url, (response) => {
        let responseBody = ''

        response.on('data', (d) => {
          responseBody += d
        })

        response.on('end', () => {
          resolve(responseBody)
        })
      })

      req.on('error', (err) => {
        reject(err)
      })

      req.end()
    })
  }

  public async parse() {
    const body = await this.get(this.url)
    const $ = cheerio.load(body)
    this.parseEndpoints($)
    return {
      moduleName: this.moduleName,
      info: this.apiInfo,
    }
  }

  private parseEndpoints($: CheerioStatic) {
    const self = this

    $('.endpoint_header').each(function (i, e) {
      const $this = $(this)
      const id = $this.children('a:nth-child(1)').attr('href') // #collapse_endpoint_2

      const method = $this.find('.method').text()

      const endpoint = $this
        .find('.path')
        .html()
        .replace(/<p>[\s\S]*<\/p>/g, '')

      const key = `${method} ${endpoint}`

      self.parseRequest($, key, id)
      self.parseResponse($, key, id)
    })
  }

  private parseRequest($: CheerioStatic, key: string, id: string) {
    const self = this

    const idParts = id.replace('#', '').split('_') // #collapse_endpoint_2
    const paramID = `#${idParts[0]}_${idParts[2]}_parameters` // #collapse_2_parameters

    $(paramID) // <div id=collapse_2_parameters />
      .find('.parameter_table > tbody > tr')
      .each(function () {
        const $td = $('td', this)
        const name = $($td.get(0)).text()
        const location = $($td.get(1)).text()
        const type = self.getType($($td.get(2)).html())

        const request: RequestInfo = {
          name,
          location,
          type,
        }
        self.addRequestInfo(key, request)
      })

    $(paramID) // <div id=collapse_2_parameters />
      .find('.body_schema > .json_schema')
      .each(function () {
        const request: RequestInfo = {
          name: 'body',
          location: 'body',
          type: self.parseCode($(this).text()),
        }
        self.addRequestInfo(key, request)
      })
  }

  private getType(data: string) {
    const replacements = [
      {
        from: /List of primitives\.InstrumentName \(csv\)/g,
        to: 'string',
      },
      {
        from: /List of order\.OrderID \(csv\)/g,
        to: 'string',
      },
      {
        from: /List of trade\.TradeID \(csv\)/g,
        to: 'string',
      },
      {
        from: /List of transaction\.TransactionFilter \(csv\)/g,
        to: 'string',
      },
      {
        from: /transaction\.TransactionID/g,
        to: 'primitives.TransactionID',
      },
      {
        from: /account\.AccountID/g,
        to: 'primitives.AccountID',
      },
      {
        from: /instrument\.CandlestickGranularity/g,
        to: 'primitives.CandlestickGranularity',
      },
      {
        from: /instrument\.WeeklyAlignment/g,
        to: 'primitives.WeeklyAlignment',
      },
      {
        from: /order\.OrderStateFilter/g,
        to: 'primitives.OrderStateFilter',
      },
      {
        from: /order\.OrderID/g,
        to: 'primitives.OrderID',
      },
      {
        from: /order\.OrderSpecifier/g,
        to: 'primitives.OrderSpecifier',
      },
      {
        from: /trade\.TradeID/g,
        to: 'primitives.TradeID',
      },
      {
        from: /trade\.TradeStateFilter/g,
        to: 'primitives.TradeStateFilter',
      },
      {
        from: /trade\.TradeSpecifier/g,
        to: 'primitives.TradeSpecifier',
      },
      {
        from: /transaction\.TransactionFilter/g,
        to: 'primitives.TransactionFilter',
      },
      {
        from: /\bClientExtensions\b/g,
        to: 'primitives.ClientExtensions',
      },
      {
        from: /integer/g,
        to: 'number',
      },
      {
        from: /\bDecimalNumber\b/g,
        to: 'primitives.DecimalNumber',
      },
      {
        from: /\bTakeProfitDetails\b/g,
        to: 'primitives.TakeProfitDetails',
      },
      {
        from: /\bStopLossDetails\b/g,
        to: 'primitives.StopLossDetails',
      },
      {
        from: /\bTrailingStopLossDetails\b/g,
        to: 'primitives.TrailingStopLossDetails',
      },
    ]

    const result = data.replace(
      /<a[\s\S]*?href="..\/(\S*?)\-df[\s\S]*?>([\s\S]*?)<\/a>/g,
      (match, p1, p2) => `${p1 ? `${p1}.` : ''}${p2}`,
    )

    return replacements
      .reduce((acc, r) => acc.replace(r.from, r.to), result)
      .replace(new RegExp(`${this.moduleName}\\.`, 'g'), '')
  }

  private parseCode(data: string) {
    return (
      this.getType(data)
        // encoding
        .replace('&#x2019;', `'`)

        // array to ts array
        .replace(/Array\[([\s\S]*?)]/g, (match, p1) => `${p1}[]`)

        // style
        .replace(
          /(\S*)\s*:\s*\((\S*)(,\srequired)?\)/g,
          (match, p1, p2, p3) => `${p1}${p3 ? '' : '?'}: ${p2}`,
        )
        .replace(
          /(\S*)\s*:\s*\((\S*)(?:,\sdefault=(\S*))?\)/g,
          (match, p1, p2, p3) => `${p1}: ${p2}`,
        )

        // comments
        .replace(/#\s*?\n(\s*)#/g, (match, p1) => `/**\n${p1}#`)
        .replace(/#\s*?\n/g, ` */\n`)
        .replace(/#([\s\S]*?)\n/g, (match, p1) => ` *${p1}\n`)
    )
  }

  private parseResponse($: CheerioStatic, key: string, id: string) {
    const self = this

    const idParts = id.replace('#', '').split('_') // #collapse_endpoint_2

    ;[200, 400].forEach((status) => {
      const bodyID = `#${idParts[0]}_${idParts[2]}_${status}` // #collapse_2_200

      const raw = $(bodyID).find('.json_schema').html()

      if (!raw) {
        return
      }

      const schema = self.parseCode(raw)

      const response: ResponseInfo = {
        status,
        schema,
      }

      self.addResponseInfo(key, response)
    })
  }

  private addRequestInfo(endpoint: string, request: RequestInfo) {
    if (!this.apiInfo[endpoint]) {
      this.apiInfo[endpoint] = {
        name: urlToName(endpoint),
        request: [],
        response: [],
      }
    }

    this.apiInfo[endpoint].request.push(request)
  }

  private addResponseInfo(endpoint: string, response: ResponseInfo) {
    if (!this.apiInfo[endpoint]) {
      this.apiInfo[endpoint] = {
        name: urlToName(endpoint),
        request: [],
        response: [],
      }
    }

    this.apiInfo[endpoint].response.push(response)
  }
}

interface RequestInfo {
  name: string
  location: string
  type: string
}

interface ResponseInfo {
  status: number
  schema: string
}

interface EndpointInfo {
  name: string
  request: RequestInfo[]
  response: ResponseInfo[]
}

interface Info {
  [k: string]: EndpointInfo
}

async function main() {
  const result = await Promise.all(
    [
      'https://developer.oanda.com/rest-live-v20/account-ep/',
      'https://developer.oanda.com/rest-live-v20/instrument-ep/',
      'https://developer.oanda.com/rest-live-v20/order-ep/',
      'https://developer.oanda.com/rest-live-v20/trade-ep/',
      'https://developer.oanda.com/rest-live-v20/position-ep/',
      'https://developer.oanda.com/rest-live-v20/transaction-ep/',
      'https://developer.oanda.com/rest-live-v20/pricing-ep/',
    ].map(async (url) => {
      const request = new Request(url)
      const { moduleName, info } = await request.parse()
      return {
        url,
        moduleName,
        info,
      }
    }),
  )

  // result.forEach((r) => {
  //   console.log(
  //     `${r.name}: ${r.url}\n\n${Object.entries(r.info)
  //       .map(
  //         ([k, v]) =>
  //           `${k}\n  Req: ${v.request.map((a) => a.name).join(`, `)}\n  Res: ${v.response
  //             .map((r) => r.status)
  //             .join(`, `)}`,
  //       )
  //       .join(`\n\n`)}\n\n`,
  //   )
  // })

  const buildRequest = (url: string, name: string, info: Info, endpointInfo: EndpointInfo) => {
    // query
    const queryRequest = endpointInfo.request.filter((req) => req.location === 'query')
    const bodyRequest = endpointInfo.request.filter((req) => req.location === 'body')
    const requestName = getRequestName(url, name, info, endpointInfo)
    const bodyName = `${requestName}Body`

    if (queryRequest.length === 0 && bodyRequest.length === 0) {
      return null
    }

    const requestQuery =
      queryRequest.length > 0 || bodyRequest.length > 0
        ? `export interface ${requestName} {
${queryRequest.map((req) => `  ${req.name}: ${req.type}`).join('\n')}
${bodyRequest.map((req) => `  body: ${bodyName}`)}
}`
        : ''

    // body
    const requestBody = bodyRequest
      .map((req) => `export interface ${bodyName} ${req.type}`)
      .join('\n')

    const result = `${requestQuery}\n${requestBody}`
    return result
  }

  const buildResponse = (url: string, name: string, info: Info, endpointInfo: EndpointInfo) => {
    const responseName = getResponseName(url, name, info, endpointInfo)

    if (endpointInfo.response.length === 0) {
      return ''
    }

    return `export type ${responseName} = ${endpointInfo.response
      .map((res) => `${responseName}${res.status}`)
      .join(' | ')}\n\n${endpointInfo.response
      .map((res) => `export interface ${responseName}${res.status} ${res.schema}`)
      .join(`\n\n`)}`
  }

  const getRequestName = (url: string, name: string, info: Info, endpointInfo: EndpointInfo) => {
    return `${capitalize(name)}${capitalize(endpointInfo.name)}Request`
  }
  const getResponseName = (url: string, name: string, info: Info, endpointInfo: EndpointInfo) => {
    return `${capitalize(name)}${capitalize(endpointInfo.name)}Result`
  }

  const buildMethods = (
    url: string,
    name: string,
    info: Info,
    endpointInfo: EndpointInfo,
    hasRequest: boolean,
  ) => {
    const params = endpointInfo.request.filter((r) => r.location === 'path')

    if (hasRequest) {
      params.push({
        name: 'body',
        type: getRequestName(url, name, info, endpointInfo),
        location: 'query',
      })
    }

    return `async ${endpointInfo.name}(${params
      .map((r) => `${r.name}: ${r.type}`)
      .join(`, `)}): Promise<${getResponseName(url, name, info, endpointInfo)}> {
  return new Promise((resolve, reject) => {
    new EntitySpec(this.context).${endpointInfo.name}(${[
      ...params.map((r) => r.name),
      'this.resolver(resolve, reject)',
    ].join(`, `)})
  })
}`
  }

  await Promise.all(
    result.map(async (r) => {
      const filepath = path.join(__dirname, `../tmp/out/${r.moduleName}.ts`)

      const requests = []
      const responses = []
      const methods = []
      for (const [k, v] of Object.entries(r.info)) {
        const req = buildRequest(r.url, r.moduleName, r.info, v)
        const hasReq = !!req
        if (hasReq) {
          requests.push(req)
        }
        responses.push(buildResponse(r.url, r.moduleName, r.info, v))
        methods.push(buildMethods(r.url, r.moduleName, r.info, v, hasReq))
      }

      await fs.promises.writeFile(
        filepath,
        `///////////////////////////////////////////////////////////////////////////////

${requests.join('\n')}

${responses.join('\n')}

export class API {
  constructor(private context: any, private resolver: any) {}
  
  ${methods.join('\n  ')}
}`,
      )
    }),
  )

  console.log(`Done: ${new Date()}`)
}

function capitalize(name: string) {
  return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
}

function urlToName(url: string) {
  const map = {
    'GET /v3/accounts/{accountID}/positions': 'list',
    'GET /v3/accounts/{accountID}/openPositions': 'listOpen',
    'GET /v3/accounts/{accountID}/positions/{instrument}': 'get',
    'PUT /v3/accounts/{accountID}/positions/{instrument}/close': 'close',

    'GET /v3/accounts/{accountID}/transactions': 'list',
    'GET /v3/accounts/{accountID}/transactions/{transactionID}': 'get',
    'GET /v3/accounts/{accountID}/transactions/idrange': 'range',
    'GET /v3/accounts/{accountID}/transactions/sinceid': 'since',
    'GET /v3/accounts/{accountID}/transactions/stream': 'stream',

    'GET /v3/accounts/{accountID}/candles/latest': '',
    'GET /v3/accounts/{accountID}/pricing': 'get',
    'GET /v3/accounts/{accountID}/pricing/stream': 'stream',
    'GET /v3/accounts/{accountID}/instruments/{instrument}/candles': 'candles',

    'GET /v3/instruments/{instrument}/candles': 'candles',
    'GET /v3/instruments/{instrument}/orderBook': 'orderBook',
    'GET /v3/instruments/{instrument}/positionBook': 'positionBook',

    'GET /v3/accounts/{accountID}/trades': 'list',
    'GET /v3/accounts/{accountID}/openTrades': 'listOpen',
    'GET /v3/accounts/{accountID}/trades/{tradeSpecifier}': 'get',
    'PUT /v3/accounts/{accountID}/trades/{tradeSpecifier}/close': 'close',
    'PUT /v3/accounts/{accountID}/trades/{tradeSpecifier}/clientExtensions': 'setClientExtensions',
    'PUT /v3/accounts/{accountID}/trades/{tradeSpecifier}/orders': 'setDependentOrders',

    'POST /v3/accounts/{accountID}/orders': 'create',
    'GET /v3/accounts/{accountID}/orders': 'list',
    'GET /v3/accounts/{accountID}/pendingOrders': 'listPending',
    'GET /v3/accounts/{accountID}/orders/{orderSpecifier}': 'get',
    'PUT /v3/accounts/{accountID}/orders/{orderSpecifier}': 'replace',
    'PUT /v3/accounts/{accountID}/orders/{orderSpecifier}/cancel': 'cancel',
    'PUT /v3/accounts/{accountID}/orders/{orderSpecifier}/clientExtensions': 'setClientExtensions',

    'GET /v3/accounts': 'list',
    'GET /v3/accounts/{accountID}': 'get',
    'GET /v3/accounts/{accountID}/summary': 'summary',
    'GET /v3/accounts/{accountID}/instruments': 'instruments',
    'PATCH /v3/accounts/{accountID}/configuration': 'configure',
    'GET /v3/accounts/{accountID}/changes': 'changes',
  }
  const result = map[url]
  if (!result) {
    console.log('X ', url)
    return '???'
  }

  return result
}

main()
