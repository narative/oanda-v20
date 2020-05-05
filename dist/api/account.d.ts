import * as account from '../definitions/account';
import * as transaction from '../definitions/transaction';
import * as primitives from '../definitions/primitives';
export interface ListRequest {
}
export declare type ListResponse = ListResponse200;
export interface ListResponse200 {
    /**
     * The list of Accounts the client is authorized to access and their
     * associated properties.
     */
    accounts?: account.AccountProperties[];
}
export interface GetRequest {
    accountID: account.AccountID;
}
export declare type GetResponse = GetResponse200;
export interface GetResponse200 {
    /**
     * The full details of the requested Account.
     */
    account?: account.Account;
    /**
     * The ID of the most recent Transaction created for the Account.
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface SummaryRequest {
    accountID: account.AccountID;
}
export declare type SummaryResponse = SummaryResponse200;
export interface SummaryResponse200 {
    /**
     * The summary of the requested Account.
     */
    account?: account.AccountSummary;
    /**
     * The ID of the most recent Transaction created for the Account.
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface InstrumentsRequest {
    accountID: account.AccountID;
    query: InstrumentsRequestQuery;
}
export interface InstrumentsRequestQuery {
    instruments: primitives.InstrumentName[];
}
export declare type InstrumentsResponse = InstrumentsResponse200;
export interface InstrumentsResponse200 {
    /**
     * The requested list of instruments.
     */
    instruments?: primitives.Instrument[];
    /**
     * The ID of the most recent Transaction created for the Account.
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface ConfigureRequest {
    accountID: account.AccountID;
    body: ConfigureRequestBody;
}
export interface ConfigureRequestBody {
    /**
     * Client-defined alias (name) for the Account
     */
    alias?: string;
    /**
     * The string representation of a decimal number.
     */
    marginRate?: primitives.DecimalNumber;
}
export declare type ConfigureResponse = ConfigureResponse200 | ConfigureResponse400;
export interface ConfigureResponse200 {
    /**
     * The transaction that configures the Account.
     */
    clientConfigureTransaction?: transaction.ClientConfigureTransaction;
    /**
     * The ID of the last Transaction created for the Account.
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface ConfigureResponse400 {
    /**
     * The transaction that rejects the configuration of the Account.
     */
    clientConfigureRejectTransaction?: transaction.ClientConfigureRejectTransaction;
    /**
     * The ID of the last Transaction created for the Account.
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
export interface ChangesRequest {
    accountID: account.AccountID;
    query: ChangesRequestQuery;
}
export interface ChangesRequestQuery {
    sinceTransactionID: transaction.TransactionID;
}
export declare type ChangesResponse = ChangesResponse200;
export interface ChangesResponse200 {
    /**
     * The changes to the Account's Orders, Trades and Positions since the
     * specified Transaction ID. Only provided if the sinceTransactionID is
     * supplied to the poll request.
     */
    changes?: account.AccountChanges;
    /**
     * The Account's current price-dependent state.
     */
    state?: account.AccountChangesState;
    /**
     * The ID of the last Transaction created for the Account.  This Transaction
     * ID should be used for future poll requests, as the client has already
     * observed all changes up to and including it.
     */
    lastTransactionID?: transaction.TransactionID;
}
export declare class API {
    private context;
    private resolver;
    constructor(context: any, resolver: any);
    /**
     * list
     * GET /v3/accounts
     */
    list(request: ListRequest): Promise<unknown>;
    /**
     * get
     * GET /v3/accounts/{accountID}
     */
    get(request: GetRequest): Promise<unknown>;
    /**
     * summary
     * GET /v3/accounts/{accountID}/summary
     */
    summary(request: SummaryRequest): Promise<unknown>;
    /**
     * instruments
     * GET /v3/accounts/{accountID}/instruments
     */
    instruments(request: InstrumentsRequest): Promise<unknown>;
    /**
     * configure
     * PATCH /v3/accounts/{accountID}/configuration
     */
    configure(request: ConfigureRequest): Promise<unknown>;
    /**
     * changes
     * GET /v3/accounts/{accountID}/changes
     */
    changes(request: ChangesRequest): Promise<unknown>;
}
