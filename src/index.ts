import * as context from './context'
import * as accountAPI from './api/account'
import * as positionAPI from './api/position'
import * as pricingAPI from './api/pricing'
import * as transactionAPI from './api/transaction'
import * as tradeAPI from './api/trade'
import * as orderAPI from './api/order'
import * as instrumentAPI from './api/instrument'

export * from './context'
export * as account from './api/account'
export * as position from './api/position'
export * as pricing from './api/pricing'
export * as transaction from './api/transaction'
export * as trade from './api/trade'
export * as order from './api/order'
export * as instrument from './api/instrument'

export * from './definitions/account'
export * from './definitions/instrument'
export * from './definitions/order'
export * from './definitions/position'
export * from './definitions/pricing'
export * from './definitions/pricingCommon'
export * from './definitions/primitives'
export * from './definitions/trade'
export * from './definitions/transaction'

const url = {
  practice: {
    api: 'api-fxpractice.oanda.com',
    stream: 'stream-fxpractice.oanda.com',
  },
  production: {
    api: 'api-fxtrade.oanda.com',
    stream: 'stream-fxtrade.oanda.com',
  },
}

class OANDA {
  public context: context.Context

  constructor(
    public applicationName: string,
    public url: string,
    public token: string,
    public dateFormat: 'UNIX' | 'RFC3339' = 'UNIX',
  ) {
    const ctx = new context.Context(url, 443, true, applicationName)
    ctx.setToken(token)
    if (dateFormat === 'UNIX') {
      ctx.headers['Accept-Datetime-Format'] = 'UNIX'
    }

    this.context = ctx
  }
}

export class Rest extends OANDA {
  public account: accountAPI.API
  public position: positionAPI.API
  public pricing: pricingAPI.API
  public transaction: transactionAPI.API
  public trade: tradeAPI.API
  public order: orderAPI.API
  public instrument: instrumentAPI.API

  constructor(
    applicationName: string,
    token: string,
    practice = false,
    dateFormat: 'UNIX' | 'RFC3339' = 'UNIX',
  ) {
    super(applicationName, practice ? url.practice.api : url.production.api, token, dateFormat)

    this.account = new accountAPI.API(this.context, resolver)
    this.position = new positionAPI.API(this.context, resolver)
    this.pricing = new pricingAPI.API(this.context, resolver)
    this.transaction = new transactionAPI.API(this.context, resolver)
    this.trade = new tradeAPI.API(this.context, resolver)
    this.order = new orderAPI.API(this.context, resolver)
    this.instrument = new instrumentAPI.API(this.context, resolver)
  }
}

export class Stream extends OANDA {
  public pricing: pricingAPI.Stream
  public transaction: transactionAPI.Stream

  constructor(
    applicationName: string,
    token: string,
    practice = false,
    dateFormat: 'UNIX' | 'RFC3339' = 'UNIX',
  ) {
    super(
      applicationName,
      practice ? url.practice.stream : url.production.stream,
      token,
      dateFormat,
    )

    this.pricing = new pricingAPI.Stream(this.context, resolver)
    this.transaction = new transactionAPI.Stream(this.context, resolver)
  }
}

export class APIError extends Error {
  constructor(message: string, public helpURL: string, public path: string, public body: any) {
    super(
      `${message}: ${helpURL}\npath=${path} errorCode=${body?.errorCode} errorMessage=${body?.errorMessage}`,
    )
  }
}

function resolver(resolve, reject) {
  return (err: Error, res: context.Response) => {
    if (err) {
      reject(err)
      return
    }

    switch (res.statusCode) {
      case '400':
        reject(
          new APIError(
            'Bad request',
            'https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400',
            res?.path,
            res?.body,
          ),
        )
        return
      case '401':
        reject(
          new APIError(
            'Unauthorized',
            'https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400',
            res?.path,
            res?.body,
          ),
        )
        return
      case '403':
        reject(
          new APIError(
            'Forbidden',
            'https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400',
            res?.path,
            res?.body,
          ),
        )
        return
      case '404':
        reject(
          new APIError(
            'Not found',
            'https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400',
            res?.path,
            res?.body,
          ),
        )
        return
      case '405':
        reject(
          new APIError(
            'Method not allowed',
            'https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400',
            res?.path,
            res?.body,
          ),
        )
        return
      default: {
        if (res.statusCode.startsWith('2')) {
          resolve(res.body)
          return
        }

        reject(new APIError('Unhandled status code', `${res.statusCode}`, res?.path, res?.body))
        return
      }
    }
  }
}

export function toOANDATime(date: Date, dateFormat: 'UNIX' | 'RFC3339' = 'UNIX') {
  return dateFormat === 'UNIX' ? `${date.getTime() / 1000}` : date.toString()
}

export function oandaTimeToDate(data: any, dateFormat: 'UNIX' | 'RFC3339' = 'UNIX') {
  return dateFormat === 'UNIX' ? new Date(Number(data) * 1000) : new Date(data)
}
