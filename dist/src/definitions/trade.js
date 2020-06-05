"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var trade_1 = require("../trade");
exports.Trade = trade_1.Trade;
exports.TradeSummary = trade_1.TradeSummary;
exports.CalculatedTradeState = trade_1.CalculatedTradeState;
/**
 * The current state of the Trade. https://developer.oanda.com/rest-live-v20/trade-df/
 */
var TradeState;
(function (TradeState) {
    /**
     * The Trade is currently open
     */
    TradeState["OPEN"] = "OPEN";
    /**
     * The Trade has been fully closed
     */
    TradeState["CLOSED"] = "CLOSED";
    /**
     * The Trade will be closed as soon as the trade’s instrument becomes tradeable
     */
    TradeState["CLOSE_WHEN_TRADEABLE"] = "CLOSE_WHEN_TRADEABLE";
})(TradeState = exports.TradeState || (exports.TradeState = {}));
/**
 * The state to filter the Trades by https://developer.oanda.com/rest-live-v20/trade-df/
 */
var TradeStateFilter;
(function (TradeStateFilter) {
    /**
     * The Trades that are currently open
     */
    TradeStateFilter["OPEN"] = "OPEN";
    /**
     * The Trades that have been fully closed
     */
    TradeStateFilter["CLOSED"] = "CLOSED";
    /**
     * The Trades  that will be closed as soon as the trades’ instrument becomes tradeable
     */
    TradeStateFilter["CLOSE_WHEN_TRADEABLE"] = "CLOSE_WHEN_TRADEABLE";
    /**
     * The Trades that are in any of the possible states listed above.
     */
    TradeStateFilter["ALL"] = "ALL";
})(TradeStateFilter = exports.TradeStateFilter || (exports.TradeStateFilter = {}));
/**
 * The classification of TradePLs. https://developer.oanda.com/rest-live-v20/trade-df/
 */
var TradePL;
(function (TradePL) {
    /**
     * An open Trade currently has a positive (profitable) unrealized P/L, or a closed Trade realized a positive amount of P/L.
     */
    TradePL["POSITIVE"] = "POSITIVE";
    /**
     * An open Trade currently has a negative (losing) unrealized P/L, or a closed Trade realized a negative amount of P/L.
     */
    TradePL["NEGATIVE"] = "NEGATIVE";
    /**
     * An open Trade currently has unrealized P/L of zero (neither profitable nor losing), or a closed Trade realized a P/L amount of zero.
     */
    TradePL["ZERO"] = "ZERO";
})(TradePL = exports.TradePL || (exports.TradePL = {}));
//# sourceMappingURL=trade.js.map