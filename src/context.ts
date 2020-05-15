import * as account from './account'
import * as user from './user'
import * as position from './position'
import * as pricing from './pricing'
import * as transaction from './transaction'
import * as primitives from './primitives'
import * as trade from './trade'
import * as site from './site'
import * as pricing_common from './pricing_common'
import * as order from './order'
import * as instrument from './instrument'

export class Response {
  constructor(
    public hostname: any,
    public method: any,
    public path: any,
    public statusCode: any,
    public statusMessage: any,
    public contentType: any,
    public rawBody: any,
    public body = null,
  ) {
    this.statusCode = statusCode.toString()
  }

  isSuccess() {
    return this.statusCode.startsWith('2')
  }

  isRedirection() {
    return this.statusCode.startsWith('3')
  }

  isClientError() {
    return this.statusCode.startsWith('4')
  }

  isServerError() {
    return this.statusCode.startsWith('5')
  }

  isError() {
    return this.isClientError() || this.isServerError()
  }
}

export class Context {
  public account = new account.EntitySpec(this)
  public position = new position.EntitySpec(this)
  public pricing = new pricing.EntitySpec(this)
  public transaction = new transaction.EntitySpec(this)
  public trade = new trade.EntitySpec(this)
  public order = new order.EntitySpec(this)
  public instrument = new instrument.EntitySpec(this)
  public site = new site.EntitySpec(this)
  public primitives = new primitives.EntitySpec(this)
  public user = new user.EntitySpec(this)
  public pricing_common = new pricing_common.EntitySpec(this)

  constructor(
    public hostname: any,
    public port: any,
    public ssl: any,
    public application: any,
    public username = '',
    public headers = {
      'Content-Type': 'application/json',
      'OANDA-Agent': `v20-javascript/3.0.25 (${application})`,
    },
    public token = '',
    // @ts-ignore
    public http = ssl ? require('https') : require('http'),
  ) {
    application = application || ''
  }

  setToken(token) {
    this.token = token
    this.headers['Authorization'] = 'Bearer ' + this.token
  }

  request(method, path, body, streamChunkHandler, responseHandler) {
    let headers = JSON.parse(JSON.stringify(this.headers))

    let postData = ''

    if (Object.keys(body).length > 0) {
      postData = JSON.stringify(body)
      headers['Content-Length'] = postData.length
    }

    let options = {
      hostname: this.hostname,
      port: this.port,
      method: method,
      path: path,
      headers: headers,
    }

    let req = this.http.request(options, (response) => {
      let responseBody = ''

      response.on('data', (d) => {
        responseBody += d

        if (streamChunkHandler) {
          let chunks = responseBody.split('\n')

          chunks.forEach((chunk) => {
            if (chunk.length > 0) {
              streamChunkHandler(chunk)
            }

            responseBody = chunk
          })
        }
      })

      response.on('end', () => {
        if (responseHandler) {
          responseHandler(
            null,
            new Response(
              this.hostname,
              method,
              path,
              response.statusCode,
              response.statusMessage,
              response.headers['content-type'],
              responseBody,
            ),
          )
        }
      })
    })

    req.on('error', (err) => {
      if (responseHandler) {
        responseHandler(err, null)
        req.abort()
      }
    })

    if (postData.length > 0) {
      req.write(postData)
    }

    req.end()

    return req
  }
}
