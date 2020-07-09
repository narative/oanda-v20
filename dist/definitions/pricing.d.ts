export { ClientPrice, QuoteHomeConversionFactors, HomeConversions, PricingHeartbeat } from '../pricing';
/**
 * An instrument name, a granularity, and a price component to get candlestick data for. https://developer.oanda.com/rest-live-v20/pricing-df/
 */
export declare type CandleSpecification = string;
/**
 * The status of the Price. https://developer.oanda.com/rest-live-v20/pricing-df/
 */
export declare enum PriceStatus {
    /**
     * The Instrument’s price is tradeable.
     */
    'tradeable' = "tradeable",
    /**
     * The Instrument’s price is not tradeable.
     */
    'non-tradeable' = "non-tradeable",
    /**
     * The Instrument of the price is invalid or there is no valid Price for the Instrument.
     */
    'invalid' = "invalid"
}
export declare const PriceStatusDescription: {
    tradeable: string;
    'non-tradeable': string;
    invalid: string;
};
