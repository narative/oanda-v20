import { MarketOrderRequest, LimitOrderRequest, StopOrderRequest, MarketIfTouchedOrderRequest, TakeProfitOrderRequest, StopLossOrderRequest, TrailingStopLossOrderRequest } from '../order';
export { Order, MarketOrder, FixedPriceOrder, LimitOrder, StopOrder, MarketIfTouchedOrder, TakeProfitOrder, StopLossOrder, TrailingStopLossOrder, MarketOrderRequest, LimitOrderRequest, StopOrderRequest, MarketIfTouchedOrderRequest, TakeProfitOrderRequest, StopLossOrderRequest, TrailingStopLossOrderRequest, OrderIdentifier, DynamicOrderState, UnitsAvailableDetails, UnitsAvailable, GuaranteedStopLossOrderEntryData } from '../order';
/**
 * The base Order specification used when requesting that an Order be created. Each specific Order-type extends this definition. https://developer.oanda.com/rest-live-v20/order-df/
 */
export declare type OrderRequest = MarketOrderRequest | LimitOrderRequest | StopOrderRequest | MarketIfTouchedOrderRequest | TakeProfitOrderRequest | StopLossOrderRequest | TrailingStopLossOrderRequest;
/**
 * The Order’s identifier, unique within the Order’s Account. https://developer.oanda.com/rest-live-v20/order-df/
 */
export declare type OrderID = string;
/**
 * The specification of an Order as referred to by clients https://developer.oanda.com/rest-live-v20/order-df/
 */
export declare type OrderSpecifier = string;
/**
 * The type of the Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
export declare enum OrderType {
    /**
     * A Market Order
     */
    'MARKET' = "MARKET",
    /**
     * A Limit Order
     */
    'LIMIT' = "LIMIT",
    /**
     * A Stop Order
     */
    'STOP' = "STOP",
    /**
     * A Market-if-touched Order
     */
    'MARKET_IF_TOUCHED' = "MARKET_IF_TOUCHED",
    /**
     * A Take Profit Order
     */
    'TAKE_PROFIT' = "TAKE_PROFIT",
    /**
     * A Stop Loss Order
     */
    'STOP_LOSS' = "STOP_LOSS",
    /**
     * A Trailing Stop Loss Order
     */
    'TRAILING_STOP_LOSS' = "TRAILING_STOP_LOSS",
    /**
     * A Fixed Price Order
     */
    'FIXED_PRICE' = "FIXED_PRICE"
}
export declare const OrderTypeDescription: {
    MARKET: string;
    LIMIT: string;
    STOP: string;
    MARKET_IF_TOUCHED: string;
    TAKE_PROFIT: string;
    STOP_LOSS: string;
    TRAILING_STOP_LOSS: string;
    FIXED_PRICE: string;
};
/**
 * The type of the Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
export declare enum CancellableOrderType {
    /**
     * A Limit Order
     */
    'LIMIT' = "LIMIT",
    /**
     * A Stop Order
     */
    'STOP' = "STOP",
    /**
     * A Market-if-touched Order
     */
    'MARKET_IF_TOUCHED' = "MARKET_IF_TOUCHED",
    /**
     * A Take Profit Order
     */
    'TAKE_PROFIT' = "TAKE_PROFIT",
    /**
     * A Stop Loss Order
     */
    'STOP_LOSS' = "STOP_LOSS",
    /**
     * A Trailing Stop Loss Order
     */
    'TRAILING_STOP_LOSS' = "TRAILING_STOP_LOSS"
}
export declare const CancellableOrderTypeDescription: {
    LIMIT: string;
    STOP: string;
    MARKET_IF_TOUCHED: string;
    TAKE_PROFIT: string;
    STOP_LOSS: string;
    TRAILING_STOP_LOSS: string;
};
/**
 * The current state of the Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
export declare enum OrderState {
    /**
     * The Order is currently pending execution
     */
    'PENDING' = "PENDING",
    /**
     * The Order has been filled
     */
    'FILLED' = "FILLED",
    /**
     * The Order has been triggered
     */
    'TRIGGERED' = "TRIGGERED",
    /**
     * The Order has been cancelled
     */
    'CANCELLED' = "CANCELLED"
}
export declare const OrderStateDescription: {
    PENDING: string;
    FILLED: string;
    TRIGGERED: string;
    CANCELLED: string;
};
/**
 * The state to filter the requested Orders by. https://developer.oanda.com/rest-live-v20/order-df/
 */
export declare enum OrderStateFilter {
    /**
     * The Orders that are currently pending execution
     */
    'PENDING' = "PENDING",
    /**
     * The Orders that have been filled
     */
    'FILLED' = "FILLED",
    /**
     * The Orders that have been triggered
     */
    'TRIGGERED' = "TRIGGERED",
    /**
     * The Orders that have been cancelled
     */
    'CANCELLED' = "CANCELLED",
    /**
     * The Orders that are in any of the possible states listed above
     */
    'ALL' = "ALL"
}
export declare const OrderStateFilterDescription: {
    PENDING: string;
    FILLED: string;
    TRIGGERED: string;
    CANCELLED: string;
    ALL: string;
};
/**
 * The time-in-force of an Order. TimeInForce describes how long an Order should remain pending before being automatically cancelled by the execution system. https://developer.oanda.com/rest-live-v20/order-df/
 */
export declare enum TimeInForce {
    /**
     * The Order is “Good unTil Cancelled”
     */
    'GTC' = "GTC",
    /**
     * The Order is “Good unTil Date” and will be cancelled at the provided time
     */
    'GTD' = "GTD",
    /**
     * The Order is “Good For Day” and will be cancelled at 5pm New York time
     */
    'GFD' = "GFD",
    /**
     * The Order must be immediately “Filled Or Killed”
     */
    'FOK' = "FOK",
    /**
     * The Order must be “Immediately partially filled Or Cancelled”
     */
    'IOC' = "IOC"
}
export declare const TimeInForceDescription: {
    GTC: string;
    GTD: string;
    GFD: string;
    FOK: string;
    IOC: string;
};
/**
 * Specification of how Positions in the Account are modified when the Order is filled. https://developer.oanda.com/rest-live-v20/order-df/
 */
export declare enum OrderPositionFill {
    /**
     * When the Order is filled, only allow Positions to be opened or extended.
     */
    'OPEN_ONLY' = "OPEN_ONLY",
    /**
     * When the Order is filled, always fully reduce an existing Position before opening a new Position.
     */
    'REDUCE_FIRST' = "REDUCE_FIRST",
    /**
     * When the Order is filled, only reduce an existing Position.
     */
    'REDUCE_ONLY' = "REDUCE_ONLY",
    /**
     * When the Order is filled, use REDUCE_FIRST behaviour for non-client hedging Accounts, and OPEN_ONLY behaviour for client hedging Accounts.
     */
    'DEFAULT' = "DEFAULT"
}
export declare const OrderPositionFillDescription: {
    OPEN_ONLY: string;
    REDUCE_FIRST: string;
    REDUCE_ONLY: string;
    DEFAULT: string;
};
/**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA’s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order’s trigger condition is set to the default value when indicating the distance from an Order’s trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be “DEFAULT”, or the “natural” trigger side “DEFAULT” results in. So for a Stop Loss Order for a long trade valid values are “DEFAULT” and “BID”, and for short trades “DEFAULT” and “ASK” are valid. https://developer.oanda.com/rest-live-v20/order-df/
 */
export declare enum OrderTriggerCondition {
    /**
     * Trigger an Order the “natural” way: compare its price to the ask for long Orders and bid for short Orders.
     */
    'DEFAULT' = "DEFAULT",
    /**
     * Trigger an Order the opposite of the “natural” way: compare its price the bid for long Orders and ask for short Orders.
     */
    'INVERSE' = "INVERSE",
    /**
     * Trigger an Order by comparing its price to the bid regardless of whether it is long or short.
     */
    'BID' = "BID",
    /**
     * Trigger an Order by comparing its price to the ask regardless of whether it is long or short.
     */
    'ASK' = "ASK",
    /**
     * Trigger an Order by comparing its price to the midpoint regardless of whether it is long or short.
     */
    'MID' = "MID"
}
export declare const OrderTriggerConditionDescription: {
    DEFAULT: string;
    INVERSE: string;
    BID: string;
    ASK: string;
    MID: string;
};
