import * as account from '../definitions/account'
import * as instrument from '../definitions/instrument'
import * as order from '../definitions/order'
import * as trade from '../definitions/trade'
import * as position from '../definitions/position'
import * as transaction from '../definitions/transaction'
import * as pricing from '../definitions/pricing'
import * as pricingCommon from '../definitions/pricingCommon'
import * as primitives from '../definitions/primitives'

import { EntitySpec } from '../instrument'

///////////////////////////////////////////////////////////////////////////////
// candles - GET /v3/instruments/{instrument}/candles
///////////////////////////////////////////////////////////////////////////////
        
export interface CandlesRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  instrument: primitives.InstrumentName // path
  query: CandlesRequestQuery
}

export interface CandlesRequestQuery {
  price?: primitives.PricingComponent

  granularity?: instrument.CandlestickGranularity

  count?: number

  from?: primitives.DateTime

  to?: primitives.DateTime

  smooth?: boolean

  includeFirst?: boolean

  dailyAlignment?: number

  alignmentTimezone?: string

  weeklyAlignment?: instrument.WeeklyAlignment
}

export type CandlesResponse = CandlesResponse200

export interface CandlesResponse200 {
  /**
   * The instrument whose Prices are represented by the candlesticks.
   */ 
  instrument?: primitives.InstrumentName

  /**
   * The granularity of the candlesticks provided.
   */ 
  granularity?: instrument.CandlestickGranularity

  /**
   * The list of candlesticks that satisfy the request.
   */ 
  candles?: instrument.Candlestick[]

}

///////////////////////////////////////////////////////////////////////////////
// orderBook - GET /v3/instruments/{instrument}/orderBook
///////////////////////////////////////////////////////////////////////////////
        
export interface OrderBookRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  instrument: primitives.InstrumentName // path
  query: OrderBookRequestQuery
}

export interface OrderBookRequestQuery {
  time?: primitives.DateTime
}

export type OrderBookResponse = OrderBookResponse200

export interface OrderBookResponse200 {
  /**
   * The instrument's order book
   */ 
  orderBook?: instrument.OrderBook

}

///////////////////////////////////////////////////////////////////////////////
// positionBook - GET /v3/instruments/{instrument}/positionBook
///////////////////////////////////////////////////////////////////////////////
        
export interface PositionBookRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  instrument: primitives.InstrumentName // path
  query: PositionBookRequestQuery
}

export interface PositionBookRequestQuery {
  time?: primitives.DateTime
}

export type PositionBookResponse = PositionBookResponse200

export interface PositionBookResponse200 {
  /**
   * The instrument's position book
   */ 
  positionBook?: instrument.PositionBook

}

    ///////////////////////////////////////////////////////////////////////////

    export class API {
      constructor(private context: any, private resolver: any) {}

      /**
       * candles
       * GET /v3/instruments/{instrument}/candles 
       */
      async candles(request: CandlesRequest): Promise<CandlesResponse> {
        return new Promise((resolve, reject) => {
          new EntitySpec(this.context).candles(
            request.instrument,
            request.query,
            this.resolver(resolve, reject))
        })
      }

      /**
       * orderBook
       * GET /v3/instruments/{instrument}/orderBook 
       */
      async orderBook(request: OrderBookRequest): Promise<OrderBookResponse> {
        return new Promise((resolve, reject) => {
          new EntitySpec(this.context).orderBook(
            request.instrument,
            request.query,
            this.resolver(resolve, reject))
        })
      }

      /**
       * positionBook
       * GET /v3/instruments/{instrument}/positionBook 
       */
      async positionBook(request: PositionBookRequest): Promise<PositionBookResponse> {
        return new Promise((resolve, reject) => {
          new EntitySpec(this.context).positionBook(
            request.instrument,
            request.query,
            this.resolver(resolve, reject))
        })
      }
    }
