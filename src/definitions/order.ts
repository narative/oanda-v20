import * as account from './account'
import * as instrument from './instrument'
import * as trade from './trade'
import * as position from './position'
import * as transaction from './transaction'
import * as pricing from './pricing'
import * as pricingCommon from './pricingCommon'
import * as primitives from './primitives'

/**
 * The base Order definition specifies the properties that are common to all Orders. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface Order {
  /**
   * The Order's identifier, unique within the Order's Account.
   */

  id?: OrderID

  /**
   * The time when the Order was created.
   */

  createTime?: primitives.DateTime

  /**
   * The current state of the Order.
   */

  state?: OrderState

  /**
   * The client extensions of the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions
}

/**
 * A MarketOrder is an order that is filled immediately upon creation using the current market price. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface MarketOrder {
  /**
   * The Order's identifier, unique within the Order's Account.
   */

  id?: OrderID

  /**
   * The time when the Order was created.
   */

  createTime?: primitives.DateTime

  /**
   * The current state of the Order.
   */

  state?: OrderState

  /**
   * The client extensions of the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions

  /**
   * The type of the Order. Always set to 'MARKET' for Market Orders.
   */

  type?: OrderType /* default=MARKET */

  /**
   * The Market Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Market Order. A positive
   * number of units results in a long Order, and a negative number of units
   * results in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The time-in-force requested for the Market Order. Restricted to FOK or
   * IOC for a MarketOrder.
   */

  timeInForce: TimeInForce /* default=FOK */

  /**
   * The worst price that the client is willing to have the Market Order
   * filled at.
   */

  priceBound?: pricingCommon.PriceValue

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: OrderPositionFill /* default=DEFAULT */

  /**
   * Details of the Trade requested to be closed, only provided when the
   * Market Order is being used to explicitly close a Trade.
   */

  tradeClose?: transaction.MarketOrderTradeClose

  /**
   * Details of the long Position requested to be closed out, only provided
   * when a Market Order is being used to explicitly closeout a long Position.
   */

  longPositionCloseout?: transaction.MarketOrderPositionCloseout

  /**
   * Details of the short Position requested to be closed out, only provided
   * when a Market Order is being used to explicitly closeout a short
   * Position.
   */

  shortPositionCloseout?: transaction.MarketOrderPositionCloseout

  /**
   * Details of the Margin Closeout that this Market Order was created for
   */

  marginCloseout?: transaction.MarketOrderMarginCloseout

  /**
   * Details of the delayed Trade close that this Market Order was created for
   */

  delayedTradeClose?: transaction.MarketOrderDelayedTradeClose

  /**
   * TakeProfitDetails specifies the details of a Take Profit Order to be
   * created on behalf of a client. This may happen when an Order is filled
   * that opens a Trade requiring a Take Profit, or when a Trade's dependent
   * Take Profit Order is modified directly through the Trade.
   */

  takeProfitOnFill?: transaction.TakeProfitDetails

  /**
   * StopLossDetails specifies the details of a Stop Loss Order to be created
   * on behalf of a client. This may happen when an Order is filled that opens
   * a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss
   * Order is modified directly through the Trade.
   */

  stopLossOnFill?: transaction.StopLossDetails

  /**
   * TrailingStopLossDetails specifies the details of a Trailing Stop Loss
   * Order to be created on behalf of a client. This may happen when an Order
   * is filled that opens a Trade requiring a Trailing Stop Loss, or when a
   * Trade's dependent Trailing Stop Loss Order is modified directly through
   * the Trade.
   */

  trailingStopLossOnFill?: transaction.TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created). Do not set, modify, or delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: transaction.ClientExtensions

  /**
   * ID of the Transaction that filled this Order (only provided when the
   * Order's state is FILLED)
   */

  fillingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was filled (only provided when the Order's state
   * is FILLED)
   */

  filledTime?: primitives.DateTime

  /**
   * Trade ID of Trade opened when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was opened as a result of the
   * fill)
   */

  tradeOpenedID?: trade.TradeID

  /**
   * Trade ID of Trade reduced when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was reduced as a result of the
   * fill)
   */

  tradeReducedID?: trade.TradeID

  /**
   * Trade IDs of Trades closed when the Order was filled (only provided when
   * the Order's state is FILLED and one or more Trades were closed as a
   * result of the fill)
   */

  tradeClosedIDs?: trade.TradeID[]

  /**
   * ID of the Transaction that cancelled the Order (only provided when the
   * Order's state is CANCELLED)
   */

  cancellingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was cancelled (only provided when the state of
   * the Order is CANCELLED)
   */

  cancelledTime?: primitives.DateTime
}

/**
 * A FixedPriceOrder is an order that is filled immediately upon creation using a fixed price. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface FixedPriceOrder {
  /**
   * The Order's identifier, unique within the Order's Account.
   */

  id?: OrderID

  /**
   * The time when the Order was created.
   */

  createTime?: primitives.DateTime

  /**
   * The current state of the Order.
   */

  state?: OrderState

  /**
   * The client extensions of the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions

  /**
   * The type of the Order. Always set to 'FIXED_PRICE' for Fixed Price
   * Orders.
   */

  type?: OrderType /* default=FIXED_PRICE */

  /**
   * The Fixed Price Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Fixed Price Order. A positive
   * number of units results in a long Order, and a negative number of units
   * results in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The price specified for the Fixed Price Order. This price is the exact
   * price that the Fixed Price Order will be filled at.
   */

  price: pricingCommon.PriceValue

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: OrderPositionFill /* default=DEFAULT */

  /**
   * The state that the trade resulting from the Fixed Price Order should be
   * set to.
   */

  tradeState: string

  /**
   * TakeProfitDetails specifies the details of a Take Profit Order to be
   * created on behalf of a client. This may happen when an Order is filled
   * that opens a Trade requiring a Take Profit, or when a Trade's dependent
   * Take Profit Order is modified directly through the Trade.
   */

  takeProfitOnFill?: transaction.TakeProfitDetails

  /**
   * StopLossDetails specifies the details of a Stop Loss Order to be created
   * on behalf of a client. This may happen when an Order is filled that opens
   * a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss
   * Order is modified directly through the Trade.
   */

  stopLossOnFill?: transaction.StopLossDetails

  /**
   * TrailingStopLossDetails specifies the details of a Trailing Stop Loss
   * Order to be created on behalf of a client. This may happen when an Order
   * is filled that opens a Trade requiring a Trailing Stop Loss, or when a
   * Trade's dependent Trailing Stop Loss Order is modified directly through
   * the Trade.
   */

  trailingStopLossOnFill?: transaction.TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created). Do not set, modify, or delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: transaction.ClientExtensions

  /**
   * ID of the Transaction that filled this Order (only provided when the
   * Order's state is FILLED)
   */

  fillingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was filled (only provided when the Order's state
   * is FILLED)
   */

  filledTime?: primitives.DateTime

  /**
   * Trade ID of Trade opened when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was opened as a result of the
   * fill)
   */

  tradeOpenedID?: trade.TradeID

  /**
   * Trade ID of Trade reduced when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was reduced as a result of the
   * fill)
   */

  tradeReducedID?: trade.TradeID

  /**
   * Trade IDs of Trades closed when the Order was filled (only provided when
   * the Order's state is FILLED and one or more Trades were closed as a
   * result of the fill)
   */

  tradeClosedIDs?: trade.TradeID[]

  /**
   * ID of the Transaction that cancelled the Order (only provided when the
   * Order's state is CANCELLED)
   */

  cancellingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was cancelled (only provided when the state of
   * the Order is CANCELLED)
   */

  cancelledTime?: primitives.DateTime
}

/**
 * A LimitOrder is an order that is created with a price threshold, and will only be filled by a price that is equal to or better than the threshold. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface LimitOrder {
  /**
   * The Order's identifier, unique within the Order's Account.
   */

  id?: OrderID

  /**
   * The time when the Order was created.
   */

  createTime?: primitives.DateTime

  /**
   * The current state of the Order.
   */

  state?: OrderState

  /**
   * The client extensions of the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions

  /**
   * The type of the Order. Always set to 'LIMIT' for Limit Orders.
   */

  type?: OrderType /* default=LIMIT */

  /**
   * The Limit Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Limit Order. A positive number
   * of units results in a long Order, and a negative number of units results
   * in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The price threshold specified for the Limit Order. The Limit Order will
   * only be filled by a market price that is equal to or better than this
   * price.
   */

  price: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the Limit Order.
   */

  timeInForce: TimeInForce /* default=GTC */

  /**
   * The date/time when the Limit Order will be cancelled if its timeInForce
   * is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: OrderPositionFill /* default=DEFAULT */

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: OrderTriggerCondition /* default=DEFAULT */

  /**
   * TakeProfitDetails specifies the details of a Take Profit Order to be
   * created on behalf of a client. This may happen when an Order is filled
   * that opens a Trade requiring a Take Profit, or when a Trade's dependent
   * Take Profit Order is modified directly through the Trade.
   */

  takeProfitOnFill?: transaction.TakeProfitDetails

  /**
   * StopLossDetails specifies the details of a Stop Loss Order to be created
   * on behalf of a client. This may happen when an Order is filled that opens
   * a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss
   * Order is modified directly through the Trade.
   */

  stopLossOnFill?: transaction.StopLossDetails

  /**
   * TrailingStopLossDetails specifies the details of a Trailing Stop Loss
   * Order to be created on behalf of a client. This may happen when an Order
   * is filled that opens a Trade requiring a Trailing Stop Loss, or when a
   * Trade's dependent Trailing Stop Loss Order is modified directly through
   * the Trade.
   */

  trailingStopLossOnFill?: transaction.TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created). Do not set, modify, or delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: transaction.ClientExtensions

  /**
   * ID of the Transaction that filled this Order (only provided when the
   * Order's state is FILLED)
   */

  fillingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was filled (only provided when the Order's state
   * is FILLED)
   */

  filledTime?: primitives.DateTime

  /**
   * Trade ID of Trade opened when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was opened as a result of the
   * fill)
   */

  tradeOpenedID?: trade.TradeID

  /**
   * Trade ID of Trade reduced when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was reduced as a result of the
   * fill)
   */

  tradeReducedID?: trade.TradeID

  /**
   * Trade IDs of Trades closed when the Order was filled (only provided when
   * the Order's state is FILLED and one or more Trades were closed as a
   * result of the fill)
   */

  tradeClosedIDs?: trade.TradeID[]

  /**
   * ID of the Transaction that cancelled the Order (only provided when the
   * Order's state is CANCELLED)
   */

  cancellingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was cancelled (only provided when the state of
   * the Order is CANCELLED)
   */

  cancelledTime?: primitives.DateTime

  /**
   * The ID of the Order that was replaced by this Order (only provided if
   * this Order was created as part of a cancel/replace).
   */

  replacesOrderID?: OrderID

  /**
   * The ID of the Order that replaced this Order (only provided if this Order
   * was cancelled as part of a cancel/replace).
   */

  replacedByOrderID?: OrderID
}

/**
 * A StopOrder is an order that is created with a price threshold, and will only be filled by a price that is equal to or worse than the threshold. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface StopOrder {
  /**
   * The Order's identifier, unique within the Order's Account.
   */

  id?: OrderID

  /**
   * The time when the Order was created.
   */

  createTime?: primitives.DateTime

  /**
   * The current state of the Order.
   */

  state?: OrderState

  /**
   * The client extensions of the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions

  /**
   * The type of the Order. Always set to 'STOP' for Stop Orders.
   */

  type?: OrderType /* default=STOP */

  /**
   * The Stop Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Stop Order. A positive number
   * of units results in a long Order, and a negative number of units results
   * in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The price threshold specified for the Stop Order. The Stop Order will
   * only be filled by a market price that is equal to or worse than this
   * price.
   */

  price: pricingCommon.PriceValue

  /**
   * The worst market price that may be used to fill this Stop Order. If the
   * market gaps and crosses through both the price and the priceBound, the
   * Stop Order will be cancelled instead of being filled.
   */

  priceBound?: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the Stop Order.
   */

  timeInForce: TimeInForce /* default=GTC */

  /**
   * The date/time when the Stop Order will be cancelled if its timeInForce is
   * 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: OrderPositionFill /* default=DEFAULT */

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: OrderTriggerCondition /* default=DEFAULT */

  /**
   * TakeProfitDetails specifies the details of a Take Profit Order to be
   * created on behalf of a client. This may happen when an Order is filled
   * that opens a Trade requiring a Take Profit, or when a Trade's dependent
   * Take Profit Order is modified directly through the Trade.
   */

  takeProfitOnFill?: transaction.TakeProfitDetails

  /**
   * StopLossDetails specifies the details of a Stop Loss Order to be created
   * on behalf of a client. This may happen when an Order is filled that opens
   * a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss
   * Order is modified directly through the Trade.
   */

  stopLossOnFill?: transaction.StopLossDetails

  /**
   * TrailingStopLossDetails specifies the details of a Trailing Stop Loss
   * Order to be created on behalf of a client. This may happen when an Order
   * is filled that opens a Trade requiring a Trailing Stop Loss, or when a
   * Trade's dependent Trailing Stop Loss Order is modified directly through
   * the Trade.
   */

  trailingStopLossOnFill?: transaction.TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created). Do not set, modify, or delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: transaction.ClientExtensions

  /**
   * ID of the Transaction that filled this Order (only provided when the
   * Order's state is FILLED)
   */

  fillingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was filled (only provided when the Order's state
   * is FILLED)
   */

  filledTime?: primitives.DateTime

  /**
   * Trade ID of Trade opened when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was opened as a result of the
   * fill)
   */

  tradeOpenedID?: trade.TradeID

  /**
   * Trade ID of Trade reduced when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was reduced as a result of the
   * fill)
   */

  tradeReducedID?: trade.TradeID

  /**
   * Trade IDs of Trades closed when the Order was filled (only provided when
   * the Order's state is FILLED and one or more Trades were closed as a
   * result of the fill)
   */

  tradeClosedIDs?: trade.TradeID[]

  /**
   * ID of the Transaction that cancelled the Order (only provided when the
   * Order's state is CANCELLED)
   */

  cancellingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was cancelled (only provided when the state of
   * the Order is CANCELLED)
   */

  cancelledTime?: primitives.DateTime

  /**
   * The ID of the Order that was replaced by this Order (only provided if
   * this Order was created as part of a cancel/replace).
   */

  replacesOrderID?: OrderID

  /**
   * The ID of the Order that replaced this Order (only provided if this Order
   * was cancelled as part of a cancel/replace).
   */

  replacedByOrderID?: OrderID
}

/**
 * A MarketIfTouchedOrder is an order that is created with a price threshold, and will only be filled by a market price that is touches or crosses the threshold. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface MarketIfTouchedOrder {
  /**
   * The Order's identifier, unique within the Order's Account.
   */

  id?: OrderID

  /**
   * The time when the Order was created.
   */

  createTime?: primitives.DateTime

  /**
   * The current state of the Order.
   */

  state?: OrderState

  /**
   * The client extensions of the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions

  /**
   * The type of the Order. Always set to 'MARKET_IF_TOUCHED' for Market If
   * Touched Orders.
   */

  type?: OrderType /* default=MARKET_IF_TOUCHED */

  /**
   * The MarketIfTouched Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the MarketIfTouched Order. A
   * positive number of units results in a long Order, and a negative number
   * of units results in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The price threshold specified for the MarketIfTouched Order. The
   * MarketIfTouched Order will only be filled by a market price that crosses
   * this price from the direction of the market price at the time when the
   * Order was created (the initialMarketPrice). Depending on the value of the
   * Order's price and initialMarketPrice, the MarketIfTouchedOrder will
   * behave like a Limit or a Stop Order.
   */

  price: pricingCommon.PriceValue

  /**
   * The worst market price that may be used to fill this MarketIfTouched
   * Order.
   */

  priceBound?: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the MarketIfTouched Order. Restricted to
   * 'GTC', 'GFD' and 'GTD' for MarketIfTouched Orders.
   */

  timeInForce: TimeInForce /* default=GTC */

  /**
   * The date/time when the MarketIfTouched Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: OrderPositionFill /* default=DEFAULT */

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: OrderTriggerCondition /* default=DEFAULT */

  /**
   * The Market price at the time when the MarketIfTouched Order was created.
   */

  initialMarketPrice?: pricingCommon.PriceValue

  /**
   * TakeProfitDetails specifies the details of a Take Profit Order to be
   * created on behalf of a client. This may happen when an Order is filled
   * that opens a Trade requiring a Take Profit, or when a Trade's dependent
   * Take Profit Order is modified directly through the Trade.
   */

  takeProfitOnFill?: transaction.TakeProfitDetails

  /**
   * StopLossDetails specifies the details of a Stop Loss Order to be created
   * on behalf of a client. This may happen when an Order is filled that opens
   * a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss
   * Order is modified directly through the Trade.
   */

  stopLossOnFill?: transaction.StopLossDetails

  /**
   * TrailingStopLossDetails specifies the details of a Trailing Stop Loss
   * Order to be created on behalf of a client. This may happen when an Order
   * is filled that opens a Trade requiring a Trailing Stop Loss, or when a
   * Trade's dependent Trailing Stop Loss Order is modified directly through
   * the Trade.
   */

  trailingStopLossOnFill?: transaction.TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created). Do not set, modify, or delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: transaction.ClientExtensions

  /**
   * ID of the Transaction that filled this Order (only provided when the
   * Order's state is FILLED)
   */

  fillingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was filled (only provided when the Order's state
   * is FILLED)
   */

  filledTime?: primitives.DateTime

  /**
   * Trade ID of Trade opened when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was opened as a result of the
   * fill)
   */

  tradeOpenedID?: trade.TradeID

  /**
   * Trade ID of Trade reduced when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was reduced as a result of the
   * fill)
   */

  tradeReducedID?: trade.TradeID

  /**
   * Trade IDs of Trades closed when the Order was filled (only provided when
   * the Order's state is FILLED and one or more Trades were closed as a
   * result of the fill)
   */

  tradeClosedIDs?: trade.TradeID[]

  /**
   * ID of the Transaction that cancelled the Order (only provided when the
   * Order's state is CANCELLED)
   */

  cancellingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was cancelled (only provided when the state of
   * the Order is CANCELLED)
   */

  cancelledTime?: primitives.DateTime

  /**
   * The ID of the Order that was replaced by this Order (only provided if
   * this Order was created as part of a cancel/replace).
   */

  replacesOrderID?: OrderID

  /**
   * The ID of the Order that replaced this Order (only provided if this Order
   * was cancelled as part of a cancel/replace).
   */

  replacedByOrderID?: OrderID
}

/**
 * A TakeProfitOrder is an order that is linked to an open Trade and created with a price threshold. The Order will be filled (closing the Trade) by the first price that is equal to or better than the threshold. A TakeProfitOrder cannot be used to open a new Position. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface TakeProfitOrder {
  /**
   * The Order's identifier, unique within the Order's Account.
   */

  id?: OrderID

  /**
   * The time when the Order was created.
   */

  createTime?: primitives.DateTime

  /**
   * The current state of the Order.
   */

  state?: OrderState

  /**
   * The client extensions of the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions

  /**
   * The type of the Order. Always set to 'TAKE_PROFIT' for Take Profit
   * Orders.
   */

  type?: OrderType /* default=TAKE_PROFIT */

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */

  tradeID: trade.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is
   * breached.
   */

  clientTradeID?: transaction.ClientID

  /**
   * The price threshold specified for the TakeProfit Order. The associated
   * Trade will be closed by a market price that is equal to or better than
   * this threshold.
   */

  price: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the TakeProfit Order. Restricted to
   * 'GTC', 'GFD' and 'GTD' for TakeProfit Orders.
   */

  timeInForce: TimeInForce /* default=GTC */

  /**
   * The date/time when the TakeProfit Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: OrderTriggerCondition /* default=DEFAULT */

  /**
   * ID of the Transaction that filled this Order (only provided when the
   * Order's state is FILLED)
   */

  fillingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was filled (only provided when the Order's state
   * is FILLED)
   */

  filledTime?: primitives.DateTime

  /**
   * Trade ID of Trade opened when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was opened as a result of the
   * fill)
   */

  tradeOpenedID?: trade.TradeID

  /**
   * Trade ID of Trade reduced when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was reduced as a result of the
   * fill)
   */

  tradeReducedID?: trade.TradeID

  /**
   * Trade IDs of Trades closed when the Order was filled (only provided when
   * the Order's state is FILLED and one or more Trades were closed as a
   * result of the fill)
   */

  tradeClosedIDs?: trade.TradeID[]

  /**
   * ID of the Transaction that cancelled the Order (only provided when the
   * Order's state is CANCELLED)
   */

  cancellingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was cancelled (only provided when the state of
   * the Order is CANCELLED)
   */

  cancelledTime?: primitives.DateTime

  /**
   * The ID of the Order that was replaced by this Order (only provided if
   * this Order was created as part of a cancel/replace).
   */

  replacesOrderID?: OrderID

  /**
   * The ID of the Order that replaced this Order (only provided if this Order
   * was cancelled as part of a cancel/replace).
   */

  replacedByOrderID?: OrderID
}

/**
 * A StopLossOrder is an order that is linked to an open Trade and created with a price threshold. The Order will be filled (closing the Trade) by the first price that is equal to or worse than the threshold. A StopLossOrder cannot be used to open a new Position. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface StopLossOrder {
  /**
   * The Order's identifier, unique within the Order's Account.
   */

  id?: OrderID

  /**
   * The time when the Order was created.
   */

  createTime?: primitives.DateTime

  /**
   * The current state of the Order.
   */

  state?: OrderState

  /**
   * The client extensions of the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions

  /**
   * The type of the Order. Always set to 'STOP_LOSS' for Stop Loss Orders.
   */

  type?: OrderType /* default=STOP_LOSS */

  /**
   * The premium that will be charged if the Stop Loss Order is guaranteed and
   * the Order is filled at the guaranteed price. It is in price units and is
   * charged for each unit of the Trade.
   *
   *
   * <b>Deprecated</b>: Will be removed in a future API update.
   */

  guaranteedExecutionPremium?: primitives.DecimalNumber

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */

  tradeID: trade.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is
   * breached.
   */

  clientTradeID?: transaction.ClientID

  /**
   * The price threshold specified for the Stop Loss Order. The associated
   * Trade will be closed by a market price that is equal to or worse than
   * this threshold.
   */

  price: pricingCommon.PriceValue

  /**
   * Specifies the distance (in price units) from the Account's current price
   * to use as the Stop Loss Order price. If the Trade is short the
   * Instrument's bid price is used, and for long Trades the ask is used.
   */

  distance?: primitives.DecimalNumber

  /**
   * The time-in-force requested for the StopLoss Order. Restricted to 'GTC',
   * 'GFD' and 'GTD' for StopLoss Orders.
   */

  timeInForce: TimeInForce /* default=GTC */

  /**
   * The date/time when the StopLoss Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: OrderTriggerCondition /* default=DEFAULT */

  /**
   * Flag indicating that the Stop Loss Order is guaranteed. The default value
   * depends on the GuaranteedStopLossOrderMode of the account, if it is
   * REQUIRED, the default will be true, for DISABLED or ENABLED the default
   * is false.
   *
   *
   * <b>Deprecated</b>: Will be removed in a future API update.
   */

  guaranteed?: boolean

  /**
   * ID of the Transaction that filled this Order (only provided when the
   * Order's state is FILLED)
   */

  fillingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was filled (only provided when the Order's state
   * is FILLED)
   */

  filledTime?: primitives.DateTime

  /**
   * Trade ID of Trade opened when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was opened as a result of the
   * fill)
   */

  tradeOpenedID?: trade.TradeID

  /**
   * Trade ID of Trade reduced when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was reduced as a result of the
   * fill)
   */

  tradeReducedID?: trade.TradeID

  /**
   * Trade IDs of Trades closed when the Order was filled (only provided when
   * the Order's state is FILLED and one or more Trades were closed as a
   * result of the fill)
   */

  tradeClosedIDs?: trade.TradeID[]

  /**
   * ID of the Transaction that cancelled the Order (only provided when the
   * Order's state is CANCELLED)
   */

  cancellingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was cancelled (only provided when the state of
   * the Order is CANCELLED)
   */

  cancelledTime?: primitives.DateTime

  /**
   * The ID of the Order that was replaced by this Order (only provided if
   * this Order was created as part of a cancel/replace).
   */

  replacesOrderID?: OrderID

  /**
   * The ID of the Order that replaced this Order (only provided if this Order
   * was cancelled as part of a cancel/replace).
   */

  replacedByOrderID?: OrderID
}

/**
 * A TrailingStopLossOrder is an order that is linked to an open Trade and created with a price distance. The price distance is used to calculate a trailing stop value for the order that is in the losing direction from the market price at the time of the order’s creation. The trailing stop value will follow the market price as it moves in the winning direction, and the order will filled (closing the Trade) by the first price that is equal to or worse than the trailing stop value. A TrailingStopLossOrder cannot be used to open a new Position. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface TrailingStopLossOrder {
  /**
   * The Order's identifier, unique within the Order's Account.
   */

  id?: OrderID

  /**
   * The time when the Order was created.
   */

  createTime?: primitives.DateTime

  /**
   * The current state of the Order.
   */

  state?: OrderState

  /**
   * The client extensions of the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions

  /**
   * The type of the Order. Always set to 'TRAILING_STOP_LOSS' for Trailing
   * Stop Loss Orders.
   */

  type?: OrderType /* default=TRAILING_STOP_LOSS */

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */

  tradeID: trade.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is
   * breached.
   */

  clientTradeID?: transaction.ClientID

  /**
   * The price distance (in price units) specified for the TrailingStopLoss
   * Order.
   */

  distance: primitives.DecimalNumber

  /**
   * The time-in-force requested for the TrailingStopLoss Order. Restricted to
   * 'GTC', 'GFD' and 'GTD' for TrailingStopLoss Orders.
   */

  timeInForce: TimeInForce /* default=GTC */

  /**
   * The date/time when the StopLoss Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: OrderTriggerCondition /* default=DEFAULT */

  /**
   * The trigger price for the Trailing Stop Loss Order. The trailing stop
   * value will trail (follow) the market price by the TSL order's configured
   * 'distance' as the market price moves in the winning direction. If the
   * market price moves to a level that is equal to or worse than the trailing
   * stop value, the order will be filled and the Trade will be closed.
   */

  trailingStopValue?: pricingCommon.PriceValue

  /**
   * ID of the Transaction that filled this Order (only provided when the
   * Order's state is FILLED)
   */

  fillingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was filled (only provided when the Order's state
   * is FILLED)
   */

  filledTime?: primitives.DateTime

  /**
   * Trade ID of Trade opened when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was opened as a result of the
   * fill)
   */

  tradeOpenedID?: trade.TradeID

  /**
   * Trade ID of Trade reduced when the Order was filled (only provided when
   * the Order's state is FILLED and a Trade was reduced as a result of the
   * fill)
   */

  tradeReducedID?: trade.TradeID

  /**
   * Trade IDs of Trades closed when the Order was filled (only provided when
   * the Order's state is FILLED and one or more Trades were closed as a
   * result of the fill)
   */

  tradeClosedIDs?: trade.TradeID[]

  /**
   * ID of the Transaction that cancelled the Order (only provided when the
   * Order's state is CANCELLED)
   */

  cancellingTransactionID?: transaction.TransactionID

  /**
   * Date/time when the Order was cancelled (only provided when the state of
   * the Order is CANCELLED)
   */

  cancelledTime?: primitives.DateTime

  /**
   * The ID of the Order that was replaced by this Order (only provided if
   * this Order was created as part of a cancel/replace).
   */

  replacesOrderID?: OrderID

  /**
   * The ID of the Order that replaced this Order (only provided if this Order
   * was cancelled as part of a cancel/replace).
   */

  replacedByOrderID?: OrderID
}

/**
 * The base Order specification used when requesting that an Order be created. Each specific Order-type extends this definition. https://developer.oanda.com/rest-live-v20/order-df/
 */
export type OrderRequest =
  | MarketOrderRequest
  | LimitOrderRequest
  | StopOrderRequest
  | MarketIfTouchedOrderRequest
  | TakeProfitOrderRequest
  | StopLossOrderRequest
  | TrailingStopLossOrderRequest

/**
 * A MarketOrderRequest specifies the parameters that may be set when creating a Market Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface MarketOrderRequest {
  /**
   * The type of the Order to Create. Must be set to 'MARKET' when creating a
   * Market Order.
   */

  type?: OrderType /* default=MARKET */

  /**
   * The Market Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Market Order. A positive
   * number of units results in a long Order, and a negative number of units
   * results in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The time-in-force requested for the Market Order. Restricted to FOK or
   * IOC for a MarketOrder.
   */

  timeInForce: TimeInForce /* default=FOK */

  /**
   * The worst price that the client is willing to have the Market Order
   * filled at.
   */

  priceBound?: pricingCommon.PriceValue

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: OrderPositionFill /* default=DEFAULT */

  /**
   * The client extensions to add to the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions

  /**
   * TakeProfitDetails specifies the details of a Take Profit Order to be
   * created on behalf of a client. This may happen when an Order is filled
   * that opens a Trade requiring a Take Profit, or when a Trade's dependent
   * Take Profit Order is modified directly through the Trade.
   */

  takeProfitOnFill?: transaction.TakeProfitDetails

  /**
   * StopLossDetails specifies the details of a Stop Loss Order to be created
   * on behalf of a client. This may happen when an Order is filled that opens
   * a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss
   * Order is modified directly through the Trade.
   */

  stopLossOnFill?: transaction.StopLossDetails

  /**
   * TrailingStopLossDetails specifies the details of a Trailing Stop Loss
   * Order to be created on behalf of a client. This may happen when an Order
   * is filled that opens a Trade requiring a Trailing Stop Loss, or when a
   * Trade's dependent Trailing Stop Loss Order is modified directly through
   * the Trade.
   */

  trailingStopLossOnFill?: transaction.TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created). Do not set, modify, or delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: transaction.ClientExtensions
}

/**
 * A LimitOrderRequest specifies the parameters that may be set when creating a Limit Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface LimitOrderRequest {
  /**
   * The type of the Order to Create. Must be set to 'LIMIT' when creating a
   * Market Order.
   */

  type?: OrderType /* default=LIMIT */

  /**
   * The Limit Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Limit Order. A positive number
   * of units results in a long Order, and a negative number of units results
   * in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The price threshold specified for the Limit Order. The Limit Order will
   * only be filled by a market price that is equal to or better than this
   * price.
   */

  price: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the Limit Order.
   */

  timeInForce: TimeInForce /* default=GTC */

  /**
   * The date/time when the Limit Order will be cancelled if its timeInForce
   * is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: OrderPositionFill /* default=DEFAULT */

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: OrderTriggerCondition /* default=DEFAULT */

  /**
   * The client extensions to add to the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions

  /**
   * TakeProfitDetails specifies the details of a Take Profit Order to be
   * created on behalf of a client. This may happen when an Order is filled
   * that opens a Trade requiring a Take Profit, or when a Trade's dependent
   * Take Profit Order is modified directly through the Trade.
   */

  takeProfitOnFill?: transaction.TakeProfitDetails

  /**
   * StopLossDetails specifies the details of a Stop Loss Order to be created
   * on behalf of a client. This may happen when an Order is filled that opens
   * a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss
   * Order is modified directly through the Trade.
   */

  stopLossOnFill?: transaction.StopLossDetails

  /**
   * TrailingStopLossDetails specifies the details of a Trailing Stop Loss
   * Order to be created on behalf of a client. This may happen when an Order
   * is filled that opens a Trade requiring a Trailing Stop Loss, or when a
   * Trade's dependent Trailing Stop Loss Order is modified directly through
   * the Trade.
   */

  trailingStopLossOnFill?: transaction.TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created). Do not set, modify, or delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: transaction.ClientExtensions
}

/**
 * A StopOrderRequest specifies the parameters that may be set when creating a Stop Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface StopOrderRequest {
  /**
   * The type of the Order to Create. Must be set to 'STOP' when creating a
   * Stop Order.
   */

  type?: OrderType /* default=STOP */

  /**
   * The Stop Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Stop Order. A positive number
   * of units results in a long Order, and a negative number of units results
   * in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The price threshold specified for the Stop Order. The Stop Order will
   * only be filled by a market price that is equal to or worse than this
   * price.
   */

  price: pricingCommon.PriceValue

  /**
   * The worst market price that may be used to fill this Stop Order. If the
   * market gaps and crosses through both the price and the priceBound, the
   * Stop Order will be cancelled instead of being filled.
   */

  priceBound?: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the Stop Order.
   */

  timeInForce: TimeInForce /* default=GTC */

  /**
   * The date/time when the Stop Order will be cancelled if its timeInForce is
   * 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: OrderPositionFill /* default=DEFAULT */

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: OrderTriggerCondition /* default=DEFAULT */

  /**
   * The client extensions to add to the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions

  /**
   * TakeProfitDetails specifies the details of a Take Profit Order to be
   * created on behalf of a client. This may happen when an Order is filled
   * that opens a Trade requiring a Take Profit, or when a Trade's dependent
   * Take Profit Order is modified directly through the Trade.
   */

  takeProfitOnFill?: transaction.TakeProfitDetails

  /**
   * StopLossDetails specifies the details of a Stop Loss Order to be created
   * on behalf of a client. This may happen when an Order is filled that opens
   * a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss
   * Order is modified directly through the Trade.
   */

  stopLossOnFill?: transaction.StopLossDetails

  /**
   * TrailingStopLossDetails specifies the details of a Trailing Stop Loss
   * Order to be created on behalf of a client. This may happen when an Order
   * is filled that opens a Trade requiring a Trailing Stop Loss, or when a
   * Trade's dependent Trailing Stop Loss Order is modified directly through
   * the Trade.
   */

  trailingStopLossOnFill?: transaction.TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created). Do not set, modify, or delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: transaction.ClientExtensions
}

/**
 * A MarketIfTouchedOrderRequest specifies the parameters that may be set when creating a Market-if-Touched Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface MarketIfTouchedOrderRequest {
  /**
   * The type of the Order to Create. Must be set to 'MARKET_IF_TOUCHED' when
   * creating a Market If Touched Order.
   */

  type?: OrderType /* default=MARKET_IF_TOUCHED */

  /**
   * The MarketIfTouched Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the MarketIfTouched Order. A
   * positive number of units results in a long Order, and a negative number
   * of units results in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The price threshold specified for the MarketIfTouched Order. The
   * MarketIfTouched Order will only be filled by a market price that crosses
   * this price from the direction of the market price at the time when the
   * Order was created (the initialMarketPrice). Depending on the value of the
   * Order's price and initialMarketPrice, the MarketIfTouchedOrder will
   * behave like a Limit or a Stop Order.
   */

  price: pricingCommon.PriceValue

  /**
   * The worst market price that may be used to fill this MarketIfTouched
   * Order.
   */

  priceBound?: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the MarketIfTouched Order. Restricted to
   * 'GTC', 'GFD' and 'GTD' for MarketIfTouched Orders.
   */

  timeInForce: TimeInForce /* default=GTC */

  /**
   * The date/time when the MarketIfTouched Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: OrderPositionFill /* default=DEFAULT */

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: OrderTriggerCondition /* default=DEFAULT */

  /**
   * The client extensions to add to the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions

  /**
   * TakeProfitDetails specifies the details of a Take Profit Order to be
   * created on behalf of a client. This may happen when an Order is filled
   * that opens a Trade requiring a Take Profit, or when a Trade's dependent
   * Take Profit Order is modified directly through the Trade.
   */

  takeProfitOnFill?: transaction.TakeProfitDetails

  /**
   * StopLossDetails specifies the details of a Stop Loss Order to be created
   * on behalf of a client. This may happen when an Order is filled that opens
   * a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss
   * Order is modified directly through the Trade.
   */

  stopLossOnFill?: transaction.StopLossDetails

  /**
   * TrailingStopLossDetails specifies the details of a Trailing Stop Loss
   * Order to be created on behalf of a client. This may happen when an Order
   * is filled that opens a Trade requiring a Trailing Stop Loss, or when a
   * Trade's dependent Trailing Stop Loss Order is modified directly through
   * the Trade.
   */

  trailingStopLossOnFill?: transaction.TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created). Do not set, modify, or delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: transaction.ClientExtensions
}

/**
 * A TakeProfitOrderRequest specifies the parameters that may be set when creating a Take Profit Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface TakeProfitOrderRequest {
  /**
   * The type of the Order to Create. Must be set to 'TAKE_PROFIT' when
   * creating a Take Profit Order.
   */

  type?: OrderType /* default=TAKE_PROFIT */

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */

  tradeID: trade.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is
   * breached.
   */

  clientTradeID?: transaction.ClientID

  /**
   * The price threshold specified for the TakeProfit Order. The associated
   * Trade will be closed by a market price that is equal to or better than
   * this threshold.
   */

  price: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the TakeProfit Order. Restricted to
   * 'GTC', 'GFD' and 'GTD' for TakeProfit Orders.
   */

  timeInForce: TimeInForce /* default=GTC */

  /**
   * The date/time when the TakeProfit Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: OrderTriggerCondition /* default=DEFAULT */

  /**
   * The client extensions to add to the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions
}

/**
 * A StopLossOrderRequest specifies the parameters that may be set when creating a Stop Loss Order. Only one of the price and distance fields may be specified. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface StopLossOrderRequest {
  /**
   * The type of the Order to Create. Must be set to 'STOP_LOSS' when creating
   * a Stop Loss Order.
   */

  type?: OrderType /* default=STOP_LOSS */

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */

  tradeID: trade.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is
   * breached.
   */

  clientTradeID?: transaction.ClientID

  /**
   * The price threshold specified for the Stop Loss Order. The associated
   * Trade will be closed by a market price that is equal to or worse than
   * this threshold.
   */

  price: pricingCommon.PriceValue

  /**
   * Specifies the distance (in price units) from the Account's current price
   * to use as the Stop Loss Order price. If the Trade is short the
   * Instrument's bid price is used, and for long Trades the ask is used.
   */

  distance?: primitives.DecimalNumber

  /**
   * The time-in-force requested for the StopLoss Order. Restricted to 'GTC',
   * 'GFD' and 'GTD' for StopLoss Orders.
   */

  timeInForce: TimeInForce /* default=GTC */

  /**
   * The date/time when the StopLoss Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: OrderTriggerCondition /* default=DEFAULT */

  /**
   * Flag indicating that the Stop Loss Order is guaranteed. The default value
   * depends on the GuaranteedStopLossOrderMode of the account, if it is
   * REQUIRED, the default will be true, for DISABLED or ENABLED the default
   * is false.
   *
   *
   * <b>Deprecated</b>: Will be removed in a future API update.
   */

  guaranteed?: boolean

  /**
   * The client extensions to add to the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions
}

/**
 * A TrailingStopLossOrderRequest specifies the parameters that may be set when creating a Trailing Stop Loss Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface TrailingStopLossOrderRequest {
  /**
   * The type of the Order to Create. Must be set to 'TRAILING_STOP_LOSS' when
   * creating a Trailing Stop Loss Order.
   */

  type?: OrderType /* default=TRAILING_STOP_LOSS */

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */

  tradeID: trade.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is
   * breached.
   */

  clientTradeID?: transaction.ClientID

  /**
   * The price distance (in price units) specified for the TrailingStopLoss
   * Order.
   */

  distance: primitives.DecimalNumber

  /**
   * The time-in-force requested for the TrailingStopLoss Order. Restricted to
   * 'GTC', 'GFD' and 'GTD' for TrailingStopLoss Orders.
   */

  timeInForce: TimeInForce /* default=GTC */

  /**
   * The date/time when the StopLoss Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: OrderTriggerCondition /* default=DEFAULT */

  /**
   * The client extensions to add to the Order. Do not set, modify, or delete
   * clientExtensions if your account is associated with MT4.
   */

  clientExtensions?: transaction.ClientExtensions
}

/**
 * The Order’s identifier, unique within the Order’s Account. https://developer.oanda.com/rest-live-v20/order-df/
 */
export type OrderID = string

/**
 * The type of the Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
export enum OrderType {
  /**
   * A Market Order
   */
  'MARKET' = 'MARKET',

  /**
   * A Limit Order
   */
  'LIMIT' = 'LIMIT',

  /**
   * A Stop Order
   */
  'STOP' = 'STOP',

  /**
   * A Market-if-touched Order
   */
  'MARKET_IF_TOUCHED' = 'MARKET_IF_TOUCHED',

  /**
   * A Take Profit Order
   */
  'TAKE_PROFIT' = 'TAKE_PROFIT',

  /**
   * A Stop Loss Order
   */
  'STOP_LOSS' = 'STOP_LOSS',

  /**
   * A Trailing Stop Loss Order
   */
  'TRAILING_STOP_LOSS' = 'TRAILING_STOP_LOSS',

  /**
   * A Fixed Price Order
   */
  'FIXED_PRICE' = 'FIXED_PRICE',
}

/**
 * The type of the Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
export enum CancellableOrderType {
  /**
   * A Limit Order
   */
  'LIMIT' = 'LIMIT',

  /**
   * A Stop Order
   */
  'STOP' = 'STOP',

  /**
   * A Market-if-touched Order
   */
  'MARKET_IF_TOUCHED' = 'MARKET_IF_TOUCHED',

  /**
   * A Take Profit Order
   */
  'TAKE_PROFIT' = 'TAKE_PROFIT',

  /**
   * A Stop Loss Order
   */
  'STOP_LOSS' = 'STOP_LOSS',

  /**
   * A Trailing Stop Loss Order
   */
  'TRAILING_STOP_LOSS' = 'TRAILING_STOP_LOSS',
}

/**
 * The current state of the Order. https://developer.oanda.com/rest-live-v20/order-df/
 */
export enum OrderState {
  /**
   * The Order is currently pending execution
   */
  'PENDING' = 'PENDING',

  /**
   * The Order has been filled
   */
  'FILLED' = 'FILLED',

  /**
   * The Order has been triggered
   */
  'TRIGGERED' = 'TRIGGERED',

  /**
   * The Order has been cancelled
   */
  'CANCELLED' = 'CANCELLED',
}

/**
 * The state to filter the requested Orders by. https://developer.oanda.com/rest-live-v20/order-df/
 */
export enum OrderStateFilter {
  /**
   * The Orders that are currently pending execution
   */
  'PENDING' = 'PENDING',

  /**
   * The Orders that have been filled
   */
  'FILLED' = 'FILLED',

  /**
   * The Orders that have been triggered
   */
  'TRIGGERED' = 'TRIGGERED',

  /**
   * The Orders that have been cancelled
   */
  'CANCELLED' = 'CANCELLED',

  /**
   * The Orders that are in any of the possible states listed above
   */
  'ALL' = 'ALL',
}

/**
 * An OrderIdentifier is used to refer to an Order, and contains both the OrderID and the ClientOrderID. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface OrderIdentifier {
  /**
   * The OANDA-assigned Order ID
   */

  orderID?: OrderID

  /**
   * The client-provided client Order ID
   */

  clientOrderID?: transaction.ClientID
}

/**
 * The specification of an Order as referred to by clients https://developer.oanda.com/rest-live-v20/order-df/
 */
export type OrderSpecifier = string

/**
 * The time-in-force of an Order. TimeInForce describes how long an Order should remain pending before being automatically cancelled by the execution system. https://developer.oanda.com/rest-live-v20/order-df/
 */
export enum TimeInForce {
  /**
   * The Order is “Good unTil Cancelled”
   */
  'GTC' = 'GTC',

  /**
   * The Order is “Good unTil Date” and will be cancelled at the provided time
   */
  'GTD' = 'GTD',

  /**
   * The Order is “Good For Day” and will be cancelled at 5pm New York time
   */
  'GFD' = 'GFD',

  /**
   * The Order must be immediately “Filled Or Killed”
   */
  'FOK' = 'FOK',

  /**
   * The Order must be “Immediately partially filled Or Cancelled”
   */
  'IOC' = 'IOC',
}

/**
 * Specification of how Positions in the Account are modified when the Order is filled. https://developer.oanda.com/rest-live-v20/order-df/
 */
export enum OrderPositionFill {
  /**
   * When the Order is filled, only allow Positions to be opened or extended.
   */
  'OPEN_ONLY' = 'OPEN_ONLY',

  /**
   * When the Order is filled, always fully reduce an existing Position before opening a new Position.
   */
  'REDUCE_FIRST' = 'REDUCE_FIRST',

  /**
   * When the Order is filled, only reduce an existing Position.
   */
  'REDUCE_ONLY' = 'REDUCE_ONLY',

  /**
   * When the Order is filled, use REDUCE_FIRST behaviour for non-client hedging Accounts, and OPEN_ONLY behaviour for client hedging Accounts.
   */
  'DEFAULT' = 'DEFAULT',
}

/**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA’s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order’s trigger condition is set to the default value when indicating the distance from an Order’s trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be “DEFAULT”, or the “natural” trigger side “DEFAULT” results in. So for a Stop Loss Order for a long trade valid values are “DEFAULT” and “BID”, and for short trades “DEFAULT” and “ASK” are valid. https://developer.oanda.com/rest-live-v20/order-df/
 */
export enum OrderTriggerCondition {
  /**
   * Trigger an Order the “natural” way: compare its price to the ask for long Orders and bid for short Orders.
   */
  'DEFAULT' = 'DEFAULT',

  /**
   * Trigger an Order the opposite of the “natural” way: compare its price the bid for long Orders and ask for short Orders.
   */
  'INVERSE' = 'INVERSE',

  /**
   * Trigger an Order by comparing its price to the bid regardless of whether it is long or short.
   */
  'BID' = 'BID',

  /**
   * Trigger an Order by comparing its price to the ask regardless of whether it is long or short.
   */
  'ASK' = 'ASK',

  /**
   * Trigger an Order by comparing its price to the midpoint regardless of whether it is long or short.
   */
  'MID' = 'MID',
}

/**
 * The dynamic state of an Order. This is only relevant to TrailingStopLoss Orders, as no other Order type has dynamic state. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface DynamicOrderState {
  /**
   * The Order's ID.
   */

  id?: OrderID

  /**
   * The Order's calculated trailing stop value.
   */

  trailingStopValue?: pricingCommon.PriceValue

  /**
   * The distance between the Trailing Stop Loss Order's trailingStopValue and
   * the current Market Price. This represents the distance (in price units)
   * of the Order from a triggering price. If the distance could not be
   * determined, this value will not be set.
   */

  triggerDistance?: pricingCommon.PriceValue

  /**
   * True if an exact trigger distance could be calculated. If false, it means
   * the provided trigger distance is a best estimate. If the distance could
   * not be determined, this value will not be set.
   */

  isTriggerDistanceExact?: boolean
}

/**
 * Representation of many units of an Instrument are available to be traded for both long and short Orders. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface UnitsAvailableDetails {
  /**
   * The units available for long Orders.
   */

  long?: primitives.DecimalNumber

  /**
   * The units available for short Orders.
   */

  short?: primitives.DecimalNumber
}

/**
 * Representation of how many units of an Instrument are available to be traded by an Order depending on its positionFill option. https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface UnitsAvailable {
  /**
   * The number of units that are available to be traded using an Order with a
   * positionFill option of 'DEFAULT'. For an Account with hedging enabled,
   * this value will be the same as the 'OPEN_ONLY' value. For an Account
   * without hedging enabled, this value will be the same as the
   * 'REDUCE_FIRST' value.
   */

  default?: UnitsAvailableDetails

  /**
   * The number of units that may are available to be traded with an Order
   * with a positionFill option of 'REDUCE_FIRST'.
   */

  reduceFirst?: UnitsAvailableDetails

  /**
   * The number of units that may are available to be traded with an Order
   * with a positionFill option of 'REDUCE_ONLY'.
   */

  reduceOnly?: UnitsAvailableDetails

  /**
   * The number of units that may are available to be traded with an Order
   * with a positionFill option of 'OPEN_ONLY'.
   */

  openOnly?: UnitsAvailableDetails
}

/**
 * Details required by clients creating a Guaranteed Stop Loss Order https://developer.oanda.com/rest-live-v20/order-df/
 */
export interface GuaranteedStopLossOrderEntryData {
  /**
   * The minimum distance allowed between the Trade's fill price and the
   * configured price for guaranteed Stop Loss Orders created for this
   * instrument. Specified in price units.
   */

  minimumDistance?: primitives.DecimalNumber

  /**
   * The amount that is charged to the account if a guaranteed Stop Loss Order
   * is triggered and filled. The value is in price units and is charged for
   * each unit of the Trade.
   */

  premium?: primitives.DecimalNumber

  /**
   * The guaranteed Stop Loss Order level restriction for this instrument.
   */

  levelRestriction?: primitives.GuaranteedStopLossOrderLevelRestriction
}
