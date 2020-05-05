import * as context from './context'
import * as account from './api/account'
import * as position from './api/position'
import * as pricing from './api/pricing'
import * as transaction from './api/transaction'
import * as trade from './api/trade'
import * as order from './api/order'
import * as instrument from './api/instrument'

const url = {
  practice: {
    api: 'api-fxpractice.oanda.com',
    stream: 'stream-fxpractice.oanda.com',
  },
  production: {
    api: 'https://api-fxtrade.oanda.com',
    stream: 'https://stream-fxtrade.oanda.com',
  },
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
          new Error(
            'Bad request: https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400',
          ),
        )
        return
      case '401':
        reject(
          new Error(
            'Unauthorized: https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400',
          ),
        )
        return
      case '403':
        reject(
          new Error(
            'Forbidden: https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400',
          ),
        )
        return
      case '404':
        reject(
          new Error(
            'Not found: https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400',
          ),
        )
        return
      case '405':
        reject(
          new Error(
            'Method not allowed: https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400',
          ),
        )
        return
      default: {
        if (res.statusCode.startsWith('2')) {
          resolve(res.body)
          return
        }

        reject(new Error(`Unhandled status code: ${res.statusCode}`))
        return
      }
    }
  }
}

class OANDA {
  public context: context.Context
  public account: account.API
  public position: position.API
  public pricing: pricing.API
  public transaction: transaction.API
  public trade: trade.API
  public order: order.API
  public instrument: instrument.API

  constructor(
    applicationName: string,
    url: string,
    token: string,
    dateFormat: 'UNIX' | 'RFC3339' = 'UNIX',
  ) {
    const ctx = new context.Context(url, 443, true, applicationName)
    ctx.setToken(token)
    if (dateFormat === 'UNIX') {
      ctx.headers['Accept-Datetime-Format'] = 'UNIX'
    }

    this.context = ctx
    this.account = new account.API(ctx, resolver)
    this.position = new position.API(ctx, resolver)
    this.pricing = new pricing.API(ctx, resolver)
    this.transaction = new transaction.API(ctx, resolver)
    this.trade = new trade.API(ctx, resolver)
    this.order = new order.API(ctx, resolver)
    this.instrument = new instrument.API(ctx, resolver)
  }
}

export class Rest extends OANDA {
  constructor(
    applicationName: string,
    token: string,
    practice = false,
    dateFormat: 'UNIX' | 'RFC3339' = 'UNIX',
  ) {
    super(applicationName, practice ? url.practice.api : url.production.api, token, dateFormat)
  }
}

export class Stream extends OANDA {
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
  }
}
