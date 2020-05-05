"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The type of an Instrument. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
var InstrumentType;
(function (InstrumentType) {
    /**
     * Currency
     */
    InstrumentType["CURRENCY"] = "CURRENCY";
    /**
     * Contract For Difference
     */
    InstrumentType["CFD"] = "CFD";
    /**
     * Metal
     */
    InstrumentType["METAL"] = "METAL";
})(InstrumentType = exports.InstrumentType || (exports.InstrumentType = {}));
/**
 * The DayOfWeek provides a representation of the day of the week. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
var DayOfWeek;
(function (DayOfWeek) {
    /**
     * Sunday
     */
    DayOfWeek["SUNDAY"] = "SUNDAY";
    /**
     * Monday
     */
    DayOfWeek["MONDAY"] = "MONDAY";
    /**
     * Tuesday
     */
    DayOfWeek["TUESDAY"] = "TUESDAY";
    /**
     * Wednesday
     */
    DayOfWeek["WEDNESDAY"] = "WEDNESDAY";
    /**
     * Thursday
     */
    DayOfWeek["THURSDAY"] = "THURSDAY";
    /**
     * Friday
     */
    DayOfWeek["FRIDAY"] = "FRIDAY";
    /**
     * Saturday
     */
    DayOfWeek["SATURDAY"] = "SATURDAY";
})(DayOfWeek = exports.DayOfWeek || (exports.DayOfWeek = {}));
/**
 * DateTime header https://developer.oanda.com/rest-live-v20/primitives-df/
 */
var AcceptDatetimeFormat;
(function (AcceptDatetimeFormat) {
    /**
     * If “UNIX” is specified DateTime fields will be specified or returned in the “12345678.000000123” format.
     */
    AcceptDatetimeFormat["UNIX"] = "UNIX";
    /**
     * If “RFC3339” is specified DateTime will be specified or returned in “YYYY-MM-DDTHH:MM:SS.nnnnnnnnnZ” format.
     */
    AcceptDatetimeFormat["RFC3339"] = "RFC3339";
})(AcceptDatetimeFormat = exports.AcceptDatetimeFormat || (exports.AcceptDatetimeFormat = {}));
/**
 * In the context of an Order or a Trade, defines whether the units are positive or negative. https://developer.oanda.com/rest-live-v20/primitives-df/
 */
var Direction;
(function (Direction) {
    /**
     * A long Order is used to to buy units of an Instrument. A Trade is long when it has bought units of an Instrument.
     */
    Direction["LONG"] = "LONG";
    /**
     * A short Order is used to to sell units of an Instrument. A Trade is short when it has sold units of an Instrument.
     */
    Direction["SHORT"] = "SHORT";
})(Direction = exports.Direction || (exports.Direction = {}));
//# sourceMappingURL=primitives.js.map