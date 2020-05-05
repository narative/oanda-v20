import * as trade from './trade';
import * as pricingCommon from './pricingCommon';
import * as primitives from './primitives';
/**
 * The specification of a Position within an Account. https://developer.oanda.com/rest-live-v20/position-df/
 */
export interface Position {
    /**
     * The Position's Instrument.
     */
    instrument?: primitives.InstrumentName;
    /**
     * Profit/loss realized by the Position over the lifetime of the Account.
     */
    pl?: primitives.AccountUnits;
    /**
     * The unrealized profit/loss of all open Trades that contribute to this
     * Position.
     */
    unrealizedPL?: primitives.AccountUnits;
    /**
     * Margin currently used by the Position.
     */
    marginUsed?: primitives.AccountUnits;
    /**
     * Profit/loss realized by the Position since the Account's resettablePL was
     * last reset by the client.
     */
    resettablePL?: primitives.AccountUnits;
    /**
     * The total amount of financing paid/collected for this instrument over the
     * lifetime of the Account.
     */
    financing?: primitives.AccountUnits;
    /**
     * The total amount of commission paid for this instrument over the lifetime
     * of the Account.
     */
    commission?: primitives.AccountUnits;
    /**
     * The total amount of dividend adjustment paid for this instrument over the
     * lifetime of the Account.
     */
    dividendAdjustment?: primitives.AccountUnits;
    /**
     * The total amount of fees charged over the lifetime of the Account for the
     * execution of guaranteed Stop Loss Orders for this instrument.
     */
    guaranteedExecutionFees?: primitives.AccountUnits;
    /**
     * The details of the long side of the Position.
     */
    long?: PositionSide;
    /**
     * The details of the short side of the Position.
     */
    short?: PositionSide;
}
/**
 * The representation of a Position for a single direction (long or short). https://developer.oanda.com/rest-live-v20/position-df/
 */
export interface PositionSide {
    /**
     * Number of units in the position (negative value indicates short position,
     * positive indicates long position).
     */
    units?: primitives.DecimalNumber;
    /**
     * Volume-weighted average of the underlying Trade open prices for the
     * Position.
     */
    averagePrice?: pricingCommon.PriceValue;
    /**
     * List of the open Trade IDs which contribute to the open Position.
     */
    tradeIDs?: trade.TradeID[];
    /**
     * Profit/loss realized by the PositionSide over the lifetime of the
     * Account.
     */
    pl?: primitives.AccountUnits;
    /**
     * The unrealized profit/loss of all open Trades that contribute to this
     * PositionSide.
     */
    unrealizedPL?: primitives.AccountUnits;
    /**
     * Profit/loss realized by the PositionSide since the Account's resettablePL
     * was last reset by the client.
     */
    resettablePL?: primitives.AccountUnits;
    /**
     * The total amount of financing paid/collected for this PositionSide over
     * the lifetime of the Account.
     */
    financing?: primitives.AccountUnits;
    /**
     * The total amount of dividend adjustment paid for the PositionSide over
     * the lifetime of the Account.
     */
    dividendAdjustment?: primitives.AccountUnits;
    /**
     * The total amount of fees charged over the lifetime of the Account for the
     * execution of guaranteed Stop Loss Orders attached to Trades for this
     * PositionSide.
     */
    guaranteedExecutionFees?: primitives.AccountUnits;
}
/**
 * The dynamic (calculated) state of a Position https://developer.oanda.com/rest-live-v20/position-df/
 */
export interface CalculatedPositionState {
    /**
     * The Position's Instrument.
     */
    instrument?: primitives.InstrumentName;
    /**
     * The Position's net unrealized profit/loss
     */
    netUnrealizedPL?: primitives.AccountUnits;
    /**
     * The unrealized profit/loss of the Position's long open Trades
     */
    longUnrealizedPL?: primitives.AccountUnits;
    /**
     * The unrealized profit/loss of the Position's short open Trades
     */
    shortUnrealizedPL?: primitives.AccountUnits;
    /**
     * Margin currently used by the Position.
     */
    marginUsed?: primitives.AccountUnits;
}
