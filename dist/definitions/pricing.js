"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The status of the Price. https://developer.oanda.com/rest-live-v20/pricing-df/
 */
var PriceStatus;
(function (PriceStatus) {
    /**
     * The Instrument’s price is tradeable.
     */
    PriceStatus["tradeable"] = "tradeable";
    /**
     * The Instrument’s price is not tradeable.
     */
    PriceStatus["non-tradeable"] = "non-tradeable";
    /**
     * The Instrument of the price is invalid or there is no valid Price for the Instrument.
     */
    PriceStatus["invalid"] = "invalid";
})(PriceStatus = exports.PriceStatus || (exports.PriceStatus = {}));
//# sourceMappingURL=pricing.js.map