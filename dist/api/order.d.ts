import * as account from '../definitions/account';
import * as order from '../definitions/order';
import * as transaction from '../definitions/transaction';
import * as primitives from '../definitions/primitives';
export interface CreateRequest {
    accountID: account.AccountID;
    body: CreateRequestBody;
}
export interface CreateRequestBody {
    /**
     * Specification of the Order to create
     */
    order?: order.OrderRequest;
}
export declare type CreateResponse = CreateResponse400;
export interface CreateResponse400 {
    /**
     * The Transaction that rejected the creation of the Order as requested
     */
    orderRejectTransaction?: transaction.Transaction;
    /**
     * The IDs of all Transactions that were created while satisfying the
     * request.
     */
    relatedTransactionIDs?: transaction.TransactionID[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
    /**
     * The code of the error that has occurred. This field may not be returned
     * for some errors.
     */
    errorCode?: string;
    /**
     * The human-readable description of the error that has occurred.
     */
    errorMessage: string;
}
export interface ListRequest {
    accountID: account.AccountID;
    query: ListRequestQuery;
}
export interface ListRequestQuery {
    ids: order.OrderID[];
    state: order.OrderStateFilter;
    instrument: primitives.InstrumentName;
    count: number;
    beforeID: order.OrderID;
}
export declare type ListResponse = ListResponse200;
export interface ListResponse200 {
    /**
     * The list of Order detail objects
     */
    orders?: order.Order[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface ListPendingRequest {
    accountID: account.AccountID;
}
export declare type ListPendingResponse = ListPendingResponse200;
export interface ListPendingResponse200 {
    /**
     * The list of pending Order details
     */
    orders?: order.Order[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface GetRequest {
    accountID: account.AccountID;
    orderSpecifier: order.OrderSpecifier;
}
export declare type GetResponse = GetResponse200;
export interface GetResponse200 {
    /**
     * The details of the Order requested
     */
    order?: order.Order;
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface ReplaceRequest {
    accountID: account.AccountID;
    orderSpecifier: order.OrderSpecifier;
    body: ReplaceRequestBody;
}
export interface ReplaceRequestBody {
    /**
     * Specification of the replacing Order
     */
    order?: order.OrderRequest;
}
export declare type ReplaceResponse = ReplaceResponse400;
export interface ReplaceResponse400 {
    /**
     * The Transaction that rejected the creation of the replacing Order
     */
    orderRejectTransaction?: transaction.Transaction;
    /**
     * The IDs of all Transactions that were created while satisfying the
     * request.
     */
    relatedTransactionIDs?: transaction.TransactionID[];
    /**
     * The ID of the most recent Transaction created for the Account.
     */
    lastTransactionID?: transaction.TransactionID;
    /**
     * The code of the error that has occurred. This field may not be returned
     * for some errors.
     */
    errorCode?: string;
    /**
     * The human-readable description of the error that has occurred.
     */
    errorMessage: string;
}
export interface CancelRequest {
    accountID: account.AccountID;
    orderSpecifier: order.OrderSpecifier;
}
export declare type CancelResponse = CancelResponse200;
export interface CancelResponse200 {
    /**
     * The Transaction that cancelled the Order
     */
    orderCancelTransaction?: transaction.OrderCancelTransaction;
    /**
     * The IDs of all Transactions that were created while satisfying the
     * request.
     */
    relatedTransactionIDs?: transaction.TransactionID[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface SetClientExtensionsRequest {
    accountID: account.AccountID;
    orderSpecifier: order.OrderSpecifier;
    body: SetClientExtensionsRequestBody;
}
export interface SetClientExtensionsRequestBody {
    /**
     * The Client Extensions to update for the Order. Do not set, modify, or
     * delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions?: transaction.ClientExtensions;
    /**
     * The Client Extensions to update for the Trade created when the Order is
     * filled. Do not set, modify, or delete clientExtensions if your account is
     * associated with MT4.
     */
    tradeClientExtensions?: transaction.ClientExtensions;
}
export declare type SetClientExtensionsResponse = SetClientExtensionsResponse200 | SetClientExtensionsResponse400;
export interface SetClientExtensionsResponse200 {
    /**
     * The Transaction that modified the Client Extensions for the Order
     */
    orderClientExtensionsModifyTransaction?: transaction.OrderClientExtensionsModifyTransaction;
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
    /**
     * The IDs of all Transactions that were created while satisfying the
     * request.
     */
    relatedTransactionIDs?: transaction.TransactionID[];
}
export interface SetClientExtensionsResponse400 {
    /**
     * The Transaction that rejected the modification of the Client Extensions
     * for the Order
     */
    orderClientExtensionsModifyRejectTransaction?: transaction.OrderClientExtensionsModifyRejectTransaction;
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
    /**
     * The IDs of all Transactions that were created while satisfying the
     * request.
     */
    relatedTransactionIDs?: transaction.TransactionID[];
    /**
     * The code of the error that has occurred. This field may not be returned
     * for some errors.
     */
    errorCode?: string;
    /**
     * The human-readable description of the error that has occurred.
     */
    errorMessage: string;
}
export declare class API {
    private context;
    private resolver;
    constructor(context: any, resolver: any);
    /**
     * create
     * POST /v3/accounts/{accountID}/orders
     */
    create(request: CreateRequest): Promise<unknown>;
    /**
     * list
     * GET /v3/accounts/{accountID}/orders
     */
    list(request: ListRequest): Promise<unknown>;
    /**
     * listPending
     * GET /v3/accounts/{accountID}/pendingOrders
     */
    listPending(request: ListPendingRequest): Promise<unknown>;
    /**
     * get
     * GET /v3/accounts/{accountID}/orders/{orderSpecifier}
     */
    get(request: GetRequest): Promise<unknown>;
    /**
     * replace
     * PUT /v3/accounts/{accountID}/orders/{orderSpecifier}
     */
    replace(request: ReplaceRequest): Promise<unknown>;
    /**
     * cancel
     * PUT /v3/accounts/{accountID}/orders/{orderSpecifier}/cancel
     */
    cancel(request: CancelRequest): Promise<unknown>;
    /**
     * setClientExtensions
     * PUT /v3/accounts/{accountID}/orders/{orderSpecifier}/clientExtensions
     */
    setClientExtensions(request: SetClientExtensionsRequest): Promise<unknown>;
}
