import { Definition, Property } from './base';
import * as primitives from './primitives';
export declare const PriceBucket_Properties: Property[];
export declare class PriceBucket extends Definition {
    /**
     * The Price offered by the PriceBucket
     */
    price: primitives.PriceValue;
    /**
     * The amount of liquidity offered by the PriceBucket
     */
    liquidity: number;
    constructor(data: any);
}
export declare const Price_Properties: Property[];
export declare class Price extends Definition {
    /**
     * The Price's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * Flag indicating if the Price is tradeable or not
     */
    tradeable: boolean;
    /**
     * The date/time when the Price was created.
     */
    timestamp: primitives.DateTime;
    /**
     * The base bid price as calculated by pricing.
     */
    baseBid: primitives.PriceValue;
    /**
     * The base ask price as calculated by pricing.
     */
    baseAsk: primitives.PriceValue;
    /**
     * The list of prices and liquidity available on the Instrument's bid side. It is possible for this list to be empty if there is no bid liquidity currently available for the Instrument in the Account.
     */
    bids: PriceBucket[];
    /**
     * The list of prices and liquidity available on the Instrument's ask side. It is possible for this list to be empty if there is no ask liquidity currently available for the Instrument in the Account.
     */
    asks: PriceBucket[];
    /**
     * The closeout bid price. This price is used when a bid is required to closeout a Position (margin closeout or manual) yet there is no bid liquidity. The closeout bid is never used to open a new position.
     */
    closeoutBid: primitives.PriceValue;
    /**
     * The closeout ask price. This price is used when an ask is required to closeout a Position (margin closeout or manual) yet there is no ask liquidity. The closeout ask is never used to open a new position.
     */
    closeoutAsk: primitives.PriceValue;
    constructor(data: any);
}
export declare class EntitySpec {
    context: any;
    PriceBucket: typeof PriceBucket;
    Price: typeof Price;
    constructor(context: any);
}
