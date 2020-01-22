declare module '@oanda/v20/pricing' {
  declare const PricingBucket: typeof import('./pricing_common').PriceBucket

  declare const ClientPrice_base: typeof import('./base').Definition
  export class ClientPrice extends ClientPrice_base {
    constructor(data: any)
    type: any
    instrument: any
    time: any
    status: any
    tradeable: any
    bids: any[]
    asks: any[]
    closeoutBid: any
    closeoutAsk: any
    quoteHomeConversionFactors: QuoteHomeConversionFactors
    unitsAvailable: import('./order').UnitsAvailable
  }
  declare const QuoteHomeConversionFactors_base: typeof import('./base').Definition
  export class QuoteHomeConversionFactors extends QuoteHomeConversionFactors_base {
    constructor(data: any)
    positiveUnits: any
    negativeUnits: any
  }
  declare const HomeConversions_base: typeof import('./base').Definition
  export class HomeConversions extends HomeConversions_base {
    constructor(data: any)
    currency: any
    accountGain: any
    accountLoss: any
    positionValue: any
  }
  declare const PricingHeartbeat_base: typeof import('./base').Definition
  export class PricingHeartbeat extends PricingHeartbeat_base {
    constructor(data: any)
    type: any
    time: any
  }
  export class EntitySpec {
    constructor(context: any)
    context: any
    ClientPrice: typeof ClientPrice
    QuoteHomeConversionFactors: typeof QuoteHomeConversionFactors
    HomeConversions: typeof HomeConversions
    PricingHeartbeat: typeof PricingHeartbeat
    basePrices(queryParams: any, responseHandler: any): void
    getPriceRange(instrument: any, queryParams: any, responseHandler: any): void
    get(accountID: any, queryParams: any, responseHandler: any): void
    stream(accountID: any, queryParams: any, streamChunkHandler: any, responseHandler: any): void
    candles(accountID: any, instrument: any, queryParams: any, responseHandler: any): void
  }
  export {}
}
