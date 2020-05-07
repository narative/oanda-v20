import * as account from './account'
import * as instrument from './instrument'
import * as order from './order'
import * as trade from './trade'
import * as position from './position'
import * as transaction from './transaction'
import * as pricing from './pricing'
import * as pricingCommon from './pricingCommon'
import * as primitives from './primitives'
import { Account, AccountChangesState, AccountProperties, AccountSummary, CalculatedAccountState, AccountChanges } from '../account'
export { Account, AccountChangesState, AccountProperties, AccountSummary, CalculatedAccountState, AccountChanges } from '../account'

/**
 * The string representation of an Account Identifier. https://developer.oanda.com/rest-live-v20/account-df/
 */
export type AccountID = string

/**
 * The overall behaviour of the Account regarding guaranteed Stop Loss Orders. https://developer.oanda.com/rest-live-v20/account-df/
 */
export enum GuaranteedStopLossOrderMode {
  /**
   * The Account is not permitted to create guaranteed Stop Loss Orders.
   */
  'DISABLED' = 'DISABLED',

  /**
   * The Account is able, but not required to have guaranteed Stop Loss Orders for open Trades.
   */
  'ALLOWED' = 'ALLOWED',

  /**
   * The Account is required to have guaranteed Stop Loss Orders for all open Trades.
   */
  'REQUIRED' = 'REQUIRED',
}

/**
 * The financing mode of an Account https://developer.oanda.com/rest-live-v20/account-df/
 */
export enum AccountFinancingMode {
  /**
   * No financing is paid/charged for open Trades in the Account
   */
  'NO_FINANCING' = 'NO_FINANCING',

  /**
   * Second-by-second financing is paid/charged for open Trades in the Account, both daily and when the the Trade is closed
   */
  'SECOND_BY_SECOND' = 'SECOND_BY_SECOND',

  /**
   * A full day’s worth of financing is paid/charged for open Trades in the Account daily at 5pm New York time
   */
  'DAILY' = 'DAILY',
}

/**
 * The way that position values for an Account are calculated and aggregated. https://developer.oanda.com/rest-live-v20/account-df/
 */
export enum PositionAggregationMode {
  /**
   * The Position value or margin for each side (long and short) of the Position are computed independently and added together.
   */
  'ABSOLUTE_SUM' = 'ABSOLUTE_SUM',

  /**
   * The Position value or margin for each side (long and short) of the Position are computed independently. The Position value or margin chosen is the maximal absolute value of the two.
   */
  'MAXIMAL_SIDE' = 'MAXIMAL_SIDE',

  /**
   * The units for each side (long and short) of the Position are netted together and the resulting value (long or short) is used to compute the Position value or margin.
   */
  'NET_SUM' = 'NET_SUM',
}

export class AccumulatedAccountState {
  /**
   * The current balance of the account.
   */ 
  balance?: primitives.AccountUnits

  /**
   * The total profit/loss realized over the lifetime of the Account.
   */ 
  pl?: primitives.AccountUnits

  /**
   * The total realized profit/loss for the account since it was last reset by
   * the client.
   */ 
  resettablePL?: primitives.AccountUnits

  /**
   * The total amount of financing paid/collected over the lifetime of the
   * account.
   */ 
  financing?: primitives.AccountUnits

  /**
   * The total amount of commission paid over the lifetime of the Account.
   */ 
  commission?: primitives.AccountUnits

  /**
   * The total amount of dividend adjustment paid over the lifetime of the
   * Account in the Account's home currency.
   */ 
  dividendAdjustment?: primitives.AccountUnits

  /**
   * The total amount of fees charged over the lifetime of the Account for the
   * execution of guaranteed Stop Loss Orders.
   */ 
  guaranteedExecutionFees?: primitives.AccountUnits

  /**
   * The date/time when the Account entered a margin call state. Only provided
   * if the Account is in a margin call.
   */ 
  marginCallEnterTime?: primitives.DateTime

  /**
   * The number of times that the Account's current margin call was extended.
   */ 
  marginCallExtensionCount?: number

  /**
   * The date/time of the Account's last margin call extension.
   */ 
  lastMarginCallExtensionTime?: primitives.DateTime

}
