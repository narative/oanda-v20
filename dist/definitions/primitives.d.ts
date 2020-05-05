/**
 * The string representation of a decimal number. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export declare type DecimalNumber = string;
/**
 * The string representation of a quantity of an Account’s home currency. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export declare type AccountUnits = string;
/**
 * Currency name identifier. Used by clients to refer to currencies. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export declare type Currency = string;
/**
 * A tag associated with an entity. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export interface Tag {
    /**
     * The type of the tag.
     */
    type?: string;
    /**
     * The name of the tag.
     */
    name?: string;
}
/**
 * Instrument name identifier. Used by clients to refer to an Instrument. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export declare type InstrumentName = string;
/**
 * The type of an Instrument. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export declare enum InstrumentType {
    /**
     * Currency
     */
    'CURRENCY' = "CURRENCY",
    /**
     * Contract For Difference
     */
    'CFD' = "CFD",
    /**
     * Metal
     */
    'METAL' = "METAL"
}
/**
 * The DayOfWeek provides a representation of the day of the week. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export declare enum DayOfWeek {
    /**
     * Sunday
     */
    'SUNDAY' = "SUNDAY",
    /**
     * Monday
     */
    'MONDAY' = "MONDAY",
    /**
     * Tuesday
     */
    'TUESDAY' = "TUESDAY",
    /**
     * Wednesday
     */
    'WEDNESDAY' = "WEDNESDAY",
    /**
     * Thursday
     */
    'THURSDAY' = "THURSDAY",
    /**
     * Friday
     */
    'FRIDAY' = "FRIDAY",
    /**
     * Saturday
     */
    'SATURDAY' = "SATURDAY"
}
/**
 * A FinancingDayOfWeek message defines a day of the week when financing charges are debited or credited. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export interface FinancingDayOfWeek {
    /**
     * The day of the week to charge the financing.
     */
    dayOfWeek?: DayOfWeek;
    /**
     * The number of days worth of financing to be charged on dayOfWeek.
     */
    daysCharged?: number;
}
/**
 * Financing data for the instrument. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export interface InstrumentFinancing {
    /**
     * The financing rate to be used for a long position for the instrument. The
     * value is in decimal rather than percentage points, i.e. 5% is represented
     * as 0.05.
     */
    longRate?: DecimalNumber;
    /**
     * The financing rate to be used for a short position for the instrument.
     * The value is in decimal rather than percentage points, i.e. 5% is
     * represented as 0.05.
     */
    shortRate?: DecimalNumber;
    /**
     * The days of the week to debit or credit financing charges; the exact time
     * of day at which to charge the financing is set in the
     * DivisionTradingGroup for the client's account.
     */
    financingDaysOfWeek?: FinancingDayOfWeek[];
}
/**
 * Full specification of an Instrument. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export interface Instrument {
    /**
     * The name of the Instrument
     */
    name?: InstrumentName;
    /**
     * The type of the Instrument
     */
    type?: InstrumentType;
    /**
     * The display name of the Instrument
     */
    displayName?: string;
    /**
     * The location of the 'pip' for this instrument. The decimal position of
     * the pip in this Instrument's price can be found at 10 ^ pipLocation (e.g.
     * -4 pipLocation results in a decimal pip position of 10 ^ -4 = 0.0001).
     */
    pipLocation?: number;
    /**
     * The number of decimal places that should be used to display prices for
     * this instrument. (e.g. a displayPrecision of 5 would result in a price of
     * '1' being displayed as '1.00000')
     */
    displayPrecision?: number;
    /**
     * The amount of decimal places that may be provided when specifying the
     * number of units traded for this instrument.
     */
    tradeUnitsPrecision?: number;
    /**
     * The smallest number of units allowed to be traded for this instrument.
     */
    minimumTradeSize?: DecimalNumber;
    /**
     * The maximum trailing stop distance allowed for a trailing stop loss
     * created for this instrument. Specified in price units.
     */
    maximumTrailingStopDistance?: DecimalNumber;
    /**
     * The minimum trailing stop distance allowed for a trailing stop loss
     * created for this instrument. Specified in price units.
     */
    minimumTrailingStopDistance?: DecimalNumber;
    /**
     * The maximum position size allowed for this instrument. Specified in
     * units.
     */
    maximumPositionSize?: DecimalNumber;
    /**
     * The maximum units allowed for an Order placed for this instrument.
     * Specified in units.
     */
    maximumOrderUnits?: DecimalNumber;
    /**
     * The margin rate for this instrument.
     */
    marginRate?: DecimalNumber;
    /**
     * The commission structure for this instrument.
     */
    commission?: InstrumentCommission;
    /**
     * Financing data for this instrument.
     */
    financing?: InstrumentFinancing;
    /**
     * The tags associated with this instrument.
     */
    tags?: Tag[];
}
/**
 * A date and time value using either RFC3339 or UNIX time representation. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export declare type DateTime = string;
/**
 * DateTime header https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export declare enum AcceptDatetimeFormat {
    /**
     * If “UNIX” is specified DateTime fields will be specified or returned in the “12345678.000000123” format.
     */
    'UNIX' = "UNIX",
    /**
     * If “RFC3339” is specified DateTime will be specified or returned in “YYYY-MM-DDTHH:MM:SS.nnnnnnnnnZ” format.
     */
    'RFC3339' = "RFC3339"
}
/**
 * An InstrumentCommission represents an instrument-specific commission https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export interface InstrumentCommission {
    /**
     * The commission amount (in the Account's home currency) charged per
     * unitsTraded of the instrument
     */
    commission?: DecimalNumber;
    /**
     * The number of units traded that the commission amount is based on.
     */
    unitsTraded?: DecimalNumber;
    /**
     * The minimum commission amount (in the Account's home currency) that is
     * charged when an Order is filled for this instrument.
     */
    minimumCommission?: DecimalNumber;
}
/**
 * A GuaranteedStopLossOrderLevelRestriction represents the total position size that can exist within a given price window for Trades with guaranteed Stop Loss Orders attached for a specific Instrument. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export interface GuaranteedStopLossOrderLevelRestriction {
    /**
     * Applies to Trades with a guaranteed Stop Loss Order attached for the
     * specified Instrument. This is the total allowed Trade volume that can
     * exist within the priceRange based on the trigger prices of the guaranteed
     * Stop Loss Orders.
     */
    volume?: DecimalNumber;
    /**
     * The price range the volume applies to. This value is in price units.
     */
    priceRange?: DecimalNumber;
}
/**
 * In the context of an Order or a Trade, defines whether the units are positive or negative. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export declare enum Direction {
    /**
     * A long Order is used to to buy units of an Instrument. A Trade is long when it has bought units of an Instrument.
     */
    'LONG' = "LONG",
    /**
     * A short Order is used to to sell units of an Instrument. A Trade is short when it has sold units of an Instrument.
     */
    'SHORT' = "SHORT"
}
/**
 * The Price component(s) to get candlestick data for. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export declare type PricingComponent = string;
