declare module '@oanda/v20/instrument' {

declare const Candlestick_base: typeof import('./base').Definition
export class Candlestick extends Candlestick_base {
  constructor(data: any)
  time: any
  bid: CandlestickData
  ask: CandlestickData
  mid: CandlestickData
  volume: any
  complete: any
}
declare const CandlestickData_base: typeof import('./base').Definition
export class CandlestickData extends CandlestickData_base {
  constructor(data: any)
  o: any
  h: any
  l: any
  c: any
}
declare const OrderBook_base: typeof import('./base').Definition
export class OrderBook extends OrderBook_base {
  constructor(data: any)
  instrument: any
  time: any
  price: any
  bucketWidth: any
  buckets: any
}
declare const OrderBookBucket_base: typeof import('./base').Definition
export class OrderBookBucket extends OrderBookBucket_base {
  constructor(data: any)
  price: any
  longCountPercent: any
  shortCountPercent: any
}
declare const PositionBook_base: typeof import('./base').Definition
export class PositionBook extends PositionBook_base {
  constructor(data: any)
  instrument: any
  time: any
  price: any
  bucketWidth: any
  buckets: any
}
declare const PositionBookBucket_base: typeof import('./base').Definition
export class PositionBookBucket extends PositionBookBucket_base {
  constructor(data: any)
  price: any
  longCountPercent: any
  shortCountPercent: any
}
export class EntitySpec {
  constructor(context: any)
  context: any
  Candlestick: typeof Candlestick
  CandlestickData: typeof CandlestickData
  OrderBook: typeof OrderBook
  OrderBookBucket: typeof OrderBookBucket
  PositionBook: typeof PositionBook
  PositionBookBucket: typeof PositionBookBucket
  candles(instrument: any, queryParams: any, responseHandler: any): void
  price(instrument: any, queryParams: any, responseHandler: any): void
  prices(instrument: any, queryParams: any, responseHandler: any): void
  orderBook(instrument: any, queryParams: any, responseHandler: any): void
  positionBook(instrument: any, queryParams: any, responseHandler: any): void
}
export {}

}