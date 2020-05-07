"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var account_1 = require("../account");
exports.Account = account_1.Account;
exports.AccountChangesState = account_1.AccountChangesState;
exports.AccountProperties = account_1.AccountProperties;
exports.AccountSummary = account_1.AccountSummary;
exports.CalculatedAccountState = account_1.CalculatedAccountState;
exports.AccountChanges = account_1.AccountChanges;
/**
 * The overall behaviour of the Account regarding guaranteed Stop Loss Orders. https://developer.oanda.com/rest-live-v20/account-df/
 */
var GuaranteedStopLossOrderMode;
(function (GuaranteedStopLossOrderMode) {
    /**
     * The Account is not permitted to create guaranteed Stop Loss Orders.
     */
    GuaranteedStopLossOrderMode["DISABLED"] = "DISABLED";
    /**
     * The Account is able, but not required to have guaranteed Stop Loss Orders for open Trades.
     */
    GuaranteedStopLossOrderMode["ALLOWED"] = "ALLOWED";
    /**
     * The Account is required to have guaranteed Stop Loss Orders for all open Trades.
     */
    GuaranteedStopLossOrderMode["REQUIRED"] = "REQUIRED";
})(GuaranteedStopLossOrderMode = exports.GuaranteedStopLossOrderMode || (exports.GuaranteedStopLossOrderMode = {}));
/**
 * The financing mode of an Account https://developer.oanda.com/rest-live-v20/account-df/
 */
var AccountFinancingMode;
(function (AccountFinancingMode) {
    /**
     * No financing is paid/charged for open Trades in the Account
     */
    AccountFinancingMode["NO_FINANCING"] = "NO_FINANCING";
    /**
     * Second-by-second financing is paid/charged for open Trades in the Account, both daily and when the the Trade is closed
     */
    AccountFinancingMode["SECOND_BY_SECOND"] = "SECOND_BY_SECOND";
    /**
     * A full day’s worth of financing is paid/charged for open Trades in the Account daily at 5pm New York time
     */
    AccountFinancingMode["DAILY"] = "DAILY";
})(AccountFinancingMode = exports.AccountFinancingMode || (exports.AccountFinancingMode = {}));
/**
 * The way that position values for an Account are calculated and aggregated. https://developer.oanda.com/rest-live-v20/account-df/
 */
var PositionAggregationMode;
(function (PositionAggregationMode) {
    /**
     * The Position value or margin for each side (long and short) of the Position are computed independently and added together.
     */
    PositionAggregationMode["ABSOLUTE_SUM"] = "ABSOLUTE_SUM";
    /**
     * The Position value or margin for each side (long and short) of the Position are computed independently. The Position value or margin chosen is the maximal absolute value of the two.
     */
    PositionAggregationMode["MAXIMAL_SIDE"] = "MAXIMAL_SIDE";
    /**
     * The units for each side (long and short) of the Position are netted together and the resulting value (long or short) is used to compute the Position value or margin.
     */
    PositionAggregationMode["NET_SUM"] = "NET_SUM";
})(PositionAggregationMode = exports.PositionAggregationMode || (exports.PositionAggregationMode = {}));
var AccumulatedAccountState = /** @class */ (function () {
    function AccumulatedAccountState() {
    }
    return AccumulatedAccountState;
}());
exports.AccumulatedAccountState = AccumulatedAccountState;
//# sourceMappingURL=account.js.map