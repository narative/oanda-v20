import * as account from './account'
import * as instrument from './instrument'
import * as order from './order'
import * as trade from './trade'
import * as position from './position'
import * as pricing from './pricing'
import * as pricingCommon from './pricingCommon'
import * as primitives from './primitives'

/**
 * The base Transaction specification. Specifies properties that are common between all Transaction. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface Transaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID
}

/**
 * A CreateTransaction represents the creation of an Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface CreateTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'CREATE' in a
   * CreateTransaction.
   */

  type?: TransactionType /* default=CREATE */

  /**
   * The ID of the Division that the Account is in
   */

  divisionID?: number

  /**
   * The ID of the Site that the Account was created at
   */

  siteID?: number

  /**
   * The ID of the user that the Account was created for
   */

  accountUserID?: number

  /**
   * The number of the Account within the site/division/user
   */

  accountNumber?: number

  /**
   * The home currency of the Account
   */

  homeCurrency?: primitives.Currency
}

/**
 * A CloseTransaction represents the closing of an Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface CloseTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'CLOSE' in a CloseTransaction.
   */

  type?: TransactionType /* default=CLOSE */
}

/**
 * A ReopenTransaction represents the re-opening of a closed Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface ReopenTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'REOPEN' in a
   * ReopenTransaction.
   */

  type?: TransactionType /* default=REOPEN */
}

/**
 * A ClientConfigureTransaction represents the configuration of an Account by a client. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface ClientConfigureTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'CLIENT_CONFIGURE' in a
   * ClientConfigureTransaction.
   */

  type?: TransactionType /* default=CLIENT_CONFIGURE */

  /**
   * The client-provided alias for the Account.
   */

  alias?: string

  /**
   * The margin rate override for the Account.
   */

  marginRate?: primitives.DecimalNumber
}

/**
 * A ClientConfigureRejectTransaction represents the reject of configuration of an Account by a client. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface ClientConfigureRejectTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'CLIENT_CONFIGURE_REJECT' in a
   * ClientConfigureRejectTransaction.
   */

  type?: TransactionType /* default=CLIENT_CONFIGURE_REJECT */

  /**
   * The client-provided alias for the Account.
   */

  alias?: string

  /**
   * The margin rate override for the Account.
   */

  marginRate?: primitives.DecimalNumber

  /**
   * The reason that the Reject Transaction was created
   */

  rejectReason?: TransactionRejectReason
}

/**
 * A TransferFundsTransaction represents the transfer of funds in/out of an Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface TransferFundsTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'TRANSFER_FUNDS' in a
   * TransferFundsTransaction.
   */

  type?: TransactionType /* default=TRANSFER_FUNDS */

  /**
   * The amount to deposit/withdraw from the Account in the Account's home
   * currency. A positive value indicates a deposit, a negative value
   * indicates a withdrawal.
   */

  amount?: primitives.AccountUnits

  /**
   * The reason that an Account is being funded.
   */

  fundingReason?: FundingReason

  /**
   * An optional comment that may be attached to a fund transfer for audit
   * purposes
   */

  comment?: string

  /**
   * The Account's balance after funds are transferred.
   */

  accountBalance?: primitives.AccountUnits
}

/**
 * A TransferFundsRejectTransaction represents the rejection of the transfer of funds in/out of an Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface TransferFundsRejectTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'TRANSFER_FUNDS_REJECT' in a
   * TransferFundsRejectTransaction.
   */

  type?: TransactionType /* default=TRANSFER_FUNDS_REJECT */

  /**
   * The amount to deposit/withdraw from the Account in the Account's home
   * currency. A positive value indicates a deposit, a negative value
   * indicates a withdrawal.
   */

  amount?: primitives.AccountUnits

  /**
   * The reason that an Account is being funded.
   */

  fundingReason?: FundingReason

  /**
   * An optional comment that may be attached to a fund transfer for audit
   * purposes
   */

  comment?: string

  /**
   * The reason that the Reject Transaction was created
   */

  rejectReason?: TransactionRejectReason
}

/**
 * A MarketOrderTransaction represents the creation of a Market Order in the user’s account. A Market Order is an Order that is filled immediately at the current market price.
Market Orders can be specialized when they are created to accomplish a specific task: to close a Trade, to closeout a Position or to participate in in a Margin closeout. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface MarketOrderTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'MARKET_ORDER' in a
   * MarketOrderTransaction.
   */

  type?: TransactionType /* default=MARKET_ORDER */

  /**
   * The Market Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Market Order. A positive
   * number of units results in a long Order, and a negative number of units
   * results in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The time-in-force requested for the Market Order. Restricted to FOK or
   * IOC for a MarketOrder.
   */

  timeInForce: order.TimeInForce /* default=FOK */

  /**
   * The worst price that the client is willing to have the Market Order
   * filled at.
   */

  priceBound?: pricingCommon.PriceValue

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: order.OrderPositionFill /* default=DEFAULT */

  /**
   * Details of the Trade requested to be closed, only provided when the
   * Market Order is being used to explicitly close a Trade.
   */

  tradeClose?: MarketOrderTradeClose

  /**
   * Details of the long Position requested to be closed out, only provided
   * when a Market Order is being used to explicitly closeout a long Position.
   */

  longPositionCloseout?: MarketOrderPositionCloseout

  /**
   * Details of the short Position requested to be closed out, only provided
   * when a Market Order is being used to explicitly closeout a short
   * Position.
   */

  shortPositionCloseout?: MarketOrderPositionCloseout

  /**
   * Details of the Margin Closeout that this Market Order was created for
   */

  marginCloseout?: MarketOrderMarginCloseout

  /**
   * Details of the delayed Trade close that this Market Order was created for
   */

  delayedTradeClose?: MarketOrderDelayedTradeClose

  /**
   * The reason that the Market Order was created
   */

  reason?: MarketOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is
   * being created with client extensions).
   */

  clientExtensions?: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  takeProfitOnFill?: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  stopLossOnFill?: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created
   * for a Trade that is opened when the Order is filled (if such a Trade is
   * created).
   */

  trailingStopLossOnFill?: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created).  Do not set, modify, delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: ClientExtensions
}

/**
 * A MarketOrderRejectTransaction represents the rejection of the creation of a Market Order. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface MarketOrderRejectTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'MARKET_ORDER_REJECT' in a
   * MarketOrderRejectTransaction.
   */

  type?: TransactionType /* default=MARKET_ORDER_REJECT */

  /**
   * The Market Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Market Order. A positive
   * number of units results in a long Order, and a negative number of units
   * results in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The time-in-force requested for the Market Order. Restricted to FOK or
   * IOC for a MarketOrder.
   */

  timeInForce: order.TimeInForce /* default=FOK */

  /**
   * The worst price that the client is willing to have the Market Order
   * filled at.
   */

  priceBound?: pricingCommon.PriceValue

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: order.OrderPositionFill /* default=DEFAULT */

  /**
   * Details of the Trade requested to be closed, only provided when the
   * Market Order is being used to explicitly close a Trade.
   */

  tradeClose?: MarketOrderTradeClose

  /**
   * Details of the long Position requested to be closed out, only provided
   * when a Market Order is being used to explicitly closeout a long Position.
   */

  longPositionCloseout?: MarketOrderPositionCloseout

  /**
   * Details of the short Position requested to be closed out, only provided
   * when a Market Order is being used to explicitly closeout a short
   * Position.
   */

  shortPositionCloseout?: MarketOrderPositionCloseout

  /**
   * Details of the Margin Closeout that this Market Order was created for
   */

  marginCloseout?: MarketOrderMarginCloseout

  /**
   * Details of the delayed Trade close that this Market Order was created for
   */

  delayedTradeClose?: MarketOrderDelayedTradeClose

  /**
   * The reason that the Market Order was created
   */

  reason?: MarketOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is
   * being created with client extensions).
   */

  clientExtensions?: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  takeProfitOnFill?: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  stopLossOnFill?: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created
   * for a Trade that is opened when the Order is filled (if such a Trade is
   * created).
   */

  trailingStopLossOnFill?: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created).  Do not set, modify, delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: ClientExtensions

  /**
   * The reason that the Reject Transaction was created
   */

  rejectReason?: TransactionRejectReason
}

/**
 * A FixedPriceOrderTransaction represents the creation of a Fixed Price Order in the user’s account. A Fixed Price Order is an Order that is filled immediately at a specified price. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface FixedPriceOrderTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'FIXED_PRICE_ORDER' in a
   * FixedPriceOrderTransaction.
   */

  type?: TransactionType /* default=FIXED_PRICE_ORDER */

  /**
   * The Fixed Price Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Fixed Price Order. A positive
   * number of units results in a long Order, and a negative number of units
   * results in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The price specified for the Fixed Price Order. This price is the exact
   * price that the Fixed Price Order will be filled at.
   */

  price: pricingCommon.PriceValue

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: order.OrderPositionFill /* default=DEFAULT */

  /**
   * The state that the trade resulting from the Fixed Price Order should be
   * set to.
   */

  tradeState: string

  /**
   * The reason that the Fixed Price Order was created
   */

  reason?: FixedPriceOrderReason

  /**
   * The client extensions for the Fixed Price Order.
   */

  clientExtensions?: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  takeProfitOnFill?: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  stopLossOnFill?: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created
   * for a Trade that is opened when the Order is filled (if such a Trade is
   * created).
   */

  trailingStopLossOnFill?: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created).  Do not set, modify, delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: ClientExtensions
}

/**
 * A LimitOrderTransaction represents the creation of a Limit Order in the user’s Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface LimitOrderTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'LIMIT_ORDER' in a
   * LimitOrderTransaction.
   */

  type?: TransactionType /* default=LIMIT_ORDER */

  /**
   * The Limit Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Limit Order. A positive number
   * of units results in a long Order, and a negative number of units results
   * in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The price threshold specified for the Limit Order. The Limit Order will
   * only be filled by a market price that is equal to or better than this
   * price.
   */

  price: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the Limit Order.
   */

  timeInForce: order.TimeInForce /* default=GTC */

  /**
   * The date/time when the Limit Order will be cancelled if its timeInForce
   * is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: order.OrderPositionFill /* default=DEFAULT */

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: order.OrderTriggerCondition /* default=DEFAULT */

  /**
   * The reason that the Limit Order was initiated
   */

  reason?: LimitOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is
   * being created with client extensions).
   */

  clientExtensions?: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  takeProfitOnFill?: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  stopLossOnFill?: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created
   * for a Trade that is opened when the Order is filled (if such a Trade is
   * created).
   */

  trailingStopLossOnFill?: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created).  Do not set, modify, delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: ClientExtensions

  /**
   * The ID of the Order that this Order replaces (only provided if this Order
   * replaces an existing Order).
   */

  replacesOrderID?: order.OrderID

  /**
   * The ID of the Transaction that cancels the replaced Order (only provided
   * if this Order replaces an existing Order).
   */

  cancellingTransactionID?: TransactionID
}

/**
 * A LimitOrderRejectTransaction represents the rejection of the creation of a Limit Order. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface LimitOrderRejectTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'LIMIT_ORDER_REJECT' in a
   * LimitOrderRejectTransaction.
   */

  type?: TransactionType /* default=LIMIT_ORDER_REJECT */

  /**
   * The Limit Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Limit Order. A positive number
   * of units results in a long Order, and a negative number of units results
   * in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The price threshold specified for the Limit Order. The Limit Order will
   * only be filled by a market price that is equal to or better than this
   * price.
   */

  price: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the Limit Order.
   */

  timeInForce: order.TimeInForce /* default=GTC */

  /**
   * The date/time when the Limit Order will be cancelled if its timeInForce
   * is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: order.OrderPositionFill /* default=DEFAULT */

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: order.OrderTriggerCondition /* default=DEFAULT */

  /**
   * The reason that the Limit Order was initiated
   */

  reason?: LimitOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is
   * being created with client extensions).
   */

  clientExtensions?: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  takeProfitOnFill?: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  stopLossOnFill?: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created
   * for a Trade that is opened when the Order is filled (if such a Trade is
   * created).
   */

  trailingStopLossOnFill?: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created).  Do not set, modify, delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: ClientExtensions

  /**
   * The ID of the Order that this Order was intended to replace (only
   * provided if this Order was intended to replace an existing Order).
   */

  intendedReplacesOrderID?: order.OrderID

  /**
   * The reason that the Reject Transaction was created
   */

  rejectReason?: TransactionRejectReason
}

/**
 * A StopOrderTransaction represents the creation of a Stop Order in the user’s Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface StopOrderTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'STOP_ORDER' in a
   * StopOrderTransaction.
   */

  type?: TransactionType /* default=STOP_ORDER */

  /**
   * The Stop Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Stop Order. A positive number
   * of units results in a long Order, and a negative number of units results
   * in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The price threshold specified for the Stop Order. The Stop Order will
   * only be filled by a market price that is equal to or worse than this
   * price.
   */

  price: pricingCommon.PriceValue

  /**
   * The worst market price that may be used to fill this Stop Order. If the
   * market gaps and crosses through both the price and the priceBound, the
   * Stop Order will be cancelled instead of being filled.
   */

  priceBound?: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the Stop Order.
   */

  timeInForce: order.TimeInForce /* default=GTC */

  /**
   * The date/time when the Stop Order will be cancelled if its timeInForce is
   * 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: order.OrderPositionFill /* default=DEFAULT */

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: order.OrderTriggerCondition /* default=DEFAULT */

  /**
   * The reason that the Stop Order was initiated
   */

  reason?: StopOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is
   * being created with client extensions).
   */

  clientExtensions?: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  takeProfitOnFill?: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  stopLossOnFill?: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created
   * for a Trade that is opened when the Order is filled (if such a Trade is
   * created).
   */

  trailingStopLossOnFill?: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created).  Do not set, modify, delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: ClientExtensions

  /**
   * The ID of the Order that this Order replaces (only provided if this Order
   * replaces an existing Order).
   */

  replacesOrderID?: order.OrderID

  /**
   * The ID of the Transaction that cancels the replaced Order (only provided
   * if this Order replaces an existing Order).
   */

  cancellingTransactionID?: TransactionID
}

/**
 * A StopOrderRejectTransaction represents the rejection of the creation of a Stop Order. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface StopOrderRejectTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'STOP_ORDER_REJECT' in a
   * StopOrderRejectTransaction.
   */

  type?: TransactionType /* default=STOP_ORDER_REJECT */

  /**
   * The Stop Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Stop Order. A positive number
   * of units results in a long Order, and a negative number of units results
   * in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The price threshold specified for the Stop Order. The Stop Order will
   * only be filled by a market price that is equal to or worse than this
   * price.
   */

  price: pricingCommon.PriceValue

  /**
   * The worst market price that may be used to fill this Stop Order. If the
   * market gaps and crosses through both the price and the priceBound, the
   * Stop Order will be cancelled instead of being filled.
   */

  priceBound?: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the Stop Order.
   */

  timeInForce: order.TimeInForce /* default=GTC */

  /**
   * The date/time when the Stop Order will be cancelled if its timeInForce is
   * 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: order.OrderPositionFill /* default=DEFAULT */

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: order.OrderTriggerCondition /* default=DEFAULT */

  /**
   * The reason that the Stop Order was initiated
   */

  reason?: StopOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is
   * being created with client extensions).
   */

  clientExtensions?: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  takeProfitOnFill?: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  stopLossOnFill?: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created
   * for a Trade that is opened when the Order is filled (if such a Trade is
   * created).
   */

  trailingStopLossOnFill?: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created).  Do not set, modify, delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: ClientExtensions

  /**
   * The ID of the Order that this Order was intended to replace (only
   * provided if this Order was intended to replace an existing Order).
   */

  intendedReplacesOrderID?: order.OrderID

  /**
   * The reason that the Reject Transaction was created
   */

  rejectReason?: TransactionRejectReason
}

/**
 * A MarketIfTouchedOrderTransaction represents the creation of a MarketIfTouched Order in the user’s Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface MarketIfTouchedOrderTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'MARKET_IF_TOUCHED_ORDER' in a
   * MarketIfTouchedOrderTransaction.
   */

  type?: TransactionType /* default=MARKET_IF_TOUCHED_ORDER */

  /**
   * The MarketIfTouched Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the MarketIfTouched Order. A
   * positive number of units results in a long Order, and a negative number
   * of units results in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The price threshold specified for the MarketIfTouched Order. The
   * MarketIfTouched Order will only be filled by a market price that crosses
   * this price from the direction of the market price at the time when the
   * Order was created (the initialMarketPrice). Depending on the value of the
   * Order's price and initialMarketPrice, the MarketIfTouchedOrder will
   * behave like a Limit or a Stop Order.
   */

  price: pricingCommon.PriceValue

  /**
   * The worst market price that may be used to fill this MarketIfTouched
   * Order.
   */

  priceBound?: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the MarketIfTouched Order. Restricted to
   * 'GTC', 'GFD' and 'GTD' for MarketIfTouched Orders.
   */

  timeInForce: order.TimeInForce /* default=GTC */

  /**
   * The date/time when the MarketIfTouched Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: order.OrderPositionFill /* default=DEFAULT */

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: order.OrderTriggerCondition /* default=DEFAULT */

  /**
   * The reason that the Market-if-touched Order was initiated
   */

  reason?: MarketIfTouchedOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is
   * being created with client extensions).
   */

  clientExtensions?: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  takeProfitOnFill?: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  stopLossOnFill?: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created
   * for a Trade that is opened when the Order is filled (if such a Trade is
   * created).
   */

  trailingStopLossOnFill?: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created).  Do not set, modify, delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: ClientExtensions

  /**
   * The ID of the Order that this Order replaces (only provided if this Order
   * replaces an existing Order).
   */

  replacesOrderID?: order.OrderID

  /**
   * The ID of the Transaction that cancels the replaced Order (only provided
   * if this Order replaces an existing Order).
   */

  cancellingTransactionID?: TransactionID
}

/**
 * A MarketIfTouchedOrderRejectTransaction represents the rejection of the creation of a MarketIfTouched Order. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface MarketIfTouchedOrderRejectTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to
   * 'MARKET_IF_TOUCHED_ORDER_REJECT' in a
   * MarketIfTouchedOrderRejectTransaction.
   */

  type?: TransactionType /* default=MARKET_IF_TOUCHED_ORDER_REJECT */

  /**
   * The MarketIfTouched Order's Instrument.
   */

  instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the MarketIfTouched Order. A
   * positive number of units results in a long Order, and a negative number
   * of units results in a short Order.
   */

  units: primitives.DecimalNumber

  /**
   * The price threshold specified for the MarketIfTouched Order. The
   * MarketIfTouched Order will only be filled by a market price that crosses
   * this price from the direction of the market price at the time when the
   * Order was created (the initialMarketPrice). Depending on the value of the
   * Order's price and initialMarketPrice, the MarketIfTouchedOrder will
   * behave like a Limit or a Stop Order.
   */

  price: pricingCommon.PriceValue

  /**
   * The worst market price that may be used to fill this MarketIfTouched
   * Order.
   */

  priceBound?: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the MarketIfTouched Order. Restricted to
   * 'GTC', 'GFD' and 'GTD' for MarketIfTouched Orders.
   */

  timeInForce: order.TimeInForce /* default=GTC */

  /**
   * The date/time when the MarketIfTouched Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order
   * is filled.
   */

  positionFill: order.OrderPositionFill /* default=DEFAULT */

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: order.OrderTriggerCondition /* default=DEFAULT */

  /**
   * The reason that the Market-if-touched Order was initiated
   */

  reason?: MarketIfTouchedOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is
   * being created with client extensions).
   */

  clientExtensions?: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  takeProfitOnFill?: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a
   * Trade opened when the Order is filled (if such a Trade is created).
   */

  stopLossOnFill?: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created
   * for a Trade that is opened when the Order is filled (if such a Trade is
   * created).
   */

  trailingStopLossOnFill?: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled
   * (if such a Trade is created).  Do not set, modify, delete
   * tradeClientExtensions if your account is associated with MT4.
   */

  tradeClientExtensions?: ClientExtensions

  /**
   * The ID of the Order that this Order was intended to replace (only
   * provided if this Order was intended to replace an existing Order).
   */

  intendedReplacesOrderID?: order.OrderID

  /**
   * The reason that the Reject Transaction was created
   */

  rejectReason?: TransactionRejectReason
}

/**
 * A TakeProfitOrderTransaction represents the creation of a TakeProfit Order in the user’s Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface TakeProfitOrderTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'TAKE_PROFIT_ORDER' in a
   * TakeProfitOrderTransaction.
   */

  type?: TransactionType /* default=TAKE_PROFIT_ORDER */

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */

  tradeID: trade.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is
   * breached.
   */

  clientTradeID?: ClientID

  /**
   * The price threshold specified for the TakeProfit Order. The associated
   * Trade will be closed by a market price that is equal to or better than
   * this threshold.
   */

  price: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the TakeProfit Order. Restricted to
   * 'GTC', 'GFD' and 'GTD' for TakeProfit Orders.
   */

  timeInForce: order.TimeInForce /* default=GTC */

  /**
   * The date/time when the TakeProfit Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: order.OrderTriggerCondition /* default=DEFAULT */

  /**
   * The reason that the Take Profit Order was initiated
   */

  reason?: TakeProfitOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is
   * being created with client extensions).
   */

  clientExtensions?: ClientExtensions

  /**
   * The ID of the OrderFill Transaction that caused this Order to be created
   * (only provided if this Order was created automatically when another Order
   * was filled).
   */

  orderFillTransactionID?: TransactionID

  /**
   * The ID of the Order that this Order replaces (only provided if this Order
   * replaces an existing Order).
   */

  replacesOrderID?: order.OrderID

  /**
   * The ID of the Transaction that cancels the replaced Order (only provided
   * if this Order replaces an existing Order).
   */

  cancellingTransactionID?: TransactionID
}

/**
 * A TakeProfitOrderRejectTransaction represents the rejection of the creation of a TakeProfit Order. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface TakeProfitOrderRejectTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'TAKE_PROFIT_ORDER_REJECT' in
   * a TakeProfitOrderRejectTransaction.
   */

  type?: TransactionType /* default=TAKE_PROFIT_ORDER_REJECT */

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */

  tradeID: trade.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is
   * breached.
   */

  clientTradeID?: ClientID

  /**
   * The price threshold specified for the TakeProfit Order. The associated
   * Trade will be closed by a market price that is equal to or better than
   * this threshold.
   */

  price: pricingCommon.PriceValue

  /**
   * The time-in-force requested for the TakeProfit Order. Restricted to
   * 'GTC', 'GFD' and 'GTD' for TakeProfit Orders.
   */

  timeInForce: order.TimeInForce /* default=GTC */

  /**
   * The date/time when the TakeProfit Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: order.OrderTriggerCondition /* default=DEFAULT */

  /**
   * The reason that the Take Profit Order was initiated
   */

  reason?: TakeProfitOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is
   * being created with client extensions).
   */

  clientExtensions?: ClientExtensions

  /**
   * The ID of the OrderFill Transaction that caused this Order to be created
   * (only provided if this Order was created automatically when another Order
   * was filled).
   */

  orderFillTransactionID?: TransactionID

  /**
   * The ID of the Order that this Order was intended to replace (only
   * provided if this Order was intended to replace an existing Order).
   */

  intendedReplacesOrderID?: order.OrderID

  /**
   * The reason that the Reject Transaction was created
   */

  rejectReason?: TransactionRejectReason
}

/**
 * A StopLossOrderTransaction represents the creation of a StopLoss Order in the user’s Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface StopLossOrderTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'STOP_LOSS_ORDER' in a
   * StopLossOrderTransaction.
   */

  type?: TransactionType /* default=STOP_LOSS_ORDER */

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */

  tradeID: trade.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is
   * breached.
   */

  clientTradeID?: ClientID

  /**
   * The price threshold specified for the Stop Loss Order. The associated
   * Trade will be closed by a market price that is equal to or worse than
   * this threshold.
   */

  price: pricingCommon.PriceValue

  /**
   * Specifies the distance (in price units) from the Account's current price
   * to use as the Stop Loss Order price. If the Trade is short the
   * Instrument's bid price is used, and for long Trades the ask is used.
   */

  distance?: primitives.DecimalNumber

  /**
   * The time-in-force requested for the StopLoss Order. Restricted to 'GTC',
   * 'GFD' and 'GTD' for StopLoss Orders.
   */

  timeInForce: order.TimeInForce /* default=GTC */

  /**
   * The date/time when the StopLoss Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: order.OrderTriggerCondition /* default=DEFAULT */

  /**
   * Flag indicating that the Stop Loss Order is guaranteed. The default value
   * depends on the GuaranteedStopLossOrderMode of the account, if it is
   * REQUIRED, the default will be true, for DISABLED or ENABLED the default
   * is false.
   *
   *
   * <b>Deprecated</b>: Will be removed in a future API update.
   */

  guaranteed?: boolean

  /**
   * The fee that will be charged if the Stop Loss Order is guaranteed and the
   * Order is filled at the guaranteed price. The value is determined at Order
   * creation time. It is in price units and is charged for each unit of the
   * Trade.
   *
   *
   * <b>Deprecated</b>: Will be removed in a future API update.
   */

  guaranteedExecutionPremium?: primitives.DecimalNumber

  /**
   * The reason that the Stop Loss Order was initiated
   */

  reason?: StopLossOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is
   * being created with client extensions).
   */

  clientExtensions?: ClientExtensions

  /**
   * The ID of the OrderFill Transaction that caused this Order to be created
   * (only provided if this Order was created automatically when another Order
   * was filled).
   */

  orderFillTransactionID?: TransactionID

  /**
   * The ID of the Order that this Order replaces (only provided if this Order
   * replaces an existing Order).
   */

  replacesOrderID?: order.OrderID

  /**
   * The ID of the Transaction that cancels the replaced Order (only provided
   * if this Order replaces an existing Order).
   */

  cancellingTransactionID?: TransactionID
}

/**
 * A StopLossOrderRejectTransaction represents the rejection of the creation of a StopLoss Order. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface StopLossOrderRejectTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'STOP_LOSS_ORDER_REJECT' in a
   * StopLossOrderRejectTransaction.
   */

  type?: TransactionType /* default=STOP_LOSS_ORDER_REJECT */

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */

  tradeID: trade.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is
   * breached.
   */

  clientTradeID?: ClientID

  /**
   * The price threshold specified for the Stop Loss Order. The associated
   * Trade will be closed by a market price that is equal to or worse than
   * this threshold.
   */

  price: pricingCommon.PriceValue

  /**
   * Specifies the distance (in price units) from the Account's current price
   * to use as the Stop Loss Order price. If the Trade is short the
   * Instrument's bid price is used, and for long Trades the ask is used.
   */

  distance?: primitives.DecimalNumber

  /**
   * The time-in-force requested for the StopLoss Order. Restricted to 'GTC',
   * 'GFD' and 'GTD' for StopLoss Orders.
   */

  timeInForce: order.TimeInForce /* default=GTC */

  /**
   * The date/time when the StopLoss Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: order.OrderTriggerCondition /* default=DEFAULT */

  /**
   * Flag indicating that the Stop Loss Order is guaranteed. The default value
   * depends on the GuaranteedStopLossOrderMode of the account, if it is
   * REQUIRED, the default will be true, for DISABLED or ENABLED the default
   * is false.
   *
   *
   * <b>Deprecated</b>: Will be removed in a future API update.
   */

  guaranteed?: boolean

  /**
   * The reason that the Stop Loss Order was initiated
   */

  reason?: StopLossOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is
   * being created with client extensions).
   */

  clientExtensions?: ClientExtensions

  /**
   * The ID of the OrderFill Transaction that caused this Order to be created
   * (only provided if this Order was created automatically when another Order
   * was filled).
   */

  orderFillTransactionID?: TransactionID

  /**
   * The ID of the Order that this Order was intended to replace (only
   * provided if this Order was intended to replace an existing Order).
   */

  intendedReplacesOrderID?: order.OrderID

  /**
   * The reason that the Reject Transaction was created
   */

  rejectReason?: TransactionRejectReason
}

/**
 * A TrailingStopLossOrderTransaction represents the creation of a TrailingStopLoss Order in the user’s Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface TrailingStopLossOrderTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'TRAILING_STOP_LOSS_ORDER' in
   * a TrailingStopLossOrderTransaction.
   */

  type?: TransactionType /* default=TRAILING_STOP_LOSS_ORDER */

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */

  tradeID: trade.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is
   * breached.
   */

  clientTradeID?: ClientID

  /**
   * The price distance (in price units) specified for the TrailingStopLoss
   * Order.
   */

  distance: primitives.DecimalNumber

  /**
   * The time-in-force requested for the TrailingStopLoss Order. Restricted to
   * 'GTC', 'GFD' and 'GTD' for TrailingStopLoss Orders.
   */

  timeInForce: order.TimeInForce /* default=GTC */

  /**
   * The date/time when the StopLoss Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: order.OrderTriggerCondition /* default=DEFAULT */

  /**
   * The reason that the Trailing Stop Loss Order was initiated
   */

  reason?: TrailingStopLossOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is
   * being created with client extensions).
   */

  clientExtensions?: ClientExtensions

  /**
   * The ID of the OrderFill Transaction that caused this Order to be created
   * (only provided if this Order was created automatically when another Order
   * was filled).
   */

  orderFillTransactionID?: TransactionID

  /**
   * The ID of the Order that this Order replaces (only provided if this Order
   * replaces an existing Order).
   */

  replacesOrderID?: order.OrderID

  /**
   * The ID of the Transaction that cancels the replaced Order (only provided
   * if this Order replaces an existing Order).
   */

  cancellingTransactionID?: TransactionID
}

/**
 * A TrailingStopLossOrderRejectTransaction represents the rejection of the creation of a TrailingStopLoss Order. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface TrailingStopLossOrderRejectTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to
   * 'TRAILING_STOP_LOSS_ORDER_REJECT' in a
   * TrailingStopLossOrderRejectTransaction.
   */

  type?: TransactionType /* default=TRAILING_STOP_LOSS_ORDER_REJECT */

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */

  tradeID: trade.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is
   * breached.
   */

  clientTradeID?: ClientID

  /**
   * The price distance (in price units) specified for the TrailingStopLoss
   * Order.
   */

  distance: primitives.DecimalNumber

  /**
   * The time-in-force requested for the TrailingStopLoss Order. Restricted to
   * 'GTC', 'GFD' and 'GTD' for TrailingStopLoss Orders.
   */

  timeInForce: order.TimeInForce /* default=GTC */

  /**
   * The date/time when the StopLoss Order will be cancelled if its
   * timeInForce is 'GTD'.
   */

  gtdTime?: primitives.DateTime

  /**
   * Specification of which price component should be used when determining if
   * an Order should be triggered and filled. This allows Orders to be
   * triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
   * or inverse (ask for sell, bid for buy) price depending on the desired
   * behaviour. Orders are always filled using their default price component.
   * This feature is only provided through the REST API. Clients who choose to
   * specify a non-default trigger condition will not see it reflected in any
   * of OANDA's proprietary or partner trading platforms, their transaction
   * history or their account statements. OANDA platforms always assume that
   * an Order's trigger condition is set to the default value when indicating
   * the distance from an Order's trigger price, and will always provide the
   * default trigger condition when creating or modifying an Order. A special
   * restriction applies when creating a guaranteed Stop Loss Order. In this
   * case the TriggerCondition value must either be 'DEFAULT', or the
   * 'natural' trigger side 'DEFAULT' results in. So for a Stop Loss Order for
   * a long trade valid values are 'DEFAULT' and 'BID', and for short trades
   * 'DEFAULT' and 'ASK' are valid.
   */

  triggerCondition: order.OrderTriggerCondition /* default=DEFAULT */

  /**
   * The reason that the Trailing Stop Loss Order was initiated
   */

  reason?: TrailingStopLossOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is
   * being created with client extensions).
   */

  clientExtensions?: ClientExtensions

  /**
   * The ID of the OrderFill Transaction that caused this Order to be created
   * (only provided if this Order was created automatically when another Order
   * was filled).
   */

  orderFillTransactionID?: TransactionID

  /**
   * The ID of the Order that this Order was intended to replace (only
   * provided if this Order was intended to replace an existing Order).
   */

  intendedReplacesOrderID?: order.OrderID

  /**
   * The reason that the Reject Transaction was created
   */

  rejectReason?: TransactionRejectReason
}

/**
 * An OrderFillTransaction represents the filling of an Order in the client’s Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface OrderFillTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'ORDER_FILL' for an
   * OrderFillTransaction.
   */

  type?: TransactionType /* default=ORDER_FILL */

  /**
   * The ID of the Order filled.
   */

  orderID?: order.OrderID

  /**
   * The client Order ID of the Order filled (only provided if the client has
   * assigned one).
   */

  clientOrderID?: ClientID

  /**
   * The name of the filled Order's instrument.
   */

  instrument?: primitives.InstrumentName

  /**
   * The number of units filled by the OrderFill.
   */

  units?: primitives.DecimalNumber

  /**
   * This is the conversion factor in effect for the Account at the time of
   * the OrderFill for converting any gains realized in Instrument quote units
   * into units of the Account's home currency.
   */

  gainQuoteHomeConversionFactor?: primitives.DecimalNumber

  /**
   * This is the conversion factor in effect for the Account at the time of
   * the OrderFill for converting any losses realized in Instrument quote
   * units into units of the Account's home currency.
   */

  lossQuoteHomeConversionFactor?: primitives.DecimalNumber

  /**
   * This field is now deprecated and should no longer be used. The individual
   * tradesClosed, tradeReduced and tradeOpened fields contain the
   * exact/official price each unit was filled at.
   *
   *
   * <b>Deprecated</b>: Will be removed in a future API update.
   */

  price?: pricingCommon.PriceValue

  /**
   * The price that all of the units of the OrderFill should have been filled
   * at, in the absence of guaranteed price execution. This factors in the
   * Account's current ClientPrice, used liquidity and the units of the
   * OrderFill only. If no Trades were closed with their price clamped for
   * guaranteed stop loss enforcement, then this value will match the price
   * fields of each Trade opened, closed, and reduced, and they will all be
   * the exact same.
   */

  fullVWAP?: pricingCommon.PriceValue

  /**
   * The price in effect for the account at the time of the Order fill.
   */

  fullPrice?: pricing.ClientPrice

  /**
   * The reason that an Order was filled
   */

  reason?: OrderFillReason

  /**
   * The profit or loss incurred when the Order was filled.
   */

  pl?: primitives.AccountUnits

  /**
   * The financing paid or collected when the Order was filled.
   */

  financing?: primitives.AccountUnits

  /**
   * The commission charged in the Account's home currency as a result of
   * filling the Order. The commission is always represented as a positive
   * quantity of the Account's home currency, however it reduces the balance
   * in the Account.
   */

  commission?: primitives.AccountUnits

  /**
   * The total guaranteed execution fees charged for all Trades opened, closed
   * or reduced with guaranteed Stop Loss Orders.
   */

  guaranteedExecutionFee?: primitives.AccountUnits

  /**
   * The Account's balance after the Order was filled.
   */

  accountBalance?: primitives.AccountUnits

  /**
   * The Trade that was opened when the Order was filled (only provided if
   * filling the Order resulted in a new Trade).
   */

  tradeOpened?: TradeOpen

  /**
   * The Trades that were closed when the Order was filled (only provided if
   * filling the Order resulted in a closing open Trades).
   */

  tradesClosed?: TradeReduce[]

  /**
   * The Trade that was reduced when the Order was filled (only provided if
   * filling the Order resulted in reducing an open Trade).
   */

  tradeReduced?: TradeReduce

  /**
   * The half spread cost for the OrderFill, which is the sum of the
   * halfSpreadCost values in the tradeOpened, tradesClosed and tradeReduced
   * fields. This can be a positive or negative value and is represented in
   * the home currency of the Account.
   */

  halfSpreadCost?: primitives.AccountUnits
}

/**
 * An OrderCancelTransaction represents the cancellation of an Order in the client’s Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface OrderCancelTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'ORDER_CANCEL' for an
   * OrderCancelTransaction.
   */

  type?: TransactionType /* default=ORDER_CANCEL */

  /**
   * The ID of the Order cancelled
   */

  orderID?: order.OrderID

  /**
   * The client ID of the Order cancelled (only provided if the Order has a
   * client Order ID).
   */

  clientOrderID?: order.OrderID

  /**
   * The reason that the Order was cancelled.
   */

  reason?: OrderCancelReason

  /**
   * The ID of the Order that replaced this Order (only provided if this Order
   * was cancelled for replacement).
   */

  replacedByOrderID?: order.OrderID
}

/**
 * An OrderCancelRejectTransaction represents the rejection of the cancellation of an Order in the client’s Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface OrderCancelRejectTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'ORDER_CANCEL_REJECT' for an
   * OrderCancelRejectTransaction.
   */

  type?: TransactionType /* default=ORDER_CANCEL_REJECT */

  /**
   * The ID of the Order intended to be cancelled
   */

  orderID?: order.OrderID

  /**
   * The client ID of the Order intended to be cancelled (only provided if the
   * Order has a client Order ID).
   */

  clientOrderID?: order.OrderID

  /**
   * The reason that the Reject Transaction was created
   */

  rejectReason?: TransactionRejectReason
}

/**
 * A OrderClientExtensionsModifyTransaction represents the modification of an Order’s Client Extensions. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface OrderClientExtensionsModifyTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to
   * 'ORDER_CLIENT_EXTENSIONS_MODIFY' for a
   * OrderClientExtensionsModifyTransaction.
   */

  type?: TransactionType /* default=ORDER_CLIENT_EXTENSIONS_MODIFY */

  /**
   * The ID of the Order who's client extensions are to be modified.
   */

  orderID?: order.OrderID

  /**
   * The original Client ID of the Order who's client extensions are to be
   * modified.
   */

  clientOrderID?: ClientID

  /**
   * The new Client Extensions for the Order.
   */

  clientExtensionsModify?: ClientExtensions

  /**
   * The new Client Extensions for the Order's Trade on fill.
   */

  tradeClientExtensionsModify?: ClientExtensions
}

/**
 * A OrderClientExtensionsModifyRejectTransaction represents the rejection of the modification of an Order’s Client Extensions. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface OrderClientExtensionsModifyRejectTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to
   * 'ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT' for a
   * OrderClientExtensionsModifyRejectTransaction.
   */

  type?: TransactionType /* default=ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT */

  /**
   * The ID of the Order who's client extensions are to be modified.
   */

  orderID?: order.OrderID

  /**
   * The original Client ID of the Order who's client extensions are to be
   * modified.
   */

  clientOrderID?: ClientID

  /**
   * The new Client Extensions for the Order.
   */

  clientExtensionsModify?: ClientExtensions

  /**
   * The new Client Extensions for the Order's Trade on fill.
   */

  tradeClientExtensionsModify?: ClientExtensions

  /**
   * The reason that the Reject Transaction was created
   */

  rejectReason?: TransactionRejectReason
}

/**
 * A TradeClientExtensionsModifyTransaction represents the modification of a Trade’s Client Extensions. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface TradeClientExtensionsModifyTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to
   * 'TRADE_CLIENT_EXTENSIONS_MODIFY' for a
   * TradeClientExtensionsModifyTransaction.
   */

  type?: TransactionType /* default=TRADE_CLIENT_EXTENSIONS_MODIFY */

  /**
   * The ID of the Trade who's client extensions are to be modified.
   */

  tradeID?: trade.TradeID

  /**
   * The original Client ID of the Trade who's client extensions are to be
   * modified.
   */

  clientTradeID?: ClientID

  /**
   * The new Client Extensions for the Trade.
   */

  tradeClientExtensionsModify?: ClientExtensions
}

/**
 * A TradeClientExtensionsModifyRejectTransaction represents the rejection of the modification of a Trade’s Client Extensions. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface TradeClientExtensionsModifyRejectTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to
   * 'TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT' for a
   * TradeClientExtensionsModifyRejectTransaction.
   */

  type?: TransactionType /* default=TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT */

  /**
   * The ID of the Trade who's client extensions are to be modified.
   */

  tradeID?: trade.TradeID

  /**
   * The original Client ID of the Trade who's client extensions are to be
   * modified.
   */

  clientTradeID?: ClientID

  /**
   * The new Client Extensions for the Trade.
   */

  tradeClientExtensionsModify?: ClientExtensions

  /**
   * The reason that the Reject Transaction was created
   */

  rejectReason?: TransactionRejectReason
}

/**
 * A MarginCallEnterTransaction is created when an Account enters the margin call state. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface MarginCallEnterTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'MARGIN_CALL_ENTER' for an
   * MarginCallEnterTransaction.
   */

  type?: TransactionType /* default=MARGIN_CALL_ENTER */
}

/**
 * A MarginCallExtendTransaction is created when the margin call state for an Account has been extended. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface MarginCallExtendTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'MARGIN_CALL_EXTEND' for an
   * MarginCallExtendTransaction.
   */

  type?: TransactionType /* default=MARGIN_CALL_EXTEND */

  /**
   * The number of the extensions to the Account's current margin call that
   * have been applied. This value will be set to 1 for the first
   * MarginCallExtend Transaction
   */

  extensionNumber?: number
}

/**
 * A MarginCallExitTransaction is created when an Account leaves the margin call state. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface MarginCallExitTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'MARGIN_CALL_EXIT' for an
   * MarginCallExitTransaction.
   */

  type?: TransactionType /* default=MARGIN_CALL_EXIT */
}

/**
 * A DelayedTradeClosure Transaction is created administratively to indicate open trades that should have been closed but weren’t because the open trades’ instruments were untradeable at the time. Open trades listed in this transaction will be closed once their respective instruments become tradeable. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface DelayedTradeClosureTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'DELAYED_TRADE_CLOSURE' for an
   * DelayedTradeClosureTransaction.
   */

  type?: TransactionType /* default=DELAYED_TRADE_CLOSURE */

  /**
   * The reason for the delayed trade closure
   */

  reason?: MarketOrderReason

  /**
   * List of Trade ID's identifying the open trades that will be closed when
   * their respective instruments become tradeable
   */

  tradeIDs?: trade.TradeID
}

/**
 * A DailyFinancingTransaction represents the daily payment/collection of financing for an Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface DailyFinancingTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'DAILY_FINANCING' for a
   * DailyFinancingTransaction.
   */

  type?: TransactionType /* default=DAILY_FINANCING */

  /**
   * The amount of financing paid/collected for the Account.
   */

  financing?: primitives.AccountUnits

  /**
   * The Account's balance after daily financing.
   */

  accountBalance?: primitives.AccountUnits

  /**
   * The account financing mode at the time of the daily financing. This field
   * is no longer in use moving forward and was replaced by
   * accountFinancingMode in individual positionFinancings since the financing
   * mode could differ between instruments.
   *
   *
   * <b>Deprecated</b>: Will be removed in a future API update.
   */

  accountFinancingMode?: account.AccountFinancingMode

  /**
   * The financing paid/collected for each Position in the Account.
   */

  positionFinancings?: PositionFinancing[]
}

/**
 * A DividendAdjustment Transaction is created administratively to pay or collect dividend adjustment mounts to or from an Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface DividendAdjustmentTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'DIVIDEND_ADJUSTMENT' for a
   * DividendAdjustmentTransaction.
   */

  type?: TransactionType /* default=DIVIDEND_ADJUSTMENT */

  /**
   * The name of the instrument for the dividendAdjustment transaction
   */

  instrument?: primitives.InstrumentName

  /**
   * The total dividend adjustment amount paid or collected in the Account's
   * home currency for the Account as a result of applying the
   * DividendAdjustment Transaction. This is the sum of the dividend
   * adjustments paid/collected for each OpenTradeDividendAdjustment found
   * within the Transaction.
   */

  dividendAdjustment?: primitives.AccountUnits

  /**
   * The Account balance after applying the DividendAdjustment Transaction
   */

  accountBalance?: primitives.AccountUnits

  /**
   * The dividend adjustment payment/collection details for each open Trade,
   * within the Account, for which a dividend adjustment is to be paid or
   * collected.
   */

  openTradeDividendAdjustments?: OpenTradeDividendAdjustment[]
}

/**
 * A ResetResettablePLTransaction represents the resetting of the Account’s resettable PL counters. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface ResetResettablePLTransaction {
  /**
   * The Transaction's Identifier.
   */

  id?: TransactionID

  /**
   * The date/time when the Transaction was created.
   */

  time?: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */

  userID?: number

  /**
   * The ID of the Account the Transaction was created for.
   */

  accountID?: account.AccountID

  /**
   * The ID of the 'batch' that the Transaction belongs to. Transactions in
   * the same batch are applied to the Account simultaneously.
   */

  batchID?: TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */

  requestID?: RequestID

  /**
   * The Type of the Transaction. Always set to 'RESET_RESETTABLE_PL' for a
   * ResetResettablePLTransaction.
   */

  type?: TransactionType /* default=RESET_RESETTABLE_PL */
}

/**
 * The unique Transaction identifier within each Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export type TransactionID = string

/**
 * The possible types of a Transaction https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum TransactionType {
  /**
   * Account Create Transaction
   */
  'CREATE' = 'CREATE',

  /**
   * Account Close Transaction
   */
  'CLOSE' = 'CLOSE',

  /**
   * Account Reopen Transaction
   */
  'REOPEN' = 'REOPEN',

  /**
   * Client Configuration Transaction
   */
  'CLIENT_CONFIGURE' = 'CLIENT_CONFIGURE',

  /**
   * Client Configuration Reject Transaction
   */
  'CLIENT_CONFIGURE_REJECT' = 'CLIENT_CONFIGURE_REJECT',

  /**
   * Transfer Funds Transaction
   */
  'TRANSFER_FUNDS' = 'TRANSFER_FUNDS',

  /**
   * Transfer Funds Reject Transaction
   */
  'TRANSFER_FUNDS_REJECT' = 'TRANSFER_FUNDS_REJECT',

  /**
   * Market Order Transaction
   */
  'MARKET_ORDER' = 'MARKET_ORDER',

  /**
   * Market Order Reject Transaction
   */
  'MARKET_ORDER_REJECT' = 'MARKET_ORDER_REJECT',

  /**
   * Fixed Price Order Transaction
   */
  'FIXED_PRICE_ORDER' = 'FIXED_PRICE_ORDER',

  /**
   * Limit Order Transaction
   */
  'LIMIT_ORDER' = 'LIMIT_ORDER',

  /**
   * Limit Order Reject Transaction
   */
  'LIMIT_ORDER_REJECT' = 'LIMIT_ORDER_REJECT',

  /**
   * Stop Order Transaction
   */
  'STOP_ORDER' = 'STOP_ORDER',

  /**
   * Stop Order Reject Transaction
   */
  'STOP_ORDER_REJECT' = 'STOP_ORDER_REJECT',

  /**
   * Market if Touched Order Transaction
   */
  'MARKET_IF_TOUCHED_ORDER' = 'MARKET_IF_TOUCHED_ORDER',

  /**
   * Market if Touched Order Reject Transaction
   */
  'MARKET_IF_TOUCHED_ORDER_REJECT' = 'MARKET_IF_TOUCHED_ORDER_REJECT',

  /**
   * Take Profit Order Transaction
   */
  'TAKE_PROFIT_ORDER' = 'TAKE_PROFIT_ORDER',

  /**
   * Take Profit Order Reject Transaction
   */
  'TAKE_PROFIT_ORDER_REJECT' = 'TAKE_PROFIT_ORDER_REJECT',

  /**
   * Stop Loss Order Transaction
   */
  'STOP_LOSS_ORDER' = 'STOP_LOSS_ORDER',

  /**
   * Stop Loss Order Reject Transaction
   */
  'STOP_LOSS_ORDER_REJECT' = 'STOP_LOSS_ORDER_REJECT',

  /**
   * Trailing Stop Loss Order Transaction
   */
  'TRAILING_STOP_LOSS_ORDER' = 'TRAILING_STOP_LOSS_ORDER',

  /**
   * Trailing Stop Loss Order Reject Transaction
   */
  'TRAILING_STOP_LOSS_ORDER_REJECT' = 'TRAILING_STOP_LOSS_ORDER_REJECT',

  /**
   * Order Fill Transaction
   */
  'ORDER_FILL' = 'ORDER_FILL',

  /**
   * Order Cancel Transaction
   */
  'ORDER_CANCEL' = 'ORDER_CANCEL',

  /**
   * Order Cancel Reject Transaction
   */
  'ORDER_CANCEL_REJECT' = 'ORDER_CANCEL_REJECT',

  /**
   * Order Client Extensions Modify Transaction
   */
  'ORDER_CLIENT_EXTENSIONS_MODIFY' = 'ORDER_CLIENT_EXTENSIONS_MODIFY',

  /**
   * Order Client Extensions Modify Reject Transaction
   */
  'ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT' = 'ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT',

  /**
   * Trade Client Extensions Modify Transaction
   */
  'TRADE_CLIENT_EXTENSIONS_MODIFY' = 'TRADE_CLIENT_EXTENSIONS_MODIFY',

  /**
   * Trade Client Extensions Modify Reject Transaction
   */
  'TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT' = 'TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT',

  /**
   * Margin Call Enter Transaction
   */
  'MARGIN_CALL_ENTER' = 'MARGIN_CALL_ENTER',

  /**
   * Margin Call Extend Transaction
   */
  'MARGIN_CALL_EXTEND' = 'MARGIN_CALL_EXTEND',

  /**
   * Margin Call Exit Transaction
   */
  'MARGIN_CALL_EXIT' = 'MARGIN_CALL_EXIT',

  /**
   * Delayed Trade Closure Transaction
   */
  'DELAYED_TRADE_CLOSURE' = 'DELAYED_TRADE_CLOSURE',

  /**
   * Daily Financing Transaction
   */
  'DAILY_FINANCING' = 'DAILY_FINANCING',

  /**
   * Dividend Adjustment Transaction
   */
  'DIVIDEND_ADJUSTMENT' = 'DIVIDEND_ADJUSTMENT',

  /**
   * Reset Resettable PL Transaction
   */
  'RESET_RESETTABLE_PL' = 'RESET_RESETTABLE_PL',
}

/**
 * The reason that an Account is being funded. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum FundingReason {
  /**
   * The client has initiated a funds transfer
   */
  'CLIENT_FUNDING' = 'CLIENT_FUNDING',

  /**
   * Funds are being transferred between two Accounts.
   */
  'ACCOUNT_TRANSFER' = 'ACCOUNT_TRANSFER',

  /**
   * Funds are being transferred as part of a Division migration
   */
  'DIVISION_MIGRATION' = 'DIVISION_MIGRATION',

  /**
   * Funds are being transferred as part of a Site migration
   */
  'SITE_MIGRATION' = 'SITE_MIGRATION',

  /**
   * Funds are being transferred as part of an Account adjustment
   */
  'ADJUSTMENT' = 'ADJUSTMENT',
}

/**
 * The reason that the Market Order was created https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum MarketOrderReason {
  /**
   * The Market Order was created at the request of a client
   */
  'CLIENT_ORDER' = 'CLIENT_ORDER',

  /**
   * The Market Order was created to close a Trade at the request of a client
   */
  'TRADE_CLOSE' = 'TRADE_CLOSE',

  /**
   * The Market Order was created to close a Position at the request of a client
   */
  'POSITION_CLOSEOUT' = 'POSITION_CLOSEOUT',

  /**
   * The Market Order was created as part of a Margin Closeout
   */
  'MARGIN_CLOSEOUT' = 'MARGIN_CLOSEOUT',

  /**
   * The Market Order was created to close a trade marked for delayed closure
   */
  'DELAYED_TRADE_CLOSE' = 'DELAYED_TRADE_CLOSE',
}

/**
 * The reason that the Fixed Price Order was created https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum FixedPriceOrderReason {
  /**
   * The Fixed Price Order was created as part of a platform account migration
   */
  'PLATFORM_ACCOUNT_MIGRATION' = 'PLATFORM_ACCOUNT_MIGRATION',

  /**
   * The Fixed Price Order was created to close a Trade as part of division account migration
   */
  'TRADE_CLOSE_DIVISION_ACCOUNT_MIGRATION' = 'TRADE_CLOSE_DIVISION_ACCOUNT_MIGRATION',

  /**
   * The Fixed Price Order was created to close a Trade administratively
   */
  'TRADE_CLOSE_ADMINISTRATIVE_ACTION' = 'TRADE_CLOSE_ADMINISTRATIVE_ACTION',
}

/**
 * The reason that the Limit Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum LimitOrderReason {
  /**
   * The Limit Order was initiated at the request of a client
   */
  'CLIENT_ORDER' = 'CLIENT_ORDER',

  /**
   * The Limit Order was initiated as a replacement for an existing Order
   */
  'REPLACEMENT' = 'REPLACEMENT',
}

/**
 * The reason that the Stop Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum StopOrderReason {
  /**
   * The Stop Order was initiated at the request of a client
   */
  'CLIENT_ORDER' = 'CLIENT_ORDER',

  /**
   * The Stop Order was initiated as a replacement for an existing Order
   */
  'REPLACEMENT' = 'REPLACEMENT',
}

/**
 * The reason that the Market-if-touched Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum MarketIfTouchedOrderReason {
  /**
   * The Market-if-touched Order was initiated at the request of a client
   */
  'CLIENT_ORDER' = 'CLIENT_ORDER',

  /**
   * The Market-if-touched Order was initiated as a replacement for an existing Order
   */
  'REPLACEMENT' = 'REPLACEMENT',
}

/**
 * The reason that the Take Profit Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum TakeProfitOrderReason {
  /**
   * The Take Profit Order was initiated at the request of a client
   */
  'CLIENT_ORDER' = 'CLIENT_ORDER',

  /**
   * The Take Profit Order was initiated as a replacement for an existing Order
   */
  'REPLACEMENT' = 'REPLACEMENT',

  /**
   * The Take Profit Order was initiated automatically when an Order was filled that opened a new Trade requiring a Take Profit Order.
   */
  'ON_FILL' = 'ON_FILL',
}

/**
 * The reason that the Stop Loss Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum StopLossOrderReason {
  /**
   * The Stop Loss Order was initiated at the request of a client
   */
  'CLIENT_ORDER' = 'CLIENT_ORDER',

  /**
   * The Stop Loss Order was initiated as a replacement for an existing Order
   */
  'REPLACEMENT' = 'REPLACEMENT',

  /**
   * The Stop Loss Order was initiated automatically when an Order was filled that opened a new Trade requiring a Stop Loss Order.
   */
  'ON_FILL' = 'ON_FILL',
}

/**
 * The reason that the Trailing Stop Loss Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum TrailingStopLossOrderReason {
  /**
   * The Trailing Stop Loss Order was initiated at the request of a client
   */
  'CLIENT_ORDER' = 'CLIENT_ORDER',

  /**
   * The Trailing Stop Loss Order was initiated as a replacement for an existing Order
   */
  'REPLACEMENT' = 'REPLACEMENT',

  /**
   * The Trailing Stop Loss Order was initiated automatically when an Order was filled that opened a new Trade requiring a Trailing Stop Loss Order.
   */
  'ON_FILL' = 'ON_FILL',
}

/**
 * The reason that an Order was filled https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum OrderFillReason {
  /**
   * The Order filled was a Limit Order
   */
  'LIMIT_ORDER' = 'LIMIT_ORDER',

  /**
   * The Order filled was a Stop Order
   */
  'STOP_ORDER' = 'STOP_ORDER',

  /**
   * The Order filled was a Market-if-touched Order
   */
  'MARKET_IF_TOUCHED_ORDER' = 'MARKET_IF_TOUCHED_ORDER',

  /**
   * The Order filled was a Take Profit Order
   */
  'TAKE_PROFIT_ORDER' = 'TAKE_PROFIT_ORDER',

  /**
   * The Order filled was a Stop Loss Order
   */
  'STOP_LOSS_ORDER' = 'STOP_LOSS_ORDER',

  /**
   * The Order filled was a Trailing Stop Loss Order
   */
  'TRAILING_STOP_LOSS_ORDER' = 'TRAILING_STOP_LOSS_ORDER',

  /**
   * The Order filled was a Market Order
   */
  'MARKET_ORDER' = 'MARKET_ORDER',

  /**
   * The Order filled was a Market Order used to explicitly close a Trade
   */
  'MARKET_ORDER_TRADE_CLOSE' = 'MARKET_ORDER_TRADE_CLOSE',

  /**
   * The Order filled was a Market Order used to explicitly close a Position
   */
  'MARKET_ORDER_POSITION_CLOSEOUT' = 'MARKET_ORDER_POSITION_CLOSEOUT',

  /**
   * The Order filled was a Market Order used for a Margin Closeout
   */
  'MARKET_ORDER_MARGIN_CLOSEOUT' = 'MARKET_ORDER_MARGIN_CLOSEOUT',

  /**
   * The Order filled was a Market Order used for a delayed Trade close
   */
  'MARKET_ORDER_DELAYED_TRADE_CLOSE' = 'MARKET_ORDER_DELAYED_TRADE_CLOSE',

  /**
   * The Order filled was a Fixed Price Order
   */
  'FIXED_PRICE_ORDER' = 'FIXED_PRICE_ORDER',

  /**
   * The Order filled was a Fixed Price Order created as part of a platform account migration
   */
  'FIXED_PRICE_ORDER_PLATFORM_ACCOUNT_MIGRATION' = 'FIXED_PRICE_ORDER_PLATFORM_ACCOUNT_MIGRATION',

  /**
   * The Order filled was a Fixed Price Order created to close a Trade as part of division account migration
   */
  'FIXED_PRICE_ORDER_DIVISION_ACCOUNT_MIGRATION' = 'FIXED_PRICE_ORDER_DIVISION_ACCOUNT_MIGRATION',

  /**
   * The Order filled was a Fixed Price Order created to close a Trade administratively
   */
  'FIXED_PRICE_ORDER_ADMINISTRATIVE_ACTION' = 'FIXED_PRICE_ORDER_ADMINISTRATIVE_ACTION',
}

/**
 * The reason that an Order was cancelled. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum OrderCancelReason {
  /**
   * The Order was cancelled because at the time of filling, an unexpected internal server error occurred.
   */
  'INTERNAL_SERVER_ERROR' = 'INTERNAL_SERVER_ERROR',

  /**
   * The Order was cancelled because at the time of filling the account was locked.
   */
  'ACCOUNT_LOCKED' = 'ACCOUNT_LOCKED',

  /**
   * The order was to be filled, however the account is configured to not allow new positions to be created.
   */
  'ACCOUNT_NEW_POSITIONS_LOCKED' = 'ACCOUNT_NEW_POSITIONS_LOCKED',

  /**
   * Filling the Order wasn’t possible because it required the creation of a dependent Order and the Account is locked for Order creation.
   */
  'ACCOUNT_ORDER_CREATION_LOCKED' = 'ACCOUNT_ORDER_CREATION_LOCKED',

  /**
   * Filling the Order was not possible because the Account is locked for filling Orders.
   */
  'ACCOUNT_ORDER_FILL_LOCKED' = 'ACCOUNT_ORDER_FILL_LOCKED',

  /**
   * The Order was cancelled explicitly at the request of the client.
   */
  'CLIENT_REQUEST' = 'CLIENT_REQUEST',

  /**
   * The Order cancelled because it is being migrated to another account.
   */
  'MIGRATION' = 'MIGRATION',

  /**
   * Filling the Order wasn’t possible because the Order’s instrument was halted.
   */
  'MARKET_HALTED' = 'MARKET_HALTED',

  /**
   * The Order is linked to an open Trade that was closed.
   */
  'LINKED_TRADE_CLOSED' = 'LINKED_TRADE_CLOSED',

  /**
   * The time in force specified for this order has passed.
   */
  'TIME_IN_FORCE_EXPIRED' = 'TIME_IN_FORCE_EXPIRED',

  /**
   * Filling the Order wasn’t possible because the Account had insufficient margin.
   */
  'INSUFFICIENT_MARGIN' = 'INSUFFICIENT_MARGIN',

  /**
   * Filling the Order would have resulted in a a FIFO violation.
   */
  'FIFO_VIOLATION' = 'FIFO_VIOLATION',

  /**
   * Filling the Order would have violated the Order’s price bound.
   */
  'BOUNDS_VIOLATION' = 'BOUNDS_VIOLATION',

  /**
   * The Order was cancelled for replacement at the request of the client.
   */
  'CLIENT_REQUEST_REPLACED' = 'CLIENT_REQUEST_REPLACED',

  /**
   * Filling the Order wasn’t possible because enough liquidity available.
   */
  'INSUFFICIENT_LIQUIDITY' = 'INSUFFICIENT_LIQUIDITY',

  /**
   * Filling the Order would have resulted in the creation of a Take Profit Order with a GTD time in the past.
   */
  'TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST' = 'TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST',

  /**
   * Filling the Order would result in the creation of a Take Profit Order that would have been filled immediately, closing the new Trade at a loss.
   */
  'TAKE_PROFIT_ON_FILL_LOSS' = 'TAKE_PROFIT_ON_FILL_LOSS',

  /**
   * Filling the Order would result in the creation of a Take Profit Loss Order that would close the new Trade at a loss when filled.
   */
  'LOSING_TAKE_PROFIT' = 'LOSING_TAKE_PROFIT',

  /**
   * Filling the Order would have resulted in the creation of a Stop Loss Order with a GTD time in the past.
   */
  'STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST' = 'STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST',

  /**
   * Filling the Order would result in the creation of a Stop Loss Order that would have been filled immediately, closing the new Trade at a loss.
   */
  'STOP_LOSS_ON_FILL_LOSS' = 'STOP_LOSS_ON_FILL_LOSS',

  /**
   * Filling the Order would result in the creation of a Stop Loss Order whose price would be zero or negative due to the specified distance.
   */
  'STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED' = 'STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED',

  /**
   * Filling the Order would not result in the creation of Stop Loss Order, however the Account’s configuration requires that all Trades have a Stop Loss Order attached to them.
   */
  'STOP_LOSS_ON_FILL_REQUIRED' = 'STOP_LOSS_ON_FILL_REQUIRED',

  /**
   * Filling the Order would not result in the creation of a guaranteed Stop Loss Order, however the Account’s configuration requires that all Trades have a guaranteed Stop Loss Order attached to them.
   */
  'STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED' = 'STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED',

  /**
   * Filling the Order would result in the creation of a guaranteed Stop Loss Order, however the Account’s configuration does not allow guaranteed Stop Loss Orders.
   */
  'STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED' = 'STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED',

  /**
   * Filling the Order would result in the creation of a guaranteed Stop Loss Order with a distance smaller than the configured minimum distance.
   */
  'STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET' = 'STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET',

  /**
   * Filling the Order would result in the creation of a guaranteed Stop Loss Order with trigger price and number of units that that violates the account’s guaranteed Stop Loss Order level restriction.
   */
  'STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED' = 'STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED',

  /**
   * Filling the Order would result in the creation of a guaranteed Stop Loss Order for a hedged Trade, however the Account’s configuration does not allow guaranteed Stop Loss Orders for hedged Trades/Positions.
   */
  'STOP_LOSS_ON_FILL_GUARANTEED_HEDGING_NOT_ALLOWED' = 'STOP_LOSS_ON_FILL_GUARANTEED_HEDGING_NOT_ALLOWED',

  /**
   * Filling the Order would result in the creation of a Stop Loss Order whose TimeInForce value is invalid. A likely cause would be if the Account requires guaranteed stop loss orders and the TimeInForce value were not GTC.
   */
  'STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID' = 'STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID',

  /**
   * Filling the Order would result in the creation of a Stop Loss Order whose TriggerCondition value is invalid. A likely cause would be if the stop loss order is guaranteed and the TimeInForce is not TRIGGER_DEFAULT or TRIGGER_BID for a long trade, or not TRIGGER_DEFAULT or TRIGGER_ASK for a short trade.
   */
  'STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID' = 'STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID',

  /**
   * Filling the Order would result in the creation of a Take Profit Order whose price would be zero or negative due to the specified distance.
   */
  'TAKE_PROFIT_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED' = 'TAKE_PROFIT_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED',

  /**
   * Filling the Order would have resulted in the creation of a Trailing Stop Loss Order with a GTD time in the past.
   */
  'TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST' = 'TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST',

  /**
   * Filling the Order would result in the creation of a new Open Trade with a client Trade ID already in use.
   */
  'CLIENT_TRADE_ID_ALREADY_EXISTS' = 'CLIENT_TRADE_ID_ALREADY_EXISTS',

  /**
   * Closing out a position wasn’t fully possible.
   */
  'POSITION_CLOSEOUT_FAILED' = 'POSITION_CLOSEOUT_FAILED',

  /**
   * Filling the Order would cause the maximum open trades allowed for the Account to be exceeded.
   */
  'OPEN_TRADES_ALLOWED_EXCEEDED' = 'OPEN_TRADES_ALLOWED_EXCEEDED',

  /**
   * Filling the Order would have resulted in exceeding the number of pending Orders allowed for the Account.
   */
  'PENDING_ORDERS_ALLOWED_EXCEEDED' = 'PENDING_ORDERS_ALLOWED_EXCEEDED',

  /**
   * Filling the Order would have resulted in the creation of a Take Profit Order with a client Order ID that is already in use.
   */
  'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS' = 'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS',

  /**
   * Filling the Order would have resulted in the creation of a Stop Loss Order with a client Order ID that is already in use.
   */
  'STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS' = 'STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS',

  /**
   * Filling the Order would have resulted in the creation of a Trailing Stop Loss Order with a client Order ID that is already in use.
   */
  'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS' = 'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS',

  /**
   * Filling the Order would have resulted in the Account’s maximum position size limit being exceeded for the Order’s instrument.
   */
  'POSITION_SIZE_EXCEEDED' = 'POSITION_SIZE_EXCEEDED',

  /**
   * Filling the Order would result in the creation of a Trade, however there already exists an opposing (hedged) Trade that has a guaranteed Stop Loss Order attached to it. Guaranteed Stop Loss Orders cannot be combined with hedged positions.
   */
  'HEDGING_GSLO_VIOLATION' = 'HEDGING_GSLO_VIOLATION',

  /**
   * Filling the order would cause the maximum position value allowed for the account to be exceeded. The Order has been cancelled as a result.
   */
  'ACCOUNT_POSITION_VALUE_LIMIT_EXCEEDED' = 'ACCOUNT_POSITION_VALUE_LIMIT_EXCEEDED',

  /**
   * Filling the order would require the creation of a short trade, however the instrument is configured such that orders being filled using bid prices can only reduce existing positions. New short positions cannot be created, but existing long positions may be reduced or closed.
   */
  'INSTRUMENT_BID_REDUCE_ONLY' = 'INSTRUMENT_BID_REDUCE_ONLY',

  /**
   * Filling the order would require the creation of a long trade, however the instrument is configured such that orders being filled using ask prices can only reduce existing positions. New long positions cannot be created, but existing short positions may be reduced or closed.
   */
  'INSTRUMENT_ASK_REDUCE_ONLY' = 'INSTRUMENT_ASK_REDUCE_ONLY',

  /**
   * Filling the order would require using the bid, however the instrument is configured such that the bids are halted, and so no short orders may be filled.
   */
  'INSTRUMENT_BID_HALTED' = 'INSTRUMENT_BID_HALTED',

  /**
   * Filling the order would require using the ask, however the instrument is configured such that the asks are halted, and so no long orders may be filled.
   */
  'INSTRUMENT_ASK_HALTED' = 'INSTRUMENT_ASK_HALTED',

  /**
   * Filling the Order would result in the creation of a Guaranteed Stop Loss Order (GSLO). Since the trade is long the GSLO would be short, however the bid side is currently halted. GSLOs cannot be created in this situation.
   */
  'STOP_LOSS_ON_FILL_GUARANTEED_BID_HALTED' = 'STOP_LOSS_ON_FILL_GUARANTEED_BID_HALTED',

  /**
   * Filling the Order would result in the creation of a Guaranteed Stop Loss Order (GSLO). Since the trade is short the GSLO would be long, however the ask side is currently halted. GSLOs cannot be created in this situation.
   */
  'STOP_LOSS_ON_FILL_GUARANTEED_ASK_HALTED' = 'STOP_LOSS_ON_FILL_GUARANTEED_ASK_HALTED',

  /**
   * Filling the Order would have resulted in a new Trade that violates the FIFO violation safeguard constraints.
   */
  'FIFO_VIOLATION_SAFEGUARD_VIOLATION' = 'FIFO_VIOLATION_SAFEGUARD_VIOLATION',

  /**
   * Filling the Order would have reduced an existing Trade such that the reduced Trade violates the FIFO violation safeguard constraints.
   */
  'FIFO_VIOLATION_SAFEGUARD_PARTIAL_CLOSE_VIOLATION' = 'FIFO_VIOLATION_SAFEGUARD_PARTIAL_CLOSE_VIOLATION',
}

/**
 * Used to pay or collect a dividend adjustment amount for an open Trade within the Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface OpenTradeDividendAdjustment {
  /**
   * The ID of the Trade for which the dividend adjustment is to be paid or
   * collected.
   */

  tradeID?: trade.TradeID

  /**
   * The dividend adjustment amount to pay or collect for the Trade.
   */

  dividendAdjustment?: primitives.AccountUnits
}

/**
 * A client-provided identifier, used by clients to refer to their Orders or Trades with an identifier that they have provided. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export type ClientID = string

/**
 * A client-provided tag that can contain any data and may be assigned to their Orders or Trades. Tags are typically used to associate groups of Trades and/or Orders together. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export type ClientTag = string

/**
 * A client-provided comment that can contain any data and may be assigned to their Orders or Trades. Comments are typically used to provide extra context or meaning to an Order or Trade. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export type ClientComment = string

/**
 * A ClientExtensions object allows a client to attach a clientID, tag and comment to Orders and Trades in their Account.  Do not set, modify, or delete this field if your account is associated with MT4. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface ClientExtensions {
  /**
   * The Client ID of the Order/Trade
   */

  id?: ClientID

  /**
   * A tag associated with the Order/Trade
   */

  tag?: ClientTag

  /**
   * A comment associated with the Order/Trade
   */

  comment?: ClientComment
}

/**
 * TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade’s dependent Take Profit Order is modified directly through the Trade. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface TakeProfitDetails {
  /**
   * The price that the Take Profit Order will be triggered at. Only one of
   * the price and distance fields may be specified.
   */

  price?: pricingCommon.PriceValue

  /**
   * The time in force for the created Take Profit Order. This may only be
   * GTC, GTD or GFD.
   */

  timeInForce?: order.TimeInForce /* default=GTC */

  /**
   * The date when the Take Profit Order will be cancelled on if timeInForce
   * is GTD.
   */

  gtdTime?: primitives.DateTime

  /**
   * The Client Extensions to add to the Take Profit Order when created.
   */

  clientExtensions?: ClientExtensions
}

/**
 * StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade’s dependent Stop Loss Order is modified directly through the Trade. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface StopLossDetails {
  /**
   * The price that the Stop Loss Order will be triggered at. Only one of the
   * price and distance fields may be specified.
   */

  price?: pricingCommon.PriceValue

  /**
   * Specifies the distance (in price units) from the Trade's open price to
   * use as the Stop Loss Order price. Only one of the distance and price
   * fields may be specified.
   */

  distance?: primitives.DecimalNumber

  /**
   * The time in force for the created Stop Loss Order. This may only be GTC,
   * GTD or GFD.
   */

  timeInForce?: order.TimeInForce /* default=GTC */

  /**
   * The date when the Stop Loss Order will be cancelled on if timeInForce is
   * GTD.
   */

  gtdTime?: primitives.DateTime

  /**
   * The Client Extensions to add to the Stop Loss Order when created.
   */

  clientExtensions?: ClientExtensions

  /**
   * Flag indicating that the price for the Stop Loss Order is guaranteed. The
   * default value depends on the GuaranteedStopLossOrderMode of the account,
   * if it is REQUIRED, the default will be true, for DISABLED or ENABLED the
   * default is false.
   *
   *
   * <b>Deprecated</b>: Will be removed in a future API update.
   */

  guaranteed?: boolean
}

/**
 * TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade’s dependent Trailing Stop Loss Order is modified directly through the Trade. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface TrailingStopLossDetails {
  /**
   * The distance (in price units) from the Trade's fill price that the
   * Trailing Stop Loss Order will be triggered at.
   */

  distance?: primitives.DecimalNumber

  /**
   * The time in force for the created Trailing Stop Loss Order. This may only
   * be GTC, GTD or GFD.
   */

  timeInForce?: order.TimeInForce /* default=GTC */

  /**
   * The date when the Trailing Stop Loss Order will be cancelled on if
   * timeInForce is GTD.
   */

  gtdTime?: primitives.DateTime

  /**
   * The Client Extensions to add to the Trailing Stop Loss Order when
   * created.
   */

  clientExtensions?: ClientExtensions
}

/**
 * A TradeOpen object represents a Trade for an instrument that was opened in an Account. It is found embedded in Transactions that affect the position of an instrument in the Account, specifically the OrderFill Transaction. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface TradeOpen {
  /**
   * The ID of the Trade that was opened
   */

  tradeID?: trade.TradeID

  /**
   * The number of units opened by the Trade
   */

  units?: primitives.DecimalNumber

  /**
   * The average price that the units were opened at.
   */

  price?: pricingCommon.PriceValue

  /**
   * This is the fee charged for opening the trade if it has a guaranteed Stop
   * Loss Order attached to it.
   */

  guaranteedExecutionFee?: primitives.AccountUnits

  /**
   * The client extensions for the newly opened Trade
   */

  clientExtensions?: ClientExtensions

  /**
   * The half spread cost for the trade open. This can be a positive or
   * negative value and is represented in the home currency of the Account.
   */

  halfSpreadCost?: primitives.AccountUnits

  /**
   * The margin required at the time the Trade was created. Note, this is the
   * &#x2018;pure' margin required, it is not the &#x2018;effective' margin used that
   * factors in the trade risk if a GSLO is attached to the trade.
   */

  initialMarginRequired?: primitives.AccountUnits
}

/**
 * A TradeReduce object represents a Trade for an instrument that was reduced (either partially or fully) in an Account. It is found embedded in Transactions that affect the position of an instrument in the account, specifically the OrderFill Transaction. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface TradeReduce {
  /**
   * The ID of the Trade that was reduced or closed
   */

  tradeID?: trade.TradeID

  /**
   * The number of units that the Trade was reduced by
   */

  units?: primitives.DecimalNumber

  /**
   * The average price that the units were closed at. This price may be
   * clamped for guaranteed Stop Loss Orders.
   */

  price?: pricingCommon.PriceValue

  /**
   * The PL realized when reducing the Trade
   */

  realizedPL?: primitives.AccountUnits

  /**
   * The financing paid/collected when reducing the Trade
   */

  financing?: primitives.AccountUnits

  /**
   * This is the fee that is charged for closing the Trade if it has a
   * guaranteed Stop Loss Order attached to it.
   */

  guaranteedExecutionFee?: primitives.AccountUnits

  /**
   * The half spread cost for the trade reduce/close. This can be a positive
   * or negative value and is represented in the home currency of the Account.
   */

  halfSpreadCost?: primitives.AccountUnits
}

/**
 * A MarketOrderTradeClose specifies the extensions to a Market Order that has been created specifically to close a Trade. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface MarketOrderTradeClose {
  /**
   * The ID of the Trade requested to be closed
   */

  tradeID?: trade.TradeID

  /**
   * The client ID of the Trade requested to be closed
   */

  clientTradeID?: string

  /**
   * Indication of how much of the Trade to close. Either 'ALL', or a
   * DecimalNumber reflection a partial close of the Trade.
   */

  units?: string
}

/**
 * Details for the Market Order extensions specific to a Market Order placed that is part of a Market Order Margin Closeout in a client’s account https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface MarketOrderMarginCloseout {
  /**
   * The reason the Market Order was created to perform a margin closeout
   */

  reason?: MarketOrderMarginCloseoutReason
}

/**
 * The reason that the Market Order was created to perform a margin closeout https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum MarketOrderMarginCloseoutReason {
  /**
   * Trade closures resulted from violating OANDA’s margin policy
   */
  'MARGIN_CHECK_VIOLATION' = 'MARGIN_CHECK_VIOLATION',

  /**
   * Trade closures came from a margin closeout event resulting from regulatory conditions placed on the Account’s margin call
   */
  'REGULATORY_MARGIN_CALL_VIOLATION' = 'REGULATORY_MARGIN_CALL_VIOLATION',

  /**
   * Trade closures resulted from violating the margin policy imposed by regulatory requirements
   */
  'REGULATORY_MARGIN_CHECK_VIOLATION' = 'REGULATORY_MARGIN_CHECK_VIOLATION',
}

/**
 * Details for the Market Order extensions specific to a Market Order placed with the intent of fully closing a specific open trade that should have already been closed but wasn’t due to halted market conditions https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface MarketOrderDelayedTradeClose {
  /**
   * The ID of the Trade being closed
   */

  tradeID?: trade.TradeID

  /**
   * The Client ID of the Trade being closed
   */

  clientTradeID?: trade.TradeID

  /**
   * The Transaction ID of the DelayedTradeClosure transaction to which this
   * Delayed Trade Close belongs to
   */

  sourceTransactionID?: TransactionID
}

/**
 * A MarketOrderPositionCloseout specifies the extensions to a Market Order when it has been created to closeout a specific Position. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface MarketOrderPositionCloseout {
  /**
   * The instrument of the Position being closed out.
   */

  instrument?: primitives.InstrumentName

  /**
   * Indication of how much of the Position to close. Either 'ALL', or a
   * DecimalNumber reflection a partial close of the Trade. The DecimalNumber
   * must always be positive, and represent a number that doesn't exceed the
   * absolute size of the Position.
   */

  units?: string
}

/**
 * A LiquidityRegenerationSchedule indicates how liquidity that is used when filling an Order for an instrument is regenerated following the fill.  A liquidity regeneration schedule will be in effect until the timestamp of its final step, but may be replaced by a schedule created for an Order of the same instrument that is filled while it is still in effect. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface LiquidityRegenerationSchedule {
  /**
   * The steps in the Liquidity Regeneration Schedule
   */

  steps?: LiquidityRegenerationScheduleStep[]
}

/**
 * A liquidity regeneration schedule Step indicates the amount of bid and ask liquidity that is used by the Account at a certain time. These amounts will only change at the timestamp of the following step. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface LiquidityRegenerationScheduleStep {
  /**
   * The timestamp of the schedule step.
   */

  timestamp?: primitives.DateTime

  /**
   * The amount of bid liquidity used at this step in the schedule.
   */

  bidLiquidityUsed?: primitives.DecimalNumber

  /**
   * The amount of ask liquidity used at this step in the schedule.
   */

  askLiquidityUsed?: primitives.DecimalNumber
}

/**
 * OpenTradeFinancing is used to pay/collect daily financing charge for an open Trade within an Account https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface OpenTradeFinancing {
  /**
   * The ID of the Trade that financing is being paid/collected for.
   */

  tradeID?: trade.TradeID

  /**
   * The amount of financing paid/collected for the Trade.
   */

  financing?: primitives.AccountUnits
}

/**
 * OpenTradeFinancing is used to pay/collect daily financing charge for a Position within an Account https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface PositionFinancing {
  /**
   * The instrument of the Position that financing is being paid/collected
   * for.
   */

  instrument?: primitives.InstrumentName

  /**
   * The amount of financing paid/collected for the Position.
   */

  financing?: primitives.AccountUnits

  /**
   * The financing paid/collected for each open Trade within the Position.
   */

  openTradeFinancings?: OpenTradeFinancing[]

  /**
   * The account financing mode at the time of the daily financing.
   */

  accountFinancingMode?: account.AccountFinancingMode
}

/**
 * The request identifier. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export type RequestID = string

/**
 * A client provided request identifier. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export type ClientRequestID = string

/**
 * The reason that a Transaction was rejected. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum TransactionRejectReason {
  /**
   * An unexpected internal server error has occurred
   */
  'INTERNAL_SERVER_ERROR' = 'INTERNAL_SERVER_ERROR',

  /**
   * The system was unable to determine the current price for the Order’s instrument
   */
  'INSTRUMENT_PRICE_UNKNOWN' = 'INSTRUMENT_PRICE_UNKNOWN',

  /**
   * The Account is not active
   */
  'ACCOUNT_NOT_ACTIVE' = 'ACCOUNT_NOT_ACTIVE',

  /**
   * The Account is locked
   */
  'ACCOUNT_LOCKED' = 'ACCOUNT_LOCKED',

  /**
   * The Account is locked for Order creation
   */
  'ACCOUNT_ORDER_CREATION_LOCKED' = 'ACCOUNT_ORDER_CREATION_LOCKED',

  /**
   * The Account is locked for configuration
   */
  'ACCOUNT_CONFIGURATION_LOCKED' = 'ACCOUNT_CONFIGURATION_LOCKED',

  /**
   * The Account is locked for deposits
   */
  'ACCOUNT_DEPOSIT_LOCKED' = 'ACCOUNT_DEPOSIT_LOCKED',

  /**
   * The Account is locked for withdrawals
   */
  'ACCOUNT_WITHDRAWAL_LOCKED' = 'ACCOUNT_WITHDRAWAL_LOCKED',

  /**
   * The Account is locked for Order cancellation
   */
  'ACCOUNT_ORDER_CANCEL_LOCKED' = 'ACCOUNT_ORDER_CANCEL_LOCKED',

  /**
   * The instrument specified is not tradeable by the Account
   */
  'INSTRUMENT_NOT_TRADEABLE' = 'INSTRUMENT_NOT_TRADEABLE',

  /**
   * Creating the Order would result in the maximum number of allowed pending Orders being exceeded
   */
  'PENDING_ORDERS_ALLOWED_EXCEEDED' = 'PENDING_ORDERS_ALLOWED_EXCEEDED',

  /**
   * Neither the Order ID nor client Order ID are specified
   */
  'ORDER_ID_UNSPECIFIED' = 'ORDER_ID_UNSPECIFIED',

  /**
   * The Order specified does not exist
   */
  'ORDER_DOESNT_EXIST' = 'ORDER_DOESNT_EXIST',

  /**
   * The Order ID and client Order ID specified do not identify the same Order
   */
  'ORDER_IDENTIFIER_INCONSISTENCY' = 'ORDER_IDENTIFIER_INCONSISTENCY',

  /**
   * Neither the Trade ID nor client Trade ID are specified
   */
  'TRADE_ID_UNSPECIFIED' = 'TRADE_ID_UNSPECIFIED',

  /**
   * The Trade specified does not exist
   */
  'TRADE_DOESNT_EXIST' = 'TRADE_DOESNT_EXIST',

  /**
   * The Trade ID and client Trade ID specified do not identify the same Trade
   */
  'TRADE_IDENTIFIER_INCONSISTENCY' = 'TRADE_IDENTIFIER_INCONSISTENCY',

  /**
   * The Account had insufficient margin to perform the action specified. One possible reason for this is due to the creation or modification of a guaranteed StopLoss Order.
   */
  'INSUFFICIENT_MARGIN' = 'INSUFFICIENT_MARGIN',

  /**
   * Order instrument has not been specified
   */
  'INSTRUMENT_MISSING' = 'INSTRUMENT_MISSING',

  /**
   * The instrument specified is unknown
   */
  'INSTRUMENT_UNKNOWN' = 'INSTRUMENT_UNKNOWN',

  /**
   * Order units have not been not specified
   */
  'UNITS_MISSING' = 'UNITS_MISSING',

  /**
   * Order units specified are invalid
   */
  'UNITS_INVALID' = 'UNITS_INVALID',

  /**
   * The units specified contain more precision than is allowed for the Order’s instrument
   */
  'UNITS_PRECISION_EXCEEDED' = 'UNITS_PRECISION_EXCEEDED',

  /**
   * The units specified exceeds the maximum number of units allowed
   */
  'UNITS_LIMIT_EXCEEDED' = 'UNITS_LIMIT_EXCEEDED',

  /**
   * The units specified is less than the minimum number of units required
   */
  'UNITS_MINIMUM_NOT_MET' = 'UNITS_MINIMUM_NOT_MET',

  /**
   * The price has not been specified
   */
  'PRICE_MISSING' = 'PRICE_MISSING',

  /**
   * The price specified is invalid
   */
  'PRICE_INVALID' = 'PRICE_INVALID',

  /**
   * The price specified contains more precision than is allowed for the instrument
   */
  'PRICE_PRECISION_EXCEEDED' = 'PRICE_PRECISION_EXCEEDED',

  /**
   * The price distance has not been specified
   */
  'PRICE_DISTANCE_MISSING' = 'PRICE_DISTANCE_MISSING',

  /**
   * The price distance specified is invalid
   */
  'PRICE_DISTANCE_INVALID' = 'PRICE_DISTANCE_INVALID',

  /**
   * The price distance specified contains more precision than is allowed for the instrument
   */
  'PRICE_DISTANCE_PRECISION_EXCEEDED' = 'PRICE_DISTANCE_PRECISION_EXCEEDED',

  /**
   * The price distance exceeds that maximum allowed amount
   */
  'PRICE_DISTANCE_MAXIMUM_EXCEEDED' = 'PRICE_DISTANCE_MAXIMUM_EXCEEDED',

  /**
   * The price distance does not meet the minimum allowed amount
   */
  'PRICE_DISTANCE_MINIMUM_NOT_MET' = 'PRICE_DISTANCE_MINIMUM_NOT_MET',

  /**
   * The TimeInForce field has not been specified
   */
  'TIME_IN_FORCE_MISSING' = 'TIME_IN_FORCE_MISSING',

  /**
   * The TimeInForce specified is invalid
   */
  'TIME_IN_FORCE_INVALID' = 'TIME_IN_FORCE_INVALID',

  /**
   * The TimeInForce is GTD but no GTD timestamp is provided
   */
  'TIME_IN_FORCE_GTD_TIMESTAMP_MISSING' = 'TIME_IN_FORCE_GTD_TIMESTAMP_MISSING',

  /**
   * The TimeInForce is GTD but the GTD timestamp is in the past
   */
  'TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST' = 'TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST',

  /**
   * The price bound specified is invalid
   */
  'PRICE_BOUND_INVALID' = 'PRICE_BOUND_INVALID',

  /**
   * The price bound specified contains more precision than is allowed for the Order’s instrument
   */
  'PRICE_BOUND_PRECISION_EXCEEDED' = 'PRICE_BOUND_PRECISION_EXCEEDED',

  /**
   * Multiple Orders on fill share the same client Order ID
   */
  'ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS' = 'ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS',

  /**
   * The Order does not support Trade on fill client extensions because it cannot create a new Trade
   */
  'TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED' = 'TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED',

  /**
   * The client Order ID specified is invalid
   */
  'CLIENT_ORDER_ID_INVALID' = 'CLIENT_ORDER_ID_INVALID',

  /**
   * The client Order ID specified is already assigned to another pending Order
   */
  'CLIENT_ORDER_ID_ALREADY_EXISTS' = 'CLIENT_ORDER_ID_ALREADY_EXISTS',

  /**
   * The client Order tag specified is invalid
   */
  'CLIENT_ORDER_TAG_INVALID' = 'CLIENT_ORDER_TAG_INVALID',

  /**
   * The client Order comment specified is invalid
   */
  'CLIENT_ORDER_COMMENT_INVALID' = 'CLIENT_ORDER_COMMENT_INVALID',

  /**
   * The client Trade ID specified is invalid
   */
  'CLIENT_TRADE_ID_INVALID' = 'CLIENT_TRADE_ID_INVALID',

  /**
   * The client Trade ID specified is already assigned to another open Trade
   */
  'CLIENT_TRADE_ID_ALREADY_EXISTS' = 'CLIENT_TRADE_ID_ALREADY_EXISTS',

  /**
   * The client Trade tag specified is invalid
   */
  'CLIENT_TRADE_TAG_INVALID' = 'CLIENT_TRADE_TAG_INVALID',

  /**
   * The client Trade comment is invalid
   */
  'CLIENT_TRADE_COMMENT_INVALID' = 'CLIENT_TRADE_COMMENT_INVALID',

  /**
   * The OrderFillPositionAction field has not been specified
   */
  'ORDER_FILL_POSITION_ACTION_MISSING' = 'ORDER_FILL_POSITION_ACTION_MISSING',

  /**
   * The OrderFillPositionAction specified is invalid
   */
  'ORDER_FILL_POSITION_ACTION_INVALID' = 'ORDER_FILL_POSITION_ACTION_INVALID',

  /**
   * The TriggerCondition field has not been specified
   */
  'TRIGGER_CONDITION_MISSING' = 'TRIGGER_CONDITION_MISSING',

  /**
   * The TriggerCondition specified is invalid
   */
  'TRIGGER_CONDITION_INVALID' = 'TRIGGER_CONDITION_INVALID',

  /**
   * The OrderFillPositionAction field has not been specified
   */
  'ORDER_PARTIAL_FILL_OPTION_MISSING' = 'ORDER_PARTIAL_FILL_OPTION_MISSING',

  /**
   * The OrderFillPositionAction specified is invalid.
   */
  'ORDER_PARTIAL_FILL_OPTION_INVALID' = 'ORDER_PARTIAL_FILL_OPTION_INVALID',

  /**
   * When attempting to reissue an order (currently only a MarketIfTouched) that was immediately partially filled, it is not possible to create a correct pending Order.
   */
  'INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL' = 'INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL',

  /**
   * A Take Profit Order for the specified Trade already exists
   */
  'TAKE_PROFIT_ORDER_ALREADY_EXISTS' = 'TAKE_PROFIT_ORDER_ALREADY_EXISTS',

  /**
   * The Take Profit Order would cause the associated Trade to be in violation of the FIFO violation safeguard constraints.
   */
  'TAKE_PROFIT_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD' = 'TAKE_PROFIT_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD',

  /**
   * The Take Profit on fill specified does not provide a price
   */
  'TAKE_PROFIT_ON_FILL_PRICE_MISSING' = 'TAKE_PROFIT_ON_FILL_PRICE_MISSING',

  /**
   * The Take Profit on fill specified contains an invalid price
   */
  'TAKE_PROFIT_ON_FILL_PRICE_INVALID' = 'TAKE_PROFIT_ON_FILL_PRICE_INVALID',

  /**
   * The Take Profit on fill specified contains a price with more precision than is allowed by the Order’s instrument
   */
  'TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED' = 'TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED',

  /**
   * The Take Profit on fill specified does not provide a TimeInForce
   */
  'TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING' = 'TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING',

  /**
   * The Take Profit on fill specifies an invalid TimeInForce
   */
  'TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID' = 'TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID',

  /**
   * The Take Profit on fill specifies a GTD TimeInForce but does not provide a GTD timestamp
   */
  'TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING' = 'TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING',

  /**
   * The Take Profit on fill specifies a GTD timestamp that is in the past
   */
  'TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST' = 'TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST',

  /**
   * The Take Profit on fill client Order ID specified is invalid
   */
  'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID' = 'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID',

  /**
   * The Take Profit on fill client Order tag specified is invalid
   */
  'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID' = 'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID',

  /**
   * The Take Profit on fill client Order comment specified is invalid
   */
  'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID' = 'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID',

  /**
   * The Take Profit on fill specified does not provide a TriggerCondition
   */
  'TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING' = 'TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING',

  /**
   * The Take Profit on fill specifies an invalid TriggerCondition
   */
  'TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID' = 'TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID',

  /**
   * A Stop Loss Order for the specified Trade already exists
   */
  'STOP_LOSS_ORDER_ALREADY_EXISTS' = 'STOP_LOSS_ORDER_ALREADY_EXISTS',

  /**
   * An attempt was made to to create a non-guaranteed stop loss order in an account that requires all stop loss orders to be guaranteed.
   */
  'STOP_LOSS_ORDER_GUARANTEED_REQUIRED' = 'STOP_LOSS_ORDER_GUARANTEED_REQUIRED',

  /**
   * An attempt to create a guaranteed stop loss order with a price that is within the current tradeable spread.
   */
  'STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD' = 'STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD',

  /**
   * An attempt was made to create a guaranteed Stop Loss Order, however the Account’s configuration does not allow guaranteed Stop Loss Orders.
   */
  'STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED' = 'STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED',

  /**
   * An attempt was made to create a guaranteed Stop Loss Order when the market was halted.
   */
  'STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION' = 'STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION',

  /**
   * An attempt was made to re-create a guaranteed Stop Loss Order with a tighter fill price when the market was halted.
   */
  'STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION' = 'STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION',

  /**
   * An attempt was made to create a guaranteed Stop Loss Order on a hedged Trade (ie there is an existing open Trade in the opposing direction), however the Account’s configuration does not allow guaranteed Stop Loss Orders for hedged Trades/Positions.
   */
  'STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED' = 'STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED',

  /**
   * An attempt was made to create a guaranteed Stop Loss Order, however the distance between the current price and the trigger price does not meet the Account’s configured minimum Guaranteed Stop Loss distance.
   */
  'STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET' = 'STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET',

  /**
   * An attempt was made to cancel a Stop Loss Order, however the Account’s configuration requires every Trade have an associated Stop Loss Order.
   */
  'STOP_LOSS_ORDER_NOT_CANCELABLE' = 'STOP_LOSS_ORDER_NOT_CANCELABLE',

  /**
   * An attempt was made to cancel and replace a Stop Loss Order, however the Account’s configuration prevents the modification of Stop Loss Orders.
   */
  'STOP_LOSS_ORDER_NOT_REPLACEABLE' = 'STOP_LOSS_ORDER_NOT_REPLACEABLE',

  /**
   * An attempt was made to create a guaranteed Stop Loss Order, however doing so would exceed the Account’s configured guaranteed StopLoss Order level restriction volume.
   */
  'STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED' = 'STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED',

  /**
   * The Stop Loss Order request contains both the price and distance fields.
   */
  'STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED' = 'STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED',

  /**
   * The Stop Loss Order request contains neither the price nor distance fields.
   */
  'STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING' = 'STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING',

  /**
   * The Stop Loss Order would cause the associated Trade to be in violation of the FIFO violation safeguard constraints
   */
  'STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD' = 'STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD',

  /**
   * An attempt to create a pending Order was made with no Stop Loss Order on fill specified and the Account’s configuration requires that every Trade have an associated Stop Loss Order.
   */
  'STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER' = 'STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER',

  /**
   * An attempt to create a pending Order was made with a Stop Loss Order on fill that was explicitly configured to be guaranteed, however the Account’s configuration does not allow guaranteed Stop Loss Orders.
   */
  'STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED' = 'STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED',

  /**
   * An attempt to create a pending Order was made with a Stop Loss Order on fill that was explicitly configured to be not guaranteed, however the Account’s configuration requires guaranteed Stop Loss Orders.
   */
  'STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED' = 'STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED',

  /**
   * The Stop Loss on fill specified does not provide a price
   */
  'STOP_LOSS_ON_FILL_PRICE_MISSING' = 'STOP_LOSS_ON_FILL_PRICE_MISSING',

  /**
   * The Stop Loss on fill specifies an invalid price
   */
  'STOP_LOSS_ON_FILL_PRICE_INVALID' = 'STOP_LOSS_ON_FILL_PRICE_INVALID',

  /**
   * The Stop Loss on fill specifies a price with more precision than is allowed by the Order’s instrument
   */
  'STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED' = 'STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED',

  /**
   * An attempt to create a pending Order was made with the distance between the guaranteed Stop Loss Order on fill’s price and the pending Order’s price is less than the Account’s configured minimum guaranteed stop loss distance.
   */
  'STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET' = 'STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET',

  /**
   * An attempt to create a pending Order was made with a guaranteed Stop Loss Order on fill configured, and the Order’s units exceed the Account’s configured guaranteed StopLoss Order level restriction volume.
   */
  'STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED' = 'STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED',

  /**
   * The Stop Loss on fill distance is invalid
   */
  'STOP_LOSS_ON_FILL_DISTANCE_INVALID' = 'STOP_LOSS_ON_FILL_DISTANCE_INVALID',

  /**
   * The Stop Loss on fill price distance exceeds the maximum allowed amount
   */
  'STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED' = 'STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED',

  /**
   * The Stop Loss on fill distance contains more precision than is allowed by the instrument
   */
  'STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED' = 'STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED',

  /**
   * The Stop Loss on fill contains both the price and distance fields.
   */
  'STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED' = 'STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED',

  /**
   * The Stop Loss on fill contains neither the price nor distance fields.
   */
  'STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING' = 'STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING',

  /**
   * The Stop Loss on fill specified does not provide a TimeInForce
   */
  'STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING' = 'STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING',

  /**
   * The Stop Loss on fill specifies an invalid TimeInForce
   */
  'STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID' = 'STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID',

  /**
   * The Stop Loss on fill specifies a GTD TimeInForce but does not provide a GTD timestamp
   */
  'STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING' = 'STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING',

  /**
   * The Stop Loss on fill specifies a GTD timestamp that is in the past
   */
  'STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST' = 'STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST',

  /**
   * The Stop Loss on fill client Order ID specified is invalid
   */
  'STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID' = 'STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID',

  /**
   * The Stop Loss on fill client Order tag specified is invalid
   */
  'STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID' = 'STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID',

  /**
   * The Stop Loss on fill client Order comment specified is invalid
   */
  'STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID' = 'STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID',

  /**
   * The Stop Loss on fill specified does not provide a TriggerCondition
   */
  'STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING' = 'STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING',

  /**
   * The Stop Loss on fill specifies an invalid TriggerCondition
   */
  'STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID' = 'STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID',

  /**
   * A Trailing Stop Loss Order for the specified Trade already exists
   */
  'TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS' = 'TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS',

  /**
   * The Trailing Stop Loss Order would cause the associated Trade to be in violation of the FIFO violation safeguard constraints
   */
  'TRAILING_STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD' = 'TRAILING_STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD',

  /**
   * The Trailing Stop Loss on fill specified does not provide a distance
   */
  'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING' = 'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING',

  /**
   * The Trailing Stop Loss on fill distance is invalid
   */
  'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID' = 'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID',

  /**
   * The Trailing Stop Loss on fill distance contains more precision than is allowed by the instrument
   */
  'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED' = 'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED',

  /**
   * The Trailing Stop Loss on fill price distance exceeds the maximum allowed amount
   */
  'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED' = 'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED',

  /**
   * The Trailing Stop Loss on fill price distance does not meet the minimum allowed amount
   */
  'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET' = 'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET',

  /**
   * The Trailing Stop Loss on fill specified does not provide a TimeInForce
   */
  'TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING' = 'TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING',

  /**
   * The Trailing Stop Loss on fill specifies an invalid TimeInForce
   */
  'TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID' = 'TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID',

  /**
   * The Trailing Stop Loss on fill TimeInForce is specified as GTD but no GTD timestamp is provided
   */
  'TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING' = 'TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING',

  /**
   * The Trailing Stop Loss on fill GTD timestamp is in the past
   */
  'TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST' = 'TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST',

  /**
   * The Trailing Stop Loss on fill client Order ID specified is invalid
   */
  'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID' = 'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID',

  /**
   * The Trailing Stop Loss on fill client Order tag specified is invalid
   */
  'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID' = 'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID',

  /**
   * The Trailing Stop Loss on fill client Order comment specified is invalid
   */
  'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID' = 'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID',

  /**
   * A client attempted to create either a Trailing Stop Loss order or an order with a Trailing Stop Loss On Fill specified, which may not yet be supported.
   */
  'TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED' = 'TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED',

  /**
   * The Trailing Stop Loss on fill specified does not provide a TriggerCondition
   */
  'TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING' = 'TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING',

  /**
   * The Tailing Stop Loss on fill specifies an invalid TriggerCondition
   */
  'TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID' = 'TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID',

  /**
   * The request to close a Trade does not specify a full or partial close
   */
  'CLOSE_TRADE_TYPE_MISSING' = 'CLOSE_TRADE_TYPE_MISSING',

  /**
   * The request to close a Trade partially did not specify the number of units to close
   */
  'CLOSE_TRADE_PARTIAL_UNITS_MISSING' = 'CLOSE_TRADE_PARTIAL_UNITS_MISSING',

  /**
   * The request to partially close a Trade specifies a number of units that exceeds the current size of the given Trade
   */
  'CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE' = 'CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE',

  /**
   * The Position requested to be closed out does not exist
   */
  'CLOSEOUT_POSITION_DOESNT_EXIST' = 'CLOSEOUT_POSITION_DOESNT_EXIST',

  /**
   * The request to closeout a Position was specified incompletely
   */
  'CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION' = 'CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION',

  /**
   * A partial Position closeout request specifies a number of units that exceeds the current Position
   */
  'CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE' = 'CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE',

  /**
   * The request to closeout a Position could not be fully satisfied
   */
  'CLOSEOUT_POSITION_REJECT' = 'CLOSEOUT_POSITION_REJECT',

  /**
   * The request to partially closeout a Position did not specify the number of units to close.
   */
  'CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING' = 'CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING',

  /**
   * The markup group ID provided is invalid
   */
  'MARKUP_GROUP_ID_INVALID' = 'MARKUP_GROUP_ID_INVALID',

  /**
   * The PositionAggregationMode provided is not supported/valid.
   */
  'POSITION_AGGREGATION_MODE_INVALID' = 'POSITION_AGGREGATION_MODE_INVALID',

  /**
   * No configuration parameters provided
   */
  'ADMIN_CONFIGURE_DATA_MISSING' = 'ADMIN_CONFIGURE_DATA_MISSING',

  /**
   * The margin rate provided is invalid
   */
  'MARGIN_RATE_INVALID' = 'MARGIN_RATE_INVALID',

  /**
   * The margin rate provided would cause an immediate margin closeout
   */
  'MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT' = 'MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT',

  /**
   * The account alias string provided is invalid
   */
  'ALIAS_INVALID' = 'ALIAS_INVALID',

  /**
   * No configuration parameters provided
   */
  'CLIENT_CONFIGURE_DATA_MISSING' = 'CLIENT_CONFIGURE_DATA_MISSING',

  /**
   * The margin rate provided would cause the Account to enter a margin call state.
   */
  'MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL' = 'MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL',

  /**
   * Funding is not possible because the requested transfer amount is invalid
   */
  'AMOUNT_INVALID' = 'AMOUNT_INVALID',

  /**
   * The Account does not have sufficient balance to complete the funding request
   */
  'INSUFFICIENT_FUNDS' = 'INSUFFICIENT_FUNDS',

  /**
   * Funding amount has not been specified
   */
  'AMOUNT_MISSING' = 'AMOUNT_MISSING',

  /**
   * Funding reason has not been specified
   */
  'FUNDING_REASON_MISSING' = 'FUNDING_REASON_MISSING',

  /**
   * The list of Order Identifiers provided for a One Cancels All Order contains an Order Identifier that refers to a Stop Loss Order. OCA groups cannot contain Stop Loss Orders.
   */
  'OCA_ORDER_IDS_STOP_LOSS_NOT_ALLOWED' = 'OCA_ORDER_IDS_STOP_LOSS_NOT_ALLOWED',

  /**
   * Neither Order nor Trade on Fill client extensions were provided for modification
   */
  'CLIENT_EXTENSIONS_DATA_MISSING' = 'CLIENT_EXTENSIONS_DATA_MISSING',

  /**
   * The Order to be replaced has a different type than the replacing Order.
   */
  'REPLACING_ORDER_INVALID' = 'REPLACING_ORDER_INVALID',

  /**
   * The replacing Order refers to a different Trade than the Order that is being replaced.
   */
  'REPLACING_TRADE_ID_INVALID' = 'REPLACING_TRADE_ID_INVALID',

  /**
   * Canceling the order would cause an immediate margin closeout.
   */
  'ORDER_CANCEL_WOULD_TRIGGER_CLOSEOUT' = 'ORDER_CANCEL_WOULD_TRIGGER_CLOSEOUT',
}

/**
 * A filter that can be used when fetching Transactions https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export enum TransactionFilter {
  /**
   * Order-related Transactions. These are the Transactions that create, cancel, fill or trigger Orders
   */
  'ORDER' = 'ORDER',

  /**
   * Funding-related Transactions
   */
  'FUNDING' = 'FUNDING',

  /**
   * Administrative Transactions
   */
  'ADMIN' = 'ADMIN',

  /**
   * Account Create Transaction
   */
  'CREATE' = 'CREATE',

  /**
   * Account Close Transaction
   */
  'CLOSE' = 'CLOSE',

  /**
   * Account Reopen Transaction
   */
  'REOPEN' = 'REOPEN',

  /**
   * Client Configuration Transaction
   */
  'CLIENT_CONFIGURE' = 'CLIENT_CONFIGURE',

  /**
   * Client Configuration Reject Transaction
   */
  'CLIENT_CONFIGURE_REJECT' = 'CLIENT_CONFIGURE_REJECT',

  /**
   * Transfer Funds Transaction
   */
  'TRANSFER_FUNDS' = 'TRANSFER_FUNDS',

  /**
   * Transfer Funds Reject Transaction
   */
  'TRANSFER_FUNDS_REJECT' = 'TRANSFER_FUNDS_REJECT',

  /**
   * Market Order Transaction
   */
  'MARKET_ORDER' = 'MARKET_ORDER',

  /**
   * Market Order Reject Transaction
   */
  'MARKET_ORDER_REJECT' = 'MARKET_ORDER_REJECT',

  /**
   * Limit Order Transaction
   */
  'LIMIT_ORDER' = 'LIMIT_ORDER',

  /**
   * Limit Order Reject Transaction
   */
  'LIMIT_ORDER_REJECT' = 'LIMIT_ORDER_REJECT',

  /**
   * Stop Order Transaction
   */
  'STOP_ORDER' = 'STOP_ORDER',

  /**
   * Stop Order Reject Transaction
   */
  'STOP_ORDER_REJECT' = 'STOP_ORDER_REJECT',

  /**
   * Market if Touched Order Transaction
   */
  'MARKET_IF_TOUCHED_ORDER' = 'MARKET_IF_TOUCHED_ORDER',

  /**
   * Market if Touched Order Reject Transaction
   */
  'MARKET_IF_TOUCHED_ORDER_REJECT' = 'MARKET_IF_TOUCHED_ORDER_REJECT',

  /**
   * Take Profit Order Transaction
   */
  'TAKE_PROFIT_ORDER' = 'TAKE_PROFIT_ORDER',

  /**
   * Take Profit Order Reject Transaction
   */
  'TAKE_PROFIT_ORDER_REJECT' = 'TAKE_PROFIT_ORDER_REJECT',

  /**
   * Stop Loss Order Transaction
   */
  'STOP_LOSS_ORDER' = 'STOP_LOSS_ORDER',

  /**
   * Stop Loss Order Reject Transaction
   */
  'STOP_LOSS_ORDER_REJECT' = 'STOP_LOSS_ORDER_REJECT',

  /**
   * Trailing Stop Loss Order Transaction
   */
  'TRAILING_STOP_LOSS_ORDER' = 'TRAILING_STOP_LOSS_ORDER',

  /**
   * Trailing Stop Loss Order Reject Transaction
   */
  'TRAILING_STOP_LOSS_ORDER_REJECT' = 'TRAILING_STOP_LOSS_ORDER_REJECT',

  /**
   * One Cancels All Order Transaction
   */
  'ONE_CANCELS_ALL_ORDER' = 'ONE_CANCELS_ALL_ORDER',

  /**
   * One Cancels All Order Reject Transaction
   */
  'ONE_CANCELS_ALL_ORDER_REJECT' = 'ONE_CANCELS_ALL_ORDER_REJECT',

  /**
   * One Cancels All Order Trigger Transaction
   */
  'ONE_CANCELS_ALL_ORDER_TRIGGERED' = 'ONE_CANCELS_ALL_ORDER_TRIGGERED',

  /**
   * Order Fill Transaction
   */
  'ORDER_FILL' = 'ORDER_FILL',

  /**
   * Order Cancel Transaction
   */
  'ORDER_CANCEL' = 'ORDER_CANCEL',

  /**
   * Order Cancel Reject Transaction
   */
  'ORDER_CANCEL_REJECT' = 'ORDER_CANCEL_REJECT',

  /**
   * Order Client Extensions Modify Transaction
   */
  'ORDER_CLIENT_EXTENSIONS_MODIFY' = 'ORDER_CLIENT_EXTENSIONS_MODIFY',

  /**
   * Order Client Extensions Modify Reject Transaction
   */
  'ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT' = 'ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT',

  /**
   * Trade Client Extensions Modify Transaction
   */
  'TRADE_CLIENT_EXTENSIONS_MODIFY' = 'TRADE_CLIENT_EXTENSIONS_MODIFY',

  /**
   * Trade Client Extensions Modify Reject Transaction
   */
  'TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT' = 'TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT',

  /**
   * Margin Call Enter Transaction
   */
  'MARGIN_CALL_ENTER' = 'MARGIN_CALL_ENTER',

  /**
   * Margin Call Extend Transaction
   */
  'MARGIN_CALL_EXTEND' = 'MARGIN_CALL_EXTEND',

  /**
   * Margin Call Exit Transaction
   */
  'MARGIN_CALL_EXIT' = 'MARGIN_CALL_EXIT',

  /**
   * Delayed Trade Closure Transaction
   */
  'DELAYED_TRADE_CLOSURE' = 'DELAYED_TRADE_CLOSURE',

  /**
   * Daily Financing Transaction
   */
  'DAILY_FINANCING' = 'DAILY_FINANCING',

  /**
   * Reset Resettable PL Transaction
   */
  'RESET_RESETTABLE_PL' = 'RESET_RESETTABLE_PL',
}

/**
 * A TransactionHeartbeat object is injected into the Transaction stream to ensure that the HTTP connection remains active. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export interface TransactionHeartbeat {
  /**
   * The string 'HEARTBEAT'
   */

  type?: string /* default=HEARTBEAT */

  /**
   * The ID of the most recent Transaction created for the Account
   */

  lastTransactionID?: TransactionID

  /**
   * The date/time when the TransactionHeartbeat was created.
   */

  time?: primitives.DateTime
}
