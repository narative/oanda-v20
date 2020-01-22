declare module '@oanda/v20/pricing_common' {

declare const PriceBucket_base: typeof import('./base').Definition
export class PriceBucket extends PriceBucket_base {
  constructor(data: any)
  price: any
  liquidity: any
}
declare const Price_base: typeof import('./base').Definition
export class Price extends Price_base {
  constructor(data: any)
  instrument: any
  tradeable: any
  timestamp: any
  baseBid: any
  baseAsk: any
  bids: PriceBucket[]
  asks: PriceBucket[]
  closeoutBid: any
  closeoutAsk: any
}
export class EntitySpec {
  constructor(context: any)
  context: any
  PriceBucket: typeof PriceBucket
  Price: typeof Price
}
export {}
}