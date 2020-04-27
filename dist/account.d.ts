import { Definition, Property } from './base';
import * as trade from './trade';
import * as position from './position';
import * as order from './order';
import * as transaction from './transaction';
import * as primitives from './primitives';
export declare const Account_Properties: Property[];
export declare class Account extends Definition {
    /**
     * The Account's identifier
     */
    id: primitives.AccountID;
    /**
     * Client-assigned alias for the Account. Only provided if the Account has an alias set
     */
    alias: string;
    /**
     * The home currency of the Account
     */
    currency: primitives.Currency;
    /**
     * The current balance of the Account.
     */
    balance: primitives.AccountUnits;
    /**
     * ID of the user that created the Account.
     */
    createdByUserID: number;
    /**
     * The date/time when the Account was created.
     */
    createdTime: primitives.DateTime;
    /**
     * The current guaranteed Stop Loss Order mode of the Account.
     */
    guaranteedStopLossOrderMode: primitives.GuaranteedStopLossOrderMode;
    /**
     * The total profit/loss realized over the lifetime of the Account.
     */
    pl: primitives.AccountUnits;
    /**
     * The total realized profit/loss for the Account since it was last reset by the client.
     */
    resettablePL: primitives.AccountUnits;
    /**
     * The date/time that the Account's resettablePL was last reset.
     */
    resettablePLTime: primitives.DateTime;
    /**
     * The total amount of financing paid/collected over the lifetime of the Account.
     */
    financing: primitives.AccountUnits;
    /**
     * The total amount of commission paid over the lifetime of the Account.
     */
    commission: primitives.AccountUnits;
    /**
     * The total amount of fees charged over the lifetime of the Account for the execution of guaranteed Stop Loss Orders.
     */
    guaranteedExecutionFees: primitives.AccountUnits;
    /**
     * Client-provided margin rate override for the Account. The effective margin rate of the Account is the lesser of this value and the OANDA margin rate for the Account's division. This value is only provided if a margin rate override exists for the Account.
     */
    marginRate: primitives.DecimalNumber;
    /**
     * The date/time when the Account entered a margin call state. Only provided if the Account is in a margin call.
     */
    marginCallEnterTime: primitives.DateTime;
    /**
     * The number of times that the Account's current margin call was extended.
     */
    marginCallExtensionCount: number;
    /**
     * The date/time of the Account's last margin call extension.
     */
    lastMarginCallExtensionTime: primitives.DateTime;
    /**
     * The number of Trades currently open in the Account.
     */
    openTradeCount: number;
    /**
     * The number of Positions currently open in the Account.
     */
    openPositionCount: number;
    /**
     * The number of Orders currently pending in the Account.
     */
    pendingOrderCount: number;
    /**
     * Flag indicating that the Account has hedging enabled.
     */
    hedgingEnabled: boolean;
    /**
     * The date/time of the last order that was filled for this account.
     */
    lastOrderFillTimestamp: primitives.DateTime;
    /**
     * The total unrealized profit/loss for all Trades currently open in the Account.
     */
    unrealizedPL: primitives.AccountUnits;
    /**
     * The net asset value of the Account. Equal to Account balance + unrealizedPL.
     */
    NAV: primitives.AccountUnits;
    /**
     * Margin currently used for the Account.
     */
    marginUsed: primitives.AccountUnits;
    /**
     * Margin available for Account currency.
     */
    marginAvailable: primitives.AccountUnits;
    /**
     * The value of the Account's open positions represented in the Account's home currency.
     */
    positionValue: primitives.AccountUnits;
    /**
     * The Account's margin closeout unrealized PL.
     */
    marginCloseoutUnrealizedPL: primitives.AccountUnits;
    /**
     * The Account's margin closeout NAV.
     */
    marginCloseoutNAV: primitives.AccountUnits;
    /**
     * The Account's margin closeout margin used.
     */
    marginCloseoutMarginUsed: primitives.AccountUnits;
    /**
     * The Account's margin closeout percentage. When this value is 1.0 or above the Account is in a margin closeout situation.
     */
    marginCloseoutPercent: primitives.DecimalNumber;
    /**
     * The value of the Account's open positions as used for margin closeout calculations represented in the Account's home currency.
     */
    marginCloseoutPositionValue: primitives.DecimalNumber;
    /**
     * The current WithdrawalLimit for the account which will be zero or a positive value indicating how much can be withdrawn from the account.
     */
    withdrawalLimit: primitives.AccountUnits;
    /**
     * The Account's margin call margin used.
     */
    marginCallMarginUsed: primitives.AccountUnits;
    /**
     * The Account's margin call percentage. When this value is 1.0 or above the Account is in a margin call situation.
     */
    marginCallPercent: primitives.DecimalNumber;
    /**
     * The ID of the last Transaction created for the Account.
     */
    lastTransactionID: primitives.TransactionID;
    /**
     * The details of the Trades currently open in the Account.
     */
    trades: trade.TradeSummary[];
    /**
     * The details all Account Positions.
     */
    positions: position.Position[];
    /**
     * The details of the Orders currently pending in the Account.
     */
    orders: order.Order[];
    constructor(data: {
        [k: string]: any;
    });
}
export declare const AccountChangesState_Properties: Property[];
export declare class AccountChangesState extends Definition {
    /**
     * The total unrealized profit/loss for all Trades currently open in the Account.
     */
    unrealizedPL: primitives.AccountUnits;
    /**
     * The net asset value of the Account. Equal to Account balance + unrealizedPL.
     */
    NAV: primitives.AccountUnits;
    /**
     * Margin currently used for the Account.
     */
    marginUsed: primitives.AccountUnits;
    /**
     * Margin available for Account currency.
     */
    marginAvailable: primitives.AccountUnits;
    /**
     * The value of the Account's open positions represented in the Account's home currency.
     */
    positionValue: primitives.AccountUnits;
    /**
     * The Account's margin closeout unrealized PL.
     */
    marginCloseoutUnrealizedPL: primitives.AccountUnits;
    /**
     * The Account's margin closeout NAV.
     */
    marginCloseoutNAV: primitives.AccountUnits;
    /**
     * The Account's margin closeout margin used.
     */
    marginCloseoutMarginUsed: primitives.AccountUnits;
    /**
     * The Account's margin closeout percentage. When this value is 1.0 or above the Account is in a margin closeout situation.
     */
    marginCloseoutPercent: primitives.DecimalNumber;
    /**
     * The value of the Account's open positions as used for margin closeout calculations represented in the Account's home currency.
     */
    marginCloseoutPositionValue: primitives.DecimalNumber;
    /**
     * The current WithdrawalLimit for the account which will be zero or a positive value indicating how much can be withdrawn from the account.
     */
    withdrawalLimit: primitives.AccountUnits;
    /**
     * The Account's margin call margin used.
     */
    marginCallMarginUsed: primitives.AccountUnits;
    /**
     * The Account's margin call percentage. When this value is 1.0 or above the Account is in a margin call situation.
     */
    marginCallPercent: primitives.DecimalNumber;
    /**
     * The price-dependent state of each pending Order in the Account.
     */
    orders: order.DynamicOrderState[];
    /**
     * The price-dependent state for each open Trade in the Account.
     */
    trades: trade.CalculatedTradeState[];
    /**
     * The price-dependent state for each open Position in the Account.
     */
    positions: position.CalculatedPositionState[];
    constructor(data: any);
}
export declare const AccountProperties_Properties: Property[];
export declare class AccountProperties extends Definition {
    /**
     * The Account's identifier
     */
    id: primitives.AccountID;
    /**
     * The Account's associated MT4 Account ID. This field will not be present if the Account is not an MT4 account.
     */
    mt4AccountID: number;
    /**
     * The Account's tags
     */
    tags: string[];
    constructor(data: any);
}
export declare const AccountSummary_Properties: Property[];
export declare class AccountSummary extends Definition {
    /**
     * The Account's identifier
     */
    id: primitives.AccountID;
    /**
     * Client-assigned alias for the Account. Only provided if the Account has an alias set
     */
    alias: string;
    /**
     * The home currency of the Account
     */
    currency: primitives.Currency;
    /**
     * The current balance of the Account.
     */
    balance: primitives.AccountUnits;
    /**
     * ID of the user that created the Account.
     */
    createdByUserID: number;
    /**
     * The date/time when the Account was created.
     */
    createdTime: primitives.DateTime;
    /**
     * The current guaranteed Stop Loss Order mode of the Account.
     */
    guaranteedStopLossOrderMode: primitives.GuaranteedStopLossOrderMode;
    /**
     * The total profit/loss realized over the lifetime of the Account.
     */
    pl: primitives.AccountUnits;
    /**
     * The total realized profit/loss for the Account since it was last reset by the client.
     */
    resettablePL: primitives.AccountUnits;
    /**
     * The date/time that the Account's resettablePL was last reset.
     */
    resettablePLTime: primitives.DateTime;
    /**
     * The total amount of financing paid/collected over the lifetime of the Account.
     */
    financing: primitives.AccountUnits;
    /**
     * The total amount of commission paid over the lifetime of the Account.
     */
    commission: primitives.AccountUnits;
    /**
     * The total amount of fees charged over the lifetime of the Account for the execution of guaranteed Stop Loss Orders.
     */
    guaranteedExecutionFees: primitives.AccountUnits;
    /**
     * Client-provided margin rate override for the Account. The effective margin rate of the Account is the lesser of this value and the OANDA margin rate for the Account's division. This value is only provided if a margin rate override exists for the Account.
     */
    marginRate: primitives.DecimalNumber;
    /**
     * The date/time when the Account entered a margin call state. Only provided if the Account is in a margin call.
     */
    marginCallEnterTime: primitives.DateTime;
    /**
     * The number of times that the Account's current margin call was extended.
     */
    marginCallExtensionCount: number;
    /**
     * The date/time of the Account's last margin call extension.
     */
    lastMarginCallExtensionTime: primitives.DateTime;
    /**
     * The number of Trades currently open in the Account.
     */
    openTradeCount: number;
    /**
     * The number of Positions currently open in the Account.
     */
    openPositionCount: number;
    /**
     * The number of Orders currently pending in the Account.
     */
    pendingOrderCount: number;
    /**
     * Flag indicating that the Account has hedging enabled.
     */
    hedgingEnabled: boolean;
    /**
     * The date/time of the last order that was filled for this account.
     */
    lastOrderFillTimestamp: primitives.DateTime;
    /**
     * The total unrealized profit/loss for all Trades currently open in the Account.
     */
    unrealizedPL: primitives.AccountUnits;
    /**
     * The net asset value of the Account. Equal to Account balance + unrealizedPL.
     */
    NAV: primitives.AccountUnits;
    /**
     * Margin currently used for the Account.
     */
    marginUsed: primitives.AccountUnits;
    /**
     * Margin available for Account currency.
     */
    marginAvailable: primitives.AccountUnits;
    /**
     * The value of the Account's open positions represented in the Account's home currency.
     */
    positionValue: primitives.AccountUnits;
    /**
     * The Account's margin closeout unrealized PL.
     */
    marginCloseoutUnrealizedPL: primitives.AccountUnits;
    /**
     * The Account's margin closeout NAV.
     */
    marginCloseoutNAV: primitives.AccountUnits;
    /**
     * The Account's margin closeout margin used.
     */
    marginCloseoutMarginUsed: primitives.AccountUnits;
    /**
     * The Account's margin closeout percentage. When this value is 1.0 or above the Account is in a margin closeout situation.
     */
    marginCloseoutPercent: primitives.DecimalNumber;
    /**
     * The value of the Account's open positions as used for margin closeout calculations represented in the Account's home currency.
     */
    marginCloseoutPositionValue: primitives.DecimalNumber;
    /**
     * The current WithdrawalLimit for the account which will be zero or a positive value indicating how much can be withdrawn from the account.
     */
    withdrawalLimit: primitives.AccountUnits;
    /**
     * The Account's margin call margin used.
     */
    marginCallMarginUsed: primitives.AccountUnits;
    /**
     * The Account's margin call percentage. When this value is 1.0 or above the Account is in a margin call situation.
     */
    marginCallPercent: primitives.DecimalNumber;
    /**
     * The ID of the last Transaction created for the Account.
     */
    lastTransactionID: primitives.TransactionID;
    constructor(data: any);
}
export declare const CalculatedAccountState_Properties: Property[];
export declare class CalculatedAccountState extends Definition {
    /**
     * The total unrealized profit/loss for all Trades currently open in the Account.
     */
    unrealizedPL: primitives.AccountUnits;
    /**
     * The net asset value of the Account. Equal to Account balance + unrealizedPL.
     */
    NAV: primitives.AccountUnits;
    /**
     * Margin currently used for the Account.
     */
    marginUsed: primitives.AccountUnits;
    /**
     * Margin available for Account currency.
     */
    marginAvailable: primitives.AccountUnits;
    /**
     * The value of the Account's open positions represented in the Account's home currency.
     */
    positionValue: primitives.AccountUnits;
    /**
     * The Account's margin closeout unrealized PL.
     */
    marginCloseoutUnrealizedPL: primitives.AccountUnits;
    /**
     * The Account's margin closeout NAV.
     */
    marginCloseoutNAV: primitives.AccountUnits;
    /**
     * The Account's margin closeout margin used.
     */
    marginCloseoutMarginUsed: primitives.AccountUnits;
    /**
     * The Account's margin closeout percentage. When this value is 1.0 or above the Account is in a margin closeout situation.
     */
    marginCloseoutPercent: primitives.DecimalNumber;
    /**
     * The value of the Account's open positions as used for margin closeout calculations represented in the Account's home currency.
     */
    marginCloseoutPositionValue: primitives.DecimalNumber;
    /**
     * The current WithdrawalLimit for the account which will be zero or a positive value indicating how much can be withdrawn from the account.
     */
    withdrawalLimit: primitives.AccountUnits;
    /**
     * The Account's margin call margin used.
     */
    marginCallMarginUsed: primitives.AccountUnits;
    /**
     * The Account's margin call percentage. When this value is 1.0 or above the Account is in a margin call situation.
     */
    marginCallPercent: primitives.DecimalNumber;
    constructor(data: any);
}
export declare const AccountChanges_Properties: Property[];
export declare class AccountChanges extends Definition {
    /**
     * The Orders created. These Orders may have been filled, cancelled or triggered in the same period.
     */
    ordersCreated: order.Order[];
    /**
     * The Orders cancelled.
     */
    ordersCancelled: order.Order[];
    /**
     * The Orders filled.
     */
    ordersFilled: order.Order[];
    /**
     * The Orders triggered.
     */
    ordersTriggered: order.Order[];
    /**
     * The Trades opened.
     */
    tradesOpened: trade.TradeSummary[];
    /**
     * The Trades reduced.
     */
    tradesReduced: trade.TradeSummary[];
    /**
     * The Trades closed.
     */
    tradesClosed: trade.TradeSummary[];
    /**
     * The Positions changed.
     */
    positions: position.Position[];
    /**
     * The Transactions that have been generated.
     */
    transactions: transaction.Transaction[];
    constructor(data: any);
}
export declare class EntitySpec {
    context: any;
    Account: typeof Account;
    AccountChangesState: typeof AccountChangesState;
    AccountProperties: typeof AccountProperties;
    AccountSummary: typeof AccountSummary;
    CalculatedAccountState: typeof CalculatedAccountState;
    AccountChanges: typeof AccountChanges;
    constructor(context: any);
    list(responseHandler: any): any;
    get(accountID: any, responseHandler: any): any;
    summary(accountID: any, responseHandler: any): any;
    instruments(accountID: any, queryParams: any, responseHandler: any): any;
    configure(accountID: any, bodyParams: any, responseHandler: any): any;
    changes(accountID: any, queryParams: any, responseHandler: any): any;
}
export interface AccountInstrumentsRequest {
    instruments: string;
}
export interface AccountConfigureRequest {
    body: AccountConfigureRequestBody;
}
export interface AccountConfigureRequestBody {
    /**
     * Client-defined alias (name) for the Account
     */
    alias?: string;
    /**
     * The string representation of a decimal number.
     */
    marginRate?: primitives.DecimalNumber;
}
export interface AccountChangesRequest {
    sinceTransactionID: primitives.TransactionID;
}
export declare type AccountListResult = AccountListResult200;
export interface AccountListResult200 {
    /**
     * The list of Accounts the client is authorized to access and their
     * associated properties.
     */
    accounts?: AccountProperties[];
}
export declare type AccountGetResult = AccountGetResult200;
export interface AccountGetResult200 {
    /**
     * The full details of the requested Account.
     */
    account?: Account;
    /**
     * The ID of the most recent Transaction created for the Account.
     */
    lastTransactionID?: primitives.TransactionID;
}
export declare type AccountSummaryResult = AccountSummaryResult200;
export interface AccountSummaryResult200 {
    /**
     * The summary of the requested Account.
     */
    account?: AccountSummary;
    /**
     * The ID of the most recent Transaction created for the Account.
     */
    lastTransactionID?: primitives.TransactionID;
}
export declare type AccountInstrumentsResult = AccountInstrumentsResult200;
export interface AccountInstrumentsResult200 {
    /**
     * The requested list of instruments.
     */
    instruments?: primitives.Instrument[];
    /**
     * The ID of the most recent Transaction created for the Account.
     */
    lastTransactionID?: primitives.TransactionID;
}
export declare type AccountConfigureResult = AccountConfigureResult200 | AccountConfigureResult400;
export interface AccountConfigureResult200 {
    /**
     * The transaction that configures the Account.
     */
    clientConfigureTransaction?: transaction.ClientConfigureTransaction;
    /**
     * The ID of the last Transaction created for the Account.
     */
    lastTransactionID?: primitives.TransactionID;
}
export interface AccountConfigureResult400 {
    /**
     * The transaction that rejects the configuration of the Account.
     */
    clientConfigureRejectTransaction?: transaction.ClientConfigureRejectTransaction;
    /**
     * The ID of the last Transaction created for the Account.
     */
    lastTransactionID?: primitives.TransactionID;
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
export declare type AccountChangesResult = AccountChangesResult200;
export interface AccountChangesResult200 {
    /**
     * The changes to the Account's Orders, Trades and Positions since the
     * specified Transaction ID. Only provided if the sinceTransactionID is
     * supplied to the poll request.
     */
    changes?: AccountChanges;
    /**
     * The Account&#x2019;s current price-dependent state.
     */
    state?: AccountChangesState;
    /**
     * The ID of the last Transaction created for the Account.  This Transaction
     * ID should be used for future poll requests, as the client has already
     * observed all changes up to and including it.
     */
    lastTransactionID?: primitives.TransactionID;
}
export declare class API {
    private context;
    private resolver;
    constructor(context: any, resolver: any);
    list(): Promise<AccountListResult>;
    get(accountID: primitives.AccountID): Promise<AccountGetResult>;
    summary(accountID: primitives.AccountID): Promise<AccountSummaryResult>;
    instruments(accountID: primitives.AccountID, body: AccountInstrumentsRequest): Promise<AccountInstrumentsResult>;
    configure(accountID: primitives.AccountID, body: AccountConfigureRequest): Promise<AccountConfigureResult>;
    changes(accountID: primitives.AccountID, body: AccountChangesRequest): Promise<AccountChangesResult>;
}
