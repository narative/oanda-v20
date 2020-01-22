declare module '@narative/oanda-v20/trade' {

declare const Trade_base: typeof import('./base').Definition
export class Trade extends Trade_base {
  constructor(data: any)
  id: any
  instrument: any
  price: any
  openTime: any
  state: any
  initialUnits: any
  initialMarginRequired: any
  currentUnits: any
  realizedPL: any
  unrealizedPL: any
  marginUsed: any
  averageClosePrice: any
  closingTransactionIDs: any
  financing: any
  closeTime: any
  clientExtensions: import('./transaction').ClientExtensions
  takeProfitOrder: import('./order').TakeProfitOrder
  stopLossOrder: import('./order').StopLossOrder
  trailingStopLossOrder: import('./order').TrailingStopLossOrder
}
declare const TradeSummary_base: typeof import('./base').Definition
export class TradeSummary extends TradeSummary_base {
  constructor(data: any)
  id: any
  instrument: any
  price: any
  openTime: any
  state: any
  initialUnits: any
  initialMarginRequired: any
  currentUnits: any
  realizedPL: any
  unrealizedPL: any
  marginUsed: any
  averageClosePrice: any
  closingTransactionIDs: any
  financing: any
  closeTime: any
  clientExtensions: import('./transaction').ClientExtensions
  takeProfitOrderID: any
  stopLossOrderID: any
  trailingStopLossOrderID: any
}
declare const CalculatedTradeState_base: typeof import('./base').Definition
export class CalculatedTradeState extends CalculatedTradeState_base {
  constructor(data: any)
  id: any
  unrealizedPL: any
  marginUsed: any
}
export class EntitySpec {
  constructor(context: any)
  context: any
  Trade: typeof Trade
  TradeSummary: typeof TradeSummary
  CalculatedTradeState: typeof CalculatedTradeState
  list(accountID: any, queryParams: any, responseHandler: any): void
  listOpen(accountID: any, responseHandler: any): void
  get(accountID: any, tradeSpecifier: any, responseHandler: any): void
  close(accountID: any, tradeSpecifier: any, bodyParams: any, responseHandler: any): void
  setClientExtensions(
    accountID: any,
    tradeSpecifier: any,
    bodyParams: any,
    responseHandler: any,
  ): void
  setDependentOrders(
    accountID: any,
    tradeSpecifier: any,
    bodyParams: any,
    responseHandler: any,
  ): void
}
export {}
}