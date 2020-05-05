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
