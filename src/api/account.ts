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
import { EntitySpec } from '../account'

///////////////////////////////////////////////////////////////////////////////
// list - GET /v3/accounts (#collapse_endpoint_2)
///////////////////////////////////////////////////////////////////////////////
        
export interface ListRequest {
  // Authorization: string // header

}

export type ListResponse = ListResponse200

export interface ListResponse200 {
  /**
   * The list of Accounts the client is authorized to access and their
   * associated properties.
   */ 
  accounts?: account.AccountProperties[]

}

///////////////////////////////////////////////////////////////////////////////
// get - GET /v3/accounts/{accountID} (#collapse_endpoint_3)
///////////////////////////////////////////////////////////////////////////////
        
export interface GetRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path

}

export type GetResponse = GetResponse200

export interface GetResponse200 {
  /**
   * The full details of the requested Account.
   */ 
  account?: account.Account

  /**
   * The ID of the most recent Transaction created for the Account.
   */ 
  lastTransactionID?: transaction.TransactionID

}

///////////////////////////////////////////////////////////////////////////////
// summary - GET /v3/accounts/{accountID}/summary (#collapse_endpoint_4)
///////////////////////////////////////////////////////////////////////////////
        
export interface SummaryRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path

}

export type SummaryResponse = SummaryResponse200

export interface SummaryResponse200 {
  /**
   * The summary of the requested Account.
   */ 
  account?: account.AccountSummary

  /**
   * The ID of the most recent Transaction created for the Account.
   */ 
  lastTransactionID?: transaction.TransactionID

}

///////////////////////////////////////////////////////////////////////////////
// instruments - GET /v3/accounts/{accountID}/instruments (#collapse_endpoint_5)
///////////////////////////////////////////////////////////////////////////////
        
export interface InstrumentsRequest {
  // Authorization: string // header
  accountID: account.AccountID // path
  query: InstrumentsRequestQuery
}

export interface InstrumentsRequestQuery {
  instruments?: primitives.InstrumentName[]
}

export type InstrumentsResponse = InstrumentsResponse200

export interface InstrumentsResponse200 {
  /**
   * The requested list of instruments.
   */ 
  instruments?: primitives.Instrument[]

  /**
   * The ID of the most recent Transaction created for the Account.
   */ 
  lastTransactionID?: transaction.TransactionID

}

///////////////////////////////////////////////////////////////////////////////
// configure - PATCH /v3/accounts/{accountID}/configuration (#collapse_endpoint_6)
///////////////////////////////////////////////////////////////////////////////
        
export interface ConfigureRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path
  body: ConfigureRequestBody
}

export interface ConfigureRequestBody {
  /**
   * Client-defined alias (name) for the Account
   */ 
  alias?: string

  /**
   * The string representation of a decimal number.
   */ 
  marginRate?: primitives.DecimalNumber

}

export type ConfigureResponse = ConfigureResponse200 | ConfigureResponse400

export interface ConfigureResponse200 {
  /**
   * The transaction that configures the Account.
   */ 
  clientConfigureTransaction?: transaction.ClientConfigureTransaction

  /**
   * The ID of the last Transaction created for the Account.
   */ 
  lastTransactionID?: transaction.TransactionID

}

export interface ConfigureResponse400 {
  /**
   * The transaction that rejects the configuration of the Account.
   */ 
  clientConfigureRejectTransaction?: transaction.ClientConfigureRejectTransaction

  /**
   * The ID of the last Transaction created for the Account.
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

///////////////////////////////////////////////////////////////////////////////
// changes - GET /v3/accounts/{accountID}/changes (#collapse_endpoint_7)
///////////////////////////////////////////////////////////////////////////////
        
export interface ChangesRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path
  query: ChangesRequestQuery
}

export interface ChangesRequestQuery {
  sinceTransactionID?: transaction.TransactionID
}

export type ChangesResponse = ChangesResponse200

export interface ChangesResponse200 {
  /**
   * The changes to the Account's Orders, Trades and Positions since the
   * specified Transaction ID. Only provided if the sinceTransactionID is
   * supplied to the poll request.
   */ 
  changes?: account.AccountChanges

  /**
   * The Account's current price-dependent state.
   */ 
  state?: account.AccountChangesState

  /**
   * The ID of the last Transaction created for the Account. This Transaction
   * ID should be used for future poll requests, as the client has already
   * observed all changes up to and including it.
   */ 
  lastTransactionID?: transaction.TransactionID

}

///////////////////////////////////////////////////////////////////////////

export class API {
  constructor(private context: any, private resolver: any) {}

  /**
   * list
   * GET /v3/accounts 
   */
  async list(request: ListRequest): Promise<ListResponse> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).list(
        this.resolver(resolve, reject))
    })
  }

  /**
   * get
   * GET /v3/accounts/{accountID} 
   */
  async get(request: GetRequest): Promise<GetResponse> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).get(
       request.accountID,
        this.resolver(resolve, reject))
    })
  }

  /**
   * summary
   * GET /v3/accounts/{accountID}/summary 
   */
  async summary(request: SummaryRequest): Promise<SummaryResponse> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).summary(
       request.accountID,
        this.resolver(resolve, reject))
    })
  }

  /**
   * instruments
   * GET /v3/accounts/{accountID}/instruments 
   */
  async instruments(request: InstrumentsRequest): Promise<InstrumentsResponse> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).instruments(
       request.accountID,
        request.query,
        this.resolver(resolve, reject))
    })
  }

  /**
   * configure
   * PATCH /v3/accounts/{accountID}/configuration 
   */
  async configure(request: ConfigureRequest): Promise<ConfigureResponse> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).configure(
       request.accountID,
        request.body,
        this.resolver(resolve, reject))
    })
  }

  /**
   * changes
   * GET /v3/accounts/{accountID}/changes 
   */
  async changes(request: ChangesRequest): Promise<ChangesResponse> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).changes(
       request.accountID,
        request.query,
        this.resolver(resolve, reject))
    })
  }
}

export class Stream {
  constructor(private context: any, private resolver: any) {}

}
