import * as account from './account'
import * as order from './order'
import * as trade from './trade'
import * as position from './position'
import * as transaction from './transaction'
import * as pricing from './pricing'
import * as pricingCommon from './pricingCommon'
import * as primitives from './primitives'

/**
 * The granularity of a candlestick https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export enum CandlestickGranularity {
  /**
   * 5 second candlesticks, minute alignment
   */
  'S5' = 'S5',

  /**
   * 10 second candlesticks, minute alignment
   */
  'S10' = 'S10',

  /**
   * 15 second candlesticks, minute alignment
   */
  'S15' = 'S15',

  /**
   * 30 second candlesticks, minute alignment
   */
  'S30' = 'S30',

  /**
   * 1 minute candlesticks, minute alignment
   */
  'M1' = 'M1',

  /**
   * 2 minute candlesticks, hour alignment
   */
  'M2' = 'M2',

  /**
   * 4 minute candlesticks, hour alignment
   */
  'M4' = 'M4',

  /**
   * 5 minute candlesticks, hour alignment
   */
  'M5' = 'M5',

  /**
   * 10 minute candlesticks, hour alignment
   */
  'M10' = 'M10',

  /**
   * 15 minute candlesticks, hour alignment
   */
  'M15' = 'M15',

  /**
   * 30 minute candlesticks, hour alignment
   */
  'M30' = 'M30',

  /**
   * 1 hour candlesticks, hour alignment
   */
  'H1' = 'H1',

  /**
   * 2 hour candlesticks, day alignment
   */
  'H2' = 'H2',

  /**
   * 3 hour candlesticks, day alignment
   */
  'H3' = 'H3',

  /**
   * 4 hour candlesticks, day alignment
   */
  'H4' = 'H4',

  /**
   * 6 hour candlesticks, day alignment
   */
  'H6' = 'H6',

  /**
   * 8 hour candlesticks, day alignment
   */
  'H8' = 'H8',

  /**
   * 12 hour candlesticks, day alignment
   */
  'H12' = 'H12',

  /**
   * 1 day candlesticks, day alignment
   */
  'D' = 'D',

  /**
   * 1 week candlesticks, aligned to start of week
   */
  'W' = 'W',

  /**
   * 1 month candlesticks, aligned to first day of the month
   */
  'M' = 'M',
}

/**
 * The day of the week to use for candlestick granularities with weekly alignment. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export enum WeeklyAlignment {
  /**
   * Monday
   */
  'Monday' = 'Monday',

  /**
   * Tuesday
   */
  'Tuesday' = 'Tuesday',

  /**
   * Wednesday
   */
  'Wednesday' = 'Wednesday',

  /**
   * Thursday
   */
  'Thursday' = 'Thursday',

  /**
   * Friday
   */
  'Friday' = 'Friday',

  /**
   * Saturday
   */
  'Saturday' = 'Saturday',

  /**
   * Sunday
   */
  'Sunday' = 'Sunday',
}

/**
 * The Candlestick representation https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export interface Candlestick {
  /**
   * The start time of the candlestick
   */

  time?: primitives.DateTime

  /**
   * The candlestick data based on bids. Only provided if bid-based candles
   * were requested.
   */

  bid?: CandlestickData

  /**
   * The candlestick data based on asks. Only provided if ask-based candles
   * were requested.
   */

  ask?: CandlestickData

  /**
   * The candlestick data based on midpoints. Only provided if midpoint-based
   * candles were requested.
   */

  mid?: CandlestickData

  /**
   * The number of prices created during the time-range represented by the
   * candlestick.
   */

  volume?: number

  /**
   * A flag indicating if the candlestick is complete. A complete candlestick
   * is one whose ending time is not in the future.
   */

  complete?: boolean
}

/**
 * The price data (open, high, low, close) for the Candlestick representation. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export interface CandlestickData {
  /**
   * The first (open) price in the time-range represented by the candlestick.
   */

  o?: pricingCommon.PriceValue

  /**
   * The highest price in the time-range represented by the candlestick.
   */

  h?: pricingCommon.PriceValue

  /**
   * The lowest price in the time-range represented by the candlestick.
   */

  l?: pricingCommon.PriceValue

  /**
   * The last (closing) price in the time-range represented by the
   * candlestick.
   */

  c?: pricingCommon.PriceValue
}

/**
 * Response containing instrument, granularity, and list of candles. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export interface CandlestickResponse {
  /**
   * The instrument whose Prices are represented by the candlesticks.
   */

  instrument?: primitives.InstrumentName

  /**
   * The granularity of the candlesticks provided.
   */

  granularity?: CandlestickGranularity

  /**
   * The list of candlesticks that satisfy the request.
   */

  candles?: Candlestick[]
}

/**
 * The representation of an instrument’s order book at a point in time https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export interface OrderBook {
  /**
   * The order book's instrument
   */

  instrument?: primitives.InstrumentName

  /**
   * The time when the order book snapshot was created.
   */

  time?: primitives.DateTime

  /**
   * The price (midpoint) for the order book's instrument at the time of the
   * order book snapshot
   */

  price?: pricingCommon.PriceValue

  /**
   * The price width for each bucket. Each bucket covers the price range from
   * the bucket's price to the bucket's price + bucketWidth.
   */

  bucketWidth?: pricingCommon.PriceValue

  /**
   * The partitioned order book, divided into buckets using a default bucket
   * width. These buckets are only provided for price ranges which actually
   * contain order or position data.
   */

  buckets?: OrderBookBucket[]
}

/**
 * The order book data for a partition of the instrument’s prices. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export interface OrderBookBucket {
  /**
   * The lowest price (inclusive) covered by the bucket. The bucket covers the
   * price range from the price to price + the order book's bucketWidth.
   */

  price?: pricingCommon.PriceValue

  /**
   * The percentage of the total number of orders represented by the long
   * orders found in this bucket.
   */

  longCountPercent?: primitives.DecimalNumber

  /**
   * The percentage of the total number of orders represented by the short
   * orders found in this bucket.
   */

  shortCountPercent?: primitives.DecimalNumber
}

/**
 * The representation of an instrument’s position book at a point in time https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export interface PositionBook {
  /**
   * The position book's instrument
   */

  instrument?: primitives.InstrumentName

  /**
   * The time when the position book snapshot was created
   */

  time?: primitives.DateTime

  /**
   * The price (midpoint) for the position book's instrument at the time of
   * the position book snapshot
   */

  price?: pricingCommon.PriceValue

  /**
   * The price width for each bucket. Each bucket covers the price range from
   * the bucket's price to the bucket's price + bucketWidth.
   */

  bucketWidth?: pricingCommon.PriceValue

  /**
   * The partitioned position book, divided into buckets using a default
   * bucket width. These buckets are only provided for price ranges which
   * actually contain order or position data.
   */

  buckets?: PositionBookBucket[]
}

/**
 * The position book data for a partition of the instrument’s prices. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export interface PositionBookBucket {
  /**
   * The lowest price (inclusive) covered by the bucket. The bucket covers the
   * price range from the price to price + the position book's bucketWidth.
   */

  price?: pricingCommon.PriceValue

  /**
   * The percentage of the total number of positions represented by the long
   * positions found in this bucket.
   */

  longCountPercent?: primitives.DecimalNumber

  /**
   * The percentage of the total number of positions represented by the short
   * positions found in this bucket.
   */

  shortCountPercent?: primitives.DecimalNumber
}

/**
 * A price available for an amount of liquidity in the bucket. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export interface RawMarketPriceLevel {
  /**
   * The amount of liquidity for the bucket.
   */

  liquidity?: primitives.DecimalNumber

  /**
   * The price to use for the bucket.
   */

  price?: primitives.DecimalNumber
}

/**
 * The depth of market representation of the RawMarketPrice. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export interface RawMarketPriceDepthOfMarket {
  /**
   * The list of prices and liquidity available on the Instrument's bid side
   * of the RawMarketPrice.
   */

  bids?: RawMarketPriceLevel[]

  /**
   * The list of prices and liquidity available on the Instrument's ask side
   * of the RawMarketPrice.
   */

  asks?: RawMarketPriceLevel[]
}

/**
 * The type of price adjustment. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export enum PriceAdjustmentType {
  /**
   * The present value adjustment is intended to back-out the interest component of the future-date contract expiry.
   */
  'PRESENT_VALUE' = 'PRESENT_VALUE',

  /**
   * The dividend adjustment is intended to include the impact of the dividend payment from the equities that make up the index.
   */
  'DIVIDEND' = 'DIVIDEND',

  /**
   * The basis adjustment is intended to offset the difference in the basis between the futures price and the index price.
   */
  'BASIS' = 'BASIS',

  /**
   * The fair value adjustment is intended to be configured manually by the Trading team to adjust the price of the CFD for any reason which is not captured by the other adjustments, and will typically be the 0.
   */
  'FAIR_VALUE' = 'FAIR_VALUE',
}

/**
 * The type of a price adjustment and its amount in price units. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export interface PriceAdjustment {
  /**
   * The type of price adjustment.
   */

  type?: PriceAdjustmentType

  /**
   * The adjustment amount applied, represented in price units.
   */

  amount?: primitives.DecimalNumber
}

/**
 * Time interval at which data is sampled. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export enum SamplingInterval {
  /**
   * One minute sampling.
   */
  'M1' = 'M1',
}

/**
 * A RawMarketPrice entity represents a raw market price generated by the pricing server for a specific liquidity pool. https://developer.oanda.com/rest-live-v20/instrument-df/
 */
export interface RawMarketPrice {
  /**
   * The ID of the liquidity pool the RawMarketPrice is for.
   */

  liquidityPoolID?: number

  /**
   * The name of the instrument the RawMarketPrice is for.
   */

  instrumentName?: primitives.InstrumentName

  /**
   * The name of the contract the RawMarketPrice is for.
   */

  contractName?: string

  /**
   * The date/time when the RawMarketPrice was created.
   */

  timestamp?: primitives.DateTime

  /**
   * The list of adjustments that were applied to the RawMarketPriceLevels of
   * bids and asks.
   */

  adjustments?: PriceAdjustment[]

  /**
   * The OrderBook depth of market. The list of bids and asks in an OrderBook
   * depth of market can be viewed as an independent bid/offer for the given
   * number of units at the specified price. To fill an order for a given
   * number of units the bids/asks are walked in order until the total desired
   * units are filled. The price at each level is used for the units obtained
   * from that level. Lists of bids in an OrderBook will always be in
   * decreasing price order, however there is no restriction on the liquidity
   * values for each level, they may increase, decrease or stay the same.
   * Lists of asks in an OrderBook representation will always be in increasing
   * price order, however there is no restriction on the liquidity values for
   * each level, they may increase, decrease or stay the same.
   */

  orderBook?: RawMarketPriceDepthOfMarket

  /**
   * The Ladder depth of market. The list of bid and ask price-liquidity pairs
   * in a Ladder depth of market can be viewed as a &#x2018;rung'. To determine what
   * price to use for a given target liquidity, find the first rung that
   * matches the target liquidity and use its price. Lists of bids in a Ladder
   * will always be in decreasing price order and the corresponding liquidity
   * values will always be increasing. Lists of asks in a Ladder will always
   * be in increasing price order and the corresponding liquidity values will
   * always be increasing.
   */

  ladder?: RawMarketPriceDepthOfMarket
}
