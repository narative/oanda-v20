import { Definition, Property } from './base';
import * as pricing from './pricing';
import * as primitives from './primitives';
export declare const Transaction_Properties: Property[];
export declare class Transaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    constructor(data: any);
    static create(transaction: any): Transaction | MarketOrderTransaction | OrderFillTransaction | OrderCancelTransaction | MarketOrderRejectTransaction | TradeClientExtensionsModifyTransaction | TradeClientExtensionsModifyRejectTransaction | TakeProfitOrderTransaction | StopLossOrderTransaction | TrailingStopLossOrderTransaction | OrderCancelRejectTransaction | TakeProfitOrderRejectTransaction | StopLossOrderRejectTransaction | TrailingStopLossOrderRejectTransaction | ClientConfigureTransaction | ClientConfigureRejectTransaction | CreateTransaction | CloseTransaction | ReopenTransaction | TransferFundsTransaction | TransferFundsRejectTransaction | FixedPriceOrderTransaction | LimitOrderTransaction | LimitOrderRejectTransaction | StopOrderTransaction | StopOrderRejectTransaction | MarketIfTouchedOrderTransaction | MarketIfTouchedOrderRejectTransaction | OrderClientExtensionsModifyTransaction | OrderClientExtensionsModifyRejectTransaction | MarginCallEnterTransaction | MarginCallExtendTransaction | MarginCallExitTransaction | DelayedTradeClosureTransaction | DailyFinancingTransaction | ResetResettablePLTransaction;
}
export declare const CreateTransaction_Properties: Property[];
export declare class CreateTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "CREATE" in a CreateTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The ID of the Division that the Account is in
     */
    divisionID: number;
    /**
     * The ID of the Site that the Account was created at
     */
    siteID: number;
    /**
     * The ID of the user that the Account was created for
     */
    accountUserID: number;
    /**
     * The number of the Account within the site/division/user
     */
    accountNumber: number;
    /**
     * The home currency of the Account
     */
    homeCurrency: primitives.Currency;
    constructor(data: any);
}
export declare const CloseTransaction_Properties: Property[];
export declare class CloseTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "CLOSE" in a CloseTransaction.
     */
    type: primitives.TransactionType;
    constructor(data: any);
}
export declare const ReopenTransaction_Properties: Property[];
export declare class ReopenTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "REOPEN" in a ReopenTransaction.
     */
    type: primitives.TransactionType;
    constructor(data: any);
}
export declare const ClientConfigureTransaction_Properties: Property[];
export declare class ClientConfigureTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "CLIENT_CONFIGURE" in a ClientConfigureTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The client-provided alias for the Account.
     */
    alias: string;
    /**
     * The margin rate override for the Account.
     */
    marginRate: primitives.DecimalNumber;
    constructor(data: any);
}
export declare const ClientConfigureRejectTransaction_Properties: Property[];
export declare class ClientConfigureRejectTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "CLIENT_CONFIGURE_REJECT" in a ClientConfigureRejectTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The client-provided alias for the Account.
     */
    alias: string;
    /**
     * The margin rate override for the Account.
     */
    marginRate: primitives.DecimalNumber;
    /**
     * The reason that the Reject Transaction was created
     */
    rejectReason: primitives.TransactionRejectReason;
    constructor(data: any);
}
export declare const TransferFundsTransaction_Properties: Property[];
export declare class TransferFundsTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "TRANSFER_FUNDS" in a TransferFundsTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The amount to deposit/withdraw from the Account in the Account's home currency. A positive value indicates a deposit, a negative value indicates a withdrawal.
     */
    amount: primitives.AccountUnits;
    /**
     * The reason that an Account is being funded.
     */
    fundingReason: primitives.FundingReason;
    /**
     * An optional comment that may be attached to a fund transfer for audit purposes
     */
    comment: string;
    /**
     * The Account's balance after funds are transferred.
     */
    accountBalance: primitives.AccountUnits;
    constructor(data: any);
}
export declare const TransferFundsRejectTransaction_Properties: Property[];
export declare class TransferFundsRejectTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "TRANSFER_FUNDS_REJECT" in a TransferFundsRejectTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The amount to deposit/withdraw from the Account in the Account's home currency. A positive value indicates a deposit, a negative value indicates a withdrawal.
     */
    amount: primitives.AccountUnits;
    /**
     * The reason that an Account is being funded.
     */
    fundingReason: primitives.FundingReason;
    /**
     * An optional comment that may be attached to a fund transfer for audit purposes
     */
    comment: string;
    /**
     * The reason that the Reject Transaction was created
     */
    rejectReason: primitives.TransactionRejectReason;
    constructor(data: any);
}
export declare const MarketOrderTransaction_Properties: Property[];
export declare class MarketOrderTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "MARKET_ORDER" in a MarketOrderTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The Market Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the Market Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The time-in-force requested for the Market Order. Restricted to FOK or IOC for a MarketOrder.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The worst price that the client is willing to have the Market Order filled at.
     */
    priceBound: primitives.PriceValue;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
     * Details of the Trade requested to be closed, only provided when the Market Order is being used to explicitly close a Trade.
     */
    tradeClose: MarketOrderTradeClose;
    /**
     * Details of the long Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a long Position.
     */
    longPositionCloseout: MarketOrderPositionCloseout;
    /**
     * Details of the short Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a short Position.
     */
    shortPositionCloseout: MarketOrderPositionCloseout;
    /**
     * Details of the Margin Closeout that this Market Order was created for
     */
    marginCloseout: MarketOrderMarginCloseout;
    /**
     * Details of the delayed Trade close that this Market Order was created for
     */
    delayedTradeClose: MarketOrderDelayedTradeClose;
    /**
     * The reason that the Market Order was created
     */
    reason: primitives.MarketOrderReason;
    /**
     * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
     */
    clientExtensions: ClientExtensions;
    /**
     * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    takeProfitOnFill: TakeProfitDetails;
    /**
     * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    stopLossOnFill: StopLossDetails;
    /**
     * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
     */
    trailingStopLossOnFill: TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: ClientExtensions;
    constructor(data: any);
}
export declare const MarketOrderRejectTransaction_Properties: Property[];
export declare class MarketOrderRejectTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "MARKET_ORDER_REJECT" in a MarketOrderRejectTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The Market Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the Market Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The time-in-force requested for the Market Order. Restricted to FOK or IOC for a MarketOrder.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The worst price that the client is willing to have the Market Order filled at.
     */
    priceBound: primitives.PriceValue;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
     * Details of the Trade requested to be closed, only provided when the Market Order is being used to explicitly close a Trade.
     */
    tradeClose: MarketOrderTradeClose;
    /**
     * Details of the long Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a long Position.
     */
    longPositionCloseout: MarketOrderPositionCloseout;
    /**
     * Details of the short Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a short Position.
     */
    shortPositionCloseout: MarketOrderPositionCloseout;
    /**
     * Details of the Margin Closeout that this Market Order was created for
     */
    marginCloseout: MarketOrderMarginCloseout;
    /**
     * Details of the delayed Trade close that this Market Order was created for
     */
    delayedTradeClose: MarketOrderDelayedTradeClose;
    /**
     * The reason that the Market Order was created
     */
    reason: primitives.MarketOrderReason;
    /**
     * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
     */
    clientExtensions: ClientExtensions;
    /**
     * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    takeProfitOnFill: TakeProfitDetails;
    /**
     * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    stopLossOnFill: StopLossDetails;
    /**
     * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
     */
    trailingStopLossOnFill: TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: ClientExtensions;
    /**
     * The reason that the Reject Transaction was created
     */
    rejectReason: primitives.TransactionRejectReason;
    constructor(data: any);
}
export declare const FixedPriceOrderTransaction_Properties: Property[];
export declare class FixedPriceOrderTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "FIXED_PRICE_ORDER" in a FixedPriceOrderTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The Fixed Price Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the Fixed Price Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The price specified for the Fixed Price Order. This price is the exact price that the Fixed Price Order will be filled at.
     */
    price: primitives.PriceValue;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
     * The state that the trade resulting from the Fixed Price Order should be set to.
     */
    tradeState: string;
    /**
     * The reason that the Fixed Price Order was created
     */
    reason: primitives.FixedPriceOrderReason;
    /**
     * The client extensions for the Fixed Price Order.
     */
    clientExtensions: ClientExtensions;
    /**
     * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    takeProfitOnFill: TakeProfitDetails;
    /**
     * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    stopLossOnFill: StopLossDetails;
    /**
     * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
     */
    trailingStopLossOnFill: TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: ClientExtensions;
    constructor(data: any);
}
export declare const LimitOrderTransaction_Properties: Property[];
export declare class LimitOrderTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "LIMIT_ORDER" in a LimitOrderTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The Limit Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the Limit Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The price threshold specified for the Limit Order. The Limit Order will only be filled by a market price that is equal to or better than this price.
     */
    price: primitives.PriceValue;
    /**
     * The time-in-force requested for the Limit Order.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the Limit Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The reason that the Limit Order was initiated
     */
    reason: primitives.LimitOrderReason;
    /**
     * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
     */
    clientExtensions: ClientExtensions;
    /**
     * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    takeProfitOnFill: TakeProfitDetails;
    /**
     * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    stopLossOnFill: StopLossDetails;
    /**
     * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
     */
    trailingStopLossOnFill: TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: ClientExtensions;
    /**
     * The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).
     */
    replacesOrderID: primitives.OrderID;
    /**
     * The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).
     */
    cancellingTransactionID: primitives.TransactionID;
    constructor(data: any);
}
export declare const LimitOrderRejectTransaction_Properties: Property[];
export declare class LimitOrderRejectTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "LIMIT_ORDER_REJECT" in a LimitOrderRejectTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The Limit Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the Limit Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The price threshold specified for the Limit Order. The Limit Order will only be filled by a market price that is equal to or better than this price.
     */
    price: primitives.PriceValue;
    /**
     * The time-in-force requested for the Limit Order.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the Limit Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The reason that the Limit Order was initiated
     */
    reason: primitives.LimitOrderReason;
    /**
     * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
     */
    clientExtensions: ClientExtensions;
    /**
     * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    takeProfitOnFill: TakeProfitDetails;
    /**
     * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    stopLossOnFill: StopLossDetails;
    /**
     * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
     */
    trailingStopLossOnFill: TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: ClientExtensions;
    /**
     * The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).
     */
    intendedReplacesOrderID: primitives.OrderID;
    /**
     * The reason that the Reject Transaction was created
     */
    rejectReason: primitives.TransactionRejectReason;
    constructor(data: any);
}
export declare const StopOrderTransaction_Properties: Property[];
export declare class StopOrderTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "STOP_ORDER" in a StopOrderTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The Stop Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the Stop Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The price threshold specified for the Stop Order. The Stop Order will only be filled by a market price that is equal to or worse than this price.
     */
    price: primitives.PriceValue;
    /**
     * The worst market price that may be used to fill this Stop Order. If the market gaps and crosses through both the price and the priceBound, the Stop Order will be cancelled instead of being filled.
     */
    priceBound: primitives.PriceValue;
    /**
     * The time-in-force requested for the Stop Order.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the Stop Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The reason that the Stop Order was initiated
     */
    reason: primitives.StopOrderReason;
    /**
     * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
     */
    clientExtensions: ClientExtensions;
    /**
     * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    takeProfitOnFill: TakeProfitDetails;
    /**
     * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    stopLossOnFill: StopLossDetails;
    /**
     * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
     */
    trailingStopLossOnFill: TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: ClientExtensions;
    /**
     * The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).
     */
    replacesOrderID: primitives.OrderID;
    /**
     * The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).
     */
    cancellingTransactionID: primitives.TransactionID;
    constructor(data: any);
}
export declare const StopOrderRejectTransaction_Properties: Property[];
export declare class StopOrderRejectTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "STOP_ORDER_REJECT" in a StopOrderRejectTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The Stop Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the Stop Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The price threshold specified for the Stop Order. The Stop Order will only be filled by a market price that is equal to or worse than this price.
     */
    price: primitives.PriceValue;
    /**
     * The worst market price that may be used to fill this Stop Order. If the market gaps and crosses through both the price and the priceBound, the Stop Order will be cancelled instead of being filled.
     */
    priceBound: primitives.PriceValue;
    /**
     * The time-in-force requested for the Stop Order.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the Stop Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The reason that the Stop Order was initiated
     */
    reason: primitives.StopOrderReason;
    /**
     * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
     */
    clientExtensions: ClientExtensions;
    /**
     * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    takeProfitOnFill: TakeProfitDetails;
    /**
     * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    stopLossOnFill: StopLossDetails;
    /**
     * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
     */
    trailingStopLossOnFill: TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: ClientExtensions;
    /**
     * The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).
     */
    intendedReplacesOrderID: primitives.OrderID;
    /**
     * The reason that the Reject Transaction was created
     */
    rejectReason: primitives.TransactionRejectReason;
    constructor(data: any);
}
export declare const MarketIfTouchedOrderTransaction_Properties: Property[];
export declare class MarketIfTouchedOrderTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "MARKET_IF_TOUCHED_ORDER" in a MarketIfTouchedOrderTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The MarketIfTouched Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the MarketIfTouched Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The price threshold specified for the MarketIfTouched Order. The MarketIfTouched Order will only be filled by a market price that crosses this price from the direction of the market price at the time when the Order was created (the initialMarketPrice). Depending on the value of the Order's price and initialMarketPrice, the MarketIfTouchedOrder will behave like a Limit or a Stop Order.
     */
    price: primitives.PriceValue;
    /**
     * The worst market price that may be used to fill this MarketIfTouched Order.
     */
    priceBound: primitives.PriceValue;
    /**
     * The time-in-force requested for the MarketIfTouched Order. Restricted to "GTC", "GFD" and "GTD" for MarketIfTouched Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the MarketIfTouched Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The reason that the Market-if-touched Order was initiated
     */
    reason: primitives.MarketIfTouchedOrderReason;
    /**
     * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
     */
    clientExtensions: ClientExtensions;
    /**
     * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    takeProfitOnFill: TakeProfitDetails;
    /**
     * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    stopLossOnFill: StopLossDetails;
    /**
     * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
     */
    trailingStopLossOnFill: TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: ClientExtensions;
    /**
     * The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).
     */
    replacesOrderID: primitives.OrderID;
    /**
     * The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).
     */
    cancellingTransactionID: primitives.TransactionID;
    constructor(data: any);
}
export declare const MarketIfTouchedOrderRejectTransaction_Properties: Property[];
export declare class MarketIfTouchedOrderRejectTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "MARKET_IF_TOUCHED_ORDER_REJECT" in a MarketIfTouchedOrderRejectTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The MarketIfTouched Order's Instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The quantity requested to be filled by the MarketIfTouched Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
     */
    units: primitives.DecimalNumber;
    /**
     * The price threshold specified for the MarketIfTouched Order. The MarketIfTouched Order will only be filled by a market price that crosses this price from the direction of the market price at the time when the Order was created (the initialMarketPrice). Depending on the value of the Order's price and initialMarketPrice, the MarketIfTouchedOrder will behave like a Limit or a Stop Order.
     */
    price: primitives.PriceValue;
    /**
     * The worst market price that may be used to fill this MarketIfTouched Order.
     */
    priceBound: primitives.PriceValue;
    /**
     * The time-in-force requested for the MarketIfTouched Order. Restricted to "GTC", "GFD" and "GTD" for MarketIfTouched Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the MarketIfTouched Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
     * Specification of how Positions in the Account are modified when the Order is filled.
     */
    positionFill: primitives.OrderPositionFill;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The reason that the Market-if-touched Order was initiated
     */
    reason: primitives.MarketIfTouchedOrderReason;
    /**
     * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
     */
    clientExtensions: ClientExtensions;
    /**
     * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    takeProfitOnFill: TakeProfitDetails;
    /**
     * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
     */
    stopLossOnFill: StopLossDetails;
    /**
     * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
     */
    trailingStopLossOnFill: TrailingStopLossDetails;
    /**
     * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
     */
    tradeClientExtensions: ClientExtensions;
    /**
     * The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).
     */
    intendedReplacesOrderID: primitives.OrderID;
    /**
     * The reason that the Reject Transaction was created
     */
    rejectReason: primitives.TransactionRejectReason;
    constructor(data: any);
}
export declare const TakeProfitOrderTransaction_Properties: Property[];
export declare class TakeProfitOrderTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "TAKE_PROFIT_ORDER" in a TakeProfitOrderTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The ID of the Trade to close when the price threshold is breached.
     */
    tradeID: primitives.TradeID;
    /**
     * The client ID of the Trade to be closed when the price threshold is breached.
     */
    clientTradeID: primitives.ClientID;
    /**
     * The price threshold specified for the TakeProfit Order. The associated Trade will be closed by a market price that is equal to or better than this threshold.
     */
    price: primitives.PriceValue;
    /**
     * The time-in-force requested for the TakeProfit Order. Restricted to "GTC", "GFD" and "GTD" for TakeProfit Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the TakeProfit Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The reason that the Take Profit Order was initiated
     */
    reason: primitives.TakeProfitOrderReason;
    /**
     * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
     */
    clientExtensions: ClientExtensions;
    /**
     * The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).
     */
    orderFillTransactionID: primitives.TransactionID;
    /**
     * The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).
     */
    replacesOrderID: primitives.OrderID;
    /**
     * The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).
     */
    cancellingTransactionID: primitives.TransactionID;
    constructor(data: any);
}
export declare const TakeProfitOrderRejectTransaction_Properties: Property[];
export declare class TakeProfitOrderRejectTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "TAKE_PROFIT_ORDER_REJECT" in a TakeProfitOrderRejectTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The ID of the Trade to close when the price threshold is breached.
     */
    tradeID: primitives.TradeID;
    /**
     * The client ID of the Trade to be closed when the price threshold is breached.
     */
    clientTradeID: primitives.ClientID;
    /**
     * The price threshold specified for the TakeProfit Order. The associated Trade will be closed by a market price that is equal to or better than this threshold.
     */
    price: primitives.PriceValue;
    /**
     * The time-in-force requested for the TakeProfit Order. Restricted to "GTC", "GFD" and "GTD" for TakeProfit Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the TakeProfit Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The reason that the Take Profit Order was initiated
     */
    reason: primitives.TakeProfitOrderReason;
    /**
     * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
     */
    clientExtensions: ClientExtensions;
    /**
     * The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).
     */
    orderFillTransactionID: primitives.TransactionID;
    /**
     * The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).
     */
    intendedReplacesOrderID: primitives.OrderID;
    /**
     * The reason that the Reject Transaction was created
     */
    rejectReason: primitives.TransactionRejectReason;
    constructor(data: any);
}
export declare const StopLossOrderTransaction_Properties: Property[];
export declare class StopLossOrderTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "STOP_LOSS_ORDER" in a StopLossOrderTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The ID of the Trade to close when the price threshold is breached.
     */
    tradeID: primitives.TradeID;
    /**
     * The client ID of the Trade to be closed when the price threshold is breached.
     */
    clientTradeID: primitives.ClientID;
    /**
     * The price threshold specified for the Stop Loss Order. If the guaranteed flag is false, the associated Trade will be closed by a market price that is equal to or worse than this threshold. If the flag is true the associated Trade will be closed at this price.
     */
    price: primitives.PriceValue;
    /**
     * Specifies the distance (in price units) from the Account's current price to use as the Stop Loss Order price. If the Trade is short the Instrument's bid price is used, and for long Trades the ask is used.
     */
    distance: primitives.DecimalNumber;
    /**
     * The time-in-force requested for the StopLoss Order. Restricted to "GTC", "GFD" and "GTD" for StopLoss Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * Flag indicating that the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.
     */
    guaranteed: boolean;
    /**
     * The fee that will be charged if the Stop Loss Order is guaranteed and the Order is filled at the guaranteed price. The value is determined at Order creation time. It is in price units and is charged for each unit of the Trade.
     */
    guaranteedExecutionPremium: primitives.DecimalNumber;
    /**
     * The reason that the Stop Loss Order was initiated
     */
    reason: primitives.StopLossOrderReason;
    /**
     * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
     */
    clientExtensions: ClientExtensions;
    /**
     * The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).
     */
    orderFillTransactionID: primitives.TransactionID;
    /**
     * The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).
     */
    replacesOrderID: primitives.OrderID;
    /**
     * The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).
     */
    cancellingTransactionID: primitives.TransactionID;
    constructor(data: any);
}
export declare const StopLossOrderRejectTransaction_Properties: Property[];
export declare class StopLossOrderRejectTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "STOP_LOSS_ORDER_REJECT" in a StopLossOrderRejectTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The ID of the Trade to close when the price threshold is breached.
     */
    tradeID: primitives.TradeID;
    /**
     * The client ID of the Trade to be closed when the price threshold is breached.
     */
    clientTradeID: primitives.ClientID;
    /**
     * The price threshold specified for the Stop Loss Order. If the guaranteed flag is false, the associated Trade will be closed by a market price that is equal to or worse than this threshold. If the flag is true the associated Trade will be closed at this price.
     */
    price: primitives.PriceValue;
    /**
     * Specifies the distance (in price units) from the Account's current price to use as the Stop Loss Order price. If the Trade is short the Instrument's bid price is used, and for long Trades the ask is used.
     */
    distance: primitives.DecimalNumber;
    /**
     * The time-in-force requested for the StopLoss Order. Restricted to "GTC", "GFD" and "GTD" for StopLoss Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * Flag indicating that the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.
     */
    guaranteed: boolean;
    /**
     * The reason that the Stop Loss Order was initiated
     */
    reason: primitives.StopLossOrderReason;
    /**
     * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
     */
    clientExtensions: ClientExtensions;
    /**
     * The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).
     */
    orderFillTransactionID: primitives.TransactionID;
    /**
     * The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).
     */
    intendedReplacesOrderID: primitives.OrderID;
    /**
     * The reason that the Reject Transaction was created
     */
    rejectReason: primitives.TransactionRejectReason;
    constructor(data: any);
}
export declare const TrailingStopLossOrderTransaction_Properties: Property[];
export declare class TrailingStopLossOrderTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "TRAILING_STOP_LOSS_ORDER" in a TrailingStopLossOrderTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The ID of the Trade to close when the price threshold is breached.
     */
    tradeID: primitives.TradeID;
    /**
     * The client ID of the Trade to be closed when the price threshold is breached.
     */
    clientTradeID: primitives.ClientID;
    /**
     * The price distance (in price units) specified for the TrailingStopLoss Order.
     */
    distance: primitives.DecimalNumber;
    /**
     * The time-in-force requested for the TrailingStopLoss Order. Restricted to "GTC", "GFD" and "GTD" for TrailingStopLoss Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The reason that the Trailing Stop Loss Order was initiated
     */
    reason: primitives.TrailingStopLossOrderReason;
    /**
     * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
     */
    clientExtensions: ClientExtensions;
    /**
     * The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).
     */
    orderFillTransactionID: primitives.TransactionID;
    /**
     * The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).
     */
    replacesOrderID: primitives.OrderID;
    /**
     * The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).
     */
    cancellingTransactionID: primitives.TransactionID;
    constructor(data: any);
}
export declare const TrailingStopLossOrderRejectTransaction_Properties: Property[];
export declare class TrailingStopLossOrderRejectTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "TRAILING_STOP_LOSS_ORDER_REJECT" in a TrailingStopLossOrderRejectTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The ID of the Trade to close when the price threshold is breached.
     */
    tradeID: primitives.TradeID;
    /**
     * The client ID of the Trade to be closed when the price threshold is breached.
     */
    clientTradeID: primitives.ClientID;
    /**
     * The price distance (in price units) specified for the TrailingStopLoss Order.
     */
    distance: primitives.DecimalNumber;
    /**
     * The time-in-force requested for the TrailingStopLoss Order. Restricted to "GTC", "GFD" and "GTD" for TrailingStopLoss Orders.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".
     */
    gtdTime: primitives.DateTime;
    /**
   * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
  This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
  A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.
   */
    triggerCondition: primitives.OrderTriggerCondition;
    /**
     * The reason that the Trailing Stop Loss Order was initiated
     */
    reason: primitives.TrailingStopLossOrderReason;
    /**
     * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
     */
    clientExtensions: ClientExtensions;
    /**
     * The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).
     */
    orderFillTransactionID: primitives.TransactionID;
    /**
     * The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).
     */
    intendedReplacesOrderID: primitives.OrderID;
    /**
     * The reason that the Reject Transaction was created
     */
    rejectReason: primitives.TransactionRejectReason;
    constructor(data: any);
}
export declare const OrderFillTransaction_Properties: Property[];
export declare class OrderFillTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "ORDER_FILL" for an OrderFillTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The ID of the Order filled.
     */
    orderID: primitives.OrderID;
    /**
     * The client Order ID of the Order filled (only provided if the client has assigned one).
     */
    clientOrderID: primitives.ClientID;
    /**
     * The name of the filled Order's instrument.
     */
    instrument: primitives.InstrumentName;
    /**
     * The number of units filled by the OrderFill.
     */
    units: primitives.DecimalNumber;
    /**
     * This is the conversion factor in effect for the Account at the time of the OrderFill for converting any gains realized in Instrument quote units into units of the Account's home currency.
     */
    gainQuoteHomeConversionFactor: primitives.DecimalNumber;
    /**
     * This is the conversion factor in effect for the Account at the time of the OrderFill for converting any losses realized in Instrument quote units into units of the Account's home currency.
     */
    lossQuoteHomeConversionFactor: primitives.DecimalNumber;
    /**
     * This field is now deprecated and should no longer be used. The individual tradesClosed, tradeReduced and tradeOpened fields contain the exact/official price each unit was filled at.
     */
    price: primitives.PriceValue;
    /**
     * The price that all of the units of the OrderFill should have been filled at, in the absence of guaranteed price execution. This factors in the Account's current ClientPrice, used liquidity and the units of the OrderFill only. If no Trades were closed with their price clamped for guaranteed stop loss enforcement, then this value will match the price fields of each Trade opened, closed, and reduced, and they will all be the exact same.
     */
    fullVWAP: primitives.PriceValue;
    /**
     * The price in effect for the account at the time of the Order fill.
     */
    fullPrice: pricing.ClientPrice;
    /**
     * The reason that an Order was filled
     */
    reason: primitives.OrderFillReason;
    /**
     * The profit or loss incurred when the Order was filled.
     */
    pl: primitives.AccountUnits;
    /**
     * The financing paid or collected when the Order was filled.
     */
    financing: primitives.AccountUnits;
    /**
     * The commission charged in the Account's home currency as a result of filling the Order. The commission is always represented as a positive quantity of the Account's home currency, however it reduces the balance in the Account.
     */
    commission: primitives.AccountUnits;
    /**
     * The total guaranteed execution fees charged for all Trades opened, closed or reduced with guaranteed Stop Loss Orders.
     */
    guaranteedExecutionFee: primitives.AccountUnits;
    /**
     * The Account's balance after the Order was filled.
     */
    accountBalance: primitives.AccountUnits;
    /**
     * The Trade that was opened when the Order was filled (only provided if filling the Order resulted in a new Trade).
     */
    tradeOpened: TradeOpen;
    /**
     * The Trades that were closed when the Order was filled (only provided if filling the Order resulted in a closing open Trades).
     */
    tradesClosed: TradeReduce[];
    /**
     * The Trade that was reduced when the Order was filled (only provided if filling the Order resulted in reducing an open Trade).
     */
    tradeReduced: TradeReduce;
    /**
     * The half spread cost for the OrderFill, which is the sum of the halfSpreadCost values in the tradeOpened, tradesClosed and tradeReduced fields. This can be a positive or negative value and is represented in the home currency of the Account.
     */
    halfSpreadCost: primitives.AccountUnits;
    constructor(data: any);
}
export declare const OrderCancelTransaction_Properties: Property[];
export declare class OrderCancelTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "ORDER_CANCEL" for an OrderCancelTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The ID of the Order cancelled
     */
    orderID: primitives.OrderID;
    /**
     * The client ID of the Order cancelled (only provided if the Order has a client Order ID).
     */
    clientOrderID: primitives.OrderID;
    /**
     * The reason that the Order was cancelled.
     */
    reason: primitives.OrderCancelReason;
    /**
     * The ID of the Order that replaced this Order (only provided if this Order was cancelled for replacement).
     */
    replacedByOrderID: primitives.OrderID;
    constructor(data: any);
}
export declare const OrderCancelRejectTransaction_Properties: Property[];
export declare class OrderCancelRejectTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "ORDER_CANCEL_REJECT" for an OrderCancelRejectTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The ID of the Order intended to be cancelled
     */
    orderID: primitives.OrderID;
    /**
     * The client ID of the Order intended to be cancelled (only provided if the Order has a client Order ID).
     */
    clientOrderID: primitives.OrderID;
    /**
     * The reason that the Reject Transaction was created
     */
    rejectReason: primitives.TransactionRejectReason;
    constructor(data: any);
}
export declare const OrderClientExtensionsModifyTransaction_Properties: Property[];
export declare class OrderClientExtensionsModifyTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "ORDER_CLIENT_EXTENSIONS_MODIFY" for a OrderClienteExtensionsModifyTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The ID of the Order who's client extensions are to be modified.
     */
    orderID: primitives.OrderID;
    /**
     * The original Client ID of the Order who's client extensions are to be modified.
     */
    clientOrderID: primitives.ClientID;
    /**
     * The new Client Extensions for the Order.
     */
    clientExtensionsModify: ClientExtensions;
    /**
     * The new Client Extensions for the Order's Trade on fill.
     */
    tradeClientExtensionsModify: ClientExtensions;
    constructor(data: any);
}
export declare const OrderClientExtensionsModifyRejectTransaction_Properties: Property[];
export declare class OrderClientExtensionsModifyRejectTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT" for a OrderClientExtensionsModifyRejectTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The ID of the Order who's client extensions are to be modified.
     */
    orderID: primitives.OrderID;
    /**
     * The original Client ID of the Order who's client extensions are to be modified.
     */
    clientOrderID: primitives.ClientID;
    /**
     * The new Client Extensions for the Order.
     */
    clientExtensionsModify: ClientExtensions;
    /**
     * The new Client Extensions for the Order's Trade on fill.
     */
    tradeClientExtensionsModify: ClientExtensions;
    /**
     * The reason that the Reject Transaction was created
     */
    rejectReason: primitives.TransactionRejectReason;
    constructor(data: any);
}
export declare const TradeClientExtensionsModifyTransaction_Properties: Property[];
export declare class TradeClientExtensionsModifyTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "TRADE_CLIENT_EXTENSIONS_MODIFY" for a TradeClientExtensionsModifyTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The ID of the Trade who's client extensions are to be modified.
     */
    tradeID: primitives.TradeID;
    /**
     * The original Client ID of the Trade who's client extensions are to be modified.
     */
    clientTradeID: primitives.ClientID;
    /**
     * The new Client Extensions for the Trade.
     */
    tradeClientExtensionsModify: ClientExtensions;
    constructor(data: any);
}
export declare const TradeClientExtensionsModifyRejectTransaction_Properties: Property[];
export declare class TradeClientExtensionsModifyRejectTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT" for a TradeClientExtensionsModifyRejectTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The ID of the Trade who's client extensions are to be modified.
     */
    tradeID: primitives.TradeID;
    /**
     * The original Client ID of the Trade who's client extensions are to be modified.
     */
    clientTradeID: primitives.ClientID;
    /**
     * The new Client Extensions for the Trade.
     */
    tradeClientExtensionsModify: ClientExtensions;
    /**
     * The reason that the Reject Transaction was created
     */
    rejectReason: primitives.TransactionRejectReason;
    constructor(data: any);
}
export declare const MarginCallEnterTransaction_Properties: Property[];
export declare class MarginCallEnterTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "MARGIN_CALL_ENTER" for an MarginCallEnterTransaction.
     */
    type: primitives.TransactionType;
    constructor(data: any);
}
export declare const MarginCallExtendTransaction_Properties: Property[];
export declare class MarginCallExtendTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "MARGIN_CALL_EXTEND" for an MarginCallExtendTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The number of the extensions to the Account's current margin call that have been applied. This value will be set to 1 for the first MarginCallExtend Transaction
     */
    extensionNumber: number;
    constructor(data: any);
}
export declare const MarginCallExitTransaction_Properties: Property[];
export declare class MarginCallExitTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "MARGIN_CALL_EXIT" for an MarginCallExitTransaction.
     */
    type: primitives.TransactionType;
    constructor(data: any);
}
export declare const DelayedTradeClosureTransaction_Properties: Property[];
export declare class DelayedTradeClosureTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "DELAYED_TRADE_CLOSURE" for an DelayedTradeClosureTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The reason for the delayed trade closure
     */
    reason: primitives.MarketOrderReason;
    /**
     * List of Trade ID's identifying the open trades that will be closed when their respective instruments become tradeable
     */
    tradeIDs: primitives.TradeID;
    constructor(data: any);
}
export declare const DailyFinancingTransaction_Properties: Property[];
export declare class DailyFinancingTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "DAILY_FINANCING" for a DailyFinancingTransaction.
     */
    type: primitives.TransactionType;
    /**
     * The amount of financing paid/collected for the Account.
     */
    financing: primitives.AccountUnits;
    /**
     * The Account's balance after daily financing.
     */
    accountBalance: primitives.AccountUnits;
    /**
     * The account financing mode at the time of the daily financing.
     */
    accountFinancingMode: primitives.AccountFinancingMode;
    /**
     * The financing paid/collected for each Position in the Account.
     */
    positionFinancings: PositionFinancing[];
    constructor(data: any);
}
export declare const ResetResettablePLTransaction_Properties: Property[];
export declare class ResetResettablePLTransaction extends Definition {
    /**
     * The Transaction's Identifier.
     */
    id: primitives.TransactionID;
    /**
     * The date/time when the Transaction was created.
     */
    time: primitives.DateTime;
    /**
     * The ID of the user that initiated the creation of the Transaction.
     */
    userID: number;
    /**
     * The ID of the Account the Transaction was created for.
     */
    accountID: primitives.AccountID;
    /**
     * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
     */
    batchID: primitives.TransactionID;
    /**
     * The Request ID of the request which generated the transaction.
     */
    requestID: primitives.RequestID;
    /**
     * The Type of the Transaction. Always set to "RESET_RESETTABLE_PL" for a ResetResettablePLTransaction.
     */
    type: primitives.TransactionType;
    constructor(data: any);
}
export declare const ClientExtensions_Properties: Property[];
export declare class ClientExtensions extends Definition {
    /**
     * The Client ID of the Order/Trade
     */
    id: primitives.ClientID;
    /**
     * A tag associated with the Order/Trade
     */
    tag: primitives.ClientTag;
    /**
     * A comment associated with the Order/Trade
     */
    comment: primitives.ClientComment;
    constructor(data: any);
}
export declare const TakeProfitDetails_Properties: Property[];
export declare class TakeProfitDetails extends Definition {
    /**
     * The price that the Take Profit Order will be triggered at. Only one of the price and distance fields may be specified.
     */
    price: primitives.PriceValue;
    /**
     * The time in force for the created Take Profit Order. This may only be GTC, GTD or GFD.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date when the Take Profit Order will be cancelled on if timeInForce is GTD.
     */
    gtdTime: primitives.DateTime;
    /**
     * The Client Extensions to add to the Take Profit Order when created.
     */
    clientExtensions: ClientExtensions;
    constructor(data: any);
}
export declare const StopLossDetails_Properties: Property[];
export declare class StopLossDetails extends Definition {
    /**
     * The price that the Stop Loss Order will be triggered at. Only one of the price and distance fields may be specified.
     */
    price: primitives.PriceValue;
    /**
     * Specifies the distance (in price units) from the Trade's open price to use as the Stop Loss Order price. Only one of the distance and price fields may be specified.
     */
    distance: primitives.DecimalNumber;
    /**
     * The time in force for the created Stop Loss Order. This may only be GTC, GTD or GFD.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date when the Stop Loss Order will be cancelled on if timeInForce is GTD.
     */
    gtdTime: primitives.DateTime;
    /**
     * The Client Extensions to add to the Stop Loss Order when created.
     */
    clientExtensions: ClientExtensions;
    /**
     * Flag indicating that the price for the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.
     */
    guaranteed: boolean;
    constructor(data: any);
}
export declare const TrailingStopLossDetails_Properties: Property[];
export declare class TrailingStopLossDetails extends Definition {
    /**
     * The distance (in price units) from the Trade's fill price that the Trailing Stop Loss Order will be triggered at.
     */
    distance: primitives.DecimalNumber;
    /**
     * The time in force for the created Trailing Stop Loss Order. This may only be GTC, GTD or GFD.
     */
    timeInForce: primitives.TimeInForce;
    /**
     * The date when the Trailing Stop Loss Order will be cancelled on if timeInForce is GTD.
     */
    gtdTime: primitives.DateTime;
    /**
     * The Client Extensions to add to the Trailing Stop Loss Order when created.
     */
    clientExtensions: ClientExtensions;
    constructor(data: any);
}
export declare const TradeOpen_Properties: Property[];
export declare class TradeOpen extends Definition {
    /**
     * The ID of the Trade that was opened
     */
    tradeID: primitives.TradeID;
    /**
     * The number of units opened by the Trade
     */
    units: primitives.DecimalNumber;
    /**
     * The average price that the units were opened at.
     */
    price: primitives.PriceValue;
    /**
     * This is the fee charged for opening the trade if it has a guaranteed Stop Loss Order attached to it.
     */
    guaranteedExecutionFee: primitives.AccountUnits;
    /**
     * The client extensions for the newly opened Trade
     */
    clientExtensions: ClientExtensions;
    /**
     * The half spread cost for the trade open. This can be a positive or negative value and is represented in the home currency of the Account.
     */
    halfSpreadCost: primitives.AccountUnits;
    /**
     * The margin required at the time the Trade was created. Note, this is the 'pure' margin required, it is not the 'effective' margin used that factors in the trade risk if a GSLO is attached to the trade.
     */
    initialMarginRequired: primitives.AccountUnits;
    constructor(data: any);
}
export declare const TradeReduce_Properties: Property[];
export declare class TradeReduce extends Definition {
    /**
     * The ID of the Trade that was reduced or closed
     */
    tradeID: primitives.TradeID;
    /**
     * The number of units that the Trade was reduced by
     */
    units: primitives.DecimalNumber;
    /**
     * The average price that the units were closed at. This price may be clamped for guaranteed Stop Loss Orders.
     */
    price: primitives.PriceValue;
    /**
     * The PL realized when reducing the Trade
     */
    realizedPL: primitives.AccountUnits;
    /**
     * The financing paid/collected when reducing the Trade
     */
    financing: primitives.AccountUnits;
    /**
     * This is the fee that is charged for closing the Trade if it has a guaranteed Stop Loss Order attached to it.
     */
    guaranteedExecutionFee: primitives.AccountUnits;
    /**
     * The half spread cost for the trade reduce/close. This can be a positive or negative value and is represented in the home currency of the Account.
     */
    halfSpreadCost: primitives.AccountUnits;
    constructor(data: any);
}
export declare const MarketOrderTradeClose_Properties: Property[];
export declare class MarketOrderTradeClose extends Definition {
    /**
     * The ID of the Trade requested to be closed
     */
    tradeID: primitives.TradeID;
    /**
     * The client ID of the Trade requested to be closed
     */
    clientTradeID: string;
    /**
     * Indication of how much of the Trade to close. Either "ALL", or a DecimalNumber reflection a partial close of the Trade.
     */
    units: string;
    constructor(data: any);
}
export declare const MarketOrderMarginCloseout_Properties: Property[];
export declare class MarketOrderMarginCloseout extends Definition {
    /**
     * The reason the Market Order was created to perform a margin closeout
     */
    reason: primitives.MarketOrderMarginCloseoutReason;
    constructor(data: any);
}
export declare const MarketOrderDelayedTradeClose_Properties: Property[];
export declare class MarketOrderDelayedTradeClose extends Definition {
    /**
     * The ID of the Trade being closed
     */
    tradeID: primitives.TradeID;
    /**
     * The Client ID of the Trade being closed
     */
    clientTradeID: primitives.TradeID;
    /**
     * The Transaction ID of the DelayedTradeClosure transaction to which this Delayed Trade Close belongs to
     */
    sourceTransactionID: primitives.TransactionID;
    constructor(data: any);
}
export declare const MarketOrderPositionCloseout_Properties: Property[];
export declare class MarketOrderPositionCloseout extends Definition {
    /**
     * The instrument of the Position being closed out.
     */
    instrument: primitives.InstrumentName;
    /**
     * Indication of how much of the Position to close. Either "ALL", or a DecimalNumber reflection a partial close of the Trade. The DecimalNumber must always be positive, and represent a number that doesn't exceed the absolute size of the Position.
     */
    units: string;
    constructor(data: any);
}
export declare const LiquidityRegenerationSchedule_Properties: Property[];
export declare class LiquidityRegenerationSchedule extends Definition {
    /**
     * The steps in the Liquidity Regeneration Schedule
     */
    steps: LiquidityRegenerationScheduleStep[];
    constructor(data: any);
}
export declare const LiquidityRegenerationScheduleStep_Properties: Property[];
export declare class LiquidityRegenerationScheduleStep extends Definition {
    /**
     * The timestamp of the schedule step.
     */
    timestamp: primitives.DateTime;
    /**
     * The amount of bid liquidity used at this step in the schedule.
     */
    bidLiquidityUsed: primitives.DecimalNumber;
    /**
     * The amount of ask liquidity used at this step in the schedule.
     */
    askLiquidityUsed: primitives.DecimalNumber;
    constructor(data: any);
}
export declare const OpenTradeFinancing_Properties: Property[];
export declare class OpenTradeFinancing extends Definition {
    /**
     * The ID of the Trade that financing is being paid/collected for.
     */
    tradeID: primitives.TradeID;
    /**
     * The amount of financing paid/collected for the Trade.
     */
    financing: primitives.AccountUnits;
    constructor(data: any);
}
export declare const PositionFinancing_Properties: Property[];
export declare class PositionFinancing extends Definition {
    /**
     * The instrument of the Position that financing is being paid/collected for.
     */
    instrument: primitives.InstrumentName;
    /**
     * The amount of financing paid/collected for the Position.
     */
    financing: primitives.AccountUnits;
    /**
     * The financing paid/collecte for each open Trade within the Position.
     */
    openTradeFinancings: OpenTradeFinancing[];
    constructor(data: any);
}
export declare const TransactionHeartbeat_Properties: Property[];
export declare class TransactionHeartbeat extends Definition {
    /**
     * The string "HEARTBEAT"
     */
    type: string;
    /**
     * The ID of the most recent Transaction created for the Account
     */
    lastTransactionID: primitives.TransactionID;
    /**
     * The date/time when the TransactionHeartbeat was created.
     */
    time: primitives.DateTime;
    constructor(data: any);
}
export declare class EntitySpec {
    context: any;
    Transaction: typeof Transaction;
    CreateTransaction: typeof CreateTransaction;
    CloseTransaction: typeof CloseTransaction;
    ReopenTransaction: typeof ReopenTransaction;
    ClientConfigureTransaction: typeof ClientConfigureTransaction;
    ClientConfigureRejectTransaction: typeof ClientConfigureRejectTransaction;
    TransferFundsTransaction: typeof TransferFundsTransaction;
    TransferFundsRejectTransaction: typeof TransferFundsRejectTransaction;
    MarketOrderTransaction: typeof MarketOrderTransaction;
    MarketOrderRejectTransaction: typeof MarketOrderRejectTransaction;
    FixedPriceOrderTransaction: typeof FixedPriceOrderTransaction;
    LimitOrderTransaction: typeof LimitOrderTransaction;
    LimitOrderRejectTransaction: typeof LimitOrderRejectTransaction;
    StopOrderTransaction: typeof StopOrderTransaction;
    StopOrderRejectTransaction: typeof StopOrderRejectTransaction;
    MarketIfTouchedOrderTransaction: typeof MarketIfTouchedOrderTransaction;
    MarketIfTouchedOrderRejectTransaction: typeof MarketIfTouchedOrderRejectTransaction;
    TakeProfitOrderTransaction: typeof TakeProfitOrderTransaction;
    TakeProfitOrderRejectTransaction: typeof TakeProfitOrderRejectTransaction;
    StopLossOrderTransaction: typeof StopLossOrderTransaction;
    StopLossOrderRejectTransaction: typeof StopLossOrderRejectTransaction;
    TrailingStopLossOrderTransaction: typeof TrailingStopLossOrderTransaction;
    TrailingStopLossOrderRejectTransaction: typeof TrailingStopLossOrderRejectTransaction;
    OrderFillTransaction: typeof OrderFillTransaction;
    OrderCancelTransaction: typeof OrderCancelTransaction;
    OrderCancelRejectTransaction: typeof OrderCancelRejectTransaction;
    OrderClientExtensionsModifyTransaction: typeof OrderClientExtensionsModifyTransaction;
    OrderClientExtensionsModifyRejectTransaction: typeof OrderClientExtensionsModifyRejectTransaction;
    TradeClientExtensionsModifyTransaction: typeof TradeClientExtensionsModifyTransaction;
    TradeClientExtensionsModifyRejectTransaction: typeof TradeClientExtensionsModifyRejectTransaction;
    MarginCallEnterTransaction: typeof MarginCallEnterTransaction;
    MarginCallExtendTransaction: typeof MarginCallExtendTransaction;
    MarginCallExitTransaction: typeof MarginCallExitTransaction;
    DelayedTradeClosureTransaction: typeof DelayedTradeClosureTransaction;
    DailyFinancingTransaction: typeof DailyFinancingTransaction;
    ResetResettablePLTransaction: typeof ResetResettablePLTransaction;
    ClientExtensions: typeof ClientExtensions;
    TakeProfitDetails: typeof TakeProfitDetails;
    StopLossDetails: typeof StopLossDetails;
    TrailingStopLossDetails: typeof TrailingStopLossDetails;
    TradeOpen: typeof TradeOpen;
    TradeReduce: typeof TradeReduce;
    MarketOrderTradeClose: typeof MarketOrderTradeClose;
    MarketOrderMarginCloseout: typeof MarketOrderMarginCloseout;
    MarketOrderDelayedTradeClose: typeof MarketOrderDelayedTradeClose;
    MarketOrderPositionCloseout: typeof MarketOrderPositionCloseout;
    LiquidityRegenerationSchedule: typeof LiquidityRegenerationSchedule;
    LiquidityRegenerationScheduleStep: typeof LiquidityRegenerationScheduleStep;
    OpenTradeFinancing: typeof OpenTradeFinancing;
    PositionFinancing: typeof PositionFinancing;
    TransactionHeartbeat: typeof TransactionHeartbeat;
    constructor(context: any);
    list(accountID: any, queryParams: any, responseHandler: any): any;
    get(accountID: any, transactionID: any, responseHandler: any): any;
    range(accountID: any, queryParams: any, responseHandler: any): any;
    since(accountID: any, queryParams: any, responseHandler: any): any;
    stream(accountID: any, streamChunkHandler: any, responseHandler: any): any;
}
