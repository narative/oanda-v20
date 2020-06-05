import { Definition, Property } from './base';
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
