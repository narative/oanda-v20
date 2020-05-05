import * as account from '../definitions/account'
import * as instrument from '../definitions/instrument'
import * as order from '../definitions/order'
import * as trade from '../definitions/trade'
import * as position from '../definitions/position'
import * as transaction from '../definitions/transaction'
import * as pricing from '../definitions/pricing'
import * as pricingCommon from '../definitions/pricingCommon'
import * as primitives from '../definitions/primitives'

import { EntitySpec } from '../order'

// create POST /v3/accounts/{accountID}/orders

export interface CreateRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path
  body: CreateRequestBody
}

export interface CreateRequestBody {
  /**
   * Specification of the Order to create
   */

  order?: order.OrderRequest
}

export type CreateResponse = CreateResponse400

export interface CreateResponse400 {
  /**
   * The Transaction that rejected the creation of the Order as requested
   */

  orderRejectTransaction?: transaction.Transaction

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

// list GET /v3/accounts/{accountID}/orders

export interface ListRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path
  query: ListRequestQuery
}

export interface ListRequestQuery {
  ids: order.OrderID[]
  state: order.OrderStateFilter
  instrument: primitives.InstrumentName
  count: number
  beforeID: order.OrderID
}

export type ListResponse = ListResponse200

export interface ListResponse200 {
  /**
   * The list of Order detail objects
   */

  orders?: order.Order[]

  /**
   * The ID of the most recent Transaction created for the Account
   */

  lastTransactionID?: transaction.TransactionID
}

// listPending GET /v3/accounts/{accountID}/pendingOrders

export interface ListPendingRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path
}

export type ListPendingResponse = ListPendingResponse200

export interface ListPendingResponse200 {
  /**
   * The list of pending Order details
   */

  orders?: order.Order[]

  /**
   * The ID of the most recent Transaction created for the Account
   */

  lastTransactionID?: transaction.TransactionID
}

// get GET /v3/accounts/{accountID}/orders/{orderSpecifier}

export interface GetRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path
  orderSpecifier: order.OrderSpecifier // path
}

export type GetResponse = GetResponse200

export interface GetResponse200 {
  /**
   * The details of the Order requested
   */

  order?: order.Order

  /**
   * The ID of the most recent Transaction created for the Account
   */

  lastTransactionID?: transaction.TransactionID
}

// replace PUT /v3/accounts/{accountID}/orders/{orderSpecifier}

export interface ReplaceRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  // ClientRequestID: transaction.ClientRequestID // header
  accountID: account.AccountID // path
  orderSpecifier: order.OrderSpecifier // path
  body: ReplaceRequestBody
}

export interface ReplaceRequestBody {
  /**
   * Specification of the replacing Order
   */

  order?: order.OrderRequest
}

export type ReplaceResponse = ReplaceResponse400

export interface ReplaceResponse400 {
  /**
   * The Transaction that rejected the creation of the replacing Order
   */

  orderRejectTransaction?: transaction.Transaction

  /**
   * The IDs of all Transactions that were created while satisfying the
   * request.
   */

  relatedTransactionIDs?: transaction.TransactionID[]

  /**
   * The ID of the most recent Transaction created for the Account.
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

// cancel PUT /v3/accounts/{accountID}/orders/{orderSpecifier}/cancel

export interface CancelRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  // ClientRequestID: transaction.ClientRequestID // header
  accountID: account.AccountID // path
  orderSpecifier: order.OrderSpecifier // path
}

export type CancelResponse = CancelResponse200

export interface CancelResponse200 {
  /**
   * The Transaction that cancelled the Order
   */

  orderCancelTransaction?: transaction.OrderCancelTransaction

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

// setClientExtensions PUT /v3/accounts/{accountID}/orders/{orderSpecifier}/clientExtensions

export interface SetClientExtensionsRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path
  orderSpecifier: order.OrderSpecifier // path
  body: SetClientExtensionsRequestBody
}

export interface SetClientExtensionsRequestBody {
  /**
   * The Client Extensions to update for the Order. Do not set, modify, or
   * delete clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions

  /**
   * The Client Extensions to update for the Trade created when the Order is
   * filled. Do not set, modify, or delete clientExtensions if your account is
   * associated with MT4.
   */

  tradeClientExtensions?: transaction.ClientExtensions
}

export type SetClientExtensionsResponse =
  | SetClientExtensionsResponse200
  | SetClientExtensionsResponse400

export interface SetClientExtensionsResponse200 {
  /**
   * The Transaction that modified the Client Extensions for the Order
   */

  orderClientExtensionsModifyTransaction?: transaction.OrderClientExtensionsModifyTransaction

  /**
   * The ID of the most recent Transaction created for the Account
   */

  lastTransactionID?: transaction.TransactionID

  /**
   * The IDs of all Transactions that were created while satisfying the
   * request.
   */

  relatedTransactionIDs?: transaction.TransactionID[]
}

export interface SetClientExtensionsResponse400 {
  /**
   * The Transaction that rejected the modification of the Client Extensions
   * for the Order
   */

  orderClientExtensionsModifyRejectTransaction?: transaction.OrderClientExtensionsModifyRejectTransaction

  /**
   * The ID of the most recent Transaction created for the Account
   */

  lastTransactionID?: transaction.TransactionID

  /**
   * The IDs of all Transactions that were created while satisfying the
   * request.
   */

  relatedTransactionIDs?: transaction.TransactionID[]

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
   * create
   * POST /v3/accounts/{accountID}/orders
   */
  async create(request: CreateRequest) {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).create(
        request.accountID,
        request.body,
        this.resolver(resolve, reject),
      )
    })
  }

  /**
   * list
   * GET /v3/accounts/{accountID}/orders
   */
  async list(request: ListRequest) {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).list(
        request.accountID,
        request.query,
        this.resolver(resolve, reject),
      )
    })
  }

  /**
   * listPending
   * GET /v3/accounts/{accountID}/pendingOrders
   */
  async listPending(request: ListPendingRequest) {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).listPending(request.accountID, this.resolver(resolve, reject))
    })
  }

  /**
   * get
   * GET /v3/accounts/{accountID}/orders/{orderSpecifier}
   */
  async get(request: GetRequest) {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).get(
        request.accountID,
        request.orderSpecifier,
        this.resolver(resolve, reject),
      )
    })
  }

  /**
   * replace
   * PUT /v3/accounts/{accountID}/orders/{orderSpecifier}
   */
  async replace(request: ReplaceRequest) {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).replace(
        request.accountID,
        request.orderSpecifier,
        request.body,
        this.resolver(resolve, reject),
      )
    })
  }

  /**
   * cancel
   * PUT /v3/accounts/{accountID}/orders/{orderSpecifier}/cancel
   */
  async cancel(request: CancelRequest) {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).cancel(
        request.accountID,
        request.orderSpecifier,
        this.resolver(resolve, reject),
      )
    })
  }

  /**
   * setClientExtensions
   * PUT /v3/accounts/{accountID}/orders/{orderSpecifier}/clientExtensions
   */
  async setClientExtensions(request: SetClientExtensionsRequest) {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).setClientExtensions(
        request.accountID,
        request.orderSpecifier,
        request.body,
        this.resolver(resolve, reject),
      )
    })
  }
}
