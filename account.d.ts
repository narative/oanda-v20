declare module '@narative/oanda-v20/account' {
  declare const Account_base: typeof import('./base').Definition
  export class Account extends Account_base {
    constructor(data: any)
    id: any
    alias: any
    currency: any
    balance: any
    createdByUserID: any
    createdTime: any
    guaranteedStopLossOrderMode: any
    pl: any
    resettablePL: any
    resettablePLTime: any
    financing: any
    commission: any
    guaranteedExecutionFees: any
    marginRate: any
    marginCallEnterTime: any
    marginCallExtensionCount: any
    lastMarginCallExtensionTime: any
    openTradeCount: any
    openPositionCount: any
    pendingOrderCount: any
    hedgingEnabled: any
    lastOrderFillTimestamp: any
    unrealizedPL: any
    NAV: any
    marginUsed: any
    marginAvailable: any
    positionValue: any
    marginCloseoutUnrealizedPL: any
    marginCloseoutNAV: any
    marginCloseoutMarginUsed: any
    marginCloseoutPercent: any
    marginCloseoutPositionValue: any
    withdrawalLimit: any
    marginCallMarginUsed: any
    marginCallPercent: any
    lastTransactionID: any
    trades: any
    positions: any
    orders: any
  }
  declare const AccountChangesState_base: typeof import('./base').Definition
  export class AccountChangesState extends AccountChangesState_base {
    constructor(data: any)
    unrealizedPL: any
    NAV: any
    marginUsed: any
    marginAvailable: any
    positionValue: any
    marginCloseoutUnrealizedPL: any
    marginCloseoutNAV: any
    marginCloseoutMarginUsed: any
    marginCloseoutPercent: any
    marginCloseoutPositionValue: any
    withdrawalLimit: any
    marginCallMarginUsed: any
    marginCallPercent: any
    orders: any
    trades: any
    positions: any
  }
  declare const AccountProperties_base: typeof import('./base').Definition
  export class AccountProperties extends AccountProperties_base {
    constructor(data: any)
    id: any
    mt4AccountID: any
    tags: any
  }
  declare const AccountSummary_base: typeof import('./base').Definition
  export class AccountSummary extends AccountSummary_base {
    constructor(data: any)
    id: any
    alias: any
    currency: any
    balance: any
    createdByUserID: any
    createdTime: any
    guaranteedStopLossOrderMode: any
    pl: any
    resettablePL: any
    resettablePLTime: any
    financing: any
    commission: any
    guaranteedExecutionFees: any
    marginRate: any
    marginCallEnterTime: any
    marginCallExtensionCount: any
    lastMarginCallExtensionTime: any
    openTradeCount: any
    openPositionCount: any
    pendingOrderCount: any
    hedgingEnabled: any
    lastOrderFillTimestamp: any
    unrealizedPL: any
    NAV: any
    marginUsed: any
    marginAvailable: string
    positionValue: any
    marginCloseoutUnrealizedPL: any
    marginCloseoutNAV: any
    marginCloseoutMarginUsed: any
    marginCloseoutPercent: any
    marginCloseoutPositionValue: any
    withdrawalLimit: any
    marginCallMarginUsed: any
    marginCallPercent: any
    lastTransactionID: any
  }
  declare const CalculatedAccountState_base: typeof import('./base').Definition
  export class CalculatedAccountState extends CalculatedAccountState_base {
    constructor(data: any)
    unrealizedPL: any
    NAV: any
    marginUsed: any
    marginAvailable: any
    positionValue: any
    marginCloseoutUnrealizedPL: any
    marginCloseoutNAV: any
    marginCloseoutMarginUsed: any
    marginCloseoutPercent: any
    marginCloseoutPositionValue: any
    withdrawalLimit: any
    marginCallMarginUsed: any
    marginCallPercent: any
  }
  declare const AccountChanges_base: typeof import('./base').Definition
  export class AccountChanges extends AccountChanges_base {
    constructor(data: any)
    ordersCreated: any
    ordersCancelled: any
    ordersFilled: any
    ordersTriggered: any
    tradesOpened: any
    tradesReduced: any
    tradesClosed: any
    positions: any
    transactions: any
  }
  export class EntitySpec {
    constructor(context: any)
    context: any
    Account: typeof Account
    AccountChangesState: typeof AccountChangesState
    AccountProperties: typeof AccountProperties
    AccountSummary: typeof AccountSummary
    CalculatedAccountState: typeof CalculatedAccountState
    AccountChanges: typeof AccountChanges
    list(responseHandler: any): ClientRequest
    get(accountID: any, responseHandler: any): ClientRequest
    summary(accountID: any, responseHandler: any): ClientRequest
    instruments(accountID: any, queryParams: any, responseHandler: any): ClientRequest
    configure(accountID: any, bodyParams: any, responseHandler: any): ClientRequest
    changes(accountID: any, queryParams: any, responseHandler: any): ClientRequest
  }
  export {}
}
