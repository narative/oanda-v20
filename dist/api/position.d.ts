import * as account from '../definitions/account';
import * as position from '../definitions/position';
import * as transaction from '../definitions/transaction';
import * as primitives from '../definitions/primitives';
export interface ListRequest {
    accountID: account.AccountID;
}
export declare type ListResponse = ListResponse200;
export interface ListResponse200 {
    /**
     * The list of Account Positions.
     */
    positions?: position.Position[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface ListOpenRequest {
    accountID: account.AccountID;
}
export declare type ListOpenResponse = ListOpenResponse200;
export interface ListOpenResponse200 {
    /**
     * The list of open Positions in the Account.
     */
    positions?: position.Position[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface GetRequest {
    accountID: account.AccountID;
    instrument: primitives.InstrumentName;
}
export declare type GetResponse = GetResponse200;
export interface GetResponse200 {
    /**
     * The requested Position.
     */
    position?: position.Position;
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface CloseRequest {
    accountID: account.AccountID;
    instrument: primitives.InstrumentName;
    body: CloseRequestBody;
}
export interface CloseRequestBody {
    /**
     * Indication of how much of the long Position to closeout. Either the
     * string 'ALL', the string 'NONE', or a DecimalNumber representing how many
     * units of the long position to close using a PositionCloseout MarketOrder.
     * The units specified must always be positive.
     */
    longUnits?: string;
    /**
     * The client extensions to add to the MarketOrder used to close the long
     * position.
     */
    longClientExtensions?: transaction.ClientExtensions;
    /**
     * Indication of how much of the short Position to closeout. Either the
     * string 'ALL', the string 'NONE', or a DecimalNumber representing how many
     * units of the short position to close using a PositionCloseout
     * MarketOrder. The units specified must always be positive.
     */
    shortUnits?: string;
    /**
     * The client extensions to add to the MarketOrder used to close the short
     * position.
     */
    shortClientExtensions?: transaction.ClientExtensions;
}
export declare type CloseResponse = CloseResponse200 | CloseResponse400;
export interface CloseResponse200 {
    /**
     * The MarketOrderTransaction created to close the long Position.
     */
    longOrderCreateTransaction?: transaction.MarketOrderTransaction;
    /**
     * OrderFill Transaction that closes the long Position
     */
    longOrderFillTransaction?: transaction.OrderFillTransaction;
    /**
     * OrderCancel Transaction that cancels the MarketOrder created to close the
     * long Position
     */
    longOrderCancelTransaction?: transaction.OrderCancelTransaction;
    /**
     * The MarketOrderTransaction created to close the short Position.
     */
    shortOrderCreateTransaction?: transaction.MarketOrderTransaction;
    /**
     * OrderFill Transaction that closes the short Position
     */
    shortOrderFillTransaction?: transaction.OrderFillTransaction;
    /**
     * OrderCancel Transaction that cancels the MarketOrder created to close the
     * short Position
     */
    shortOrderCancelTransaction?: transaction.OrderCancelTransaction;
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
export interface CloseResponse400 {
    /**
     * The Transaction created that rejects the creation of a MarketOrder to
     * close the long Position.
     */
    longOrderRejectTransaction?: transaction.MarketOrderRejectTransaction;
    /**
     * The Transaction created that rejects the creation of a MarketOrder to
     * close the short Position.
     */
    shortOrderRejectTransaction?: transaction.MarketOrderRejectTransaction;
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
export declare class API {
    private context;
    private resolver;
    constructor(context: any, resolver: any);
    /**
     * list
     * GET /v3/accounts/{accountID}/positions
     */
    list(request: ListRequest): Promise<unknown>;
    /**
     * listOpen
     * GET /v3/accounts/{accountID}/openPositions
     */
    listOpen(request: ListOpenRequest): Promise<unknown>;
    /**
     * get
     * GET /v3/accounts/{accountID}/positions/{instrument}
     */
    get(request: GetRequest): Promise<unknown>;
    /**
     * close
     * PUT /v3/accounts/{accountID}/positions/{instrument}/close
     */
    close(request: CloseRequest): Promise<unknown>;
}
