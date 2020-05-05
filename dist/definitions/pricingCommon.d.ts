/**
 * The string representation of a Price for a Bucket. https://developer.oanda.com/rest-live-v20/pricing-common-df/
 */
export declare type PriceValue = string;
/**
 * A PriceBucket represents a price available for an amount of liquidity https://developer.oanda.com/rest-live-v20/pricing-common-df/
 */
export interface PriceBucket {
    /**
     * The Price offered by the PriceBucket
     */
    price?: PriceValue;
    /**
     * The amount of liquidity offered by the PriceBucket
     */
    liquidity?: number;
}
