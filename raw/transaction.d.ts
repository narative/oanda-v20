declare module '@narative/oanda-v20/transaction' {
  declare const Transaction_base: typeof import('./base').Definition
  export class Transaction extends Transaction_base {
    static create(
      transaction: any,
    ):
      | Transaction
      | MarketOrderTransaction
      | OrderFillTransaction
      | OrderCancelTransaction
      | MarketOrderRejectTransaction
      | TradeClientExtensionsModifyTransaction
      | TradeClientExtensionsModifyRejectTransaction
      | TakeProfitOrderTransaction
      | StopLossOrderTransaction
      | TrailingStopLossOrderTransaction
      | OrderCancelRejectTransaction
      | TakeProfitOrderRejectTransaction
      | StopLossOrderRejectTransaction
      | TrailingStopLossOrderRejectTransaction
      | ClientConfigureTransaction
      | ClientConfigureRejectTransaction
      | CreateTransaction
      | CloseTransaction
      | ReopenTransaction
      | TransferFundsTransaction
      | TransferFundsRejectTransaction
      | FixedPriceOrderTransaction
      | LimitOrderTransaction
      | LimitOrderRejectTransaction
      | StopOrderTransaction
      | StopOrderRejectTransaction
      | MarketIfTouchedOrderTransaction
      | MarketIfTouchedOrderRejectTransaction
      | OrderClientExtensionsModifyTransaction
      | OrderClientExtensionsModifyRejectTransaction
      | MarginCallEnterTransaction
      | MarginCallExtendTransaction
      | MarginCallExitTransaction
      | DelayedTradeClosureTransaction
      | DailyFinancingTransaction
      | ResetResettablePLTransaction
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
  }
  declare const CreateTransaction_base: typeof import('./base').Definition
  export class CreateTransaction extends CreateTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    divisionID: any
    siteID: any
    accountUserID: any
    accountNumber: any
    homeCurrency: any
  }
  declare const CloseTransaction_base: typeof import('./base').Definition
  export class CloseTransaction extends CloseTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
  }
  declare const ReopenTransaction_base: typeof import('./base').Definition
  export class ReopenTransaction extends ReopenTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
  }
  declare const ClientConfigureTransaction_base: typeof import('./base').Definition
  export class ClientConfigureTransaction extends ClientConfigureTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    alias: any
    marginRate: any
  }
  declare const ClientConfigureRejectTransaction_base: typeof import('./base').Definition
  export class ClientConfigureRejectTransaction extends ClientConfigureRejectTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    alias: any
    marginRate: any
    rejectReason: any
  }
  declare const TransferFundsTransaction_base: typeof import('./base').Definition
  export class TransferFundsTransaction extends TransferFundsTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    amount: any
    fundingReason: any
    comment: any
    accountBalance: any
  }
  declare const TransferFundsRejectTransaction_base: typeof import('./base').Definition
  export class TransferFundsRejectTransaction extends TransferFundsRejectTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    amount: any
    fundingReason: any
    comment: any
    rejectReason: any
  }
  declare const MarketOrderTransaction_base: typeof import('./base').Definition
  export class MarketOrderTransaction extends MarketOrderTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    instrument: any
    units: any
    timeInForce: any
    priceBound: any
    positionFill: any
    tradeClose: MarketOrderTradeClose
    longPositionCloseout: MarketOrderPositionCloseout
    shortPositionCloseout: MarketOrderPositionCloseout
    marginCloseout: MarketOrderMarginCloseout
    delayedTradeClose: MarketOrderDelayedTradeClose
    reason: any
    clientExtensions: ClientExtensions
    takeProfitOnFill: TakeProfitDetails
    stopLossOnFill: StopLossDetails
    trailingStopLossOnFill: TrailingStopLossDetails
    tradeClientExtensions: ClientExtensions
  }
  declare const MarketOrderRejectTransaction_base: typeof import('./base').Definition
  export class MarketOrderRejectTransaction extends MarketOrderRejectTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    instrument: any
    units: any
    timeInForce: any
    priceBound: any
    positionFill: any
    tradeClose: MarketOrderTradeClose
    longPositionCloseout: MarketOrderPositionCloseout
    shortPositionCloseout: MarketOrderPositionCloseout
    marginCloseout: MarketOrderMarginCloseout
    delayedTradeClose: MarketOrderDelayedTradeClose
    reason: any
    clientExtensions: ClientExtensions
    takeProfitOnFill: TakeProfitDetails
    stopLossOnFill: StopLossDetails
    trailingStopLossOnFill: TrailingStopLossDetails
    tradeClientExtensions: ClientExtensions
    rejectReason: any
  }
  declare const FixedPriceOrderTransaction_base: typeof import('./base').Definition
  export class FixedPriceOrderTransaction extends FixedPriceOrderTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    instrument: any
    units: any
    price: any
    positionFill: any
    tradeState: any
    reason: any
    clientExtensions: ClientExtensions
    takeProfitOnFill: TakeProfitDetails
    stopLossOnFill: StopLossDetails
    trailingStopLossOnFill: TrailingStopLossDetails
    tradeClientExtensions: ClientExtensions
  }
  declare const LimitOrderTransaction_base: typeof import('./base').Definition
  export class LimitOrderTransaction extends LimitOrderTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    instrument: any
    units: any
    price: any
    timeInForce: any
    gtdTime: any
    positionFill: any
    triggerCondition: any
    reason: any
    clientExtensions: ClientExtensions
    takeProfitOnFill: TakeProfitDetails
    stopLossOnFill: StopLossDetails
    trailingStopLossOnFill: TrailingStopLossDetails
    tradeClientExtensions: ClientExtensions
    replacesOrderID: any
    cancellingTransactionID: any
  }
  declare const LimitOrderRejectTransaction_base: typeof import('./base').Definition
  export class LimitOrderRejectTransaction extends LimitOrderRejectTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    instrument: any
    units: any
    price: any
    timeInForce: any
    gtdTime: any
    positionFill: any
    triggerCondition: any
    reason: any
    clientExtensions: ClientExtensions
    takeProfitOnFill: TakeProfitDetails
    stopLossOnFill: StopLossDetails
    trailingStopLossOnFill: TrailingStopLossDetails
    tradeClientExtensions: ClientExtensions
    intendedReplacesOrderID: any
    rejectReason: any
  }
  declare const StopOrderTransaction_base: typeof import('./base').Definition
  export class StopOrderTransaction extends StopOrderTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    instrument: any
    units: any
    price: any
    priceBound: any
    timeInForce: any
    gtdTime: any
    positionFill: any
    triggerCondition: any
    reason: any
    clientExtensions: ClientExtensions
    takeProfitOnFill: TakeProfitDetails
    stopLossOnFill: StopLossDetails
    trailingStopLossOnFill: TrailingStopLossDetails
    tradeClientExtensions: ClientExtensions
    replacesOrderID: any
    cancellingTransactionID: any
  }
  declare const StopOrderRejectTransaction_base: typeof import('./base').Definition
  export class StopOrderRejectTransaction extends StopOrderRejectTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    instrument: any
    units: any
    price: any
    priceBound: any
    timeInForce: any
    gtdTime: any
    positionFill: any
    triggerCondition: any
    reason: any
    clientExtensions: ClientExtensions
    takeProfitOnFill: TakeProfitDetails
    stopLossOnFill: StopLossDetails
    trailingStopLossOnFill: TrailingStopLossDetails
    tradeClientExtensions: ClientExtensions
    intendedReplacesOrderID: any
    rejectReason: any
  }
  declare const MarketIfTouchedOrderTransaction_base: typeof import('./base').Definition
  export class MarketIfTouchedOrderTransaction extends MarketIfTouchedOrderTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    instrument: any
    units: any
    price: any
    priceBound: any
    timeInForce: any
    gtdTime: any
    positionFill: any
    triggerCondition: any
    reason: any
    clientExtensions: ClientExtensions
    takeProfitOnFill: TakeProfitDetails
    stopLossOnFill: StopLossDetails
    trailingStopLossOnFill: TrailingStopLossDetails
    tradeClientExtensions: ClientExtensions
    replacesOrderID: any
    cancellingTransactionID: any
  }
  declare const MarketIfTouchedOrderRejectTransaction_base: typeof import('./base').Definition
  export class MarketIfTouchedOrderRejectTransaction extends MarketIfTouchedOrderRejectTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    instrument: any
    units: any
    price: any
    priceBound: any
    timeInForce: any
    gtdTime: any
    positionFill: any
    triggerCondition: any
    reason: any
    clientExtensions: ClientExtensions
    takeProfitOnFill: TakeProfitDetails
    stopLossOnFill: StopLossDetails
    trailingStopLossOnFill: TrailingStopLossDetails
    tradeClientExtensions: ClientExtensions
    intendedReplacesOrderID: any
    rejectReason: any
  }
  declare const TakeProfitOrderTransaction_base: typeof import('./base').Definition
  export class TakeProfitOrderTransaction extends TakeProfitOrderTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    tradeID: any
    clientTradeID: any
    price: any
    timeInForce: any
    gtdTime: any
    triggerCondition: any
    reason: any
    clientExtensions: ClientExtensions
    orderFillTransactionID: any
    replacesOrderID: any
    cancellingTransactionID: any
  }
  declare const TakeProfitOrderRejectTransaction_base: typeof import('./base').Definition
  export class TakeProfitOrderRejectTransaction extends TakeProfitOrderRejectTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    tradeID: any
    clientTradeID: any
    price: any
    timeInForce: any
    gtdTime: any
    triggerCondition: any
    reason: any
    clientExtensions: ClientExtensions
    orderFillTransactionID: any
    intendedReplacesOrderID: any
    rejectReason: any
  }
  declare const StopLossOrderTransaction_base: typeof import('./base').Definition
  export class StopLossOrderTransaction extends StopLossOrderTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    tradeID: any
    clientTradeID: any
    price: any
    distance: any
    timeInForce: any
    gtdTime: any
    triggerCondition: any
    guaranteed: any
    guaranteedExecutionPremium: any
    reason: any
    clientExtensions: ClientExtensions
    orderFillTransactionID: any
    replacesOrderID: any
    cancellingTransactionID: any
  }
  declare const StopLossOrderRejectTransaction_base: typeof import('./base').Definition
  export class StopLossOrderRejectTransaction extends StopLossOrderRejectTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    tradeID: any
    clientTradeID: any
    price: any
    distance: any
    timeInForce: any
    gtdTime: any
    triggerCondition: any
    guaranteed: any
    reason: any
    clientExtensions: ClientExtensions
    orderFillTransactionID: any
    intendedReplacesOrderID: any
    rejectReason: any
  }
  declare const TrailingStopLossOrderTransaction_base: typeof import('./base').Definition
  export class TrailingStopLossOrderTransaction extends TrailingStopLossOrderTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    tradeID: any
    clientTradeID: any
    distance: any
    timeInForce: any
    gtdTime: any
    triggerCondition: any
    reason: any
    clientExtensions: ClientExtensions
    orderFillTransactionID: any
    replacesOrderID: any
    cancellingTransactionID: any
  }
  declare const TrailingStopLossOrderRejectTransaction_base: typeof import('./base').Definition
  export class TrailingStopLossOrderRejectTransaction extends TrailingStopLossOrderRejectTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    tradeID: any
    clientTradeID: any
    distance: any
    timeInForce: any
    gtdTime: any
    triggerCondition: any
    reason: any
    clientExtensions: ClientExtensions
    orderFillTransactionID: any
    intendedReplacesOrderID: any
    rejectReason: any
  }
  declare const OrderFillTransaction_base: typeof import('./base').Definition
  export class OrderFillTransaction extends OrderFillTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    orderID: any
    clientOrderID: any
    instrument: any
    units: any
    gainQuoteHomeConversionFactor: any
    lossQuoteHomeConversionFactor: any
    price: any
    fullVWAP: any
    fullPrice: import('./pricing').ClientPrice
    reason: any
    pl: any
    financing: any
    commission: any
    guaranteedExecutionFee: any
    accountBalance: any
    tradeOpened: TradeOpen
    tradesClosed: TradeReduce[]
    tradeReduced: TradeReduce
    halfSpreadCost: any
  }
  declare const OrderCancelTransaction_base: typeof import('./base').Definition
  export class OrderCancelTransaction extends OrderCancelTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    orderID: any
    clientOrderID: any
    reason: any
    replacedByOrderID: any
  }
  declare const OrderCancelRejectTransaction_base: typeof import('./base').Definition
  export class OrderCancelRejectTransaction extends OrderCancelRejectTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    orderID: any
    clientOrderID: any
    rejectReason: any
  }
  declare const OrderClientExtensionsModifyTransaction_base: typeof import('./base').Definition
  export class OrderClientExtensionsModifyTransaction extends OrderClientExtensionsModifyTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    orderID: any
    clientOrderID: any
    clientExtensionsModify: ClientExtensions
    tradeClientExtensionsModify: ClientExtensions
  }
  declare const OrderClientExtensionsModifyRejectTransaction_base: typeof import('./base').Definition
  export class OrderClientExtensionsModifyRejectTransaction extends OrderClientExtensionsModifyRejectTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    orderID: any
    clientOrderID: any
    clientExtensionsModify: ClientExtensions
    tradeClientExtensionsModify: ClientExtensions
    rejectReason: any
  }
  declare const TradeClientExtensionsModifyTransaction_base: typeof import('./base').Definition
  export class TradeClientExtensionsModifyTransaction extends TradeClientExtensionsModifyTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    tradeID: any
    clientTradeID: any
    tradeClientExtensionsModify: ClientExtensions
  }
  declare const TradeClientExtensionsModifyRejectTransaction_base: typeof import('./base').Definition
  export class TradeClientExtensionsModifyRejectTransaction extends TradeClientExtensionsModifyRejectTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    tradeID: any
    clientTradeID: any
    tradeClientExtensionsModify: ClientExtensions
    rejectReason: any
  }
  declare const MarginCallEnterTransaction_base: typeof import('./base').Definition
  export class MarginCallEnterTransaction extends MarginCallEnterTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
  }
  declare const MarginCallExtendTransaction_base: typeof import('./base').Definition
  export class MarginCallExtendTransaction extends MarginCallExtendTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    extensionNumber: any
  }
  declare const MarginCallExitTransaction_base: typeof import('./base').Definition
  export class MarginCallExitTransaction extends MarginCallExitTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
  }
  declare const DelayedTradeClosureTransaction_base: typeof import('./base').Definition
  export class DelayedTradeClosureTransaction extends DelayedTradeClosureTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    reason: any
    tradeIDs: any
  }
  declare const DailyFinancingTransaction_base: typeof import('./base').Definition
  export class DailyFinancingTransaction extends DailyFinancingTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
    financing: any
    accountBalance: any
    accountFinancingMode: any
    positionFinancings: PositionFinancing[]
  }
  declare const ResetResettablePLTransaction_base: typeof import('./base').Definition
  export class ResetResettablePLTransaction extends ResetResettablePLTransaction_base {
    constructor(data: any)
    id: any
    time: any
    userID: any
    accountID: any
    batchID: any
    requestID: any
    type: any
  }
  declare const ClientExtensions_base: typeof import('./base').Definition
  export class ClientExtensions extends ClientExtensions_base {
    constructor(data: any)
    id: any
    tag: any
    comment: any
  }
  declare const TakeProfitDetails_base: typeof import('./base').Definition
  export class TakeProfitDetails extends TakeProfitDetails_base {
    constructor(data: any)
    price: any
    timeInForce: any
    gtdTime: any
    clientExtensions: ClientExtensions
  }
  declare const StopLossDetails_base: typeof import('./base').Definition
  export class StopLossDetails extends StopLossDetails_base {
    constructor(data: any)
    price: any
    distance: any
    timeInForce: any
    gtdTime: any
    clientExtensions: ClientExtensions
    guaranteed: any
  }
  declare const TrailingStopLossDetails_base: typeof import('./base').Definition
  export class TrailingStopLossDetails extends TrailingStopLossDetails_base {
    constructor(data: any)
    distance: any
    timeInForce: any
    gtdTime: any
    clientExtensions: ClientExtensions
  }
  declare const TradeOpen_base: typeof import('./base').Definition
  export class TradeOpen extends TradeOpen_base {
    constructor(data: any)
    tradeID: any
    units: any
    price: any
    guaranteedExecutionFee: any
    clientExtensions: ClientExtensions
    halfSpreadCost: any
    initialMarginRequired: any
  }
  declare const TradeReduce_base: typeof import('./base').Definition
  export class TradeReduce extends TradeReduce_base {
    constructor(data: any)
    tradeID: any
    units: any
    price: any
    realizedPL: any
    financing: any
    guaranteedExecutionFee: any
    halfSpreadCost: any
  }
  declare const MarketOrderTradeClose_base: typeof import('./base').Definition
  export class MarketOrderTradeClose extends MarketOrderTradeClose_base {
    constructor(data: any)
    tradeID: any
    clientTradeID: any
    units: any
  }
  declare const MarketOrderMarginCloseout_base: typeof import('./base').Definition
  export class MarketOrderMarginCloseout extends MarketOrderMarginCloseout_base {
    constructor(data: any)
    reason: any
  }
  declare const MarketOrderDelayedTradeClose_base: typeof import('./base').Definition
  export class MarketOrderDelayedTradeClose extends MarketOrderDelayedTradeClose_base {
    constructor(data: any)
    tradeID: any
    clientTradeID: any
    sourceTransactionID: any
  }
  declare const MarketOrderPositionCloseout_base: typeof import('./base').Definition
  export class MarketOrderPositionCloseout extends MarketOrderPositionCloseout_base {
    constructor(data: any)
    instrument: any
    units: any
  }
  declare const LiquidityRegenerationSchedule_base: typeof import('./base').Definition
  export class LiquidityRegenerationSchedule extends LiquidityRegenerationSchedule_base {
    constructor(data: any)
    steps: any
  }
  declare const LiquidityRegenerationScheduleStep_base: typeof import('./base').Definition
  export class LiquidityRegenerationScheduleStep extends LiquidityRegenerationScheduleStep_base {
    constructor(data: any)
    timestamp: any
    bidLiquidityUsed: any
    askLiquidityUsed: any
  }
  declare const OpenTradeFinancing_base: typeof import('./base').Definition
  export class OpenTradeFinancing extends OpenTradeFinancing_base {
    constructor(data: any)
    tradeID: any
    financing: any
  }
  declare const PositionFinancing_base: typeof import('./base').Definition
  export class PositionFinancing extends PositionFinancing_base {
    constructor(data: any)
    instrument: any
    financing: any
    openTradeFinancings: OpenTradeFinancing[]
  }
  declare const TransactionHeartbeat_base: typeof import('./base').Definition
  export class TransactionHeartbeat extends TransactionHeartbeat_base {
    constructor(data: any)
    type: any
    lastTransactionID: any
    time: any
  }
  export class EntitySpec {
    constructor(context: any)
    context: any
    Transaction: typeof Transaction
    CreateTransaction: typeof CreateTransaction
    CloseTransaction: typeof CloseTransaction
    ReopenTransaction: typeof ReopenTransaction
    ClientConfigureTransaction: typeof ClientConfigureTransaction
    ClientConfigureRejectTransaction: typeof ClientConfigureRejectTransaction
    TransferFundsTransaction: typeof TransferFundsTransaction
    TransferFundsRejectTransaction: typeof TransferFundsRejectTransaction
    MarketOrderTransaction: typeof MarketOrderTransaction
    MarketOrderRejectTransaction: typeof MarketOrderRejectTransaction
    FixedPriceOrderTransaction: typeof FixedPriceOrderTransaction
    LimitOrderTransaction: typeof LimitOrderTransaction
    LimitOrderRejectTransaction: typeof LimitOrderRejectTransaction
    StopOrderTransaction: typeof StopOrderTransaction
    StopOrderRejectTransaction: typeof StopOrderRejectTransaction
    MarketIfTouchedOrderTransaction: typeof MarketIfTouchedOrderTransaction
    MarketIfTouchedOrderRejectTransaction: typeof MarketIfTouchedOrderRejectTransaction
    TakeProfitOrderTransaction: typeof TakeProfitOrderTransaction
    TakeProfitOrderRejectTransaction: typeof TakeProfitOrderRejectTransaction
    StopLossOrderTransaction: typeof StopLossOrderTransaction
    StopLossOrderRejectTransaction: typeof StopLossOrderRejectTransaction
    TrailingStopLossOrderTransaction: typeof TrailingStopLossOrderTransaction
    TrailingStopLossOrderRejectTransaction: typeof TrailingStopLossOrderRejectTransaction
    OrderFillTransaction: typeof OrderFillTransaction
    OrderCancelTransaction: typeof OrderCancelTransaction
    OrderCancelRejectTransaction: typeof OrderCancelRejectTransaction
    OrderClientExtensionsModifyTransaction: typeof OrderClientExtensionsModifyTransaction
    OrderClientExtensionsModifyRejectTransaction: typeof OrderClientExtensionsModifyRejectTransaction
    TradeClientExtensionsModifyTransaction: typeof TradeClientExtensionsModifyTransaction
    TradeClientExtensionsModifyRejectTransaction: typeof TradeClientExtensionsModifyRejectTransaction
    MarginCallEnterTransaction: typeof MarginCallEnterTransaction
    MarginCallExtendTransaction: typeof MarginCallExtendTransaction
    MarginCallExitTransaction: typeof MarginCallExitTransaction
    DelayedTradeClosureTransaction: typeof DelayedTradeClosureTransaction
    DailyFinancingTransaction: typeof DailyFinancingTransaction
    ResetResettablePLTransaction: typeof ResetResettablePLTransaction
    ClientExtensions: typeof ClientExtensions
    TakeProfitDetails: typeof TakeProfitDetails
    StopLossDetails: typeof StopLossDetails
    TrailingStopLossDetails: typeof TrailingStopLossDetails
    TradeOpen: typeof TradeOpen
    TradeReduce: typeof TradeReduce
    MarketOrderTradeClose: typeof MarketOrderTradeClose
    MarketOrderMarginCloseout: typeof MarketOrderMarginCloseout
    MarketOrderDelayedTradeClose: typeof MarketOrderDelayedTradeClose
    MarketOrderPositionCloseout: typeof MarketOrderPositionCloseout
    LiquidityRegenerationSchedule: typeof LiquidityRegenerationSchedule
    LiquidityRegenerationScheduleStep: typeof LiquidityRegenerationScheduleStep
    OpenTradeFinancing: typeof OpenTradeFinancing
    PositionFinancing: typeof PositionFinancing
    TransactionHeartbeat: typeof TransactionHeartbeat
    list(accountID: any, queryParams: any, responseHandler: any): void
    get(accountID: any, transactionID: any, responseHandler: any): void
    range(accountID: any, queryParams: any, responseHandler: any): void
    since(accountID: any, queryParams: any, responseHandler: any): void
    stream(accountID: any, streamChunkHandler: any, responseHandler: any): void
  }
  export {}
}
