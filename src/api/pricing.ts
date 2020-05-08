import * as account from '../definitions/account'
import * as instrument from '../definitions/instrument'
import * as order from '../definitions/order'
import * as trade from '../definitions/trade'
import * as position from '../definitions/position'
import * as transaction from '../definitions/transaction'
import * as pricing from '../definitions/pricing'
import * as pricingCommon from '../definitions/pricingCommon'
import * as primitives from '../definitions/primitives'

import * as http from 'http'
import { EntitySpec } from '../pricing'

///////////////////////////////////////////////////////////////////////////////
// GET /v3/accounts/{accountID}/candles/latest (#collapse_endpoint_2)
///////////////////////////////////////////////////////////////////////////////

// no implementation


///////////////////////////////////////////////////////////////////////////////
// get - GET /v3/accounts/{accountID}/pricing (#collapse_endpoint_3)
///////////////////////////////////////////////////////////////////////////////
        
export interface GetRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path
  query: GetRequestQuery
}

export interface GetRequestQuery {
  instruments?: primitives.InstrumentName[]

  since?: primitives.DateTime

  includeUnitsAvailable?: boolean

  includeHomeConversions?: boolean
}

export type GetResponse = GetResponse200

export interface GetResponse200 {
  /**
   * The list of Price objects requested.
   */ 
  prices: pricing.ClientPrice[]

  /**
   * The list of home currency conversion factors requested. This field will
   * only be present if includeHomeConversions was set to true in the request.
   */ 
  homeConversions?: pricing.HomeConversions[]

  /**
   * The DateTime value to use for the 'since' parameter in the next poll
   * request.
   */ 
  time?: primitives.DateTime

}

///////////////////////////////////////////////////////////////////////////////
// stream - GET /v3/accounts/{accountID}/pricing/stream (#collapse_endpoint_4)
///////////////////////////////////////////////////////////////////////////////
        
export interface StreamRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  accountID: account.AccountID // path
  query: StreamRequestQuery
}

export interface StreamRequestQuery {
  instruments?: primitives.InstrumentName[]

  snapshot?: boolean
}

export type StreamResponse = void


///////////////////////////////////////////////////////////////////////////////
// candles - GET /v3/accounts/{accountID}/instruments/{instrument}/candles (#collapse_endpoint_5)
///////////////////////////////////////////////////////////////////////////////
        
export interface CandlesRequest {
  // Authorization: string // header
  // Accept-Datetime-Format: primitives.AcceptDatetimeFormat // header
  instrument: primitives.InstrumentName // path
  accountID: account.AccountID // path
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

  units?: primitives.DecimalNumber
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

///////////////////////////////////////////////////////////////////////////

export class API {
  constructor(private context: any, private resolver: any) {}

  /**
   * get
   * GET /v3/accounts/{accountID}/pricing 
   */
  async get(request: GetRequest): Promise<GetResponse> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).get(
       request.accountID,
        request.query,
        this.resolver(resolve, reject))
    })
  }

  /**
   * candles
   * GET /v3/accounts/{accountID}/instruments/{instrument}/candles 
   */
  async candles(request: CandlesRequest): Promise<CandlesResponse> {
    return new Promise((resolve, reject) => {
      new EntitySpec(this.context).candles(
       request.instrument,
       request.accountID,
        request.query,
        this.resolver(resolve, reject))
    })
  }
}

export class Stream {
  constructor(private context: any, private resolver: any) {}

  /**
   * stream
   * GET /v3/accounts/{accountID}/pricing/stream 
   */
  stream(request: StreamRequest, streamHandler: (data: any) => void, doneHandler: (err: any, data: any) => void): http.ClientRequest {
    return new EntitySpec(this.context).stream(
      request.accountID,
      request.query,
      streamHandler,
      this.resolver((data: any) => doneHandler(null, data), (err: any) => doneHandler(err, null))
    )
  }

}
