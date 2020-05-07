export { Trade, TradeSummary, CalculatedTradeState } from '../trade';
/**
 * The Trade’s identifier, unique within the Trade’s Account. https://developer.oanda.com/rest-live-v20/trade-df/
 */
export declare type TradeID = string;
/**
 * The identification of a Trade as referred to by clients https://developer.oanda.com/rest-live-v20/trade-df/
 */
export declare type TradeSpecifier = string;
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
