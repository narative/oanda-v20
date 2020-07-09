"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var primitives_1 = require("../primitives");
exports.Instrument = primitives_1.Instrument;
exports.InstrumentCommission = primitives_1.InstrumentCommission;
exports.GuaranteedStopLossOrderLevelRestriction = primitives_1.GuaranteedStopLossOrderLevelRestriction;
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
exports.InstrumentTypeDescription = {
    'CURRENCY': 'Currency',
    'CFD': 'Contract For Difference',
    'METAL': 'Metal',
};
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
exports.DayOfWeekDescription = {
    'SUNDAY': 'Sunday',
    'MONDAY': 'Monday',
    'TUESDAY': 'Tuesday',
    'WEDNESDAY': 'Wednesday',
    'THURSDAY': 'Thursday',
    'FRIDAY': 'Friday',
    'SATURDAY': 'Saturday',
};
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
exports.AcceptDatetimeFormatDescription = {
    'UNIX': 'If “UNIX” is specified DateTime fields will be specified or returned in the “12345678.000000123” format.',
    'RFC3339': 'If “RFC3339” is specified DateTime will be specified or returned in “YYYY-MM-DDTHH:MM:SS.nnnnnnnnnZ” format.',
};
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
exports.DirectionDescription = {
    'LONG': 'A long Order is used to to buy units of an Instrument. A Trade is long when it has bought units of an Instrument.',
    'SHORT': 'A short Order is used to to sell units of an Instrument. A Trade is short when it has sold units of an Instrument.',
};
var Tag = /** @class */ (function () {
    function Tag() {
    }
    return Tag;
}());
exports.Tag = Tag;
var FinancingDayOfWeek = /** @class */ (function () {
    function FinancingDayOfWeek() {
    }
    return FinancingDayOfWeek;
}());
exports.FinancingDayOfWeek = FinancingDayOfWeek;
var InstrumentFinancing = /** @class */ (function () {
    function InstrumentFinancing() {
    }
    return InstrumentFinancing;
}());
exports.InstrumentFinancing = InstrumentFinancing;
//# sourceMappingURL=primitives.js.map