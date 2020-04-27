import { Definition, Property } from './base';
export declare type AccountFinancingMode = string;
export declare type AccountID = string;
export declare type GuaranteedStopLossOrderMode = string;
export declare type OrderID = string;
export declare type OrderPositionFill = string;
export declare type OrderState = string;
export declare type OrderTriggerCondition = string;
export declare type OrderType = string;
export declare type TimeInForce = string;
export declare type OrderSpecifier = string;
export declare type OrderStateFilter = string;
export declare type TakeProfitDetails = string;
export declare type StopLossDetails = string;
export declare type TrailingStopLossDetails = string;
export declare type PriceValue = string;
export declare type PriceStatus = string;
export declare type PricingComponent = string;
export declare type CandlestickGranularity = string;
export declare type WeeklyAlignment = string;
export declare type AccountUnits = string;
export declare type Currency = string;
export declare type DateTime = string;
export declare type DecimalNumber = string;
export declare type InstrumentName = string;
export declare type InstrumentType = string;
export declare type TradeID = string;
export declare type TradeState = string;
export declare type TradeStateFilter = string;
export declare type TradeSpecifier = string;
export declare type ClientComment = string;
export declare type ClientID = string;
export declare type ClientTag = string;
export declare type FixedPriceOrderReason = string;
export declare type FundingReason = string;
export declare type LimitOrderReason = string;
export declare type MarketIfTouchedOrderReason = string;
export declare type MarketOrderMarginCloseoutReason = string;
export declare type MarketOrderReason = string;
export declare type OrderCancelReason = string;
export declare type OrderFillReason = string;
export declare type RequestID = string;
export declare type StopLossOrderReason = string;
export declare type StopOrderReason = string;
export declare type TakeProfitOrderReason = string;
export declare type TrailingStopLossOrderReason = string;
export declare type TransactionID = string;
export declare type TransactionRejectReason = string;
export declare type TransactionType = string;
export declare type TransactionFilter = string;
export declare type ClientExtensions = string;
export declare const Instrument_Properties: Property[];
export declare class Instrument extends Definition {
    /**
     * The name of the Instrument
     */
    name: any;
    /**
     * The type of the Instrument
     */
    type: InstrumentType;
    /**
     * The display name of the Instrument
     */
    displayName: string;
    /**
     * The location of the "pip" for this instrument. The decimal position of the pip in this Instrument's price can be found at 10 ^ pipLocation (e.g. -4 pipLocation results in a decimal pip position of 10 ^ -4 = 0.0001).
     */
    pipLocation: number;
    /**
     * The number of decimal places that should be used to display prices for this instrument. (e.g. a displayPrecision of 5 would result in a price of "1" being displayed as "1.00000")
     */
    displayPrecision: number;
    /**
     * The amount of decimal places that may be provided when specifying the number of units traded for this instrument.
     */
    tradeUnitsPrecision: number;
    /**
     * The smallest number of units allowed to be traded for this instrument.
     */
    minimumTradeSize: DecimalNumber;
    /**
     * The maximum trailing stop distance allowed for a trailing stop loss created for this instrument. Specified in price units.
     */
    maximumTrailingStopDistance: DecimalNumber;
    /**
     * The minimum trailing stop distance allowed for a trailing stop loss created for this instrument. Specified in price units.
     */
    minimumTrailingStopDistance: DecimalNumber;
    /**
     * The maximum position size allowed for this instrument. Specified in units.
     */
    maximumPositionSize: DecimalNumber;
    /**
     * The maximum units allowed for an Order placed for this instrument. Specified in units.
     */
    maximumOrderUnits: DecimalNumber;
    /**
     * The margin rate for this instrument.
     */
    marginRate: DecimalNumber;
    /**
     * The commission structure for this instrument.
     */
    commission: InstrumentCommission;
    constructor(data: any);
}
export declare const InstrumentCommission_Properties: Property[];
export declare class InstrumentCommission extends Definition {
    /**
     * The commission amount (in the Account's home currency) charged per unitsTraded of the instrument
     */
    commission: DecimalNumber;
    /**
     * The number of units traded that the commission amount is based on.
     */
    unitsTraded: DecimalNumber;
    /**
     * The minimum commission amount (in the Account's home currency) that is charged when an Order is filled for this instrument.
     */
    minimumCommission: DecimalNumber;
    constructor(data: any);
}
export declare const GuaranteedStopLossOrderLevelRestriction_Properties: Property[];
export declare class GuaranteedStopLossOrderLevelRestriction extends Definition {
    /**
     * Applies to Trades with a guaranteed Stop Loss Order attached for the specified Instrument. This is the total allowed Trade volume that can exist within the priceRange based on the trigger prices of the guaranteed Stop Loss Orders.
     */
    volume: DecimalNumber;
    /**
     * The price range the volume applies to. This value is in price units.
     */
    priceRange: DecimalNumber;
    constructor(data: any);
}
export declare class EntitySpec {
    context: any;
    Instrument: typeof Instrument;
    InstrumentCommission: typeof InstrumentCommission;
    GuaranteedStopLossOrderLevelRestriction: typeof GuaranteedStopLossOrderLevelRestriction;
    constructor(context: any);
}
