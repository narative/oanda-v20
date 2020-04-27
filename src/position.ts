import { Definition, Property, Field } from './base'

import * as transaction from './transaction'
import * as primitives from './primitives'

export const Position_Properties = [
  new Property(
    'instrument',
    'Instrument',
    "The Position's Instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'pl',
    'Profit/Loss',
    'Profit/loss realized by the Position over the lifetime of the Account.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'unrealizedPL',
    'Unrealized Profit/Loss',
    'The unrealized profit/loss of all open Trades that contribute to this Position.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'marginUsed',
    'Margin Used',
    'Margin currently used by the Position.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'resettablePL',
    'Resettable Profit/Loss',
    "Profit/loss realized by the Position since the Account's resettablePL was last reset by the client.",
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'financing',
    'Financing',
    'The total amount of financing paid/collected for this instrument over the lifetime of the Account.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'commission',
    'Commission',
    'The total amount of commission paid for this instrument over the lifetime of the Account.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'guaranteedExecutionFees',
    'Guranteed Execution Fee',
    'The total amount of fees charged over the lifetime of the Account for the execution of guaranteed Stop Loss Orders for this instrument.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'long',
    'Long Side',
    'The details of the long side of the Position.',
    'object',
    'position.PositionSide',
  ),
  new Property(
    'short',
    'Short Side',
    'The details of the short side of the Position.',
    'object',
    'position.PositionSide',
  ),
]

export class Position extends Definition {
  /**
   * The Position's Instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * Profit/loss realized by the Position over the lifetime of the Account.
   */
  public pl: primitives.AccountUnits

  /**
   * The unrealized profit/loss of all open Trades that contribute to this Position.
   */
  public unrealizedPL: primitives.AccountUnits

  /**
   * Margin currently used by the Position.
   */
  public marginUsed: primitives.AccountUnits

  /**
   * Profit/loss realized by the Position since the Account's resettablePL was last reset by the client.
   */
  public resettablePL: primitives.AccountUnits

  /**
   * The total amount of financing paid/collected for this instrument over the lifetime of the Account.
   */
  public financing: primitives.AccountUnits

  /**
   * The total amount of commission paid for this instrument over the lifetime of the Account.
   */
  public commission: primitives.AccountUnits

  /**
   * The total amount of fees charged over the lifetime of the Account for the execution of guaranteed Stop Loss Orders for this instrument.
   */
  public guaranteedExecutionFees: primitives.AccountUnits

  /**
   * The details of the long side of the Position.
   */
  public long: PositionSide

  /**
   * The details of the short side of the Position.
   */
  public short: PositionSide

  constructor(data) {
    super()

    this._summaryFormat = '{instrument}, {pl} PL {unrealizedPL} UPL'

    this._nameFormat = 'Position'

    this._properties = Position_Properties

    data = data || {}

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['pl'] !== undefined) {
      this.pl = data['pl']
    }

    if (data['unrealizedPL'] !== undefined) {
      this.unrealizedPL = data['unrealizedPL']
    }

    if (data['marginUsed'] !== undefined) {
      this.marginUsed = data['marginUsed']
    }

    if (data['resettablePL'] !== undefined) {
      this.resettablePL = data['resettablePL']
    }

    if (data['financing'] !== undefined) {
      this.financing = data['financing']
    }

    if (data['commission'] !== undefined) {
      this.commission = data['commission']
    }

    if (data['guaranteedExecutionFees'] !== undefined) {
      this.guaranteedExecutionFees = data['guaranteedExecutionFees']
    }

    if (data['long'] !== undefined) {
      this.long = new PositionSide(data['long'])
    }

    if (data['short'] !== undefined) {
      this.short = new PositionSide(data['short'])
    }
  }
}

export const PositionSide_Properties = [
  new Property(
    'units',
    'Units',
    'Number of units in the position (negative value indicates short position, positive indicates long position).',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'averagePrice',
    'Average Price',
    'Volume-weighted average of the underlying Trade open prices for the Position.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'tradeIDs',
    'Trade IDs',
    'List of the open Trade IDs which contribute to the open Position.',
    'array_primitive',
    'TradeID',
  ),
  new Property(
    'pl',
    'Profit/Loss',
    'Profit/loss realized by the PositionSide over the lifetime of the Account.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'unrealizedPL',
    'Unrealized Profit/Loss',
    'The unrealized profit/loss of all open Trades that contribute to this PositionSide.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'resettablePL',
    'Resettable Profit/Loss',
    "Profit/loss realized by the PositionSide since the Account's resettablePL was last reset by the client.",
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'financing',
    'Financing',
    'The total amount of financing paid/collected for this PositionSide over the lifetime of the Account.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'guaranteedExecutionFees',
    'Guranteed Execution Fees',
    'The total amount of fees charged over the lifetime of the Account for the execution of guaranteed Stop Loss Orders attached to Trades for this PositionSide.',
    'primitive',
    'primitives.AccountUnits',
  ),
]

export class PositionSide extends Definition {
  /**
   * Number of units in the position (negative value indicates short position, positive indicates long position).
   */
  public units: primitives.DecimalNumber

  /**
   * Volume-weighted average of the underlying Trade open prices for the Position.
   */
  public averagePrice: primitives.PriceValue

  /**
   * List of the open Trade IDs which contribute to the open Position.
   */
  public tradeIDs: primitives.TradeID[]

  /**
   * Profit/loss realized by the PositionSide over the lifetime of the Account.
   */
  public pl: primitives.AccountUnits

  /**
   * The unrealized profit/loss of all open Trades that contribute to this PositionSide.
   */
  public unrealizedPL: primitives.AccountUnits

  /**
   * Profit/loss realized by the PositionSide since the Account's resettablePL was last reset by the client.
   */
  public resettablePL: primitives.AccountUnits

  /**
   * The total amount of financing paid/collected for this PositionSide over the lifetime of the Account.
   */
  public financing: primitives.AccountUnits

  /**
   * The total amount of fees charged over the lifetime of the Account for the execution of guaranteed Stop Loss Orders attached to Trades for this PositionSide.
   */
  public guaranteedExecutionFees: primitives.AccountUnits

  constructor(data) {
    super()

    this._summaryFormat = '{units} @ {averagePrice}, {pl} PL {unrealizedPL} UPL'

    this._nameFormat = ''

    this._properties = PositionSide_Properties

    data = data || {}

    if (data['units'] !== undefined) {
      this.units = data['units']
    }

    if (data['averagePrice'] !== undefined) {
      this.averagePrice = data['averagePrice']
    }

    if (data['tradeIDs'] !== undefined) {
      this.tradeIDs = data['tradeIDs']
    }

    if (data['pl'] !== undefined) {
      this.pl = data['pl']
    }

    if (data['unrealizedPL'] !== undefined) {
      this.unrealizedPL = data['unrealizedPL']
    }

    if (data['resettablePL'] !== undefined) {
      this.resettablePL = data['resettablePL']
    }

    if (data['financing'] !== undefined) {
      this.financing = data['financing']
    }

    if (data['guaranteedExecutionFees'] !== undefined) {
      this.guaranteedExecutionFees = data['guaranteedExecutionFees']
    }
  }
}

export const CalculatedPositionState_Properties = [
  new Property(
    'instrument',
    'Instrument',
    "The Position's Instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'netUnrealizedPL',
    'Net Unrealized Profit/Loss',
    "The Position's net unrealized profit/loss",
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'longUnrealizedPL',
    'Long Unrealized Profit/Loss',
    "The unrealized profit/loss of the Position's long open Trades",
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'shortUnrealizedPL',
    'Short Unrealized Profit/Loss',
    "The unrealized profit/loss of the Position's short open Trades",
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'marginUsed',
    'Margin Used',
    'Margin currently used by the Position.',
    'primitive',
    'primitives.AccountUnits',
  ),
]

export class CalculatedPositionState extends Definition {
  /**
   * The Position's Instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * The Position's net unrealized profit/loss
   */
  public netUnrealizedPL: primitives.AccountUnits

  /**
   * The unrealized profit/loss of the Position's long open Trades
   */
  public longUnrealizedPL: primitives.AccountUnits

  /**
   * The unrealized profit/loss of the Position's short open Trades
   */
  public shortUnrealizedPL: primitives.AccountUnits

  /**
   * Margin currently used by the Position.
   */
  public marginUsed: primitives.AccountUnits

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = CalculatedPositionState_Properties

    data = data || {}

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['netUnrealizedPL'] !== undefined) {
      this.netUnrealizedPL = data['netUnrealizedPL']
    }

    if (data['longUnrealizedPL'] !== undefined) {
      this.longUnrealizedPL = data['longUnrealizedPL']
    }

    if (data['shortUnrealizedPL'] !== undefined) {
      this.shortUnrealizedPL = data['shortUnrealizedPL']
    }

    if (data['marginUsed'] !== undefined) {
      this.marginUsed = data['marginUsed']
    }
  }
}

export class EntitySpec {
  public Position = Position
  public PositionSide = PositionSide
  public CalculatedPositionState = CalculatedPositionState

  constructor(public context: any) {}

  list(accountID, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/accounts/{accountID}/positions'

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
          if (msg['positions'] !== undefined) {
            response.body.positions = msg['positions'].map((x) => new Position(x))
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

    let path = '/v3/accounts/{accountID}/openPositions'

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
          if (msg['positions'] !== undefined) {
            response.body.positions = msg['positions'].map((x) => new Position(x))
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

  get(accountID, instrument, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/accounts/{accountID}/positions/{instrument}'

    path = path.replace('{' + 'accountID' + '}', accountID)
    path = path.replace('{' + 'instrument' + '}', instrument)

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
          if (msg['position'] !== undefined) {
            response.body.position = new Position(msg['position'])
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

  close(accountID, instrument, bodyParams, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/accounts/{accountID}/positions/{instrument}/close'

    bodyParams = bodyParams || {}

    path = path.replace('{' + 'accountID' + '}', accountID)
    path = path.replace('{' + 'instrument' + '}', instrument)

    let body = {}

    if (typeof bodyParams['longUnits'] !== 'undefined') {
      body['longUnits'] = bodyParams['longUnits']
    }

    if (typeof bodyParams['longClientExtensions'] !== 'undefined') {
      body['longClientExtensions'] = bodyParams['longClientExtensions']
    }

    if (typeof bodyParams['shortUnits'] !== 'undefined') {
      body['shortUnits'] = bodyParams['shortUnits']
    }

    if (typeof bodyParams['shortClientExtensions'] !== 'undefined') {
      body['shortClientExtensions'] = bodyParams['shortClientExtensions']
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
          if (msg['longOrderCreateTransaction'] !== undefined) {
            response.body.longOrderCreateTransaction = new transaction.MarketOrderTransaction(
              msg['longOrderCreateTransaction'],
            )
          }

          if (msg['longOrderFillTransaction'] !== undefined) {
            response.body.longOrderFillTransaction = new transaction.OrderFillTransaction(
              msg['longOrderFillTransaction'],
            )
          }

          if (msg['longOrderCancelTransaction'] !== undefined) {
            response.body.longOrderCancelTransaction = new transaction.OrderCancelTransaction(
              msg['longOrderCancelTransaction'],
            )
          }

          if (msg['shortOrderCreateTransaction'] !== undefined) {
            response.body.shortOrderCreateTransaction = new transaction.MarketOrderTransaction(
              msg['shortOrderCreateTransaction'],
            )
          }

          if (msg['shortOrderFillTransaction'] !== undefined) {
            response.body.shortOrderFillTransaction = new transaction.OrderFillTransaction(
              msg['shortOrderFillTransaction'],
            )
          }

          if (msg['shortOrderCancelTransaction'] !== undefined) {
            response.body.shortOrderCancelTransaction = new transaction.OrderCancelTransaction(
              msg['shortOrderCancelTransaction'],
            )
          }

          if (msg['relatedTransactionIDs'] !== undefined) {
            response.body.relatedTransactionIDs = msg['relatedTransactionIDs']
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }
        } else if (response.statusCode == 400) {
          if (msg['longOrderRejectTransaction'] !== undefined) {
            response.body.longOrderRejectTransaction = new transaction.MarketOrderRejectTransaction(
              msg['longOrderRejectTransaction'],
            )
          }

          if (msg['shortOrderRejectTransaction'] !== undefined) {
            response.body.shortOrderRejectTransaction = new transaction.MarketOrderRejectTransaction(
              msg['shortOrderRejectTransaction'],
            )
          }

          if (msg['relatedTransactionIDs'] !== undefined) {
            response.body.relatedTransactionIDs = msg['relatedTransactionIDs']
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }

          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
          if (msg['longOrderRejectTransaction'] !== undefined) {
            response.body.longOrderRejectTransaction = new transaction.MarketOrderRejectTransaction(
              msg['longOrderRejectTransaction'],
            )
          }

          if (msg['shortOrderRejectTransaction'] !== undefined) {
            response.body.shortOrderRejectTransaction = new transaction.MarketOrderRejectTransaction(
              msg['shortOrderRejectTransaction'],
            )
          }

          if (msg['relatedTransactionIDs'] !== undefined) {
            response.body.relatedTransactionIDs = msg['relatedTransactionIDs']
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
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
}

///////////////////////////////////////////////////////////////////////////////

export interface PositionCloseRequest {
  body: PositionCloseRequestBody
}
export interface PositionCloseRequestBody {
  /**
   * Indication of how much of the long Position to closeout. Either the
   * string “ALL”, the string “NONE”, or a primitives.DecimalNumber representing how many
   * units of the long position to close using a PositionCloseout MarketOrder.
   * The units specified must always be positive.
   */
  longUnits: string

  /**
     * The client extensions to add to the MarketOrder used to close the long
    /**
     */
  longClientExtensions?: primitives.ClientExtensions

  /**
   * Indication of how much of the short Position to closeout. Either the
   * string “ALL”, the string “NONE”, or a primitives.DecimalNumber representing how many
   * units of the short position to close using a PositionCloseout
   * MarketOrder. The units specified must always be positive.
   */
  shortUnits: string

  /**
     * The client extensions to add to the MarketOrder used to close the short
    /**
     */
  shortClientExtensions?: primitives.ClientExtensions
}

export type PositionListResult = PositionListResult200

export interface PositionListResult200 {
  /**
   * The list of Account Positions.
   */
  positions?: Position[]

  /**
   * The ID of the most recent Transaction created for the Account
   */
  lastTransactionID?: primitives.TransactionID
}

export type PositionListOpenResult = PositionListOpenResult200

export interface PositionListOpenResult200 {
  /**
   * The list of open Positions in the Account.
   */
  positions?: Position[]

  /**
   * The ID of the most recent Transaction created for the Account
   */
  lastTransactionID?: primitives.TransactionID
}

export type PositionGetResult = PositionGetResult200

export interface PositionGetResult200 {
  /**
   * The requested Position.
   */
  position?: Position

  /**
   * The ID of the most recent Transaction created for the Account
   */
  lastTransactionID?: primitives.TransactionID
}

export type PositionCloseResult = PositionCloseResult200 | PositionCloseResult400

export interface PositionCloseResult200 {
  /**
   * The MarketOrderTransaction created to close the long Position.
   */
  longOrderCreateTransaction?: transaction.MarketOrderTransaction

  /**
   * OrderFill Transaction that closes the long Position
   */
  longOrderFillTransaction?: transaction.OrderFillTransaction

  /**
   * OrderCancel Transaction that cancels the MarketOrder created to close the
   * long Position
   */
  longOrderCancelTransaction?: transaction.OrderCancelTransaction

  /**
   * The MarketOrderTransaction created to close the short Position.
   */
  shortOrderCreateTransaction?: transaction.MarketOrderTransaction

  /**
   * OrderFill Transaction that closes the short Position
   */
  shortOrderFillTransaction?: transaction.OrderFillTransaction

  /**
   * OrderCancel Transaction that cancels the MarketOrder created to close the
   * short Position
   */
  shortOrderCancelTransaction?: transaction.OrderCancelTransaction

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

export interface PositionCloseResult400 {
  /**
   * The Transaction created that rejects the creation of a MarketOrder to
   * close the long Position.
   */
  longOrderRejectTransaction?: transaction.MarketOrderRejectTransaction

  /**
   * The Transaction created that rejects the creation of a MarketOrder to
   * close the short Position.
   */
  shortOrderRejectTransaction?: transaction.MarketOrderRejectTransaction

  /**
   * The IDs of all Transactions that were created while satisfying the
   * request.
   */
  relatedTransactionIDs?: primitives.TransactionID[]

  /**
   * The ID of the most recent Transaction created for the Account
   */
  lastTransactionID?: primitives.TransactionID

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

  async list(accountID: primitives.AccountID): Promise<PositionListResult> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).list(accountID, this.resolver(resolve, reject))
    })
  }
  async listOpen(accountID: primitives.AccountID): Promise<PositionListOpenResult> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).listOpen(accountID, this.resolver(resolve, reject))
    })
  }
  async get(
    accountID: primitives.AccountID,
    instrument: primitives.InstrumentName,
  ): Promise<PositionGetResult> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).get(accountID, instrument, this.resolver(resolve, reject))
    })
  }
  async close(
    accountID: primitives.AccountID,
    instrument: primitives.InstrumentName,
    body: PositionCloseRequest,
  ): Promise<PositionCloseResult> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).close(
        accountID,
        instrument,
        body,
        this.resolver(resolve, reject),
      )
    })
  }
}
