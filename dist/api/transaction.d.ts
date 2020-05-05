import * as account from '../definitions/account';
import * as transaction from '../definitions/transaction';
import * as primitives from '../definitions/primitives';
export interface ListRequest {
    accountID: account.AccountID;
    query: ListRequestQuery;
}
export interface ListRequestQuery {
    from: primitives.DateTime;
    to: primitives.DateTime;
    pageSize: number;
    type: transaction.TransactionFilter[];
}
export declare type ListResponse = ListResponse200;
export interface ListResponse200 {
    /**
     * The starting time provided in the request.
     */
    from?: primitives.DateTime;
    /**
     * The ending time provided in the request.
     */
    to?: primitives.DateTime;
    /**
     * The pageSize provided in the request
     */
    pageSize?: number;
    /**
     * The Transaction-type filter provided in the request
     */
    type?: transaction.TransactionFilter[];
    /**
     * The number of Transactions that are contained in the pages returned
     */
    count?: number;
    /**
     * The list of URLs that represent idrange queries providing the data for
     * each page in the query results
     */
    pages?: string[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface GetRequest {
    accountID: account.AccountID;
    transactionID: transaction.TransactionID;
}
export declare type GetResponse = GetResponse200;
export interface GetResponse200 {
    /**
     * The details of the Transaction requested
     */
    transaction?: transaction.Transaction;
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface RangeRequest {
    accountID: account.AccountID;
    query: RangeRequestQuery;
}
export interface RangeRequestQuery {
    from: transaction.TransactionID;
    to: transaction.TransactionID;
    type: transaction.TransactionFilter[];
}
export declare type RangeResponse = RangeResponse200;
export interface RangeResponse200 {
    /**
     * The list of Transactions that satisfy the request.
     */
    transactions?: transaction.Transaction[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface SinceRequest {
    accountID: account.AccountID;
    query: SinceRequestQuery;
}
export interface SinceRequestQuery {
    id: transaction.TransactionID;
    type: transaction.TransactionFilter[];
}
export declare type SinceResponse = SinceResponse200;
export interface SinceResponse200 {
    /**
     * The list of Transactions that satisfy the request.
     */
    transactions?: transaction.Transaction[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface StreamRequest {
    accountID: account.AccountID;
}
export declare type StreamResponse = void;
export declare class API {
    private context;
    private resolver;
    constructor(context: any, resolver: any);
    /**
     * list
     * GET /v3/accounts/{accountID}/transactions
     */
    list(request: ListRequest): Promise<unknown>;
    /**
     * get
     * GET /v3/accounts/{accountID}/transactions/{transactionID}
     */
    get(request: GetRequest): Promise<unknown>;
    /**
     * range
     * GET /v3/accounts/{accountID}/transactions/idrange
     */
    range(request: RangeRequest): Promise<unknown>;
    /**
     * since
     * GET /v3/accounts/{accountID}/transactions/sinceid
     */
    since(request: SinceRequest): Promise<unknown>;
    /**
     * stream
     * GET /v3/accounts/{accountID}/transactions/stream
     */
    stream(request: StreamRequest, streamHandler: any): Promise<unknown>;
}
