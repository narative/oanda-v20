import { Definition, Property } from './base';
import * as primitives from './primitives';
import * as transaction from './transaction';
export declare const OrderIdentifier_Properties: Property[];
export declare class OrderIdentifier extends Definition {
    /**
     * The OANDA-assigned Order ID
     */
    orderID: primitives.OrderID;
    /**
     * The client-provided client Order ID
     */
    clientOrderID: primitives.ClientID;
    constructor(data: any);
}
export declare const DynamicOrderState_Properties: Property[];
export declare class DynamicOrderState extends Definition {
    /**
     * The Order's ID.
     */
    id: primitives.OrderID;
    /**
     * The Order's calculated trailing stop value.
     */
    trailingStopValue: primitives.PriceValue;
    /**
     * The distance between the Trailing Stop Loss Order's trailingStopValue and the current Market Price. This represents the distance (in price units) of the Order from a triggering price. If the distance could not be determined, this value will not be set.
     */
    triggerDistance: primitives.PriceValue;
    /**
     * True if an exact trigger distance could be calculated. If false, it means the provided trigger distance is a best estimate. If the distance could not be determined, this value will not be set.
     */
    isTriggerDistanceExact: boolean;
    constructor(data: any);
}
export declare const Order_Properties: Property[];
export declare class Order extends Definition {
    /**
     * The Order's identifier, unique within the Order's Account.
     */
    id: primitives.OrderID;
    /**
     * The time when the Order was created.
     */
    createTime: primitives.DateTime;
    /**
     * The current state of the Order.
     */
    state: primitives.OrderState;
    /**
     * The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    constructor(data: any);
    static create(order: any): Order | TakeProfitOrder | StopLossOrder | TrailingStopLossOrder | MarketOrder | FixedPriceOrder | LimitOrder | StopOrder | MarketIfTouchedOrder;
}
export declare const MarketOrder_Properties: Property[];
export declare class MarketOrder extends Definition {
    /**
     * The Order's identifier, unique within the Order's Account.
     */
    id: primitives.OrderID;
    /**
     * The time when the Order was created.
     */
    createTime: primitives.DateTime;
    /**
     * The current state of the Order.
     */
    state: primitives.OrderState;
    /**
     * The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    /**
     * The type of the Order. Always set to "MARKET" for Market Orders.
     */
    type: primitives.OrderType;
    /**
     * The Market Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the Market Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The time-in-force requested for the Market Order. Restricted to FOK or IOC for a MarketOrder.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The worst price that the client is willing to have the Market Order filled at.
     */
    priceBound: primitives.PriceValue;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
     * Details of the Trade requested to be closed, only provided when the Market Order is being used to explicitly close a Trade.
     */
    tradeClose: transaction.MarketOrderTradeClose;
    /**
     * Details of the long Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a long Position.
     */
    longPositionCloseout: transaction.MarketOrderPositionCloseout;
    /**
     * Details of the short Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a short Position.
     */
    shortPositionCloseout: transaction.MarketOrderPositionCloseout;
    /**
     * Details of the Margin Closeout that this Market Order was created for
     */
    marginCloseout: transaction.MarketOrderMarginCloseout;
    /**
     * Details of the delayed Trade close that this Market Order was created for
     */
    delayedTradeClose: transaction.MarketOrderDelayedTradeClose;
    /**
     * TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.
     */
    takeProfitOnFill: transaction.TakeProfitDetails;
    /**
     * StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.
     */
    stopLossOnFill: transaction.StopLossDetails;
    /**
     * TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.
     */
    trailingStopLossOnFill: transaction.TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: transaction.ClientExtensions;
    /**
     * ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)
     */
    fillingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was filled (only provided when the Order's state is FILLED)
     */
    filledTime: primitives.DateTime;
    /**
     * Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)
     */
    tradeOpenedID: primitives.TradeID;
    /**
     * Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)
     */
    tradeReducedID: primitives.TradeID;
    /**
     * Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)
     */
    tradeClosedIDs: primitives.TradeID[];
    /**
     * ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)
     */
    cancellingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)
     */
    cancelledTime: primitives.DateTime;
    constructor(data: any);
}
export declare const FixedPriceOrder_Properties: Property[];
export declare class FixedPriceOrder extends Definition {
    /**
     * The Order's identifier, unique within the Order's Account.
     */
    id: primitives.OrderID;
    /**
     * The time when the Order was created.
     */
    createTime: primitives.DateTime;
    /**
     * The current state of the Order.
     */
    state: primitives.OrderState;
    /**
     * The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    /**
     * The type of the Order. Always set to "FIXED_PRICE" for Fixed Price Orders.
     */
    type: primitives.OrderType;
    /**
     * The Fixed Price Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the Fixed Price Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The price specified for the Fixed Price Order. This price is the exact price that the Fixed Price Order will be filled at.
     */
    price: primitives.PriceValue;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
     * The state that the trade resulting from the Fixed Price Order should be set to.
     */
    tradeState: string;
    /**
     * TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.
     */
    takeProfitOnFill: transaction.TakeProfitDetails;
    /**
     * StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.
     */
    stopLossOnFill: transaction.StopLossDetails;
    /**
     * TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.
     */
    trailingStopLossOnFill: transaction.TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: transaction.ClientExtensions;
    /**
     * ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)
     */
    fillingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was filled (only provided when the Order's state is FILLED)
     */
    filledTime: primitives.DateTime;
    /**
     * Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)
     */
    tradeOpenedID: primitives.TradeID;
    /**
     * Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)
     */
    tradeReducedID: primitives.TradeID;
    /**
     * Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)
     */
    tradeClosedIDs: primitives.TradeID[];
    /**
     * ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)
     */
    cancellingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)
     */
    cancelledTime: primitives.DateTime;
    constructor(data: any);
}
export declare const LimitOrder_Properties: Property[];
export declare class LimitOrder extends Definition {
    /**
     * The Order's identifier, unique within the Order's Account.
     */
    id: primitives.OrderID;
    /**
     * The time when the Order was created.
     */
    createTime: primitives.DateTime;
    /**
     * The current state of the Order.
     */
    state: primitives.OrderState;
    /**
     * The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    /**
     * The type of the Order. Always set to "LIMIT" for Limit Orders.
     */
    type: primitives.OrderType;
    /**
     * The Limit Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the Limit Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The price threshold specified for the Limit Order. The Limit Order will only be filled by a market price that is equal to or better than this price.
     */
    price: primitives.PriceValue;
    /**
     * The time-in-force requested for the Limit Order.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the Limit Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.
     */
    takeProfitOnFill: transaction.TakeProfitDetails;
    /**
     * StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.
     */
    stopLossOnFill: transaction.StopLossDetails;
    /**
     * TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.
     */
    trailingStopLossOnFill: transaction.TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: transaction.ClientExtensions;
    /**
     * ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)
     */
    fillingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was filled (only provided when the Order's state is FILLED)
     */
    filledTime: primitives.DateTime;
    /**
     * Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)
     */
    tradeOpenedID: primitives.TradeID;
    /**
     * Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)
     */
    tradeReducedID: primitives.TradeID;
    /**
     * Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)
     */
    tradeClosedIDs: primitives.TradeID[];
    /**
     * ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)
     */
    cancellingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)
     */
    cancelledTime: primitives.DateTime;
    /**
     * The ID of the Order that was replaced by this Order (only provided if this Order was created as part of a cancel/replace).
     */
    replacesOrderID: primitives.OrderID;
    /**
     * The ID of the Order that replaced this Order (only provided if this Order was cancelled as part of a cancel/replace).
     */
    replacedByOrderID: primitives.OrderID;
    constructor(data: any);
}
export declare const StopOrder_Properties: Property[];
export declare class StopOrder extends Definition {
    /**
     * The Order's identifier, unique within the Order's Account.
     */
    id: primitives.OrderID;
    /**
     * The time when the Order was created.
     */
    createTime: primitives.DateTime;
    /**
     * The current state of the Order.
     */
    state: primitives.OrderState;
    /**
     * The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    /**
     * The type of the Order. Always set to "STOP" for Stop Orders.
     */
    type: primitives.OrderType;
    /**
     * The Stop Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the Stop Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The price threshold specified for the Stop Order. The Stop Order will only be filled by a market price that is equal to or worse than this price.
     */
    price: primitives.PriceValue;
    /**
     * The worst market price that may be used to fill this Stop Order. If the market gaps and crosses through both the price and the priceBound, the Stop Order will be cancelled instead of being filled.
     */
    priceBound: primitives.PriceValue;
    /**
     * The time-in-force requested for the Stop Order.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the Stop Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.
     */
    takeProfitOnFill: transaction.TakeProfitDetails;
    /**
     * StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.
     */
    stopLossOnFill: transaction.StopLossDetails;
    /**
     * TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.
     */
    trailingStopLossOnFill: transaction.TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: transaction.ClientExtensions;
    /**
     * ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)
     */
    fillingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was filled (only provided when the Order's state is FILLED)
     */
    filledTime: primitives.DateTime;
    /**
     * Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)
     */
    tradeOpenedID: primitives.TradeID;
    /**
     * Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)
     */
    tradeReducedID: primitives.TradeID;
    /**
     * Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)
     */
    tradeClosedIDs: primitives.TradeID[];
    /**
     * ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)
     */
    cancellingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)
     */
    cancelledTime: primitives.DateTime;
    /**
     * The ID of the Order that was replaced by this Order (only provided if this Order was created as part of a cancel/replace).
     */
    replacesOrderID: primitives.OrderID;
    /**
     * The ID of the Order that replaced this Order (only provided if this Order was cancelled as part of a cancel/replace).
     */
    replacedByOrderID: primitives.OrderID;
    constructor(data: any);
}
export declare const MarketIfTouchedOrder_Properties: Property[];
export declare class MarketIfTouchedOrder extends Definition {
    /**
     * The Order's identifier, unique within the Order's Account.
     */
    id: primitives.OrderID;
    /**
     * The time when the Order was created.
     */
    createTime: primitives.DateTime;
    /**
     * The current state of the Order.
     */
    state: primitives.OrderState;
    /**
     * The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    /**
     * The type of the Order. Always set to "MARKET_IF_TOUCHED" for Market If Touched Orders.
     */
    type: primitives.OrderType;
    /**
     * The MarketIfTouched Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the MarketIfTouched Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The price threshold specified for the MarketIfTouched Order. The MarketIfTouched Order will only be filled by a market price that crosses this price from the direction of the market price at the time when the Order was created (the initialMarketPrice). Depending on the value of the Order's price and initialMarketPrice, the MarketIfTouchedOrder will behave like a Limit or a Stop Order.
     */
    price: primitives.PriceValue;
    /**
     * The worst market price that may be used to fill this MarketIfTouched Order.
     */
    priceBound: primitives.PriceValue;
    /**
     * The time-in-force requested for the MarketIfTouched Order. Restricted to "GTC", "GFD" and "GTD" for MarketIfTouched Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the MarketIfTouched Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The Market price at the time when the MarketIfTouched Order was created.
     */
    initialMarketPrice: primitives.PriceValue;
    /**
     * TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.
     */
    takeProfitOnFill: transaction.TakeProfitDetails;
    /**
     * StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.
     */
    stopLossOnFill: transaction.StopLossDetails;
    /**
     * TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.
     */
    trailingStopLossOnFill: transaction.TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: transaction.ClientExtensions;
    /**
     * ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)
     */
    fillingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was filled (only provided when the Order's state is FILLED)
     */
    filledTime: primitives.DateTime;
    /**
     * Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)
     */
    tradeOpenedID: primitives.TradeID;
    /**
     * Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)
     */
    tradeReducedID: primitives.TradeID;
    /**
     * Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)
     */
    tradeClosedIDs: primitives.TradeID[];
    /**
     * ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)
     */
    cancellingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)
     */
    cancelledTime: primitives.DateTime;
    /**
     * The ID of the Order that was replaced by this Order (only provided if this Order was created as part of a cancel/replace).
     */
    replacesOrderID: primitives.OrderID;
    /**
     * The ID of the Order that replaced this Order (only provided if this Order was cancelled as part of a cancel/replace).
     */
    replacedByOrderID: primitives.OrderID;
    constructor(data: any);
}
export declare const TakeProfitOrder_Properties: Property[];
export declare class TakeProfitOrder extends Definition {
    /**
     * The Order's identifier, unique within the Order's Account.
     */
    id: primitives.OrderID;
    /**
     * The time when the Order was created.
     */
    createTime: primitives.DateTime;
    /**
     * The current state of the Order.
     */
    state: primitives.OrderState;
    /**
     * The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    /**
     * The type of the Order. Always set to "TAKE_PROFIT" for Take Profit Orders.
     */
    type: primitives.OrderType;
    /**
     * The ID of the Trade to close when the price threshold is breached.
     */
    tradeID: primitives.TradeID;
    /**
     * The client ID of the Trade to be closed when the price threshold is breached.
     */
    clientTradeID: primitives.ClientID;
    /**
     * The price threshold specified for the TakeProfit Order. The associated Trade will be closed by a market price that is equal to or better than this threshold.
     */
    price: primitives.PriceValue;
    /**
     * The time-in-force requested for the TakeProfit Order. Restricted to "GTC", "GFD" and "GTD" for TakeProfit Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the TakeProfit Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)
     */
    fillingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was filled (only provided when the Order's state is FILLED)
     */
    filledTime: primitives.DateTime;
    /**
     * Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)
     */
    tradeOpenedID: primitives.TradeID;
    /**
     * Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)
     */
    tradeReducedID: primitives.TradeID;
    /**
     * Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)
     */
    tradeClosedIDs: primitives.TradeID[];
    /**
     * ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)
     */
    cancellingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)
     */
    cancelledTime: primitives.DateTime;
    /**
     * The ID of the Order that was replaced by this Order (only provided if this Order was created as part of a cancel/replace).
     */
    replacesOrderID: primitives.OrderID;
    /**
     * The ID of the Order that replaced this Order (only provided if this Order was cancelled as part of a cancel/replace).
     */
    replacedByOrderID: primitives.OrderID;
    constructor(data: any);
}
export declare const StopLossOrder_Properties: Property[];
export declare class StopLossOrder extends Definition {
    /**
     * The Order's identifier, unique within the Order's Account.
     */
    id: primitives.OrderID;
    /**
     * The time when the Order was created.
     */
    createTime: primitives.DateTime;
    /**
     * The current state of the Order.
     */
    state: primitives.OrderState;
    /**
     * The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    /**
     * The type of the Order. Always set to "STOP_LOSS" for Stop Loss Orders.
     */
    type: primitives.OrderType;
    /**
     * The premium that will be charged if the Stop Loss Order is guaranteed and the Order is filled at the guaranteed price. It is in price units and is charged for each unit of the Trade.
     */
    guaranteedExecutionPremium: primitives.DecimalNumber;
    /**
     * The ID of the Trade to close when the price threshold is breached.
     */
    tradeID: primitives.TradeID;
    /**
     * The client ID of the Trade to be closed when the price threshold is breached.
     */
    clientTradeID: primitives.ClientID;
    /**
     * The price threshold specified for the Stop Loss Order. If the guaranteed flag is false, the associated Trade will be closed by a market price that is equal to or worse than this threshold. If the flag is true the associated Trade will be closed at this price.
     */
    price: primitives.PriceValue;
    /**
     * Specifies the distance (in price units) from the Account's current price to use as the Stop Loss Order price. If the Trade is short the Instrument's bid price is used, and for long Trades the ask is used.
     */
    distance: primitives.DecimalNumber;
    /**
     * The time-in-force requested for the StopLoss Order. Restricted to "GTC", "GFD" and "GTD" for StopLoss Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * Flag indicating that the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.
     */
    guaranteed: boolean;
    /**
     * ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)
     */
    fillingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was filled (only provided when the Order's state is FILLED)
     */
    filledTime: primitives.DateTime;
    /**
     * Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)
     */
    tradeOpenedID: primitives.TradeID;
    /**
     * Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)
     */
    tradeReducedID: primitives.TradeID;
    /**
     * Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)
     */
    tradeClosedIDs: primitives.TradeID[];
    /**
     * ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)
     */
    cancellingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)
     */
    cancelledTime: primitives.DateTime;
    /**
     * The ID of the Order that was replaced by this Order (only provided if this Order was created as part of a cancel/replace).
     */
    replacesOrderID: primitives.OrderID;
    /**
     * The ID of the Order that replaced this Order (only provided if this Order was cancelled as part of a cancel/replace).
     */
    replacedByOrderID: primitives.OrderID;
    constructor(data: any);
}
export declare const TrailingStopLossOrder_Properties: Property[];
export declare class TrailingStopLossOrder extends Definition {
    /**
     * The Order's identifier, unique within the Order's Account.
     */
    id: primitives.OrderID;
    /**
     * The time when the Order was created.
     */
    createTime: primitives.DateTime;
    /**
     * The current state of the Order.
     */
    state: primitives.OrderState;
    /**
     * The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    /**
     * The type of the Order. Always set to "TRAILING_STOP_LOSS" for Trailing Stop Loss Orders.
     */
    type: primitives.OrderType;
    /**
     * The ID of the Trade to close when the price threshold is breached.
     */
    tradeID: primitives.TradeID;
    /**
     * The client ID of the Trade to be closed when the price threshold is breached.
     */
    clientTradeID: primitives.ClientID;
    /**
     * The price distance (in price units) specified for the TrailingStopLoss Order.
     */
    distance: primitives.DecimalNumber;
    /**
     * The time-in-force requested for the TrailingStopLoss Order. Restricted to "GTC", "GFD" and "GTD" for TrailingStopLoss Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The trigger price for the Trailing Stop Loss Order. The trailing stop value will trail (follow) the market price by the TSL order's configured "distance" as the market price moves in the winning direction. If the market price moves to a level that is equal to or worse than the trailing stop value, the order will be filled and the Trade will be closed.
     */
    trailingStopValue: primitives.PriceValue;
    /**
     * ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)
     */
    fillingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was filled (only provided when the Order's state is FILLED)
     */
    filledTime: primitives.DateTime;
    /**
     * Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)
     */
    tradeOpenedID: primitives.TradeID;
    /**
     * Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)
     */
    tradeReducedID: primitives.TradeID;
    /**
     * Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)
     */
    tradeClosedIDs: primitives.TradeID[];
    /**
     * ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)
     */
    cancellingTransactionID: primitives.TransactionID;
    /**
     * Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)
     */
    cancelledTime: primitives.DateTime;
    /**
     * The ID of the Order that was replaced by this Order (only provided if this Order was created as part of a cancel/replace).
     */
    replacesOrderID: primitives.OrderID;
    /**
     * The ID of the Order that replaced this Order (only provided if this Order was cancelled as part of a cancel/replace).
     */
    replacedByOrderID: primitives.OrderID;
    constructor(data: any);
}
export declare const OrderRequest_Properties: any[];
export declare class OrderRequest extends Definition {
    constructor(data: any);
}
export declare const MarketOrderRequest_Properties: Property[];
export declare class MarketOrderRequest extends Definition {
    /**
     * The type of the Order to Create. Must be set to "MARKET" when creating a Market Order.
     */
    type: primitives.OrderType;
    /**
     * The Market Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the Market Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The time-in-force requested for the Market Order. Restricted to FOK or IOC for a MarketOrder.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The worst price that the client is willing to have the Market Order filled at.
     */
    priceBound: primitives.PriceValue;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
     * The client extensions to add to the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    /**
     * TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.
     */
    takeProfitOnFill: transaction.TakeProfitDetails;
    /**
     * StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.
     */
    stopLossOnFill: transaction.StopLossDetails;
    /**
     * TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.
     */
    trailingStopLossOnFill: transaction.TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: transaction.ClientExtensions;
    constructor(data: any);
}
export declare const LimitOrderRequest_Properties: Property[];
export declare class LimitOrderRequest extends Definition {
    /**
     * The type of the Order to Create. Must be set to "LIMIT" when creating a Market Order.
     */
    type: primitives.OrderType;
    /**
     * The Limit Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the Limit Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The price threshold specified for the Limit Order. The Limit Order will only be filled by a market price that is equal to or better than this price.
     */
    price: primitives.PriceValue;
    /**
     * The time-in-force requested for the Limit Order.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the Limit Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The client extensions to add to the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    /**
     * TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.
     */
    takeProfitOnFill: transaction.TakeProfitDetails;
    /**
     * StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.
     */
    stopLossOnFill: transaction.StopLossDetails;
    /**
     * TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.
     */
    trailingStopLossOnFill: transaction.TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: transaction.ClientExtensions;
    constructor(data: any);
}
export declare const StopOrderRequest_Properties: Property[];
export declare class StopOrderRequest extends Definition {
    /**
     * The type of the Order to Create. Must be set to "STOP" when creating a Stop Order.
     */
    type: primitives.OrderType;
    /**
     * The Stop Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the Stop Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The price threshold specified for the Stop Order. The Stop Order will only be filled by a market price that is equal to or worse than this price.
     */
    price: primitives.PriceValue;
    /**
     * The worst market price that may be used to fill this Stop Order. If the market gaps and crosses through both the price and the priceBound, the Stop Order will be cancelled instead of being filled.
     */
    priceBound: primitives.PriceValue;
    /**
     * The time-in-force requested for the Stop Order.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the Stop Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
     * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
     * This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
     * A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
     */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The client extensions to add to the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    /**
     * TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.
     */
    takeProfitOnFill: transaction.TakeProfitDetails;
    /**
     * StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.
     */
    stopLossOnFill: transaction.StopLossDetails;
    /**
     * TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.
     */
    trailingStopLossOnFill: transaction.TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: transaction.ClientExtensions;
    constructor(data: any);
}
export declare const MarketIfTouchedOrderRequest_Properties: Property[];
export declare class MarketIfTouchedOrderRequest extends Definition {
    /**
     * The type of the Order to Create. Must be set to "MARKET_IF_TOUCHED" when creating a Market If Touched Order.
     */
    type: primitives.OrderType;
    /**
     * The MarketIfTouched Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the MarketIfTouched Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The price threshold specified for the MarketIfTouched Order. The MarketIfTouched Order will only be filled by a market price that crosses this price from the direction of the market price at the time when the Order was created (the initialMarketPrice). Depending on the value of the Order's price and initialMarketPrice, the MarketIfTouchedOrder will behave like a Limit or a Stop Order.
     */
    price: primitives.PriceValue;
    /**
     * The worst market price that may be used to fill this MarketIfTouched Order.
     */
    priceBound: primitives.PriceValue;
    /**
     * The time-in-force requested for the MarketIfTouched Order. Restricted to "GTC", "GFD" and "GTD" for MarketIfTouched Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the MarketIfTouched Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The client extensions to add to the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    /**
     * TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.
     */
    takeProfitOnFill: transaction.TakeProfitDetails;
    /**
     * StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.
     */
    stopLossOnFill: transaction.StopLossDetails;
    /**
     * TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.
     */
    trailingStopLossOnFill: transaction.TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: transaction.ClientExtensions;
    constructor(data: any);
}
export declare const TakeProfitOrderRequest_Properties: Property[];
export declare class TakeProfitOrderRequest extends Definition {
    /**
     * The type of the Order to Create. Must be set to "TAKE_PROFIT" when creating a Take Profit Order.
     */
    type: primitives.OrderType;
    /**
     * The ID of the Trade to close when the price threshold is breached.
     */
    tradeID: primitives.TradeID;
    /**
     * The client ID of the Trade to be closed when the price threshold is breached.
     */
    clientTradeID: primitives.ClientID;
    /**
     * The price threshold specified for the TakeProfit Order. The associated Trade will be closed by a market price that is equal to or better than this threshold.
     */
    price: primitives.PriceValue;
    /**
     * The time-in-force requested for the TakeProfit Order. Restricted to "GTC", "GFD" and "GTD" for TakeProfit Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the TakeProfit Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The client extensions to add to the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    constructor(data: any);
}
export declare const StopLossOrderRequest_Properties: Property[];
export declare class StopLossOrderRequest extends Definition {
    /**
     * The type of the Order to Create. Must be set to "STOP_LOSS" when creating a Stop Loss Order.
     */
    type: primitives.OrderType;
    /**
     * The ID of the Trade to close when the price threshold is breached.
     */
    tradeID: primitives.TradeID;
    /**
     * The client ID of the Trade to be closed when the price threshold is breached.
     */
    clientTradeID: primitives.ClientID;
    /**
     * The price threshold specified for the Stop Loss Order. If the guaranteed flag is false, the associated Trade will be closed by a market price that is equal to or worse than this threshold. If the flag is true the associated Trade will be closed at this price.
     */
    price: primitives.PriceValue;
    /**
     * Specifies the distance (in price units) from the Account's current price to use as the Stop Loss Order price. If the Trade is short the Instrument's bid price is used, and for long Trades the ask is used.
     */
    distance: primitives.DecimalNumber;
    /**
     * The time-in-force requested for the StopLoss Order. Restricted to "GTC", "GFD" and "GTD" for StopLoss Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * Flag indicating that the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.
     */
    guaranteed: boolean;
    /**
     * The client extensions to add to the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    constructor(data: any);
}
export declare const TrailingStopLossOrderRequest_Properties: Property[];
export declare class TrailingStopLossOrderRequest extends Definition {
    /**
     * The type of the Order to Create. Must be set to "TRAILING_STOP_LOSS" when creating a Trailng Stop Loss Order.
     */
    type: primitives.OrderType;
    /**
     * The ID of the Trade to close when the price threshold is breached.
     */
    tradeID: primitives.TradeID;
    /**
     * The client ID of the Trade to be closed when the price threshold is breached.
     */
    clientTradeID: primitives.ClientID;
    /**
     * The price distance (in price units) specified for the TrailingStopLoss Order.
     */
    distance: primitives.DecimalNumber;
    /**
     * The time-in-force requested for the TrailingStopLoss Order. Restricted to "GTC", "GFD" and "GTD" for TrailingStopLoss Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The client extensions to add to the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.
     */
    clientExtensions: transaction.ClientExtensions;
    constructor(data: any);
}
export declare const UnitsAvailableDetails_Properties: Property[];
export declare class UnitsAvailableDetails extends Definition {
    /**
     * The units available for long Orders.
     */
    long: primitives.DecimalNumber;
    /**
     * The units available for short Orders.
     */
    short: primitives.DecimalNumber;
    constructor(data: any);
}
export declare const UnitsAvailable_Properties: Property[];
export declare class UnitsAvailable extends Definition {
    /**
     * The number of units that are available to be traded using an Order with a positionFill option of "DEFAULT". For an Account with hedging enabled, this value will be the same as the "OPEN_ONLY" value. For an Account without hedging enabled, this value will be the same as the "REDUCE_FIRST" value.
     */
    default: UnitsAvailableDetails;
    /**
     * The number of units that may are available to be traded with an Order with a positionFill option of "REDUCE_FIRST".
     */
    reduceFirst: UnitsAvailableDetails;
    /**
     * The number of units that may are available to be traded with an Order with a positionFill option of "REDUCE_ONLY".
     */
    reduceOnly: UnitsAvailableDetails;
    /**
     * The number of units that may are available to be traded with an Order with a positionFill option of "OPEN_ONLY".
     */
    openOnly: UnitsAvailableDetails;
    constructor(data: any);
}
export declare const GuaranteedStopLossOrderEntryData_Properties: Property[];
export declare class GuaranteedStopLossOrderEntryData extends Definition {
    /**
     * The minimum distance allowed between the Trade's fill price and the configured price for guaranteed Stop Loss Orders created for this instrument. Specified in price units.
     */
    minimumDistance: primitives.DecimalNumber;
    /**
     * The amount that is charged to the account if a guaranteed Stop Loss Order is triggered and filled. The value is in price units and is charged for each unit of the Trade.
     */
    premium: primitives.DecimalNumber;
    /**
     * The guaranteed Stop Loss Order level restriction for this instrument.
     */
    levelRestriction: primitives.GuaranteedStopLossOrderLevelRestriction;
    constructor(data: any);
}
export declare class EntitySpec {
    context: any;
    OrderIdentifier: typeof OrderIdentifier;
    DynamicOrderState: typeof DynamicOrderState;
    Order: typeof Order;
    MarketOrder: typeof MarketOrder;
    FixedPriceOrder: typeof FixedPriceOrder;
    LimitOrder: typeof LimitOrder;
    StopOrder: typeof StopOrder;
    MarketIfTouchedOrder: typeof MarketIfTouchedOrder;
    TakeProfitOrder: typeof TakeProfitOrder;
    StopLossOrder: typeof StopLossOrder;
    TrailingStopLossOrder: typeof TrailingStopLossOrder;
    OrderRequest: typeof OrderRequest;
    MarketOrderRequest: typeof MarketOrderRequest;
    LimitOrderRequest: typeof LimitOrderRequest;
    StopOrderRequest: typeof StopOrderRequest;
    MarketIfTouchedOrderRequest: typeof MarketIfTouchedOrderRequest;
    TakeProfitOrderRequest: typeof TakeProfitOrderRequest;
    StopLossOrderRequest: typeof StopLossOrderRequest;
    TrailingStopLossOrderRequest: typeof TrailingStopLossOrderRequest;
    UnitsAvailableDetails: typeof UnitsAvailableDetails;
    UnitsAvailable: typeof UnitsAvailable;
    GuaranteedStopLossOrderEntryData: typeof GuaranteedStopLossOrderEntryData;
    constructor(context: any);
    create(accountID: any, bodyParams: any, responseHandler: any): any;
    list(accountID: any, queryParams: any, responseHandler: any): any;
    listPending(accountID: any, responseHandler: any): any;
    get(accountID: any, orderSpecifier: any, responseHandler: any): any;
    replace(accountID: any, orderSpecifier: any, bodyParams: any, responseHandler: any): any;
    cancel(accountID: any, orderSpecifier: any, responseHandler: any): any;
    setClientExtensions(accountID: any, orderSpecifier: any, bodyParams: any, responseHandler: any): any;
    market(accountID: any, orderSpec: any, responseCallback: any): void;
    limit(accountID: any, orderSpec: any, responseCallback: any): void;
    limitReplace(accountID: any, orderID: any, orderSpec: any, responseCallback: any): void;
    stop(accountID: any, orderSpec: any, responseCallback: any): void;
    stopReplace(accountID: any, orderID: any, orderSpec: any, responseCallback: any): void;
    marketIfTouched(accountID: any, orderSpec: any, responseCallback: any): void;
    marketIfTouchedReplace(accountID: any, orderID: any, orderSpec: any, responseCallback: any): void;
    takeProfit(accountID: any, orderSpec: any, responseCallback: any): void;
    takeProfitReplace(accountID: any, orderID: any, orderSpec: any, responseCallback: any): void;
    stopLoss(accountID: any, orderSpec: any, responseCallback: any): void;
    stopLossReplace(accountID: any, orderID: any, orderSpec: any, responseCallback: any): void;
    trailingStopLoss(accountID: any, orderSpec: any, responseCallback: any): void;
    trailingStopLossReplace(accountID: any, orderID: any, orderSpec: any, responseCallback: any): void;
}
