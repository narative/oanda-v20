import { Definition, Property } from './base';
import * as transaction from './transaction';
import * as order from './order';
import * as primitives from './primitives';
export declare const Trade_Properties: Property[];
export declare class Trade extends Definition {
    /**
     * The Trade's identifier, unique within the Trade's Account.
     */
    id: primitives.TradeID;
    /**
     * The Trade's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The execution price of the Trade.
     */
    price: primitives.PriceValue;
    /**
     * The date/time when the Trade was opened.
     */
    openTime: primitives.DateTime;
    /**
     * The current state of the Trade.
     */
    state: primitives.TradeState;
    /**
     * The initial size of the Trade. Negative values indicate a short Trade, and positive values indicate a long Trade.
     */
    initialUnits: primitives.DecimalNumber;
    /**
     * The margin required at the time the Trade was created. Note, this is the 'pure' margin required, it is not the 'effective' margin used that factors in the trade risk if a GSLO is attached to the trade.
     */
    initialMarginRequired: primitives.AccountUnits;
    /**
     * The number of units currently open for the Trade. This value is reduced to 0.0 as the Trade is closed.
     */
    currentUnits: primitives.DecimalNumber;
    /**
     * The total profit/loss realized on the closed portion of the Trade.
     */
    realizedPL: primitives.AccountUnits;
    /**
     * The unrealized profit/loss on the open portion of the Trade.
     */
    unrealizedPL: primitives.AccountUnits;
    /**
     * Margin currently used by the Trade.
     */
    marginUsed: primitives.AccountUnits;
    /**
     * The average closing price of the Trade. Only present if the Trade has been closed or reduced at least once.
     */
    averageClosePrice: primitives.PriceValue;
    /**
     * The IDs of the Transactions that have closed portions of this Trade.
     */
    closingTransactionIDs: primitives.TransactionID[];
    /**
     * The financing paid/collected for this Trade.
     */
    financing: primitives.AccountUnits;
    /**
     * The date/time when the Trade was fully closed. Only provided for Trades whose state is CLOSED.
     */
    closeTime: primitives.DateTime;
    /**
     * The client extensions of the Trade.
     */
    clientExtensions: transaction.ClientExtensions;
    /**
     * Full representation of the Trade's Take Profit Order, only provided if such an Order exists.
     */
    takeProfitOrder: order.TakeProfitOrder;
    /**
     * Full representation of the Trade's Stop Loss Order, only provided if such an Order exists.
     */
    stopLossOrder: order.StopLossOrder;
    /**
     * Full representation of the Trade's Trailing Stop Loss Order, only provided if such an Order exists.
     */
    trailingStopLossOrder: order.TrailingStopLossOrder;
    constructor(data: any);
}
export declare const TradeSummary_Properties: Property[];
export declare class TradeSummary extends Definition {
    /**
     * The Trade's identifier, unique within the Trade's Account.
     */
    id: primitives.TradeID;
    /**
     * The Trade's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The execution price of the Trade.
     */
    price: primitives.PriceValue;
    /**
     * The date/time when the Trade was opened.
     */
    openTime: primitives.DateTime;
    /**
     * The current state of the Trade.
     */
    state: primitives.TradeState;
    /**
     * The initial size of the Trade. Negative values indicate a short Trade, and positive values indicate a long Trade.
     */
    initialUnits: primitives.DecimalNumber;
    /**
     * The margin required at the time the Trade was created. Note, this is the 'pure' margin required, it is not the 'effective' margin used that factors in the trade risk if a GSLO is attached to the trade.
     */
    initialMarginRequired: primitives.AccountUnits;
    /**
     * The number of units currently open for the Trade. This value is reduced to 0.0 as the Trade is closed.
     */
    currentUnits: primitives.DecimalNumber;
    /**
     * The total profit/loss realized on the closed portion of the Trade.
     */
    realizedPL: primitives.AccountUnits;
    /**
     * The unrealized profit/loss on the open portion of the Trade.
     */
    unrealizedPL: primitives.AccountUnits;
    /**
     * Margin currently used by the Trade.
     */
    marginUsed: primitives.AccountUnits;
    /**
     * The average closing price of the Trade. Only present if the Trade has been closed or reduced at least once.
     */
    averageClosePrice: primitives.PriceValue;
    /**
     * The IDs of the Transactions that have closed portions of this Trade.
     */
    closingTransactionIDs: primitives.TransactionID[];
    /**
     * The financing paid/collected for this Trade.
     */
    financing: primitives.AccountUnits;
    /**
     * The date/time when the Trade was fully closed. Only provided for Trades whose state is CLOSED.
     */
    closeTime: primitives.DateTime;
    /**
     * The client extensions of the Trade.
     */
    clientExtensions: transaction.ClientExtensions;
    /**
     * ID of the Trade's Take Profit Order, only provided if such an Order exists.
     */
    takeProfitOrderID: primitives.OrderID;
    /**
     * ID of the Trade's Stop Loss Order, only provided if such an Order exists.
     */
    stopLossOrderID: primitives.OrderID;
    /**
     * ID of the Trade's Trailing Stop Loss Order, only provided if such an Order exists.
     */
    trailingStopLossOrderID: primitives.OrderID;
    constructor(data: any);
}
export declare const CalculatedTradeState_Properties: Property[];
export declare class CalculatedTradeState extends Definition {
    /**
     * The Trade's ID.
     */
    id: primitives.TradeID;
    /**
     * The Trade's unrealized profit/loss.
     */
    unrealizedPL: primitives.AccountUnits;
    /**
     * Margin currently used by the Trade.
     */
    marginUsed: primitives.AccountUnits;
    constructor(data: any);
}
export declare class EntitySpec {
    context: any;
    Trade: typeof Trade;
    TradeSummary: typeof TradeSummary;
    CalculatedTradeState: typeof CalculatedTradeState;
    constructor(context: any);
    list(accountID: any, queryParams: any, responseHandler: any): any;
    listOpen(accountID: any, responseHandler: any): any;
    get(accountID: any, tradeSpecifier: any, responseHandler: any): any;
    close(accountID: any, tradeSpecifier: any, bodyParams: any, responseHandler: any): any;
    setClientExtensions(accountID: any, tradeSpecifier: any, bodyParams: any, responseHandler: any): any;
    setDependentOrders(accountID: any, tradeSpecifier: any, bodyParams: any, responseHandler: any): any;
}
export interface TradeListRequest {
    ids: string;
    state: primitives.TradeStateFilter;
    instrument: primitives.InstrumentName;
    count: number;
    beforeID: primitives.TradeID;
}
export interface TradeCloseRequest {
    body: TradeCloseRequestBody;
}
export interface TradeCloseRequestBody {
    /**
     * Indication of how much of the Trade to close. Either the string “ALL”
     * (indicating that all of the Trade should be closed), or a primitives.DecimalNumber
     * representing the number of units of the open Trade to Close using a
     * TradeClose MarketOrder. The units specified must always be positive, and
     * the magnitude of the value cannot exceed the magnitude of the Trade’s
     * open units.
     */
    units: string;
}
export interface TradeSetClientExtensionsRequest {
    body: TradeSetClientExtensionsRequestBody;
}
export interface TradeSetClientExtensionsRequestBody {
    /**
     * The Client Extensions to update the Trade with. Do not add, update, or
     * delete the Client Extensions if your account is associated with MT4.
     */
    clientExtensions?: primitives.ClientExtensions;
}
export interface TradeSetDependentOrdersRequest {
    body: TradeSetDependentOrdersRequestBody;
}
export interface TradeSetDependentOrdersRequestBody {
    /**
     * The specification of the Take Profit to create/modify/cancel. If
     * takeProfit is set to null, the Take Profit Order will be cancelled if it
     * exists. If takeProfit is not provided, the existing Take Profit Order
     * will not be modified. If a sub-field of takeProfit is not specified, that
     * field will be set to a default value on create, and be inherited by the
     * replacing order on modify.
     */
    takeProfit?: primitives.TakeProfitDetails;
    /**
     * The specification of the Stop Loss to create/modify/cancel. If stopLoss
     * is set to null, the Stop Loss Order will be cancelled if it exists. If
     * stopLoss is not provided, the existing Stop Loss Order will not be
     * modified. If a sub-field of stopLoss is not specified, that field will be
     * set to a default value on create, and be inherited by the replacing order
     * on modify.
     */
    stopLoss?: primitives.StopLossDetails;
    /**
     * The specification of the Trailing Stop Loss to create/modify/cancel. If
     * trailingStopLoss is set to null, the Trailing Stop Loss Order will be
     * cancelled if it exists. If trailingStopLoss is not provided, the existing
     * Trailing Stop Loss Order will not be modified. If a sub-field of
     * trailingStopLoss is not specified, that field will be set to a default
     * value on create, and be inherited by the replacing order on modify.
     */
    trailingStopLoss?: primitives.TrailingStopLossDetails;
}
export declare type TradeListResult = TradeListResult200;
export interface TradeListResult200 {
    /**
     * The list of Trade detail objects
     */
    trades?: Trade[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: primitives.TransactionID;
}
export declare type TradeListOpenResult = TradeListOpenResult200;
export interface TradeListOpenResult200 {
    /**
     * The Account's list of open Trades
     */
    trades?: Trade[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: primitives.TransactionID;
}
export declare type TradeGetResult = TradeGetResult200;
export interface TradeGetResult200 {
    /**
     * The details of the requested trade
     */
    trade?: Trade;
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: primitives.TransactionID;
}
export declare type TradeCloseResult = TradeCloseResult200 | TradeCloseResult400;
export interface TradeCloseResult200 {
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
    relatedTransactionIDs?: primitives.TransactionID[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: primitives.TransactionID;
}
export interface TradeCloseResult400 {
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
export declare type TradeSetClientExtensionsResult = TradeSetClientExtensionsResult200 | TradeSetClientExtensionsResult400;
export interface TradeSetClientExtensionsResult200 {
    /**
     * The Transaction that updates the Trade's Client Extensions.
     */
    tradeClientExtensionsModifyTransaction?: transaction.TradeClientExtensionsModifyTransaction;
    /**
     * The IDs of all Transactions that were created while satisfying the
     * request.
     */
    relatedTransactionIDs?: primitives.TransactionID[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: primitives.TransactionID;
}
export interface TradeSetClientExtensionsResult400 {
    /**
     * The Transaction that rejects the modification of the Trade's Client
     * Extensions.
     */
    tradeClientExtensionsModifyRejectTransaction?: transaction.TradeClientExtensionsModifyRejectTransaction;
    /**
     * The ID of the most recent Transaction created for the Account.
     */
    lastTransactionID?: primitives.TransactionID;
    /**
     * The IDs of all Transactions that were created while satisfying the
     * request.
     */
    relatedTransactionIDs?: primitives.TransactionID[];
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
export declare type TradeSetDependentOrdersResult = TradeSetDependentOrdersResult200 | TradeSetDependentOrdersResult400;
export interface TradeSetDependentOrdersResult200 {
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
     * The Transaction created that immediately fills the Trade&#x2019;s new Take
     * Profit Order. Only provided if the new Take Profit Order was immediately
     * filled.
     */
    takeProfitOrderFillTransaction?: transaction.OrderFillTransaction;
    /**
     * The Transaction created that immediately cancels the Trade&#x2019;s new Take
     * Profit Order. Only provided if the new Take Profit Order was immediately
     * cancelled.
     */
    takeProfitOrderCreatedCancelTransaction?: transaction.OrderCancelTransaction;
    /**
     * The Transaction created that cancels the Trade&#x2019;s existing Stop Loss
     * Order.
     */
    stopLossOrderCancelTransaction?: transaction.OrderCancelTransaction;
    /**
     * The Transaction created that creates a new Stop Loss Order for the Trade.
     */
    stopLossOrderTransaction?: transaction.StopLossOrderTransaction;
    /**
     * The Transaction created that immediately fills the Trade&#x2019;s new Stop
     * Order. Only provided if the new Stop Loss Order was immediately filled.
     */
    stopLossOrderFillTransaction?: transaction.OrderFillTransaction;
    /**
     * The Transaction created that immediately cancels the Trade&#x2019;s new Stop
     * Loss Order. Only provided if the new Stop Loss Order was immediately
     * cancelled.
     */
    stopLossOrderCreatedCancelTransaction?: transaction.OrderCancelTransaction;
    /**
     * The Transaction created that cancels the Trade&#x2019;s existing Trailing Stop
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
    relatedTransactionIDs?: primitives.TransactionID[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: primitives.TransactionID;
}
export interface TradeSetDependentOrdersResult400 {
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
     * cancellation of an Order in the client&#x2019;s Account.
     */
    stopLossOrderCancelRejectTransaction?: transaction.OrderCancelRejectTransaction;
    /**
     * A StopLossOrderRejectTransaction represents the rejection of the creation
     * of a StopLoss Order.
     */
    stopLossOrderRejectTransaction?: transaction.StopLossOrderRejectTransaction;
    /**
     * An OrderCancelRejectTransaction represents the rejection of the
     * cancellation of an Order in the client&#x2019;s Account.
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
    lastTransactionID?: primitives.TransactionID;
    /**
     * The IDs of all Transactions that were created while satisfying the
     * request.
     */
    relatedTransactionIDs?: primitives.TransactionID[];
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
    list(accountID: primitives.AccountID, body: TradeListRequest): Promise<TradeListResult>;
    listOpen(accountID: primitives.AccountID): Promise<TradeListOpenResult>;
    get(accountID: primitives.AccountID, tradeSpecifier: primitives.TradeSpecifier): Promise<TradeGetResult>;
    close(accountID: primitives.AccountID, tradeSpecifier: primitives.TradeSpecifier, body: TradeCloseRequest): Promise<TradeCloseResult>;
    setClientExtensions(accountID: primitives.AccountID, tradeSpecifier: primitives.TradeSpecifier, body: TradeSetClientExtensionsRequest): Promise<TradeSetClientExtensionsResult>;
    setDependentOrders(accountID: primitives.AccountID, tradeSpecifier: primitives.TradeSpecifier, body: TradeSetDependentOrdersRequest): Promise<TradeSetDependentOrdersResult>;
}
