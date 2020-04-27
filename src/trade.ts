import { Definition, Property, Field } from './base'

import * as transaction from './transaction'
import * as order from './order'
import * as primitives from './primitives'

export const Trade_Properties = [
  new Property(
    'id',
    'Trade ID',
    "The Trade's identifier, unique within the Trade's Account.",
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'instrument',
    'Instrument',
    "The Trade's Instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'price',
    'Fill Price',
    'The execution price of the Trade.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'openTime',
    'Open Time',
    'The date/time when the Trade was opened.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'state',
    'State',
    'The current state of the Trade.',
    'primitive',
    'trade.TradeState',
  ),
  new Property(
    'initialUnits',
    'Initial Trade Units',
    'The initial size of the Trade. Negative values indicate a short Trade, and positive values indicate a long Trade.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'initialMarginRequired',
    'Initial Margin Required',
    "The margin required at the time the Trade was created. Note, this is the 'pure' margin required, it is not the 'effective' margin used that factors in the trade risk if a GSLO is attached to the trade.",
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'currentUnits',
    'Current Open Trade Units',
    'The number of units currently open for the Trade. This value is reduced to 0.0 as the Trade is closed.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'realizedPL',
    'Realized Profit/Loss',
    'The total profit/loss realized on the closed portion of the Trade.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'unrealizedPL',
    'Unrealized Profit/Loss',
    'The unrealized profit/loss on the open portion of the Trade.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'marginUsed',
    'Margin Used',
    'Margin currently used by the Trade.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'averageClosePrice',
    'Average Close Price',
    'The average closing price of the Trade. Only present if the Trade has been closed or reduced at least once.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'closingTransactionIDs',
    'Closing Transaction IDs',
    'The IDs of the Transactions that have closed portions of this Trade.',
    'array_primitive',
    'TransactionID',
  ),
  new Property(
    'financing',
    'Financing',
    'The financing paid/collected for this Trade.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'closeTime',
    'Close Time',
    'The date/time when the Trade was fully closed. Only provided for Trades whose state is CLOSED.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'clientExtensions',
    'Client Extensions',
    'The client extensions of the Trade.',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'takeProfitOrder',
    'Take Profit Order',
    "Full representation of the Trade's Take Profit Order, only provided if such an Order exists.",
    'object',
    'order.TakeProfitOrder',
  ),
  new Property(
    'stopLossOrder',
    'Stop Loss Order',
    "Full representation of the Trade's Stop Loss Order, only provided if such an Order exists.",
    'object',
    'order.StopLossOrder',
  ),
  new Property(
    'trailingStopLossOrder',
    'Trailing Stop Loss Order',
    "Full representation of the Trade's Trailing Stop Loss Order, only provided if such an Order exists.",
    'object',
    'order.TrailingStopLossOrder',
  ),
]

export class Trade extends Definition {
  /**
   * The Trade's identifier, unique within the Trade's Account.
   */
  public id: primitives.TradeID

  /**
   * The Trade's Instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * The execution price of the Trade.
   */
  public price: primitives.PriceValue

  /**
   * The date/time when the Trade was opened.
   */
  public openTime: primitives.DateTime

  /**
   * The current state of the Trade.
   */
  public state: primitives.TradeState

  /**
   * The initial size of the Trade. Negative values indicate a short Trade, and positive values indicate a long Trade.
   */
  public initialUnits: primitives.DecimalNumber

  /**
   * The margin required at the time the Trade was created. Note, this is the 'pure' margin required, it is not the 'effective' margin used that factors in the trade risk if a GSLO is attached to the trade.
   */
  public initialMarginRequired: primitives.AccountUnits

  /**
   * The number of units currently open for the Trade. This value is reduced to 0.0 as the Trade is closed.
   */
  public currentUnits: primitives.DecimalNumber

  /**
   * The total profit/loss realized on the closed portion of the Trade.
   */
  public realizedPL: primitives.AccountUnits

  /**
   * The unrealized profit/loss on the open portion of the Trade.
   */
  public unrealizedPL: primitives.AccountUnits

  /**
   * Margin currently used by the Trade.
   */
  public marginUsed: primitives.AccountUnits

  /**
   * The average closing price of the Trade. Only present if the Trade has been closed or reduced at least once.
   */
  public averageClosePrice: primitives.PriceValue

  /**
   * The IDs of the Transactions that have closed portions of this Trade.
   */
  public closingTransactionIDs: primitives.TransactionID[]

  /**
   * The financing paid/collected for this Trade.
   */
  public financing: primitives.AccountUnits

  /**
   * The date/time when the Trade was fully closed. Only provided for Trades whose state is CLOSED.
   */
  public closeTime: primitives.DateTime

  /**
   * The client extensions of the Trade.
   */
  public clientExtensions: transaction.ClientExtensions

  /**
   * Full representation of the Trade's Take Profit Order, only provided if such an Order exists.
   */
  public takeProfitOrder: order.TakeProfitOrder

  /**
   * Full representation of the Trade's Stop Loss Order, only provided if such an Order exists.
   */
  public stopLossOrder: order.StopLossOrder

  /**
   * Full representation of the Trade's Trailing Stop Loss Order, only provided if such an Order exists.
   */
  public trailingStopLossOrder: order.TrailingStopLossOrder

  constructor(data) {
    super()

    this._summaryFormat = '{currentUnits} ({initialUnits}) of {instrument} @ {price}'

    this._nameFormat = 'Trade {id}'

    this._properties = Trade_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['openTime'] !== undefined) {
      this.openTime = data['openTime']
    }

    if (data['state'] !== undefined) {
      this.state = data['state']
    }

    if (data['initialUnits'] !== undefined) {
      this.initialUnits = data['initialUnits']
    }

    if (data['initialMarginRequired'] !== undefined) {
      this.initialMarginRequired = data['initialMarginRequired']
    }

    if (data['currentUnits'] !== undefined) {
      this.currentUnits = data['currentUnits']
    }

    if (data['realizedPL'] !== undefined) {
      this.realizedPL = data['realizedPL']
    }

    if (data['unrealizedPL'] !== undefined) {
      this.unrealizedPL = data['unrealizedPL']
    }

    if (data['marginUsed'] !== undefined) {
      this.marginUsed = data['marginUsed']
    }

    if (data['averageClosePrice'] !== undefined) {
      this.averageClosePrice = data['averageClosePrice']
    }

    if (data['closingTransactionIDs'] !== undefined) {
      this.closingTransactionIDs = data['closingTransactionIDs']
    }

    if (data['financing'] !== undefined) {
      this.financing = data['financing']
    }

    if (data['closeTime'] !== undefined) {
      this.closeTime = data['closeTime']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions'])
    }

    if (data['takeProfitOrder'] !== undefined) {
      this.takeProfitOrder = new order.TakeProfitOrder(data['takeProfitOrder'])
    }

    if (data['stopLossOrder'] !== undefined) {
      this.stopLossOrder = new order.StopLossOrder(data['stopLossOrder'])
    }

    if (data['trailingStopLossOrder'] !== undefined) {
      this.trailingStopLossOrder = new order.TrailingStopLossOrder(data['trailingStopLossOrder'])
    }
  }
}

export const TradeSummary_Properties = [
  new Property(
    'id',
    'Trade ID',
    "The Trade's identifier, unique within the Trade's Account.",
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'instrument',
    'Instrument',
    "The Trade's Instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'price',
    'Fill Price',
    'The execution price of the Trade.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'openTime',
    'Open Time',
    'The date/time when the Trade was opened.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'state',
    'State',
    'The current state of the Trade.',
    'primitive',
    'trade.TradeState',
  ),
  new Property(
    'initialUnits',
    'Initial Trade Units',
    'The initial size of the Trade. Negative values indicate a short Trade, and positive values indicate a long Trade.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'initialMarginRequired',
    'Initial Margin Required',
    "The margin required at the time the Trade was created. Note, this is the 'pure' margin required, it is not the 'effective' margin used that factors in the trade risk if a GSLO is attached to the trade.",
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'currentUnits',
    'Current Open Trade Units',
    'The number of units currently open for the Trade. This value is reduced to 0.0 as the Trade is closed.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'realizedPL',
    'Realized Profit/Loss',
    'The total profit/loss realized on the closed portion of the Trade.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'unrealizedPL',
    'Unrealized Profit/Loss',
    'The unrealized profit/loss on the open portion of the Trade.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'marginUsed',
    'Margin Used',
    'Margin currently used by the Trade.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'averageClosePrice',
    'Average Close Price',
    'The average closing price of the Trade. Only present if the Trade has been closed or reduced at least once.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'closingTransactionIDs',
    'Closing Transaction IDs',
    'The IDs of the Transactions that have closed portions of this Trade.',
    'array_primitive',
    'TransactionID',
  ),
  new Property(
    'financing',
    'Financing',
    'The financing paid/collected for this Trade.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'closeTime',
    'Close Time',
    'The date/time when the Trade was fully closed. Only provided for Trades whose state is CLOSED.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'clientExtensions',
    'Client Extensions',
    'The client extensions of the Trade.',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'takeProfitOrderID',
    'Take Profit Order ID',
    "ID of the Trade's Take Profit Order, only provided if such an Order exists.",
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'stopLossOrderID',
    'Stop Loss Order ID',
    "ID of the Trade's Stop Loss Order, only provided if such an Order exists.",
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'trailingStopLossOrderID',
    'Trailing Stop Loss Order ID',
    "ID of the Trade's Trailing Stop Loss Order, only provided if such an Order exists.",
    'primitive',
    'order.OrderID',
  ),
]

export class TradeSummary extends Definition {
  /**
   * The Trade's identifier, unique within the Trade's Account.
   */
  public id: primitives.TradeID

  /**
   * The Trade's Instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * The execution price of the Trade.
   */
  public price: primitives.PriceValue

  /**
   * The date/time when the Trade was opened.
   */
  public openTime: primitives.DateTime

  /**
   * The current state of the Trade.
   */
  public state: primitives.TradeState

  /**
   * The initial size of the Trade. Negative values indicate a short Trade, and positive values indicate a long Trade.
   */
  public initialUnits: primitives.DecimalNumber

  /**
   * The margin required at the time the Trade was created. Note, this is the 'pure' margin required, it is not the 'effective' margin used that factors in the trade risk if a GSLO is attached to the trade.
   */
  public initialMarginRequired: primitives.AccountUnits

  /**
   * The number of units currently open for the Trade. This value is reduced to 0.0 as the Trade is closed.
   */
  public currentUnits: primitives.DecimalNumber

  /**
   * The total profit/loss realized on the closed portion of the Trade.
   */
  public realizedPL: primitives.AccountUnits

  /**
   * The unrealized profit/loss on the open portion of the Trade.
   */
  public unrealizedPL: primitives.AccountUnits

  /**
   * Margin currently used by the Trade.
   */
  public marginUsed: primitives.AccountUnits

  /**
   * The average closing price of the Trade. Only present if the Trade has been closed or reduced at least once.
   */
  public averageClosePrice: primitives.PriceValue

  /**
   * The IDs of the Transactions that have closed portions of this Trade.
   */
  public closingTransactionIDs: primitives.TransactionID[]

  /**
   * The financing paid/collected for this Trade.
   */
  public financing: primitives.AccountUnits

  /**
   * The date/time when the Trade was fully closed. Only provided for Trades whose state is CLOSED.
   */
  public closeTime: primitives.DateTime

  /**
   * The client extensions of the Trade.
   */
  public clientExtensions: transaction.ClientExtensions

  /**
   * ID of the Trade's Take Profit Order, only provided if such an Order exists.
   */
  public takeProfitOrderID: primitives.OrderID

  /**
   * ID of the Trade's Stop Loss Order, only provided if such an Order exists.
   */
  public stopLossOrderID: primitives.OrderID

  /**
   * ID of the Trade's Trailing Stop Loss Order, only provided if such an Order exists.
   */
  public trailingStopLossOrderID: primitives.OrderID

  constructor(data) {
    super()

    this._summaryFormat = '{currentUnits} ({initialUnits}) of {instrument} @ {price}'

    this._nameFormat = 'Trade {id}'

    this._properties = TradeSummary_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['openTime'] !== undefined) {
      this.openTime = data['openTime']
    }

    if (data['state'] !== undefined) {
      this.state = data['state']
    }

    if (data['initialUnits'] !== undefined) {
      this.initialUnits = data['initialUnits']
    }

    if (data['initialMarginRequired'] !== undefined) {
      this.initialMarginRequired = data['initialMarginRequired']
    }

    if (data['currentUnits'] !== undefined) {
      this.currentUnits = data['currentUnits']
    }

    if (data['realizedPL'] !== undefined) {
      this.realizedPL = data['realizedPL']
    }

    if (data['unrealizedPL'] !== undefined) {
      this.unrealizedPL = data['unrealizedPL']
    }

    if (data['marginUsed'] !== undefined) {
      this.marginUsed = data['marginUsed']
    }

    if (data['averageClosePrice'] !== undefined) {
      this.averageClosePrice = data['averageClosePrice']
    }

    if (data['closingTransactionIDs'] !== undefined) {
      this.closingTransactionIDs = data['closingTransactionIDs']
    }

    if (data['financing'] !== undefined) {
      this.financing = data['financing']
    }

    if (data['closeTime'] !== undefined) {
      this.closeTime = data['closeTime']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions'])
    }

    if (data['takeProfitOrderID'] !== undefined) {
      this.takeProfitOrderID = data['takeProfitOrderID']
    }

    if (data['stopLossOrderID'] !== undefined) {
      this.stopLossOrderID = data['stopLossOrderID']
    }

    if (data['trailingStopLossOrderID'] !== undefined) {
      this.trailingStopLossOrderID = data['trailingStopLossOrderID']
    }
  }
}

export const CalculatedTradeState_Properties = [
  new Property('id', 'Trade ID', "The Trade's ID.", 'primitive', 'trade.TradeID'),
  new Property(
    'unrealizedPL',
    'Trade UPL',
    "The Trade's unrealized profit/loss.",
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'marginUsed',
    'Margin Used',
    'Margin currently used by the Trade.',
    'primitive',
    'primitives.AccountUnits',
  ),
]

export class CalculatedTradeState extends Definition {
  /**
   * The Trade's ID.
   */
  public id: primitives.TradeID

  /**
   * The Trade's unrealized profit/loss.
   */
  public unrealizedPL: primitives.AccountUnits

  /**
   * Margin currently used by the Trade.
   */
  public marginUsed: primitives.AccountUnits

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = CalculatedTradeState_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['unrealizedPL'] !== undefined) {
      this.unrealizedPL = data['unrealizedPL']
    }

    if (data['marginUsed'] !== undefined) {
      this.marginUsed = data['marginUsed']
    }
  }
}

export class EntitySpec {
  public Trade = Trade
  public TradeSummary = TradeSummary
  public CalculatedTradeState = CalculatedTradeState

  constructor(public context: any) {}

  list(accountID, queryParams, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/accounts/{accountID}/trades'

    queryParams = queryParams || {}

    path = path.replace('{' + 'accountID' + '}', accountID)

    path = path + '?'
    if (typeof queryParams['ids'] !== 'undefined') {
      path = path + 'ids=' + queryParams['ids'] + '&'
    }
    if (typeof queryParams['state'] !== 'undefined') {
      path = path + 'state=' + queryParams['state'] + '&'
    }
    if (typeof queryParams['instrument'] !== 'undefined') {
      path = path + 'instrument=' + queryParams['instrument'] + '&'
    }
    if (typeof queryParams['count'] !== 'undefined') {
      path = path + 'count=' + queryParams['count'] + '&'
    }
    if (typeof queryParams['beforeID'] !== 'undefined') {
      path = path + 'beforeID=' + queryParams['beforeID'] + '&'
    }

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['trades'] !== undefined) {
            response.body.trades = msg['trades'].map((x) => new Trade(x))
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('GET', path, body, undefined, handleResponse)
  }

  listOpen(accountID, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/accounts/{accountID}/openTrades'

    path = path.replace('{' + 'accountID' + '}', accountID)

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['trades'] !== undefined) {
            response.body.trades = msg['trades'].map((x) => new Trade(x))
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('GET', path, body, undefined, handleResponse)
  }

  get(accountID, tradeSpecifier, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/accounts/{accountID}/trades/{tradeSpecifier}'

    path = path.replace('{' + 'accountID' + '}', accountID)
    path = path.replace('{' + 'tradeSpecifier' + '}', tradeSpecifier)

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['trade'] !== undefined) {
            response.body.trade = new Trade(msg['trade'])
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('GET', path, body, undefined, handleResponse)
  }

  close(accountID, tradeSpecifier, bodyParams, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/accounts/{accountID}/trades/{tradeSpecifier}/close'

    bodyParams = bodyParams || {}

    path = path.replace('{' + 'accountID' + '}', accountID)
    path = path.replace('{' + 'tradeSpecifier' + '}', tradeSpecifier)

    let body = {}

    if (typeof bodyParams['units'] !== 'undefined') {
      body['units'] = bodyParams['units']
    }

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['orderCreateTransaction'] !== undefined) {
            response.body.orderCreateTransaction = new transaction.MarketOrderTransaction(
              msg['orderCreateTransaction'],
            )
          }

          if (msg['orderFillTransaction'] !== undefined) {
            response.body.orderFillTransaction = new transaction.OrderFillTransaction(
              msg['orderFillTransaction'],
            )
          }

          if (msg['orderCancelTransaction'] !== undefined) {
            response.body.orderCancelTransaction = new transaction.OrderCancelTransaction(
              msg['orderCancelTransaction'],
            )
          }

          if (msg['relatedTransactionIDs'] !== undefined) {
            response.body.relatedTransactionIDs = msg['relatedTransactionIDs']
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }
        } else if (response.statusCode == 400) {
          if (msg['orderRejectTransaction'] !== undefined) {
            response.body.orderRejectTransaction = new transaction.MarketOrderRejectTransaction(
              msg['orderRejectTransaction'],
            )
          }

          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
          if (msg['orderRejectTransaction'] !== undefined) {
            response.body.orderRejectTransaction = new transaction.MarketOrderRejectTransaction(
              msg['orderRejectTransaction'],
            )
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }

          if (msg['relatedTransactionIDs'] !== undefined) {
            response.body.relatedTransactionIDs = msg['relatedTransactionIDs']
          }

          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('PUT', path, body, undefined, handleResponse)
  }

  setClientExtensions(accountID, tradeSpecifier, bodyParams, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/accounts/{accountID}/trades/{tradeSpecifier}/clientExtensions'

    bodyParams = bodyParams || {}

    path = path.replace('{' + 'accountID' + '}', accountID)
    path = path.replace('{' + 'tradeSpecifier' + '}', tradeSpecifier)

    let body = {}

    if (typeof bodyParams['clientExtensions'] !== 'undefined') {
      body['clientExtensions'] = bodyParams['clientExtensions']
    }

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['tradeClientExtensionsModifyTransaction'] !== undefined) {
            response.body.tradeClientExtensionsModifyTransaction = new transaction.TradeClientExtensionsModifyTransaction(
              msg['tradeClientExtensionsModifyTransaction'],
            )
          }

          if (msg['relatedTransactionIDs'] !== undefined) {
            response.body.relatedTransactionIDs = msg['relatedTransactionIDs']
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }
        } else if (response.statusCode == 400) {
          if (msg['tradeClientExtensionsModifyRejectTransaction'] !== undefined) {
            response.body.tradeClientExtensionsModifyRejectTransaction = new transaction.TradeClientExtensionsModifyRejectTransaction(
              msg['tradeClientExtensionsModifyRejectTransaction'],
            )
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }

          if (msg['relatedTransactionIDs'] !== undefined) {
            response.body.relatedTransactionIDs = msg['relatedTransactionIDs']
          }

          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
          if (msg['tradeClientExtensionsModifyRejectTransaction'] !== undefined) {
            response.body.tradeClientExtensionsModifyRejectTransaction = new transaction.TradeClientExtensionsModifyRejectTransaction(
              msg['tradeClientExtensionsModifyRejectTransaction'],
            )
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }

          if (msg['relatedTransactionIDs'] !== undefined) {
            response.body.relatedTransactionIDs = msg['relatedTransactionIDs']
          }

          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('PUT', path, body, undefined, handleResponse)
  }

  setDependentOrders(accountID, tradeSpecifier, bodyParams, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/accounts/{accountID}/trades/{tradeSpecifier}/orders'

    bodyParams = bodyParams || {}

    path = path.replace('{' + 'accountID' + '}', accountID)
    path = path.replace('{' + 'tradeSpecifier' + '}', tradeSpecifier)

    let body = {}

    if (typeof bodyParams['takeProfit'] !== 'undefined') {
      body['takeProfit'] = bodyParams['takeProfit']
    }

    if (typeof bodyParams['stopLoss'] !== 'undefined') {
      body['stopLoss'] = bodyParams['stopLoss']
    }

    if (typeof bodyParams['trailingStopLoss'] !== 'undefined') {
      body['trailingStopLoss'] = bodyParams['trailingStopLoss']
    }

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['takeProfitOrderCancelTransaction'] !== undefined) {
            response.body.takeProfitOrderCancelTransaction = new transaction.OrderCancelTransaction(
              msg['takeProfitOrderCancelTransaction'],
            )
          }

          if (msg['takeProfitOrderTransaction'] !== undefined) {
            response.body.takeProfitOrderTransaction = new transaction.TakeProfitOrderTransaction(
              msg['takeProfitOrderTransaction'],
            )
          }

          if (msg['takeProfitOrderFillTransaction'] !== undefined) {
            response.body.takeProfitOrderFillTransaction = new transaction.OrderFillTransaction(
              msg['takeProfitOrderFillTransaction'],
            )
          }

          if (msg['takeProfitOrderCreatedCancelTransaction'] !== undefined) {
            response.body.takeProfitOrderCreatedCancelTransaction = new transaction.OrderCancelTransaction(
              msg['takeProfitOrderCreatedCancelTransaction'],
            )
          }

          if (msg['stopLossOrderCancelTransaction'] !== undefined) {
            response.body.stopLossOrderCancelTransaction = new transaction.OrderCancelTransaction(
              msg['stopLossOrderCancelTransaction'],
            )
          }

          if (msg['stopLossOrderTransaction'] !== undefined) {
            response.body.stopLossOrderTransaction = new transaction.StopLossOrderTransaction(
              msg['stopLossOrderTransaction'],
            )
          }

          if (msg['stopLossOrderFillTransaction'] !== undefined) {
            response.body.stopLossOrderFillTransaction = new transaction.OrderFillTransaction(
              msg['stopLossOrderFillTransaction'],
            )
          }

          if (msg['stopLossOrderCreatedCancelTransaction'] !== undefined) {
            response.body.stopLossOrderCreatedCancelTransaction = new transaction.OrderCancelTransaction(
              msg['stopLossOrderCreatedCancelTransaction'],
            )
          }

          if (msg['trailingStopLossOrderCancelTransaction'] !== undefined) {
            response.body.trailingStopLossOrderCancelTransaction = new transaction.OrderCancelTransaction(
              msg['trailingStopLossOrderCancelTransaction'],
            )
          }

          if (msg['trailingStopLossOrderTransaction'] !== undefined) {
            response.body.trailingStopLossOrderTransaction = new transaction.TrailingStopLossOrderTransaction(
              msg['trailingStopLossOrderTransaction'],
            )
          }

          if (msg['relatedTransactionIDs'] !== undefined) {
            response.body.relatedTransactionIDs = msg['relatedTransactionIDs']
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }
        } else if (response.statusCode == 400) {
          if (msg['takeProfitOrderCancelRejectTransaction'] !== undefined) {
            response.body.takeProfitOrderCancelRejectTransaction = new transaction.OrderCancelRejectTransaction(
              msg['takeProfitOrderCancelRejectTransaction'],
            )
          }

          if (msg['takeProfitOrderRejectTransaction'] !== undefined) {
            response.body.takeProfitOrderRejectTransaction = new transaction.TakeProfitOrderRejectTransaction(
              msg['takeProfitOrderRejectTransaction'],
            )
          }

          if (msg['stopLossOrderCancelRejectTransaction'] !== undefined) {
            response.body.stopLossOrderCancelRejectTransaction = new transaction.OrderCancelRejectTransaction(
              msg['stopLossOrderCancelRejectTransaction'],
            )
          }

          if (msg['stopLossOrderRejectTransaction'] !== undefined) {
            response.body.stopLossOrderRejectTransaction = new transaction.StopLossOrderRejectTransaction(
              msg['stopLossOrderRejectTransaction'],
            )
          }

          if (msg['trailingStopLossOrderCancelRejectTransaction'] !== undefined) {
            response.body.trailingStopLossOrderCancelRejectTransaction = new transaction.OrderCancelRejectTransaction(
              msg['trailingStopLossOrderCancelRejectTransaction'],
            )
          }

          if (msg['trailingStopLossOrderRejectTransaction'] !== undefined) {
            response.body.trailingStopLossOrderRejectTransaction = new transaction.TrailingStopLossOrderRejectTransaction(
              msg['trailingStopLossOrderRejectTransaction'],
            )
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }

          if (msg['relatedTransactionIDs'] !== undefined) {
            response.body.relatedTransactionIDs = msg['relatedTransactionIDs']
          }

          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('PUT', path, body, undefined, handleResponse)
  }
}

///////////////////////////////////////////////////////////////////////////////

export interface TradeListRequest {
  ids: string
  state: primitives.TradeStateFilter
  instrument: primitives.InstrumentName
  count: number
  beforeID: primitives.TradeID
}

export interface TradeCloseRequest {
  body: TradeCloseRequestBody
}
export interface TradeCloseRequestBody {
  /**
   * Indication of how much of the Trade to close. Either the string “ALL”
   * (indicating that all of the Trade should be closed), or a primitives.DecimalNumber
   * representing the number of units of the open Trade to Close using a
   * TradeClose MarketOrder. The units specified must always be positive, and
   * the magnitude of the value cannot exceed the magnitude of the Trade’s
   * open units.
   */
  units: string
}

export interface TradeSetClientExtensionsRequest {
  body: TradeSetClientExtensionsRequestBody
}
export interface TradeSetClientExtensionsRequestBody {
  /**
   * The Client Extensions to update the Trade with. Do not add, update, or
   * delete the Client Extensions if your account is associated with MT4.
   */
  clientExtensions?: primitives.ClientExtensions
}

export interface TradeSetDependentOrdersRequest {
  body: TradeSetDependentOrdersRequestBody
}
export interface TradeSetDependentOrdersRequestBody {
  /**
   * The specification of the Take Profit to create/modify/cancel. If
   * takeProfit is set to null, the Take Profit Order will be cancelled if it
   * exists. If takeProfit is not provided, the existing Take Profit Order
   * will not be modified. If a sub-field of takeProfit is not specified, that
   * field will be set to a default value on create, and be inherited by the
   * replacing order on modify.
   */
  takeProfit?: primitives.TakeProfitDetails

  /**
   * The specification of the Stop Loss to create/modify/cancel. If stopLoss
   * is set to null, the Stop Loss Order will be cancelled if it exists. If
   * stopLoss is not provided, the existing Stop Loss Order will not be
   * modified. If a sub-field of stopLoss is not specified, that field will be
   * set to a default value on create, and be inherited by the replacing order
   * on modify.
   */
  stopLoss?: primitives.StopLossDetails

  /**
   * The specification of the Trailing Stop Loss to create/modify/cancel. If
   * trailingStopLoss is set to null, the Trailing Stop Loss Order will be
   * cancelled if it exists. If trailingStopLoss is not provided, the existing
   * Trailing Stop Loss Order will not be modified. If a sub-field of
   * trailingStopLoss is not specified, that field will be set to a default
   * value on create, and be inherited by the replacing order on modify.
   */
  trailingStopLoss?: primitives.TrailingStopLossDetails
}

export type TradeListResult = TradeListResult200

export interface TradeListResult200 {
  /**
   * The list of Trade detail objects
   */
  trades?: Trade[]

  /**
   * The ID of the most recent Transaction created for the Account
   */
  lastTransactionID?: primitives.TransactionID
}

export type TradeListOpenResult = TradeListOpenResult200

export interface TradeListOpenResult200 {
  /**
   * The Account's list of open Trades
   */
  trades?: Trade[]

  /**
   * The ID of the most recent Transaction created for the Account
   */
  lastTransactionID?: primitives.TransactionID
}

export type TradeGetResult = TradeGetResult200

export interface TradeGetResult200 {
  /**
   * The details of the requested trade
   */
  trade?: Trade

  /**
   * The ID of the most recent Transaction created for the Account
   */
  lastTransactionID?: primitives.TransactionID
}

export type TradeCloseResult = TradeCloseResult200 | TradeCloseResult400

export interface TradeCloseResult200 {
  /**
   * The MarketOrder Transaction created to close the Trade.
   */
  orderCreateTransaction?: transaction.MarketOrderTransaction

  /**
   * The OrderFill Transaction that fills the Trade-closing MarketOrder and
   * closes the Trade.
   */
  orderFillTransaction?: transaction.OrderFillTransaction

  /**
   * The OrderCancel Transaction that immediately cancelled the Trade-closing
   * MarketOrder.
   */
  orderCancelTransaction?: transaction.OrderCancelTransaction

  /**
   * The IDs of all Transactions that were created while satisfying the
   * request.
   */
  relatedTransactionIDs?: primitives.TransactionID[]

  /**
   * The ID of the most recent Transaction created for the Account
   */
  lastTransactionID?: primitives.TransactionID
}

export interface TradeCloseResult400 {
  /**
   * The MarketOrderReject Transaction that rejects the creation of the Trade-
   * closing MarketOrder.
   */
  orderRejectTransaction?: transaction.MarketOrderRejectTransaction

  /**
   * The code of the error that has occurred. This field may not be returned
   * for some errors.
   */
  errorCode?: string

  /**
   * The human-readable description of the error that has occurred.
   */
  errorMessage: string
}

export type TradeSetClientExtensionsResult =
  | TradeSetClientExtensionsResult200
  | TradeSetClientExtensionsResult400

export interface TradeSetClientExtensionsResult200 {
  /**
   * The Transaction that updates the Trade's Client Extensions.
   */
  tradeClientExtensionsModifyTransaction?: transaction.TradeClientExtensionsModifyTransaction

  /**
   * The IDs of all Transactions that were created while satisfying the
   * request.
   */
  relatedTransactionIDs?: primitives.TransactionID[]

  /**
   * The ID of the most recent Transaction created for the Account
   */
  lastTransactionID?: primitives.TransactionID
}

export interface TradeSetClientExtensionsResult400 {
  /**
   * The Transaction that rejects the modification of the Trade's Client
   * Extensions.
   */
  tradeClientExtensionsModifyRejectTransaction?: transaction.TradeClientExtensionsModifyRejectTransaction

  /**
   * The ID of the most recent Transaction created for the Account.
   */
  lastTransactionID?: primitives.TransactionID

  /**
   * The IDs of all Transactions that were created while satisfying the
   * request.
   */
  relatedTransactionIDs?: primitives.TransactionID[]

  /**
   * The code of the error that has occurred. This field may not be returned
   * for some errors.
   */
  errorCode?: string

  /**
   * The human-readable description of the error that has occurred.
   */
  errorMessage: string
}

export type TradeSetDependentOrdersResult =
  | TradeSetDependentOrdersResult200
  | TradeSetDependentOrdersResult400

export interface TradeSetDependentOrdersResult200 {
  /**
   * The Transaction created that cancels the Trade's existing Take Profit
   * Order.
   */
  takeProfitOrderCancelTransaction?: transaction.OrderCancelTransaction

  /**
   * The Transaction created that creates a new Take Profit Order for the
   * Trade.
   */
  takeProfitOrderTransaction?: transaction.TakeProfitOrderTransaction

  /**
   * The Transaction created that immediately fills the Trade&#x2019;s new Take
   * Profit Order. Only provided if the new Take Profit Order was immediately
   * filled.
   */
  takeProfitOrderFillTransaction?: transaction.OrderFillTransaction

  /**
   * The Transaction created that immediately cancels the Trade&#x2019;s new Take
   * Profit Order. Only provided if the new Take Profit Order was immediately
   * cancelled.
   */
  takeProfitOrderCreatedCancelTransaction?: transaction.OrderCancelTransaction

  /**
   * The Transaction created that cancels the Trade&#x2019;s existing Stop Loss
   * Order.
   */
  stopLossOrderCancelTransaction?: transaction.OrderCancelTransaction

  /**
   * The Transaction created that creates a new Stop Loss Order for the Trade.
   */
  stopLossOrderTransaction?: transaction.StopLossOrderTransaction

  /**
   * The Transaction created that immediately fills the Trade&#x2019;s new Stop
   * Order. Only provided if the new Stop Loss Order was immediately filled.
   */
  stopLossOrderFillTransaction?: transaction.OrderFillTransaction

  /**
   * The Transaction created that immediately cancels the Trade&#x2019;s new Stop
   * Loss Order. Only provided if the new Stop Loss Order was immediately
   * cancelled.
   */
  stopLossOrderCreatedCancelTransaction?: transaction.OrderCancelTransaction

  /**
   * The Transaction created that cancels the Trade&#x2019;s existing Trailing Stop
   * Loss Order.
   */
  trailingStopLossOrderCancelTransaction?: transaction.OrderCancelTransaction

  /**
   * The Transaction created that creates a new Trailing Stop Loss Order for
   * the Trade.
   */
  trailingStopLossOrderTransaction?: transaction.TrailingStopLossOrderTransaction

  /**
   * The IDs of all Transactions that were created while satisfying the
   * request.
   */
  relatedTransactionIDs?: primitives.TransactionID[]

  /**
   * The ID of the most recent Transaction created for the Account
   */
  lastTransactionID?: primitives.TransactionID
}

export interface TradeSetDependentOrdersResult400 {
  /**
   * An OrderCancelRejectTransaction represents the rejection of the
   * cancellation of an Order in the client's Account.
   */
  takeProfitOrderCancelRejectTransaction?: transaction.OrderCancelRejectTransaction

  /**
   * A TakeProfitOrderRejectTransaction represents the rejection of the
   * creation of a TakeProfit Order.
   */
  takeProfitOrderRejectTransaction?: transaction.TakeProfitOrderRejectTransaction

  /**
   * An OrderCancelRejectTransaction represents the rejection of the
   * cancellation of an Order in the client&#x2019;s Account.
   */
  stopLossOrderCancelRejectTransaction?: transaction.OrderCancelRejectTransaction

  /**
   * A StopLossOrderRejectTransaction represents the rejection of the creation
   * of a StopLoss Order.
   */
  stopLossOrderRejectTransaction?: transaction.StopLossOrderRejectTransaction

  /**
   * An OrderCancelRejectTransaction represents the rejection of the
   * cancellation of an Order in the client&#x2019;s Account.
   */
  trailingStopLossOrderCancelRejectTransaction?: transaction.OrderCancelRejectTransaction

  /**
   * A TrailingStopLossOrderRejectTransaction represents the rejection of the
   * creation of a TrailingStopLoss Order.
   */
  trailingStopLossOrderRejectTransaction?: transaction.TrailingStopLossOrderRejectTransaction

  /**
   * The ID of the most recent Transaction created for the Account.
   */
  lastTransactionID?: primitives.TransactionID

  /**
   * The IDs of all Transactions that were created while satisfying the
   * request.
   */
  relatedTransactionIDs?: primitives.TransactionID[]

  /**
   * The code of the error that has occurred. This field may not be returned
   * for some errors.
   */
  errorCode?: string

  /**
   * The human-readable description of the error that has occurred.
   */
  errorMessage: string
}

export class API {
  constructor(private context: any, private resolver: any) {}

  async list(accountID: primitives.AccountID, body: TradeListRequest): Promise<TradeListResult> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).list(accountID, body, this.resolver(resolve, reject))
    })
  }
  async listOpen(accountID: primitives.AccountID): Promise<TradeListOpenResult> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).listOpen(accountID, this.resolver(resolve, reject))
    })
  }
  async get(
    accountID: primitives.AccountID,
    tradeSpecifier: primitives.TradeSpecifier,
  ): Promise<TradeGetResult> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).get(accountID, tradeSpecifier, this.resolver(resolve, reject))
    })
  }
  async close(
    accountID: primitives.AccountID,
    tradeSpecifier: primitives.TradeSpecifier,
    body: TradeCloseRequest,
  ): Promise<TradeCloseResult> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).close(
        accountID,
        tradeSpecifier,
        body,
        this.resolver(resolve, reject),
      )
    })
  }
  async setClientExtensions(
    accountID: primitives.AccountID,
    tradeSpecifier: primitives.TradeSpecifier,
    body: TradeSetClientExtensionsRequest,
  ): Promise<TradeSetClientExtensionsResult> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).setClientExtensions(
        accountID,
        tradeSpecifier,
        body,
        this.resolver(resolve, reject),
      )
    })
  }
  async setDependentOrders(
    accountID: primitives.AccountID,
    tradeSpecifier: primitives.TradeSpecifier,
    body: TradeSetDependentOrdersRequest,
  ): Promise<TradeSetDependentOrdersResult> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).setDependentOrders(
        accountID,
        tradeSpecifier,
        body,
        this.resolver(resolve, reject),
      )
    })
  }
}
