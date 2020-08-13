import { Definition, Property } from './base';
import * as order from './order';
import * as pricing_common from './pricing_common';
import * as primitives from './primitives';
export declare const ClientPrice_Properties: Property[];
export declare class ClientPrice extends Definition {
    /**
     * The string "PRICE". Used to identify the a Price object when found in a stream.
     */
    type: string;
    /**
     * The Price's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The date/time when the Price was created
     */
    time: primitives.DateTime;
    /**
     * The status of the Price.
     */
    status: primitives.PriceStatus;
    /**
     * Flag indicating if the Price is tradeable or not
     */
    tradeable: boolean;
    /**
     * The list of prices and liquidity available on the Instrument's bid side. It is possible for this list to be empty if there is no bid liquidity currently available for the Instrument in the Account.
     */
    bids: pricing_common.PriceBucket[];
    /**
     * The list of prices and liquidity available on the Instrument's ask side. It is possible for this list to be empty if there is no ask liquidity currently available for the Instrument in the Account.
     */
    asks: pricing_common.PriceBucket[];
    /**
     * The closeout bid Price. This Price is used when a bid is required to closeout a Position (margin closeout or manual) yet there is no bid liquidity. The closeout bid is never used to open a new position.
     */
    closeoutBid: primitives.PriceValue;
    /**
     * The closeout ask Price. This Price is used when a ask is required to closeout a Position (margin closeout or manual) yet there is no ask liquidity. The closeout ask is never used to open a new position.
     */
    closeoutAsk: primitives.PriceValue;
    /**
     * The factors used to convert quantities of this price's Instrument's quote currency into a quantity of the Account's home currency. When the includeHomeConversions is present in the pricing request (regardless of its value), this field will not be present.
     */
    quoteHomeConversionFactors: QuoteHomeConversionFactors;
    /**
     * Representation of how many units of an Instrument are available to be traded by an Order depending on its postionFill option.
     */
    unitsAvailable: order.UnitsAvailable;
    constructor(data: any);
}
export declare const QuoteHomeConversionFactors_Properties: Property[];
export declare class QuoteHomeConversionFactors extends Definition {
    /**
     * The factor used to convert a positive amount of the Price's Instrument's quote currency into a positive amount of the Account's home currency.  Conversion is performed by multiplying the quote units by the conversion factor.
     */
    positiveUnits: primitives.DecimalNumber;
    /**
     * The factor used to convert a negative amount of the Price's Instrument's quote currency into a negative amount of the Account's home currency.  Conversion is performed by multiplying the quote units by the conversion factor.
     */
    negativeUnits: primitives.DecimalNumber;
    constructor(data: any);
}
export declare const HomeConversions_Properties: Property[];
export declare class HomeConversions extends Definition {
    /**
     * The currency to be converted into the home currency.
     */
    currency: primitives.Currency;
    /**
     * The factor used to convert any gains for an Account in the specified currency into the Account's home currency. This would include positive realized P/L and positive financing amounts. Conversion is performed by multiplying the positive P/L by the conversion factor.
     */
    accountGain: primitives.DecimalNumber;
    /**
     * The string representation of a decimal number.
     */
    accountLoss: primitives.DecimalNumber;
    /**
     * The factor used to convert a Position or Trade Value in the specified currency into the Account's home currency. Conversion is performed by multiplying the Position or Trade Value by the conversion factor.
     */
    positionValue: primitives.DecimalNumber;
    constructor(data: any);
}
export declare const PricingHeartbeat_Properties: Property[];
export declare class PricingHeartbeat extends Definition {
    /**
     * The string "HEARTBEAT"
     */
    type: string;
    /**
     * The date/time when the Heartbeat was created.
     */
    time: primitives.DateTime;
    constructor(data: any);
}
export declare class EntitySpec {
    context: any;
    ClientPrice: typeof ClientPrice;
    QuoteHomeConversionFactors: typeof QuoteHomeConversionFactors;
    HomeConversions: typeof HomeConversions;
    PricingHeartbeat: typeof PricingHeartbeat;
    constructor(context: any);
    basePrices(queryParams: any, responseHandler: any): any;
    getPriceRange(instrument: any, queryParams: any, responseHandler: any): any;
    get(accountID: any, queryParams: any, responseHandler: any): any;
    stream(accountID: any, queryParams: any, streamChunkHandler: any, responseHandler: any): any;
    candles(accountID: any, instrument: any, queryParams: any, responseHandler: any): any;
}
