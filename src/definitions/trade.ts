import * as account from './account'
import * as instrument from './instrument'
import * as order from './order'
import * as trade from './trade'
import * as position from './position'
import * as transaction from './transaction'
import * as pricing from './pricing'
import * as pricingCommon from './pricingCommon'
import * as primitives from './primitives'
import { Trade, TradeSummary, CalculatedTradeState } from '../trade'
export { Trade, TradeSummary, CalculatedTradeState } from '../trade'

/**
 * The Trade’s identifier, unique within the Trade’s Account. https://developer.oanda.com/rest-live-v20/trade-df/
 */
export type TradeID = string

/**
 * The identification of a Trade as referred to by clients https://developer.oanda.com/rest-live-v20/trade-df/
 */
export type TradeSpecifier = string

/**
 * The current state of the Trade. https://developer.oanda.com/rest-live-v20/trade-df/
 */
export enum TradeState {
  /**
   * The Trade is currently open
   */
  'OPEN' = 'OPEN',

  /**
   * The Trade has been fully closed
   */
  'CLOSED' = 'CLOSED',

  /**
   * The Trade will be closed as soon as the trade’s instrument becomes tradeable
   */
  'CLOSE_WHEN_TRADEABLE' = 'CLOSE_WHEN_TRADEABLE',
}

export const TradeStateDescription = {
  'OPEN': 'The Trade is currently open',
  'CLOSED': 'The Trade has been fully closed',
  'CLOSE_WHEN_TRADEABLE': 'The Trade will be closed as soon as the trade’s instrument becomes tradeable',
}

/**
 * The state to filter the Trades by https://developer.oanda.com/rest-live-v20/trade-df/
 */
export enum TradeStateFilter {
  /**
   * The Trades that are currently open
   */
  'OPEN' = 'OPEN',

  /**
   * The Trades that have been fully closed
   */
  'CLOSED' = 'CLOSED',

  /**
   * The Trades  that will be closed as soon as the trades’ instrument becomes tradeable
   */
  'CLOSE_WHEN_TRADEABLE' = 'CLOSE_WHEN_TRADEABLE',

  /**
   * The Trades that are in any of the possible states listed above.
   */
  'ALL' = 'ALL',
}

export const TradeStateFilterDescription = {
  'OPEN': 'The Trades that are currently open',
  'CLOSED': 'The Trades that have been fully closed',
  'CLOSE_WHEN_TRADEABLE': 'The Trades  that will be closed as soon as the trades’ instrument becomes tradeable',
  'ALL': 'The Trades that are in any of the possible states listed above.',
}

/**
 * The classification of TradePLs. https://developer.oanda.com/rest-live-v20/trade-df/
 */
export enum TradePL {
  /**
   * An open Trade currently has a positive (profitable) unrealized P/L, or a closed Trade realized a positive amount of P/L.
   */
  'POSITIVE' = 'POSITIVE',

  /**
   * An open Trade currently has a negative (losing) unrealized P/L, or a closed Trade realized a negative amount of P/L.
   */
  'NEGATIVE' = 'NEGATIVE',

  /**
   * An open Trade currently has unrealized P/L of zero (neither profitable nor losing), or a closed Trade realized a P/L amount of zero.
   */
  'ZERO' = 'ZERO',
}

export const TradePLDescription = {
  'POSITIVE': 'An open Trade currently has a positive (profitable) unrealized P/L, or a closed Trade realized a positive amount of P/L.',
  'NEGATIVE': 'An open Trade currently has a negative (losing) unrealized P/L, or a closed Trade realized a negative amount of P/L.',
  'ZERO': 'An open Trade currently has unrealized P/L of zero (neither profitable nor losing), or a closed Trade realized a P/L amount of zero.',
}

