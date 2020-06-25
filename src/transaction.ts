import { Definition, Property, Field } from './base'

import * as pricing from './pricing'
import * as primitives from './primitives'

export const Transaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
]

export class Transaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * Raw response
   */
  public raw?: any

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = 'Transaction {id}'

    this._properties = Transaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    this.raw = data
  }

  static create(transaction) {
    if (!transaction['type']) {
      return new Transaction(transaction)
    } else if (transaction['type'] == 'MARKET_ORDER') {
      return new MarketOrderTransaction(transaction)
    } else if (transaction['type'] == 'ORDER_FILL') {
      return new OrderFillTransaction(transaction)
    } else if (transaction['type'] == 'ORDER_CANCEL') {
      return new OrderCancelTransaction(transaction)
    } else if (transaction['type'] == 'MARKET_ORDER_REJECT') {
      return new MarketOrderRejectTransaction(transaction)
    } else if (transaction['type'] == 'TRADE_CLIENT_EXTENSIONS_MODIFY') {
      return new TradeClientExtensionsModifyTransaction(transaction)
    } else if (transaction['type'] == 'TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT') {
      return new TradeClientExtensionsModifyRejectTransaction(transaction)
    } else if (transaction['type'] == 'TAKE_PROFIT_ORDER') {
      return new TakeProfitOrderTransaction(transaction)
    } else if (transaction['type'] == 'STOP_LOSS_ORDER') {
      return new StopLossOrderTransaction(transaction)
    } else if (transaction['type'] == 'TRAILING_STOP_LOSS_ORDER') {
      return new TrailingStopLossOrderTransaction(transaction)
    } else if (transaction['type'] == 'ORDER_CANCEL_REJECT') {
      return new OrderCancelRejectTransaction(transaction)
    } else if (transaction['type'] == 'TAKE_PROFIT_ORDER_REJECT') {
      return new TakeProfitOrderRejectTransaction(transaction)
    } else if (transaction['type'] == 'STOP_LOSS_ORDER_REJECT') {
      return new StopLossOrderRejectTransaction(transaction)
    } else if (transaction['type'] == 'TRAILING_STOP_LOSS_ORDER_REJECT') {
      return new TrailingStopLossOrderRejectTransaction(transaction)
    } else if (transaction['type'] == 'CLIENT_CONFIGURE') {
      return new ClientConfigureTransaction(transaction)
    } else if (transaction['type'] == 'CLIENT_CONFIGURE_REJECT') {
      return new ClientConfigureRejectTransaction(transaction)
    } else if (transaction['type'] == 'CREATE') {
      return new CreateTransaction(transaction)
    } else if (transaction['type'] == 'CLOSE') {
      return new CloseTransaction(transaction)
    } else if (transaction['type'] == 'REOPEN') {
      return new ReopenTransaction(transaction)
    } else if (transaction['type'] == 'TRANSFER_FUNDS') {
      return new TransferFundsTransaction(transaction)
    } else if (transaction['type'] == 'TRANSFER_FUNDS_REJECT') {
      return new TransferFundsRejectTransaction(transaction)
    } else if (transaction['type'] == 'FIXED_PRICE_ORDER') {
      return new FixedPriceOrderTransaction(transaction)
    } else if (transaction['type'] == 'LIMIT_ORDER') {
      return new LimitOrderTransaction(transaction)
    } else if (transaction['type'] == 'LIMIT_ORDER_REJECT') {
      return new LimitOrderRejectTransaction(transaction)
    } else if (transaction['type'] == 'STOP_ORDER') {
      return new StopOrderTransaction(transaction)
    } else if (transaction['type'] == 'STOP_ORDER_REJECT') {
      return new StopOrderRejectTransaction(transaction)
    } else if (transaction['type'] == 'MARKET_IF_TOUCHED_ORDER') {
      return new MarketIfTouchedOrderTransaction(transaction)
    } else if (transaction['type'] == 'MARKET_IF_TOUCHED_ORDER_REJECT') {
      return new MarketIfTouchedOrderRejectTransaction(transaction)
    } else if (transaction['type'] == 'ORDER_CLIENT_EXTENSIONS_MODIFY') {
      return new OrderClientExtensionsModifyTransaction(transaction)
    } else if (transaction['type'] == 'ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT') {
      return new OrderClientExtensionsModifyRejectTransaction(transaction)
    } else if (transaction['type'] == 'MARGIN_CALL_ENTER') {
      return new MarginCallEnterTransaction(transaction)
    } else if (transaction['type'] == 'MARGIN_CALL_EXTEND') {
      return new MarginCallExtendTransaction(transaction)
    } else if (transaction['type'] == 'MARGIN_CALL_EXIT') {
      return new MarginCallExitTransaction(transaction)
    } else if (transaction['type'] == 'DELAYED_TRADE_CLOSURE') {
      return new DelayedTradeClosureTransaction(transaction)
    } else if (transaction['type'] == 'DAILY_FINANCING') {
      return new DailyFinancingTransaction(transaction)
    } else if (transaction['type'] == 'RESET_RESETTABLE_PL') {
      return new ResetResettablePLTransaction(transaction)
    }

    return new Transaction(transaction)
  }
}

export const CreateTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "CREATE" in a CreateTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'divisionID',
    'Division ID',
    'The ID of the Division that the Account is in',
    'primitive',
    'integer',
  ),
  new Property(
    'siteID',
    'Site ID',
    'The ID of the Site that the Account was created at',
    'primitive',
    'integer',
  ),
  new Property(
    'accountUserID',
    'Account User ID',
    'The ID of the user that the Account was created for',
    'primitive',
    'integer',
  ),
  new Property(
    'accountNumber',
    'Account Number',
    'The number of the Account within the site/division/user',
    'primitive',
    'integer',
  ),
  new Property(
    'homeCurrency',
    'Home Currency',
    'The home currency of the Account',
    'primitive',
    'primitives.Currency',
  ),
]

export class CreateTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "CREATE" in a CreateTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The ID of the Division that the Account is in
   */
  public divisionID: number

  /**
   * The ID of the Site that the Account was created at
   */
  public siteID: number

  /**
   * The ID of the user that the Account was created for
   */
  public accountUserID: number

  /**
   * The number of the Account within the site/division/user
   */
  public accountNumber: number

  /**
   * The home currency of the Account
   */
  public homeCurrency: primitives.Currency

  constructor(data) {
    super()

    this._summaryFormat = 'Create Account {accountID}'

    this._nameFormat = 'Transaction {id}'

    this._properties = CreateTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'CREATE'
    }

    if (data['divisionID'] !== undefined) {
      this.divisionID = data['divisionID']
    }

    if (data['siteID'] !== undefined) {
      this.siteID = data['siteID']
    }

    if (data['accountUserID'] !== undefined) {
      this.accountUserID = data['accountUserID']
    }

    if (data['accountNumber'] !== undefined) {
      this.accountNumber = data['accountNumber']
    }

    if (data['homeCurrency'] !== undefined) {
      this.homeCurrency = data['homeCurrency']
    }
  }
}

export const CloseTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "CLOSE" in a CloseTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
]

export class CloseTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "CLOSE" in a CloseTransaction.
   */
  public type: primitives.TransactionType

  constructor(data) {
    super()

    this._summaryFormat = 'Close Account {accountID}'

    this._nameFormat = 'Transaction {id}'

    this._properties = CloseTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'CLOSE'
    }
  }
}

export const ReopenTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "REOPEN" in a ReopenTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
]

export class ReopenTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "REOPEN" in a ReopenTransaction.
   */
  public type: primitives.TransactionType

  constructor(data) {
    super()

    this._summaryFormat = 'Reopen Account {accountID}'

    this._nameFormat = 'Transaction {id}'

    this._properties = ReopenTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'REOPEN'
    }
  }
}

export const ClientConfigureTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "CLIENT_CONFIGURE" in a ClientConfigureTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'alias',
    'Account Alias',
    'The client-provided alias for the Account.',
    'primitive',
    'string',
  ),
  new Property(
    'marginRate',
    'Margin Rate',
    'The margin rate override for the Account.',
    'primitive',
    'primitives.DecimalNumber',
  ),
]

export class ClientConfigureTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "CLIENT_CONFIGURE" in a ClientConfigureTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The client-provided alias for the Account.
   */
  public alias: string

  /**
   * The margin rate override for the Account.
   */
  public marginRate: primitives.DecimalNumber

  constructor(data) {
    super()

    this._summaryFormat = 'Client Configure'

    this._nameFormat = 'Transaction {id}'

    this._properties = ClientConfigureTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'CLIENT_CONFIGURE'
    }

    if (data['alias'] !== undefined) {
      this.alias = data['alias']
    }

    if (data['marginRate'] !== undefined) {
      this.marginRate = data['marginRate']
    }
  }
}

export const ClientConfigureRejectTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "CLIENT_CONFIGURE_REJECT" in a ClientConfigureRejectTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'alias',
    'Account Alias',
    'The client-provided alias for the Account.',
    'primitive',
    'string',
  ),
  new Property(
    'marginRate',
    'Margin Rate',
    'The margin rate override for the Account.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'rejectReason',
    'Reject Reason',
    'The reason that the Reject Transaction was created',
    'primitive',
    'transaction.TransactionRejectReason',
  ),
]

export class ClientConfigureRejectTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "CLIENT_CONFIGURE_REJECT" in a ClientConfigureRejectTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The client-provided alias for the Account.
   */
  public alias: string

  /**
   * The margin rate override for the Account.
   */
  public marginRate: primitives.DecimalNumber

  /**
   * The reason that the Reject Transaction was created
   */
  public rejectReason: primitives.TransactionRejectReason

  constructor(data) {
    super()

    this._summaryFormat = 'Client Configure Reject'

    this._nameFormat = 'Transaction {id}'

    this._properties = ClientConfigureRejectTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'CLIENT_CONFIGURE_REJECT'
    }

    if (data['alias'] !== undefined) {
      this.alias = data['alias']
    }

    if (data['marginRate'] !== undefined) {
      this.marginRate = data['marginRate']
    }

    if (data['rejectReason'] !== undefined) {
      this.rejectReason = data['rejectReason']
    }
  }
}

export const TransferFundsTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "TRANSFER_FUNDS" in a TransferFundsTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'amount',
    'Transfer Amount',
    "The amount to deposit/withdraw from the Account in the Account's home currency. A positive value indicates a deposit, a negative value indicates a withdrawal.",
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'fundingReason',
    'Reason',
    'The reason that an Account is being funded.',
    'primitive',
    'transaction.FundingReason',
  ),
  new Property(
    'comment',
    'Comment',
    'An optional comment that may be attached to a fund transfer for audit purposes',
    'primitive',
    'string',
  ),
  new Property(
    'accountBalance',
    'Account Balance',
    "The Account's balance after funds are transferred.",
    'primitive',
    'primitives.AccountUnits',
  ),
]

export class TransferFundsTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "TRANSFER_FUNDS" in a TransferFundsTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The amount to deposit/withdraw from the Account in the Account's home currency. A positive value indicates a deposit, a negative value indicates a withdrawal.
   */
  public amount: primitives.AccountUnits

  /**
   * The reason that an Account is being funded.
   */
  public fundingReason: primitives.FundingReason

  /**
   * An optional comment that may be attached to a fund transfer for audit purposes
   */
  public comment: string

  /**
   * The Account's balance after funds are transferred.
   */
  public accountBalance: primitives.AccountUnits

  constructor(data) {
    super()

    this._summaryFormat = 'Account Transfer of {amount}'

    this._nameFormat = 'Transaction {id}'

    this._properties = TransferFundsTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'TRANSFER_FUNDS'
    }

    if (data['amount'] !== undefined) {
      this.amount = data['amount']
    }

    if (data['fundingReason'] !== undefined) {
      this.fundingReason = data['fundingReason']
    }

    if (data['comment'] !== undefined) {
      this.comment = data['comment']
    }

    if (data['accountBalance'] !== undefined) {
      this.accountBalance = data['accountBalance']
    }
  }
}

export const TransferFundsRejectTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "TRANSFER_FUNDS_REJECT" in a TransferFundsRejectTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'amount',
    'Transfer Amount',
    "The amount to deposit/withdraw from the Account in the Account's home currency. A positive value indicates a deposit, a negative value indicates a withdrawal.",
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'fundingReason',
    'Reason',
    'The reason that an Account is being funded.',
    'primitive',
    'transaction.FundingReason',
  ),
  new Property(
    'comment',
    'Comment',
    'An optional comment that may be attached to a fund transfer for audit purposes',
    'primitive',
    'string',
  ),
  new Property(
    'rejectReason',
    'Reject Reason',
    'The reason that the Reject Transaction was created',
    'primitive',
    'transaction.TransactionRejectReason',
  ),
]

export class TransferFundsRejectTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "TRANSFER_FUNDS_REJECT" in a TransferFundsRejectTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The amount to deposit/withdraw from the Account in the Account's home currency. A positive value indicates a deposit, a negative value indicates a withdrawal.
   */
  public amount: primitives.AccountUnits

  /**
   * The reason that an Account is being funded.
   */
  public fundingReason: primitives.FundingReason

  /**
   * An optional comment that may be attached to a fund transfer for audit purposes
   */
  public comment: string

  /**
   * The reason that the Reject Transaction was created
   */
  public rejectReason: primitives.TransactionRejectReason

  constructor(data) {
    super()

    this._summaryFormat = 'Account Reject Transfer of {amount}'

    this._nameFormat = 'Transaction {id}'

    this._properties = TransferFundsRejectTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'TRANSFER_FUNDS_REJECT'
    }

    if (data['amount'] !== undefined) {
      this.amount = data['amount']
    }

    if (data['fundingReason'] !== undefined) {
      this.fundingReason = data['fundingReason']
    }

    if (data['comment'] !== undefined) {
      this.comment = data['comment']
    }

    if (data['rejectReason'] !== undefined) {
      this.rejectReason = data['rejectReason']
    }
  }
}

export const MarketOrderTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "MARKET_ORDER" in a MarketOrderTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'instrument',
    'Instrument',
    "The Market Order's Instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'units',
    'Amount',
    'The quantity requested to be filled by the Market Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time-in-force requested for the Market Order. Restricted to FOK or IOC for a MarketOrder.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'priceBound',
    'Price Bound',
    'The worst price that the client is willing to have the Market Order filled at.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'positionFill',
    'Position Fill',
    'Specification of how Positions in the Account are modified when the Order is filled.',
    'primitive',
    'order.OrderPositionFill',
  ),
  new Property(
    'tradeClose',
    'Trade Close Details',
    'Details of the Trade requested to be closed, only provided when the Market Order is being used to explicitly close a Trade.',
    'object',
    'transaction.MarketOrderTradeClose',
  ),
  new Property(
    'longPositionCloseout',
    'Long Position Close Details',
    'Details of the long Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a long Position.',
    'object',
    'transaction.MarketOrderPositionCloseout',
  ),
  new Property(
    'shortPositionCloseout',
    'Short Position Close Details',
    'Details of the short Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a short Position.',
    'object',
    'transaction.MarketOrderPositionCloseout',
  ),
  new Property(
    'marginCloseout',
    'Margin Closeout Details',
    'Details of the Margin Closeout that this Market Order was created for',
    'object',
    'transaction.MarketOrderMarginCloseout',
  ),
  new Property(
    'delayedTradeClose',
    'Delayed Trade Close Details',
    'Details of the delayed Trade close that this Market Order was created for',
    'object',
    'transaction.MarketOrderDelayedTradeClose',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Market Order was created',
    'primitive',
    'transaction.MarketOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Order Client Extensions',
    'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'takeProfitOnFill',
    'Take Profit On Fill',
    'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TakeProfitDetails',
  ),
  new Property(
    'stopLossOnFill',
    'Stop Loss On Fill',
    'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.StopLossDetails',
  ),
  new Property(
    'trailingStopLossOnFill',
    'Trailing Stop Loss On Fill',
    'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TrailingStopLossDetails',
  ),
  new Property(
    'tradeClientExtensions',
    'Trade Client Extensions',
    'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.',
    'object',
    'transaction.ClientExtensions',
  ),
]

export class MarketOrderTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "MARKET_ORDER" in a MarketOrderTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The Market Order's Instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Market Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
   */
  public units: primitives.DecimalNumber

  /**
   * The time-in-force requested for the Market Order. Restricted to FOK or IOC for a MarketOrder.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The worst price that the client is willing to have the Market Order filled at.
   */
  public priceBound: primitives.PriceValue

  /**
   * Specification of how Positions in the Account are modified when the Order is filled.
   */
  public positionFill: primitives.OrderPositionFill

  /**
   * Details of the Trade requested to be closed, only provided when the Market Order is being used to explicitly close a Trade.
   */
  public tradeClose: MarketOrderTradeClose

  /**
   * Details of the long Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a long Position.
   */
  public longPositionCloseout: MarketOrderPositionCloseout

  /**
   * Details of the short Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a short Position.
   */
  public shortPositionCloseout: MarketOrderPositionCloseout

  /**
   * Details of the Margin Closeout that this Market Order was created for
   */
  public marginCloseout: MarketOrderMarginCloseout

  /**
   * Details of the delayed Trade close that this Market Order was created for
   */
  public delayedTradeClose: MarketOrderDelayedTradeClose

  /**
   * The reason that the Market Order was created
   */
  public reason: primitives.MarketOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
   */
  public clientExtensions: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public takeProfitOnFill: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public stopLossOnFill: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
   */
  public trailingStopLossOnFill: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
   */
  public tradeClientExtensions: ClientExtensions

  constructor(data) {
    super()

    this._summaryFormat = 'Create Market Order {id} ({reason}): {units} of {instrument}'

    this._nameFormat = 'Transaction {id}'

    this._properties = MarketOrderTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'MARKET_ORDER'
    }

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['units'] !== undefined) {
      this.units = data['units']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'FOK'
    }

    if (data['priceBound'] !== undefined) {
      this.priceBound = data['priceBound']
    }

    if (data['positionFill'] !== undefined) {
      this.positionFill = data['positionFill']
    } else {
      this.positionFill = 'DEFAULT'
    }

    if (data['tradeClose'] !== undefined) {
      this.tradeClose = new MarketOrderTradeClose(data['tradeClose'])
    }

    if (data['longPositionCloseout'] !== undefined) {
      this.longPositionCloseout = new MarketOrderPositionCloseout(data['longPositionCloseout'])
    }

    if (data['shortPositionCloseout'] !== undefined) {
      this.shortPositionCloseout = new MarketOrderPositionCloseout(data['shortPositionCloseout'])
    }

    if (data['marginCloseout'] !== undefined) {
      this.marginCloseout = new MarketOrderMarginCloseout(data['marginCloseout'])
    }

    if (data['delayedTradeClose'] !== undefined) {
      this.delayedTradeClose = new MarketOrderDelayedTradeClose(data['delayedTradeClose'])
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['takeProfitOnFill'] !== undefined) {
      this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill'])
    }

    if (data['stopLossOnFill'] !== undefined) {
      this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill'])
    }

    if (data['trailingStopLossOnFill'] !== undefined) {
      this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill'])
    }

    if (data['tradeClientExtensions'] !== undefined) {
      this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions'])
    }
  }
}

export const MarketOrderRejectTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "MARKET_ORDER_REJECT" in a MarketOrderRejectTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'instrument',
    'Instrument',
    "The Market Order's Instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'units',
    'Amount',
    'The quantity requested to be filled by the Market Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time-in-force requested for the Market Order. Restricted to FOK or IOC for a MarketOrder.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'priceBound',
    'Price Bound',
    'The worst price that the client is willing to have the Market Order filled at.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'positionFill',
    'Position Fill',
    'Specification of how Positions in the Account are modified when the Order is filled.',
    'primitive',
    'order.OrderPositionFill',
  ),
  new Property(
    'tradeClose',
    'Trade Close Details',
    'Details of the Trade requested to be closed, only provided when the Market Order is being used to explicitly close a Trade.',
    'object',
    'transaction.MarketOrderTradeClose',
  ),
  new Property(
    'longPositionCloseout',
    'Long Position Close Details',
    'Details of the long Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a long Position.',
    'object',
    'transaction.MarketOrderPositionCloseout',
  ),
  new Property(
    'shortPositionCloseout',
    'Short Position Close Details',
    'Details of the short Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a short Position.',
    'object',
    'transaction.MarketOrderPositionCloseout',
  ),
  new Property(
    'marginCloseout',
    'Margin Closeout Details',
    'Details of the Margin Closeout that this Market Order was created for',
    'object',
    'transaction.MarketOrderMarginCloseout',
  ),
  new Property(
    'delayedTradeClose',
    'Delayed Trade Close Details',
    'Details of the delayed Trade close that this Market Order was created for',
    'object',
    'transaction.MarketOrderDelayedTradeClose',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Market Order was created',
    'primitive',
    'transaction.MarketOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Order Client Extensions',
    'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'takeProfitOnFill',
    'Take Profit On Fill',
    'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TakeProfitDetails',
  ),
  new Property(
    'stopLossOnFill',
    'Stop Loss On Fill',
    'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.StopLossDetails',
  ),
  new Property(
    'trailingStopLossOnFill',
    'Trailing Stop Loss On Fill',
    'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TrailingStopLossDetails',
  ),
  new Property(
    'tradeClientExtensions',
    'Trade Client Extensions',
    'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'rejectReason',
    'Reject Reason',
    'The reason that the Reject Transaction was created',
    'primitive',
    'transaction.TransactionRejectReason',
  ),
]

export class MarketOrderRejectTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "MARKET_ORDER_REJECT" in a MarketOrderRejectTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The Market Order's Instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Market Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
   */
  public units: primitives.DecimalNumber

  /**
   * The time-in-force requested for the Market Order. Restricted to FOK or IOC for a MarketOrder.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The worst price that the client is willing to have the Market Order filled at.
   */
  public priceBound: primitives.PriceValue

  /**
   * Specification of how Positions in the Account are modified when the Order is filled.
   */
  public positionFill: primitives.OrderPositionFill

  /**
   * Details of the Trade requested to be closed, only provided when the Market Order is being used to explicitly close a Trade.
   */
  public tradeClose: MarketOrderTradeClose

  /**
   * Details of the long Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a long Position.
   */
  public longPositionCloseout: MarketOrderPositionCloseout

  /**
   * Details of the short Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a short Position.
   */
  public shortPositionCloseout: MarketOrderPositionCloseout

  /**
   * Details of the Margin Closeout that this Market Order was created for
   */
  public marginCloseout: MarketOrderMarginCloseout

  /**
   * Details of the delayed Trade close that this Market Order was created for
   */
  public delayedTradeClose: MarketOrderDelayedTradeClose

  /**
   * The reason that the Market Order was created
   */
  public reason: primitives.MarketOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
   */
  public clientExtensions: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public takeProfitOnFill: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public stopLossOnFill: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
   */
  public trailingStopLossOnFill: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
   */
  public tradeClientExtensions: ClientExtensions

  /**
   * The reason that the Reject Transaction was created
   */
  public rejectReason: primitives.TransactionRejectReason

  constructor(data) {
    super()

    this._summaryFormat = 'Reject Market Order ({reason}): {units} of {instrument}'

    this._nameFormat = 'Transaction {id}'

    this._properties = MarketOrderRejectTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'MARKET_ORDER_REJECT'
    }

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['units'] !== undefined) {
      this.units = data['units']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'FOK'
    }

    if (data['priceBound'] !== undefined) {
      this.priceBound = data['priceBound']
    }

    if (data['positionFill'] !== undefined) {
      this.positionFill = data['positionFill']
    } else {
      this.positionFill = 'DEFAULT'
    }

    if (data['tradeClose'] !== undefined) {
      this.tradeClose = new MarketOrderTradeClose(data['tradeClose'])
    }

    if (data['longPositionCloseout'] !== undefined) {
      this.longPositionCloseout = new MarketOrderPositionCloseout(data['longPositionCloseout'])
    }

    if (data['shortPositionCloseout'] !== undefined) {
      this.shortPositionCloseout = new MarketOrderPositionCloseout(data['shortPositionCloseout'])
    }

    if (data['marginCloseout'] !== undefined) {
      this.marginCloseout = new MarketOrderMarginCloseout(data['marginCloseout'])
    }

    if (data['delayedTradeClose'] !== undefined) {
      this.delayedTradeClose = new MarketOrderDelayedTradeClose(data['delayedTradeClose'])
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['takeProfitOnFill'] !== undefined) {
      this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill'])
    }

    if (data['stopLossOnFill'] !== undefined) {
      this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill'])
    }

    if (data['trailingStopLossOnFill'] !== undefined) {
      this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill'])
    }

    if (data['tradeClientExtensions'] !== undefined) {
      this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions'])
    }

    if (data['rejectReason'] !== undefined) {
      this.rejectReason = data['rejectReason']
    }
  }
}

export const FixedPriceOrderTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "FIXED_PRICE_ORDER" in a FixedPriceOrderTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'instrument',
    'Instrument',
    "The Fixed Price Order's Instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'units',
    'Amount',
    'The quantity requested to be filled by the Fixed Price Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'price',
    'Price',
    'The price specified for the Fixed Price Order. This price is the exact price that the Fixed Price Order will be filled at.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'positionFill',
    'Position Fill',
    'Specification of how Positions in the Account are modified when the Order is filled.',
    'primitive',
    'order.OrderPositionFill',
  ),
  new Property(
    'tradeState',
    'TradeState',
    'The state that the trade resulting from the Fixed Price Order should be set to.',
    'primitive',
    'string',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Fixed Price Order was created',
    'primitive',
    'transaction.FixedPriceOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Client Extensions',
    'The client extensions for the Fixed Price Order.',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'takeProfitOnFill',
    'Take Profit On Fill',
    'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TakeProfitDetails',
  ),
  new Property(
    'stopLossOnFill',
    'Stop Loss On Fill',
    'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.StopLossDetails',
  ),
  new Property(
    'trailingStopLossOnFill',
    'Trailing Stop Loss On Fill',
    'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TrailingStopLossDetails',
  ),
  new Property(
    'tradeClientExtensions',
    'Trade Client Extensions',
    'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.',
    'object',
    'transaction.ClientExtensions',
  ),
]

export class FixedPriceOrderTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "FIXED_PRICE_ORDER" in a FixedPriceOrderTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The Fixed Price Order's Instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Fixed Price Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
   */
  public units: primitives.DecimalNumber

  /**
   * The price specified for the Fixed Price Order. This price is the exact price that the Fixed Price Order will be filled at.
   */
  public price: primitives.PriceValue

  /**
   * Specification of how Positions in the Account are modified when the Order is filled.
   */
  public positionFill: primitives.OrderPositionFill

  /**
   * The state that the trade resulting from the Fixed Price Order should be set to.
   */
  public tradeState: string

  /**
   * The reason that the Fixed Price Order was created
   */
  public reason: primitives.FixedPriceOrderReason

  /**
   * The client extensions for the Fixed Price Order.
   */
  public clientExtensions: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public takeProfitOnFill: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public stopLossOnFill: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
   */
  public trailingStopLossOnFill: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
   */
  public tradeClientExtensions: ClientExtensions

  constructor(data) {
    super()

    this._summaryFormat = 'Create Fixed Price Order {id} ({reason}): {units} of {instrument}'

    this._nameFormat = 'Transaction {id}'

    this._properties = FixedPriceOrderTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'FIXED_PRICE_ORDER'
    }

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['units'] !== undefined) {
      this.units = data['units']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['positionFill'] !== undefined) {
      this.positionFill = data['positionFill']
    } else {
      this.positionFill = 'DEFAULT'
    }

    if (data['tradeState'] !== undefined) {
      this.tradeState = data['tradeState']
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['takeProfitOnFill'] !== undefined) {
      this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill'])
    }

    if (data['stopLossOnFill'] !== undefined) {
      this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill'])
    }

    if (data['trailingStopLossOnFill'] !== undefined) {
      this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill'])
    }

    if (data['tradeClientExtensions'] !== undefined) {
      this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions'])
    }
  }
}

export const LimitOrderTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "LIMIT_ORDER" in a LimitOrderTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'instrument',
    'Instrument',
    "The Limit Order's Instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'units',
    'Amount',
    'The quantity requested to be filled by the Limit Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'price',
    'Price',
    'The price threshold specified for the Limit Order. The Limit Order will only be filled by a market price that is equal to or better than this price.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time-in-force requested for the Limit Order.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date/time when the Limit Order will be cancelled if its timeInForce is "GTD".',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'positionFill',
    'Position Fill',
    'Specification of how Positions in the Account are modified when the Order is filled.',
    'primitive',
    'order.OrderPositionFill',
  ),
  new Property(
    'triggerCondition',
    'Trigger Condition',
    'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.',
    'primitive',
    'order.OrderTriggerCondition',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Limit Order was initiated',
    'primitive',
    'transaction.LimitOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Order Client Extensions',
    'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'takeProfitOnFill',
    'Take Profit On Fill',
    'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TakeProfitDetails',
  ),
  new Property(
    'stopLossOnFill',
    'Stop Loss On Fill',
    'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.StopLossDetails',
  ),
  new Property(
    'trailingStopLossOnFill',
    'Trailing Stop Loss On Fill',
    'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TrailingStopLossDetails',
  ),
  new Property(
    'tradeClientExtensions',
    'Trade Client Extensions',
    'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'replacesOrderID',
    'Replaces Order ID',
    'The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'cancellingTransactionID',
    'Replaces Order Cancel Transaction ID',
    'The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).',
    'primitive',
    'transaction.TransactionID',
  ),
]

export class LimitOrderTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "LIMIT_ORDER" in a LimitOrderTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The Limit Order's Instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Limit Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
   */
  public units: primitives.DecimalNumber

  /**
   * The price threshold specified for the Limit Order. The Limit Order will only be filled by a market price that is equal to or better than this price.
   */
  public price: primitives.PriceValue

  /**
   * The time-in-force requested for the Limit Order.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date/time when the Limit Order will be cancelled if its timeInForce is "GTD".
   */
  public gtdTime: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order is filled.
   */
  public positionFill: primitives.OrderPositionFill

  /**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid. 
 */
  public triggerCondition: primitives.OrderTriggerCondition

  /**
   * The reason that the Limit Order was initiated
   */
  public reason: primitives.LimitOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
   */
  public clientExtensions: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public takeProfitOnFill: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public stopLossOnFill: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
   */
  public trailingStopLossOnFill: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
   */
  public tradeClientExtensions: ClientExtensions

  /**
   * The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).
   */
  public replacesOrderID: primitives.OrderID

  /**
   * The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).
   */
  public cancellingTransactionID: primitives.TransactionID

  constructor(data) {
    super()

    this._summaryFormat = 'Create Limit Order {id} ({reason}): {units} of {instrument} @ {price}'

    this._nameFormat = 'Transaction {id}'

    this._properties = LimitOrderTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'LIMIT_ORDER'
    }

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['units'] !== undefined) {
      this.units = data['units']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['positionFill'] !== undefined) {
      this.positionFill = data['positionFill']
    } else {
      this.positionFill = 'DEFAULT'
    }

    if (data['triggerCondition'] !== undefined) {
      this.triggerCondition = data['triggerCondition']
    } else {
      this.triggerCondition = 'DEFAULT'
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['takeProfitOnFill'] !== undefined) {
      this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill'])
    }

    if (data['stopLossOnFill'] !== undefined) {
      this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill'])
    }

    if (data['trailingStopLossOnFill'] !== undefined) {
      this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill'])
    }

    if (data['tradeClientExtensions'] !== undefined) {
      this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions'])
    }

    if (data['replacesOrderID'] !== undefined) {
      this.replacesOrderID = data['replacesOrderID']
    }

    if (data['cancellingTransactionID'] !== undefined) {
      this.cancellingTransactionID = data['cancellingTransactionID']
    }
  }
}

export const LimitOrderRejectTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "LIMIT_ORDER_REJECT" in a LimitOrderRejectTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'instrument',
    'Instrument',
    "The Limit Order's Instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'units',
    'Amount',
    'The quantity requested to be filled by the Limit Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'price',
    'Price',
    'The price threshold specified for the Limit Order. The Limit Order will only be filled by a market price that is equal to or better than this price.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time-in-force requested for the Limit Order.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date/time when the Limit Order will be cancelled if its timeInForce is "GTD".',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'positionFill',
    'Position Fill',
    'Specification of how Positions in the Account are modified when the Order is filled.',
    'primitive',
    'order.OrderPositionFill',
  ),
  new Property(
    'triggerCondition',
    'Trigger Condition',
    'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.',
    'primitive',
    'order.OrderTriggerCondition',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Limit Order was initiated',
    'primitive',
    'transaction.LimitOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Order Client Extensions',
    'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'takeProfitOnFill',
    'Take Profit On Fill',
    'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TakeProfitDetails',
  ),
  new Property(
    'stopLossOnFill',
    'Stop Loss On Fill',
    'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.StopLossDetails',
  ),
  new Property(
    'trailingStopLossOnFill',
    'Trailing Stop Loss On Fill',
    'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TrailingStopLossDetails',
  ),
  new Property(
    'tradeClientExtensions',
    'Trade Client Extensions',
    'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'intendedReplacesOrderID',
    'Order ID to Replace',
    'The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'rejectReason',
    'Reject Reason',
    'The reason that the Reject Transaction was created',
    'primitive',
    'transaction.TransactionRejectReason',
  ),
]

export class LimitOrderRejectTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "LIMIT_ORDER_REJECT" in a LimitOrderRejectTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The Limit Order's Instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Limit Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
   */
  public units: primitives.DecimalNumber

  /**
   * The price threshold specified for the Limit Order. The Limit Order will only be filled by a market price that is equal to or better than this price.
   */
  public price: primitives.PriceValue

  /**
   * The time-in-force requested for the Limit Order.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date/time when the Limit Order will be cancelled if its timeInForce is "GTD".
   */
  public gtdTime: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order is filled.
   */
  public positionFill: primitives.OrderPositionFill

  /**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid. 
 */
  public triggerCondition: primitives.OrderTriggerCondition

  /**
   * The reason that the Limit Order was initiated
   */
  public reason: primitives.LimitOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
   */
  public clientExtensions: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public takeProfitOnFill: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public stopLossOnFill: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
   */
  public trailingStopLossOnFill: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
   */
  public tradeClientExtensions: ClientExtensions

  /**
   * The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).
   */
  public intendedReplacesOrderID: primitives.OrderID

  /**
   * The reason that the Reject Transaction was created
   */
  public rejectReason: primitives.TransactionRejectReason

  constructor(data) {
    super()

    this._summaryFormat = 'Reject Limit Order ({reason}): {units} of {instrument} @ {price}'

    this._nameFormat = 'Transaction {id}'

    this._properties = LimitOrderRejectTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'LIMIT_ORDER_REJECT'
    }

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['units'] !== undefined) {
      this.units = data['units']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['positionFill'] !== undefined) {
      this.positionFill = data['positionFill']
    } else {
      this.positionFill = 'DEFAULT'
    }

    if (data['triggerCondition'] !== undefined) {
      this.triggerCondition = data['triggerCondition']
    } else {
      this.triggerCondition = 'DEFAULT'
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['takeProfitOnFill'] !== undefined) {
      this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill'])
    }

    if (data['stopLossOnFill'] !== undefined) {
      this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill'])
    }

    if (data['trailingStopLossOnFill'] !== undefined) {
      this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill'])
    }

    if (data['tradeClientExtensions'] !== undefined) {
      this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions'])
    }

    if (data['intendedReplacesOrderID'] !== undefined) {
      this.intendedReplacesOrderID = data['intendedReplacesOrderID']
    }

    if (data['rejectReason'] !== undefined) {
      this.rejectReason = data['rejectReason']
    }
  }
}

export const StopOrderTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "STOP_ORDER" in a StopOrderTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'instrument',
    'Instrument',
    "The Stop Order's Instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'units',
    'Amount',
    'The quantity requested to be filled by the Stop Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'price',
    'Price',
    'The price threshold specified for the Stop Order. The Stop Order will only be filled by a market price that is equal to or worse than this price.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'priceBound',
    'Price Bound',
    'The worst market price that may be used to fill this Stop Order. If the market gaps and crosses through both the price and the priceBound, the Stop Order will be cancelled instead of being filled.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time-in-force requested for the Stop Order.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date/time when the Stop Order will be cancelled if its timeInForce is "GTD".',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'positionFill',
    'Position Fill',
    'Specification of how Positions in the Account are modified when the Order is filled.',
    'primitive',
    'order.OrderPositionFill',
  ),
  new Property(
    'triggerCondition',
    'Trigger Condition',
    'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.',
    'primitive',
    'order.OrderTriggerCondition',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Stop Order was initiated',
    'primitive',
    'transaction.StopOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Order Client Extensions',
    'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'takeProfitOnFill',
    'Take Profit On Fill',
    'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TakeProfitDetails',
  ),
  new Property(
    'stopLossOnFill',
    'Stop Loss On Fill',
    'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.StopLossDetails',
  ),
  new Property(
    'trailingStopLossOnFill',
    'Trailing Stop Loss On Fill',
    'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TrailingStopLossDetails',
  ),
  new Property(
    'tradeClientExtensions',
    'Trade Client Extensions',
    'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'replacesOrderID',
    'Replaces Order ID',
    'The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'cancellingTransactionID',
    'Replaces Order Cancel Transaction ID',
    'The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).',
    'primitive',
    'transaction.TransactionID',
  ),
]

export class StopOrderTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "STOP_ORDER" in a StopOrderTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The Stop Order's Instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Stop Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
   */
  public units: primitives.DecimalNumber

  /**
   * The price threshold specified for the Stop Order. The Stop Order will only be filled by a market price that is equal to or worse than this price.
   */
  public price: primitives.PriceValue

  /**
   * The worst market price that may be used to fill this Stop Order. If the market gaps and crosses through both the price and the priceBound, the Stop Order will be cancelled instead of being filled.
   */
  public priceBound: primitives.PriceValue

  /**
   * The time-in-force requested for the Stop Order.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date/time when the Stop Order will be cancelled if its timeInForce is "GTD".
   */
  public gtdTime: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order is filled.
   */
  public positionFill: primitives.OrderPositionFill

  /**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid. 
 */
  public triggerCondition: primitives.OrderTriggerCondition

  /**
   * The reason that the Stop Order was initiated
   */
  public reason: primitives.StopOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
   */
  public clientExtensions: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public takeProfitOnFill: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public stopLossOnFill: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
   */
  public trailingStopLossOnFill: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
   */
  public tradeClientExtensions: ClientExtensions

  /**
   * The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).
   */
  public replacesOrderID: primitives.OrderID

  /**
   * The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).
   */
  public cancellingTransactionID: primitives.TransactionID

  constructor(data) {
    super()

    this._summaryFormat = 'Create Stop Order {id} ({reason}): {units} of {instrument} @ {price}'

    this._nameFormat = 'Transaction {id}'

    this._properties = StopOrderTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'STOP_ORDER'
    }

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['units'] !== undefined) {
      this.units = data['units']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['priceBound'] !== undefined) {
      this.priceBound = data['priceBound']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['positionFill'] !== undefined) {
      this.positionFill = data['positionFill']
    } else {
      this.positionFill = 'DEFAULT'
    }

    if (data['triggerCondition'] !== undefined) {
      this.triggerCondition = data['triggerCondition']
    } else {
      this.triggerCondition = 'DEFAULT'
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['takeProfitOnFill'] !== undefined) {
      this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill'])
    }

    if (data['stopLossOnFill'] !== undefined) {
      this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill'])
    }

    if (data['trailingStopLossOnFill'] !== undefined) {
      this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill'])
    }

    if (data['tradeClientExtensions'] !== undefined) {
      this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions'])
    }

    if (data['replacesOrderID'] !== undefined) {
      this.replacesOrderID = data['replacesOrderID']
    }

    if (data['cancellingTransactionID'] !== undefined) {
      this.cancellingTransactionID = data['cancellingTransactionID']
    }
  }
}

export const StopOrderRejectTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "STOP_ORDER_REJECT" in a StopOrderRejectTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'instrument',
    'Instrument',
    "The Stop Order's Instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'units',
    'Amount',
    'The quantity requested to be filled by the Stop Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'price',
    'Price',
    'The price threshold specified for the Stop Order. The Stop Order will only be filled by a market price that is equal to or worse than this price.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'priceBound',
    'Price Bound',
    'The worst market price that may be used to fill this Stop Order. If the market gaps and crosses through both the price and the priceBound, the Stop Order will be cancelled instead of being filled.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time-in-force requested for the Stop Order.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date/time when the Stop Order will be cancelled if its timeInForce is "GTD".',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'positionFill',
    'Position Fill',
    'Specification of how Positions in the Account are modified when the Order is filled.',
    'primitive',
    'order.OrderPositionFill',
  ),
  new Property(
    'triggerCondition',
    'Trigger Condition',
    'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.',
    'primitive',
    'order.OrderTriggerCondition',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Stop Order was initiated',
    'primitive',
    'transaction.StopOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Order Client Extensions',
    'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'takeProfitOnFill',
    'Take Profit On Fill',
    'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TakeProfitDetails',
  ),
  new Property(
    'stopLossOnFill',
    'Stop Loss On Fill',
    'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.StopLossDetails',
  ),
  new Property(
    'trailingStopLossOnFill',
    'Trailing Stop Loss On Fill',
    'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TrailingStopLossDetails',
  ),
  new Property(
    'tradeClientExtensions',
    'Trade Client Extensions',
    'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'intendedReplacesOrderID',
    'Order ID to Replace',
    'The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'rejectReason',
    'Reject Reason',
    'The reason that the Reject Transaction was created',
    'primitive',
    'transaction.TransactionRejectReason',
  ),
]

export class StopOrderRejectTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "STOP_ORDER_REJECT" in a StopOrderRejectTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The Stop Order's Instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the Stop Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
   */
  public units: primitives.DecimalNumber

  /**
   * The price threshold specified for the Stop Order. The Stop Order will only be filled by a market price that is equal to or worse than this price.
   */
  public price: primitives.PriceValue

  /**
   * The worst market price that may be used to fill this Stop Order. If the market gaps and crosses through both the price and the priceBound, the Stop Order will be cancelled instead of being filled.
   */
  public priceBound: primitives.PriceValue

  /**
   * The time-in-force requested for the Stop Order.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date/time when the Stop Order will be cancelled if its timeInForce is "GTD".
   */
  public gtdTime: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order is filled.
   */
  public positionFill: primitives.OrderPositionFill

  /**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid. 
 */
  public triggerCondition: primitives.OrderTriggerCondition

  /**
   * The reason that the Stop Order was initiated
   */
  public reason: primitives.StopOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
   */
  public clientExtensions: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public takeProfitOnFill: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public stopLossOnFill: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
   */
  public trailingStopLossOnFill: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
   */
  public tradeClientExtensions: ClientExtensions

  /**
   * The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).
   */
  public intendedReplacesOrderID: primitives.OrderID

  /**
   * The reason that the Reject Transaction was created
   */
  public rejectReason: primitives.TransactionRejectReason

  constructor(data) {
    super()

    this._summaryFormat = 'Reject Stop Order ({reason}): {units} of {instrument} @ {price}'

    this._nameFormat = 'Transaction {id}'

    this._properties = StopOrderRejectTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'STOP_ORDER_REJECT'
    }

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['units'] !== undefined) {
      this.units = data['units']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['priceBound'] !== undefined) {
      this.priceBound = data['priceBound']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['positionFill'] !== undefined) {
      this.positionFill = data['positionFill']
    } else {
      this.positionFill = 'DEFAULT'
    }

    if (data['triggerCondition'] !== undefined) {
      this.triggerCondition = data['triggerCondition']
    } else {
      this.triggerCondition = 'DEFAULT'
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['takeProfitOnFill'] !== undefined) {
      this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill'])
    }

    if (data['stopLossOnFill'] !== undefined) {
      this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill'])
    }

    if (data['trailingStopLossOnFill'] !== undefined) {
      this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill'])
    }

    if (data['tradeClientExtensions'] !== undefined) {
      this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions'])
    }

    if (data['intendedReplacesOrderID'] !== undefined) {
      this.intendedReplacesOrderID = data['intendedReplacesOrderID']
    }

    if (data['rejectReason'] !== undefined) {
      this.rejectReason = data['rejectReason']
    }
  }
}

export const MarketIfTouchedOrderTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "MARKET_IF_TOUCHED_ORDER" in a MarketIfTouchedOrderTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'instrument',
    'Instrument',
    "The MarketIfTouched Order's Instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'units',
    'Amount',
    'The quantity requested to be filled by the MarketIfTouched Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'price',
    'Price',
    "The price threshold specified for the MarketIfTouched Order. The MarketIfTouched Order will only be filled by a market price that crosses this price from the direction of the market price at the time when the Order was created (the initialMarketPrice). Depending on the value of the Order's price and initialMarketPrice, the MarketIfTouchedOrder will behave like a Limit or a Stop Order.",
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'priceBound',
    'Price Value',
    'The worst market price that may be used to fill this MarketIfTouched Order.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time-in-force requested for the MarketIfTouched Order. Restricted to "GTC", "GFD" and "GTD" for MarketIfTouched Orders.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date/time when the MarketIfTouched Order will be cancelled if its timeInForce is "GTD".',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'positionFill',
    'Position Fill',
    'Specification of how Positions in the Account are modified when the Order is filled.',
    'primitive',
    'order.OrderPositionFill',
  ),
  new Property(
    'triggerCondition',
    'Trigger Condition',
    'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.',
    'primitive',
    'order.OrderTriggerCondition',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Market-if-touched Order was initiated',
    'primitive',
    'transaction.MarketIfTouchedOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Order Client Extensions',
    'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'takeProfitOnFill',
    'Take Profit On Fill',
    'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TakeProfitDetails',
  ),
  new Property(
    'stopLossOnFill',
    'Stop Loss On Fill',
    'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.StopLossDetails',
  ),
  new Property(
    'trailingStopLossOnFill',
    'Trailing Stop Loss On Fill',
    'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TrailingStopLossDetails',
  ),
  new Property(
    'tradeClientExtensions',
    'Trade Client Extensions',
    'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'replacesOrderID',
    'Replaces Order ID',
    'The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'cancellingTransactionID',
    'Replaces Order Cancel Transaction ID',
    'The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).',
    'primitive',
    'transaction.TransactionID',
  ),
]

export class MarketIfTouchedOrderTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "MARKET_IF_TOUCHED_ORDER" in a MarketIfTouchedOrderTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The MarketIfTouched Order's Instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the MarketIfTouched Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
   */
  public units: primitives.DecimalNumber

  /**
   * The price threshold specified for the MarketIfTouched Order. The MarketIfTouched Order will only be filled by a market price that crosses this price from the direction of the market price at the time when the Order was created (the initialMarketPrice). Depending on the value of the Order's price and initialMarketPrice, the MarketIfTouchedOrder will behave like a Limit or a Stop Order.
   */
  public price: primitives.PriceValue

  /**
   * The worst market price that may be used to fill this MarketIfTouched Order.
   */
  public priceBound: primitives.PriceValue

  /**
   * The time-in-force requested for the MarketIfTouched Order. Restricted to "GTC", "GFD" and "GTD" for MarketIfTouched Orders.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date/time when the MarketIfTouched Order will be cancelled if its timeInForce is "GTD".
   */
  public gtdTime: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order is filled.
   */
  public positionFill: primitives.OrderPositionFill

  /**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid. 
 */
  public triggerCondition: primitives.OrderTriggerCondition

  /**
   * The reason that the Market-if-touched Order was initiated
   */
  public reason: primitives.MarketIfTouchedOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
   */
  public clientExtensions: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public takeProfitOnFill: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public stopLossOnFill: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
   */
  public trailingStopLossOnFill: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
   */
  public tradeClientExtensions: ClientExtensions

  /**
   * The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).
   */
  public replacesOrderID: primitives.OrderID

  /**
   * The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).
   */
  public cancellingTransactionID: primitives.TransactionID

  constructor(data) {
    super()

    this._summaryFormat = 'Create MIT Order {id} ({reason}): {units} of {instrument} @ {price}'

    this._nameFormat = 'Transaction {id}'

    this._properties = MarketIfTouchedOrderTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'MARKET_IF_TOUCHED_ORDER'
    }

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['units'] !== undefined) {
      this.units = data['units']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['priceBound'] !== undefined) {
      this.priceBound = data['priceBound']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['positionFill'] !== undefined) {
      this.positionFill = data['positionFill']
    } else {
      this.positionFill = 'DEFAULT'
    }

    if (data['triggerCondition'] !== undefined) {
      this.triggerCondition = data['triggerCondition']
    } else {
      this.triggerCondition = 'DEFAULT'
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['takeProfitOnFill'] !== undefined) {
      this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill'])
    }

    if (data['stopLossOnFill'] !== undefined) {
      this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill'])
    }

    if (data['trailingStopLossOnFill'] !== undefined) {
      this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill'])
    }

    if (data['tradeClientExtensions'] !== undefined) {
      this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions'])
    }

    if (data['replacesOrderID'] !== undefined) {
      this.replacesOrderID = data['replacesOrderID']
    }

    if (data['cancellingTransactionID'] !== undefined) {
      this.cancellingTransactionID = data['cancellingTransactionID']
    }
  }
}

export const MarketIfTouchedOrderRejectTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "MARKET_IF_TOUCHED_ORDER_REJECT" in a MarketIfTouchedOrderRejectTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'instrument',
    'Instrument',
    "The MarketIfTouched Order's Instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'units',
    'Amount',
    'The quantity requested to be filled by the MarketIfTouched Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'price',
    'Price',
    "The price threshold specified for the MarketIfTouched Order. The MarketIfTouched Order will only be filled by a market price that crosses this price from the direction of the market price at the time when the Order was created (the initialMarketPrice). Depending on the value of the Order's price and initialMarketPrice, the MarketIfTouchedOrder will behave like a Limit or a Stop Order.",
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'priceBound',
    'Price Value',
    'The worst market price that may be used to fill this MarketIfTouched Order.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time-in-force requested for the MarketIfTouched Order. Restricted to "GTC", "GFD" and "GTD" for MarketIfTouched Orders.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date/time when the MarketIfTouched Order will be cancelled if its timeInForce is "GTD".',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'positionFill',
    'Position Fill',
    'Specification of how Positions in the Account are modified when the Order is filled.',
    'primitive',
    'order.OrderPositionFill',
  ),
  new Property(
    'triggerCondition',
    'Trigger Condition',
    'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.',
    'primitive',
    'order.OrderTriggerCondition',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Market-if-touched Order was initiated',
    'primitive',
    'transaction.MarketIfTouchedOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Order Client Extensions',
    'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'takeProfitOnFill',
    'Take Profit On Fill',
    'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TakeProfitDetails',
  ),
  new Property(
    'stopLossOnFill',
    'Stop Loss On Fill',
    'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.StopLossDetails',
  ),
  new Property(
    'trailingStopLossOnFill',
    'Trailing Stop Loss On Fill',
    'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).',
    'object',
    'transaction.TrailingStopLossDetails',
  ),
  new Property(
    'tradeClientExtensions',
    'Trade Client Extensions',
    'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'intendedReplacesOrderID',
    'Order ID to Replace',
    'The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'rejectReason',
    'Reject Reason',
    'The reason that the Reject Transaction was created',
    'primitive',
    'transaction.TransactionRejectReason',
  ),
]

export class MarketIfTouchedOrderRejectTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "MARKET_IF_TOUCHED_ORDER_REJECT" in a MarketIfTouchedOrderRejectTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The MarketIfTouched Order's Instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * The quantity requested to be filled by the MarketIfTouched Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.
   */
  public units: primitives.DecimalNumber

  /**
   * The price threshold specified for the MarketIfTouched Order. The MarketIfTouched Order will only be filled by a market price that crosses this price from the direction of the market price at the time when the Order was created (the initialMarketPrice). Depending on the value of the Order's price and initialMarketPrice, the MarketIfTouchedOrder will behave like a Limit or a Stop Order.
   */
  public price: primitives.PriceValue

  /**
   * The worst market price that may be used to fill this MarketIfTouched Order.
   */
  public priceBound: primitives.PriceValue

  /**
   * The time-in-force requested for the MarketIfTouched Order. Restricted to "GTC", "GFD" and "GTD" for MarketIfTouched Orders.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date/time when the MarketIfTouched Order will be cancelled if its timeInForce is "GTD".
   */
  public gtdTime: primitives.DateTime

  /**
   * Specification of how Positions in the Account are modified when the Order is filled.
   */
  public positionFill: primitives.OrderPositionFill

  /**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid. 
 */
  public triggerCondition: primitives.OrderTriggerCondition

  /**
   * The reason that the Market-if-touched Order was initiated
   */
  public reason: primitives.MarketIfTouchedOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
   */
  public clientExtensions: ClientExtensions

  /**
   * The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public takeProfitOnFill: TakeProfitDetails

  /**
   * The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).
   */
  public stopLossOnFill: StopLossDetails

  /**
   * The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).
   */
  public trailingStopLossOnFill: TrailingStopLossDetails

  /**
   * Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.
   */
  public tradeClientExtensions: ClientExtensions

  /**
   * The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).
   */
  public intendedReplacesOrderID: primitives.OrderID

  /**
   * The reason that the Reject Transaction was created
   */
  public rejectReason: primitives.TransactionRejectReason

  constructor(data) {
    super()

    this._summaryFormat = 'Reject MIT Order ({reason}): {units} of {instrument} @ {price}'

    this._nameFormat = 'Transaction {id}'

    this._properties = MarketIfTouchedOrderRejectTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'MARKET_IF_TOUCHED_ORDER_REJECT'
    }

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['units'] !== undefined) {
      this.units = data['units']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['priceBound'] !== undefined) {
      this.priceBound = data['priceBound']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['positionFill'] !== undefined) {
      this.positionFill = data['positionFill']
    } else {
      this.positionFill = 'DEFAULT'
    }

    if (data['triggerCondition'] !== undefined) {
      this.triggerCondition = data['triggerCondition']
    } else {
      this.triggerCondition = 'DEFAULT'
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['takeProfitOnFill'] !== undefined) {
      this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill'])
    }

    if (data['stopLossOnFill'] !== undefined) {
      this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill'])
    }

    if (data['trailingStopLossOnFill'] !== undefined) {
      this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill'])
    }

    if (data['tradeClientExtensions'] !== undefined) {
      this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions'])
    }

    if (data['intendedReplacesOrderID'] !== undefined) {
      this.intendedReplacesOrderID = data['intendedReplacesOrderID']
    }

    if (data['rejectReason'] !== undefined) {
      this.rejectReason = data['rejectReason']
    }
  }
}

export const TakeProfitOrderTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "TAKE_PROFIT_ORDER" in a TakeProfitOrderTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'tradeID',
    'Trade ID',
    'The ID of the Trade to close when the price threshold is breached.',
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'clientTradeID',
    'Client Trade ID',
    'The client ID of the Trade to be closed when the price threshold is breached.',
    'primitive',
    'transaction.ClientID',
  ),
  new Property(
    'price',
    'Price',
    'The price threshold specified for the TakeProfit Order. The associated Trade will be closed by a market price that is equal to or better than this threshold.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time-in-force requested for the TakeProfit Order. Restricted to "GTC", "GFD" and "GTD" for TakeProfit Orders.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date/time when the TakeProfit Order will be cancelled if its timeInForce is "GTD".',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'triggerCondition',
    'Trigger Condition',
    'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.',
    'primitive',
    'order.OrderTriggerCondition',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Take Profit Order was initiated',
    'primitive',
    'transaction.TakeProfitOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Order Client Extensions',
    'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'orderFillTransactionID',
    'Order Fill Transaction ID',
    'The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'replacesOrderID',
    'Replaces Order ID',
    'The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'cancellingTransactionID',
    'Replaces Order Cancel Transaction ID',
    'The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).',
    'primitive',
    'transaction.TransactionID',
  ),
]

export class TakeProfitOrderTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "TAKE_PROFIT_ORDER" in a TakeProfitOrderTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */
  public tradeID: primitives.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is breached.
   */
  public clientTradeID: primitives.ClientID

  /**
   * The price threshold specified for the TakeProfit Order. The associated Trade will be closed by a market price that is equal to or better than this threshold.
   */
  public price: primitives.PriceValue

  /**
   * The time-in-force requested for the TakeProfit Order. Restricted to "GTC", "GFD" and "GTD" for TakeProfit Orders.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date/time when the TakeProfit Order will be cancelled if its timeInForce is "GTD".
   */
  public gtdTime: primitives.DateTime

  /**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid. 
 */
  public triggerCondition: primitives.OrderTriggerCondition

  /**
   * The reason that the Take Profit Order was initiated
   */
  public reason: primitives.TakeProfitOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
   */
  public clientExtensions: ClientExtensions

  /**
   * The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).
   */
  public orderFillTransactionID: primitives.TransactionID

  /**
   * The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).
   */
  public replacesOrderID: primitives.OrderID

  /**
   * The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).
   */
  public cancellingTransactionID: primitives.TransactionID

  constructor(data) {
    super()

    this._summaryFormat =
      'Create Take Profit Order {id} ({reason}): Close Trade {tradeID} @ {price}'

    this._nameFormat = 'Transaction {id}'

    this._properties = TakeProfitOrderTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'TAKE_PROFIT_ORDER'
    }

    if (data['tradeID'] !== undefined) {
      this.tradeID = data['tradeID']
    }

    if (data['clientTradeID'] !== undefined) {
      this.clientTradeID = data['clientTradeID']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['triggerCondition'] !== undefined) {
      this.triggerCondition = data['triggerCondition']
    } else {
      this.triggerCondition = 'DEFAULT'
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['orderFillTransactionID'] !== undefined) {
      this.orderFillTransactionID = data['orderFillTransactionID']
    }

    if (data['replacesOrderID'] !== undefined) {
      this.replacesOrderID = data['replacesOrderID']
    }

    if (data['cancellingTransactionID'] !== undefined) {
      this.cancellingTransactionID = data['cancellingTransactionID']
    }
  }
}

export const TakeProfitOrderRejectTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "TAKE_PROFIT_ORDER_REJECT" in a TakeProfitOrderRejectTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'tradeID',
    'Trade ID',
    'The ID of the Trade to close when the price threshold is breached.',
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'clientTradeID',
    'Client Trade ID',
    'The client ID of the Trade to be closed when the price threshold is breached.',
    'primitive',
    'transaction.ClientID',
  ),
  new Property(
    'price',
    'Price',
    'The price threshold specified for the TakeProfit Order. The associated Trade will be closed by a market price that is equal to or better than this threshold.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time-in-force requested for the TakeProfit Order. Restricted to "GTC", "GFD" and "GTD" for TakeProfit Orders.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date/time when the TakeProfit Order will be cancelled if its timeInForce is "GTD".',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'triggerCondition',
    'Trigger Condition',
    'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.',
    'primitive',
    'order.OrderTriggerCondition',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Take Profit Order was initiated',
    'primitive',
    'transaction.TakeProfitOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Order Client Extensions',
    'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'orderFillTransactionID',
    'Order Fill Transaction ID',
    'The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'intendedReplacesOrderID',
    'Order ID to Replace',
    'The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'rejectReason',
    'Reject Reason',
    'The reason that the Reject Transaction was created',
    'primitive',
    'transaction.TransactionRejectReason',
  ),
]

export class TakeProfitOrderRejectTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "TAKE_PROFIT_ORDER_REJECT" in a TakeProfitOrderRejectTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */
  public tradeID: primitives.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is breached.
   */
  public clientTradeID: primitives.ClientID

  /**
   * The price threshold specified for the TakeProfit Order. The associated Trade will be closed by a market price that is equal to or better than this threshold.
   */
  public price: primitives.PriceValue

  /**
   * The time-in-force requested for the TakeProfit Order. Restricted to "GTC", "GFD" and "GTD" for TakeProfit Orders.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date/time when the TakeProfit Order will be cancelled if its timeInForce is "GTD".
   */
  public gtdTime: primitives.DateTime

  /**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid. 
 */
  public triggerCondition: primitives.OrderTriggerCondition

  /**
   * The reason that the Take Profit Order was initiated
   */
  public reason: primitives.TakeProfitOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
   */
  public clientExtensions: ClientExtensions

  /**
   * The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).
   */
  public orderFillTransactionID: primitives.TransactionID

  /**
   * The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).
   */
  public intendedReplacesOrderID: primitives.OrderID

  /**
   * The reason that the Reject Transaction was created
   */
  public rejectReason: primitives.TransactionRejectReason

  constructor(data) {
    super()

    this._summaryFormat = 'Reject Take Profit Order ({reason}): Close Trade {tradeID} @ {price}'

    this._nameFormat = 'Transaction {id}'

    this._properties = TakeProfitOrderRejectTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'TAKE_PROFIT_ORDER_REJECT'
    }

    if (data['tradeID'] !== undefined) {
      this.tradeID = data['tradeID']
    }

    if (data['clientTradeID'] !== undefined) {
      this.clientTradeID = data['clientTradeID']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['triggerCondition'] !== undefined) {
      this.triggerCondition = data['triggerCondition']
    } else {
      this.triggerCondition = 'DEFAULT'
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['orderFillTransactionID'] !== undefined) {
      this.orderFillTransactionID = data['orderFillTransactionID']
    }

    if (data['intendedReplacesOrderID'] !== undefined) {
      this.intendedReplacesOrderID = data['intendedReplacesOrderID']
    }

    if (data['rejectReason'] !== undefined) {
      this.rejectReason = data['rejectReason']
    }
  }
}

export const StopLossOrderTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "STOP_LOSS_ORDER" in a StopLossOrderTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'tradeID',
    'Trade ID',
    'The ID of the Trade to close when the price threshold is breached.',
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'clientTradeID',
    'Client Trade ID',
    'The client ID of the Trade to be closed when the price threshold is breached.',
    'primitive',
    'transaction.ClientID',
  ),
  new Property(
    'price',
    'Price',
    'The price threshold specified for the Stop Loss Order. If the guaranteed flag is false, the associated Trade will be closed by a market price that is equal to or worse than this threshold. If the flag is true the associated Trade will be closed at this price.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'distance',
    'Price Distance',
    "Specifies the distance (in price units) from the Account's current price to use as the Stop Loss Order price. If the Trade is short the Instrument's bid price is used, and for long Trades the ask is used.",
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time-in-force requested for the StopLoss Order. Restricted to "GTC", "GFD" and "GTD" for StopLoss Orders.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'triggerCondition',
    'Trigger Condition',
    'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.',
    'primitive',
    'order.OrderTriggerCondition',
  ),
  new Property(
    'guaranteed',
    'Guaranteed',
    'Flag indicating that the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.',
    'primitive',
    'boolean',
  ),
  new Property(
    'guaranteedExecutionPremium',
    'Guaranteed Execution Premium',
    'The fee that will be charged if the Stop Loss Order is guaranteed and the Order is filled at the guaranteed price. The value is determined at Order creation time. It is in price units and is charged for each unit of the Trade.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Stop Loss Order was initiated',
    'primitive',
    'transaction.StopLossOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Order Client Extensions',
    'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'orderFillTransactionID',
    'Order Fill Transaction ID',
    'The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'replacesOrderID',
    'Replaces Order ID',
    'The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'cancellingTransactionID',
    'Replaces Order Cancel Transaction ID',
    'The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).',
    'primitive',
    'transaction.TransactionID',
  ),
]

export class StopLossOrderTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "STOP_LOSS_ORDER" in a StopLossOrderTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */
  public tradeID: primitives.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is breached.
   */
  public clientTradeID: primitives.ClientID

  /**
   * The price threshold specified for the Stop Loss Order. If the guaranteed flag is false, the associated Trade will be closed by a market price that is equal to or worse than this threshold. If the flag is true the associated Trade will be closed at this price.
   */
  public price: primitives.PriceValue

  /**
   * Specifies the distance (in price units) from the Account's current price to use as the Stop Loss Order price. If the Trade is short the Instrument's bid price is used, and for long Trades the ask is used.
   */
  public distance: primitives.DecimalNumber

  /**
   * The time-in-force requested for the StopLoss Order. Restricted to "GTC", "GFD" and "GTD" for StopLoss Orders.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".
   */
  public gtdTime: primitives.DateTime

  /**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid. 
 */
  public triggerCondition: primitives.OrderTriggerCondition

  /**
   * Flag indicating that the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.
   */
  public guaranteed: boolean

  /**
   * The fee that will be charged if the Stop Loss Order is guaranteed and the Order is filled at the guaranteed price. The value is determined at Order creation time. It is in price units and is charged for each unit of the Trade.
   */
  public guaranteedExecutionPremium: primitives.DecimalNumber

  /**
   * The reason that the Stop Loss Order was initiated
   */
  public reason: primitives.StopLossOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
   */
  public clientExtensions: ClientExtensions

  /**
   * The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).
   */
  public orderFillTransactionID: primitives.TransactionID

  /**
   * The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).
   */
  public replacesOrderID: primitives.OrderID

  /**
   * The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).
   */
  public cancellingTransactionID: primitives.TransactionID

  constructor(data) {
    super()

    this._summaryFormat = 'Create Stop Loss Order {id} ({reason}): Close Trade {tradeID} @ {price}'

    this._nameFormat = 'Transaction {id}'

    this._properties = StopLossOrderTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'STOP_LOSS_ORDER'
    }

    if (data['tradeID'] !== undefined) {
      this.tradeID = data['tradeID']
    }

    if (data['clientTradeID'] !== undefined) {
      this.clientTradeID = data['clientTradeID']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['distance'] !== undefined) {
      this.distance = data['distance']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['triggerCondition'] !== undefined) {
      this.triggerCondition = data['triggerCondition']
    } else {
      this.triggerCondition = 'DEFAULT'
    }

    if (data['guaranteed'] !== undefined) {
      this.guaranteed = data['guaranteed']
    }

    if (data['guaranteedExecutionPremium'] !== undefined) {
      this.guaranteedExecutionPremium = data['guaranteedExecutionPremium']
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['orderFillTransactionID'] !== undefined) {
      this.orderFillTransactionID = data['orderFillTransactionID']
    }

    if (data['replacesOrderID'] !== undefined) {
      this.replacesOrderID = data['replacesOrderID']
    }

    if (data['cancellingTransactionID'] !== undefined) {
      this.cancellingTransactionID = data['cancellingTransactionID']
    }
  }
}

export const StopLossOrderRejectTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "STOP_LOSS_ORDER_REJECT" in a StopLossOrderRejectTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'tradeID',
    'Trade ID',
    'The ID of the Trade to close when the price threshold is breached.',
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'clientTradeID',
    'Client Trade ID',
    'The client ID of the Trade to be closed when the price threshold is breached.',
    'primitive',
    'transaction.ClientID',
  ),
  new Property(
    'price',
    'Price',
    'The price threshold specified for the Stop Loss Order. If the guaranteed flag is false, the associated Trade will be closed by a market price that is equal to or worse than this threshold. If the flag is true the associated Trade will be closed at this price.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'distance',
    'Price Distance',
    "Specifies the distance (in price units) from the Account's current price to use as the Stop Loss Order price. If the Trade is short the Instrument's bid price is used, and for long Trades the ask is used.",
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time-in-force requested for the StopLoss Order. Restricted to "GTC", "GFD" and "GTD" for StopLoss Orders.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'triggerCondition',
    'Trigger Condition',
    'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.',
    'primitive',
    'order.OrderTriggerCondition',
  ),
  new Property(
    'guaranteed',
    'Guaranteed',
    'Flag indicating that the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.',
    'primitive',
    'boolean',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Stop Loss Order was initiated',
    'primitive',
    'transaction.StopLossOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Order Client Extensions',
    'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'orderFillTransactionID',
    'Order Fill Transaction ID',
    'The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'intendedReplacesOrderID',
    'Order ID to Replace',
    'The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'rejectReason',
    'Reject Reason',
    'The reason that the Reject Transaction was created',
    'primitive',
    'transaction.TransactionRejectReason',
  ),
]

export class StopLossOrderRejectTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "STOP_LOSS_ORDER_REJECT" in a StopLossOrderRejectTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */
  public tradeID: primitives.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is breached.
   */
  public clientTradeID: primitives.ClientID

  /**
   * The price threshold specified for the Stop Loss Order. If the guaranteed flag is false, the associated Trade will be closed by a market price that is equal to or worse than this threshold. If the flag is true the associated Trade will be closed at this price.
   */
  public price: primitives.PriceValue

  /**
   * Specifies the distance (in price units) from the Account's current price to use as the Stop Loss Order price. If the Trade is short the Instrument's bid price is used, and for long Trades the ask is used.
   */
  public distance: primitives.DecimalNumber

  /**
   * The time-in-force requested for the StopLoss Order. Restricted to "GTC", "GFD" and "GTD" for StopLoss Orders.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".
   */
  public gtdTime: primitives.DateTime

  /**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid. 
 */
  public triggerCondition: primitives.OrderTriggerCondition

  /**
   * Flag indicating that the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.
   */
  public guaranteed: boolean

  /**
   * The reason that the Stop Loss Order was initiated
   */
  public reason: primitives.StopLossOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
   */
  public clientExtensions: ClientExtensions

  /**
   * The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).
   */
  public orderFillTransactionID: primitives.TransactionID

  /**
   * The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).
   */
  public intendedReplacesOrderID: primitives.OrderID

  /**
   * The reason that the Reject Transaction was created
   */
  public rejectReason: primitives.TransactionRejectReason

  constructor(data) {
    super()

    this._summaryFormat = 'Reject Stop Loss Order ({reason}): Close Trade {tradeID} @ {price}'

    this._nameFormat = 'Transaction {id}'

    this._properties = StopLossOrderRejectTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'STOP_LOSS_ORDER_REJECT'
    }

    if (data['tradeID'] !== undefined) {
      this.tradeID = data['tradeID']
    }

    if (data['clientTradeID'] !== undefined) {
      this.clientTradeID = data['clientTradeID']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['distance'] !== undefined) {
      this.distance = data['distance']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['triggerCondition'] !== undefined) {
      this.triggerCondition = data['triggerCondition']
    } else {
      this.triggerCondition = 'DEFAULT'
    }

    if (data['guaranteed'] !== undefined) {
      this.guaranteed = data['guaranteed']
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['orderFillTransactionID'] !== undefined) {
      this.orderFillTransactionID = data['orderFillTransactionID']
    }

    if (data['intendedReplacesOrderID'] !== undefined) {
      this.intendedReplacesOrderID = data['intendedReplacesOrderID']
    }

    if (data['rejectReason'] !== undefined) {
      this.rejectReason = data['rejectReason']
    }
  }
}

export const TrailingStopLossOrderTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "TRAILING_STOP_LOSS_ORDER" in a TrailingStopLossOrderTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'tradeID',
    'Trade ID',
    'The ID of the Trade to close when the price threshold is breached.',
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'clientTradeID',
    'Client Trade ID',
    'The client ID of the Trade to be closed when the price threshold is breached.',
    'primitive',
    'transaction.ClientID',
  ),
  new Property(
    'distance',
    'Price Distance',
    'The price distance (in price units) specified for the TrailingStopLoss Order.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time-in-force requested for the TrailingStopLoss Order. Restricted to "GTC", "GFD" and "GTD" for TrailingStopLoss Orders.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'triggerCondition',
    'Trigger Condition',
    'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.',
    'primitive',
    'order.OrderTriggerCondition',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Trailing Stop Loss Order was initiated',
    'primitive',
    'transaction.TrailingStopLossOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Order Client Extensions',
    'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'orderFillTransactionID',
    'Order Fill Transaction ID',
    'The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'replacesOrderID',
    'Replaces Order ID',
    'The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'cancellingTransactionID',
    'Replaces Order Cancel Transaction ID',
    'The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).',
    'primitive',
    'transaction.TransactionID',
  ),
]

export class TrailingStopLossOrderTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "TRAILING_STOP_LOSS_ORDER" in a TrailingStopLossOrderTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */
  public tradeID: primitives.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is breached.
   */
  public clientTradeID: primitives.ClientID

  /**
   * The price distance (in price units) specified for the TrailingStopLoss Order.
   */
  public distance: primitives.DecimalNumber

  /**
   * The time-in-force requested for the TrailingStopLoss Order. Restricted to "GTC", "GFD" and "GTD" for TrailingStopLoss Orders.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".
   */
  public gtdTime: primitives.DateTime

  /**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid. 
 */
  public triggerCondition: primitives.OrderTriggerCondition

  /**
   * The reason that the Trailing Stop Loss Order was initiated
   */
  public reason: primitives.TrailingStopLossOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
   */
  public clientExtensions: ClientExtensions

  /**
   * The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).
   */
  public orderFillTransactionID: primitives.TransactionID

  /**
   * The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).
   */
  public replacesOrderID: primitives.OrderID

  /**
   * The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).
   */
  public cancellingTransactionID: primitives.TransactionID

  constructor(data) {
    super()

    this._summaryFormat = 'Create Trailing Stop Loss Order {id} ({reason}): Close Trade {tradeID}'

    this._nameFormat = 'Transaction {id}'

    this._properties = TrailingStopLossOrderTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'TRAILING_STOP_LOSS_ORDER'
    }

    if (data['tradeID'] !== undefined) {
      this.tradeID = data['tradeID']
    }

    if (data['clientTradeID'] !== undefined) {
      this.clientTradeID = data['clientTradeID']
    }

    if (data['distance'] !== undefined) {
      this.distance = data['distance']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['triggerCondition'] !== undefined) {
      this.triggerCondition = data['triggerCondition']
    } else {
      this.triggerCondition = 'DEFAULT'
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['orderFillTransactionID'] !== undefined) {
      this.orderFillTransactionID = data['orderFillTransactionID']
    }

    if (data['replacesOrderID'] !== undefined) {
      this.replacesOrderID = data['replacesOrderID']
    }

    if (data['cancellingTransactionID'] !== undefined) {
      this.cancellingTransactionID = data['cancellingTransactionID']
    }
  }
}

export const TrailingStopLossOrderRejectTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "TRAILING_STOP_LOSS_ORDER_REJECT" in a TrailingStopLossOrderRejectTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'tradeID',
    'Trade ID',
    'The ID of the Trade to close when the price threshold is breached.',
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'clientTradeID',
    'Client Trade ID',
    'The client ID of the Trade to be closed when the price threshold is breached.',
    'primitive',
    'transaction.ClientID',
  ),
  new Property(
    'distance',
    'Price Distance',
    'The price distance (in price units) specified for the TrailingStopLoss Order.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time-in-force requested for the TrailingStopLoss Order. Restricted to "GTC", "GFD" and "GTD" for TrailingStopLoss Orders.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'triggerCondition',
    'Trigger Condition',
    'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.',
    'primitive',
    'order.OrderTriggerCondition',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason that the Trailing Stop Loss Order was initiated',
    'primitive',
    'transaction.TrailingStopLossOrderReason',
  ),
  new Property(
    'clientExtensions',
    'Order Client Extensions',
    'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'orderFillTransactionID',
    'Order Fill Transaction ID',
    'The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'intendedReplacesOrderID',
    'Order ID to Replace',
    'The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'rejectReason',
    'Reject Reason',
    'The reason that the Reject Transaction was created',
    'primitive',
    'transaction.TransactionRejectReason',
  ),
]

export class TrailingStopLossOrderRejectTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "TRAILING_STOP_LOSS_ORDER_REJECT" in a TrailingStopLossOrderRejectTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The ID of the Trade to close when the price threshold is breached.
   */
  public tradeID: primitives.TradeID

  /**
   * The client ID of the Trade to be closed when the price threshold is breached.
   */
  public clientTradeID: primitives.ClientID

  /**
   * The price distance (in price units) specified for the TrailingStopLoss Order.
   */
  public distance: primitives.DecimalNumber

  /**
   * The time-in-force requested for the TrailingStopLoss Order. Restricted to "GTC", "GFD" and "GTD" for TrailingStopLoss Orders.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".
   */
  public gtdTime: primitives.DateTime

  /**
 * Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.
This feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA's proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order's trigger condition is set to the default value when indicating the distance from an Order's trigger price, and will always provide the default trigger condition when creating or modifying an Order.
A special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid. 
 */
  public triggerCondition: primitives.OrderTriggerCondition

  /**
   * The reason that the Trailing Stop Loss Order was initiated
   */
  public reason: primitives.TrailingStopLossOrderReason

  /**
   * Client Extensions to add to the Order (only provided if the Order is being created with client extensions).
   */
  public clientExtensions: ClientExtensions

  /**
   * The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).
   */
  public orderFillTransactionID: primitives.TransactionID

  /**
   * The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).
   */
  public intendedReplacesOrderID: primitives.OrderID

  /**
   * The reason that the Reject Transaction was created
   */
  public rejectReason: primitives.TransactionRejectReason

  constructor(data) {
    super()

    this._summaryFormat = 'Reject Trailing Stop Loss Order ({reason}): Close Trade {tradeID}'

    this._nameFormat = 'Transaction {id}'

    this._properties = TrailingStopLossOrderRejectTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'TRAILING_STOP_LOSS_ORDER_REJECT'
    }

    if (data['tradeID'] !== undefined) {
      this.tradeID = data['tradeID']
    }

    if (data['clientTradeID'] !== undefined) {
      this.clientTradeID = data['clientTradeID']
    }

    if (data['distance'] !== undefined) {
      this.distance = data['distance']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['triggerCondition'] !== undefined) {
      this.triggerCondition = data['triggerCondition']
    } else {
      this.triggerCondition = 'DEFAULT'
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['orderFillTransactionID'] !== undefined) {
      this.orderFillTransactionID = data['orderFillTransactionID']
    }

    if (data['intendedReplacesOrderID'] !== undefined) {
      this.intendedReplacesOrderID = data['intendedReplacesOrderID']
    }

    if (data['rejectReason'] !== undefined) {
      this.rejectReason = data['rejectReason']
    }
  }
}

export const OrderFillTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "ORDER_FILL" for an OrderFillTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'orderID',
    'Filled Order ID',
    'The ID of the Order filled.',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'clientOrderID',
    'Filled Client Order ID',
    'The client Order ID of the Order filled (only provided if the client has assigned one).',
    'primitive',
    'transaction.ClientID',
  ),
  new Property(
    'instrument',
    'Fill Instrument',
    "The name of the filled Order's instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'units',
    'Fill Units',
    'The number of units filled by the OrderFill.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'gainQuoteHomeConversionFactor',
    'Gain Quote Home Conversion Factor',
    "This is the conversion factor in effect for the Account at the time of the OrderFill for converting any gains realized in Instrument quote units into units of the Account's home currency.",
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'lossQuoteHomeConversionFactor',
    'Loss Quote Home Conversion Factor',
    "This is the conversion factor in effect for the Account at the time of the OrderFill for converting any losses realized in Instrument quote units into units of the Account's home currency.",
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'price',
    'Fill Price',
    'This field is now deprecated and should no longer be used. The individual tradesClosed, tradeReduced and tradeOpened fields contain the exact/official price each unit was filled at.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'fullVWAP',
    'Full VWAP',
    "The price that all of the units of the OrderFill should have been filled at, in the absence of guaranteed price execution. This factors in the Account's current ClientPrice, used liquidity and the units of the OrderFill only. If no Trades were closed with their price clamped for guaranteed stop loss enforcement, then this value will match the price fields of each Trade opened, closed, and reduced, and they will all be the exact same.",
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'fullPrice',
    'Price',
    'The price in effect for the account at the time of the Order fill.',
    'object',
    'pricing.ClientPrice',
  ),
  new Property(
    'reason',
    'Fill Reason',
    'The reason that an Order was filled',
    'primitive',
    'transaction.OrderFillReason',
  ),
  new Property(
    'pl',
    'Profit/Loss',
    'The profit or loss incurred when the Order was filled.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'financing',
    'Financing',
    'The financing paid or collected when the Order was filled.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'commission',
    'Commission',
    "The commission charged in the Account's home currency as a result of filling the Order. The commission is always represented as a positive quantity of the Account's home currency, however it reduces the balance in the Account.",
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'guaranteedExecutionFee',
    'Guranteed Execution Fee',
    'The total guaranteed execution fees charged for all Trades opened, closed or reduced with guaranteed Stop Loss Orders.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'accountBalance',
    'Account Balance',
    "The Account's balance after the Order was filled.",
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'tradeOpened',
    'Trade Opened',
    'The Trade that was opened when the Order was filled (only provided if filling the Order resulted in a new Trade).',
    'object',
    'transaction.TradeOpen',
  ),
  new Property(
    'tradesClosed',
    'Trades Closed',
    'The Trades that were closed when the Order was filled (only provided if filling the Order resulted in a closing open Trades).',
    'array_object',
    'TradeReduce',
  ),
  new Property(
    'tradeReduced',
    'Trade Reduced',
    'The Trade that was reduced when the Order was filled (only provided if filling the Order resulted in reducing an open Trade).',
    'object',
    'transaction.TradeReduce',
  ),
  new Property(
    'halfSpreadCost',
    'Half Spread Cost',
    'The half spread cost for the OrderFill, which is the sum of the halfSpreadCost values in the tradeOpened, tradesClosed and tradeReduced fields. This can be a positive or negative value and is represented in the home currency of the Account.',
    'primitive',
    'primitives.AccountUnits',
  ),
]

export class OrderFillTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "ORDER_FILL" for an OrderFillTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The ID of the Order filled.
   */
  public orderID: primitives.OrderID

  /**
   * The client Order ID of the Order filled (only provided if the client has assigned one).
   */
  public clientOrderID: primitives.ClientID

  /**
   * The name of the filled Order's instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * The number of units filled by the OrderFill.
   */
  public units: primitives.DecimalNumber

  /**
   * This is the conversion factor in effect for the Account at the time of the OrderFill for converting any gains realized in Instrument quote units into units of the Account's home currency.
   */
  public gainQuoteHomeConversionFactor: primitives.DecimalNumber

  /**
   * This is the conversion factor in effect for the Account at the time of the OrderFill for converting any losses realized in Instrument quote units into units of the Account's home currency.
   */
  public lossQuoteHomeConversionFactor: primitives.DecimalNumber

  /**
   * This field is now deprecated and should no longer be used. The individual tradesClosed, tradeReduced and tradeOpened fields contain the exact/official price each unit was filled at.
   */
  public price: primitives.PriceValue

  /**
   * The price that all of the units of the OrderFill should have been filled at, in the absence of guaranteed price execution. This factors in the Account's current ClientPrice, used liquidity and the units of the OrderFill only. If no Trades were closed with their price clamped for guaranteed stop loss enforcement, then this value will match the price fields of each Trade opened, closed, and reduced, and they will all be the exact same.
   */
  public fullVWAP: primitives.PriceValue

  /**
   * The price in effect for the account at the time of the Order fill.
   */
  public fullPrice: pricing.ClientPrice

  /**
   * The reason that an Order was filled
   */
  public reason: primitives.OrderFillReason

  /**
   * The profit or loss incurred when the Order was filled.
   */
  public pl: primitives.AccountUnits

  /**
   * The financing paid or collected when the Order was filled.
   */
  public financing: primitives.AccountUnits

  /**
   * The commission charged in the Account's home currency as a result of filling the Order. The commission is always represented as a positive quantity of the Account's home currency, however it reduces the balance in the Account.
   */
  public commission: primitives.AccountUnits

  /**
   * The total guaranteed execution fees charged for all Trades opened, closed or reduced with guaranteed Stop Loss Orders.
   */
  public guaranteedExecutionFee: primitives.AccountUnits

  /**
   * The Account's balance after the Order was filled.
   */
  public accountBalance: primitives.AccountUnits

  /**
   * The Trade that was opened when the Order was filled (only provided if filling the Order resulted in a new Trade).
   */
  public tradeOpened: TradeOpen

  /**
   * The Trades that were closed when the Order was filled (only provided if filling the Order resulted in a closing open Trades).
   */
  public tradesClosed: TradeReduce[]

  /**
   * The Trade that was reduced when the Order was filled (only provided if filling the Order resulted in reducing an open Trade).
   */
  public tradeReduced: TradeReduce

  /**
   * The half spread cost for the OrderFill, which is the sum of the halfSpreadCost values in the tradeOpened, tradesClosed and tradeReduced fields. This can be a positive or negative value and is represented in the home currency of the Account.
   */
  public halfSpreadCost: primitives.AccountUnits

  constructor(data) {
    super()

    this._summaryFormat = 'Fill Order {orderID} ({reason}): {units} of {instrument} @ {price}'

    this._nameFormat = 'Transaction {id}'

    this._properties = OrderFillTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'ORDER_FILL'
    }

    if (data['orderID'] !== undefined) {
      this.orderID = data['orderID']
    }

    if (data['clientOrderID'] !== undefined) {
      this.clientOrderID = data['clientOrderID']
    }

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['units'] !== undefined) {
      this.units = data['units']
    }

    if (data['gainQuoteHomeConversionFactor'] !== undefined) {
      this.gainQuoteHomeConversionFactor = data['gainQuoteHomeConversionFactor']
    }

    if (data['lossQuoteHomeConversionFactor'] !== undefined) {
      this.lossQuoteHomeConversionFactor = data['lossQuoteHomeConversionFactor']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['fullVWAP'] !== undefined) {
      this.fullVWAP = data['fullVWAP']
    }

    if (data['fullPrice'] !== undefined) {
      this.fullPrice = new pricing.ClientPrice(data['fullPrice'])
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['pl'] !== undefined) {
      this.pl = data['pl']
    }

    if (data['financing'] !== undefined) {
      this.financing = data['financing']
    }

    if (data['commission'] !== undefined) {
      this.commission = data['commission']
    }

    if (data['guaranteedExecutionFee'] !== undefined) {
      this.guaranteedExecutionFee = data['guaranteedExecutionFee']
    }

    if (data['accountBalance'] !== undefined) {
      this.accountBalance = data['accountBalance']
    }

    if (data['tradeOpened'] !== undefined) {
      this.tradeOpened = new TradeOpen(data['tradeOpened'])
    }

    if (data['tradesClosed'] !== undefined) {
      this.tradesClosed = data['tradesClosed'].map((x) => new TradeReduce(x))
    }

    if (data['tradeReduced'] !== undefined) {
      this.tradeReduced = new TradeReduce(data['tradeReduced'])
    }

    if (data['halfSpreadCost'] !== undefined) {
      this.halfSpreadCost = data['halfSpreadCost']
    }
  }
}

export const OrderCancelTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "ORDER_CANCEL" for an OrderCancelTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'orderID',
    'Cancelled Order ID',
    'The ID of the Order cancelled',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'clientOrderID',
    'Cancelled Client Order ID',
    'The client ID of the Order cancelled (only provided if the Order has a client Order ID).',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'reason',
    'Cancel Reason',
    'The reason that the Order was cancelled.',
    'primitive',
    'transaction.OrderCancelReason',
  ),
  new Property(
    'replacedByOrderID',
    'Replaced By Order ID',
    'The ID of the Order that replaced this Order (only provided if this Order was cancelled for replacement).',
    'primitive',
    'order.OrderID',
  ),
]

export class OrderCancelTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "ORDER_CANCEL" for an OrderCancelTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The ID of the Order cancelled
   */
  public orderID: primitives.OrderID

  /**
   * The client ID of the Order cancelled (only provided if the Order has a client Order ID).
   */
  public clientOrderID: primitives.OrderID

  /**
   * The reason that the Order was cancelled.
   */
  public reason: primitives.OrderCancelReason

  /**
   * The ID of the Order that replaced this Order (only provided if this Order was cancelled for replacement).
   */
  public replacedByOrderID: primitives.OrderID

  constructor(data) {
    super()

    this._summaryFormat = 'Cancel Order {orderID}'

    this._nameFormat = 'Transaction {id}'

    this._properties = OrderCancelTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'ORDER_CANCEL'
    }

    if (data['orderID'] !== undefined) {
      this.orderID = data['orderID']
    }

    if (data['clientOrderID'] !== undefined) {
      this.clientOrderID = data['clientOrderID']
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['replacedByOrderID'] !== undefined) {
      this.replacedByOrderID = data['replacedByOrderID']
    }
  }
}

export const OrderCancelRejectTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "ORDER_CANCEL_REJECT" for an OrderCancelRejectTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'orderID',
    'Order ID',
    'The ID of the Order intended to be cancelled',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'clientOrderID',
    'Client Order ID',
    'The client ID of the Order intended to be cancelled (only provided if the Order has a client Order ID).',
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'rejectReason',
    'Reject Reason',
    'The reason that the Reject Transaction was created',
    'primitive',
    'transaction.TransactionRejectReason',
  ),
]

export class OrderCancelRejectTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "ORDER_CANCEL_REJECT" for an OrderCancelRejectTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The ID of the Order intended to be cancelled
   */
  public orderID: primitives.OrderID

  /**
   * The client ID of the Order intended to be cancelled (only provided if the Order has a client Order ID).
   */
  public clientOrderID: primitives.OrderID

  /**
   * The reason that the Reject Transaction was created
   */
  public rejectReason: primitives.TransactionRejectReason

  constructor(data) {
    super()

    this._summaryFormat = 'Order Cancel Reject {orderID}'

    this._nameFormat = 'Transaction {id}'

    this._properties = OrderCancelRejectTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'ORDER_CANCEL_REJECT'
    }

    if (data['orderID'] !== undefined) {
      this.orderID = data['orderID']
    }

    if (data['clientOrderID'] !== undefined) {
      this.clientOrderID = data['clientOrderID']
    }

    if (data['rejectReason'] !== undefined) {
      this.rejectReason = data['rejectReason']
    }
  }
}

export const OrderClientExtensionsModifyTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "ORDER_CLIENT_EXTENSIONS_MODIFY" for a OrderClienteExtensionsModifyTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'orderID',
    'Order ID',
    "The ID of the Order who's client extensions are to be modified.",
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'clientOrderID',
    'Client Order ID',
    "The original Client ID of the Order who's client extensions are to be modified.",
    'primitive',
    'transaction.ClientID',
  ),
  new Property(
    'clientExtensionsModify',
    'Order Extensions',
    'The new Client Extensions for the Order.',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'tradeClientExtensionsModify',
    'Trade Extensions',
    "The new Client Extensions for the Order's Trade on fill.",
    'object',
    'transaction.ClientExtensions',
  ),
]

export class OrderClientExtensionsModifyTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "ORDER_CLIENT_EXTENSIONS_MODIFY" for a OrderClienteExtensionsModifyTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The ID of the Order who's client extensions are to be modified.
   */
  public orderID: primitives.OrderID

  /**
   * The original Client ID of the Order who's client extensions are to be modified.
   */
  public clientOrderID: primitives.ClientID

  /**
   * The new Client Extensions for the Order.
   */
  public clientExtensionsModify: ClientExtensions

  /**
   * The new Client Extensions for the Order's Trade on fill.
   */
  public tradeClientExtensionsModify: ClientExtensions

  constructor(data) {
    super()

    this._summaryFormat = 'Modify Order {orderID} Client Extensions'

    this._nameFormat = 'Transaction {id}'

    this._properties = OrderClientExtensionsModifyTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'ORDER_CLIENT_EXTENSIONS_MODIFY'
    }

    if (data['orderID'] !== undefined) {
      this.orderID = data['orderID']
    }

    if (data['clientOrderID'] !== undefined) {
      this.clientOrderID = data['clientOrderID']
    }

    if (data['clientExtensionsModify'] !== undefined) {
      this.clientExtensionsModify = new ClientExtensions(data['clientExtensionsModify'])
    }

    if (data['tradeClientExtensionsModify'] !== undefined) {
      this.tradeClientExtensionsModify = new ClientExtensions(data['tradeClientExtensionsModify'])
    }
  }
}

export const OrderClientExtensionsModifyRejectTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT" for a OrderClientExtensionsModifyRejectTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'orderID',
    'Order ID',
    "The ID of the Order who's client extensions are to be modified.",
    'primitive',
    'order.OrderID',
  ),
  new Property(
    'clientOrderID',
    'Client Order ID',
    "The original Client ID of the Order who's client extensions are to be modified.",
    'primitive',
    'transaction.ClientID',
  ),
  new Property(
    'clientExtensionsModify',
    'Order Extensions',
    'The new Client Extensions for the Order.',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'tradeClientExtensionsModify',
    'Trade Extensions',
    "The new Client Extensions for the Order's Trade on fill.",
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'rejectReason',
    'Reject Reason',
    'The reason that the Reject Transaction was created',
    'primitive',
    'transaction.TransactionRejectReason',
  ),
]

export class OrderClientExtensionsModifyRejectTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT" for a OrderClientExtensionsModifyRejectTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The ID of the Order who's client extensions are to be modified.
   */
  public orderID: primitives.OrderID

  /**
   * The original Client ID of the Order who's client extensions are to be modified.
   */
  public clientOrderID: primitives.ClientID

  /**
   * The new Client Extensions for the Order.
   */
  public clientExtensionsModify: ClientExtensions

  /**
   * The new Client Extensions for the Order's Trade on fill.
   */
  public tradeClientExtensionsModify: ClientExtensions

  /**
   * The reason that the Reject Transaction was created
   */
  public rejectReason: primitives.TransactionRejectReason

  constructor(data) {
    super()

    this._summaryFormat = 'Reject Modify Order {orderID} Client Extensions'

    this._nameFormat = 'Transaction {id}'

    this._properties = OrderClientExtensionsModifyRejectTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT'
    }

    if (data['orderID'] !== undefined) {
      this.orderID = data['orderID']
    }

    if (data['clientOrderID'] !== undefined) {
      this.clientOrderID = data['clientOrderID']
    }

    if (data['clientExtensionsModify'] !== undefined) {
      this.clientExtensionsModify = new ClientExtensions(data['clientExtensionsModify'])
    }

    if (data['tradeClientExtensionsModify'] !== undefined) {
      this.tradeClientExtensionsModify = new ClientExtensions(data['tradeClientExtensionsModify'])
    }

    if (data['rejectReason'] !== undefined) {
      this.rejectReason = data['rejectReason']
    }
  }
}

export const TradeClientExtensionsModifyTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "TRADE_CLIENT_EXTENSIONS_MODIFY" for a TradeClientExtensionsModifyTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'tradeID',
    'Trade ID',
    "The ID of the Trade who's client extensions are to be modified.",
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'clientTradeID',
    'Client Trade ID',
    "The original Client ID of the Trade who's client extensions are to be modified.",
    'primitive',
    'transaction.ClientID',
  ),
  new Property(
    'tradeClientExtensionsModify',
    'Extensions',
    'The new Client Extensions for the Trade.',
    'object',
    'transaction.ClientExtensions',
  ),
]

export class TradeClientExtensionsModifyTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "TRADE_CLIENT_EXTENSIONS_MODIFY" for a TradeClientExtensionsModifyTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The ID of the Trade who's client extensions are to be modified.
   */
  public tradeID: primitives.TradeID

  /**
   * The original Client ID of the Trade who's client extensions are to be modified.
   */
  public clientTradeID: primitives.ClientID

  /**
   * The new Client Extensions for the Trade.
   */
  public tradeClientExtensionsModify: ClientExtensions

  constructor(data) {
    super()

    this._summaryFormat = 'Modify Trade {tradeID} Client Extensions'

    this._nameFormat = 'Transaction {id}'

    this._properties = TradeClientExtensionsModifyTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'TRADE_CLIENT_EXTENSIONS_MODIFY'
    }

    if (data['tradeID'] !== undefined) {
      this.tradeID = data['tradeID']
    }

    if (data['clientTradeID'] !== undefined) {
      this.clientTradeID = data['clientTradeID']
    }

    if (data['tradeClientExtensionsModify'] !== undefined) {
      this.tradeClientExtensionsModify = new ClientExtensions(data['tradeClientExtensionsModify'])
    }
  }
}

export const TradeClientExtensionsModifyRejectTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT" for a TradeClientExtensionsModifyRejectTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'tradeID',
    'Trade ID',
    "The ID of the Trade who's client extensions are to be modified.",
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'clientTradeID',
    'Client Trade ID',
    "The original Client ID of the Trade who's client extensions are to be modified.",
    'primitive',
    'transaction.ClientID',
  ),
  new Property(
    'tradeClientExtensionsModify',
    'Extensions',
    'The new Client Extensions for the Trade.',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'rejectReason',
    'Reject Reason',
    'The reason that the Reject Transaction was created',
    'primitive',
    'transaction.TransactionRejectReason',
  ),
]

export class TradeClientExtensionsModifyRejectTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT" for a TradeClientExtensionsModifyRejectTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The ID of the Trade who's client extensions are to be modified.
   */
  public tradeID: primitives.TradeID

  /**
   * The original Client ID of the Trade who's client extensions are to be modified.
   */
  public clientTradeID: primitives.ClientID

  /**
   * The new Client Extensions for the Trade.
   */
  public tradeClientExtensionsModify: ClientExtensions

  /**
   * The reason that the Reject Transaction was created
   */
  public rejectReason: primitives.TransactionRejectReason

  constructor(data) {
    super()

    this._summaryFormat = 'Reject Modify Trade {tradeID} Client Extensions'

    this._nameFormat = 'Transaction {id}'

    this._properties = TradeClientExtensionsModifyRejectTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT'
    }

    if (data['tradeID'] !== undefined) {
      this.tradeID = data['tradeID']
    }

    if (data['clientTradeID'] !== undefined) {
      this.clientTradeID = data['clientTradeID']
    }

    if (data['tradeClientExtensionsModify'] !== undefined) {
      this.tradeClientExtensionsModify = new ClientExtensions(data['tradeClientExtensionsModify'])
    }

    if (data['rejectReason'] !== undefined) {
      this.rejectReason = data['rejectReason']
    }
  }
}

export const MarginCallEnterTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "MARGIN_CALL_ENTER" for an MarginCallEnterTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
]

export class MarginCallEnterTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "MARGIN_CALL_ENTER" for an MarginCallEnterTransaction.
   */
  public type: primitives.TransactionType

  constructor(data) {
    super()

    this._summaryFormat = 'Margin Call Enter'

    this._nameFormat = 'Transaction {id}'

    this._properties = MarginCallEnterTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'MARGIN_CALL_ENTER'
    }
  }
}

export const MarginCallExtendTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "MARGIN_CALL_EXTEND" for an MarginCallExtendTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'extensionNumber',
    'Extension Number',
    "The number of the extensions to the Account's current margin call that have been applied. This value will be set to 1 for the first MarginCallExtend Transaction",
    'primitive',
    'integer',
  ),
]

export class MarginCallExtendTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "MARGIN_CALL_EXTEND" for an MarginCallExtendTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The number of the extensions to the Account's current margin call that have been applied. This value will be set to 1 for the first MarginCallExtend Transaction
   */
  public extensionNumber: number

  constructor(data) {
    super()

    this._summaryFormat = 'Margin Call Enter'

    this._nameFormat = 'Transaction {id}'

    this._properties = MarginCallExtendTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'MARGIN_CALL_EXTEND'
    }

    if (data['extensionNumber'] !== undefined) {
      this.extensionNumber = data['extensionNumber']
    }
  }
}

export const MarginCallExitTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "MARGIN_CALL_EXIT" for an MarginCallExitTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
]

export class MarginCallExitTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "MARGIN_CALL_EXIT" for an MarginCallExitTransaction.
   */
  public type: primitives.TransactionType

  constructor(data) {
    super()

    this._summaryFormat = 'Margin Call Exit'

    this._nameFormat = 'Transaction {id}'

    this._properties = MarginCallExitTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'MARGIN_CALL_EXIT'
    }
  }
}

export const DelayedTradeClosureTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "DELAYED_TRADE_CLOSURE" for an DelayedTradeClosureTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'reason',
    'Reason',
    'The reason for the delayed trade closure',
    'primitive',
    'transaction.MarketOrderReason',
  ),
  new Property(
    'tradeIDs',
    "Trade ID's",
    "List of Trade ID's identifying the open trades that will be closed when their respective instruments become tradeable",
    'primitive',
    'trade.TradeID',
  ),
]

export class DelayedTradeClosureTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "DELAYED_TRADE_CLOSURE" for an DelayedTradeClosureTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The reason for the delayed trade closure
   */
  public reason: primitives.MarketOrderReason

  /**
   * List of Trade ID's identifying the open trades that will be closed when their respective instruments become tradeable
   */
  public tradeIDs: primitives.TradeID

  constructor(data) {
    super()

    this._summaryFormat = 'Delayed Trade Closure'

    this._nameFormat = 'Transaction {id}'

    this._properties = DelayedTradeClosureTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'DELAYED_TRADE_CLOSURE'
    }

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }

    if (data['tradeIDs'] !== undefined) {
      this.tradeIDs = data['tradeIDs']
    }
  }
}

export const DailyFinancingTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "DAILY_FINANCING" for a DailyFinancingTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
  new Property(
    'financing',
    'Financing',
    'The amount of financing paid/collected for the Account.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'accountBalance',
    'Account Balance',
    "The Account's balance after daily financing.",
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'accountFinancingMode',
    'Account Financing Mode',
    'The account financing mode at the time of the daily financing.',
    'primitive',
    'account.AccountFinancingMode',
  ),
  new Property(
    'positionFinancings',
    'Per-Position Financing',
    'The financing paid/collected for each Position in the Account.',
    'array_object',
    'PositionFinancing',
  ),
]

export class DailyFinancingTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "DAILY_FINANCING" for a DailyFinancingTransaction.
   */
  public type: primitives.TransactionType

  /**
   * The amount of financing paid/collected for the Account.
   */
  public financing: primitives.AccountUnits

  /**
   * The Account's balance after daily financing.
   */
  public accountBalance: primitives.AccountUnits

  /**
   * The account financing mode at the time of the daily financing.
   */
  public accountFinancingMode: primitives.AccountFinancingMode

  /**
   * The financing paid/collected for each Position in the Account.
   */
  public positionFinancings: PositionFinancing[]

  constructor(data) {
    super()

    this._summaryFormat = 'Daily Account Financing ({financing})'

    this._nameFormat = 'Transaction {id}'

    this._properties = DailyFinancingTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'DAILY_FINANCING'
    }

    if (data['financing'] !== undefined) {
      this.financing = data['financing']
    }

    if (data['accountBalance'] !== undefined) {
      this.accountBalance = data['accountBalance']
    }

    if (data['accountFinancingMode'] !== undefined) {
      this.accountFinancingMode = data['accountFinancingMode']
    }

    if (data['positionFinancings'] !== undefined) {
      this.positionFinancings = data['positionFinancings'].map((x) => new PositionFinancing(x))
    }
  }
}

export const ResetResettablePLTransaction_Properties = [
  new Property(
    'id',
    'Transaction ID',
    "The Transaction's Identifier.",
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'Time',
    'The date/time when the Transaction was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'userID',
    'User ID',
    'The ID of the user that initiated the creation of the Transaction.',
    'primitive',
    'integer',
  ),
  new Property(
    'accountID',
    'Account ID',
    'The ID of the Account the Transaction was created for.',
    'primitive',
    'account.AccountID',
  ),
  new Property(
    'batchID',
    'Transaction Batch ID',
    'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'requestID',
    'Request ID',
    'The Request ID of the request which generated the transaction.',
    'primitive',
    'transaction.RequestID',
  ),
  new Property(
    'type',
    'Type',
    'The Type of the Transaction. Always set to "RESET_RESETTABLE_PL" for a ResetResettablePLTransaction.',
    'primitive',
    'transaction.TransactionType',
  ),
]

export class ResetResettablePLTransaction extends Definition {
  /**
   * The Transaction's Identifier.
   */
  public id: primitives.TransactionID

  /**
   * The date/time when the Transaction was created.
   */
  public time: primitives.DateTime

  /**
   * The ID of the user that initiated the creation of the Transaction.
   */
  public userID: number

  /**
   * The ID of the Account the Transaction was created for.
   */
  public accountID: primitives.AccountID

  /**
   * The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.
   */
  public batchID: primitives.TransactionID

  /**
   * The Request ID of the request which generated the transaction.
   */
  public requestID: primitives.RequestID

  /**
   * The Type of the Transaction. Always set to "RESET_RESETTABLE_PL" for a ResetResettablePLTransaction.
   */
  public type: primitives.TransactionType

  constructor(data) {
    super()

    this._summaryFormat = 'PL Reset'

    this._nameFormat = 'Transaction {id}'

    this._properties = ResetResettablePLTransaction_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['accountID'] !== undefined) {
      this.accountID = data['accountID']
    }

    if (data['batchID'] !== undefined) {
      this.batchID = data['batchID']
    }

    if (data['requestID'] !== undefined) {
      this.requestID = data['requestID']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'RESET_RESETTABLE_PL'
    }
  }
}

export const ClientExtensions_Properties = [
  new Property(
    'id',
    'Client ID',
    'The Client ID of the Order/Trade',
    'primitive',
    'transaction.ClientID',
  ),
  new Property(
    'tag',
    'Tag',
    'A tag associated with the Order/Trade',
    'primitive',
    'transaction.ClientTag',
  ),
  new Property(
    'comment',
    'Comment',
    'A comment associated with the Order/Trade',
    'primitive',
    'transaction.ClientComment',
  ),
]

export class ClientExtensions extends Definition {
  /**
   * The Client ID of the Order/Trade
   */
  public id: primitives.ClientID

  /**
   * A tag associated with the Order/Trade
   */
  public tag: primitives.ClientTag

  /**
   * A comment associated with the Order/Trade
   */
  public comment: primitives.ClientComment

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = ClientExtensions_Properties

    data = data || {}

    if (data['id'] !== undefined) {
      this.id = data['id']
    }

    if (data['tag'] !== undefined) {
      this.tag = data['tag']
    }

    if (data['comment'] !== undefined) {
      this.comment = data['comment']
    }
  }
}

export const TakeProfitDetails_Properties = [
  new Property(
    'price',
    'Price',
    'The price that the Take Profit Order will be triggered at. Only one of the price and distance fields may be specified.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time in force for the created Take Profit Order. This may only be GTC, GTD or GFD.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date when the Take Profit Order will be cancelled on if timeInForce is GTD.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'clientExtensions',
    'Client Extensions',
    'The Client Extensions to add to the Take Profit Order when created.',
    'object',
    'transaction.ClientExtensions',
  ),
]

export class TakeProfitDetails extends Definition {
  /**
   * The price that the Take Profit Order will be triggered at. Only one of the price and distance fields may be specified.
   */
  public price: primitives.PriceValue

  /**
   * The time in force for the created Take Profit Order. This may only be GTC, GTD or GFD.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date when the Take Profit Order will be cancelled on if timeInForce is GTD.
   */
  public gtdTime: primitives.DateTime

  /**
   * The Client Extensions to add to the Take Profit Order when created.
   */
  public clientExtensions: ClientExtensions

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = TakeProfitDetails_Properties

    data = data || {}

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }
  }
}

export const StopLossDetails_Properties = [
  new Property(
    'price',
    'Price',
    'The price that the Stop Loss Order will be triggered at. Only one of the price and distance fields may be specified.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'distance',
    'Price Distance',
    "Specifies the distance (in price units) from the Trade's open price to use as the Stop Loss Order price. Only one of the distance and price fields may be specified.",
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time in force for the created Stop Loss Order. This may only be GTC, GTD or GFD.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date when the Stop Loss Order will be cancelled on if timeInForce is GTD.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'clientExtensions',
    'Client Extensions',
    'The Client Extensions to add to the Stop Loss Order when created.',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'guaranteed',
    'Guaranteed',
    'Flag indicating that the price for the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.',
    'primitive',
    'boolean',
  ),
]

export class StopLossDetails extends Definition {
  /**
   * The price that the Stop Loss Order will be triggered at. Only one of the price and distance fields may be specified.
   */
  public price: primitives.PriceValue

  /**
   * Specifies the distance (in price units) from the Trade's open price to use as the Stop Loss Order price. Only one of the distance and price fields may be specified.
   */
  public distance: primitives.DecimalNumber

  /**
   * The time in force for the created Stop Loss Order. This may only be GTC, GTD or GFD.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date when the Stop Loss Order will be cancelled on if timeInForce is GTD.
   */
  public gtdTime: primitives.DateTime

  /**
   * The Client Extensions to add to the Stop Loss Order when created.
   */
  public clientExtensions: ClientExtensions

  /**
   * Flag indicating that the price for the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.
   */
  public guaranteed: boolean

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = StopLossDetails_Properties

    data = data || {}

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['distance'] !== undefined) {
      this.distance = data['distance']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['guaranteed'] !== undefined) {
      this.guaranteed = data['guaranteed']
    }
  }
}

export const TrailingStopLossDetails_Properties = [
  new Property(
    'distance',
    'Trailing Price Distance',
    "The distance (in price units) from the Trade's fill price that the Trailing Stop Loss Order will be triggered at.",
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'timeInForce',
    'Time In Force',
    'The time in force for the created Trailing Stop Loss Order. This may only be GTC, GTD or GFD.',
    'primitive',
    'order.TimeInForce',
  ),
  new Property(
    'gtdTime',
    'GTD Time',
    'The date when the Trailing Stop Loss Order will be cancelled on if timeInForce is GTD.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'clientExtensions',
    'Client Extensions',
    'The Client Extensions to add to the Trailing Stop Loss Order when created.',
    'object',
    'transaction.ClientExtensions',
  ),
]

export class TrailingStopLossDetails extends Definition {
  /**
   * The distance (in price units) from the Trade's fill price that the Trailing Stop Loss Order will be triggered at.
   */
  public distance: primitives.DecimalNumber

  /**
   * The time in force for the created Trailing Stop Loss Order. This may only be GTC, GTD or GFD.
   */
  public timeInForce: primitives.TimeInForce

  /**
   * The date when the Trailing Stop Loss Order will be cancelled on if timeInForce is GTD.
   */
  public gtdTime: primitives.DateTime

  /**
   * The Client Extensions to add to the Trailing Stop Loss Order when created.
   */
  public clientExtensions: ClientExtensions

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = TrailingStopLossDetails_Properties

    data = data || {}

    if (data['distance'] !== undefined) {
      this.distance = data['distance']
    }

    if (data['timeInForce'] !== undefined) {
      this.timeInForce = data['timeInForce']
    } else {
      this.timeInForce = 'GTC'
    }

    if (data['gtdTime'] !== undefined) {
      this.gtdTime = data['gtdTime']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }
  }
}

export const TradeOpen_Properties = [
  new Property(
    'tradeID',
    'Trade ID',
    'The ID of the Trade that was opened',
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'units',
    'Amount',
    'The number of units opened by the Trade',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'price',
    'Units Opened Price',
    'The average price that the units were opened at.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'guaranteedExecutionFee',
    'Guranteed Execution Fee',
    'This is the fee charged for opening the trade if it has a guaranteed Stop Loss Order attached to it.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'clientExtensions',
    'Client Extensions',
    'The client extensions for the newly opened Trade',
    'object',
    'transaction.ClientExtensions',
  ),
  new Property(
    'halfSpreadCost',
    'Half Spread Cost',
    'The half spread cost for the trade open. This can be a positive or negative value and is represented in the home currency of the Account.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'initialMarginRequired',
    'Initial Margin Required',
    "The margin required at the time the Trade was created. Note, this is the 'pure' margin required, it is not the 'effective' margin used that factors in the trade risk if a GSLO is attached to the trade.",
    'primitive',
    'primitives.AccountUnits',
  ),
]

export class TradeOpen extends Definition {
  /**
   * The ID of the Trade that was opened
   */
  public tradeID: primitives.TradeID

  /**
   * The number of units opened by the Trade
   */
  public units: primitives.DecimalNumber

  /**
   * The average price that the units were opened at.
   */
  public price: primitives.PriceValue

  /**
   * This is the fee charged for opening the trade if it has a guaranteed Stop Loss Order attached to it.
   */
  public guaranteedExecutionFee: primitives.AccountUnits

  /**
   * The client extensions for the newly opened Trade
   */
  public clientExtensions: ClientExtensions

  /**
   * The half spread cost for the trade open. This can be a positive or negative value and is represented in the home currency of the Account.
   */
  public halfSpreadCost: primitives.AccountUnits

  /**
   * The margin required at the time the Trade was created. Note, this is the 'pure' margin required, it is not the 'effective' margin used that factors in the trade risk if a GSLO is attached to the trade.
   */
  public initialMarginRequired: primitives.AccountUnits

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = TradeOpen_Properties

    data = data || {}

    if (data['tradeID'] !== undefined) {
      this.tradeID = data['tradeID']
    }

    if (data['units'] !== undefined) {
      this.units = data['units']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['guaranteedExecutionFee'] !== undefined) {
      this.guaranteedExecutionFee = data['guaranteedExecutionFee']
    }

    if (data['clientExtensions'] !== undefined) {
      this.clientExtensions = new ClientExtensions(data['clientExtensions'])
    }

    if (data['halfSpreadCost'] !== undefined) {
      this.halfSpreadCost = data['halfSpreadCost']
    }

    if (data['initialMarginRequired'] !== undefined) {
      this.initialMarginRequired = data['initialMarginRequired']
    }
  }
}

export const TradeReduce_Properties = [
  new Property(
    'tradeID',
    'Trade ID',
    'The ID of the Trade that was reduced or closed',
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'units',
    'Amount',
    'The number of units that the Trade was reduced by',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'price',
    'Units Closed Price',
    'The average price that the units were closed at. This price may be clamped for guaranteed Stop Loss Orders.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'realizedPL',
    'Profit/Loss',
    'The PL realized when reducing the Trade',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'financing',
    'Financing',
    'The financing paid/collected when reducing the Trade',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'guaranteedExecutionFee',
    'Guranteed Execution Fee',
    'This is the fee that is charged for closing the Trade if it has a guaranteed Stop Loss Order attached to it.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'halfSpreadCost',
    'Half Spread Cost',
    'The half spread cost for the trade reduce/close. This can be a positive or negative value and is represented in the home currency of the Account.',
    'primitive',
    'primitives.AccountUnits',
  ),
]

export class TradeReduce extends Definition {
  /**
   * The ID of the Trade that was reduced or closed
   */
  public tradeID: primitives.TradeID

  /**
   * The number of units that the Trade was reduced by
   */
  public units: primitives.DecimalNumber

  /**
   * The average price that the units were closed at. This price may be clamped for guaranteed Stop Loss Orders.
   */
  public price: primitives.PriceValue

  /**
   * The PL realized when reducing the Trade
   */
  public realizedPL: primitives.AccountUnits

  /**
   * The financing paid/collected when reducing the Trade
   */
  public financing: primitives.AccountUnits

  /**
   * This is the fee that is charged for closing the Trade if it has a guaranteed Stop Loss Order attached to it.
   */
  public guaranteedExecutionFee: primitives.AccountUnits

  /**
   * The half spread cost for the trade reduce/close. This can be a positive or negative value and is represented in the home currency of the Account.
   */
  public halfSpreadCost: primitives.AccountUnits

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = TradeReduce_Properties

    data = data || {}

    if (data['tradeID'] !== undefined) {
      this.tradeID = data['tradeID']
    }

    if (data['units'] !== undefined) {
      this.units = data['units']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['realizedPL'] !== undefined) {
      this.realizedPL = data['realizedPL']
    }

    if (data['financing'] !== undefined) {
      this.financing = data['financing']
    }

    if (data['guaranteedExecutionFee'] !== undefined) {
      this.guaranteedExecutionFee = data['guaranteedExecutionFee']
    }

    if (data['halfSpreadCost'] !== undefined) {
      this.halfSpreadCost = data['halfSpreadCost']
    }
  }
}

export const MarketOrderTradeClose_Properties = [
  new Property(
    'tradeID',
    'Trade ID',
    'The ID of the Trade requested to be closed',
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'clientTradeID',
    'Client Trade ID',
    'The client ID of the Trade requested to be closed',
    'primitive',
    'string',
  ),
  new Property(
    'units',
    'Amount',
    'Indication of how much of the Trade to close. Either "ALL", or a DecimalNumber reflection a partial close of the Trade.',
    'primitive',
    'string',
  ),
]

export class MarketOrderTradeClose extends Definition {
  /**
   * The ID of the Trade requested to be closed
   */
  public tradeID: primitives.TradeID

  /**
   * The client ID of the Trade requested to be closed
   */
  public clientTradeID: string

  /**
   * Indication of how much of the Trade to close. Either "ALL", or a DecimalNumber reflection a partial close of the Trade.
   */
  public units: string

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = MarketOrderTradeClose_Properties

    data = data || {}

    if (data['tradeID'] !== undefined) {
      this.tradeID = data['tradeID']
    }

    if (data['clientTradeID'] !== undefined) {
      this.clientTradeID = data['clientTradeID']
    }

    if (data['units'] !== undefined) {
      this.units = data['units']
    }
  }
}

export const MarketOrderMarginCloseout_Properties = [
  new Property(
    'reason',
    'Reason',
    'The reason the Market Order was created to perform a margin closeout',
    'primitive',
    'transaction.MarketOrderMarginCloseoutReason',
  ),
]

export class MarketOrderMarginCloseout extends Definition {
  /**
   * The reason the Market Order was created to perform a margin closeout
   */
  public reason: primitives.MarketOrderMarginCloseoutReason

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = MarketOrderMarginCloseout_Properties

    data = data || {}

    if (data['reason'] !== undefined) {
      this.reason = data['reason']
    }
  }
}

export const MarketOrderDelayedTradeClose_Properties = [
  new Property(
    'tradeID',
    'Trade ID',
    'The ID of the Trade being closed',
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'clientTradeID',
    'Client Trade ID',
    'The Client ID of the Trade being closed',
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'sourceTransactionID',
    'Source Transaction ID',
    'The Transaction ID of the DelayedTradeClosure transaction to which this Delayed Trade Close belongs to',
    'primitive',
    'transaction.TransactionID',
  ),
]

export class MarketOrderDelayedTradeClose extends Definition {
  /**
   * The ID of the Trade being closed
   */
  public tradeID: primitives.TradeID

  /**
   * The Client ID of the Trade being closed
   */
  public clientTradeID: primitives.TradeID

  /**
   * The Transaction ID of the DelayedTradeClosure transaction to which this Delayed Trade Close belongs to
   */
  public sourceTransactionID: primitives.TransactionID

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = MarketOrderDelayedTradeClose_Properties

    data = data || {}

    if (data['tradeID'] !== undefined) {
      this.tradeID = data['tradeID']
    }

    if (data['clientTradeID'] !== undefined) {
      this.clientTradeID = data['clientTradeID']
    }

    if (data['sourceTransactionID'] !== undefined) {
      this.sourceTransactionID = data['sourceTransactionID']
    }
  }
}

export const MarketOrderPositionCloseout_Properties = [
  new Property(
    'instrument',
    'Instrument',
    'The instrument of the Position being closed out.',
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'units',
    'Amount',
    'Indication of how much of the Position to close. Either "ALL", or a DecimalNumber reflection a partial close of the Trade. The DecimalNumber must always be positive, and represent a number that doesn\'t exceed the absolute size of the Position.',
    'primitive',
    'string',
  ),
]

export class MarketOrderPositionCloseout extends Definition {
  /**
   * The instrument of the Position being closed out.
   */
  public instrument: primitives.InstrumentName

  /**
   * Indication of how much of the Position to close. Either "ALL", or a DecimalNumber reflection a partial close of the Trade. The DecimalNumber must always be positive, and represent a number that doesn't exceed the absolute size of the Position.
   */
  public units: string

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = MarketOrderPositionCloseout_Properties

    data = data || {}

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['units'] !== undefined) {
      this.units = data['units']
    }
  }
}

export const LiquidityRegenerationSchedule_Properties = [
  new Property(
    'steps',
    'Steps',
    'The steps in the Liquidity Regeneration Schedule',
    'array_object',
    'LiquidityRegenerationScheduleStep',
  ),
]

export class LiquidityRegenerationSchedule extends Definition {
  /**
   * The steps in the Liquidity Regeneration Schedule
   */
  public steps: LiquidityRegenerationScheduleStep[]

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = LiquidityRegenerationSchedule_Properties

    data = data || {}

    if (data['steps'] !== undefined) {
      this.steps = data['steps'].map((x) => new LiquidityRegenerationScheduleStep(x))
    }
  }
}

export const LiquidityRegenerationScheduleStep_Properties = [
  new Property(
    'timestamp',
    'Time',
    'The timestamp of the schedule step.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'bidLiquidityUsed',
    'Bid Liquidity Used',
    'The amount of bid liquidity used at this step in the schedule.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'askLiquidityUsed',
    'Ask Liquidity Used',
    'The amount of ask liquidity used at this step in the schedule.',
    'primitive',
    'primitives.DecimalNumber',
  ),
]

export class LiquidityRegenerationScheduleStep extends Definition {
  /**
   * The timestamp of the schedule step.
   */
  public timestamp: primitives.DateTime

  /**
   * The amount of bid liquidity used at this step in the schedule.
   */
  public bidLiquidityUsed: primitives.DecimalNumber

  /**
   * The amount of ask liquidity used at this step in the schedule.
   */
  public askLiquidityUsed: primitives.DecimalNumber

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = LiquidityRegenerationScheduleStep_Properties

    data = data || {}

    if (data['timestamp'] !== undefined) {
      this.timestamp = data['timestamp']
    }

    if (data['bidLiquidityUsed'] !== undefined) {
      this.bidLiquidityUsed = data['bidLiquidityUsed']
    }

    if (data['askLiquidityUsed'] !== undefined) {
      this.askLiquidityUsed = data['askLiquidityUsed']
    }
  }
}

export const OpenTradeFinancing_Properties = [
  new Property(
    'tradeID',
    'tradeID',
    'The ID of the Trade that financing is being paid/collected for.',
    'primitive',
    'trade.TradeID',
  ),
  new Property(
    'financing',
    'Financing',
    'The amount of financing paid/collected for the Trade.',
    'primitive',
    'primitives.AccountUnits',
  ),
]

export class OpenTradeFinancing extends Definition {
  /**
   * The ID of the Trade that financing is being paid/collected for.
   */
  public tradeID: primitives.TradeID

  /**
   * The amount of financing paid/collected for the Trade.
   */
  public financing: primitives.AccountUnits

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = OpenTradeFinancing_Properties

    data = data || {}

    if (data['tradeID'] !== undefined) {
      this.tradeID = data['tradeID']
    }

    if (data['financing'] !== undefined) {
      this.financing = data['financing']
    }
  }
}

export const PositionFinancing_Properties = [
  new Property(
    'instrument',
    'Instrument',
    'The instrument of the Position that financing is being paid/collected for.',
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'financing',
    'Financing',
    'The amount of financing paid/collected for the Position.',
    'primitive',
    'primitives.AccountUnits',
  ),
  new Property(
    'openTradeFinancings',
    'Trade Financings',
    'The financing paid/collecte for each open Trade within the Position.',
    'array_object',
    'OpenTradeFinancing',
  ),
]

export class PositionFinancing extends Definition {
  /**
   * The instrument of the Position that financing is being paid/collected for.
   */
  public instrument: primitives.InstrumentName

  /**
   * The amount of financing paid/collected for the Position.
   */
  public financing: primitives.AccountUnits

  /**
   * The financing paid/collecte for each open Trade within the Position.
   */
  public openTradeFinancings: OpenTradeFinancing[]

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = PositionFinancing_Properties

    data = data || {}

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['financing'] !== undefined) {
      this.financing = data['financing']
    }

    if (data['openTradeFinancings'] !== undefined) {
      this.openTradeFinancings = data['openTradeFinancings'].map((x) => new OpenTradeFinancing(x))
    }
  }
}

export const TransactionHeartbeat_Properties = [
  new Property('type', 'type', 'The string "HEARTBEAT"', 'primitive', 'string'),
  new Property(
    'lastTransactionID',
    'lastTransactionID',
    'The ID of the most recent Transaction created for the Account',
    'primitive',
    'transaction.TransactionID',
  ),
  new Property(
    'time',
    'time',
    'The date/time when the TransactionHeartbeat was created.',
    'primitive',
    'primitives.DateTime',
  ),
]

export class TransactionHeartbeat extends Definition {
  /**
   * The string "HEARTBEAT"
   */
  public type: string

  /**
   * The ID of the most recent Transaction created for the Account
   */
  public lastTransactionID: primitives.TransactionID

  /**
   * The date/time when the TransactionHeartbeat was created.
   */
  public time: primitives.DateTime

  constructor(data) {
    super()

    this._summaryFormat = 'Transaction Heartbeat {time}'

    this._nameFormat = ''

    this._properties = TransactionHeartbeat_Properties

    data = data || {}

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'HEARTBEAT'
    }

    if (data['lastTransactionID'] !== undefined) {
      this.lastTransactionID = data['lastTransactionID']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }
  }
}

export class EntitySpec {
  public Transaction = Transaction
  public CreateTransaction = CreateTransaction
  public CloseTransaction = CloseTransaction
  public ReopenTransaction = ReopenTransaction
  public ClientConfigureTransaction = ClientConfigureTransaction
  public ClientConfigureRejectTransaction = ClientConfigureRejectTransaction
  public TransferFundsTransaction = TransferFundsTransaction
  public TransferFundsRejectTransaction = TransferFundsRejectTransaction
  public MarketOrderTransaction = MarketOrderTransaction
  public MarketOrderRejectTransaction = MarketOrderRejectTransaction
  public FixedPriceOrderTransaction = FixedPriceOrderTransaction
  public LimitOrderTransaction = LimitOrderTransaction
  public LimitOrderRejectTransaction = LimitOrderRejectTransaction
  public StopOrderTransaction = StopOrderTransaction
  public StopOrderRejectTransaction = StopOrderRejectTransaction
  public MarketIfTouchedOrderTransaction = MarketIfTouchedOrderTransaction
  public MarketIfTouchedOrderRejectTransaction = MarketIfTouchedOrderRejectTransaction
  public TakeProfitOrderTransaction = TakeProfitOrderTransaction
  public TakeProfitOrderRejectTransaction = TakeProfitOrderRejectTransaction
  public StopLossOrderTransaction = StopLossOrderTransaction
  public StopLossOrderRejectTransaction = StopLossOrderRejectTransaction
  public TrailingStopLossOrderTransaction = TrailingStopLossOrderTransaction
  public TrailingStopLossOrderRejectTransaction = TrailingStopLossOrderRejectTransaction
  public OrderFillTransaction = OrderFillTransaction
  public OrderCancelTransaction = OrderCancelTransaction
  public OrderCancelRejectTransaction = OrderCancelRejectTransaction
  public OrderClientExtensionsModifyTransaction = OrderClientExtensionsModifyTransaction
  public OrderClientExtensionsModifyRejectTransaction = OrderClientExtensionsModifyRejectTransaction
  public TradeClientExtensionsModifyTransaction = TradeClientExtensionsModifyTransaction
  public TradeClientExtensionsModifyRejectTransaction = TradeClientExtensionsModifyRejectTransaction
  public MarginCallEnterTransaction = MarginCallEnterTransaction
  public MarginCallExtendTransaction = MarginCallExtendTransaction
  public MarginCallExitTransaction = MarginCallExitTransaction
  public DelayedTradeClosureTransaction = DelayedTradeClosureTransaction
  public DailyFinancingTransaction = DailyFinancingTransaction
  public ResetResettablePLTransaction = ResetResettablePLTransaction
  public ClientExtensions = ClientExtensions
  public TakeProfitDetails = TakeProfitDetails
  public StopLossDetails = StopLossDetails
  public TrailingStopLossDetails = TrailingStopLossDetails
  public TradeOpen = TradeOpen
  public TradeReduce = TradeReduce
  public MarketOrderTradeClose = MarketOrderTradeClose
  public MarketOrderMarginCloseout = MarketOrderMarginCloseout
  public MarketOrderDelayedTradeClose = MarketOrderDelayedTradeClose
  public MarketOrderPositionCloseout = MarketOrderPositionCloseout
  public LiquidityRegenerationSchedule = LiquidityRegenerationSchedule
  public LiquidityRegenerationScheduleStep = LiquidityRegenerationScheduleStep
  public OpenTradeFinancing = OpenTradeFinancing
  public PositionFinancing = PositionFinancing
  public TransactionHeartbeat = TransactionHeartbeat

  constructor(public context: any) {}

  list(accountID, queryParams, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/accounts/{accountID}/transactions'

    queryParams = queryParams || {}

    path = path.replace('{' + 'accountID' + '}', accountID)

    path = path + '?'
    if (typeof queryParams['from'] !== 'undefined') {
      path = path + 'from=' + queryParams['from'] + '&'
    }
    if (typeof queryParams['to'] !== 'undefined') {
      path = path + 'to=' + queryParams['to'] + '&'
    }
    if (typeof queryParams['pageSize'] !== 'undefined') {
      path = path + 'pageSize=' + queryParams['pageSize'] + '&'
    }
    if (typeof queryParams['type'] !== 'undefined') {
      path = path + 'type=' + queryParams['type'] + '&'
    }

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['from'] !== undefined) {
            response.body.from = msg['from']
          }

          if (msg['to'] !== undefined) {
            response.body.to = msg['to']
          }

          if (msg['pageSize'] !== undefined) {
            response.body.pageSize = msg['pageSize']
          }

          if (msg['type'] !== undefined) {
            response.body.type = msg['type']
          }

          if (msg['count'] !== undefined) {
            response.body.count = msg['count']
          }

          if (msg['pages'] !== undefined) {
            response.body.pages = msg['pages']
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }
        } else if (response.statusCode == 400) {
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 403) {
        } else if (response.statusCode == 404) {
        } else if (response.statusCode == 405) {
        } else if (response.statusCode == 416) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('GET', path, body, undefined, handleResponse)
  }

  get(accountID, transactionID, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/accounts/{accountID}/transactions/{transactionID}'

    path = path.replace('{' + 'accountID' + '}', accountID)
    path = path.replace('{' + 'transactionID' + '}', transactionID)

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['transaction'] !== undefined) {
            response.body.transaction = Transaction.create(msg['transaction'])
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('GET', path, body, undefined, handleResponse)
  }

  range(accountID, queryParams, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/accounts/{accountID}/transactions/idrange'

    queryParams = queryParams || {}

    path = path.replace('{' + 'accountID' + '}', accountID)

    path = path + '?'
    if (typeof queryParams['from'] !== 'undefined') {
      path = path + 'from=' + queryParams['from'] + '&'
    }
    if (typeof queryParams['to'] !== 'undefined') {
      path = path + 'to=' + queryParams['to'] + '&'
    }
    if (typeof queryParams['type'] !== 'undefined') {
      path = path + 'type=' + queryParams['type'] + '&'
    }

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['transactions'] !== undefined) {
            response.body.transactions = msg['transactions'].map((x) => Transaction.create(x))
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }
        } else if (response.statusCode == 400) {
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
        } else if (response.statusCode == 405) {
        } else if (response.statusCode == 416) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('GET', path, body, undefined, handleResponse)
  }

  since(accountID, queryParams, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/accounts/{accountID}/transactions/sinceid'

    queryParams = queryParams || {}

    path = path.replace('{' + 'accountID' + '}', accountID)

    path = path + '?'
    if (typeof queryParams['id'] !== 'undefined') {
      path = path + 'id=' + queryParams['id'] + '&'
    }

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['transactions'] !== undefined) {
            response.body.transactions = msg['transactions'].map((x) => Transaction.create(x))
          }

          if (msg['lastTransactionID'] !== undefined) {
            response.body.lastTransactionID = msg['lastTransactionID']
          }
        } else if (response.statusCode == 400) {
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
        } else if (response.statusCode == 405) {
        } else if (response.statusCode == 416) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('GET', path, body, undefined, handleResponse)
  }

  stream(accountID, streamChunkHandler, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    if (!streamChunkHandler) {
      throw 'No streamChunkHandler provided for streaming API call'
    }

    let path = '/v3/accounts/{accountID}/transactions/stream'

    path = path.replace('{' + 'accountID' + '}', accountID)

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['transaction'] !== undefined) {
            response.body.transaction = Transaction.create(msg['transaction'])
          }

          if (msg['heartbeat'] !== undefined) {
            response.body.heartbeat = new TransactionHeartbeat(msg['heartbeat'])
          }
        } else if (response.statusCode == 400) {
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    function generateStreamParser(streamChunkHandler) {
      return (chunk) => {
        try {
          let msg = JSON.parse(chunk)

          if (msg.type == 'HEARTBEAT') {
            streamChunkHandler(new TransactionHeartbeat(msg))
          } else if (msg.type) {
            streamChunkHandler(Transaction.create(msg))
          }
        } catch (err) {
          // failed to parse chunk so ignore
        }
      }
    }

    return this.context.request(
      'GET',
      path,
      body,
      generateStreamParser(streamChunkHandler),
      handleResponse,
    )
  }
}
