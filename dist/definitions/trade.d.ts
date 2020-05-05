import * as order from './order';
import * as transaction from './transaction';
import * as pricingCommon from './pricingCommon';
import * as primitives from './primitives';
/**
 * The Trade’s identifier, unique within the Trade’s Account. https://developer.oanda.com/rest-live-v20/trade-df/
 */
export declare type TradeID = string;
/**
 * The current state of the Trade. https://developer.oanda.com/rest-live-v20/trade-df/
 */
export declare enum TradeState {
    /**
     * The Trade is currently open
     */
    'OPEN' = "OPEN",
    /**
     * The Trade has been fully closed
     */
    'CLOSED' = "CLOSED",
    /**
     * The Trade will be closed as soon as the trade’s instrument becomes tradeable
     */
    'CLOSE_WHEN_TRADEABLE' = "CLOSE_WHEN_TRADEABLE"
}
/**
 * The state to filter the Trades by https://developer.oanda.com/rest-live-v20/trade-df/
 */
export declare enum TradeStateFilter {
    /**
     * The Trades that are currently open
     */
    'OPEN' = "OPEN",
    /**
     * The Trades that have been fully closed
     */
    'CLOSED' = "CLOSED",
    /**
     * The Trades  that will be closed as soon as the trades’ instrument becomes tradeable
     */
    'CLOSE_WHEN_TRADEABLE' = "CLOSE_WHEN_TRADEABLE",
    /**
     * The Trades that are in any of the possible states listed above.
     */
    'ALL' = "ALL"
}
/**
 * The identification of a Trade as referred to by clients https://developer.oanda.com/rest-live-v20/trade-df/
 */
export declare type TradeSpecifier = string;
/**
 * The specification of a Trade within an Account. This includes the full representation of the Trade’s dependent Orders in addition to the IDs of those Orders. https://developer.oanda.com/rest-live-v20/trade-df/
 */
export interface Trade {
    /**
     * The Trade's identifier, unique within the Trade's Account.
     */
    id?: TradeID;
    /**
     * The Trade's Instrument.
     */
    instrument?: primitives.InstrumentName;
    /**
     * The execution price of the Trade.
     */
    price?: pricingCommon.PriceValue;
    /**
     * The date/time when the Trade was opened.
     */
    openTime?: primitives.DateTime;
    /**
     * The current state of the Trade.
     */
    state?: TradeState;
    /**
     * The initial size of the Trade. Negative values indicate a short Trade,
     * and positive values indicate a long Trade.
     */
    initialUnits?: primitives.DecimalNumber;
    /**
     * The margin required at the time the Trade was created. Note, this is the
     * &#x2018;pure' margin required, it is not the &#x2018;effective' margin used that
     * factors in the trade risk if a GSLO is attached to the trade.
     */
    initialMarginRequired?: primitives.AccountUnits;
    /**
     * The number of units currently open for the Trade. This value is reduced
     * to 0.0 as the Trade is closed.
     */
    currentUnits?: primitives.DecimalNumber;
    /**
     * The total profit/loss realized on the closed portion of the Trade.
     */
    realizedPL?: primitives.AccountUnits;
    /**
     * The unrealized profit/loss on the open portion of the Trade.
     */
    unrealizedPL?: primitives.AccountUnits;
    /**
     * Margin currently used by the Trade.
     */
    marginUsed?: primitives.AccountUnits;
    /**
     * The average closing price of the Trade. Only present if the Trade has
     * been closed or reduced at least once.
     */
    averageClosePrice?: pricingCommon.PriceValue;
    /**
     * The IDs of the Transactions that have closed portions of this Trade.
     */
    closingTransactionIDs?: transaction.TransactionID[];
    /**
     * The financing paid/collected for this Trade.
     */
    financing?: primitives.AccountUnits;
    /**
     * The dividend adjustment paid for this Trade.
     */
    dividendAdjustment?: primitives.AccountUnits;
    /**
     * The date/time when the Trade was fully closed. Only provided for Trades
     * whose state is CLOSED.
     */
    closeTime?: primitives.DateTime;
    /**
     * The client extensions of the Trade.
     */
    clientExtensions?: transaction.ClientExtensions;
    /**
     * Full representation of the Trade's Take Profit Order, only provided if
     * such an Order exists.
     */
    takeProfitOrder?: order.TakeProfitOrder;
    /**
     * Full representation of the Trade's Stop Loss Order, only provided if such
     * an Order exists.
     */
    stopLossOrder?: order.StopLossOrder;
    /**
     * Full representation of the Trade's Trailing Stop Loss Order, only
     * provided if such an Order exists.
     */
    trailingStopLossOrder?: order.TrailingStopLossOrder;
}
/**
 * The summary of a Trade within an Account. This representation does not provide the full details of the Trade’s dependent Orders. https://developer.oanda.com/rest-live-v20/trade-df/
 */
export interface TradeSummary {
    /**
     * The Trade's identifier, unique within the Trade's Account.
     */
    id?: TradeID;
    /**
     * The Trade's Instrument.
     */
    instrument?: primitives.InstrumentName;
    /**
     * The execution price of the Trade.
     */
    price?: pricingCommon.PriceValue;
    /**
     * The date/time when the Trade was opened.
     */
    openTime?: primitives.DateTime;
    /**
     * The current state of the Trade.
     */
    state?: TradeState;
    /**
     * The initial size of the Trade. Negative values indicate a short Trade,
     * and positive values indicate a long Trade.
     */
    initialUnits?: primitives.DecimalNumber;
    /**
     * The margin required at the time the Trade was created. Note, this is the
     * &#x2018;pure' margin required, it is not the &#x2018;effective' margin used that
     * factors in the trade risk if a GSLO is attached to the trade.
     */
    initialMarginRequired?: primitives.AccountUnits;
    /**
     * The number of units currently open for the Trade. This value is reduced
     * to 0.0 as the Trade is closed.
     */
    currentUnits?: primitives.DecimalNumber;
    /**
     * The total profit/loss realized on the closed portion of the Trade.
     */
    realizedPL?: primitives.AccountUnits;
    /**
     * The unrealized profit/loss on the open portion of the Trade.
     */
    unrealizedPL?: primitives.AccountUnits;
    /**
     * Margin currently used by the Trade.
     */
    marginUsed?: primitives.AccountUnits;
    /**
     * The average closing price of the Trade. Only present if the Trade has
     * been closed or reduced at least once.
     */
    averageClosePrice?: pricingCommon.PriceValue;
    /**
     * The IDs of the Transactions that have closed portions of this Trade.
     */
    closingTransactionIDs?: transaction.TransactionID[];
    /**
     * The financing paid/collected for this Trade.
     */
    financing?: primitives.AccountUnits;
    /**
     * The dividend adjustment paid for this Trade.
     */
    dividendAdjustment?: primitives.AccountUnits;
    /**
     * The date/time when the Trade was fully closed. Only provided for Trades
     * whose state is CLOSED.
     */
    closeTime?: primitives.DateTime;
    /**
     * The client extensions of the Trade.
     */
    clientExtensions?: transaction.ClientExtensions;
    /**
     * ID of the Trade's Take Profit Order, only provided if such an Order
     * exists.
     */
    takeProfitOrderID?: order.OrderID;
    /**
     * ID of the Trade's Stop Loss Order, only provided if such an Order exists.
     */
    stopLossOrderID?: order.OrderID;
    /**
     * ID of the Trade's Trailing Stop Loss Order, only provided if such an
     * Order exists.
     */
    trailingStopLossOrderID?: order.OrderID;
}
/**
 * The dynamic (calculated) state of an open Trade https://developer.oanda.com/rest-live-v20/trade-df/
 */
export interface CalculatedTradeState {
    /**
     * The Trade's ID.
     */
    id?: TradeID;
    /**
     * The Trade's unrealized profit/loss.
     */
    unrealizedPL?: primitives.AccountUnits;
    /**
     * Margin currently used by the Trade.
     */
    marginUsed?: primitives.AccountUnits;
}
/**
 * The classification of TradePLs. https://developer.oanda.com/rest-live-v20/trade-df/
 */
export declare enum TradePL {
    /**
     * An open Trade currently has a positive (profitable) unrealized P/L, or a closed Trade realized a positive amount of P/L.
     */
    'POSITIVE' = "POSITIVE",
    /**
     * An open Trade currently has a negative (losing) unrealized P/L, or a closed Trade realized a negative amount of P/L.
     */
    'NEGATIVE' = "NEGATIVE",
    /**
     * An open Trade currently has unrealized P/L of zero (neither profitable nor losing), or a closed Trade realized a P/L amount of zero.
     */
    'ZERO' = "ZERO"
}
