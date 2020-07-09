import * as account from './account'
import * as instrument from './instrument'
import * as order from './order'
import * as trade from './trade'
import * as position from './position'
import * as transaction from './transaction'
import * as pricing from './pricing'
import * as pricingCommon from './pricingCommon'
import * as primitives from './primitives'
import { ClientPrice, QuoteHomeConversionFactors, HomeConversions, PricingHeartbeat } from '../pricing'
export { ClientPrice, QuoteHomeConversionFactors, HomeConversions, PricingHeartbeat } from '../pricing'

/**
 * An instrument name, a granularity, and a price component to get candlestick data for. https://developer.oanda.com/rest-live-v20/pricing-df/
 */
export type CandleSpecification = string

/**
 * The status of the Price. https://developer.oanda.com/rest-live-v20/pricing-df/
 */
export enum PriceStatus {
  /**
   * The Instrument’s price is tradeable.
   */
  'tradeable' = 'tradeable',

  /**
   * The Instrument’s price is not tradeable.
   */
  'non-tradeable' = 'non-tradeable',

  /**
   * The Instrument of the price is invalid or there is no valid Price for the Instrument.
   */
  'invalid' = 'invalid',
}

export const PriceStatusDescription = {
  'tradeable': 'The Instrument’s price is tradeable.',
  'non-tradeable': 'The Instrument’s price is not tradeable.',
  'invalid': 'The Instrument of the price is invalid or there is no valid Price for the Instrument.',
}

