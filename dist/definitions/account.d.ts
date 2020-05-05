import * as order from './order';
import * as trade from './trade';
import * as position from './position';
import * as transaction from './transaction';
import * as primitives from './primitives';
/**
 * The string representation of an Account Identifier. https://developer.oanda.com/rest-live-v20/account-df/
 */
export declare type AccountID = string;
/**
 * The full details of a client’s Account. This includes full open Trade, open Position and pending Order representation. https://developer.oanda.com/rest-live-v20/account-df/
 */
export interface Account {
    /**
     * The Account's identifier
     */
    id?: AccountID;
    /**
     * Client-assigned alias for the Account. Only provided if the Account has
     * an alias set
     */
    alias?: string;
    /**
     * The home currency of the Account
     */
    currency?: primitives.Currency;
    /**
     * ID of the user that created the Account.
     */
    createdByUserID?: number;
    /**
     * The date/time when the Account was created.
     */
    createdTime?: primitives.DateTime;
    /**
     * The current guaranteed Stop Loss Order mode of the Account.
     */
    guaranteedStopLossOrderMode?: GuaranteedStopLossOrderMode;
    /**
     * The date/time that the Account's resettablePL was last reset.
     */
    resettablePLTime?: primitives.DateTime;
    /**
     * Client-provided margin rate override for the Account. The effective
     * margin rate of the Account is the lesser of this value and the OANDA
     * margin rate for the Account's division. This value is only provided if a
     * margin rate override exists for the Account.
     */
    marginRate?: primitives.DecimalNumber;
    /**
     * The number of Trades currently open in the Account.
     */
    openTradeCount?: number;
    /**
     * The number of Positions currently open in the Account.
     */
    openPositionCount?: number;
    /**
     * The number of Orders currently pending in the Account.
     */
    pendingOrderCount?: number;
    /**
     * Flag indicating that the Account has hedging enabled.
     */
    hedgingEnabled?: boolean;
    /**
     * The total unrealized profit/loss for all Trades currently open in the
     * Account.
     */
    unrealizedPL?: primitives.AccountUnits;
    /**
     * The net asset value of the Account. Equal to Account balance +
     * unrealizedPL.
     */
    NAV?: primitives.AccountUnits;
    /**
     * Margin currently used for the Account.
     */
    marginUsed?: primitives.AccountUnits;
    /**
     * Margin available for Account currency.
     */
    marginAvailable?: primitives.AccountUnits;
    /**
     * The value of the Account's open positions represented in the Account's
     * home currency.
     */
    positionValue?: primitives.AccountUnits;
    /**
     * The Account's margin closeout unrealized PL.
     */
    marginCloseoutUnrealizedPL?: primitives.AccountUnits;
    /**
     * The Account's margin closeout NAV.
     */
    marginCloseoutNAV?: primitives.AccountUnits;
    /**
     * The Account's margin closeout margin used.
     */
    marginCloseoutMarginUsed?: primitives.AccountUnits;
    /**
     * The Account's margin closeout percentage. When this value is 1.0 or above
     * the Account is in a margin closeout situation.
     */
    marginCloseoutPercent?: primitives.DecimalNumber;
    /**
     * The value of the Account's open positions as used for margin closeout
     * calculations represented in the Account's home currency.
     */
    marginCloseoutPositionValue?: primitives.DecimalNumber;
    /**
     * The current WithdrawalLimit for the account which will be zero or a
     * positive value indicating how much can be withdrawn from the account.
     */
    withdrawalLimit?: primitives.AccountUnits;
    /**
     * The Account's margin call margin used.
     */
    marginCallMarginUsed?: primitives.AccountUnits;
    /**
     * The Account's margin call percentage. When this value is 1.0 or above the
     * Account is in a margin call situation.
     */
    marginCallPercent?: primitives.DecimalNumber;
    /**
     * The current balance of the account.
     */
    balance?: primitives.AccountUnits;
    /**
     * The total profit/loss realized over the lifetime of the Account.
     */
    pl?: primitives.AccountUnits;
    /**
     * The total realized profit/loss for the account since it was last reset by
     * the client.
     */
    resettablePL?: primitives.AccountUnits;
    /**
     * The total amount of financing paid/collected over the lifetime of the
     * account.
     */
    financing?: primitives.AccountUnits;
    /**
     * The total amount of commission paid over the lifetime of the Account.
     */
    commission?: primitives.AccountUnits;
    /**
     * The total amount of dividend adjustment paid over the lifetime of the
     * Account in the Account's home currency.
     */
    dividendAdjustment?: primitives.AccountUnits;
    /**
     * The total amount of fees charged over the lifetime of the Account for the
     * execution of guaranteed Stop Loss Orders.
     */
    guaranteedExecutionFees?: primitives.AccountUnits;
    /**
     * The date/time when the Account entered a margin call state. Only provided
     * if the Account is in a margin call.
     */
    marginCallEnterTime?: primitives.DateTime;
    /**
     * The number of times that the Account's current margin call was extended.
     */
    marginCallExtensionCount?: number;
    /**
     * The date/time of the Account's last margin call extension.
     */
    lastMarginCallExtensionTime?: primitives.DateTime;
    /**
     * The ID of the last Transaction created for the Account.
     */
    lastTransactionID?: transaction.TransactionID;
    /**
     * The details of the Trades currently open in the Account.
     */
    trades?: trade.TradeSummary[];
    /**
     * The details all Account Positions.
     */
    positions?: position.Position[];
    /**
     * The details of the Orders currently pending in the Account.
     */
    orders?: order.Order[];
}
/**
 * An AccountState Object is used to represent an Account’s current price-dependent state. Price-dependent Account state is dependent on OANDA’s current Prices, and includes things like unrealized PL, NAV and Trailing Stop Loss Order state. Fields will be omitted if their value has not changed since the specified transaction ID. https://developer.oanda.com/rest-live-v20/account-df/
 */
export interface AccountChangesState {
    /**
     * The total unrealized profit/loss for all Trades currently open in the
     * Account.
     */
    unrealizedPL?: primitives.AccountUnits;
    /**
     * The net asset value of the Account. Equal to Account balance +
     * unrealizedPL.
     */
    NAV?: primitives.AccountUnits;
    /**
     * Margin currently used for the Account.
     */
    marginUsed?: primitives.AccountUnits;
    /**
     * Margin available for Account currency.
     */
    marginAvailable?: primitives.AccountUnits;
    /**
     * The value of the Account's open positions represented in the Account's
     * home currency.
     */
    positionValue?: primitives.AccountUnits;
    /**
     * The Account's margin closeout unrealized PL.
     */
    marginCloseoutUnrealizedPL?: primitives.AccountUnits;
    /**
     * The Account's margin closeout NAV.
     */
    marginCloseoutNAV?: primitives.AccountUnits;
    /**
     * The Account's margin closeout margin used.
     */
    marginCloseoutMarginUsed?: primitives.AccountUnits;
    /**
     * The Account's margin closeout percentage. When this value is 1.0 or above
     * the Account is in a margin closeout situation.
     */
    marginCloseoutPercent?: primitives.DecimalNumber;
    /**
     * The value of the Account's open positions as used for margin closeout
     * calculations represented in the Account's home currency.
     */
    marginCloseoutPositionValue?: primitives.DecimalNumber;
    /**
     * The current WithdrawalLimit for the account which will be zero or a
     * positive value indicating how much can be withdrawn from the account.
     */
    withdrawalLimit?: primitives.AccountUnits;
    /**
     * The Account's margin call margin used.
     */
    marginCallMarginUsed?: primitives.AccountUnits;
    /**
     * The Account's margin call percentage. When this value is 1.0 or above the
     * Account is in a margin call situation.
     */
    marginCallPercent?: primitives.DecimalNumber;
    /**
     * The current balance of the account.
     */
    balance?: primitives.AccountUnits;
    /**
     * The total profit/loss realized over the lifetime of the Account.
     */
    pl?: primitives.AccountUnits;
    /**
     * The total realized profit/loss for the account since it was last reset by
     * the client.
     */
    resettablePL?: primitives.AccountUnits;
    /**
     * The total amount of financing paid/collected over the lifetime of the
     * account.
     */
    financing?: primitives.AccountUnits;
    /**
     * The total amount of commission paid over the lifetime of the Account.
     */
    commission?: primitives.AccountUnits;
    /**
     * The total amount of dividend adjustment paid over the lifetime of the
     * Account in the Account's home currency.
     */
    dividendAdjustment?: primitives.AccountUnits;
    /**
     * The total amount of fees charged over the lifetime of the Account for the
     * execution of guaranteed Stop Loss Orders.
     */
    guaranteedExecutionFees?: primitives.AccountUnits;
    /**
     * The date/time when the Account entered a margin call state. Only provided
     * if the Account is in a margin call.
     */
    marginCallEnterTime?: primitives.DateTime;
    /**
     * The number of times that the Account's current margin call was extended.
     */
    marginCallExtensionCount?: number;
    /**
     * The date/time of the Account's last margin call extension.
     */
    lastMarginCallExtensionTime?: primitives.DateTime;
    /**
     * The price-dependent state of each pending Order in the Account.
     */
    orders?: order.DynamicOrderState[];
    /**
     * The price-dependent state for each open Trade in the Account.
     */
    trades?: trade.CalculatedTradeState[];
    /**
     * The price-dependent state for each open Position in the Account.
     */
    positions?: position.CalculatedPositionState[];
}
/**
 * Properties related to an Account. https://developer.oanda.com/rest-live-v20/account-df/
 */
export interface AccountProperties {
    /**
     * The Account's identifier
     */
    id?: AccountID;
    /**
     * The Account's associated MT4 Account ID. This field will not be present
     * if the Account is not an MT4 account.
     */
    mt4AccountID?: number;
    /**
     * The Account's tags
     */
    tags?: string[];
}
/**
 * The overall behaviour of the Account regarding guaranteed Stop Loss Orders. https://developer.oanda.com/rest-live-v20/account-df/
 */
export declare enum GuaranteedStopLossOrderMode {
    /**
     * The Account is not permitted to create guaranteed Stop Loss Orders.
     */
    'DISABLED' = "DISABLED",
    /**
     * The Account is able, but not required to have guaranteed Stop Loss Orders for open Trades.
     */
    'ALLOWED' = "ALLOWED",
    /**
     * The Account is required to have guaranteed Stop Loss Orders for all open Trades.
     */
    'REQUIRED' = "REQUIRED"
}
/**
 * A summary representation of a client’s Account. The AccountSummary does not provide to full specification of pending Orders, open Trades and Positions. https://developer.oanda.com/rest-live-v20/account-df/
 */
export interface AccountSummary {
    /**
     * The Account's identifier
     */
    id?: AccountID;
    /**
     * Client-assigned alias for the Account. Only provided if the Account has
     * an alias set
     */
    alias?: string;
    /**
     * The home currency of the Account
     */
    currency?: primitives.Currency;
    /**
     * ID of the user that created the Account.
     */
    createdByUserID?: number;
    /**
     * The date/time when the Account was created.
     */
    createdTime?: primitives.DateTime;
    /**
     * The current guaranteed Stop Loss Order mode of the Account.
     */
    guaranteedStopLossOrderMode?: GuaranteedStopLossOrderMode;
    /**
     * The date/time that the Account's resettablePL was last reset.
     */
    resettablePLTime?: primitives.DateTime;
    /**
     * Client-provided margin rate override for the Account. The effective
     * margin rate of the Account is the lesser of this value and the OANDA
     * margin rate for the Account's division. This value is only provided if a
     * margin rate override exists for the Account.
     */
    marginRate?: primitives.DecimalNumber;
    /**
     * The number of Trades currently open in the Account.
     */
    openTradeCount?: number;
    /**
     * The number of Positions currently open in the Account.
     */
    openPositionCount?: number;
    /**
     * The number of Orders currently pending in the Account.
     */
    pendingOrderCount?: number;
    /**
     * Flag indicating that the Account has hedging enabled.
     */
    hedgingEnabled?: boolean;
    /**
     * The total unrealized profit/loss for all Trades currently open in the
     * Account.
     */
    unrealizedPL?: primitives.AccountUnits;
    /**
     * The net asset value of the Account. Equal to Account balance +
     * unrealizedPL.
     */
    NAV?: primitives.AccountUnits;
    /**
     * Margin currently used for the Account.
     */
    marginUsed?: primitives.AccountUnits;
    /**
     * Margin available for Account currency.
     */
    marginAvailable?: primitives.AccountUnits;
    /**
     * The value of the Account's open positions represented in the Account's
     * home currency.
     */
    positionValue?: primitives.AccountUnits;
    /**
     * The Account's margin closeout unrealized PL.
     */
    marginCloseoutUnrealizedPL?: primitives.AccountUnits;
    /**
     * The Account's margin closeout NAV.
     */
    marginCloseoutNAV?: primitives.AccountUnits;
    /**
     * The Account's margin closeout margin used.
     */
    marginCloseoutMarginUsed?: primitives.AccountUnits;
    /**
     * The Account's margin closeout percentage. When this value is 1.0 or above
     * the Account is in a margin closeout situation.
     */
    marginCloseoutPercent?: primitives.DecimalNumber;
    /**
     * The value of the Account's open positions as used for margin closeout
     * calculations represented in the Account's home currency.
     */
    marginCloseoutPositionValue?: primitives.DecimalNumber;
    /**
     * The current WithdrawalLimit for the account which will be zero or a
     * positive value indicating how much can be withdrawn from the account.
     */
    withdrawalLimit?: primitives.AccountUnits;
    /**
     * The Account's margin call margin used.
     */
    marginCallMarginUsed?: primitives.AccountUnits;
    /**
     * The Account's margin call percentage. When this value is 1.0 or above the
     * Account is in a margin call situation.
     */
    marginCallPercent?: primitives.DecimalNumber;
    /**
     * The current balance of the account.
     */
    balance?: primitives.AccountUnits;
    /**
     * The total profit/loss realized over the lifetime of the Account.
     */
    pl?: primitives.AccountUnits;
    /**
     * The total realized profit/loss for the account since it was last reset by
     * the client.
     */
    resettablePL?: primitives.AccountUnits;
    /**
     * The total amount of financing paid/collected over the lifetime of the
     * account.
     */
    financing?: primitives.AccountUnits;
    /**
     * The total amount of commission paid over the lifetime of the Account.
     */
    commission?: primitives.AccountUnits;
    /**
     * The total amount of dividend adjustment paid over the lifetime of the
     * Account in the Account's home currency.
     */
    dividendAdjustment?: primitives.AccountUnits;
    /**
     * The total amount of fees charged over the lifetime of the Account for the
     * execution of guaranteed Stop Loss Orders.
     */
    guaranteedExecutionFees?: primitives.AccountUnits;
    /**
     * The date/time when the Account entered a margin call state. Only provided
     * if the Account is in a margin call.
     */
    marginCallEnterTime?: primitives.DateTime;
    /**
     * The number of times that the Account's current margin call was extended.
     */
    marginCallExtensionCount?: number;
    /**
     * The date/time of the Account's last margin call extension.
     */
    lastMarginCallExtensionTime?: primitives.DateTime;
    /**
     * The ID of the last Transaction created for the Account.
     */
    lastTransactionID?: transaction.TransactionID;
}
/**
 * The mutable state of a client’s Account. https://developer.oanda.com/rest-live-v20/account-df/
 */
export interface AccumulatedAccountState {
    /**
     * The current balance of the account.
     */
    balance?: primitives.AccountUnits;
    /**
     * The total profit/loss realized over the lifetime of the Account.
     */
    pl?: primitives.AccountUnits;
    /**
     * The total realized profit/loss for the account since it was last reset by
     * the client.
     */
    resettablePL?: primitives.AccountUnits;
    /**
     * The total amount of financing paid/collected over the lifetime of the
     * account.
     */
    financing?: primitives.AccountUnits;
    /**
     * The total amount of commission paid over the lifetime of the Account.
     */
    commission?: primitives.AccountUnits;
    /**
     * The total amount of dividend adjustment paid over the lifetime of the
     * Account in the Account's home currency.
     */
    dividendAdjustment?: primitives.AccountUnits;
    /**
     * The total amount of fees charged over the lifetime of the Account for the
     * execution of guaranteed Stop Loss Orders.
     */
    guaranteedExecutionFees?: primitives.AccountUnits;
    /**
     * The date/time when the Account entered a margin call state. Only provided
     * if the Account is in a margin call.
     */
    marginCallEnterTime?: primitives.DateTime;
    /**
     * The number of times that the Account's current margin call was extended.
     */
    marginCallExtensionCount?: number;
    /**
     * The date/time of the Account's last margin call extension.
     */
    lastMarginCallExtensionTime?: primitives.DateTime;
}
/**
 * The dynamically calculated state of a client’s Account. https://developer.oanda.com/rest-live-v20/account-df/
 */
export interface CalculatedAccountState {
    /**
     * The total unrealized profit/loss for all Trades currently open in the
     * Account.
     */
    unrealizedPL?: primitives.AccountUnits;
    /**
     * The net asset value of the Account. Equal to Account balance +
     * unrealizedPL.
     */
    NAV?: primitives.AccountUnits;
    /**
     * Margin currently used for the Account.
     */
    marginUsed?: primitives.AccountUnits;
    /**
     * Margin available for Account currency.
     */
    marginAvailable?: primitives.AccountUnits;
    /**
     * The value of the Account's open positions represented in the Account's
     * home currency.
     */
    positionValue?: primitives.AccountUnits;
    /**
     * The Account's margin closeout unrealized PL.
     */
    marginCloseoutUnrealizedPL?: primitives.AccountUnits;
    /**
     * The Account's margin closeout NAV.
     */
    marginCloseoutNAV?: primitives.AccountUnits;
    /**
     * The Account's margin closeout margin used.
     */
    marginCloseoutMarginUsed?: primitives.AccountUnits;
    /**
     * The Account's margin closeout percentage. When this value is 1.0 or above
     * the Account is in a margin closeout situation.
     */
    marginCloseoutPercent?: primitives.DecimalNumber;
    /**
     * The value of the Account's open positions as used for margin closeout
     * calculations represented in the Account's home currency.
     */
    marginCloseoutPositionValue?: primitives.DecimalNumber;
    /**
     * The current WithdrawalLimit for the account which will be zero or a
     * positive value indicating how much can be withdrawn from the account.
     */
    withdrawalLimit?: primitives.AccountUnits;
    /**
     * The Account's margin call margin used.
     */
    marginCallMarginUsed?: primitives.AccountUnits;
    /**
     * The Account's margin call percentage. When this value is 1.0 or above the
     * Account is in a margin call situation.
     */
    marginCallPercent?: primitives.DecimalNumber;
}
/**
 * An AccountChanges Object is used to represent the changes to an Account’s Orders, Trades and Positions since a specified Account TransactionID in the past. https://developer.oanda.com/rest-live-v20/account-df/
 */
export interface AccountChanges {
    /**
     * The Orders created. These Orders may have been filled, cancelled or
     * triggered in the same period.
     */
    ordersCreated?: order.Order[];
    /**
     * The Orders cancelled.
     */
    ordersCancelled?: order.Order[];
    /**
     * The Orders filled.
     */
    ordersFilled?: order.Order[];
    /**
     * The Orders triggered.
     */
    ordersTriggered?: order.Order[];
    /**
     * The Trades opened.
     */
    tradesOpened?: trade.TradeSummary[];
    /**
     * The Trades reduced.
     */
    tradesReduced?: trade.TradeSummary[];
    /**
     * The Trades closed.
     */
    tradesClosed?: trade.TradeSummary[];
    /**
     * The Positions changed.
     */
    positions?: position.Position[];
    /**
     * The Transactions that have been generated.
     */
    transactions?: transaction.Transaction[];
}
/**
 * The financing mode of an Account https://developer.oanda.com/rest-live-v20/account-df/
 */
export declare enum AccountFinancingMode {
    /**
     * No financing is paid/charged for open Trades in the Account
     */
    'NO_FINANCING' = "NO_FINANCING",
    /**
     * Second-by-second financing is paid/charged for open Trades in the Account, both daily and when the the Trade is closed
     */
    'SECOND_BY_SECOND' = "SECOND_BY_SECOND",
    /**
     * A full day’s worth of financing is paid/charged for open Trades in the Account daily at 5pm New York time
     */
    'DAILY' = "DAILY"
}
/**
 * The way that position values for an Account are calculated and aggregated. https://developer.oanda.com/rest-live-v20/account-df/
 */
export declare enum PositionAggregationMode {
    /**
     * The Position value or margin for each side (long and short) of the Position are computed independently and added together.
     */
    'ABSOLUTE_SUM' = "ABSOLUTE_SUM",
    /**
     * The Position value or margin for each side (long and short) of the Position are computed independently. The Position value or margin chosen is the maximal absolute value of the two.
     */
    'MAXIMAL_SIDE' = "MAXIMAL_SIDE",
    /**
     * The units for each side (long and short) of the Position are netted together and the resulting value (long or short) is used to compute the Position value or margin.
     */
    'NET_SUM' = "NET_SUM"
}
