"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var instrument_1 = require("../instrument");
exports.Candlestick = instrument_1.Candlestick;
exports.CandlestickData = instrument_1.CandlestickData;
exports.OrderBook = instrument_1.OrderBook;
exports.OrderBookBucket = instrument_1.OrderBookBucket;
exports.PositionBook = instrument_1.PositionBook;
exports.PositionBookBucket = instrument_1.PositionBookBucket;
/**
 * The granularity of a candlestick https://developer.oanda.com/rest-live-v20/instrument-df/
 */
var CandlestickGranularity;
(function (CandlestickGranularity) {
    /**
     * 5 second candlesticks, minute alignment
     */
    CandlestickGranularity["S5"] = "S5";
    /**
     * 10 second candlesticks, minute alignment
     */
    CandlestickGranularity["S10"] = "S10";
    /**
     * 15 second candlesticks, minute alignment
     */
    CandlestickGranularity["S15"] = "S15";
    /**
     * 30 second candlesticks, minute alignment
     */
    CandlestickGranularity["S30"] = "S30";
    /**
     * 1 minute candlesticks, minute alignment
     */
    CandlestickGranularity["M1"] = "M1";
    /**
     * 2 minute candlesticks, hour alignment
     */
    CandlestickGranularity["M2"] = "M2";
    /**
     * 4 minute candlesticks, hour alignment
     */
    CandlestickGranularity["M4"] = "M4";
    /**
     * 5 minute candlesticks, hour alignment
     */
    CandlestickGranularity["M5"] = "M5";
    /**
     * 10 minute candlesticks, hour alignment
     */
    CandlestickGranularity["M10"] = "M10";
    /**
     * 15 minute candlesticks, hour alignment
     */
    CandlestickGranularity["M15"] = "M15";
    /**
     * 30 minute candlesticks, hour alignment
     */
    CandlestickGranularity["M30"] = "M30";
    /**
     * 1 hour candlesticks, hour alignment
     */
    CandlestickGranularity["H1"] = "H1";
    /**
     * 2 hour candlesticks, day alignment
     */
    CandlestickGranularity["H2"] = "H2";
    /**
     * 3 hour candlesticks, day alignment
     */
    CandlestickGranularity["H3"] = "H3";
    /**
     * 4 hour candlesticks, day alignment
     */
    CandlestickGranularity["H4"] = "H4";
    /**
     * 6 hour candlesticks, day alignment
     */
    CandlestickGranularity["H6"] = "H6";
    /**
     * 8 hour candlesticks, day alignment
     */
    CandlestickGranularity["H8"] = "H8";
    /**
     * 12 hour candlesticks, day alignment
     */
    CandlestickGranularity["H12"] = "H12";
    /**
     * 1 day candlesticks, day alignment
     */
    CandlestickGranularity["D"] = "D";
    /**
     * 1 week candlesticks, aligned to start of week
     */
    CandlestickGranularity["W"] = "W";
    /**
     * 1 month candlesticks, aligned to first day of the month
     */
    CandlestickGranularity["M"] = "M";
})(CandlestickGranularity = exports.CandlestickGranularity || (exports.CandlestickGranularity = {}));
exports.CandlestickGranularityDescription = {
    'S5': '5 second candlesticks, minute alignment',
    'S10': '10 second candlesticks, minute alignment',
    'S15': '15 second candlesticks, minute alignment',
    'S30': '30 second candlesticks, minute alignment',
    'M1': '1 minute candlesticks, minute alignment',
    'M2': '2 minute candlesticks, hour alignment',
    'M4': '4 minute candlesticks, hour alignment',
    'M5': '5 minute candlesticks, hour alignment',
    'M10': '10 minute candlesticks, hour alignment',
    'M15': '15 minute candlesticks, hour alignment',
    'M30': '30 minute candlesticks, hour alignment',
    'H1': '1 hour candlesticks, hour alignment',
    'H2': '2 hour candlesticks, day alignment',
    'H3': '3 hour candlesticks, day alignment',
    'H4': '4 hour candlesticks, day alignment',
    'H6': '6 hour candlesticks, day alignment',
    'H8': '8 hour candlesticks, day alignment',
    'H12': '12 hour candlesticks, day alignment',
    'D': '1 day candlesticks, day alignment',
    'W': '1 week candlesticks, aligned to start of week',
    'M': '1 month candlesticks, aligned to first day of the month',
};
/**
 * The day of the week to use for candlestick granularities with weekly alignment. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
var WeeklyAlignment;
(function (WeeklyAlignment) {
    /**
     * Monday
     */
    WeeklyAlignment["Monday"] = "Monday";
    /**
     * Tuesday
     */
    WeeklyAlignment["Tuesday"] = "Tuesday";
    /**
     * Wednesday
     */
    WeeklyAlignment["Wednesday"] = "Wednesday";
    /**
     * Thursday
     */
    WeeklyAlignment["Thursday"] = "Thursday";
    /**
     * Friday
     */
    WeeklyAlignment["Friday"] = "Friday";
    /**
     * Saturday
     */
    WeeklyAlignment["Saturday"] = "Saturday";
    /**
     * Sunday
     */
    WeeklyAlignment["Sunday"] = "Sunday";
})(WeeklyAlignment = exports.WeeklyAlignment || (exports.WeeklyAlignment = {}));
exports.WeeklyAlignmentDescription = {
    'Monday': 'Monday',
    'Tuesday': 'Tuesday',
    'Wednesday': 'Wednesday',
    'Thursday': 'Thursday',
    'Friday': 'Friday',
    'Saturday': 'Saturday',
    'Sunday': 'Sunday',
};
/**
 * The type of price adjustment. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
var PriceAdjustmentType;
(function (PriceAdjustmentType) {
    /**
     * The present value adjustment is intended to back-out the interest component of the future-date contract expiry.
     */
    PriceAdjustmentType["PRESENT_VALUE"] = "PRESENT_VALUE";
    /**
     * The dividend adjustment is intended to include the impact of the dividend payment from the equities that make up the index.
     */
    PriceAdjustmentType["DIVIDEND"] = "DIVIDEND";
    /**
     * The basis adjustment is intended to offset the difference in the basis between the futures price and the index price.
     */
    PriceAdjustmentType["BASIS"] = "BASIS";
    /**
     * The fair value adjustment is intended to be configured manually by the Trading team to adjust the price of the CFD for any reason which is not captured by the other adjustments, and will typically be the 0.
     */
    PriceAdjustmentType["FAIR_VALUE"] = "FAIR_VALUE";
})(PriceAdjustmentType = exports.PriceAdjustmentType || (exports.PriceAdjustmentType = {}));
exports.PriceAdjustmentTypeDescription = {
    'PRESENT_VALUE': 'The present value adjustment is intended to back-out the interest component of the future-date contract expiry.',
    'DIVIDEND': 'The dividend adjustment is intended to include the impact of the dividend payment from the equities that make up the index.',
    'BASIS': 'The basis adjustment is intended to offset the difference in the basis between the futures price and the index price.',
    'FAIR_VALUE': 'The fair value adjustment is intended to be configured manually by the Trading team to adjust the price of the CFD for any reason which is not captured by the other adjustments, and will typically be the 0.',
};
/**
 * Time interval at which data is sampled. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
var SamplingInterval;
(function (SamplingInterval) {
    /**
     * One minute sampling.
     */
    SamplingInterval["M1"] = "M1";
})(SamplingInterval = exports.SamplingInterval || (exports.SamplingInterval = {}));
exports.SamplingIntervalDescription = {
    'M1': 'One minute sampling.',
};
var CandlestickResponse = /** @class */ (function () {
    function CandlestickResponse() {
    }
    return CandlestickResponse;
}());
exports.CandlestickResponse = CandlestickResponse;
var RawMarketPriceLevel = /** @class */ (function () {
    function RawMarketPriceLevel() {
    }
    return RawMarketPriceLevel;
}());
exports.RawMarketPriceLevel = RawMarketPriceLevel;
var RawMarketPriceDepthOfMarket = /** @class */ (function () {
    function RawMarketPriceDepthOfMarket() {
    }
    return RawMarketPriceDepthOfMarket;
}());
exports.RawMarketPriceDepthOfMarket = RawMarketPriceDepthOfMarket;
var PriceAdjustment = /** @class */ (function () {
    function PriceAdjustment() {
    }
    return PriceAdjustment;
}());
exports.PriceAdjustment = PriceAdjustment;
var RawMarketPrice = /** @class */ (function () {
    function RawMarketPrice() {
    }
    return RawMarketPrice;
}());
exports.RawMarketPrice = RawMarketPrice;
//# sourceMappingURL=instrument.js.map