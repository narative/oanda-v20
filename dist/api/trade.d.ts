import * as account from '../definitions/account';
import * as trade from '../definitions/trade';
import * as transaction from '../definitions/transaction';
import * as primitives from '../definitions/primitives';
export interface ListRequest {
    accountID: account.AccountID;
    query: ListRequestQuery;
}
export interface ListRequestQuery {
    ids?: trade.TradeID[];
    state?: trade.TradeStateFilter;
    instrument?: primitives.InstrumentName;
    count?: number;
    beforeID?: trade.TradeID;
}
export declare type ListResponse = ListResponse200;
export interface ListResponse200 {
    /**
     * The list of Trade detail objects
     */
    trades?: trade.Trade[];
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
     * The Account's list of open Trades
     */
    trades?: trade.Trade[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface GetRequest {
    accountID: account.AccountID;
    tradeSpecifier: trade.TradeSpecifier;
}
export declare type GetResponse = GetResponse200;
export interface GetResponse200 {
    /**
     * The details of the requested trade
     */
    trade?: trade.Trade;
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: transaction.TransactionID;
}
export interface CloseRequest {
    accountID: account.AccountID;
    tradeSpecifier: trade.TradeSpecifier;
    body: CloseRequestBody;
}
export interface CloseRequestBody {
    /**
     * Indication of how much of the Trade to close. Either the string 'ALL'
     * (indicating that all of the Trade should be closed), or a DecimalNumber
     * representing the number of units of the open Trade to Close using a
     * TradeClose MarketOrder. The units specified must always be positive, and
     * the magnitude of the value cannot exceed the magnitude of the Trade's
     * open units.
     */
    units?: string;
}
export declare type CloseResponse = CloseResponse200 | CloseResponse400 | CloseResponse404;
export interface CloseResponse200 {
    /**
     * The MarketOrder Transaction created to close the Trade.
     */
    orderCreateTransaction?: transaction.MarketOrderTransaction;
    /**
     * The OrderFill Transaction that fills the Trade-closing MarketOrder and
     * closes the Trade.
     */
    orderFillTransaction?: transaction.OrderFillTransaction;
    /**
     * The OrderCancel Transaction that immediately cancelled the Trade-closing
     * MarketOrder.
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
export interface CloseResponse400 {
    /**
     * The MarketOrderReject Transaction that rejects the creation of the Trade-
     * closing MarketOrder.
     */
    orderRejectTransaction?: transaction.MarketOrderRejectTransaction;
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
export interface CloseResponse404 {
    /**
     * The MarketOrderReject Transaction that rejects the creation of the Trade-
     * closing MarketOrder. Only present if the Account exists.
     */
    orderRejectTransaction?: transaction.MarketOrderRejectTransaction;
    /**
     * The ID of the most recent Transaction created for the Account. Only
     * present if the Account exists.
     */
    lastTransactionID?: transaction.TransactionID;
    /**
     * The IDs of all Transactions that were created while satisfying the
     * request. Only present if the Account exists.
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
export interface SetClientExtensionsRequest {
    accountID: account.AccountID;
    tradeSpecifier: trade.TradeSpecifier;
    body: SetClientExtensionsRequestBody;
}
export interface SetClientExtensionsRequestBody {
    /**
     * The Client Extensions to update the Trade with. Do not add, update, or
     * delete the Client Extensions if your account is associated with MT4.
     */
    clientExtensions?: transaction.ClientExtensions;
}
export declare type SetClientExtensionsResponse = SetClientExtensionsResponse200 | SetClientExtensionsResponse400 | SetClientExtensionsResponse404;
export interface SetClientExtensionsResponse200 {
    /**
     * The Transaction that updates the Trade's Client Extensions.
     */
    tradeClientExtensionsModifyTransaction?: transaction.TradeClientExtensionsModifyTransaction;
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
export interface SetClientExtensionsResponse400 {
    /**
     * The Transaction that rejects the modification of the Trade's Client
     * Extensions.
     */
    tradeClientExtensionsModifyRejectTransaction?: transaction.TradeClientExtensionsModifyRejectTransaction;
    /**
     * The ID of the most recent Transaction created for the Account.
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
export interface SetClientExtensionsResponse404 {
    /**
     * The Transaction that rejects the modification of the Trade's Client
     * Extensions. Only present if the Account exists.
     */
    tradeClientExtensionsModifyRejectTransaction?: transaction.TradeClientExtensionsModifyRejectTransaction;
    /**
     * The ID of the most recent Transaction created for the Account. Only
     * present if the Account exists.
     */
    lastTransactionID?: transaction.TransactionID;
    /**
     * The IDs of all Transactions that were created while satisfying the
     * request. Only present if the Account exists.
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
export interface SetDependentOrdersRequest {
    accountID: account.AccountID;
    tradeSpecifier: trade.TradeSpecifier;
    body: SetDependentOrdersRequestBody;
}
export interface SetDependentOrdersRequestBody {
    /**
     * The specification of the Take Profit to create/modify/cancel. If
     * takeProfit is set to null, the Take Profit Order will be cancelled if it
     * exists. If takeProfit is not provided, the existing Take Profit Order
     * will not be modified. If a sub-field of takeProfit is not specified, that
     * field will be set to a default value on create, and be inherited by the
     * replacing order on modify.
     */
    takeProfit?: transaction.TakeProfitDetails;
    /**
     * The specification of the Stop Loss to create/modify/cancel. If stopLoss
     * is set to null, the Stop Loss Order will be cancelled if it exists. If
     * stopLoss is not provided, the existing Stop Loss Order will not be
     * modified. If a sub-field of stopLoss is not specified, that field will be
     * set to a default value on create, and be inherited by the replacing order
     * on modify.
     */
    stopLoss?: transaction.StopLossDetails;
    /**
     * The specification of the Trailing Stop Loss to create/modify/cancel. If
     * trailingStopLoss is set to null, the Trailing Stop Loss Order will be
     * cancelled if it exists. If trailingStopLoss is not provided, the existing
     * Trailing Stop Loss Order will not be modified. If a sub-field of
     * trailingStopLoss is not specified, that field will be set to a default
     * value on create, and be inherited by the replacing order on modify.
     */
    trailingStopLoss?: transaction.TrailingStopLossDetails;
}
export declare type SetDependentOrdersResponse = SetDependentOrdersResponse200 | SetDependentOrdersResponse400;
export interface SetDependentOrdersResponse200 {
    /**
     * The Transaction created that cancels the Trade's existing Take Profit
     * Order.
     */
    takeProfitOrderCancelTransaction?: transaction.OrderCancelTransaction;
    /**
     * The Transaction created that creates a new Take Profit Order for the
     * Trade.
     */
    takeProfitOrderTransaction?: transaction.TakeProfitOrderTransaction;
    /**
     * The Transaction created that immediately fills the Trade's new Take
     * Profit Order. Only provided if the new Take Profit Order was immediately
     * filled.
     */
    takeProfitOrderFillTransaction?: transaction.OrderFillTransaction;
    /**
     * The Transaction created that immediately cancels the Trade's new Take
     * Profit Order. Only provided if the new Take Profit Order was immediately
     * cancelled.
     */
    takeProfitOrderCreatedCancelTransaction?: transaction.OrderCancelTransaction;
    /**
     * The Transaction created that cancels the Trade's existing Stop Loss
     * Order.
     */
    stopLossOrderCancelTransaction?: transaction.OrderCancelTransaction;
    /**
     * The Transaction created that creates a new Stop Loss Order for the Trade.
     */
    stopLossOrderTransaction?: transaction.StopLossOrderTransaction;
    /**
     * The Transaction created that immediately fills the Trade's new Stop
     * Order. Only provided if the new Stop Loss Order was immediately filled.
     */
    stopLossOrderFillTransaction?: transaction.OrderFillTransaction;
    /**
     * The Transaction created that immediately cancels the Trade's new Stop
     * Loss Order. Only provided if the new Stop Loss Order was immediately
     * cancelled.
     */
    stopLossOrderCreatedCancelTransaction?: transaction.OrderCancelTransaction;
    /**
     * The Transaction created that cancels the Trade's existing Trailing Stop
     * Loss Order.
     */
    trailingStopLossOrderCancelTransaction?: transaction.OrderCancelTransaction;
    /**
     * The Transaction created that creates a new Trailing Stop Loss Order for
     * the Trade.
     */
    trailingStopLossOrderTransaction?: transaction.TrailingStopLossOrderTransaction;
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
export interface SetDependentOrdersResponse400 {
    /**
     * An OrderCancelRejectTransaction represents the rejection of the
     * cancellation of an Order in the client's Account.
     */
    takeProfitOrderCancelRejectTransaction?: transaction.OrderCancelRejectTransaction;
    /**
     * A TakeProfitOrderRejectTransaction represents the rejection of the
     * creation of a TakeProfit Order.
     */
    takeProfitOrderRejectTransaction?: transaction.TakeProfitOrderRejectTransaction;
    /**
     * An OrderCancelRejectTransaction represents the rejection of the
     * cancellation of an Order in the client's Account.
     */
    stopLossOrderCancelRejectTransaction?: transaction.OrderCancelRejectTransaction;
    /**
     * A StopLossOrderRejectTransaction represents the rejection of the creation
     * of a StopLoss Order.
     */
    stopLossOrderRejectTransaction?: transaction.StopLossOrderRejectTransaction;
    /**
     * An OrderCancelRejectTransaction represents the rejection of the
     * cancellation of an Order in the client's Account.
     */
    trailingStopLossOrderCancelRejectTransaction?: transaction.OrderCancelRejectTransaction;
    /**
     * A TrailingStopLossOrderRejectTransaction represents the rejection of the
     * creation of a TrailingStopLoss Order.
     */
    trailingStopLossOrderRejectTransaction?: transaction.TrailingStopLossOrderRejectTransaction;
    /**
     * The ID of the most recent Transaction created for the Account.
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
     * list
     * GET /v3/accounts/{accountID}/trades
     */
    list(request: ListRequest): Promise<ListResponse>;
    /**
     * listOpen
     * GET /v3/accounts/{accountID}/openTrades
     */
    listOpen(request: ListOpenRequest): Promise<ListOpenResponse>;
    /**
     * get
     * GET /v3/accounts/{accountID}/trades/{tradeSpecifier}
     */
    get(request: GetRequest): Promise<GetResponse>;
    /**
     * close
     * PUT /v3/accounts/{accountID}/trades/{tradeSpecifier}/close
     */
    close(request: CloseRequest): Promise<CloseResponse>;
    /**
     * setClientExtensions
     * PUT /v3/accounts/{accountID}/trades/{tradeSpecifier}/clientExtensions
     */
    setClientExtensions(request: SetClientExtensionsRequest): Promise<SetClientExtensionsResponse>;
    /**
     * setDependentOrders
     * PUT /v3/accounts/{accountID}/trades/{tradeSpecifier}/orders
     */
    setDependentOrders(request: SetDependentOrdersRequest): Promise<SetDependentOrdersResponse>;
}
