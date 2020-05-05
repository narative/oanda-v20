import * as order from './order';
import * as pricingCommon from './pricingCommon';
import * as primitives from './primitives';
/**
 * The specification of an Account-specific Price. https://developer.oanda.com/rest-live-v20/pricing-df/
 */
export interface ClientPrice {
    /**
     * The string 'PRICE'. Used to identify the a Price object when found in a
     * stream.
     */
    type?: string;
    /**
     * The Price's Instrument.
     */
    instrument?: primitives.InstrumentName;
    /**
     * The date/time when the Price was created
     */
    time?: primitives.DateTime;
    /**
     * The status of the Price.
     *
     *
     * <b>Deprecated</b>: Will be removed in a future API update.
     */
    status?: PriceStatus;
    /**
     * Flag indicating if the Price is tradeable or not
     */
    tradeable?: boolean;
    /**
     * The list of prices and liquidity available on the Instrument's bid side.
     * It is possible for this list to be empty if there is no bid liquidity
     * currently available for the Instrument in the Account.
     */
    bids?: pricingCommon.PriceBucket[];
    /**
     * The list of prices and liquidity available on the Instrument's ask side.
     * It is possible for this list to be empty if there is no ask liquidity
     * currently available for the Instrument in the Account.
     */
    asks?: pricingCommon.PriceBucket[];
    /**
     * The closeout bid Price. This Price is used when a bid is required to
     * closeout a Position (margin closeout or manual) yet there is no bid
     * liquidity. The closeout bid is never used to open a new position.
     */
    closeoutBid?: pricingCommon.PriceValue;
    /**
     * The closeout ask Price. This Price is used when a ask is required to
     * closeout a Position (margin closeout or manual) yet there is no ask
     * liquidity. The closeout ask is never used to open a new position.
     */
    closeoutAsk?: pricingCommon.PriceValue;
    /**
     * The factors used to convert quantities of this price's Instrument's quote
     * currency into a quantity of the Account's home currency. When the
     * includeHomeConversions is present in the pricing request (regardless of
     * its value), this field will not be present.
     *
     *
     * <b>Deprecated</b>: Will be removed in a future API update.
     */
    quoteHomeConversionFactors?: QuoteHomeConversionFactors;
    /**
     * Representation of how many units of an Instrument are available to be
     * traded by an Order depending on its positionFill option.
     *
     *
     * <b>Deprecated</b>: Will be removed in a future API update.
     */
    unitsAvailable?: order.UnitsAvailable;
}
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
/**
 * QuoteHomeConversionFactors represents the factors that can be used used to convert quantities of a Price’s Instrument’s quote currency into the Account’s home currency. https://developer.oanda.com/rest-live-v20/pricing-df/
 */
export interface QuoteHomeConversionFactors {
    /**
     * The factor used to convert a positive amount of the Price's Instrument's
     * quote currency into a positive amount of the Account's home currency.
     * Conversion is performed by multiplying the quote units by the conversion
     * factor.
     */
    positiveUnits?: primitives.DecimalNumber;
    /**
     * The factor used to convert a negative amount of the Price's Instrument's
     * quote currency into a negative amount of the Account's home currency.
     * Conversion is performed by multiplying the quote units by the conversion
     * factor.
     */
    negativeUnits?: primitives.DecimalNumber;
}
/**
 * HomeConversions represents the factors to use to convert quantities of a given currency into the Account’s home currency. The conversion factor depends on the scenario the conversion is required for. https://developer.oanda.com/rest-live-v20/pricing-df/
 */
export interface HomeConversions {
    /**
     * The currency to be converted into the home currency.
     */
    currency?: primitives.Currency;
    /**
     * The factor used to convert any gains for an Account in the specified
     * currency into the Account's home currency. This would include positive
     * realized P/L and positive financing amounts. Conversion is performed by
     * multiplying the positive P/L by the conversion factor.
     */
    accountGain?: primitives.DecimalNumber;
    /**
     * The string representation of a decimal number.
     */
    accountLoss?: primitives.DecimalNumber;
    /**
     * The factor used to convert a Position or Trade Value in the specified
     * currency into the Account's home currency. Conversion is performed by
     * multiplying the Position or Trade Value by the conversion factor.
     */
    positionValue?: primitives.DecimalNumber;
}
/**
 * A PricingHeartbeat object is injected into the Pricing stream to ensure that the HTTP connection remains active. https://developer.oanda.com/rest-live-v20/pricing-df/
 */
export interface PricingHeartbeat {
    /**
     * The string 'HEARTBEAT'
     */
    type?: string;
    /**
     * The date/time when the Heartbeat was created.
     */
    time?: primitives.DateTime;
}
/**
 * An instrument name, a granularity, and a price component to get candlestick data for. https://developer.oanda.com/rest-live-v20/pricing-df/
 */
export declare type CandleSpecification = string;
