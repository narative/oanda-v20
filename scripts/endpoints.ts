import * as path from 'path'

import * as cheerio from 'cheerio'

import { Request } from './request'
import { parseComments, toModuleName, parseTypes, convertType } from './helpers/types'
import { Filewriter } from './helpers/file'
import { moduleNames as definitionModuleNames } from './definitions'

export const moduleNames = [
  'account',
  'instrument',
  'order',
  'trade',
  'position',
  'transaction',
  'pricing',
]

class Parser {
  constructor(
    private moduleName: string,
    private url = `https://developer.oanda.com/rest-live-v20/${moduleName}-ep/`,
    private file = new Filewriter(
      path.join(__dirname, `../src/api/${toModuleName(moduleName)}.ts`),
    ),
  ) {
    this.file.clean()
  }

  public async parse() {
    const request = new Request()
    const body = await request.get(this.url)
    const $ = cheerio.load(body)
    await this.parseEndpoints($)
    await this.file.flush()
  }

  private async parseEndpoints($: CheerioStatic) {
    const self = this

    self.file.appendFile(
      `${definitionModuleNames
        // .filter((m) => m !== this.moduleName)
        .map((m) => `import * as ${toModuleName(m)} from '../definitions/${toModuleName(m)}'`)
        .join('\n')}\n`,
    )
    self.file.appendFile(`
import * as http from 'http'
import { EntitySpec } from '../${self.moduleName}'\n`)

    const endpoints: {
      key: string
      name: string
      requests: RequestInfo[]
      responses: ResponseInfo[]
      type: 'stream' | 'rest'
    }[] = []

    $('.endpoint_header').each(function (i, e) {
      const $this = $(this)
      const id = $this.children('a:nth-child(1)').attr('href') // #collapse_endpoint_2

      const method = $this.find('.method').text()

      const endpoint = $this
        .find('.path')
        .html()
        .replace(/<p>[\s\S]*<\/p>/g, '')

      const key = `${method} ${endpoint}`

      const name = urlToName(key)

      if (!name) {
        self.file.appendFile(`
///////////////////////////////////////////////////////////////////////////////
// ${key} (${id})
///////////////////////////////////////////////////////////////////////////////

// no implementation

`)
        return
      }

      const requests = self.parseRequest($, key, id)
      const responses = self.parseResponse($, key, id)

      endpoints.push({
        key,
        name,
        requests,
        responses,
        type: self.isStream(name) ? 'stream' : 'rest',
      })

      self.file.appendFile(`
///////////////////////////////////////////////////////////////////////////////
// ${name} - ${key} (${id})
///////////////////////////////////////////////////////////////////////////////
        
export interface ${capitalize(name)}Request {
${requests
  .filter((r) => r.location === 'header')
  .map((r) => `  // ${r.name}: ${r.type} // ${r.location}\n`)
  .join(``)}${requests
        .filter((r) => r.location === 'path')
        .map((r) => `  ${r.name}: ${r.type} // ${r.location}\n`)
        .join(
          ``,
        )}${requests.find((r) => r.location === 'query') ? `  query: ${capitalize(name)}RequestQuery` : ''}${requests.find((r) => r.location === 'body') ? `  body: ${capitalize(name)}RequestBody` : ''}
}${
        requests.find((r) => r.location === 'query')
          ? `\n\nexport interface ${capitalize(name)}RequestQuery {${requests
              .filter((r) => r.location === 'query')
              .map(
                (r) => `
  ${r.name}?: ${r.type}`,
              )
              .join(`\n`)}
}`
          : ''
      }
${requests
  .filter((r) => r.location === 'body')
  .map((r) => `\nexport interface ${capitalize(name)}RequestBody ${r.type}`)
  .join(``)}
export type ${capitalize(
        name,
      )}Response = ${responses.length > 0 ? responses.map((r) => `${capitalize(name)}Response${r.status}`).join(` | `) : 'void'}

${responses
  .map((r) => `export interface ${capitalize(name)}Response${r.status} ${r.schema}`)
  .join(`\n`)}`)
    })

    self.file.appendFile(`
///////////////////////////////////////////////////////////////////////////

export class API {
  constructor(private context: any, private resolver: any) {}
${endpoints
  .filter((e) => e.type === 'rest')
  .map(
    (e) => `
  /**
   * ${e.name}
   * ${e.key} 
   */
  async ${e.name}(request: ${capitalize(e.name)}Request): Promise<${capitalize(e.name)}Response> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).${e.name}(
${e.requests
  .filter((r) => r.location === 'path')
  .map((r) => `       request.${r.name},\n`)
  .join('')}${e.requests.find((r) => r.location === 'query') ? '        request.query,\n' : ''}${
      e.requests.find((r) => r.location === 'body') ? '        request.body,\n' : ''
    }        this.resolver(resolve, reject))
    })
  }`,
  )
  .join(`\n`)}
}

export class Stream {
  constructor(private context: any, private resolver: any) {}
${endpoints
  .filter((e) => e.type === 'stream')
  .map(
    (e) => `
  /**
   * ${e.name}
   * ${e.key} 
   */
  ${e.name}(request: ${capitalize(
      e.name,
    )}Request, streamHandler: (data: any) => void, doneHandler: (err: any, data: any) => void): http.ClientRequest {
    return new EntitySpec(this.context).${e.name}(
${e.requests
  .filter((r) => r.location === 'path')
  .map((r) => `      request.${r.name},\n`)
  .join('')}${e.requests.find((r) => r.location === 'query') ? '      request.query,\n' : ''}${
      e.requests.find((r) => r.location === 'body') ? '      request.body,\n' : ''
    }      streamHandler,
      this.resolver((data: any) => doneHandler(null, data), (err: any) => doneHandler(err, null))
    )
  }
`,
  )}
}
`)
  }

  private isStream(name: string) {
    if (this.moduleName === 'pricing' && name === 'stream') {
      return true
    }

    if (this.moduleName === 'transaction' && name === 'stream') {
      return true
    }

    return false
  }

  private parseRequest($: CheerioStatic, key: string, id: string) {
    const self = this

    const idParts = id.replace('#', '').split('_') // #collapse_endpoint_2
    const paramID = `#${idParts[0]}_${idParts[2]}_parameters` // #collapse_2_parameters

    const requests: RequestInfo[] = []

    $(paramID) // <div id=collapse_2_parameters />
      .find('.parameter_table > tbody > tr')
      .each(function () {
        const $td = $('td', this)
        const name = $($td.get(0)).text()
        const location = $($td.get(1)).text()
        const type = convertType($($td.get(2)).html())

        requests.push({ name, location, type })
      })

    // doc error, forgot accountID
    if (self.moduleName === 'pricing' && id === '#collapse_endpoint_5') {
      requests.unshift({ name: 'accountID', location: 'path', type: 'account.AccountID' })
    }

    $(paramID) // <div id=collapse_2_parameters />
      .find('.body_schema > .json_schema')
      .each(function () {
        const name = 'body'
        const location = 'body'
        const type = parseTypes(parseComments($(this).html()))

        requests.push({ name, location, type })
      })

    return requests
  }

  private parseResponse($: CheerioStatic, key: string, id: string) {
    const self = this

    const idParts = id.replace('#', '').split('_') // #collapse_endpoint_2

    const responses: ResponseInfo[] = []
    ;[200, 201, 400, 404].forEach((status) => {
      const bodyID = `#${idParts[0]}_${idParts[2]}_${status}` // #collapse_2_200

      const raw = $(bodyID).find('.json_schema').html()

      if (!raw) {
        return
      }

      const schema = parseTypes(parseComments(raw))

      const response: ResponseInfo = {
        status,
        schema,
      }

      responses.push(response)
    })

    return responses
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
    return null
  }

  return result
}

export async function parseAll() {
  await Promise.all(
    moduleNames.map(async (moduleName) => {
      const request = new Parser(moduleName)
      await request.parse()
    }),
  )
}
