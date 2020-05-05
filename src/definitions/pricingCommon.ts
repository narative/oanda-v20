import * as account from './account'
import * as instrument from './instrument'
import * as order from './order'
import * as trade from './trade'
import * as position from './position'
import * as transaction from './transaction'
import * as pricing from './pricing'
import * as primitives from './primitives'

/**
 * The string representation of a Price for a Bucket. https://developer.oanda.com/rest-live-v20/pricing-common-df/
 */
export type PriceValue = string

/**
 * A PriceBucket represents a price available for an amount of liquidity https://developer.oanda.com/rest-live-v20/pricing-common-df/
 */
export interface PriceBucket {
  /**
   * The Price offered by the PriceBucket
   */

  price?: PriceValue

  /**
   * The amount of liquidity offered by the PriceBucket
   */

  liquidity?: number
}
