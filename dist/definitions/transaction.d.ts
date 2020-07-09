import * as account from './account';
import * as trade from './trade';
import * as primitives from './primitives';
export { Transaction, CreateTransaction, CloseTransaction, ReopenTransaction, ClientConfigureTransaction, ClientConfigureRejectTransaction, TransferFundsTransaction, TransferFundsRejectTransaction, MarketOrderTransaction, MarketOrderRejectTransaction, FixedPriceOrderTransaction, LimitOrderTransaction, LimitOrderRejectTransaction, StopOrderTransaction, StopOrderRejectTransaction, MarketIfTouchedOrderTransaction, MarketIfTouchedOrderRejectTransaction, TakeProfitOrderTransaction, TakeProfitOrderRejectTransaction, StopLossOrderTransaction, StopLossOrderRejectTransaction, TrailingStopLossOrderTransaction, TrailingStopLossOrderRejectTransaction, OrderFillTransaction, OrderCancelTransaction, OrderCancelRejectTransaction, OrderClientExtensionsModifyTransaction, OrderClientExtensionsModifyRejectTransaction, TradeClientExtensionsModifyTransaction, TradeClientExtensionsModifyRejectTransaction, MarginCallEnterTransaction, MarginCallExtendTransaction, MarginCallExitTransaction, DelayedTradeClosureTransaction, DailyFinancingTransaction, ResetResettablePLTransaction, ClientExtensions, TakeProfitDetails, StopLossDetails, TrailingStopLossDetails, TradeOpen, TradeReduce, MarketOrderTradeClose, MarketOrderMarginCloseout, MarketOrderDelayedTradeClose, MarketOrderPositionCloseout, LiquidityRegenerationSchedule, LiquidityRegenerationScheduleStep, OpenTradeFinancing, PositionFinancing, TransactionHeartbeat } from '../transaction';
/**
 * The unique Transaction identifier within each Account. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare type TransactionID = string;
/**
 * A client-provided identifier, used by clients to refer to their Orders or Trades with an identifier that they have provided. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare type ClientID = string;
/**
 * A client-provided tag that can contain any data and may be assigned to their Orders or Trades. Tags are typically used to associate groups of Trades and/or Orders together. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare type ClientTag = string;
/**
 * A client-provided comment that can contain any data and may be assigned to their Orders or Trades. Comments are typically used to provide extra context or meaning to an Order or Trade. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare type ClientComment = string;
/**
 * The request identifier. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare type RequestID = string;
/**
 * A client provided request identifier. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare type ClientRequestID = string;
/**
 * The possible types of a Transaction https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum TransactionType {
    /**
     * Account Create Transaction
     */
    'CREATE' = "CREATE",
    /**
     * Account Close Transaction
     */
    'CLOSE' = "CLOSE",
    /**
     * Account Reopen Transaction
     */
    'REOPEN' = "REOPEN",
    /**
     * Client Configuration Transaction
     */
    'CLIENT_CONFIGURE' = "CLIENT_CONFIGURE",
    /**
     * Client Configuration Reject Transaction
     */
    'CLIENT_CONFIGURE_REJECT' = "CLIENT_CONFIGURE_REJECT",
    /**
     * Transfer Funds Transaction
     */
    'TRANSFER_FUNDS' = "TRANSFER_FUNDS",
    /**
     * Transfer Funds Reject Transaction
     */
    'TRANSFER_FUNDS_REJECT' = "TRANSFER_FUNDS_REJECT",
    /**
     * Market Order Transaction
     */
    'MARKET_ORDER' = "MARKET_ORDER",
    /**
     * Market Order Reject Transaction
     */
    'MARKET_ORDER_REJECT' = "MARKET_ORDER_REJECT",
    /**
     * Fixed Price Order Transaction
     */
    'FIXED_PRICE_ORDER' = "FIXED_PRICE_ORDER",
    /**
     * Limit Order Transaction
     */
    'LIMIT_ORDER' = "LIMIT_ORDER",
    /**
     * Limit Order Reject Transaction
     */
    'LIMIT_ORDER_REJECT' = "LIMIT_ORDER_REJECT",
    /**
     * Stop Order Transaction
     */
    'STOP_ORDER' = "STOP_ORDER",
    /**
     * Stop Order Reject Transaction
     */
    'STOP_ORDER_REJECT' = "STOP_ORDER_REJECT",
    /**
     * Market if Touched Order Transaction
     */
    'MARKET_IF_TOUCHED_ORDER' = "MARKET_IF_TOUCHED_ORDER",
    /**
     * Market if Touched Order Reject Transaction
     */
    'MARKET_IF_TOUCHED_ORDER_REJECT' = "MARKET_IF_TOUCHED_ORDER_REJECT",
    /**
     * Take Profit Order Transaction
     */
    'TAKE_PROFIT_ORDER' = "TAKE_PROFIT_ORDER",
    /**
     * Take Profit Order Reject Transaction
     */
    'TAKE_PROFIT_ORDER_REJECT' = "TAKE_PROFIT_ORDER_REJECT",
    /**
     * Stop Loss Order Transaction
     */
    'STOP_LOSS_ORDER' = "STOP_LOSS_ORDER",
    /**
     * Stop Loss Order Reject Transaction
     */
    'STOP_LOSS_ORDER_REJECT' = "STOP_LOSS_ORDER_REJECT",
    /**
     * Trailing Stop Loss Order Transaction
     */
    'TRAILING_STOP_LOSS_ORDER' = "TRAILING_STOP_LOSS_ORDER",
    /**
     * Trailing Stop Loss Order Reject Transaction
     */
    'TRAILING_STOP_LOSS_ORDER_REJECT' = "TRAILING_STOP_LOSS_ORDER_REJECT",
    /**
     * Order Fill Transaction
     */
    'ORDER_FILL' = "ORDER_FILL",
    /**
     * Order Cancel Transaction
     */
    'ORDER_CANCEL' = "ORDER_CANCEL",
    /**
     * Order Cancel Reject Transaction
     */
    'ORDER_CANCEL_REJECT' = "ORDER_CANCEL_REJECT",
    /**
     * Order Client Extensions Modify Transaction
     */
    'ORDER_CLIENT_EXTENSIONS_MODIFY' = "ORDER_CLIENT_EXTENSIONS_MODIFY",
    /**
     * Order Client Extensions Modify Reject Transaction
     */
    'ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT' = "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT",
    /**
     * Trade Client Extensions Modify Transaction
     */
    'TRADE_CLIENT_EXTENSIONS_MODIFY' = "TRADE_CLIENT_EXTENSIONS_MODIFY",
    /**
     * Trade Client Extensions Modify Reject Transaction
     */
    'TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT' = "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT",
    /**
     * Margin Call Enter Transaction
     */
    'MARGIN_CALL_ENTER' = "MARGIN_CALL_ENTER",
    /**
     * Margin Call Extend Transaction
     */
    'MARGIN_CALL_EXTEND' = "MARGIN_CALL_EXTEND",
    /**
     * Margin Call Exit Transaction
     */
    'MARGIN_CALL_EXIT' = "MARGIN_CALL_EXIT",
    /**
     * Delayed Trade Closure Transaction
     */
    'DELAYED_TRADE_CLOSURE' = "DELAYED_TRADE_CLOSURE",
    /**
     * Daily Financing Transaction
     */
    'DAILY_FINANCING' = "DAILY_FINANCING",
    /**
     * Dividend Adjustment Transaction
     */
    'DIVIDEND_ADJUSTMENT' = "DIVIDEND_ADJUSTMENT",
    /**
     * Reset Resettable PL Transaction
     */
    'RESET_RESETTABLE_PL' = "RESET_RESETTABLE_PL"
}
export declare const TransactionTypeDescription: {
    CREATE: string;
    CLOSE: string;
    REOPEN: string;
    CLIENT_CONFIGURE: string;
    CLIENT_CONFIGURE_REJECT: string;
    TRANSFER_FUNDS: string;
    TRANSFER_FUNDS_REJECT: string;
    MARKET_ORDER: string;
    MARKET_ORDER_REJECT: string;
    FIXED_PRICE_ORDER: string;
    LIMIT_ORDER: string;
    LIMIT_ORDER_REJECT: string;
    STOP_ORDER: string;
    STOP_ORDER_REJECT: string;
    MARKET_IF_TOUCHED_ORDER: string;
    MARKET_IF_TOUCHED_ORDER_REJECT: string;
    TAKE_PROFIT_ORDER: string;
    TAKE_PROFIT_ORDER_REJECT: string;
    STOP_LOSS_ORDER: string;
    STOP_LOSS_ORDER_REJECT: string;
    TRAILING_STOP_LOSS_ORDER: string;
    TRAILING_STOP_LOSS_ORDER_REJECT: string;
    ORDER_FILL: string;
    ORDER_CANCEL: string;
    ORDER_CANCEL_REJECT: string;
    ORDER_CLIENT_EXTENSIONS_MODIFY: string;
    ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT: string;
    TRADE_CLIENT_EXTENSIONS_MODIFY: string;
    TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT: string;
    MARGIN_CALL_ENTER: string;
    MARGIN_CALL_EXTEND: string;
    MARGIN_CALL_EXIT: string;
    DELAYED_TRADE_CLOSURE: string;
    DAILY_FINANCING: string;
    DIVIDEND_ADJUSTMENT: string;
    RESET_RESETTABLE_PL: string;
};
/**
 * The reason that an Account is being funded. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum FundingReason {
    /**
     * The client has initiated a funds transfer
     */
    'CLIENT_FUNDING' = "CLIENT_FUNDING",
    /**
     * Funds are being transferred between two Accounts.
     */
    'ACCOUNT_TRANSFER' = "ACCOUNT_TRANSFER",
    /**
     * Funds are being transferred as part of a Division migration
     */
    'DIVISION_MIGRATION' = "DIVISION_MIGRATION",
    /**
     * Funds are being transferred as part of a Site migration
     */
    'SITE_MIGRATION' = "SITE_MIGRATION",
    /**
     * Funds are being transferred as part of an Account adjustment
     */
    'ADJUSTMENT' = "ADJUSTMENT"
}
export declare const FundingReasonDescription: {
    CLIENT_FUNDING: string;
    ACCOUNT_TRANSFER: string;
    DIVISION_MIGRATION: string;
    SITE_MIGRATION: string;
    ADJUSTMENT: string;
};
/**
 * The reason that the Market Order was created https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum MarketOrderReason {
    /**
     * The Market Order was created at the request of a client
     */
    'CLIENT_ORDER' = "CLIENT_ORDER",
    /**
     * The Market Order was created to close a Trade at the request of a client
     */
    'TRADE_CLOSE' = "TRADE_CLOSE",
    /**
     * The Market Order was created to close a Position at the request of a client
     */
    'POSITION_CLOSEOUT' = "POSITION_CLOSEOUT",
    /**
     * The Market Order was created as part of a Margin Closeout
     */
    'MARGIN_CLOSEOUT' = "MARGIN_CLOSEOUT",
    /**
     * The Market Order was created to close a trade marked for delayed closure
     */
    'DELAYED_TRADE_CLOSE' = "DELAYED_TRADE_CLOSE"
}
export declare const MarketOrderReasonDescription: {
    CLIENT_ORDER: string;
    TRADE_CLOSE: string;
    POSITION_CLOSEOUT: string;
    MARGIN_CLOSEOUT: string;
    DELAYED_TRADE_CLOSE: string;
};
/**
 * The reason that the Fixed Price Order was created https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum FixedPriceOrderReason {
    /**
     * The Fixed Price Order was created as part of a platform account migration
     */
    'PLATFORM_ACCOUNT_MIGRATION' = "PLATFORM_ACCOUNT_MIGRATION",
    /**
     * The Fixed Price Order was created to close a Trade as part of division account migration
     */
    'TRADE_CLOSE_DIVISION_ACCOUNT_MIGRATION' = "TRADE_CLOSE_DIVISION_ACCOUNT_MIGRATION",
    /**
     * The Fixed Price Order was created to close a Trade administratively
     */
    'TRADE_CLOSE_ADMINISTRATIVE_ACTION' = "TRADE_CLOSE_ADMINISTRATIVE_ACTION"
}
export declare const FixedPriceOrderReasonDescription: {
    PLATFORM_ACCOUNT_MIGRATION: string;
    TRADE_CLOSE_DIVISION_ACCOUNT_MIGRATION: string;
    TRADE_CLOSE_ADMINISTRATIVE_ACTION: string;
};
/**
 * The reason that the Limit Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum LimitOrderReason {
    /**
     * The Limit Order was initiated at the request of a client
     */
    'CLIENT_ORDER' = "CLIENT_ORDER",
    /**
     * The Limit Order was initiated as a replacement for an existing Order
     */
    'REPLACEMENT' = "REPLACEMENT"
}
export declare const LimitOrderReasonDescription: {
    CLIENT_ORDER: string;
    REPLACEMENT: string;
};
/**
 * The reason that the Stop Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum StopOrderReason {
    /**
     * The Stop Order was initiated at the request of a client
     */
    'CLIENT_ORDER' = "CLIENT_ORDER",
    /**
     * The Stop Order was initiated as a replacement for an existing Order
     */
    'REPLACEMENT' = "REPLACEMENT"
}
export declare const StopOrderReasonDescription: {
    CLIENT_ORDER: string;
    REPLACEMENT: string;
};
/**
 * The reason that the Market-if-touched Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum MarketIfTouchedOrderReason {
    /**
     * The Market-if-touched Order was initiated at the request of a client
     */
    'CLIENT_ORDER' = "CLIENT_ORDER",
    /**
     * The Market-if-touched Order was initiated as a replacement for an existing Order
     */
    'REPLACEMENT' = "REPLACEMENT"
}
export declare const MarketIfTouchedOrderReasonDescription: {
    CLIENT_ORDER: string;
    REPLACEMENT: string;
};
/**
 * The reason that the Take Profit Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum TakeProfitOrderReason {
    /**
     * The Take Profit Order was initiated at the request of a client
     */
    'CLIENT_ORDER' = "CLIENT_ORDER",
    /**
     * The Take Profit Order was initiated as a replacement for an existing Order
     */
    'REPLACEMENT' = "REPLACEMENT",
    /**
     * The Take Profit Order was initiated automatically when an Order was filled that opened a new Trade requiring a Take Profit Order.
     */
    'ON_FILL' = "ON_FILL"
}
export declare const TakeProfitOrderReasonDescription: {
    CLIENT_ORDER: string;
    REPLACEMENT: string;
    ON_FILL: string;
};
/**
 * The reason that the Stop Loss Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum StopLossOrderReason {
    /**
     * The Stop Loss Order was initiated at the request of a client
     */
    'CLIENT_ORDER' = "CLIENT_ORDER",
    /**
     * The Stop Loss Order was initiated as a replacement for an existing Order
     */
    'REPLACEMENT' = "REPLACEMENT",
    /**
     * The Stop Loss Order was initiated automatically when an Order was filled that opened a new Trade requiring a Stop Loss Order.
     */
    'ON_FILL' = "ON_FILL"
}
export declare const StopLossOrderReasonDescription: {
    CLIENT_ORDER: string;
    REPLACEMENT: string;
    ON_FILL: string;
};
/**
 * The reason that the Trailing Stop Loss Order was initiated https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum TrailingStopLossOrderReason {
    /**
     * The Trailing Stop Loss Order was initiated at the request of a client
     */
    'CLIENT_ORDER' = "CLIENT_ORDER",
    /**
     * The Trailing Stop Loss Order was initiated as a replacement for an existing Order
     */
    'REPLACEMENT' = "REPLACEMENT",
    /**
     * The Trailing Stop Loss Order was initiated automatically when an Order was filled that opened a new Trade requiring a Trailing Stop Loss Order.
     */
    'ON_FILL' = "ON_FILL"
}
export declare const TrailingStopLossOrderReasonDescription: {
    CLIENT_ORDER: string;
    REPLACEMENT: string;
    ON_FILL: string;
};
/**
 * The reason that an Order was filled https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum OrderFillReason {
    /**
     * The Order filled was a Limit Order
     */
    'LIMIT_ORDER' = "LIMIT_ORDER",
    /**
     * The Order filled was a Stop Order
     */
    'STOP_ORDER' = "STOP_ORDER",
    /**
     * The Order filled was a Market-if-touched Order
     */
    'MARKET_IF_TOUCHED_ORDER' = "MARKET_IF_TOUCHED_ORDER",
    /**
     * The Order filled was a Take Profit Order
     */
    'TAKE_PROFIT_ORDER' = "TAKE_PROFIT_ORDER",
    /**
     * The Order filled was a Stop Loss Order
     */
    'STOP_LOSS_ORDER' = "STOP_LOSS_ORDER",
    /**
     * The Order filled was a Trailing Stop Loss Order
     */
    'TRAILING_STOP_LOSS_ORDER' = "TRAILING_STOP_LOSS_ORDER",
    /**
     * The Order filled was a Market Order
     */
    'MARKET_ORDER' = "MARKET_ORDER",
    /**
     * The Order filled was a Market Order used to explicitly close a Trade
     */
    'MARKET_ORDER_TRADE_CLOSE' = "MARKET_ORDER_TRADE_CLOSE",
    /**
     * The Order filled was a Market Order used to explicitly close a Position
     */
    'MARKET_ORDER_POSITION_CLOSEOUT' = "MARKET_ORDER_POSITION_CLOSEOUT",
    /**
     * The Order filled was a Market Order used for a Margin Closeout
     */
    'MARKET_ORDER_MARGIN_CLOSEOUT' = "MARKET_ORDER_MARGIN_CLOSEOUT",
    /**
     * The Order filled was a Market Order used for a delayed Trade close
     */
    'MARKET_ORDER_DELAYED_TRADE_CLOSE' = "MARKET_ORDER_DELAYED_TRADE_CLOSE",
    /**
     * The Order filled was a Fixed Price Order
     */
    'FIXED_PRICE_ORDER' = "FIXED_PRICE_ORDER",
    /**
     * The Order filled was a Fixed Price Order created as part of a platform account migration
     */
    'FIXED_PRICE_ORDER_PLATFORM_ACCOUNT_MIGRATION' = "FIXED_PRICE_ORDER_PLATFORM_ACCOUNT_MIGRATION",
    /**
     * The Order filled was a Fixed Price Order created to close a Trade as part of division account migration
     */
    'FIXED_PRICE_ORDER_DIVISION_ACCOUNT_MIGRATION' = "FIXED_PRICE_ORDER_DIVISION_ACCOUNT_MIGRATION",
    /**
     * The Order filled was a Fixed Price Order created to close a Trade administratively
     */
    'FIXED_PRICE_ORDER_ADMINISTRATIVE_ACTION' = "FIXED_PRICE_ORDER_ADMINISTRATIVE_ACTION"
}
export declare const OrderFillReasonDescription: {
    LIMIT_ORDER: string;
    STOP_ORDER: string;
    MARKET_IF_TOUCHED_ORDER: string;
    TAKE_PROFIT_ORDER: string;
    STOP_LOSS_ORDER: string;
    TRAILING_STOP_LOSS_ORDER: string;
    MARKET_ORDER: string;
    MARKET_ORDER_TRADE_CLOSE: string;
    MARKET_ORDER_POSITION_CLOSEOUT: string;
    MARKET_ORDER_MARGIN_CLOSEOUT: string;
    MARKET_ORDER_DELAYED_TRADE_CLOSE: string;
    FIXED_PRICE_ORDER: string;
    FIXED_PRICE_ORDER_PLATFORM_ACCOUNT_MIGRATION: string;
    FIXED_PRICE_ORDER_DIVISION_ACCOUNT_MIGRATION: string;
    FIXED_PRICE_ORDER_ADMINISTRATIVE_ACTION: string;
};
/**
 * The reason that an Order was cancelled. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum OrderCancelReason {
    /**
     * The Order was cancelled because at the time of filling, an unexpected internal server error occurred.
     */
    'INTERNAL_SERVER_ERROR' = "INTERNAL_SERVER_ERROR",
    /**
     * The Order was cancelled because at the time of filling the account was locked.
     */
    'ACCOUNT_LOCKED' = "ACCOUNT_LOCKED",
    /**
     * The order was to be filled, however the account is configured to not allow new positions to be created.
     */
    'ACCOUNT_NEW_POSITIONS_LOCKED' = "ACCOUNT_NEW_POSITIONS_LOCKED",
    /**
     * Filling the Order wasn’t possible because it required the creation of a dependent Order and the Account is locked for Order creation.
     */
    'ACCOUNT_ORDER_CREATION_LOCKED' = "ACCOUNT_ORDER_CREATION_LOCKED",
    /**
     * Filling the Order was not possible because the Account is locked for filling Orders.
     */
    'ACCOUNT_ORDER_FILL_LOCKED' = "ACCOUNT_ORDER_FILL_LOCKED",
    /**
     * The Order was cancelled explicitly at the request of the client.
     */
    'CLIENT_REQUEST' = "CLIENT_REQUEST",
    /**
     * The Order cancelled because it is being migrated to another account.
     */
    'MIGRATION' = "MIGRATION",
    /**
     * Filling the Order wasn’t possible because the Order’s instrument was halted.
     */
    'MARKET_HALTED' = "MARKET_HALTED",
    /**
     * The Order is linked to an open Trade that was closed.
     */
    'LINKED_TRADE_CLOSED' = "LINKED_TRADE_CLOSED",
    /**
     * The time in force specified for this order has passed.
     */
    'TIME_IN_FORCE_EXPIRED' = "TIME_IN_FORCE_EXPIRED",
    /**
     * Filling the Order wasn’t possible because the Account had insufficient margin.
     */
    'INSUFFICIENT_MARGIN' = "INSUFFICIENT_MARGIN",
    /**
     * Filling the Order would have resulted in a a FIFO violation.
     */
    'FIFO_VIOLATION' = "FIFO_VIOLATION",
    /**
     * Filling the Order would have violated the Order’s price bound.
     */
    'BOUNDS_VIOLATION' = "BOUNDS_VIOLATION",
    /**
     * The Order was cancelled for replacement at the request of the client.
     */
    'CLIENT_REQUEST_REPLACED' = "CLIENT_REQUEST_REPLACED",
    /**
     * Filling the Order wasn’t possible because enough liquidity available.
     */
    'INSUFFICIENT_LIQUIDITY' = "INSUFFICIENT_LIQUIDITY",
    /**
     * Filling the Order would have resulted in the creation of a Take Profit Order with a GTD time in the past.
     */
    'TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST' = "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST",
    /**
     * Filling the Order would result in the creation of a Take Profit Order that would have been filled immediately, closing the new Trade at a loss.
     */
    'TAKE_PROFIT_ON_FILL_LOSS' = "TAKE_PROFIT_ON_FILL_LOSS",
    /**
     * Filling the Order would result in the creation of a Take Profit Loss Order that would close the new Trade at a loss when filled.
     */
    'LOSING_TAKE_PROFIT' = "LOSING_TAKE_PROFIT",
    /**
     * Filling the Order would have resulted in the creation of a Stop Loss Order with a GTD time in the past.
     */
    'STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST' = "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST",
    /**
     * Filling the Order would result in the creation of a Stop Loss Order that would have been filled immediately, closing the new Trade at a loss.
     */
    'STOP_LOSS_ON_FILL_LOSS' = "STOP_LOSS_ON_FILL_LOSS",
    /**
     * Filling the Order would result in the creation of a Stop Loss Order whose price would be zero or negative due to the specified distance.
     */
    'STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED' = "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED",
    /**
     * Filling the Order would not result in the creation of Stop Loss Order, however the Account’s configuration requires that all Trades have a Stop Loss Order attached to them.
     */
    'STOP_LOSS_ON_FILL_REQUIRED' = "STOP_LOSS_ON_FILL_REQUIRED",
    /**
     * Filling the Order would not result in the creation of a guaranteed Stop Loss Order, however the Account’s configuration requires that all Trades have a guaranteed Stop Loss Order attached to them.
     */
    'STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED' = "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED",
    /**
     * Filling the Order would result in the creation of a guaranteed Stop Loss Order, however the Account’s configuration does not allow guaranteed Stop Loss Orders.
     */
    'STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED' = "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED",
    /**
     * Filling the Order would result in the creation of a guaranteed Stop Loss Order with a distance smaller than the configured minimum distance.
     */
    'STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET' = "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET",
    /**
     * Filling the Order would result in the creation of a guaranteed Stop Loss Order with trigger price and number of units that that violates the account’s guaranteed Stop Loss Order level restriction.
     */
    'STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED' = "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED",
    /**
     * Filling the Order would result in the creation of a guaranteed Stop Loss Order for a hedged Trade, however the Account’s configuration does not allow guaranteed Stop Loss Orders for hedged Trades/Positions.
     */
    'STOP_LOSS_ON_FILL_GUARANTEED_HEDGING_NOT_ALLOWED' = "STOP_LOSS_ON_FILL_GUARANTEED_HEDGING_NOT_ALLOWED",
    /**
     * Filling the Order would result in the creation of a Stop Loss Order whose TimeInForce value is invalid. A likely cause would be if the Account requires guaranteed stop loss orders and the TimeInForce value were not GTC.
     */
    'STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID' = "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID",
    /**
     * Filling the Order would result in the creation of a Stop Loss Order whose TriggerCondition value is invalid. A likely cause would be if the stop loss order is guaranteed and the TimeInForce is not TRIGGER_DEFAULT or TRIGGER_BID for a long trade, or not TRIGGER_DEFAULT or TRIGGER_ASK for a short trade.
     */
    'STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID' = "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID",
    /**
     * Filling the Order would result in the creation of a Take Profit Order whose price would be zero or negative due to the specified distance.
     */
    'TAKE_PROFIT_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED' = "TAKE_PROFIT_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED",
    /**
     * Filling the Order would have resulted in the creation of a Trailing Stop Loss Order with a GTD time in the past.
     */
    'TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST' = "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST",
    /**
     * Filling the Order would result in the creation of a new Open Trade with a client Trade ID already in use.
     */
    'CLIENT_TRADE_ID_ALREADY_EXISTS' = "CLIENT_TRADE_ID_ALREADY_EXISTS",
    /**
     * Closing out a position wasn’t fully possible.
     */
    'POSITION_CLOSEOUT_FAILED' = "POSITION_CLOSEOUT_FAILED",
    /**
     * Filling the Order would cause the maximum open trades allowed for the Account to be exceeded.
     */
    'OPEN_TRADES_ALLOWED_EXCEEDED' = "OPEN_TRADES_ALLOWED_EXCEEDED",
    /**
     * Filling the Order would have resulted in exceeding the number of pending Orders allowed for the Account.
     */
    'PENDING_ORDERS_ALLOWED_EXCEEDED' = "PENDING_ORDERS_ALLOWED_EXCEEDED",
    /**
     * Filling the Order would have resulted in the creation of a Take Profit Order with a client Order ID that is already in use.
     */
    'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS' = "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS",
    /**
     * Filling the Order would have resulted in the creation of a Stop Loss Order with a client Order ID that is already in use.
     */
    'STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS' = "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS",
    /**
     * Filling the Order would have resulted in the creation of a Trailing Stop Loss Order with a client Order ID that is already in use.
     */
    'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS' = "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS",
    /**
     * Filling the Order would have resulted in the Account’s maximum position size limit being exceeded for the Order’s instrument.
     */
    'POSITION_SIZE_EXCEEDED' = "POSITION_SIZE_EXCEEDED",
    /**
     * Filling the Order would result in the creation of a Trade, however there already exists an opposing (hedged) Trade that has a guaranteed Stop Loss Order attached to it. Guaranteed Stop Loss Orders cannot be combined with hedged positions.
     */
    'HEDGING_GSLO_VIOLATION' = "HEDGING_GSLO_VIOLATION",
    /**
     * Filling the order would cause the maximum position value allowed for the account to be exceeded. The Order has been cancelled as a result.
     */
    'ACCOUNT_POSITION_VALUE_LIMIT_EXCEEDED' = "ACCOUNT_POSITION_VALUE_LIMIT_EXCEEDED",
    /**
     * Filling the order would require the creation of a short trade, however the instrument is configured such that orders being filled using bid prices can only reduce existing positions. New short positions cannot be created, but existing long positions may be reduced or closed.
     */
    'INSTRUMENT_BID_REDUCE_ONLY' = "INSTRUMENT_BID_REDUCE_ONLY",
    /**
     * Filling the order would require the creation of a long trade, however the instrument is configured such that orders being filled using ask prices can only reduce existing positions. New long positions cannot be created, but existing short positions may be reduced or closed.
     */
    'INSTRUMENT_ASK_REDUCE_ONLY' = "INSTRUMENT_ASK_REDUCE_ONLY",
    /**
     * Filling the order would require using the bid, however the instrument is configured such that the bids are halted, and so no short orders may be filled.
     */
    'INSTRUMENT_BID_HALTED' = "INSTRUMENT_BID_HALTED",
    /**
     * Filling the order would require using the ask, however the instrument is configured such that the asks are halted, and so no long orders may be filled.
     */
    'INSTRUMENT_ASK_HALTED' = "INSTRUMENT_ASK_HALTED",
    /**
     * Filling the Order would result in the creation of a Guaranteed Stop Loss Order (GSLO). Since the trade is long the GSLO would be short, however the bid side is currently halted. GSLOs cannot be created in this situation.
     */
    'STOP_LOSS_ON_FILL_GUARANTEED_BID_HALTED' = "STOP_LOSS_ON_FILL_GUARANTEED_BID_HALTED",
    /**
     * Filling the Order would result in the creation of a Guaranteed Stop Loss Order (GSLO). Since the trade is short the GSLO would be long, however the ask side is currently halted. GSLOs cannot be created in this situation.
     */
    'STOP_LOSS_ON_FILL_GUARANTEED_ASK_HALTED' = "STOP_LOSS_ON_FILL_GUARANTEED_ASK_HALTED",
    /**
     * Filling the Order would have resulted in a new Trade that violates the FIFO violation safeguard constraints.
     */
    'FIFO_VIOLATION_SAFEGUARD_VIOLATION' = "FIFO_VIOLATION_SAFEGUARD_VIOLATION",
    /**
     * Filling the Order would have reduced an existing Trade such that the reduced Trade violates the FIFO violation safeguard constraints.
     */
    'FIFO_VIOLATION_SAFEGUARD_PARTIAL_CLOSE_VIOLATION' = "FIFO_VIOLATION_SAFEGUARD_PARTIAL_CLOSE_VIOLATION"
}
export declare const OrderCancelReasonDescription: {
    INTERNAL_SERVER_ERROR: string;
    ACCOUNT_LOCKED: string;
    ACCOUNT_NEW_POSITIONS_LOCKED: string;
    ACCOUNT_ORDER_CREATION_LOCKED: string;
    ACCOUNT_ORDER_FILL_LOCKED: string;
    CLIENT_REQUEST: string;
    MIGRATION: string;
    MARKET_HALTED: string;
    LINKED_TRADE_CLOSED: string;
    TIME_IN_FORCE_EXPIRED: string;
    INSUFFICIENT_MARGIN: string;
    FIFO_VIOLATION: string;
    BOUNDS_VIOLATION: string;
    CLIENT_REQUEST_REPLACED: string;
    INSUFFICIENT_LIQUIDITY: string;
    TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST: string;
    TAKE_PROFIT_ON_FILL_LOSS: string;
    LOSING_TAKE_PROFIT: string;
    STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST: string;
    STOP_LOSS_ON_FILL_LOSS: string;
    STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED: string;
    STOP_LOSS_ON_FILL_REQUIRED: string;
    STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED: string;
    STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED: string;
    STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET: string;
    STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED: string;
    STOP_LOSS_ON_FILL_GUARANTEED_HEDGING_NOT_ALLOWED: string;
    STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID: string;
    STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID: string;
    TAKE_PROFIT_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED: string;
    TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST: string;
    CLIENT_TRADE_ID_ALREADY_EXISTS: string;
    POSITION_CLOSEOUT_FAILED: string;
    OPEN_TRADES_ALLOWED_EXCEEDED: string;
    PENDING_ORDERS_ALLOWED_EXCEEDED: string;
    TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS: string;
    STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS: string;
    TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_ALREADY_EXISTS: string;
    POSITION_SIZE_EXCEEDED: string;
    HEDGING_GSLO_VIOLATION: string;
    ACCOUNT_POSITION_VALUE_LIMIT_EXCEEDED: string;
    INSTRUMENT_BID_REDUCE_ONLY: string;
    INSTRUMENT_ASK_REDUCE_ONLY: string;
    INSTRUMENT_BID_HALTED: string;
    INSTRUMENT_ASK_HALTED: string;
    STOP_LOSS_ON_FILL_GUARANTEED_BID_HALTED: string;
    STOP_LOSS_ON_FILL_GUARANTEED_ASK_HALTED: string;
    FIFO_VIOLATION_SAFEGUARD_VIOLATION: string;
    FIFO_VIOLATION_SAFEGUARD_PARTIAL_CLOSE_VIOLATION: string;
};
/**
 * The reason that the Market Order was created to perform a margin closeout https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum MarketOrderMarginCloseoutReason {
    /**
     * Trade closures resulted from violating OANDA’s margin policy
     */
    'MARGIN_CHECK_VIOLATION' = "MARGIN_CHECK_VIOLATION",
    /**
     * Trade closures came from a margin closeout event resulting from regulatory conditions placed on the Account’s margin call
     */
    'REGULATORY_MARGIN_CALL_VIOLATION' = "REGULATORY_MARGIN_CALL_VIOLATION",
    /**
     * Trade closures resulted from violating the margin policy imposed by regulatory requirements
     */
    'REGULATORY_MARGIN_CHECK_VIOLATION' = "REGULATORY_MARGIN_CHECK_VIOLATION"
}
export declare const MarketOrderMarginCloseoutReasonDescription: {
    MARGIN_CHECK_VIOLATION: string;
    REGULATORY_MARGIN_CALL_VIOLATION: string;
    REGULATORY_MARGIN_CHECK_VIOLATION: string;
};
/**
 * The reason that a Transaction was rejected. https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum TransactionRejectReason {
    /**
     * An unexpected internal server error has occurred
     */
    'INTERNAL_SERVER_ERROR' = "INTERNAL_SERVER_ERROR",
    /**
     * The system was unable to determine the current price for the Order’s instrument
     */
    'INSTRUMENT_PRICE_UNKNOWN' = "INSTRUMENT_PRICE_UNKNOWN",
    /**
     * The Account is not active
     */
    'ACCOUNT_NOT_ACTIVE' = "ACCOUNT_NOT_ACTIVE",
    /**
     * The Account is locked
     */
    'ACCOUNT_LOCKED' = "ACCOUNT_LOCKED",
    /**
     * The Account is locked for Order creation
     */
    'ACCOUNT_ORDER_CREATION_LOCKED' = "ACCOUNT_ORDER_CREATION_LOCKED",
    /**
     * The Account is locked for configuration
     */
    'ACCOUNT_CONFIGURATION_LOCKED' = "ACCOUNT_CONFIGURATION_LOCKED",
    /**
     * The Account is locked for deposits
     */
    'ACCOUNT_DEPOSIT_LOCKED' = "ACCOUNT_DEPOSIT_LOCKED",
    /**
     * The Account is locked for withdrawals
     */
    'ACCOUNT_WITHDRAWAL_LOCKED' = "ACCOUNT_WITHDRAWAL_LOCKED",
    /**
     * The Account is locked for Order cancellation
     */
    'ACCOUNT_ORDER_CANCEL_LOCKED' = "ACCOUNT_ORDER_CANCEL_LOCKED",
    /**
     * The instrument specified is not tradeable by the Account
     */
    'INSTRUMENT_NOT_TRADEABLE' = "INSTRUMENT_NOT_TRADEABLE",
    /**
     * Creating the Order would result in the maximum number of allowed pending Orders being exceeded
     */
    'PENDING_ORDERS_ALLOWED_EXCEEDED' = "PENDING_ORDERS_ALLOWED_EXCEEDED",
    /**
     * Neither the Order ID nor client Order ID are specified
     */
    'ORDER_ID_UNSPECIFIED' = "ORDER_ID_UNSPECIFIED",
    /**
     * The Order specified does not exist
     */
    'ORDER_DOESNT_EXIST' = "ORDER_DOESNT_EXIST",
    /**
     * The Order ID and client Order ID specified do not identify the same Order
     */
    'ORDER_IDENTIFIER_INCONSISTENCY' = "ORDER_IDENTIFIER_INCONSISTENCY",
    /**
     * Neither the Trade ID nor client Trade ID are specified
     */
    'TRADE_ID_UNSPECIFIED' = "TRADE_ID_UNSPECIFIED",
    /**
     * The Trade specified does not exist
     */
    'TRADE_DOESNT_EXIST' = "TRADE_DOESNT_EXIST",
    /**
     * The Trade ID and client Trade ID specified do not identify the same Trade
     */
    'TRADE_IDENTIFIER_INCONSISTENCY' = "TRADE_IDENTIFIER_INCONSISTENCY",
    /**
     * The Account had insufficient margin to perform the action specified. One possible reason for this is due to the creation or modification of a guaranteed StopLoss Order.
     */
    'INSUFFICIENT_MARGIN' = "INSUFFICIENT_MARGIN",
    /**
     * Order instrument has not been specified
     */
    'INSTRUMENT_MISSING' = "INSTRUMENT_MISSING",
    /**
     * The instrument specified is unknown
     */
    'INSTRUMENT_UNKNOWN' = "INSTRUMENT_UNKNOWN",
    /**
     * Order units have not been not specified
     */
    'UNITS_MISSING' = "UNITS_MISSING",
    /**
     * Order units specified are invalid
     */
    'UNITS_INVALID' = "UNITS_INVALID",
    /**
     * The units specified contain more precision than is allowed for the Order’s instrument
     */
    'UNITS_PRECISION_EXCEEDED' = "UNITS_PRECISION_EXCEEDED",
    /**
     * The units specified exceeds the maximum number of units allowed
     */
    'UNITS_LIMIT_EXCEEDED' = "UNITS_LIMIT_EXCEEDED",
    /**
     * The units specified is less than the minimum number of units required
     */
    'UNITS_MINIMUM_NOT_MET' = "UNITS_MINIMUM_NOT_MET",
    /**
     * The price has not been specified
     */
    'PRICE_MISSING' = "PRICE_MISSING",
    /**
     * The price specified is invalid
     */
    'PRICE_INVALID' = "PRICE_INVALID",
    /**
     * The price specified contains more precision than is allowed for the instrument
     */
    'PRICE_PRECISION_EXCEEDED' = "PRICE_PRECISION_EXCEEDED",
    /**
     * The price distance has not been specified
     */
    'PRICE_DISTANCE_MISSING' = "PRICE_DISTANCE_MISSING",
    /**
     * The price distance specified is invalid
     */
    'PRICE_DISTANCE_INVALID' = "PRICE_DISTANCE_INVALID",
    /**
     * The price distance specified contains more precision than is allowed for the instrument
     */
    'PRICE_DISTANCE_PRECISION_EXCEEDED' = "PRICE_DISTANCE_PRECISION_EXCEEDED",
    /**
     * The price distance exceeds that maximum allowed amount
     */
    'PRICE_DISTANCE_MAXIMUM_EXCEEDED' = "PRICE_DISTANCE_MAXIMUM_EXCEEDED",
    /**
     * The price distance does not meet the minimum allowed amount
     */
    'PRICE_DISTANCE_MINIMUM_NOT_MET' = "PRICE_DISTANCE_MINIMUM_NOT_MET",
    /**
     * The TimeInForce field has not been specified
     */
    'TIME_IN_FORCE_MISSING' = "TIME_IN_FORCE_MISSING",
    /**
     * The TimeInForce specified is invalid
     */
    'TIME_IN_FORCE_INVALID' = "TIME_IN_FORCE_INVALID",
    /**
     * The TimeInForce is GTD but no GTD timestamp is provided
     */
    'TIME_IN_FORCE_GTD_TIMESTAMP_MISSING' = "TIME_IN_FORCE_GTD_TIMESTAMP_MISSING",
    /**
     * The TimeInForce is GTD but the GTD timestamp is in the past
     */
    'TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST' = "TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST",
    /**
     * The price bound specified is invalid
     */
    'PRICE_BOUND_INVALID' = "PRICE_BOUND_INVALID",
    /**
     * The price bound specified contains more precision than is allowed for the Order’s instrument
     */
    'PRICE_BOUND_PRECISION_EXCEEDED' = "PRICE_BOUND_PRECISION_EXCEEDED",
    /**
     * Multiple Orders on fill share the same client Order ID
     */
    'ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS' = "ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS",
    /**
     * The Order does not support Trade on fill client extensions because it cannot create a new Trade
     */
    'TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED' = "TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED",
    /**
     * The client Order ID specified is invalid
     */
    'CLIENT_ORDER_ID_INVALID' = "CLIENT_ORDER_ID_INVALID",
    /**
     * The client Order ID specified is already assigned to another pending Order
     */
    'CLIENT_ORDER_ID_ALREADY_EXISTS' = "CLIENT_ORDER_ID_ALREADY_EXISTS",
    /**
     * The client Order tag specified is invalid
     */
    'CLIENT_ORDER_TAG_INVALID' = "CLIENT_ORDER_TAG_INVALID",
    /**
     * The client Order comment specified is invalid
     */
    'CLIENT_ORDER_COMMENT_INVALID' = "CLIENT_ORDER_COMMENT_INVALID",
    /**
     * The client Trade ID specified is invalid
     */
    'CLIENT_TRADE_ID_INVALID' = "CLIENT_TRADE_ID_INVALID",
    /**
     * The client Trade ID specified is already assigned to another open Trade
     */
    'CLIENT_TRADE_ID_ALREADY_EXISTS' = "CLIENT_TRADE_ID_ALREADY_EXISTS",
    /**
     * The client Trade tag specified is invalid
     */
    'CLIENT_TRADE_TAG_INVALID' = "CLIENT_TRADE_TAG_INVALID",
    /**
     * The client Trade comment is invalid
     */
    'CLIENT_TRADE_COMMENT_INVALID' = "CLIENT_TRADE_COMMENT_INVALID",
    /**
     * The OrderFillPositionAction field has not been specified
     */
    'ORDER_FILL_POSITION_ACTION_MISSING' = "ORDER_FILL_POSITION_ACTION_MISSING",
    /**
     * The OrderFillPositionAction specified is invalid
     */
    'ORDER_FILL_POSITION_ACTION_INVALID' = "ORDER_FILL_POSITION_ACTION_INVALID",
    /**
     * The TriggerCondition field has not been specified
     */
    'TRIGGER_CONDITION_MISSING' = "TRIGGER_CONDITION_MISSING",
    /**
     * The TriggerCondition specified is invalid
     */
    'TRIGGER_CONDITION_INVALID' = "TRIGGER_CONDITION_INVALID",
    /**
     * The OrderFillPositionAction field has not been specified
     */
    'ORDER_PARTIAL_FILL_OPTION_MISSING' = "ORDER_PARTIAL_FILL_OPTION_MISSING",
    /**
     * The OrderFillPositionAction specified is invalid.
     */
    'ORDER_PARTIAL_FILL_OPTION_INVALID' = "ORDER_PARTIAL_FILL_OPTION_INVALID",
    /**
     * When attempting to reissue an order (currently only a MarketIfTouched) that was immediately partially filled, it is not possible to create a correct pending Order.
     */
    'INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL' = "INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL",
    /**
     * A Take Profit Order for the specified Trade already exists
     */
    'TAKE_PROFIT_ORDER_ALREADY_EXISTS' = "TAKE_PROFIT_ORDER_ALREADY_EXISTS",
    /**
     * The Take Profit Order would cause the associated Trade to be in violation of the FIFO violation safeguard constraints.
     */
    'TAKE_PROFIT_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD' = "TAKE_PROFIT_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD",
    /**
     * The Take Profit on fill specified does not provide a price
     */
    'TAKE_PROFIT_ON_FILL_PRICE_MISSING' = "TAKE_PROFIT_ON_FILL_PRICE_MISSING",
    /**
     * The Take Profit on fill specified contains an invalid price
     */
    'TAKE_PROFIT_ON_FILL_PRICE_INVALID' = "TAKE_PROFIT_ON_FILL_PRICE_INVALID",
    /**
     * The Take Profit on fill specified contains a price with more precision than is allowed by the Order’s instrument
     */
    'TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED' = "TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED",
    /**
     * The Take Profit on fill specified does not provide a TimeInForce
     */
    'TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING' = "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING",
    /**
     * The Take Profit on fill specifies an invalid TimeInForce
     */
    'TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID' = "TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID",
    /**
     * The Take Profit on fill specifies a GTD TimeInForce but does not provide a GTD timestamp
     */
    'TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING' = "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING",
    /**
     * The Take Profit on fill specifies a GTD timestamp that is in the past
     */
    'TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST' = "TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST",
    /**
     * The Take Profit on fill client Order ID specified is invalid
     */
    'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID' = "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID",
    /**
     * The Take Profit on fill client Order tag specified is invalid
     */
    'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID' = "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID",
    /**
     * The Take Profit on fill client Order comment specified is invalid
     */
    'TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID' = "TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID",
    /**
     * The Take Profit on fill specified does not provide a TriggerCondition
     */
    'TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING' = "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING",
    /**
     * The Take Profit on fill specifies an invalid TriggerCondition
     */
    'TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID' = "TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID",
    /**
     * A Stop Loss Order for the specified Trade already exists
     */
    'STOP_LOSS_ORDER_ALREADY_EXISTS' = "STOP_LOSS_ORDER_ALREADY_EXISTS",
    /**
     * An attempt was made to to create a non-guaranteed stop loss order in an account that requires all stop loss orders to be guaranteed.
     */
    'STOP_LOSS_ORDER_GUARANTEED_REQUIRED' = "STOP_LOSS_ORDER_GUARANTEED_REQUIRED",
    /**
     * An attempt to create a guaranteed stop loss order with a price that is within the current tradeable spread.
     */
    'STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD' = "STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD",
    /**
     * An attempt was made to create a guaranteed Stop Loss Order, however the Account’s configuration does not allow guaranteed Stop Loss Orders.
     */
    'STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED' = "STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED",
    /**
     * An attempt was made to create a guaranteed Stop Loss Order when the market was halted.
     */
    'STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION' = "STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION",
    /**
     * An attempt was made to re-create a guaranteed Stop Loss Order with a tighter fill price when the market was halted.
     */
    'STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION' = "STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION",
    /**
     * An attempt was made to create a guaranteed Stop Loss Order on a hedged Trade (ie there is an existing open Trade in the opposing direction), however the Account’s configuration does not allow guaranteed Stop Loss Orders for hedged Trades/Positions.
     */
    'STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED' = "STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED",
    /**
     * An attempt was made to create a guaranteed Stop Loss Order, however the distance between the current price and the trigger price does not meet the Account’s configured minimum Guaranteed Stop Loss distance.
     */
    'STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET' = "STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET",
    /**
     * An attempt was made to cancel a Stop Loss Order, however the Account’s configuration requires every Trade have an associated Stop Loss Order.
     */
    'STOP_LOSS_ORDER_NOT_CANCELABLE' = "STOP_LOSS_ORDER_NOT_CANCELABLE",
    /**
     * An attempt was made to cancel and replace a Stop Loss Order, however the Account’s configuration prevents the modification of Stop Loss Orders.
     */
    'STOP_LOSS_ORDER_NOT_REPLACEABLE' = "STOP_LOSS_ORDER_NOT_REPLACEABLE",
    /**
     * An attempt was made to create a guaranteed Stop Loss Order, however doing so would exceed the Account’s configured guaranteed StopLoss Order level restriction volume.
     */
    'STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED' = "STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED",
    /**
     * The Stop Loss Order request contains both the price and distance fields.
     */
    'STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED' = "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED",
    /**
     * The Stop Loss Order request contains neither the price nor distance fields.
     */
    'STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING' = "STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING",
    /**
     * The Stop Loss Order would cause the associated Trade to be in violation of the FIFO violation safeguard constraints
     */
    'STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD' = "STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD",
    /**
     * An attempt to create a pending Order was made with no Stop Loss Order on fill specified and the Account’s configuration requires that every Trade have an associated Stop Loss Order.
     */
    'STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER' = "STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER",
    /**
     * An attempt to create a pending Order was made with a Stop Loss Order on fill that was explicitly configured to be guaranteed, however the Account’s configuration does not allow guaranteed Stop Loss Orders.
     */
    'STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED' = "STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED",
    /**
     * An attempt to create a pending Order was made with a Stop Loss Order on fill that was explicitly configured to be not guaranteed, however the Account’s configuration requires guaranteed Stop Loss Orders.
     */
    'STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED' = "STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED",
    /**
     * The Stop Loss on fill specified does not provide a price
     */
    'STOP_LOSS_ON_FILL_PRICE_MISSING' = "STOP_LOSS_ON_FILL_PRICE_MISSING",
    /**
     * The Stop Loss on fill specifies an invalid price
     */
    'STOP_LOSS_ON_FILL_PRICE_INVALID' = "STOP_LOSS_ON_FILL_PRICE_INVALID",
    /**
     * The Stop Loss on fill specifies a price with more precision than is allowed by the Order’s instrument
     */
    'STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED' = "STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED",
    /**
     * An attempt to create a pending Order was made with the distance between the guaranteed Stop Loss Order on fill’s price and the pending Order’s price is less than the Account’s configured minimum guaranteed stop loss distance.
     */
    'STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET' = "STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET",
    /**
     * An attempt to create a pending Order was made with a guaranteed Stop Loss Order on fill configured, and the Order’s units exceed the Account’s configured guaranteed StopLoss Order level restriction volume.
     */
    'STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED' = "STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED",
    /**
     * The Stop Loss on fill distance is invalid
     */
    'STOP_LOSS_ON_FILL_DISTANCE_INVALID' = "STOP_LOSS_ON_FILL_DISTANCE_INVALID",
    /**
     * The Stop Loss on fill price distance exceeds the maximum allowed amount
     */
    'STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED' = "STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED",
    /**
     * The Stop Loss on fill distance contains more precision than is allowed by the instrument
     */
    'STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED' = "STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED",
    /**
     * The Stop Loss on fill contains both the price and distance fields.
     */
    'STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED' = "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED",
    /**
     * The Stop Loss on fill contains neither the price nor distance fields.
     */
    'STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING' = "STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING",
    /**
     * The Stop Loss on fill specified does not provide a TimeInForce
     */
    'STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING' = "STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING",
    /**
     * The Stop Loss on fill specifies an invalid TimeInForce
     */
    'STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID' = "STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID",
    /**
     * The Stop Loss on fill specifies a GTD TimeInForce but does not provide a GTD timestamp
     */
    'STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING' = "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING",
    /**
     * The Stop Loss on fill specifies a GTD timestamp that is in the past
     */
    'STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST' = "STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST",
    /**
     * The Stop Loss on fill client Order ID specified is invalid
     */
    'STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID' = "STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID",
    /**
     * The Stop Loss on fill client Order tag specified is invalid
     */
    'STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID' = "STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID",
    /**
     * The Stop Loss on fill client Order comment specified is invalid
     */
    'STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID' = "STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID",
    /**
     * The Stop Loss on fill specified does not provide a TriggerCondition
     */
    'STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING' = "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING",
    /**
     * The Stop Loss on fill specifies an invalid TriggerCondition
     */
    'STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID' = "STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID",
    /**
     * A Trailing Stop Loss Order for the specified Trade already exists
     */
    'TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS' = "TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS",
    /**
     * The Trailing Stop Loss Order would cause the associated Trade to be in violation of the FIFO violation safeguard constraints
     */
    'TRAILING_STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD' = "TRAILING_STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD",
    /**
     * The Trailing Stop Loss on fill specified does not provide a distance
     */
    'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING' = "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING",
    /**
     * The Trailing Stop Loss on fill distance is invalid
     */
    'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID' = "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID",
    /**
     * The Trailing Stop Loss on fill distance contains more precision than is allowed by the instrument
     */
    'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED' = "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED",
    /**
     * The Trailing Stop Loss on fill price distance exceeds the maximum allowed amount
     */
    'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED' = "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED",
    /**
     * The Trailing Stop Loss on fill price distance does not meet the minimum allowed amount
     */
    'TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET' = "TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET",
    /**
     * The Trailing Stop Loss on fill specified does not provide a TimeInForce
     */
    'TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING' = "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING",
    /**
     * The Trailing Stop Loss on fill specifies an invalid TimeInForce
     */
    'TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID' = "TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID",
    /**
     * The Trailing Stop Loss on fill TimeInForce is specified as GTD but no GTD timestamp is provided
     */
    'TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING' = "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING",
    /**
     * The Trailing Stop Loss on fill GTD timestamp is in the past
     */
    'TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST' = "TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST",
    /**
     * The Trailing Stop Loss on fill client Order ID specified is invalid
     */
    'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID' = "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID",
    /**
     * The Trailing Stop Loss on fill client Order tag specified is invalid
     */
    'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID' = "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID",
    /**
     * The Trailing Stop Loss on fill client Order comment specified is invalid
     */
    'TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID' = "TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID",
    /**
     * A client attempted to create either a Trailing Stop Loss order or an order with a Trailing Stop Loss On Fill specified, which may not yet be supported.
     */
    'TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED' = "TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED",
    /**
     * The Trailing Stop Loss on fill specified does not provide a TriggerCondition
     */
    'TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING' = "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING",
    /**
     * The Tailing Stop Loss on fill specifies an invalid TriggerCondition
     */
    'TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID' = "TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID",
    /**
     * The request to close a Trade does not specify a full or partial close
     */
    'CLOSE_TRADE_TYPE_MISSING' = "CLOSE_TRADE_TYPE_MISSING",
    /**
     * The request to close a Trade partially did not specify the number of units to close
     */
    'CLOSE_TRADE_PARTIAL_UNITS_MISSING' = "CLOSE_TRADE_PARTIAL_UNITS_MISSING",
    /**
     * The request to partially close a Trade specifies a number of units that exceeds the current size of the given Trade
     */
    'CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE' = "CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE",
    /**
     * The Position requested to be closed out does not exist
     */
    'CLOSEOUT_POSITION_DOESNT_EXIST' = "CLOSEOUT_POSITION_DOESNT_EXIST",
    /**
     * The request to closeout a Position was specified incompletely
     */
    'CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION' = "CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION",
    /**
     * A partial Position closeout request specifies a number of units that exceeds the current Position
     */
    'CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE' = "CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE",
    /**
     * The request to closeout a Position could not be fully satisfied
     */
    'CLOSEOUT_POSITION_REJECT' = "CLOSEOUT_POSITION_REJECT",
    /**
     * The request to partially closeout a Position did not specify the number of units to close.
     */
    'CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING' = "CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING",
    /**
     * The markup group ID provided is invalid
     */
    'MARKUP_GROUP_ID_INVALID' = "MARKUP_GROUP_ID_INVALID",
    /**
     * The PositionAggregationMode provided is not supported/valid.
     */
    'POSITION_AGGREGATION_MODE_INVALID' = "POSITION_AGGREGATION_MODE_INVALID",
    /**
     * No configuration parameters provided
     */
    'ADMIN_CONFIGURE_DATA_MISSING' = "ADMIN_CONFIGURE_DATA_MISSING",
    /**
     * The margin rate provided is invalid
     */
    'MARGIN_RATE_INVALID' = "MARGIN_RATE_INVALID",
    /**
     * The margin rate provided would cause an immediate margin closeout
     */
    'MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT' = "MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT",
    /**
     * The account alias string provided is invalid
     */
    'ALIAS_INVALID' = "ALIAS_INVALID",
    /**
     * No configuration parameters provided
     */
    'CLIENT_CONFIGURE_DATA_MISSING' = "CLIENT_CONFIGURE_DATA_MISSING",
    /**
     * The margin rate provided would cause the Account to enter a margin call state.
     */
    'MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL' = "MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL",
    /**
     * Funding is not possible because the requested transfer amount is invalid
     */
    'AMOUNT_INVALID' = "AMOUNT_INVALID",
    /**
     * The Account does not have sufficient balance to complete the funding request
     */
    'INSUFFICIENT_FUNDS' = "INSUFFICIENT_FUNDS",
    /**
     * Funding amount has not been specified
     */
    'AMOUNT_MISSING' = "AMOUNT_MISSING",
    /**
     * Funding reason has not been specified
     */
    'FUNDING_REASON_MISSING' = "FUNDING_REASON_MISSING",
    /**
     * The list of Order Identifiers provided for a One Cancels All Order contains an Order Identifier that refers to a Stop Loss Order. OCA groups cannot contain Stop Loss Orders.
     */
    'OCA_ORDER_IDS_STOP_LOSS_NOT_ALLOWED' = "OCA_ORDER_IDS_STOP_LOSS_NOT_ALLOWED",
    /**
     * Neither Order nor Trade on Fill client extensions were provided for modification
     */
    'CLIENT_EXTENSIONS_DATA_MISSING' = "CLIENT_EXTENSIONS_DATA_MISSING",
    /**
     * The Order to be replaced has a different type than the replacing Order.
     */
    'REPLACING_ORDER_INVALID' = "REPLACING_ORDER_INVALID",
    /**
     * The replacing Order refers to a different Trade than the Order that is being replaced.
     */
    'REPLACING_TRADE_ID_INVALID' = "REPLACING_TRADE_ID_INVALID",
    /**
     * Canceling the order would cause an immediate margin closeout.
     */
    'ORDER_CANCEL_WOULD_TRIGGER_CLOSEOUT' = "ORDER_CANCEL_WOULD_TRIGGER_CLOSEOUT"
}
export declare const TransactionRejectReasonDescription: {
    INTERNAL_SERVER_ERROR: string;
    INSTRUMENT_PRICE_UNKNOWN: string;
    ACCOUNT_NOT_ACTIVE: string;
    ACCOUNT_LOCKED: string;
    ACCOUNT_ORDER_CREATION_LOCKED: string;
    ACCOUNT_CONFIGURATION_LOCKED: string;
    ACCOUNT_DEPOSIT_LOCKED: string;
    ACCOUNT_WITHDRAWAL_LOCKED: string;
    ACCOUNT_ORDER_CANCEL_LOCKED: string;
    INSTRUMENT_NOT_TRADEABLE: string;
    PENDING_ORDERS_ALLOWED_EXCEEDED: string;
    ORDER_ID_UNSPECIFIED: string;
    ORDER_DOESNT_EXIST: string;
    ORDER_IDENTIFIER_INCONSISTENCY: string;
    TRADE_ID_UNSPECIFIED: string;
    TRADE_DOESNT_EXIST: string;
    TRADE_IDENTIFIER_INCONSISTENCY: string;
    INSUFFICIENT_MARGIN: string;
    INSTRUMENT_MISSING: string;
    INSTRUMENT_UNKNOWN: string;
    UNITS_MISSING: string;
    UNITS_INVALID: string;
    UNITS_PRECISION_EXCEEDED: string;
    UNITS_LIMIT_EXCEEDED: string;
    UNITS_MINIMUM_NOT_MET: string;
    PRICE_MISSING: string;
    PRICE_INVALID: string;
    PRICE_PRECISION_EXCEEDED: string;
    PRICE_DISTANCE_MISSING: string;
    PRICE_DISTANCE_INVALID: string;
    PRICE_DISTANCE_PRECISION_EXCEEDED: string;
    PRICE_DISTANCE_MAXIMUM_EXCEEDED: string;
    PRICE_DISTANCE_MINIMUM_NOT_MET: string;
    TIME_IN_FORCE_MISSING: string;
    TIME_IN_FORCE_INVALID: string;
    TIME_IN_FORCE_GTD_TIMESTAMP_MISSING: string;
    TIME_IN_FORCE_GTD_TIMESTAMP_IN_PAST: string;
    PRICE_BOUND_INVALID: string;
    PRICE_BOUND_PRECISION_EXCEEDED: string;
    ORDERS_ON_FILL_DUPLICATE_CLIENT_ORDER_IDS: string;
    TRADE_ON_FILL_CLIENT_EXTENSIONS_NOT_SUPPORTED: string;
    CLIENT_ORDER_ID_INVALID: string;
    CLIENT_ORDER_ID_ALREADY_EXISTS: string;
    CLIENT_ORDER_TAG_INVALID: string;
    CLIENT_ORDER_COMMENT_INVALID: string;
    CLIENT_TRADE_ID_INVALID: string;
    CLIENT_TRADE_ID_ALREADY_EXISTS: string;
    CLIENT_TRADE_TAG_INVALID: string;
    CLIENT_TRADE_COMMENT_INVALID: string;
    ORDER_FILL_POSITION_ACTION_MISSING: string;
    ORDER_FILL_POSITION_ACTION_INVALID: string;
    TRIGGER_CONDITION_MISSING: string;
    TRIGGER_CONDITION_INVALID: string;
    ORDER_PARTIAL_FILL_OPTION_MISSING: string;
    ORDER_PARTIAL_FILL_OPTION_INVALID: string;
    INVALID_REISSUE_IMMEDIATE_PARTIAL_FILL: string;
    TAKE_PROFIT_ORDER_ALREADY_EXISTS: string;
    TAKE_PROFIT_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD: string;
    TAKE_PROFIT_ON_FILL_PRICE_MISSING: string;
    TAKE_PROFIT_ON_FILL_PRICE_INVALID: string;
    TAKE_PROFIT_ON_FILL_PRICE_PRECISION_EXCEEDED: string;
    TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_MISSING: string;
    TAKE_PROFIT_ON_FILL_TIME_IN_FORCE_INVALID: string;
    TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_MISSING: string;
    TAKE_PROFIT_ON_FILL_GTD_TIMESTAMP_IN_PAST: string;
    TAKE_PROFIT_ON_FILL_CLIENT_ORDER_ID_INVALID: string;
    TAKE_PROFIT_ON_FILL_CLIENT_ORDER_TAG_INVALID: string;
    TAKE_PROFIT_ON_FILL_CLIENT_ORDER_COMMENT_INVALID: string;
    TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_MISSING: string;
    TAKE_PROFIT_ON_FILL_TRIGGER_CONDITION_INVALID: string;
    STOP_LOSS_ORDER_ALREADY_EXISTS: string;
    STOP_LOSS_ORDER_GUARANTEED_REQUIRED: string;
    STOP_LOSS_ORDER_GUARANTEED_PRICE_WITHIN_SPREAD: string;
    STOP_LOSS_ORDER_GUARANTEED_NOT_ALLOWED: string;
    STOP_LOSS_ORDER_GUARANTEED_HALTED_CREATE_VIOLATION: string;
    STOP_LOSS_ORDER_GUARANTEED_HALTED_TIGHTEN_VIOLATION: string;
    STOP_LOSS_ORDER_GUARANTEED_HEDGING_NOT_ALLOWED: string;
    STOP_LOSS_ORDER_GUARANTEED_MINIMUM_DISTANCE_NOT_MET: string;
    STOP_LOSS_ORDER_NOT_CANCELABLE: string;
    STOP_LOSS_ORDER_NOT_REPLACEABLE: string;
    STOP_LOSS_ORDER_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED: string;
    STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_SPECIFIED: string;
    STOP_LOSS_ORDER_PRICE_AND_DISTANCE_BOTH_MISSING: string;
    STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD: string;
    STOP_LOSS_ON_FILL_REQUIRED_FOR_PENDING_ORDER: string;
    STOP_LOSS_ON_FILL_GUARANTEED_NOT_ALLOWED: string;
    STOP_LOSS_ON_FILL_GUARANTEED_REQUIRED: string;
    STOP_LOSS_ON_FILL_PRICE_MISSING: string;
    STOP_LOSS_ON_FILL_PRICE_INVALID: string;
    STOP_LOSS_ON_FILL_PRICE_PRECISION_EXCEEDED: string;
    STOP_LOSS_ON_FILL_GUARANTEED_MINIMUM_DISTANCE_NOT_MET: string;
    STOP_LOSS_ON_FILL_GUARANTEED_LEVEL_RESTRICTION_EXCEEDED: string;
    STOP_LOSS_ON_FILL_DISTANCE_INVALID: string;
    STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED: string;
    STOP_LOSS_ON_FILL_DISTANCE_PRECISION_EXCEEDED: string;
    STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_SPECIFIED: string;
    STOP_LOSS_ON_FILL_PRICE_AND_DISTANCE_BOTH_MISSING: string;
    STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING: string;
    STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID: string;
    STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING: string;
    STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST: string;
    STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID: string;
    STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID: string;
    STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID: string;
    STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING: string;
    STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID: string;
    TRAILING_STOP_LOSS_ORDER_ALREADY_EXISTS: string;
    TRAILING_STOP_LOSS_ORDER_WOULD_VIOLATE_FIFO_VIOLATION_SAFEGUARD: string;
    TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MISSING: string;
    TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_INVALID: string;
    TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_PRECISION_EXCEEDED: string;
    TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MAXIMUM_EXCEEDED: string;
    TRAILING_STOP_LOSS_ON_FILL_PRICE_DISTANCE_MINIMUM_NOT_MET: string;
    TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_MISSING: string;
    TRAILING_STOP_LOSS_ON_FILL_TIME_IN_FORCE_INVALID: string;
    TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_MISSING: string;
    TRAILING_STOP_LOSS_ON_FILL_GTD_TIMESTAMP_IN_PAST: string;
    TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_ID_INVALID: string;
    TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_TAG_INVALID: string;
    TRAILING_STOP_LOSS_ON_FILL_CLIENT_ORDER_COMMENT_INVALID: string;
    TRAILING_STOP_LOSS_ORDERS_NOT_SUPPORTED: string;
    TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_MISSING: string;
    TRAILING_STOP_LOSS_ON_FILL_TRIGGER_CONDITION_INVALID: string;
    CLOSE_TRADE_TYPE_MISSING: string;
    CLOSE_TRADE_PARTIAL_UNITS_MISSING: string;
    CLOSE_TRADE_UNITS_EXCEED_TRADE_SIZE: string;
    CLOSEOUT_POSITION_DOESNT_EXIST: string;
    CLOSEOUT_POSITION_INCOMPLETE_SPECIFICATION: string;
    CLOSEOUT_POSITION_UNITS_EXCEED_POSITION_SIZE: string;
    CLOSEOUT_POSITION_REJECT: string;
    CLOSEOUT_POSITION_PARTIAL_UNITS_MISSING: string;
    MARKUP_GROUP_ID_INVALID: string;
    POSITION_AGGREGATION_MODE_INVALID: string;
    ADMIN_CONFIGURE_DATA_MISSING: string;
    MARGIN_RATE_INVALID: string;
    MARGIN_RATE_WOULD_TRIGGER_CLOSEOUT: string;
    ALIAS_INVALID: string;
    CLIENT_CONFIGURE_DATA_MISSING: string;
    MARGIN_RATE_WOULD_TRIGGER_MARGIN_CALL: string;
    AMOUNT_INVALID: string;
    INSUFFICIENT_FUNDS: string;
    AMOUNT_MISSING: string;
    FUNDING_REASON_MISSING: string;
    OCA_ORDER_IDS_STOP_LOSS_NOT_ALLOWED: string;
    CLIENT_EXTENSIONS_DATA_MISSING: string;
    REPLACING_ORDER_INVALID: string;
    REPLACING_TRADE_ID_INVALID: string;
    ORDER_CANCEL_WOULD_TRIGGER_CLOSEOUT: string;
};
/**
 * A filter that can be used when fetching Transactions https://developer.oanda.com/rest-live-v20/transaction-df/
 */
export declare enum TransactionFilter {
    /**
     * Order-related Transactions. These are the Transactions that create, cancel, fill or trigger Orders
     */
    'ORDER' = "ORDER",
    /**
     * Funding-related Transactions
     */
    'FUNDING' = "FUNDING",
    /**
     * Administrative Transactions
     */
    'ADMIN' = "ADMIN",
    /**
     * Account Create Transaction
     */
    'CREATE' = "CREATE",
    /**
     * Account Close Transaction
     */
    'CLOSE' = "CLOSE",
    /**
     * Account Reopen Transaction
     */
    'REOPEN' = "REOPEN",
    /**
     * Client Configuration Transaction
     */
    'CLIENT_CONFIGURE' = "CLIENT_CONFIGURE",
    /**
     * Client Configuration Reject Transaction
     */
    'CLIENT_CONFIGURE_REJECT' = "CLIENT_CONFIGURE_REJECT",
    /**
     * Transfer Funds Transaction
     */
    'TRANSFER_FUNDS' = "TRANSFER_FUNDS",
    /**
     * Transfer Funds Reject Transaction
     */
    'TRANSFER_FUNDS_REJECT' = "TRANSFER_FUNDS_REJECT",
    /**
     * Market Order Transaction
     */
    'MARKET_ORDER' = "MARKET_ORDER",
    /**
     * Market Order Reject Transaction
     */
    'MARKET_ORDER_REJECT' = "MARKET_ORDER_REJECT",
    /**
     * Limit Order Transaction
     */
    'LIMIT_ORDER' = "LIMIT_ORDER",
    /**
     * Limit Order Reject Transaction
     */
    'LIMIT_ORDER_REJECT' = "LIMIT_ORDER_REJECT",
    /**
     * Stop Order Transaction
     */
    'STOP_ORDER' = "STOP_ORDER",
    /**
     * Stop Order Reject Transaction
     */
    'STOP_ORDER_REJECT' = "STOP_ORDER_REJECT",
    /**
     * Market if Touched Order Transaction
     */
    'MARKET_IF_TOUCHED_ORDER' = "MARKET_IF_TOUCHED_ORDER",
    /**
     * Market if Touched Order Reject Transaction
     */
    'MARKET_IF_TOUCHED_ORDER_REJECT' = "MARKET_IF_TOUCHED_ORDER_REJECT",
    /**
     * Take Profit Order Transaction
     */
    'TAKE_PROFIT_ORDER' = "TAKE_PROFIT_ORDER",
    /**
     * Take Profit Order Reject Transaction
     */
    'TAKE_PROFIT_ORDER_REJECT' = "TAKE_PROFIT_ORDER_REJECT",
    /**
     * Stop Loss Order Transaction
     */
    'STOP_LOSS_ORDER' = "STOP_LOSS_ORDER",
    /**
     * Stop Loss Order Reject Transaction
     */
    'STOP_LOSS_ORDER_REJECT' = "STOP_LOSS_ORDER_REJECT",
    /**
     * Trailing Stop Loss Order Transaction
     */
    'TRAILING_STOP_LOSS_ORDER' = "TRAILING_STOP_LOSS_ORDER",
    /**
     * Trailing Stop Loss Order Reject Transaction
     */
    'TRAILING_STOP_LOSS_ORDER_REJECT' = "TRAILING_STOP_LOSS_ORDER_REJECT",
    /**
     * One Cancels All Order Transaction
     */
    'ONE_CANCELS_ALL_ORDER' = "ONE_CANCELS_ALL_ORDER",
    /**
     * One Cancels All Order Reject Transaction
     */
    'ONE_CANCELS_ALL_ORDER_REJECT' = "ONE_CANCELS_ALL_ORDER_REJECT",
    /**
     * One Cancels All Order Trigger Transaction
     */
    'ONE_CANCELS_ALL_ORDER_TRIGGERED' = "ONE_CANCELS_ALL_ORDER_TRIGGERED",
    /**
     * Order Fill Transaction
     */
    'ORDER_FILL' = "ORDER_FILL",
    /**
     * Order Cancel Transaction
     */
    'ORDER_CANCEL' = "ORDER_CANCEL",
    /**
     * Order Cancel Reject Transaction
     */
    'ORDER_CANCEL_REJECT' = "ORDER_CANCEL_REJECT",
    /**
     * Order Client Extensions Modify Transaction
     */
    'ORDER_CLIENT_EXTENSIONS_MODIFY' = "ORDER_CLIENT_EXTENSIONS_MODIFY",
    /**
     * Order Client Extensions Modify Reject Transaction
     */
    'ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT' = "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT",
    /**
     * Trade Client Extensions Modify Transaction
     */
    'TRADE_CLIENT_EXTENSIONS_MODIFY' = "TRADE_CLIENT_EXTENSIONS_MODIFY",
    /**
     * Trade Client Extensions Modify Reject Transaction
     */
    'TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT' = "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT",
    /**
     * Margin Call Enter Transaction
     */
    'MARGIN_CALL_ENTER' = "MARGIN_CALL_ENTER",
    /**
     * Margin Call Extend Transaction
     */
    'MARGIN_CALL_EXTEND' = "MARGIN_CALL_EXTEND",
    /**
     * Margin Call Exit Transaction
     */
    'MARGIN_CALL_EXIT' = "MARGIN_CALL_EXIT",
    /**
     * Delayed Trade Closure Transaction
     */
    'DELAYED_TRADE_CLOSURE' = "DELAYED_TRADE_CLOSURE",
    /**
     * Daily Financing Transaction
     */
    'DAILY_FINANCING' = "DAILY_FINANCING",
    /**
     * Reset Resettable PL Transaction
     */
    'RESET_RESETTABLE_PL' = "RESET_RESETTABLE_PL"
}
export declare const TransactionFilterDescription: {
    ORDER: string;
    FUNDING: string;
    ADMIN: string;
    CREATE: string;
    CLOSE: string;
    REOPEN: string;
    CLIENT_CONFIGURE: string;
    CLIENT_CONFIGURE_REJECT: string;
    TRANSFER_FUNDS: string;
    TRANSFER_FUNDS_REJECT: string;
    MARKET_ORDER: string;
    MARKET_ORDER_REJECT: string;
    LIMIT_ORDER: string;
    LIMIT_ORDER_REJECT: string;
    STOP_ORDER: string;
    STOP_ORDER_REJECT: string;
    MARKET_IF_TOUCHED_ORDER: string;
    MARKET_IF_TOUCHED_ORDER_REJECT: string;
    TAKE_PROFIT_ORDER: string;
    TAKE_PROFIT_ORDER_REJECT: string;
    STOP_LOSS_ORDER: string;
    STOP_LOSS_ORDER_REJECT: string;
    TRAILING_STOP_LOSS_ORDER: string;
    TRAILING_STOP_LOSS_ORDER_REJECT: string;
    ONE_CANCELS_ALL_ORDER: string;
    ONE_CANCELS_ALL_ORDER_REJECT: string;
    ONE_CANCELS_ALL_ORDER_TRIGGERED: string;
    ORDER_FILL: string;
    ORDER_CANCEL: string;
    ORDER_CANCEL_REJECT: string;
    ORDER_CLIENT_EXTENSIONS_MODIFY: string;
    ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT: string;
    TRADE_CLIENT_EXTENSIONS_MODIFY: string;
    TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT: string;
    MARGIN_CALL_ENTER: string;
    MARGIN_CALL_EXTEND: string;
    MARGIN_CALL_EXIT: string;
    DELAYED_TRADE_CLOSURE: string;
    DAILY_FINANCING: string;
    RESET_RESETTABLE_PL: string;
};
export declare class DividendAdjustmentTransaction {
    /**
     * The Transaction's Identifier.
     */
    id?: TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time?: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID?: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID?: account.AccountID;
    /**
     * The ID of the 'batch' that the Transaction belongs to. Transactions in
     * the same batch are applied to the Account simultaneously.
     */
    batchID?: TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID?: RequestID;
    /**
     * The Type of the Transaction. Always set to 'DIVIDEND_ADJUSTMENT' for a
     * DividendAdjustmentTransaction.
     */
    type?: TransactionType;
    /**
     * The name of the instrument for the dividendAdjustment transaction
     */
    instrument?: primitives.InstrumentName;
    /**
     * The total dividend adjustment amount paid or collected in the Account's
     * home currency for the Account as a result of applying the
     * DividendAdjustment Transaction. This is the sum of the dividend
     * adjustments paid/collected for each OpenTradeDividendAdjustment found
     * within the Transaction.
     */
    dividendAdjustment?: primitives.AccountUnits;
    /**
     * The Account balance after applying the DividendAdjustment Transaction
     */
    accountBalance?: primitives.AccountUnits;
    /**
     * The dividend adjustment payment/collection details for each open Trade,
     * within the Account, for which a dividend adjustment is to be paid or
     * collected.
     */
    openTradeDividendAdjustments?: OpenTradeDividendAdjustment[];
}
export declare class OpenTradeDividendAdjustment {
    /**
     * The ID of the Trade for which the dividend adjustment is to be paid or
     * collected.
     */
    tradeID?: trade.TradeID;
    /**
     * The dividend adjustment amount to pay or collect for the Trade.
     */
    dividendAdjustment?: primitives.AccountUnits;
}
