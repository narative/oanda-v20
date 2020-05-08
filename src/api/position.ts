import * as account from '../definitions/account'
import * as instrument from '../definitions/instrument'
import * as order from '../definitions/order'
import * as trade from '../definitions/trade'
import * as position from '../definitions/position'
import * as transaction from '../definitions/transaction'
import * as pricing from '../definitions/pricing'
import * as pricingCommon from '../definitions/pricingCommon'
import * as primitives from '../definitions/primitives'

import * as http from 'http'
import { EntitySpec } from '../position'

///////////////////////////////////////////////////////////////////////////////
// list - GET /v3/accounts/{accountID}/positions (#collapse_endpoint_2)
///////////////////////////////////////////////////////////////////////////////
        
export interface ListRequest {
  // Authorization: string // header
  accountID: account.AccountID // path

}

export type ListResponse = ListResponse200

export interface ListResponse200 {
  /**
   * The list of Account Positions.
   */ 
  positions?: position.Position[]

  /**
   * The ID of the most recent Transaction created for the Account
   */ 
  lastTransactionID?: transaction.TransactionID

}

///////////////////////////////////////////////////////////////////////////////
// listOpen - GET /v3/accounts/{accountID}/openPositions (#collapse_endpoint_3)
///////////////////////////////////////////////////////////////////////////////
        
export interface ListOpenRequest {
  // Authorization: string // header
  accountID: account.AccountID // path

}

export type ListOpenResponse = ListOpenResponse200

export interface ListOpenResponse200 {
  /**
   * The list of open Positions in the Account.
   */ 
  positions?: position.Position[]

  /**
   * The ID of the most recent Transaction created for the Account
   */ 
  lastTransactionID?: transaction.TransactionID

}

///////////////////////////////////////////////////////////////////////////////
// get - GET /v3/accounts/{accountID}/positions/{instrument} (#collapse_endpoint_4)
///////////////////////////////////////////////////////////////////////////////
        
export interface GetRequest {
  // Authorization: string // header
  accountID: account.AccountID // path
  instrument: primitives.InstrumentName // path

}

export type GetResponse = GetResponse200

export interface GetResponse200 {
  /**
   * The requested Position.
   */ 
  position?: position.Position

  /**
   * The ID of the most recent Transaction created for the Account
   */ 
  lastTransactionID?: transaction.TransactionID

}

///////////////////////////////////////////////////////////////////////////////
// close - PUT /v3/accounts/{accountID}/positions/{instrument}/close (#collapse_endpoint_5)
///////////////////////////////////////////////////////////////////////////////
        
export interface CloseRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path
  instrument: primitives.InstrumentName // path
  body: CloseRequestBody
}

export interface CloseRequestBody {
  /**
   * Indication of how much of the long Position to closeout. Either the
   * string 'ALL', the string 'NONE', or a DecimalNumber representing how many
   * units of the long position to close using a PositionCloseout MarketOrder.
   * The units specified must always be positive.
   */ 
  longUnits?: string /* ALL */

  /**
   * The client extensions to add to the MarketOrder used to close the long
   * position.
   */ 
  longClientExtensions?: transaction.ClientExtensions

  /**
   * Indication of how much of the short Position to closeout. Either the
   * string 'ALL', the string 'NONE', or a DecimalNumber representing how many
   * units of the short position to close using a PositionCloseout
   * MarketOrder. The units specified must always be positive.
   */ 
  shortUnits?: string /* ALL */

  /**
   * The client extensions to add to the MarketOrder used to close the short
   * position.
   */ 
  shortClientExtensions?: transaction.ClientExtensions

}

export type CloseResponse = CloseResponse200 | CloseResponse400 | CloseResponse404

export interface CloseResponse200 {
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
  relatedTransactionIDs?: transaction.TransactionID[]

  /**
   * The ID of the most recent Transaction created for the Account
   */ 
  lastTransactionID?: transaction.TransactionID

}

export interface CloseResponse400 {
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
  relatedTransactionIDs?: transaction.TransactionID[]

  /**
   * The ID of the most recent Transaction created for the Account
   */ 
  lastTransactionID?: transaction.TransactionID

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

export interface CloseResponse404 {
  /**
   * The Transaction created that rejects the creation of a MarketOrder to
   * close the long Position. Only present if the Account exists and a long
   * Position was specified.
   */ 
  longOrderRejectTransaction?: transaction.MarketOrderRejectTransaction

  /**
   * The Transaction created that rejects the creation of a MarketOrder to
   * close the short Position. Only present if the Account exists and a short
   * Position was specified.
   */ 
  shortOrderRejectTransaction?: transaction.MarketOrderRejectTransaction

  /**
   * The IDs of all Transactions that were created while satisfying the
   * request. Only present if the Account exists.
   */ 
  relatedTransactionIDs?: transaction.TransactionID[]

  /**
   * The ID of the most recent Transaction created for the Account. Only
   * present if the Account exists.
   */ 
  lastTransactionID?: transaction.TransactionID

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

///////////////////////////////////////////////////////////////////////////

export class API {
  constructor(private context: any, private resolver: any) {}

  /**
   * list
   * GET /v3/accounts/{accountID}/positions 
   */
  async list(request: ListRequest): Promise<ListResponse> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).list(
       request.accountID,
        this.resolver(resolve, reject))
    })
  }

  /**
   * listOpen
   * GET /v3/accounts/{accountID}/openPositions 
   */
  async listOpen(request: ListOpenRequest): Promise<ListOpenResponse> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).listOpen(
       request.accountID,
        this.resolver(resolve, reject))
    })
  }

  /**
   * get
   * GET /v3/accounts/{accountID}/positions/{instrument} 
   */
  async get(request: GetRequest): Promise<GetResponse> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).get(
       request.accountID,
       request.instrument,
        this.resolver(resolve, reject))
    })
  }

  /**
   * close
   * PUT /v3/accounts/{accountID}/positions/{instrument}/close 
   */
  async close(request: CloseRequest): Promise<CloseResponse> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).close(
       request.accountID,
       request.instrument,
        request.body,
        this.resolver(resolve, reject))
    })
  }
}

export class Stream {
  constructor(private context: any, private resolver: any) {}

}
