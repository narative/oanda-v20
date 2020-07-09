export { Instrument, InstrumentCommission, GuaranteedStopLossOrderLevelRestriction } from '../primitives';
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
 * Instrument name identifier. Used by clients to refer to an Instrument. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export declare type InstrumentName = string;
/**
 * A date and time value using either RFC3339 or UNIX time representation. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export declare type DateTime = string;
/**
 * The Price component(s) to get candlestick data for. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
export declare type PricingComponent = string;
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
export declare const InstrumentTypeDescription: {
    CURRENCY: string;
    CFD: string;
    METAL: string;
};
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
export declare const DayOfWeekDescription: {
    SUNDAY: string;
    MONDAY: string;
    TUESDAY: string;
    WEDNESDAY: string;
    THURSDAY: string;
    FRIDAY: string;
    SATURDAY: string;
};
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
export declare const AcceptDatetimeFormatDescription: {
    UNIX: string;
    RFC3339: string;
};
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
export declare const DirectionDescription: {
    LONG: string;
    SHORT: string;
};
export declare class Tag {
    /**
     * The type of the tag.
     */
    type?: string;
    /**
     * The name of the tag.
     */
    name?: string;
}
export declare class FinancingDayOfWeek {
    /**
     * The day of the week to charge the financing.
     */
    dayOfWeek?: DayOfWeek;
    /**
     * The number of days worth of financing to be charged on dayOfWeek.
     */
    daysCharged?: number;
}
export declare class InstrumentFinancing {
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
