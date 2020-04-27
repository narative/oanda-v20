import { Definition, Property } from './base';
import * as transaction from './transaction';
import * as primitives from './primitives';
export declare const Position_Properties: Property[];
export declare class Position extends Definition {
    /**
     * The Position's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * Profit/loss realized by the Position over the lifetime of the Account.
     */
    pl: primitives.AccountUnits;
    /**
     * The unrealized profit/loss of all open Trades that contribute to this Position.
     */
    unrealizedPL: primitives.AccountUnits;
    /**
     * Margin currently used by the Position.
     */
    marginUsed: primitives.AccountUnits;
    /**
     * Profit/loss realized by the Position since the Account's resettablePL was last reset by the client.
     */
    resettablePL: primitives.AccountUnits;
    /**
     * The total amount of financing paid/collected for this instrument over the lifetime of the Account.
     */
    financing: primitives.AccountUnits;
    /**
     * The total amount of commission paid for this instrument over the lifetime of the Account.
     */
    commission: primitives.AccountUnits;
    /**
     * The total amount of fees charged over the lifetime of the Account for the execution of guaranteed Stop Loss Orders for this instrument.
     */
    guaranteedExecutionFees: primitives.AccountUnits;
    /**
     * The details of the long side of the Position.
     */
    long: PositionSide;
    /**
     * The details of the short side of the Position.
     */
    short: PositionSide;
    constructor(data: any);
}
export declare const PositionSide_Properties: Property[];
export declare class PositionSide extends Definition {
    /**
     * Number of units in the position (negative value indicates short position, positive indicates long position).
     */
    units: primitives.DecimalNumber;
    /**
     * Volume-weighted average of the underlying Trade open prices for the Position.
     */
    averagePrice: primitives.PriceValue;
    /**
     * List of the open Trade IDs which contribute to the open Position.
     */
    tradeIDs: primitives.TradeID[];
    /**
     * Profit/loss realized by the PositionSide over the lifetime of the Account.
     */
    pl: primitives.AccountUnits;
    /**
     * The unrealized profit/loss of all open Trades that contribute to this PositionSide.
     */
    unrealizedPL: primitives.AccountUnits;
    /**
     * Profit/loss realized by the PositionSide since the Account's resettablePL was last reset by the client.
     */
    resettablePL: primitives.AccountUnits;
    /**
     * The total amount of financing paid/collected for this PositionSide over the lifetime of the Account.
     */
    financing: primitives.AccountUnits;
    /**
     * The total amount of fees charged over the lifetime of the Account for the execution of guaranteed Stop Loss Orders attached to Trades for this PositionSide.
     */
    guaranteedExecutionFees: primitives.AccountUnits;
    constructor(data: any);
}
export declare const CalculatedPositionState_Properties: Property[];
export declare class CalculatedPositionState extends Definition {
    /**
     * The Position's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The Position's net unrealized profit/loss
     */
    netUnrealizedPL: primitives.AccountUnits;
    /**
     * The unrealized profit/loss of the Position's long open Trades
     */
    longUnrealizedPL: primitives.AccountUnits;
    /**
     * The unrealized profit/loss of the Position's short open Trades
     */
    shortUnrealizedPL: primitives.AccountUnits;
    /**
     * Margin currently used by the Position.
     */
    marginUsed: primitives.AccountUnits;
    constructor(data: any);
}
export declare class EntitySpec {
    context: any;
    Position: typeof Position;
    PositionSide: typeof PositionSide;
    CalculatedPositionState: typeof CalculatedPositionState;
    constructor(context: any);
    list(accountID: any, responseHandler: any): any;
    listOpen(accountID: any, responseHandler: any): any;
    get(accountID: any, instrument: any, responseHandler: any): any;
    close(accountID: any, instrument: any, bodyParams: any, responseHandler: any): any;
}
export interface PositionCloseRequest {
    body: PositionCloseRequestBody;
}
export interface PositionCloseRequestBody {
    /**
     * Indication of how much of the long Position to closeout. Either the
     * string “ALL”, the string “NONE”, or a primitives.DecimalNumber representing how many
     * units of the long position to close using a PositionCloseout MarketOrder.
     * The units specified must always be positive.
     */
    longUnits: string;
    /**
       * The client extensions to add to the MarketOrder used to close the long
      /**
       */
    longClientExtensions?: primitives.ClientExtensions;
    /**
     * Indication of how much of the short Position to closeout. Either the
     * string “ALL”, the string “NONE”, or a primitives.DecimalNumber representing how many
     * units of the short position to close using a PositionCloseout
     * MarketOrder. The units specified must always be positive.
     */
    shortUnits: string;
    /**
       * The client extensions to add to the MarketOrder used to close the short
      /**
       */
    shortClientExtensions?: primitives.ClientExtensions;
}
export declare type PositionListResult = PositionListResult200;
export interface PositionListResult200 {
    /**
     * The list of Account Positions.
     */
    positions?: Position[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: primitives.TransactionID;
}
export declare type PositionListOpenResult = PositionListOpenResult200;
export interface PositionListOpenResult200 {
    /**
     * The list of open Positions in the Account.
     */
    positions?: Position[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: primitives.TransactionID;
}
export declare type PositionGetResult = PositionGetResult200;
export interface PositionGetResult200 {
    /**
     * The requested Position.
     */
    position?: Position;
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: primitives.TransactionID;
}
export declare type PositionCloseResult = PositionCloseResult200 | PositionCloseResult400;
export interface PositionCloseResult200 {
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
    relatedTransactionIDs?: primitives.TransactionID[];
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID?: primitives.TransactionID;
}
export interface PositionCloseResult400 {
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
    relatedTransactionIDs?: primitives.TransactionID[];
    /**
     * The ID of the most recent Transaction created for the Account
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
export declare class API {
    private context;
    private resolver;
    constructor(context: any, resolver: any);
    list(accountID: primitives.AccountID): Promise<PositionListResult>;
    listOpen(accountID: primitives.AccountID): Promise<PositionListOpenResult>;
    get(accountID: primitives.AccountID, instrument: primitives.InstrumentName): Promise<PositionGetResult>;
    close(accountID: primitives.AccountID, instrument: primitives.InstrumentName, body: PositionCloseRequest): Promise<PositionCloseResult>;
}
