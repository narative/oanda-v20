"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The type of the Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
var OrderType;
(function (OrderType) {
    /**
     * A Market Order
     */
    OrderType["MARKET"] = "MARKET";
    /**
     * A Limit Order
     */
    OrderType["LIMIT"] = "LIMIT";
    /**
     * A Stop Order
     */
    OrderType["STOP"] = "STOP";
    /**
     * A Market-if-touched Order
     */
    OrderType["MARKET_IF_TOUCHED"] = "MARKET_IF_TOUCHED";
    /**
     * A Take Profit Order
     */
    OrderType["TAKE_PROFIT"] = "TAKE_PROFIT";
    /**
     * A Stop Loss Order
     */
    OrderType["STOP_LOSS"] = "STOP_LOSS";
    /**
     * A Trailing Stop Loss Order
     */
    OrderType["TRAILING_STOP_LOSS"] = "TRAILING_STOP_LOSS";
    /**
     * A Fixed Price Order
     */
    OrderType["FIXED_PRICE"] = "FIXED_PRICE";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
/**
 * The type of the Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
var CancellableOrderType;
(function (CancellableOrderType) {
    /**
     * A Limit Order
     */
    CancellableOrderType["LIMIT"] = "LIMIT";
    /**
     * A Stop Order
     */
    CancellableOrderType["STOP"] = "STOP";
    /**
     * A Market-if-touched Order
     */
    CancellableOrderType["MARKET_IF_TOUCHED"] = "MARKET_IF_TOUCHED";
    /**
     * A Take Profit Order
     */
    CancellableOrderType["TAKE_PROFIT"] = "TAKE_PROFIT";
    /**
     * A Stop Loss Order
     */
    CancellableOrderType["STOP_LOSS"] = "STOP_LOSS";
    /**
     * A Trailing Stop Loss Order
     */
    CancellableOrderType["TRAILING_STOP_LOSS"] = "TRAILING_STOP_LOSS";
})(CancellableOrderType = exports.CancellableOrderType || (exports.CancellableOrderType = {}));
/**
 * The current state of the Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
var OrderState;
(function (OrderState) {
    /**
     * The Order is currently pending execution
     */
    OrderState["PENDING"] = "PENDING";
    /**
     * The Order has been filled
     */
    OrderState["FILLED"] = "FILLED";
    /**
     * The Order has been triggered
     */
    OrderState["TRIGGERED"] = "TRIGGERED";
    /**
     * The Order has been cancelled
     */
    OrderState["CANCELLED"] = "CANCELLED";
})(OrderState = exports.OrderState || (exports.OrderState = {}));
/**
 * The state to filter the requested Orders by. https://developer.oanda.com/rest-live-v20/order-df/
 */
var OrderStateFilter;
(function (OrderStateFilter) {
    /**
     * The Orders that are currently pending execution
     */
    OrderStateFilter["PENDING"] = "PENDING";
    /**
     * The Orders that have been filled
     */
    OrderStateFilter["FILLED"] = "FILLED";
    /**
     * The Orders that have been triggered
     */
    OrderStateFilter["TRIGGERED"] = "TRIGGERED";
    /**
     * The Orders that have been cancelled
     */
    OrderStateFilter["CANCELLED"] = "CANCELLED";
    /**
     * The Orders that are in any of the possible states listed above
     */
    OrderStateFilter["ALL"] = "ALL";
})(OrderStateFilter = exports.OrderStateFilter || (exports.OrderStateFilter = {}));
/**
 * The time-in-force of an Order. TimeInForce describes how long an Order should remain pending before being automatically cancelled by the execution system. https://developer.oanda.com/rest-live-v20/order-df/
 */
var TimeInForce;
(function (TimeInForce) {
    /**
     * The Order is “Good unTil Cancelled”
     */
    TimeInForce["GTC"] = "GTC";
    /**
     * The Order is “Good unTil Date” and will be cancelled at the provided time
     */
    TimeInForce["GTD"] = "GTD";
    /**
     * The Order is “Good For Day” and will be cancelled at 5pm New York time
     */
    TimeInForce["GFD"] = "GFD";
    /**
     * The Order must be immediately “Filled Or Killed”
     */
    TimeInForce["FOK"] = "FOK";
    /**
     * The Order must be “Immediately partially filled Or Cancelled”
     */
    TimeInForce["IOC"] = "IOC";
})(TimeInForce = exports.TimeInForce || (exports.TimeInForce = {}));
/**
 * Specification of how Positions in the Account are modified when the Order is filled. https://developer.oanda.com/rest-live-v20/order-df/
 */
var OrderPositionFill;
(function (OrderPositionFill) {
    /**
     * When the Order is filled, only allow Positions to be opened or extended.
     */
    OrderPositionFill["OPEN_ONLY"] = "OPEN_ONLY";
    /**
     * When the Order is filled, always fully reduce an existing Position before opening a new Position.
     */
    OrderPositionFill["REDUCE_FIRST"] = "REDUCE_FIRST";
    /**
     * When the Order is filled, only reduce an existing Position.
     */
    OrderPositionFill["REDUCE_ONLY"] = "REDUCE_ONLY";
    /**
     * When the Order is filled, use REDUCE_FIRST behaviour for non-client hedging Accounts, and OPEN_ONLY behaviour for client hedging Accounts.
     */
    OrderPositionFill["DEFAULT"] = "DEFAULT";
})(OrderPositionFill = exports.OrderPositionFill || (exports.OrderPositionFill = {}));
/**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA’s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order’s trigger condition is set to the default value when indicating the distance from an Order’s trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be “DEFAULT”, or the “natural” trigger side “DEFAULT” results in. So for a Stop Loss Order for a long trade valid values are “DEFAULT” and “BID”, and for short trades “DEFAULT” and “ASK” are valid. https://developer.oanda.com/rest-live-v20/order-df/
 */
var OrderTriggerCondition;
(function (OrderTriggerCondition) {
    /**
     * Trigger an Order the “natural” way: compare its price to the ask for long Orders and bid for short Orders.
     */
    OrderTriggerCondition["DEFAULT"] = "DEFAULT";
    /**
     * Trigger an Order the opposite of the “natural” way: compare its price the bid for long Orders and ask for short Orders.
     */
    OrderTriggerCondition["INVERSE"] = "INVERSE";
    /**
     * Trigger an Order by comparing its price to the bid regardless of whether it is long or short.
     */
    OrderTriggerCondition["BID"] = "BID";
    /**
     * Trigger an Order by comparing its price to the ask regardless of whether it is long or short.
     */
    OrderTriggerCondition["ASK"] = "ASK";
    /**
     * Trigger an Order by comparing its price to the midpoint regardless of whether it is long or short.
     */
    OrderTriggerCondition["MID"] = "MID";
})(OrderTriggerCondition = exports.OrderTriggerCondition || (exports.OrderTriggerCondition = {}));
//# sourceMappingURL=order.js.map