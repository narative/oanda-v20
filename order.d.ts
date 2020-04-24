declare module '@narative/oanda-v20/order' {

declare const OrderIdentifier_base: typeof import('./base').Definition
export class OrderIdentifier extends OrderIdentifier_base {
  constructor(data: any)
  orderID: any
  clientOrderID: any
}
declare const DynamicOrderState_base: typeof import('./base').Definition
export class DynamicOrderState extends DynamicOrderState_base {
  constructor(data: any)
  id: any
  trailingStopValue: any
  triggerDistance: any
  isTriggerDistanceExact: any
}
declare const Order_base: typeof import('./base').Definition
export class Order extends Order_base {
  static create(
    order: any,
  ):
    | Order
    | TakeProfitOrder
    | StopLossOrder
    | TrailingStopLossOrder
    | MarketOrder
    | FixedPriceOrder
    | LimitOrder
    | StopOrder
    | MarketIfTouchedOrder
  constructor(data: any)
  id: any
  createTime: any
  state: any
  clientExtensions: import('./transaction').ClientExtensions
}
declare const MarketOrder_base: typeof import('./base').Definition
export class MarketOrder extends MarketOrder_base {
  constructor(data: any)
  id: any
  createTime: any
  state: any
  clientExtensions: import('./transaction').ClientExtensions
  type: any
  instrument: any
  units: any
  timeInForce: any
  priceBound: any
  positionFill: any
  tradeClose: import('./transaction').MarketOrderTradeClose
  longPositionCloseout: import('./transaction').MarketOrderPositionCloseout
  shortPositionCloseout: import('./transaction').MarketOrderPositionCloseout
  marginCloseout: import('./transaction').MarketOrderMarginCloseout
  delayedTradeClose: import('./transaction').MarketOrderDelayedTradeClose
  takeProfitOnFill: import('./transaction').TakeProfitDetails
  stopLossOnFill: import('./transaction').StopLossDetails
  trailingStopLossOnFill: import('./transaction').TrailingStopLossDetails
  tradeClientExtensions: import('./transaction').ClientExtensions
  fillingTransactionID: any
  filledTime: any
  tradeOpenedID: any
  tradeReducedID: any
  tradeClosedIDs: any
  cancellingTransactionID: any
  cancelledTime: any
}
declare const FixedPriceOrder_base: typeof import('./base').Definition
export class FixedPriceOrder extends FixedPriceOrder_base {
  constructor(data: any)
  id: any
  createTime: any
  state: any
  clientExtensions: import('./transaction').ClientExtensions
  type: any
  instrument: any
  units: any
  price: any
  positionFill: any
  tradeState: any
  takeProfitOnFill: import('./transaction').TakeProfitDetails
  stopLossOnFill: import('./transaction').StopLossDetails
  trailingStopLossOnFill: import('./transaction').TrailingStopLossDetails
  tradeClientExtensions: import('./transaction').ClientExtensions
  fillingTransactionID: any
  filledTime: any
  tradeOpenedID: any
  tradeReducedID: any
  tradeClosedIDs: any
  cancellingTransactionID: any
  cancelledTime: any
}
declare const LimitOrder_base: typeof import('./base').Definition
export class LimitOrder extends LimitOrder_base {
  constructor(data: any)
  id: any
  createTime: any
  state: any
  clientExtensions: import('./transaction').ClientExtensions
  type: any
  instrument: any
  units: any
  price: any
  timeInForce: any
  gtdTime: any
  positionFill: any
  triggerCondition: any
  takeProfitOnFill: import('./transaction').TakeProfitDetails
  stopLossOnFill: import('./transaction').StopLossDetails
  trailingStopLossOnFill: import('./transaction').TrailingStopLossDetails
  tradeClientExtensions: import('./transaction').ClientExtensions
  fillingTransactionID: any
  filledTime: any
  tradeOpenedID: any
  tradeReducedID: any
  tradeClosedIDs: any
  cancellingTransactionID: any
  cancelledTime: any
  replacesOrderID: any
  replacedByOrderID: any
}
declare const StopOrder_base: typeof import('./base').Definition
export class StopOrder extends StopOrder_base {
  constructor(data: any)
  id: any
  createTime: any
  state: any
  clientExtensions: import('./transaction').ClientExtensions
  type: any
  instrument: any
  units: any
  price: any
  priceBound: any
  timeInForce: any
  gtdTime: any
  positionFill: any
  triggerCondition: any
  takeProfitOnFill: import('./transaction').TakeProfitDetails
  stopLossOnFill: import('./transaction').StopLossDetails
  trailingStopLossOnFill: import('./transaction').TrailingStopLossDetails
  tradeClientExtensions: import('./transaction').ClientExtensions
  fillingTransactionID: any
  filledTime: any
  tradeOpenedID: any
  tradeReducedID: any
  tradeClosedIDs: any
  cancellingTransactionID: any
  cancelledTime: any
  replacesOrderID: any
  replacedByOrderID: any
}
declare const MarketIfTouchedOrder_base: typeof import('./base').Definition
export class MarketIfTouchedOrder extends MarketIfTouchedOrder_base {
  constructor(data: any)
  id: any
  createTime: any
  state: any
  clientExtensions: import('./transaction').ClientExtensions
  type: any
  instrument: any
  units: any
  price: any
  priceBound: any
  timeInForce: any
  gtdTime: any
  positionFill: any
  triggerCondition: any
  initialMarketPrice: any
  takeProfitOnFill: import('./transaction').TakeProfitDetails
  stopLossOnFill: import('./transaction').StopLossDetails
  trailingStopLossOnFill: import('./transaction').TrailingStopLossDetails
  tradeClientExtensions: import('./transaction').ClientExtensions
  fillingTransactionID: any
  filledTime: any
  tradeOpenedID: any
  tradeReducedID: any
  tradeClosedIDs: any
  cancellingTransactionID: any
  cancelledTime: any
  replacesOrderID: any
  replacedByOrderID: any
}
declare const TakeProfitOrder_base: typeof import('./base').Definition
export class TakeProfitOrder extends TakeProfitOrder_base {
  constructor(data: any)
  id: any
  createTime: any
  state: any
  clientExtensions: import('./transaction').ClientExtensions
  type: any
  tradeID: any
  clientTradeID: any
  price: any
  timeInForce: any
  gtdTime: any
  triggerCondition: any
  fillingTransactionID: any
  filledTime: any
  tradeOpenedID: any
  tradeReducedID: any
  tradeClosedIDs: any
  cancellingTransactionID: any
  cancelledTime: any
  replacesOrderID: any
  replacedByOrderID: any
}
declare const StopLossOrder_base: typeof import('./base').Definition
export class StopLossOrder extends StopLossOrder_base {
  constructor(data: any)
  id: any
  createTime: any
  state: any
  clientExtensions: import('./transaction').ClientExtensions
  type: any
  guaranteedExecutionPremium: any
  tradeID: any
  clientTradeID: any
  price: any
  distance: any
  timeInForce: any
  gtdTime: any
  triggerCondition: any
  guaranteed: any
  fillingTransactionID: any
  filledTime: any
  tradeOpenedID: any
  tradeReducedID: any
  tradeClosedIDs: any
  cancellingTransactionID: any
  cancelledTime: any
  replacesOrderID: any
  replacedByOrderID: any
}
declare const TrailingStopLossOrder_base: typeof import('./base').Definition
export class TrailingStopLossOrder extends TrailingStopLossOrder_base {
  constructor(data: any)
  id: any
  createTime: any
  state: any
  clientExtensions: import('./transaction').ClientExtensions
  type: any
  tradeID: any
  clientTradeID: any
  distance: any
  timeInForce: any
  gtdTime: any
  triggerCondition: any
  trailingStopValue: any
  fillingTransactionID: any
  filledTime: any
  tradeOpenedID: any
  tradeReducedID: any
  tradeClosedIDs: any
  cancellingTransactionID: any
  cancelledTime: any
  replacesOrderID: any
  replacedByOrderID: any
}
declare const OrderRequest_base: typeof import('./base').Definition
export class OrderRequest extends OrderRequest_base {
  constructor(data: any)
  _properties: any[]
}
declare const MarketOrderRequest_base: typeof import('./base').Definition
export class MarketOrderRequest extends MarketOrderRequest_base {
  constructor(data: any)
  type: any
  instrument: any
  units: any
  timeInForce: any
  priceBound: any
  positionFill: any
  clientExtensions: import('./transaction').ClientExtensions
  takeProfitOnFill: import('./transaction').TakeProfitDetails
  stopLossOnFill: import('./transaction').StopLossDetails
  trailingStopLossOnFill: import('./transaction').TrailingStopLossDetails
  tradeClientExtensions: import('./transaction').ClientExtensions
}
declare const LimitOrderRequest_base: typeof import('./base').Definition
export class LimitOrderRequest extends LimitOrderRequest_base {
  constructor(data: any)
  type: any
  instrument: any
  units: any
  price: any
  timeInForce: any
  gtdTime: any
  positionFill: any
  triggerCondition: any
  clientExtensions: import('./transaction').ClientExtensions
  takeProfitOnFill: import('./transaction').TakeProfitDetails
  stopLossOnFill: import('./transaction').StopLossDetails
  trailingStopLossOnFill: import('./transaction').TrailingStopLossDetails
  tradeClientExtensions: import('./transaction').ClientExtensions
}
declare const StopOrderRequest_base: typeof import('./base').Definition
export class StopOrderRequest extends StopOrderRequest_base {
  constructor(data: any)
  type: any
  instrument: any
  units: any
  price: any
  priceBound: any
  timeInForce: any
  gtdTime: any
  positionFill: any
  triggerCondition: any
  clientExtensions: import('./transaction').ClientExtensions
  takeProfitOnFill: import('./transaction').TakeProfitDetails
  stopLossOnFill: import('./transaction').StopLossDetails
  trailingStopLossOnFill: import('./transaction').TrailingStopLossDetails
  tradeClientExtensions: import('./transaction').ClientExtensions
}
declare const MarketIfTouchedOrderRequest_base: typeof import('./base').Definition
export class MarketIfTouchedOrderRequest extends MarketIfTouchedOrderRequest_base {
  constructor(data: any)
  type: any
  instrument: any
  units: any
  price: any
  priceBound: any
  timeInForce: any
  gtdTime: any
  positionFill: any
  triggerCondition: any
  clientExtensions: import('./transaction').ClientExtensions
  takeProfitOnFill: import('./transaction').TakeProfitDetails
  stopLossOnFill: import('./transaction').StopLossDetails
  trailingStopLossOnFill: import('./transaction').TrailingStopLossDetails
  tradeClientExtensions: import('./transaction').ClientExtensions
}
declare const TakeProfitOrderRequest_base: typeof import('./base').Definition
export class TakeProfitOrderRequest extends TakeProfitOrderRequest_base {
  constructor(data: any)
  type: any
  tradeID: any
  clientTradeID: any
  price: any
  timeInForce: any
  gtdTime: any
  triggerCondition: any
  clientExtensions: import('./transaction').ClientExtensions
}
declare const StopLossOrderRequest_base: typeof import('./base').Definition
export class StopLossOrderRequest extends StopLossOrderRequest_base {
  constructor(data: any)
  type: any
  tradeID: any
  clientTradeID: any
  price: any
  distance: any
  timeInForce: any
  gtdTime: any
  triggerCondition: any
  guaranteed: any
  clientExtensions: import('./transaction').ClientExtensions
}
declare const TrailingStopLossOrderRequest_base: typeof import('./base').Definition
export class TrailingStopLossOrderRequest extends TrailingStopLossOrderRequest_base {
  constructor(data: any)
  type: any
  tradeID: any
  clientTradeID: any
  distance: any
  timeInForce: any
  gtdTime: any
  triggerCondition: any
  clientExtensions: import('./transaction').ClientExtensions
}
declare const UnitsAvailableDetails_base: typeof import('./base').Definition
export class UnitsAvailableDetails extends UnitsAvailableDetails_base {
  constructor(data: any)
  long: any
  short: any
}
declare const UnitsAvailable_base: typeof import('./base').Definition
export class UnitsAvailable extends UnitsAvailable_base {
  constructor(data: any)
  default: UnitsAvailableDetails
  reduceFirst: UnitsAvailableDetails
  reduceOnly: UnitsAvailableDetails
  openOnly: UnitsAvailableDetails
}
declare const GuaranteedStopLossOrderEntryData_base: typeof import('./base').Definition
export class GuaranteedStopLossOrderEntryData extends GuaranteedStopLossOrderEntryData_base {
  constructor(data: any)
  minimumDistance: any
  premium: any
  levelRestriction: import('./primitives').GuaranteedStopLossOrderLevelRestriction
}
export class EntitySpec {
  constructor(context: any)
  context: any
  OrderIdentifier: typeof OrderIdentifier
  DynamicOrderState: typeof DynamicOrderState
  Order: typeof Order
  MarketOrder: typeof MarketOrder
  FixedPriceOrder: typeof FixedPriceOrder
  LimitOrder: typeof LimitOrder
  StopOrder: typeof StopOrder
  MarketIfTouchedOrder: typeof MarketIfTouchedOrder
  TakeProfitOrder: typeof TakeProfitOrder
  StopLossOrder: typeof StopLossOrder
  TrailingStopLossOrder: typeof TrailingStopLossOrder
  OrderRequest: typeof OrderRequest
  MarketOrderRequest: typeof MarketOrderRequest
  LimitOrderRequest: typeof LimitOrderRequest
  StopOrderRequest: typeof StopOrderRequest
  MarketIfTouchedOrderRequest: typeof MarketIfTouchedOrderRequest
  TakeProfitOrderRequest: typeof TakeProfitOrderRequest
  StopLossOrderRequest: typeof StopLossOrderRequest
  TrailingStopLossOrderRequest: typeof TrailingStopLossOrderRequest
  UnitsAvailableDetails: typeof UnitsAvailableDetails
  UnitsAvailable: typeof UnitsAvailable
  GuaranteedStopLossOrderEntryData: typeof GuaranteedStopLossOrderEntryData
  create(accountID: any, bodyParams: any, responseHandler: any): ClientRequest
  list(accountID: any, queryParams: any, responseHandler: any): ClientRequest
  listPending(accountID: any, responseHandler: any): ClientRequest
  get(accountID: any, orderSpecifier: any, responseHandler: any): ClientRequest
  replace(accountID: any, orderSpecifier: any, bodyParams: any, responseHandler: any): ClientRequest
  cancel(accountID: any, orderSpecifier: any, responseHandler: any): ClientRequest
  setClientExtensions(
    accountID: any,
    orderSpecifier: any,
    bodyParams: any,
    responseHandler: any,
  ): ClientRequest
  market(accountID: any, orderSpec: any, responseCallback: any): ClientRequest
  limit(accountID: any, orderSpec: any, responseCallback: any): ClientRequest
  limitReplace(accountID: any, orderID: any, orderSpec: any, responseCallback: any): ClientRequest
  stop(accountID: any, orderSpec: any, responseCallback: any): ClientRequest
  stopReplace(accountID: any, orderID: any, orderSpec: any, responseCallback: any): ClientRequest
  marketIfTouched(accountID: any, orderSpec: any, responseCallback: any): ClientRequest
  marketIfTouchedReplace(accountID: any, orderID: any, orderSpec: any, responseCallback: any): ClientRequest
  takeProfit(accountID: any, orderSpec: any, responseCallback: any): ClientRequest
  takeProfitReplace(accountID: any, orderID: any, orderSpec: any, responseCallback: any): ClientRequest
  stopLoss(accountID: any, orderSpec: any, responseCallback: any): ClientRequest
  stopLossReplace(accountID: any, orderID: any, orderSpec: any, responseCallback: any): ClientRequest
  trailingStopLoss(accountID: any, orderSpec: any, responseCallback: any): ClientRequest
  trailingStopLossReplace(accountID: any, orderID: any, orderSpec: any, responseCallback: any): ClientRequest
}
export {}

}