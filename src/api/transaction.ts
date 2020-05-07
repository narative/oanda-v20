import * as account from '../definitions/account'
import * as instrument from '../definitions/instrument'
import * as order from '../definitions/order'
import * as trade from '../definitions/trade'
import * as position from '../definitions/position'
import * as transaction from '../definitions/transaction'
import * as pricing from '../definitions/pricing'
import * as pricingCommon from '../definitions/pricingCommon'
import * as primitives from '../definitions/primitives'

import { EntitySpec } from '../transaction'

///////////////////////////////////////////////////////////////////////////////
// list - GET /v3/accounts/{accountID}/transactions
///////////////////////////////////////////////////////////////////////////////
        
export interface ListRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path
  query: ListRequestQuery
}

export interface ListRequestQuery {
  from?: primitives.DateTime

  to?: primitives.DateTime

  pageSize?: number

  type?: transaction.TransactionFilter[]
}

export type ListResponse = ListResponse200

export interface ListResponse200 {
  /**
   * The starting time provided in the request.
   */ 
  from?: primitives.DateTime

  /**
   * The ending time provided in the request.
   */ 
  to?: primitives.DateTime

  /**
   * The pageSize provided in the request
   */ 
  pageSize?: number

  /**
   * The Transaction-type filter provided in the request
   */ 
  type?: transaction.TransactionFilter[]

  /**
   * The number of Transactions that are contained in the pages returned
   */ 
  count?: number

  /**
   * The list of URLs that represent idrange queries providing the data for
   * each page in the query results
   */ 
  pages?: string[]

  /**
   * The ID of the most recent Transaction created for the Account
   */ 
  lastTransactionID?: transaction.TransactionID

}

///////////////////////////////////////////////////////////////////////////////
// get - GET /v3/accounts/{accountID}/transactions/{transactionID}
///////////////////////////////////////////////////////////////////////////////
        
export interface GetRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path
  transactionID: transaction.TransactionID // path

}

export type GetResponse = GetResponse200

export interface GetResponse200 {
  /**
   * The details of the Transaction requested
   */ 
  transaction?: transaction.Transaction

  /**
   * The ID of the most recent Transaction created for the Account
   */ 
  lastTransactionID?: transaction.TransactionID

}

///////////////////////////////////////////////////////////////////////////////
// range - GET /v3/accounts/{accountID}/transactions/idrange
///////////////////////////////////////////////////////////////////////////////
        
export interface RangeRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path
  query: RangeRequestQuery
}

export interface RangeRequestQuery {
  from?: transaction.TransactionID

  to?: transaction.TransactionID

  type?: transaction.TransactionFilter[]
}

export type RangeResponse = RangeResponse200

export interface RangeResponse200 {
  /**
   * The list of Transactions that satisfy the request.
   */ 
  transactions?: transaction.Transaction[]

  /**
   * The ID of the most recent Transaction created for the Account
   */ 
  lastTransactionID?: transaction.TransactionID

}

///////////////////////////////////////////////////////////////////////////////
// since - GET /v3/accounts/{accountID}/transactions/sinceid
///////////////////////////////////////////////////////////////////////////////
        
export interface SinceRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path
  query: SinceRequestQuery
}

export interface SinceRequestQuery {
  id?: transaction.TransactionID

  type?: transaction.TransactionFilter[]
}

export type SinceResponse = SinceResponse200

export interface SinceResponse200 {
  /**
   * The list of Transactions that satisfy the request.
   */ 
  transactions?: transaction.Transaction[]

  /**
   * The ID of the most recent Transaction created for the Account
   */ 
  lastTransactionID?: transaction.TransactionID

}

///////////////////////////////////////////////////////////////////////////////
// stream - GET /v3/accounts/{accountID}/transactions/stream
///////////////////////////////////////////////////////////////////////////////
        
export interface StreamRequest {
  // Authorization: string // header
  accountID: account.AccountID // path

}

export type StreamResponse = void


    ///////////////////////////////////////////////////////////////////////////

    export class API {
      constructor(private context: any, private resolver: any) {}

      /**
       * list
       * GET /v3/accounts/{accountID}/transactions 
       */
      async list(request: ListRequest): Promise<ListResponse> {
        return new Promise((resolve, reject) => {
          new EntitySpec(this.context).list(
            request.accountID,
            request.query,
            this.resolver(resolve, reject))
        })
      }

      /**
       * get
       * GET /v3/accounts/{accountID}/transactions/{transactionID} 
       */
      async get(request: GetRequest): Promise<GetResponse> {
        return new Promise((resolve, reject) => {
          new EntitySpec(this.context).get(
            request.accountID,
            request.transactionID,
            this.resolver(resolve, reject))
        })
      }

      /**
       * range
       * GET /v3/accounts/{accountID}/transactions/idrange 
       */
      async range(request: RangeRequest): Promise<RangeResponse> {
        return new Promise((resolve, reject) => {
          new EntitySpec(this.context).range(
            request.accountID,
            request.query,
            this.resolver(resolve, reject))
        })
      }

      /**
       * since
       * GET /v3/accounts/{accountID}/transactions/sinceid 
       */
      async since(request: SinceRequest): Promise<SinceResponse> {
        return new Promise((resolve, reject) => {
          new EntitySpec(this.context).since(
            request.accountID,
            request.query,
            this.resolver(resolve, reject))
        })
      }

      /**
       * stream
       * GET /v3/accounts/{accountID}/transactions/stream 
       */
      async stream(request: StreamRequest, streamChunkHandler: any): Promise<StreamResponse> {
        return new Promise((resolve, reject) => {
          new EntitySpec(this.context).stream(
            request.accountID,
            streamChunkHandler,
            this.resolver(resolve, reject))
        })
      }
    }
