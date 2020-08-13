"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var pricing = require("./pricing");
exports.Transaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
];
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    function Transaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.Transaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        _this.raw = data;
        return _this;
    }
    Transaction.create = function (transaction) {
        if (!transaction['type']) {
            return new Transaction(transaction);
        }
        else if (transaction['type'] == 'MARKET_ORDER') {
            return new MarketOrderTransaction(transaction);
        }
        else if (transaction['type'] == 'ORDER_FILL') {
            return new OrderFillTransaction(transaction);
        }
        else if (transaction['type'] == 'ORDER_CANCEL') {
            return new OrderCancelTransaction(transaction);
        }
        else if (transaction['type'] == 'MARKET_ORDER_REJECT') {
            return new MarketOrderRejectTransaction(transaction);
        }
        else if (transaction['type'] == 'TRADE_CLIENT_EXTENSIONS_MODIFY') {
            return new TradeClientExtensionsModifyTransaction(transaction);
        }
        else if (transaction['type'] == 'TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT') {
            return new TradeClientExtensionsModifyRejectTransaction(transaction);
        }
        else if (transaction['type'] == 'TAKE_PROFIT_ORDER') {
            return new TakeProfitOrderTransaction(transaction);
        }
        else if (transaction['type'] == 'STOP_LOSS_ORDER') {
            return new StopLossOrderTransaction(transaction);
        }
        else if (transaction['type'] == 'TRAILING_STOP_LOSS_ORDER') {
            return new TrailingStopLossOrderTransaction(transaction);
        }
        else if (transaction['type'] == 'ORDER_CANCEL_REJECT') {
            return new OrderCancelRejectTransaction(transaction);
        }
        else if (transaction['type'] == 'TAKE_PROFIT_ORDER_REJECT') {
            return new TakeProfitOrderRejectTransaction(transaction);
        }
        else if (transaction['type'] == 'STOP_LOSS_ORDER_REJECT') {
            return new StopLossOrderRejectTransaction(transaction);
        }
        else if (transaction['type'] == 'TRAILING_STOP_LOSS_ORDER_REJECT') {
            return new TrailingStopLossOrderRejectTransaction(transaction);
        }
        else if (transaction['type'] == 'CLIENT_CONFIGURE') {
            return new ClientConfigureTransaction(transaction);
        }
        else if (transaction['type'] == 'CLIENT_CONFIGURE_REJECT') {
            return new ClientConfigureRejectTransaction(transaction);
        }
        else if (transaction['type'] == 'CREATE') {
            return new CreateTransaction(transaction);
        }
        else if (transaction['type'] == 'CLOSE') {
            return new CloseTransaction(transaction);
        }
        else if (transaction['type'] == 'REOPEN') {
            return new ReopenTransaction(transaction);
        }
        else if (transaction['type'] == 'TRANSFER_FUNDS') {
            return new TransferFundsTransaction(transaction);
        }
        else if (transaction['type'] == 'TRANSFER_FUNDS_REJECT') {
            return new TransferFundsRejectTransaction(transaction);
        }
        else if (transaction['type'] == 'FIXED_PRICE_ORDER') {
            return new FixedPriceOrderTransaction(transaction);
        }
        else if (transaction['type'] == 'LIMIT_ORDER') {
            return new LimitOrderTransaction(transaction);
        }
        else if (transaction['type'] == 'LIMIT_ORDER_REJECT') {
            return new LimitOrderRejectTransaction(transaction);
        }
        else if (transaction['type'] == 'STOP_ORDER') {
            return new StopOrderTransaction(transaction);
        }
        else if (transaction['type'] == 'STOP_ORDER_REJECT') {
            return new StopOrderRejectTransaction(transaction);
        }
        else if (transaction['type'] == 'MARKET_IF_TOUCHED_ORDER') {
            return new MarketIfTouchedOrderTransaction(transaction);
        }
        else if (transaction['type'] == 'MARKET_IF_TOUCHED_ORDER_REJECT') {
            return new MarketIfTouchedOrderRejectTransaction(transaction);
        }
        else if (transaction['type'] == 'ORDER_CLIENT_EXTENSIONS_MODIFY') {
            return new OrderClientExtensionsModifyTransaction(transaction);
        }
        else if (transaction['type'] == 'ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT') {
            return new OrderClientExtensionsModifyRejectTransaction(transaction);
        }
        else if (transaction['type'] == 'MARGIN_CALL_ENTER') {
            return new MarginCallEnterTransaction(transaction);
        }
        else if (transaction['type'] == 'MARGIN_CALL_EXTEND') {
            return new MarginCallExtendTransaction(transaction);
        }
        else if (transaction['type'] == 'MARGIN_CALL_EXIT') {
            return new MarginCallExitTransaction(transaction);
        }
        else if (transaction['type'] == 'DELAYED_TRADE_CLOSURE') {
            return new DelayedTradeClosureTransaction(transaction);
        }
        else if (transaction['type'] == 'DAILY_FINANCING') {
            return new DailyFinancingTransaction(transaction);
        }
        else if (transaction['type'] == 'RESET_RESETTABLE_PL') {
            return new ResetResettablePLTransaction(transaction);
        }
        return new Transaction(transaction);
    };
    return Transaction;
}(base_1.Definition));
exports.Transaction = Transaction;
exports.CreateTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "CREATE" in a CreateTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('divisionID', 'Division ID', 'The ID of the Division that the Account is in', 'primitive', 'integer'),
    new base_1.Property('siteID', 'Site ID', 'The ID of the Site that the Account was created at', 'primitive', 'integer'),
    new base_1.Property('accountUserID', 'Account User ID', 'The ID of the user that the Account was created for', 'primitive', 'integer'),
    new base_1.Property('accountNumber', 'Account Number', 'The number of the Account within the site/division/user', 'primitive', 'integer'),
    new base_1.Property('homeCurrency', 'Home Currency', 'The home currency of the Account', 'primitive', 'primitives.Currency'),
];
var CreateTransaction = /** @class */ (function (_super) {
    __extends(CreateTransaction, _super);
    function CreateTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Create Account {accountID}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.CreateTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'CREATE';
        }
        if (data['divisionID'] !== undefined) {
            _this.divisionID = data['divisionID'];
        }
        if (data['siteID'] !== undefined) {
            _this.siteID = data['siteID'];
        }
        if (data['accountUserID'] !== undefined) {
            _this.accountUserID = data['accountUserID'];
        }
        if (data['accountNumber'] !== undefined) {
            _this.accountNumber = data['accountNumber'];
        }
        if (data['homeCurrency'] !== undefined) {
            _this.homeCurrency = data['homeCurrency'];
        }
        return _this;
    }
    return CreateTransaction;
}(base_1.Definition));
exports.CreateTransaction = CreateTransaction;
exports.CloseTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "CLOSE" in a CloseTransaction.', 'primitive', 'transaction.TransactionType'),
];
var CloseTransaction = /** @class */ (function (_super) {
    __extends(CloseTransaction, _super);
    function CloseTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Close Account {accountID}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.CloseTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'CLOSE';
        }
        return _this;
    }
    return CloseTransaction;
}(base_1.Definition));
exports.CloseTransaction = CloseTransaction;
exports.ReopenTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "REOPEN" in a ReopenTransaction.', 'primitive', 'transaction.TransactionType'),
];
var ReopenTransaction = /** @class */ (function (_super) {
    __extends(ReopenTransaction, _super);
    function ReopenTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Reopen Account {accountID}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.ReopenTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'REOPEN';
        }
        return _this;
    }
    return ReopenTransaction;
}(base_1.Definition));
exports.ReopenTransaction = ReopenTransaction;
exports.ClientConfigureTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "CLIENT_CONFIGURE" in a ClientConfigureTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('alias', 'Account Alias', 'The client-provided alias for the Account.', 'primitive', 'string'),
    new base_1.Property('marginRate', 'Margin Rate', 'The margin rate override for the Account.', 'primitive', 'primitives.DecimalNumber'),
];
var ClientConfigureTransaction = /** @class */ (function (_super) {
    __extends(ClientConfigureTransaction, _super);
    function ClientConfigureTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Client Configure';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.ClientConfigureTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'CLIENT_CONFIGURE';
        }
        if (data['alias'] !== undefined) {
            _this.alias = data['alias'];
        }
        if (data['marginRate'] !== undefined) {
            _this.marginRate = data['marginRate'];
        }
        return _this;
    }
    return ClientConfigureTransaction;
}(base_1.Definition));
exports.ClientConfigureTransaction = ClientConfigureTransaction;
exports.ClientConfigureRejectTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "CLIENT_CONFIGURE_REJECT" in a ClientConfigureRejectTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('alias', 'Account Alias', 'The client-provided alias for the Account.', 'primitive', 'string'),
    new base_1.Property('marginRate', 'Margin Rate', 'The margin rate override for the Account.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('rejectReason', 'Reject Reason', 'The reason that the Reject Transaction was created', 'primitive', 'transaction.TransactionRejectReason'),
];
var ClientConfigureRejectTransaction = /** @class */ (function (_super) {
    __extends(ClientConfigureRejectTransaction, _super);
    function ClientConfigureRejectTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Client Configure Reject';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.ClientConfigureRejectTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'CLIENT_CONFIGURE_REJECT';
        }
        if (data['alias'] !== undefined) {
            _this.alias = data['alias'];
        }
        if (data['marginRate'] !== undefined) {
            _this.marginRate = data['marginRate'];
        }
        if (data['rejectReason'] !== undefined) {
            _this.rejectReason = data['rejectReason'];
        }
        return _this;
    }
    return ClientConfigureRejectTransaction;
}(base_1.Definition));
exports.ClientConfigureRejectTransaction = ClientConfigureRejectTransaction;
exports.TransferFundsTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "TRANSFER_FUNDS" in a TransferFundsTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('amount', 'Transfer Amount', "The amount to deposit/withdraw from the Account in the Account's home currency. A positive value indicates a deposit, a negative value indicates a withdrawal.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('fundingReason', 'Reason', 'The reason that an Account is being funded.', 'primitive', 'transaction.FundingReason'),
    new base_1.Property('comment', 'Comment', 'An optional comment that may be attached to a fund transfer for audit purposes', 'primitive', 'string'),
    new base_1.Property('accountBalance', 'Account Balance', "The Account's balance after funds are transferred.", 'primitive', 'primitives.AccountUnits'),
];
var TransferFundsTransaction = /** @class */ (function (_super) {
    __extends(TransferFundsTransaction, _super);
    function TransferFundsTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Account Transfer of {amount}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.TransferFundsTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'TRANSFER_FUNDS';
        }
        if (data['amount'] !== undefined) {
            _this.amount = data['amount'];
        }
        if (data['fundingReason'] !== undefined) {
            _this.fundingReason = data['fundingReason'];
        }
        if (data['comment'] !== undefined) {
            _this.comment = data['comment'];
        }
        if (data['accountBalance'] !== undefined) {
            _this.accountBalance = data['accountBalance'];
        }
        return _this;
    }
    return TransferFundsTransaction;
}(base_1.Definition));
exports.TransferFundsTransaction = TransferFundsTransaction;
exports.TransferFundsRejectTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "TRANSFER_FUNDS_REJECT" in a TransferFundsRejectTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('amount', 'Transfer Amount', "The amount to deposit/withdraw from the Account in the Account's home currency. A positive value indicates a deposit, a negative value indicates a withdrawal.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('fundingReason', 'Reason', 'The reason that an Account is being funded.', 'primitive', 'transaction.FundingReason'),
    new base_1.Property('comment', 'Comment', 'An optional comment that may be attached to a fund transfer for audit purposes', 'primitive', 'string'),
    new base_1.Property('rejectReason', 'Reject Reason', 'The reason that the Reject Transaction was created', 'primitive', 'transaction.TransactionRejectReason'),
];
var TransferFundsRejectTransaction = /** @class */ (function (_super) {
    __extends(TransferFundsRejectTransaction, _super);
    function TransferFundsRejectTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Account Reject Transfer of {amount}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.TransferFundsRejectTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'TRANSFER_FUNDS_REJECT';
        }
        if (data['amount'] !== undefined) {
            _this.amount = data['amount'];
        }
        if (data['fundingReason'] !== undefined) {
            _this.fundingReason = data['fundingReason'];
        }
        if (data['comment'] !== undefined) {
            _this.comment = data['comment'];
        }
        if (data['rejectReason'] !== undefined) {
            _this.rejectReason = data['rejectReason'];
        }
        return _this;
    }
    return TransferFundsRejectTransaction;
}(base_1.Definition));
exports.TransferFundsRejectTransaction = TransferFundsRejectTransaction;
exports.MarketOrderTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "MARKET_ORDER" in a MarketOrderTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('instrument', 'Instrument', "The Market Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the Market Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the Market Order. Restricted to FOK or IOC for a MarketOrder.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('priceBound', 'Price Bound', 'The worst price that the client is willing to have the Market Order filled at.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('tradeClose', 'Trade Close Details', 'Details of the Trade requested to be closed, only provided when the Market Order is being used to explicitly close a Trade.', 'object', 'transaction.MarketOrderTradeClose'),
    new base_1.Property('longPositionCloseout', 'Long Position Close Details', 'Details of the long Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a long Position.', 'object', 'transaction.MarketOrderPositionCloseout'),
    new base_1.Property('shortPositionCloseout', 'Short Position Close Details', 'Details of the short Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a short Position.', 'object', 'transaction.MarketOrderPositionCloseout'),
    new base_1.Property('marginCloseout', 'Margin Closeout Details', 'Details of the Margin Closeout that this Market Order was created for', 'object', 'transaction.MarketOrderMarginCloseout'),
    new base_1.Property('delayedTradeClose', 'Delayed Trade Close Details', 'Details of the delayed Trade close that this Market Order was created for', 'object', 'transaction.MarketOrderDelayedTradeClose'),
    new base_1.Property('reason', 'Reason', 'The reason that the Market Order was created', 'primitive', 'transaction.MarketOrderReason'),
    new base_1.Property('clientExtensions', 'Order Client Extensions', 'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', 'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', 'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', 'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
];
var MarketOrderTransaction = /** @class */ (function (_super) {
    __extends(MarketOrderTransaction, _super);
    function MarketOrderTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Create Market Order {id} ({reason}): {units} of {instrument}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.MarketOrderTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'MARKET_ORDER';
        }
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'FOK';
        }
        if (data['priceBound'] !== undefined) {
            _this.priceBound = data['priceBound'];
        }
        if (data['positionFill'] !== undefined) {
            _this.positionFill = data['positionFill'];
        }
        else {
            _this.positionFill = 'DEFAULT';
        }
        if (data['tradeClose'] !== undefined) {
            _this.tradeClose = new MarketOrderTradeClose(data['tradeClose']);
        }
        if (data['longPositionCloseout'] !== undefined) {
            _this.longPositionCloseout = new MarketOrderPositionCloseout(data['longPositionCloseout']);
        }
        if (data['shortPositionCloseout'] !== undefined) {
            _this.shortPositionCloseout = new MarketOrderPositionCloseout(data['shortPositionCloseout']);
        }
        if (data['marginCloseout'] !== undefined) {
            _this.marginCloseout = new MarketOrderMarginCloseout(data['marginCloseout']);
        }
        if (data['delayedTradeClose'] !== undefined) {
            _this.delayedTradeClose = new MarketOrderDelayedTradeClose(data['delayedTradeClose']);
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions']);
        }
        return _this;
    }
    return MarketOrderTransaction;
}(base_1.Definition));
exports.MarketOrderTransaction = MarketOrderTransaction;
exports.MarketOrderRejectTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "MARKET_ORDER_REJECT" in a MarketOrderRejectTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('instrument', 'Instrument', "The Market Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the Market Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the Market Order. Restricted to FOK or IOC for a MarketOrder.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('priceBound', 'Price Bound', 'The worst price that the client is willing to have the Market Order filled at.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('tradeClose', 'Trade Close Details', 'Details of the Trade requested to be closed, only provided when the Market Order is being used to explicitly close a Trade.', 'object', 'transaction.MarketOrderTradeClose'),
    new base_1.Property('longPositionCloseout', 'Long Position Close Details', 'Details of the long Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a long Position.', 'object', 'transaction.MarketOrderPositionCloseout'),
    new base_1.Property('shortPositionCloseout', 'Short Position Close Details', 'Details of the short Position requested to be closed out, only provided when a Market Order is being used to explicitly closeout a short Position.', 'object', 'transaction.MarketOrderPositionCloseout'),
    new base_1.Property('marginCloseout', 'Margin Closeout Details', 'Details of the Margin Closeout that this Market Order was created for', 'object', 'transaction.MarketOrderMarginCloseout'),
    new base_1.Property('delayedTradeClose', 'Delayed Trade Close Details', 'Details of the delayed Trade close that this Market Order was created for', 'object', 'transaction.MarketOrderDelayedTradeClose'),
    new base_1.Property('reason', 'Reason', 'The reason that the Market Order was created', 'primitive', 'transaction.MarketOrderReason'),
    new base_1.Property('clientExtensions', 'Order Client Extensions', 'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', 'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', 'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', 'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('rejectReason', 'Reject Reason', 'The reason that the Reject Transaction was created', 'primitive', 'transaction.TransactionRejectReason'),
];
var MarketOrderRejectTransaction = /** @class */ (function (_super) {
    __extends(MarketOrderRejectTransaction, _super);
    function MarketOrderRejectTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Reject Market Order ({reason}): {units} of {instrument}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.MarketOrderRejectTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'MARKET_ORDER_REJECT';
        }
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'FOK';
        }
        if (data['priceBound'] !== undefined) {
            _this.priceBound = data['priceBound'];
        }
        if (data['positionFill'] !== undefined) {
            _this.positionFill = data['positionFill'];
        }
        else {
            _this.positionFill = 'DEFAULT';
        }
        if (data['tradeClose'] !== undefined) {
            _this.tradeClose = new MarketOrderTradeClose(data['tradeClose']);
        }
        if (data['longPositionCloseout'] !== undefined) {
            _this.longPositionCloseout = new MarketOrderPositionCloseout(data['longPositionCloseout']);
        }
        if (data['shortPositionCloseout'] !== undefined) {
            _this.shortPositionCloseout = new MarketOrderPositionCloseout(data['shortPositionCloseout']);
        }
        if (data['marginCloseout'] !== undefined) {
            _this.marginCloseout = new MarketOrderMarginCloseout(data['marginCloseout']);
        }
        if (data['delayedTradeClose'] !== undefined) {
            _this.delayedTradeClose = new MarketOrderDelayedTradeClose(data['delayedTradeClose']);
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions']);
        }
        if (data['rejectReason'] !== undefined) {
            _this.rejectReason = data['rejectReason'];
        }
        return _this;
    }
    return MarketOrderRejectTransaction;
}(base_1.Definition));
exports.MarketOrderRejectTransaction = MarketOrderRejectTransaction;
exports.FixedPriceOrderTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "FIXED_PRICE_ORDER" in a FixedPriceOrderTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('instrument', 'Instrument', "The Fixed Price Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the Fixed Price Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Price', 'The price specified for the Fixed Price Order. This price is the exact price that the Fixed Price Order will be filled at.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('tradeState', 'TradeState', 'The state that the trade resulting from the Fixed Price Order should be set to.', 'primitive', 'string'),
    new base_1.Property('reason', 'Reason', 'The reason that the Fixed Price Order was created', 'primitive', 'transaction.FixedPriceOrderReason'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions for the Fixed Price Order.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', 'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', 'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', 'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
];
var FixedPriceOrderTransaction = /** @class */ (function (_super) {
    __extends(FixedPriceOrderTransaction, _super);
    function FixedPriceOrderTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Create Fixed Price Order {id} ({reason}): {units} of {instrument}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.FixedPriceOrderTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'FIXED_PRICE_ORDER';
        }
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['positionFill'] !== undefined) {
            _this.positionFill = data['positionFill'];
        }
        else {
            _this.positionFill = 'DEFAULT';
        }
        if (data['tradeState'] !== undefined) {
            _this.tradeState = data['tradeState'];
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions']);
        }
        return _this;
    }
    return FixedPriceOrderTransaction;
}(base_1.Definition));
exports.FixedPriceOrderTransaction = FixedPriceOrderTransaction;
exports.LimitOrderTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "LIMIT_ORDER" in a LimitOrderTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('instrument', 'Instrument', "The Limit Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the Limit Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the Limit Order. The Limit Order will only be filled by a market price that is equal to or better than this price.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the Limit Order.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the Limit Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('reason', 'Reason', 'The reason that the Limit Order was initiated', 'primitive', 'transaction.LimitOrderReason'),
    new base_1.Property('clientExtensions', 'Order Client Extensions', 'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', 'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', 'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', 'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('replacesOrderID', 'Replaces Order ID', 'The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).', 'primitive', 'order.OrderID'),
    new base_1.Property('cancellingTransactionID', 'Replaces Order Cancel Transaction ID', 'The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).', 'primitive', 'transaction.TransactionID'),
];
var LimitOrderTransaction = /** @class */ (function (_super) {
    __extends(LimitOrderTransaction, _super);
    function LimitOrderTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Create Limit Order {id} ({reason}): {units} of {instrument} @ {price}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.LimitOrderTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'LIMIT_ORDER';
        }
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['positionFill'] !== undefined) {
            _this.positionFill = data['positionFill'];
        }
        else {
            _this.positionFill = 'DEFAULT';
        }
        if (data['triggerCondition'] !== undefined) {
            _this.triggerCondition = data['triggerCondition'];
        }
        else {
            _this.triggerCondition = 'DEFAULT';
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions']);
        }
        if (data['replacesOrderID'] !== undefined) {
            _this.replacesOrderID = data['replacesOrderID'];
        }
        if (data['cancellingTransactionID'] !== undefined) {
            _this.cancellingTransactionID = data['cancellingTransactionID'];
        }
        return _this;
    }
    return LimitOrderTransaction;
}(base_1.Definition));
exports.LimitOrderTransaction = LimitOrderTransaction;
exports.LimitOrderRejectTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "LIMIT_ORDER_REJECT" in a LimitOrderRejectTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('instrument', 'Instrument', "The Limit Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the Limit Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the Limit Order. The Limit Order will only be filled by a market price that is equal to or better than this price.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the Limit Order.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the Limit Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('reason', 'Reason', 'The reason that the Limit Order was initiated', 'primitive', 'transaction.LimitOrderReason'),
    new base_1.Property('clientExtensions', 'Order Client Extensions', 'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', 'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', 'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', 'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('intendedReplacesOrderID', 'Order ID to Replace', 'The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).', 'primitive', 'order.OrderID'),
    new base_1.Property('rejectReason', 'Reject Reason', 'The reason that the Reject Transaction was created', 'primitive', 'transaction.TransactionRejectReason'),
];
var LimitOrderRejectTransaction = /** @class */ (function (_super) {
    __extends(LimitOrderRejectTransaction, _super);
    function LimitOrderRejectTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Reject Limit Order ({reason}): {units} of {instrument} @ {price}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.LimitOrderRejectTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'LIMIT_ORDER_REJECT';
        }
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['positionFill'] !== undefined) {
            _this.positionFill = data['positionFill'];
        }
        else {
            _this.positionFill = 'DEFAULT';
        }
        if (data['triggerCondition'] !== undefined) {
            _this.triggerCondition = data['triggerCondition'];
        }
        else {
            _this.triggerCondition = 'DEFAULT';
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions']);
        }
        if (data['intendedReplacesOrderID'] !== undefined) {
            _this.intendedReplacesOrderID = data['intendedReplacesOrderID'];
        }
        if (data['rejectReason'] !== undefined) {
            _this.rejectReason = data['rejectReason'];
        }
        return _this;
    }
    return LimitOrderRejectTransaction;
}(base_1.Definition));
exports.LimitOrderRejectTransaction = LimitOrderRejectTransaction;
exports.StopOrderTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "STOP_ORDER" in a StopOrderTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('instrument', 'Instrument', "The Stop Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the Stop Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the Stop Order. The Stop Order will only be filled by a market price that is equal to or worse than this price.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('priceBound', 'Price Bound', 'The worst market price that may be used to fill this Stop Order. If the market gaps and crosses through both the price and the priceBound, the Stop Order will be cancelled instead of being filled.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the Stop Order.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the Stop Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('reason', 'Reason', 'The reason that the Stop Order was initiated', 'primitive', 'transaction.StopOrderReason'),
    new base_1.Property('clientExtensions', 'Order Client Extensions', 'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', 'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', 'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', 'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('replacesOrderID', 'Replaces Order ID', 'The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).', 'primitive', 'order.OrderID'),
    new base_1.Property('cancellingTransactionID', 'Replaces Order Cancel Transaction ID', 'The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).', 'primitive', 'transaction.TransactionID'),
];
var StopOrderTransaction = /** @class */ (function (_super) {
    __extends(StopOrderTransaction, _super);
    function StopOrderTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Create Stop Order {id} ({reason}): {units} of {instrument} @ {price}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.StopOrderTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'STOP_ORDER';
        }
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['priceBound'] !== undefined) {
            _this.priceBound = data['priceBound'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['positionFill'] !== undefined) {
            _this.positionFill = data['positionFill'];
        }
        else {
            _this.positionFill = 'DEFAULT';
        }
        if (data['triggerCondition'] !== undefined) {
            _this.triggerCondition = data['triggerCondition'];
        }
        else {
            _this.triggerCondition = 'DEFAULT';
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions']);
        }
        if (data['replacesOrderID'] !== undefined) {
            _this.replacesOrderID = data['replacesOrderID'];
        }
        if (data['cancellingTransactionID'] !== undefined) {
            _this.cancellingTransactionID = data['cancellingTransactionID'];
        }
        return _this;
    }
    return StopOrderTransaction;
}(base_1.Definition));
exports.StopOrderTransaction = StopOrderTransaction;
exports.StopOrderRejectTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "STOP_ORDER_REJECT" in a StopOrderRejectTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('instrument', 'Instrument', "The Stop Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the Stop Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the Stop Order. The Stop Order will only be filled by a market price that is equal to or worse than this price.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('priceBound', 'Price Bound', 'The worst market price that may be used to fill this Stop Order. If the market gaps and crosses through both the price and the priceBound, the Stop Order will be cancelled instead of being filled.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the Stop Order.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the Stop Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('reason', 'Reason', 'The reason that the Stop Order was initiated', 'primitive', 'transaction.StopOrderReason'),
    new base_1.Property('clientExtensions', 'Order Client Extensions', 'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', 'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', 'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', 'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('intendedReplacesOrderID', 'Order ID to Replace', 'The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).', 'primitive', 'order.OrderID'),
    new base_1.Property('rejectReason', 'Reject Reason', 'The reason that the Reject Transaction was created', 'primitive', 'transaction.TransactionRejectReason'),
];
var StopOrderRejectTransaction = /** @class */ (function (_super) {
    __extends(StopOrderRejectTransaction, _super);
    function StopOrderRejectTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Reject Stop Order ({reason}): {units} of {instrument} @ {price}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.StopOrderRejectTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'STOP_ORDER_REJECT';
        }
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['priceBound'] !== undefined) {
            _this.priceBound = data['priceBound'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['positionFill'] !== undefined) {
            _this.positionFill = data['positionFill'];
        }
        else {
            _this.positionFill = 'DEFAULT';
        }
        if (data['triggerCondition'] !== undefined) {
            _this.triggerCondition = data['triggerCondition'];
        }
        else {
            _this.triggerCondition = 'DEFAULT';
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions']);
        }
        if (data['intendedReplacesOrderID'] !== undefined) {
            _this.intendedReplacesOrderID = data['intendedReplacesOrderID'];
        }
        if (data['rejectReason'] !== undefined) {
            _this.rejectReason = data['rejectReason'];
        }
        return _this;
    }
    return StopOrderRejectTransaction;
}(base_1.Definition));
exports.StopOrderRejectTransaction = StopOrderRejectTransaction;
exports.MarketIfTouchedOrderTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "MARKET_IF_TOUCHED_ORDER" in a MarketIfTouchedOrderTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('instrument', 'Instrument', "The MarketIfTouched Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the MarketIfTouched Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Price', "The price threshold specified for the MarketIfTouched Order. The MarketIfTouched Order will only be filled by a market price that crosses this price from the direction of the market price at the time when the Order was created (the initialMarketPrice). Depending on the value of the Order's price and initialMarketPrice, the MarketIfTouchedOrder will behave like a Limit or a Stop Order.", 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('priceBound', 'Price Value', 'The worst market price that may be used to fill this MarketIfTouched Order.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the MarketIfTouched Order. Restricted to "GTC", "GFD" and "GTD" for MarketIfTouched Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the MarketIfTouched Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('reason', 'Reason', 'The reason that the Market-if-touched Order was initiated', 'primitive', 'transaction.MarketIfTouchedOrderReason'),
    new base_1.Property('clientExtensions', 'Order Client Extensions', 'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', 'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', 'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', 'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('replacesOrderID', 'Replaces Order ID', 'The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).', 'primitive', 'order.OrderID'),
    new base_1.Property('cancellingTransactionID', 'Replaces Order Cancel Transaction ID', 'The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).', 'primitive', 'transaction.TransactionID'),
];
var MarketIfTouchedOrderTransaction = /** @class */ (function (_super) {
    __extends(MarketIfTouchedOrderTransaction, _super);
    function MarketIfTouchedOrderTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Create MIT Order {id} ({reason}): {units} of {instrument} @ {price}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.MarketIfTouchedOrderTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'MARKET_IF_TOUCHED_ORDER';
        }
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['priceBound'] !== undefined) {
            _this.priceBound = data['priceBound'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['positionFill'] !== undefined) {
            _this.positionFill = data['positionFill'];
        }
        else {
            _this.positionFill = 'DEFAULT';
        }
        if (data['triggerCondition'] !== undefined) {
            _this.triggerCondition = data['triggerCondition'];
        }
        else {
            _this.triggerCondition = 'DEFAULT';
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions']);
        }
        if (data['replacesOrderID'] !== undefined) {
            _this.replacesOrderID = data['replacesOrderID'];
        }
        if (data['cancellingTransactionID'] !== undefined) {
            _this.cancellingTransactionID = data['cancellingTransactionID'];
        }
        return _this;
    }
    return MarketIfTouchedOrderTransaction;
}(base_1.Definition));
exports.MarketIfTouchedOrderTransaction = MarketIfTouchedOrderTransaction;
exports.MarketIfTouchedOrderRejectTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "MARKET_IF_TOUCHED_ORDER_REJECT" in a MarketIfTouchedOrderRejectTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('instrument', 'Instrument', "The MarketIfTouched Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the MarketIfTouched Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Price', "The price threshold specified for the MarketIfTouched Order. The MarketIfTouched Order will only be filled by a market price that crosses this price from the direction of the market price at the time when the Order was created (the initialMarketPrice). Depending on the value of the Order's price and initialMarketPrice, the MarketIfTouchedOrder will behave like a Limit or a Stop Order.", 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('priceBound', 'Price Value', 'The worst market price that may be used to fill this MarketIfTouched Order.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the MarketIfTouched Order. Restricted to "GTC", "GFD" and "GTD" for MarketIfTouched Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the MarketIfTouched Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('reason', 'Reason', 'The reason that the Market-if-touched Order was initiated', 'primitive', 'transaction.MarketIfTouchedOrderReason'),
    new base_1.Property('clientExtensions', 'Order Client Extensions', 'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', 'The specification of the Take Profit Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', 'The specification of the Stop Loss Order that should be created for a Trade opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', 'The specification of the Trailing Stop Loss Order that should be created for a Trade that is opened when the Order is filled (if such a Trade is created).', 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created).  Do not set, modify, delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('intendedReplacesOrderID', 'Order ID to Replace', 'The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).', 'primitive', 'order.OrderID'),
    new base_1.Property('rejectReason', 'Reject Reason', 'The reason that the Reject Transaction was created', 'primitive', 'transaction.TransactionRejectReason'),
];
var MarketIfTouchedOrderRejectTransaction = /** @class */ (function (_super) {
    __extends(MarketIfTouchedOrderRejectTransaction, _super);
    function MarketIfTouchedOrderRejectTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Reject MIT Order ({reason}): {units} of {instrument} @ {price}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.MarketIfTouchedOrderRejectTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'MARKET_IF_TOUCHED_ORDER_REJECT';
        }
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['priceBound'] !== undefined) {
            _this.priceBound = data['priceBound'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['positionFill'] !== undefined) {
            _this.positionFill = data['positionFill'];
        }
        else {
            _this.positionFill = 'DEFAULT';
        }
        if (data['triggerCondition'] !== undefined) {
            _this.triggerCondition = data['triggerCondition'];
        }
        else {
            _this.triggerCondition = 'DEFAULT';
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new ClientExtensions(data['tradeClientExtensions']);
        }
        if (data['intendedReplacesOrderID'] !== undefined) {
            _this.intendedReplacesOrderID = data['intendedReplacesOrderID'];
        }
        if (data['rejectReason'] !== undefined) {
            _this.rejectReason = data['rejectReason'];
        }
        return _this;
    }
    return MarketIfTouchedOrderRejectTransaction;
}(base_1.Definition));
exports.MarketIfTouchedOrderRejectTransaction = MarketIfTouchedOrderRejectTransaction;
exports.TakeProfitOrderTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "TAKE_PROFIT_ORDER" in a TakeProfitOrderTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade to close when the price threshold is breached.', 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', 'The client ID of the Trade to be closed when the price threshold is breached.', 'primitive', 'transaction.ClientID'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the TakeProfit Order. The associated Trade will be closed by a market price that is equal to or better than this threshold.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the TakeProfit Order. Restricted to "GTC", "GFD" and "GTD" for TakeProfit Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the TakeProfit Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('reason', 'Reason', 'The reason that the Take Profit Order was initiated', 'primitive', 'transaction.TakeProfitOrderReason'),
    new base_1.Property('clientExtensions', 'Order Client Extensions', 'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('orderFillTransactionID', 'Order Fill Transaction ID', 'The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('replacesOrderID', 'Replaces Order ID', 'The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).', 'primitive', 'order.OrderID'),
    new base_1.Property('cancellingTransactionID', 'Replaces Order Cancel Transaction ID', 'The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).', 'primitive', 'transaction.TransactionID'),
];
var TakeProfitOrderTransaction = /** @class */ (function (_super) {
    __extends(TakeProfitOrderTransaction, _super);
    function TakeProfitOrderTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat =
            'Create Take Profit Order {id} ({reason}): Close Trade {tradeID} @ {price}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.TakeProfitOrderTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'TAKE_PROFIT_ORDER';
        }
        if (data['tradeID'] !== undefined) {
            _this.tradeID = data['tradeID'];
        }
        if (data['clientTradeID'] !== undefined) {
            _this.clientTradeID = data['clientTradeID'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['triggerCondition'] !== undefined) {
            _this.triggerCondition = data['triggerCondition'];
        }
        else {
            _this.triggerCondition = 'DEFAULT';
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['orderFillTransactionID'] !== undefined) {
            _this.orderFillTransactionID = data['orderFillTransactionID'];
        }
        if (data['replacesOrderID'] !== undefined) {
            _this.replacesOrderID = data['replacesOrderID'];
        }
        if (data['cancellingTransactionID'] !== undefined) {
            _this.cancellingTransactionID = data['cancellingTransactionID'];
        }
        return _this;
    }
    return TakeProfitOrderTransaction;
}(base_1.Definition));
exports.TakeProfitOrderTransaction = TakeProfitOrderTransaction;
exports.TakeProfitOrderRejectTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "TAKE_PROFIT_ORDER_REJECT" in a TakeProfitOrderRejectTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade to close when the price threshold is breached.', 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', 'The client ID of the Trade to be closed when the price threshold is breached.', 'primitive', 'transaction.ClientID'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the TakeProfit Order. The associated Trade will be closed by a market price that is equal to or better than this threshold.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the TakeProfit Order. Restricted to "GTC", "GFD" and "GTD" for TakeProfit Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the TakeProfit Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('reason', 'Reason', 'The reason that the Take Profit Order was initiated', 'primitive', 'transaction.TakeProfitOrderReason'),
    new base_1.Property('clientExtensions', 'Order Client Extensions', 'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('orderFillTransactionID', 'Order Fill Transaction ID', 'The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('intendedReplacesOrderID', 'Order ID to Replace', 'The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).', 'primitive', 'order.OrderID'),
    new base_1.Property('rejectReason', 'Reject Reason', 'The reason that the Reject Transaction was created', 'primitive', 'transaction.TransactionRejectReason'),
];
var TakeProfitOrderRejectTransaction = /** @class */ (function (_super) {
    __extends(TakeProfitOrderRejectTransaction, _super);
    function TakeProfitOrderRejectTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Reject Take Profit Order ({reason}): Close Trade {tradeID} @ {price}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.TakeProfitOrderRejectTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'TAKE_PROFIT_ORDER_REJECT';
        }
        if (data['tradeID'] !== undefined) {
            _this.tradeID = data['tradeID'];
        }
        if (data['clientTradeID'] !== undefined) {
            _this.clientTradeID = data['clientTradeID'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['triggerCondition'] !== undefined) {
            _this.triggerCondition = data['triggerCondition'];
        }
        else {
            _this.triggerCondition = 'DEFAULT';
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['orderFillTransactionID'] !== undefined) {
            _this.orderFillTransactionID = data['orderFillTransactionID'];
        }
        if (data['intendedReplacesOrderID'] !== undefined) {
            _this.intendedReplacesOrderID = data['intendedReplacesOrderID'];
        }
        if (data['rejectReason'] !== undefined) {
            _this.rejectReason = data['rejectReason'];
        }
        return _this;
    }
    return TakeProfitOrderRejectTransaction;
}(base_1.Definition));
exports.TakeProfitOrderRejectTransaction = TakeProfitOrderRejectTransaction;
exports.StopLossOrderTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "STOP_LOSS_ORDER" in a StopLossOrderTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade to close when the price threshold is breached.', 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', 'The client ID of the Trade to be closed when the price threshold is breached.', 'primitive', 'transaction.ClientID'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the Stop Loss Order. If the guaranteed flag is false, the associated Trade will be closed by a market price that is equal to or worse than this threshold. If the flag is true the associated Trade will be closed at this price.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('distance', 'Price Distance', "Specifies the distance (in price units) from the Account's current price to use as the Stop Loss Order price. If the Trade is short the Instrument's bid price is used, and for long Trades the ask is used.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the StopLoss Order. Restricted to "GTC", "GFD" and "GTD" for StopLoss Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('guaranteed', 'Guaranteed', 'Flag indicating that the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.', 'primitive', 'boolean'),
    new base_1.Property('guaranteedExecutionPremium', 'Guaranteed Execution Premium', 'The fee that will be charged if the Stop Loss Order is guaranteed and the Order is filled at the guaranteed price. The value is determined at Order creation time. It is in price units and is charged for each unit of the Trade.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('reason', 'Reason', 'The reason that the Stop Loss Order was initiated', 'primitive', 'transaction.StopLossOrderReason'),
    new base_1.Property('clientExtensions', 'Order Client Extensions', 'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('orderFillTransactionID', 'Order Fill Transaction ID', 'The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('replacesOrderID', 'Replaces Order ID', 'The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).', 'primitive', 'order.OrderID'),
    new base_1.Property('cancellingTransactionID', 'Replaces Order Cancel Transaction ID', 'The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).', 'primitive', 'transaction.TransactionID'),
];
var StopLossOrderTransaction = /** @class */ (function (_super) {
    __extends(StopLossOrderTransaction, _super);
    function StopLossOrderTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Create Stop Loss Order {id} ({reason}): Close Trade {tradeID} @ {price}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.StopLossOrderTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'STOP_LOSS_ORDER';
        }
        if (data['tradeID'] !== undefined) {
            _this.tradeID = data['tradeID'];
        }
        if (data['clientTradeID'] !== undefined) {
            _this.clientTradeID = data['clientTradeID'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['distance'] !== undefined) {
            _this.distance = data['distance'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['triggerCondition'] !== undefined) {
            _this.triggerCondition = data['triggerCondition'];
        }
        else {
            _this.triggerCondition = 'DEFAULT';
        }
        if (data['guaranteed'] !== undefined) {
            _this.guaranteed = data['guaranteed'];
        }
        if (data['guaranteedExecutionPremium'] !== undefined) {
            _this.guaranteedExecutionPremium = data['guaranteedExecutionPremium'];
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['orderFillTransactionID'] !== undefined) {
            _this.orderFillTransactionID = data['orderFillTransactionID'];
        }
        if (data['replacesOrderID'] !== undefined) {
            _this.replacesOrderID = data['replacesOrderID'];
        }
        if (data['cancellingTransactionID'] !== undefined) {
            _this.cancellingTransactionID = data['cancellingTransactionID'];
        }
        return _this;
    }
    return StopLossOrderTransaction;
}(base_1.Definition));
exports.StopLossOrderTransaction = StopLossOrderTransaction;
exports.StopLossOrderRejectTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "STOP_LOSS_ORDER_REJECT" in a StopLossOrderRejectTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade to close when the price threshold is breached.', 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', 'The client ID of the Trade to be closed when the price threshold is breached.', 'primitive', 'transaction.ClientID'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the Stop Loss Order. If the guaranteed flag is false, the associated Trade will be closed by a market price that is equal to or worse than this threshold. If the flag is true the associated Trade will be closed at this price.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('distance', 'Price Distance', "Specifies the distance (in price units) from the Account's current price to use as the Stop Loss Order price. If the Trade is short the Instrument's bid price is used, and for long Trades the ask is used.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the StopLoss Order. Restricted to "GTC", "GFD" and "GTD" for StopLoss Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('guaranteed', 'Guaranteed', 'Flag indicating that the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.', 'primitive', 'boolean'),
    new base_1.Property('reason', 'Reason', 'The reason that the Stop Loss Order was initiated', 'primitive', 'transaction.StopLossOrderReason'),
    new base_1.Property('clientExtensions', 'Order Client Extensions', 'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('orderFillTransactionID', 'Order Fill Transaction ID', 'The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('intendedReplacesOrderID', 'Order ID to Replace', 'The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).', 'primitive', 'order.OrderID'),
    new base_1.Property('rejectReason', 'Reject Reason', 'The reason that the Reject Transaction was created', 'primitive', 'transaction.TransactionRejectReason'),
];
var StopLossOrderRejectTransaction = /** @class */ (function (_super) {
    __extends(StopLossOrderRejectTransaction, _super);
    function StopLossOrderRejectTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Reject Stop Loss Order ({reason}): Close Trade {tradeID} @ {price}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.StopLossOrderRejectTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'STOP_LOSS_ORDER_REJECT';
        }
        if (data['tradeID'] !== undefined) {
            _this.tradeID = data['tradeID'];
        }
        if (data['clientTradeID'] !== undefined) {
            _this.clientTradeID = data['clientTradeID'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['distance'] !== undefined) {
            _this.distance = data['distance'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['triggerCondition'] !== undefined) {
            _this.triggerCondition = data['triggerCondition'];
        }
        else {
            _this.triggerCondition = 'DEFAULT';
        }
        if (data['guaranteed'] !== undefined) {
            _this.guaranteed = data['guaranteed'];
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['orderFillTransactionID'] !== undefined) {
            _this.orderFillTransactionID = data['orderFillTransactionID'];
        }
        if (data['intendedReplacesOrderID'] !== undefined) {
            _this.intendedReplacesOrderID = data['intendedReplacesOrderID'];
        }
        if (data['rejectReason'] !== undefined) {
            _this.rejectReason = data['rejectReason'];
        }
        return _this;
    }
    return StopLossOrderRejectTransaction;
}(base_1.Definition));
exports.StopLossOrderRejectTransaction = StopLossOrderRejectTransaction;
exports.TrailingStopLossOrderTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "TRAILING_STOP_LOSS_ORDER" in a TrailingStopLossOrderTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade to close when the price threshold is breached.', 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', 'The client ID of the Trade to be closed when the price threshold is breached.', 'primitive', 'transaction.ClientID'),
    new base_1.Property('distance', 'Price Distance', 'The price distance (in price units) specified for the TrailingStopLoss Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the TrailingStopLoss Order. Restricted to "GTC", "GFD" and "GTD" for TrailingStopLoss Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('reason', 'Reason', 'The reason that the Trailing Stop Loss Order was initiated', 'primitive', 'transaction.TrailingStopLossOrderReason'),
    new base_1.Property('clientExtensions', 'Order Client Extensions', 'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('orderFillTransactionID', 'Order Fill Transaction ID', 'The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('replacesOrderID', 'Replaces Order ID', 'The ID of the Order that this Order replaces (only provided if this Order replaces an existing Order).', 'primitive', 'order.OrderID'),
    new base_1.Property('cancellingTransactionID', 'Replaces Order Cancel Transaction ID', 'The ID of the Transaction that cancels the replaced Order (only provided if this Order replaces an existing Order).', 'primitive', 'transaction.TransactionID'),
];
var TrailingStopLossOrderTransaction = /** @class */ (function (_super) {
    __extends(TrailingStopLossOrderTransaction, _super);
    function TrailingStopLossOrderTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Create Trailing Stop Loss Order {id} ({reason}): Close Trade {tradeID}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.TrailingStopLossOrderTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'TRAILING_STOP_LOSS_ORDER';
        }
        if (data['tradeID'] !== undefined) {
            _this.tradeID = data['tradeID'];
        }
        if (data['clientTradeID'] !== undefined) {
            _this.clientTradeID = data['clientTradeID'];
        }
        if (data['distance'] !== undefined) {
            _this.distance = data['distance'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['triggerCondition'] !== undefined) {
            _this.triggerCondition = data['triggerCondition'];
        }
        else {
            _this.triggerCondition = 'DEFAULT';
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['orderFillTransactionID'] !== undefined) {
            _this.orderFillTransactionID = data['orderFillTransactionID'];
        }
        if (data['replacesOrderID'] !== undefined) {
            _this.replacesOrderID = data['replacesOrderID'];
        }
        if (data['cancellingTransactionID'] !== undefined) {
            _this.cancellingTransactionID = data['cancellingTransactionID'];
        }
        return _this;
    }
    return TrailingStopLossOrderTransaction;
}(base_1.Definition));
exports.TrailingStopLossOrderTransaction = TrailingStopLossOrderTransaction;
exports.TrailingStopLossOrderRejectTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "TRAILING_STOP_LOSS_ORDER_REJECT" in a TrailingStopLossOrderRejectTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade to close when the price threshold is breached.', 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', 'The client ID of the Trade to be closed when the price threshold is breached.', 'primitive', 'transaction.ClientID'),
    new base_1.Property('distance', 'Price Distance', 'The price distance (in price units) specified for the TrailingStopLoss Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the TrailingStopLoss Order. Restricted to "GTC", "GFD" and "GTD" for TrailingStopLoss Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('reason', 'Reason', 'The reason that the Trailing Stop Loss Order was initiated', 'primitive', 'transaction.TrailingStopLossOrderReason'),
    new base_1.Property('clientExtensions', 'Order Client Extensions', 'Client Extensions to add to the Order (only provided if the Order is being created with client extensions).', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('orderFillTransactionID', 'Order Fill Transaction ID', 'The ID of the OrderFill Transaction that caused this Order to be created (only provided if this Order was created automatically when another Order was filled).', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('intendedReplacesOrderID', 'Order ID to Replace', 'The ID of the Order that this Order was intended to replace (only provided if this Order was intended to replace an existing Order).', 'primitive', 'order.OrderID'),
    new base_1.Property('rejectReason', 'Reject Reason', 'The reason that the Reject Transaction was created', 'primitive', 'transaction.TransactionRejectReason'),
];
var TrailingStopLossOrderRejectTransaction = /** @class */ (function (_super) {
    __extends(TrailingStopLossOrderRejectTransaction, _super);
    function TrailingStopLossOrderRejectTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Reject Trailing Stop Loss Order ({reason}): Close Trade {tradeID}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.TrailingStopLossOrderRejectTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'TRAILING_STOP_LOSS_ORDER_REJECT';
        }
        if (data['tradeID'] !== undefined) {
            _this.tradeID = data['tradeID'];
        }
        if (data['clientTradeID'] !== undefined) {
            _this.clientTradeID = data['clientTradeID'];
        }
        if (data['distance'] !== undefined) {
            _this.distance = data['distance'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['triggerCondition'] !== undefined) {
            _this.triggerCondition = data['triggerCondition'];
        }
        else {
            _this.triggerCondition = 'DEFAULT';
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['orderFillTransactionID'] !== undefined) {
            _this.orderFillTransactionID = data['orderFillTransactionID'];
        }
        if (data['intendedReplacesOrderID'] !== undefined) {
            _this.intendedReplacesOrderID = data['intendedReplacesOrderID'];
        }
        if (data['rejectReason'] !== undefined) {
            _this.rejectReason = data['rejectReason'];
        }
        return _this;
    }
    return TrailingStopLossOrderRejectTransaction;
}(base_1.Definition));
exports.TrailingStopLossOrderRejectTransaction = TrailingStopLossOrderRejectTransaction;
exports.OrderFillTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "ORDER_FILL" for an OrderFillTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('orderID', 'Filled Order ID', 'The ID of the Order filled.', 'primitive', 'order.OrderID'),
    new base_1.Property('clientOrderID', 'Filled Client Order ID', 'The client Order ID of the Order filled (only provided if the client has assigned one).', 'primitive', 'transaction.ClientID'),
    new base_1.Property('instrument', 'Fill Instrument', "The name of the filled Order's instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Fill Units', 'The number of units filled by the OrderFill.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('gainQuoteHomeConversionFactor', 'Gain Quote Home Conversion Factor', "This is the conversion factor in effect for the Account at the time of the OrderFill for converting any gains realized in Instrument quote units into units of the Account's home currency.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('lossQuoteHomeConversionFactor', 'Loss Quote Home Conversion Factor', "This is the conversion factor in effect for the Account at the time of the OrderFill for converting any losses realized in Instrument quote units into units of the Account's home currency.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Fill Price', 'This field is now deprecated and should no longer be used. The individual tradesClosed, tradeReduced and tradeOpened fields contain the exact/official price each unit was filled at.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('fullVWAP', 'Full VWAP', "The price that all of the units of the OrderFill should have been filled at, in the absence of guaranteed price execution. This factors in the Account's current ClientPrice, used liquidity and the units of the OrderFill only. If no Trades were closed with their price clamped for guaranteed stop loss enforcement, then this value will match the price fields of each Trade opened, closed, and reduced, and they will all be the exact same.", 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('fullPrice', 'Price', 'The price in effect for the account at the time of the Order fill.', 'object', 'pricing.ClientPrice'),
    new base_1.Property('reason', 'Fill Reason', 'The reason that an Order was filled', 'primitive', 'transaction.OrderFillReason'),
    new base_1.Property('pl', 'Profit/Loss', 'The profit or loss incurred when the Order was filled.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('financing', 'Financing', 'The financing paid or collected when the Order was filled.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('commission', 'Commission', "The commission charged in the Account's home currency as a result of filling the Order. The commission is always represented as a positive quantity of the Account's home currency, however it reduces the balance in the Account.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('guaranteedExecutionFee', 'Guranteed Execution Fee', 'The total guaranteed execution fees charged for all Trades opened, closed or reduced with guaranteed Stop Loss Orders.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('accountBalance', 'Account Balance', "The Account's balance after the Order was filled.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('tradeOpened', 'Trade Opened', 'The Trade that was opened when the Order was filled (only provided if filling the Order resulted in a new Trade).', 'object', 'transaction.TradeOpen'),
    new base_1.Property('tradesClosed', 'Trades Closed', 'The Trades that were closed when the Order was filled (only provided if filling the Order resulted in a closing open Trades).', 'array_object', 'TradeReduce'),
    new base_1.Property('tradeReduced', 'Trade Reduced', 'The Trade that was reduced when the Order was filled (only provided if filling the Order resulted in reducing an open Trade).', 'object', 'transaction.TradeReduce'),
    new base_1.Property('halfSpreadCost', 'Half Spread Cost', 'The half spread cost for the OrderFill, which is the sum of the halfSpreadCost values in the tradeOpened, tradesClosed and tradeReduced fields. This can be a positive or negative value and is represented in the home currency of the Account.', 'primitive', 'primitives.AccountUnits'),
];
var OrderFillTransaction = /** @class */ (function (_super) {
    __extends(OrderFillTransaction, _super);
    function OrderFillTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Fill Order {orderID} ({reason}): {units} of {instrument} @ {price}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.OrderFillTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'ORDER_FILL';
        }
        if (data['orderID'] !== undefined) {
            _this.orderID = data['orderID'];
        }
        if (data['clientOrderID'] !== undefined) {
            _this.clientOrderID = data['clientOrderID'];
        }
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        if (data['gainQuoteHomeConversionFactor'] !== undefined) {
            _this.gainQuoteHomeConversionFactor = data['gainQuoteHomeConversionFactor'];
        }
        if (data['lossQuoteHomeConversionFactor'] !== undefined) {
            _this.lossQuoteHomeConversionFactor = data['lossQuoteHomeConversionFactor'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['fullVWAP'] !== undefined) {
            _this.fullVWAP = data['fullVWAP'];
        }
        if (data['fullPrice'] !== undefined) {
            _this.fullPrice = new pricing.ClientPrice(data['fullPrice']);
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['pl'] !== undefined) {
            _this.pl = data['pl'];
        }
        if (data['financing'] !== undefined) {
            _this.financing = data['financing'];
        }
        if (data['commission'] !== undefined) {
            _this.commission = data['commission'];
        }
        if (data['guaranteedExecutionFee'] !== undefined) {
            _this.guaranteedExecutionFee = data['guaranteedExecutionFee'];
        }
        if (data['accountBalance'] !== undefined) {
            _this.accountBalance = data['accountBalance'];
        }
        if (data['tradeOpened'] !== undefined) {
            _this.tradeOpened = new TradeOpen(data['tradeOpened']);
        }
        if (data['tradesClosed'] !== undefined) {
            _this.tradesClosed = data['tradesClosed'].map(function (x) { return new TradeReduce(x); });
        }
        if (data['tradeReduced'] !== undefined) {
            _this.tradeReduced = new TradeReduce(data['tradeReduced']);
        }
        if (data['halfSpreadCost'] !== undefined) {
            _this.halfSpreadCost = data['halfSpreadCost'];
        }
        return _this;
    }
    return OrderFillTransaction;
}(base_1.Definition));
exports.OrderFillTransaction = OrderFillTransaction;
exports.OrderCancelTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "ORDER_CANCEL" for an OrderCancelTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('orderID', 'Cancelled Order ID', 'The ID of the Order cancelled', 'primitive', 'order.OrderID'),
    new base_1.Property('clientOrderID', 'Cancelled Client Order ID', 'The client ID of the Order cancelled (only provided if the Order has a client Order ID).', 'primitive', 'order.OrderID'),
    new base_1.Property('reason', 'Cancel Reason', 'The reason that the Order was cancelled.', 'primitive', 'transaction.OrderCancelReason'),
    new base_1.Property('replacedByOrderID', 'Replaced By Order ID', 'The ID of the Order that replaced this Order (only provided if this Order was cancelled for replacement).', 'primitive', 'order.OrderID'),
];
var OrderCancelTransaction = /** @class */ (function (_super) {
    __extends(OrderCancelTransaction, _super);
    function OrderCancelTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Cancel Order {orderID}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.OrderCancelTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'ORDER_CANCEL';
        }
        if (data['orderID'] !== undefined) {
            _this.orderID = data['orderID'];
        }
        if (data['clientOrderID'] !== undefined) {
            _this.clientOrderID = data['clientOrderID'];
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['replacedByOrderID'] !== undefined) {
            _this.replacedByOrderID = data['replacedByOrderID'];
        }
        return _this;
    }
    return OrderCancelTransaction;
}(base_1.Definition));
exports.OrderCancelTransaction = OrderCancelTransaction;
exports.OrderCancelRejectTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "ORDER_CANCEL_REJECT" for an OrderCancelRejectTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('orderID', 'Order ID', 'The ID of the Order intended to be cancelled', 'primitive', 'order.OrderID'),
    new base_1.Property('clientOrderID', 'Client Order ID', 'The client ID of the Order intended to be cancelled (only provided if the Order has a client Order ID).', 'primitive', 'order.OrderID'),
    new base_1.Property('rejectReason', 'Reject Reason', 'The reason that the Reject Transaction was created', 'primitive', 'transaction.TransactionRejectReason'),
];
var OrderCancelRejectTransaction = /** @class */ (function (_super) {
    __extends(OrderCancelRejectTransaction, _super);
    function OrderCancelRejectTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Order Cancel Reject {orderID}';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.OrderCancelRejectTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'ORDER_CANCEL_REJECT';
        }
        if (data['orderID'] !== undefined) {
            _this.orderID = data['orderID'];
        }
        if (data['clientOrderID'] !== undefined) {
            _this.clientOrderID = data['clientOrderID'];
        }
        if (data['rejectReason'] !== undefined) {
            _this.rejectReason = data['rejectReason'];
        }
        return _this;
    }
    return OrderCancelRejectTransaction;
}(base_1.Definition));
exports.OrderCancelRejectTransaction = OrderCancelRejectTransaction;
exports.OrderClientExtensionsModifyTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "ORDER_CLIENT_EXTENSIONS_MODIFY" for a OrderClienteExtensionsModifyTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('orderID', 'Order ID', "The ID of the Order who's client extensions are to be modified.", 'primitive', 'order.OrderID'),
    new base_1.Property('clientOrderID', 'Client Order ID', "The original Client ID of the Order who's client extensions are to be modified.", 'primitive', 'transaction.ClientID'),
    new base_1.Property('clientExtensionsModify', 'Order Extensions', 'The new Client Extensions for the Order.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('tradeClientExtensionsModify', 'Trade Extensions', "The new Client Extensions for the Order's Trade on fill.", 'object', 'transaction.ClientExtensions'),
];
var OrderClientExtensionsModifyTransaction = /** @class */ (function (_super) {
    __extends(OrderClientExtensionsModifyTransaction, _super);
    function OrderClientExtensionsModifyTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Modify Order {orderID} Client Extensions';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.OrderClientExtensionsModifyTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'ORDER_CLIENT_EXTENSIONS_MODIFY';
        }
        if (data['orderID'] !== undefined) {
            _this.orderID = data['orderID'];
        }
        if (data['clientOrderID'] !== undefined) {
            _this.clientOrderID = data['clientOrderID'];
        }
        if (data['clientExtensionsModify'] !== undefined) {
            _this.clientExtensionsModify = new ClientExtensions(data['clientExtensionsModify']);
        }
        if (data['tradeClientExtensionsModify'] !== undefined) {
            _this.tradeClientExtensionsModify = new ClientExtensions(data['tradeClientExtensionsModify']);
        }
        return _this;
    }
    return OrderClientExtensionsModifyTransaction;
}(base_1.Definition));
exports.OrderClientExtensionsModifyTransaction = OrderClientExtensionsModifyTransaction;
exports.OrderClientExtensionsModifyRejectTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT" for a OrderClientExtensionsModifyRejectTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('orderID', 'Order ID', "The ID of the Order who's client extensions are to be modified.", 'primitive', 'order.OrderID'),
    new base_1.Property('clientOrderID', 'Client Order ID', "The original Client ID of the Order who's client extensions are to be modified.", 'primitive', 'transaction.ClientID'),
    new base_1.Property('clientExtensionsModify', 'Order Extensions', 'The new Client Extensions for the Order.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('tradeClientExtensionsModify', 'Trade Extensions', "The new Client Extensions for the Order's Trade on fill.", 'object', 'transaction.ClientExtensions'),
    new base_1.Property('rejectReason', 'Reject Reason', 'The reason that the Reject Transaction was created', 'primitive', 'transaction.TransactionRejectReason'),
];
var OrderClientExtensionsModifyRejectTransaction = /** @class */ (function (_super) {
    __extends(OrderClientExtensionsModifyRejectTransaction, _super);
    function OrderClientExtensionsModifyRejectTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Reject Modify Order {orderID} Client Extensions';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.OrderClientExtensionsModifyRejectTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT';
        }
        if (data['orderID'] !== undefined) {
            _this.orderID = data['orderID'];
        }
        if (data['clientOrderID'] !== undefined) {
            _this.clientOrderID = data['clientOrderID'];
        }
        if (data['clientExtensionsModify'] !== undefined) {
            _this.clientExtensionsModify = new ClientExtensions(data['clientExtensionsModify']);
        }
        if (data['tradeClientExtensionsModify'] !== undefined) {
            _this.tradeClientExtensionsModify = new ClientExtensions(data['tradeClientExtensionsModify']);
        }
        if (data['rejectReason'] !== undefined) {
            _this.rejectReason = data['rejectReason'];
        }
        return _this;
    }
    return OrderClientExtensionsModifyRejectTransaction;
}(base_1.Definition));
exports.OrderClientExtensionsModifyRejectTransaction = OrderClientExtensionsModifyRejectTransaction;
exports.TradeClientExtensionsModifyTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "TRADE_CLIENT_EXTENSIONS_MODIFY" for a TradeClientExtensionsModifyTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('tradeID', 'Trade ID', "The ID of the Trade who's client extensions are to be modified.", 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', "The original Client ID of the Trade who's client extensions are to be modified.", 'primitive', 'transaction.ClientID'),
    new base_1.Property('tradeClientExtensionsModify', 'Extensions', 'The new Client Extensions for the Trade.', 'object', 'transaction.ClientExtensions'),
];
var TradeClientExtensionsModifyTransaction = /** @class */ (function (_super) {
    __extends(TradeClientExtensionsModifyTransaction, _super);
    function TradeClientExtensionsModifyTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Modify Trade {tradeID} Client Extensions';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.TradeClientExtensionsModifyTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'TRADE_CLIENT_EXTENSIONS_MODIFY';
        }
        if (data['tradeID'] !== undefined) {
            _this.tradeID = data['tradeID'];
        }
        if (data['clientTradeID'] !== undefined) {
            _this.clientTradeID = data['clientTradeID'];
        }
        if (data['tradeClientExtensionsModify'] !== undefined) {
            _this.tradeClientExtensionsModify = new ClientExtensions(data['tradeClientExtensionsModify']);
        }
        return _this;
    }
    return TradeClientExtensionsModifyTransaction;
}(base_1.Definition));
exports.TradeClientExtensionsModifyTransaction = TradeClientExtensionsModifyTransaction;
exports.TradeClientExtensionsModifyRejectTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT" for a TradeClientExtensionsModifyRejectTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('tradeID', 'Trade ID', "The ID of the Trade who's client extensions are to be modified.", 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', "The original Client ID of the Trade who's client extensions are to be modified.", 'primitive', 'transaction.ClientID'),
    new base_1.Property('tradeClientExtensionsModify', 'Extensions', 'The new Client Extensions for the Trade.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('rejectReason', 'Reject Reason', 'The reason that the Reject Transaction was created', 'primitive', 'transaction.TransactionRejectReason'),
];
var TradeClientExtensionsModifyRejectTransaction = /** @class */ (function (_super) {
    __extends(TradeClientExtensionsModifyRejectTransaction, _super);
    function TradeClientExtensionsModifyRejectTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Reject Modify Trade {tradeID} Client Extensions';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.TradeClientExtensionsModifyRejectTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'TRADE_CLIENT_EXTENSIONS_MODIFY_REJECT';
        }
        if (data['tradeID'] !== undefined) {
            _this.tradeID = data['tradeID'];
        }
        if (data['clientTradeID'] !== undefined) {
            _this.clientTradeID = data['clientTradeID'];
        }
        if (data['tradeClientExtensionsModify'] !== undefined) {
            _this.tradeClientExtensionsModify = new ClientExtensions(data['tradeClientExtensionsModify']);
        }
        if (data['rejectReason'] !== undefined) {
            _this.rejectReason = data['rejectReason'];
        }
        return _this;
    }
    return TradeClientExtensionsModifyRejectTransaction;
}(base_1.Definition));
exports.TradeClientExtensionsModifyRejectTransaction = TradeClientExtensionsModifyRejectTransaction;
exports.MarginCallEnterTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "MARGIN_CALL_ENTER" for an MarginCallEnterTransaction.', 'primitive', 'transaction.TransactionType'),
];
var MarginCallEnterTransaction = /** @class */ (function (_super) {
    __extends(MarginCallEnterTransaction, _super);
    function MarginCallEnterTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Margin Call Enter';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.MarginCallEnterTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'MARGIN_CALL_ENTER';
        }
        return _this;
    }
    return MarginCallEnterTransaction;
}(base_1.Definition));
exports.MarginCallEnterTransaction = MarginCallEnterTransaction;
exports.MarginCallExtendTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "MARGIN_CALL_EXTEND" for an MarginCallExtendTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('extensionNumber', 'Extension Number', "The number of the extensions to the Account's current margin call that have been applied. This value will be set to 1 for the first MarginCallExtend Transaction", 'primitive', 'integer'),
];
var MarginCallExtendTransaction = /** @class */ (function (_super) {
    __extends(MarginCallExtendTransaction, _super);
    function MarginCallExtendTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Margin Call Enter';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.MarginCallExtendTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'MARGIN_CALL_EXTEND';
        }
        if (data['extensionNumber'] !== undefined) {
            _this.extensionNumber = data['extensionNumber'];
        }
        return _this;
    }
    return MarginCallExtendTransaction;
}(base_1.Definition));
exports.MarginCallExtendTransaction = MarginCallExtendTransaction;
exports.MarginCallExitTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "MARGIN_CALL_EXIT" for an MarginCallExitTransaction.', 'primitive', 'transaction.TransactionType'),
];
var MarginCallExitTransaction = /** @class */ (function (_super) {
    __extends(MarginCallExitTransaction, _super);
    function MarginCallExitTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Margin Call Exit';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.MarginCallExitTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'MARGIN_CALL_EXIT';
        }
        return _this;
    }
    return MarginCallExitTransaction;
}(base_1.Definition));
exports.MarginCallExitTransaction = MarginCallExitTransaction;
exports.DelayedTradeClosureTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "DELAYED_TRADE_CLOSURE" for an DelayedTradeClosureTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('reason', 'Reason', 'The reason for the delayed trade closure', 'primitive', 'transaction.MarketOrderReason'),
    new base_1.Property('tradeIDs', "Trade ID's", "List of Trade ID's identifying the open trades that will be closed when their respective instruments become tradeable", 'primitive', 'trade.TradeID'),
];
var DelayedTradeClosureTransaction = /** @class */ (function (_super) {
    __extends(DelayedTradeClosureTransaction, _super);
    function DelayedTradeClosureTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Delayed Trade Closure';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.DelayedTradeClosureTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'DELAYED_TRADE_CLOSURE';
        }
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        if (data['tradeIDs'] !== undefined) {
            _this.tradeIDs = data['tradeIDs'];
        }
        return _this;
    }
    return DelayedTradeClosureTransaction;
}(base_1.Definition));
exports.DelayedTradeClosureTransaction = DelayedTradeClosureTransaction;
exports.DailyFinancingTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "DAILY_FINANCING" for a DailyFinancingTransaction.', 'primitive', 'transaction.TransactionType'),
    new base_1.Property('financing', 'Financing', 'The amount of financing paid/collected for the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('accountBalance', 'Account Balance', "The Account's balance after daily financing.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('accountFinancingMode', 'Account Financing Mode', 'The account financing mode at the time of the daily financing.', 'primitive', 'account.AccountFinancingMode'),
    new base_1.Property('positionFinancings', 'Per-Position Financing', 'The financing paid/collected for each Position in the Account.', 'array_object', 'PositionFinancing'),
];
var DailyFinancingTransaction = /** @class */ (function (_super) {
    __extends(DailyFinancingTransaction, _super);
    function DailyFinancingTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Daily Account Financing ({financing})';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.DailyFinancingTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'DAILY_FINANCING';
        }
        if (data['financing'] !== undefined) {
            _this.financing = data['financing'];
        }
        if (data['accountBalance'] !== undefined) {
            _this.accountBalance = data['accountBalance'];
        }
        if (data['accountFinancingMode'] !== undefined) {
            _this.accountFinancingMode = data['accountFinancingMode'];
        }
        if (data['positionFinancings'] !== undefined) {
            _this.positionFinancings = data['positionFinancings'].map(function (x) { return new PositionFinancing(x); });
        }
        return _this;
    }
    return DailyFinancingTransaction;
}(base_1.Definition));
exports.DailyFinancingTransaction = DailyFinancingTransaction;
exports.ResetResettablePLTransaction_Properties = [
    new base_1.Property('id', 'Transaction ID', "The Transaction's Identifier.", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'Time', 'The date/time when the Transaction was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('userID', 'User ID', 'The ID of the user that initiated the creation of the Transaction.', 'primitive', 'integer'),
    new base_1.Property('accountID', 'Account ID', 'The ID of the Account the Transaction was created for.', 'primitive', 'account.AccountID'),
    new base_1.Property('batchID', 'Transaction Batch ID', 'The ID of the "batch" that the Transaction belongs to. Transactions in the same batch are applied to the Account simultaneously.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('requestID', 'Request ID', 'The Request ID of the request which generated the transaction.', 'primitive', 'transaction.RequestID'),
    new base_1.Property('type', 'Type', 'The Type of the Transaction. Always set to "RESET_RESETTABLE_PL" for a ResetResettablePLTransaction.', 'primitive', 'transaction.TransactionType'),
];
var ResetResettablePLTransaction = /** @class */ (function (_super) {
    __extends(ResetResettablePLTransaction, _super);
    function ResetResettablePLTransaction(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'PL Reset';
        _this._nameFormat = 'Transaction {id}';
        _this._properties = exports.ResetResettablePLTransaction_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['accountID'] !== undefined) {
            _this.accountID = data['accountID'];
        }
        if (data['batchID'] !== undefined) {
            _this.batchID = data['batchID'];
        }
        if (data['requestID'] !== undefined) {
            _this.requestID = data['requestID'];
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'RESET_RESETTABLE_PL';
        }
        return _this;
    }
    return ResetResettablePLTransaction;
}(base_1.Definition));
exports.ResetResettablePLTransaction = ResetResettablePLTransaction;
exports.ClientExtensions_Properties = [
    new base_1.Property('id', 'Client ID', 'The Client ID of the Order/Trade', 'primitive', 'transaction.ClientID'),
    new base_1.Property('tag', 'Tag', 'A tag associated with the Order/Trade', 'primitive', 'transaction.ClientTag'),
    new base_1.Property('comment', 'Comment', 'A comment associated with the Order/Trade', 'primitive', 'transaction.ClientComment'),
];
var ClientExtensions = /** @class */ (function (_super) {
    __extends(ClientExtensions, _super);
    function ClientExtensions(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.ClientExtensions_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['tag'] !== undefined) {
            _this.tag = data['tag'];
        }
        if (data['comment'] !== undefined) {
            _this.comment = data['comment'];
        }
        return _this;
    }
    return ClientExtensions;
}(base_1.Definition));
exports.ClientExtensions = ClientExtensions;
exports.TakeProfitDetails_Properties = [
    new base_1.Property('price', 'Price', 'The price that the Take Profit Order will be triggered at. Only one of the price and distance fields may be specified.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time in force for the created Take Profit Order. This may only be GTC, GTD or GFD.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date when the Take Profit Order will be cancelled on if timeInForce is GTD.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The Client Extensions to add to the Take Profit Order when created.', 'object', 'transaction.ClientExtensions'),
];
var TakeProfitDetails = /** @class */ (function (_super) {
    __extends(TakeProfitDetails, _super);
    function TakeProfitDetails(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.TakeProfitDetails_Properties;
        data = data || {};
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        return _this;
    }
    return TakeProfitDetails;
}(base_1.Definition));
exports.TakeProfitDetails = TakeProfitDetails;
exports.StopLossDetails_Properties = [
    new base_1.Property('price', 'Price', 'The price that the Stop Loss Order will be triggered at. Only one of the price and distance fields may be specified.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('distance', 'Price Distance', "Specifies the distance (in price units) from the Trade's open price to use as the Stop Loss Order price. Only one of the distance and price fields may be specified.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time in force for the created Stop Loss Order. This may only be GTC, GTD or GFD.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date when the Stop Loss Order will be cancelled on if timeInForce is GTD.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The Client Extensions to add to the Stop Loss Order when created.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('guaranteed', 'Guaranteed', 'Flag indicating that the price for the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.', 'primitive', 'boolean'),
];
var StopLossDetails = /** @class */ (function (_super) {
    __extends(StopLossDetails, _super);
    function StopLossDetails(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.StopLossDetails_Properties;
        data = data || {};
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['distance'] !== undefined) {
            _this.distance = data['distance'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['guaranteed'] !== undefined) {
            _this.guaranteed = data['guaranteed'];
        }
        return _this;
    }
    return StopLossDetails;
}(base_1.Definition));
exports.StopLossDetails = StopLossDetails;
exports.TrailingStopLossDetails_Properties = [
    new base_1.Property('distance', 'Trailing Price Distance', "The distance (in price units) from the Trade's fill price that the Trailing Stop Loss Order will be triggered at.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time in force for the created Trailing Stop Loss Order. This may only be GTC, GTD or GFD.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date when the Trailing Stop Loss Order will be cancelled on if timeInForce is GTD.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The Client Extensions to add to the Trailing Stop Loss Order when created.', 'object', 'transaction.ClientExtensions'),
];
var TrailingStopLossDetails = /** @class */ (function (_super) {
    __extends(TrailingStopLossDetails, _super);
    function TrailingStopLossDetails(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.TrailingStopLossDetails_Properties;
        data = data || {};
        if (data['distance'] !== undefined) {
            _this.distance = data['distance'];
        }
        if (data['timeInForce'] !== undefined) {
            _this.timeInForce = data['timeInForce'];
        }
        else {
            _this.timeInForce = 'GTC';
        }
        if (data['gtdTime'] !== undefined) {
            _this.gtdTime = data['gtdTime'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        return _this;
    }
    return TrailingStopLossDetails;
}(base_1.Definition));
exports.TrailingStopLossDetails = TrailingStopLossDetails;
exports.TradeOpen_Properties = [
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade that was opened', 'primitive', 'trade.TradeID'),
    new base_1.Property('units', 'Amount', 'The number of units opened by the Trade', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Units Opened Price', 'The average price that the units were opened at.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('guaranteedExecutionFee', 'Guranteed Execution Fee', 'This is the fee charged for opening the trade if it has a guaranteed Stop Loss Order attached to it.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions for the newly opened Trade', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('halfSpreadCost', 'Half Spread Cost', 'The half spread cost for the trade open. This can be a positive or negative value and is represented in the home currency of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('initialMarginRequired', 'Initial Margin Required', "The margin required at the time the Trade was created. Note, this is the 'pure' margin required, it is not the 'effective' margin used that factors in the trade risk if a GSLO is attached to the trade.", 'primitive', 'primitives.AccountUnits'),
];
var TradeOpen = /** @class */ (function (_super) {
    __extends(TradeOpen, _super);
    function TradeOpen(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.TradeOpen_Properties;
        data = data || {};
        if (data['tradeID'] !== undefined) {
            _this.tradeID = data['tradeID'];
        }
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['guaranteedExecutionFee'] !== undefined) {
            _this.guaranteedExecutionFee = data['guaranteedExecutionFee'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new ClientExtensions(data['clientExtensions']);
        }
        if (data['halfSpreadCost'] !== undefined) {
            _this.halfSpreadCost = data['halfSpreadCost'];
        }
        if (data['initialMarginRequired'] !== undefined) {
            _this.initialMarginRequired = data['initialMarginRequired'];
        }
        return _this;
    }
    return TradeOpen;
}(base_1.Definition));
exports.TradeOpen = TradeOpen;
exports.TradeReduce_Properties = [
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade that was reduced or closed', 'primitive', 'trade.TradeID'),
    new base_1.Property('units', 'Amount', 'The number of units that the Trade was reduced by', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Units Closed Price', 'The average price that the units were closed at. This price may be clamped for guaranteed Stop Loss Orders.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('realizedPL', 'Profit/Loss', 'The PL realized when reducing the Trade', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('financing', 'Financing', 'The financing paid/collected when reducing the Trade', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('guaranteedExecutionFee', 'Guranteed Execution Fee', 'This is the fee that is charged for closing the Trade if it has a guaranteed Stop Loss Order attached to it.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('halfSpreadCost', 'Half Spread Cost', 'The half spread cost for the trade reduce/close. This can be a positive or negative value and is represented in the home currency of the Account.', 'primitive', 'primitives.AccountUnits'),
];
var TradeReduce = /** @class */ (function (_super) {
    __extends(TradeReduce, _super);
    function TradeReduce(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.TradeReduce_Properties;
        data = data || {};
        if (data['tradeID'] !== undefined) {
            _this.tradeID = data['tradeID'];
        }
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['realizedPL'] !== undefined) {
            _this.realizedPL = data['realizedPL'];
        }
        if (data['financing'] !== undefined) {
            _this.financing = data['financing'];
        }
        if (data['guaranteedExecutionFee'] !== undefined) {
            _this.guaranteedExecutionFee = data['guaranteedExecutionFee'];
        }
        if (data['halfSpreadCost'] !== undefined) {
            _this.halfSpreadCost = data['halfSpreadCost'];
        }
        return _this;
    }
    return TradeReduce;
}(base_1.Definition));
exports.TradeReduce = TradeReduce;
exports.MarketOrderTradeClose_Properties = [
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade requested to be closed', 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', 'The client ID of the Trade requested to be closed', 'primitive', 'string'),
    new base_1.Property('units', 'Amount', 'Indication of how much of the Trade to close. Either "ALL", or a DecimalNumber reflection a partial close of the Trade.', 'primitive', 'string'),
];
var MarketOrderTradeClose = /** @class */ (function (_super) {
    __extends(MarketOrderTradeClose, _super);
    function MarketOrderTradeClose(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.MarketOrderTradeClose_Properties;
        data = data || {};
        if (data['tradeID'] !== undefined) {
            _this.tradeID = data['tradeID'];
        }
        if (data['clientTradeID'] !== undefined) {
            _this.clientTradeID = data['clientTradeID'];
        }
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        return _this;
    }
    return MarketOrderTradeClose;
}(base_1.Definition));
exports.MarketOrderTradeClose = MarketOrderTradeClose;
exports.MarketOrderMarginCloseout_Properties = [
    new base_1.Property('reason', 'Reason', 'The reason the Market Order was created to perform a margin closeout', 'primitive', 'transaction.MarketOrderMarginCloseoutReason'),
];
var MarketOrderMarginCloseout = /** @class */ (function (_super) {
    __extends(MarketOrderMarginCloseout, _super);
    function MarketOrderMarginCloseout(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.MarketOrderMarginCloseout_Properties;
        data = data || {};
        if (data['reason'] !== undefined) {
            _this.reason = data['reason'];
        }
        return _this;
    }
    return MarketOrderMarginCloseout;
}(base_1.Definition));
exports.MarketOrderMarginCloseout = MarketOrderMarginCloseout;
exports.MarketOrderDelayedTradeClose_Properties = [
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade being closed', 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', 'The Client ID of the Trade being closed', 'primitive', 'trade.TradeID'),
    new base_1.Property('sourceTransactionID', 'Source Transaction ID', 'The Transaction ID of the DelayedTradeClosure transaction to which this Delayed Trade Close belongs to', 'primitive', 'transaction.TransactionID'),
];
var MarketOrderDelayedTradeClose = /** @class */ (function (_super) {
    __extends(MarketOrderDelayedTradeClose, _super);
    function MarketOrderDelayedTradeClose(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.MarketOrderDelayedTradeClose_Properties;
        data = data || {};
        if (data['tradeID'] !== undefined) {
            _this.tradeID = data['tradeID'];
        }
        if (data['clientTradeID'] !== undefined) {
            _this.clientTradeID = data['clientTradeID'];
        }
        if (data['sourceTransactionID'] !== undefined) {
            _this.sourceTransactionID = data['sourceTransactionID'];
        }
        return _this;
    }
    return MarketOrderDelayedTradeClose;
}(base_1.Definition));
exports.MarketOrderDelayedTradeClose = MarketOrderDelayedTradeClose;
exports.MarketOrderPositionCloseout_Properties = [
    new base_1.Property('instrument', 'Instrument', 'The instrument of the Position being closed out.', 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'Indication of how much of the Position to close. Either "ALL", or a DecimalNumber reflection a partial close of the Trade. The DecimalNumber must always be positive, and represent a number that doesn\'t exceed the absolute size of the Position.', 'primitive', 'string'),
];
var MarketOrderPositionCloseout = /** @class */ (function (_super) {
    __extends(MarketOrderPositionCloseout, _super);
    function MarketOrderPositionCloseout(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.MarketOrderPositionCloseout_Properties;
        data = data || {};
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['units'] !== undefined) {
            _this.units = data['units'];
        }
        return _this;
    }
    return MarketOrderPositionCloseout;
}(base_1.Definition));
exports.MarketOrderPositionCloseout = MarketOrderPositionCloseout;
exports.LiquidityRegenerationSchedule_Properties = [
    new base_1.Property('steps', 'Steps', 'The steps in the Liquidity Regeneration Schedule', 'array_object', 'LiquidityRegenerationScheduleStep'),
];
var LiquidityRegenerationSchedule = /** @class */ (function (_super) {
    __extends(LiquidityRegenerationSchedule, _super);
    function LiquidityRegenerationSchedule(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.LiquidityRegenerationSchedule_Properties;
        data = data || {};
        if (data['steps'] !== undefined) {
            _this.steps = data['steps'].map(function (x) { return new LiquidityRegenerationScheduleStep(x); });
        }
        return _this;
    }
    return LiquidityRegenerationSchedule;
}(base_1.Definition));
exports.LiquidityRegenerationSchedule = LiquidityRegenerationSchedule;
exports.LiquidityRegenerationScheduleStep_Properties = [
    new base_1.Property('timestamp', 'Time', 'The timestamp of the schedule step.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('bidLiquidityUsed', 'Bid Liquidity Used', 'The amount of bid liquidity used at this step in the schedule.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('askLiquidityUsed', 'Ask Liquidity Used', 'The amount of ask liquidity used at this step in the schedule.', 'primitive', 'primitives.DecimalNumber'),
];
var LiquidityRegenerationScheduleStep = /** @class */ (function (_super) {
    __extends(LiquidityRegenerationScheduleStep, _super);
    function LiquidityRegenerationScheduleStep(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.LiquidityRegenerationScheduleStep_Properties;
        data = data || {};
        if (data['timestamp'] !== undefined) {
            _this.timestamp = data['timestamp'];
        }
        if (data['bidLiquidityUsed'] !== undefined) {
            _this.bidLiquidityUsed = data['bidLiquidityUsed'];
        }
        if (data['askLiquidityUsed'] !== undefined) {
            _this.askLiquidityUsed = data['askLiquidityUsed'];
        }
        return _this;
    }
    return LiquidityRegenerationScheduleStep;
}(base_1.Definition));
exports.LiquidityRegenerationScheduleStep = LiquidityRegenerationScheduleStep;
exports.OpenTradeFinancing_Properties = [
    new base_1.Property('tradeID', 'tradeID', 'The ID of the Trade that financing is being paid/collected for.', 'primitive', 'trade.TradeID'),
    new base_1.Property('financing', 'Financing', 'The amount of financing paid/collected for the Trade.', 'primitive', 'primitives.AccountUnits'),
];
var OpenTradeFinancing = /** @class */ (function (_super) {
    __extends(OpenTradeFinancing, _super);
    function OpenTradeFinancing(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.OpenTradeFinancing_Properties;
        data = data || {};
        if (data['tradeID'] !== undefined) {
            _this.tradeID = data['tradeID'];
        }
        if (data['financing'] !== undefined) {
            _this.financing = data['financing'];
        }
        return _this;
    }
    return OpenTradeFinancing;
}(base_1.Definition));
exports.OpenTradeFinancing = OpenTradeFinancing;
exports.PositionFinancing_Properties = [
    new base_1.Property('instrument', 'Instrument', 'The instrument of the Position that financing is being paid/collected for.', 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('financing', 'Financing', 'The amount of financing paid/collected for the Position.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('openTradeFinancings', 'Trade Financings', 'The financing paid/collecte for each open Trade within the Position.', 'array_object', 'OpenTradeFinancing'),
];
var PositionFinancing = /** @class */ (function (_super) {
    __extends(PositionFinancing, _super);
    function PositionFinancing(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.PositionFinancing_Properties;
        data = data || {};
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['financing'] !== undefined) {
            _this.financing = data['financing'];
        }
        if (data['openTradeFinancings'] !== undefined) {
            _this.openTradeFinancings = data['openTradeFinancings'].map(function (x) { return new OpenTradeFinancing(x); });
        }
        return _this;
    }
    return PositionFinancing;
}(base_1.Definition));
exports.PositionFinancing = PositionFinancing;
exports.TransactionHeartbeat_Properties = [
    new base_1.Property('type', 'type', 'The string "HEARTBEAT"', 'primitive', 'string'),
    new base_1.Property('lastTransactionID', 'lastTransactionID', 'The ID of the most recent Transaction created for the Account', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('time', 'time', 'The date/time when the TransactionHeartbeat was created.', 'primitive', 'primitives.DateTime'),
];
var TransactionHeartbeat = /** @class */ (function (_super) {
    __extends(TransactionHeartbeat, _super);
    function TransactionHeartbeat(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Transaction Heartbeat {time}';
        _this._nameFormat = '';
        _this._properties = exports.TransactionHeartbeat_Properties;
        data = data || {};
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'HEARTBEAT';
        }
        if (data['lastTransactionID'] !== undefined) {
            _this.lastTransactionID = data['lastTransactionID'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        return _this;
    }
    return TransactionHeartbeat;
}(base_1.Definition));
exports.TransactionHeartbeat = TransactionHeartbeat;
var EntitySpec = /** @class */ (function () {
    function EntitySpec(context) {
        this.context = context;
        this.Transaction = Transaction;
        this.CreateTransaction = CreateTransaction;
        this.CloseTransaction = CloseTransaction;
        this.ReopenTransaction = ReopenTransaction;
        this.ClientConfigureTransaction = ClientConfigureTransaction;
        this.ClientConfigureRejectTransaction = ClientConfigureRejectTransaction;
        this.TransferFundsTransaction = TransferFundsTransaction;
        this.TransferFundsRejectTransaction = TransferFundsRejectTransaction;
        this.MarketOrderTransaction = MarketOrderTransaction;
        this.MarketOrderRejectTransaction = MarketOrderRejectTransaction;
        this.FixedPriceOrderTransaction = FixedPriceOrderTransaction;
        this.LimitOrderTransaction = LimitOrderTransaction;
        this.LimitOrderRejectTransaction = LimitOrderRejectTransaction;
        this.StopOrderTransaction = StopOrderTransaction;
        this.StopOrderRejectTransaction = StopOrderRejectTransaction;
        this.MarketIfTouchedOrderTransaction = MarketIfTouchedOrderTransaction;
        this.MarketIfTouchedOrderRejectTransaction = MarketIfTouchedOrderRejectTransaction;
        this.TakeProfitOrderTransaction = TakeProfitOrderTransaction;
        this.TakeProfitOrderRejectTransaction = TakeProfitOrderRejectTransaction;
        this.StopLossOrderTransaction = StopLossOrderTransaction;
        this.StopLossOrderRejectTransaction = StopLossOrderRejectTransaction;
        this.TrailingStopLossOrderTransaction = TrailingStopLossOrderTransaction;
        this.TrailingStopLossOrderRejectTransaction = TrailingStopLossOrderRejectTransaction;
        this.OrderFillTransaction = OrderFillTransaction;
        this.OrderCancelTransaction = OrderCancelTransaction;
        this.OrderCancelRejectTransaction = OrderCancelRejectTransaction;
        this.OrderClientExtensionsModifyTransaction = OrderClientExtensionsModifyTransaction;
        this.OrderClientExtensionsModifyRejectTransaction = OrderClientExtensionsModifyRejectTransaction;
        this.TradeClientExtensionsModifyTransaction = TradeClientExtensionsModifyTransaction;
        this.TradeClientExtensionsModifyRejectTransaction = TradeClientExtensionsModifyRejectTransaction;
        this.MarginCallEnterTransaction = MarginCallEnterTransaction;
        this.MarginCallExtendTransaction = MarginCallExtendTransaction;
        this.MarginCallExitTransaction = MarginCallExitTransaction;
        this.DelayedTradeClosureTransaction = DelayedTradeClosureTransaction;
        this.DailyFinancingTransaction = DailyFinancingTransaction;
        this.ResetResettablePLTransaction = ResetResettablePLTransaction;
        this.ClientExtensions = ClientExtensions;
        this.TakeProfitDetails = TakeProfitDetails;
        this.StopLossDetails = StopLossDetails;
        this.TrailingStopLossDetails = TrailingStopLossDetails;
        this.TradeOpen = TradeOpen;
        this.TradeReduce = TradeReduce;
        this.MarketOrderTradeClose = MarketOrderTradeClose;
        this.MarketOrderMarginCloseout = MarketOrderMarginCloseout;
        this.MarketOrderDelayedTradeClose = MarketOrderDelayedTradeClose;
        this.MarketOrderPositionCloseout = MarketOrderPositionCloseout;
        this.LiquidityRegenerationSchedule = LiquidityRegenerationSchedule;
        this.LiquidityRegenerationScheduleStep = LiquidityRegenerationScheduleStep;
        this.OpenTradeFinancing = OpenTradeFinancing;
        this.PositionFinancing = PositionFinancing;
        this.TransactionHeartbeat = TransactionHeartbeat;
    }
    EntitySpec.prototype.list = function (accountID, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/transactions';
        queryParams = queryParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path + '?';
        if (typeof queryParams['from'] !== 'undefined') {
            path = path + 'from=' + queryParams['from'] + '&';
        }
        if (typeof queryParams['to'] !== 'undefined') {
            path = path + 'to=' + queryParams['to'] + '&';
        }
        if (typeof queryParams['pageSize'] !== 'undefined') {
            path = path + 'pageSize=' + queryParams['pageSize'] + '&';
        }
        if (typeof queryParams['type'] !== 'undefined') {
            path = path + 'type=' + queryParams['type'] + '&';
        }
        var body = {};
        var handleResponse = function (err, response) {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                var msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['from'] !== undefined) {
                        response.body.from = msg['from'];
                    }
                    if (msg['to'] !== undefined) {
                        response.body.to = msg['to'];
                    }
                    if (msg['pageSize'] !== undefined) {
                        response.body.pageSize = msg['pageSize'];
                    }
                    if (msg['type'] !== undefined) {
                        response.body.type = msg['type'];
                    }
                    if (msg['count'] !== undefined) {
                        response.body.count = msg['count'];
                    }
                    if (msg['pages'] !== undefined) {
                        response.body.pages = msg['pages'];
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                }
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 403) {
                }
                else if (response.statusCode == 404) {
                }
                else if (response.statusCode == 405) {
                }
                else if (response.statusCode == 416) {
                }
                //
                // Assume standard error response with errorCode and errorMessage
                //
                else {
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
            }
            responseHandler(null, response);
        };
        return this.context.request('GET', path, body, undefined, handleResponse);
    };
    EntitySpec.prototype.get = function (accountID, transactionID, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/transactions/{transactionID}';
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path.replace('{' + 'transactionID' + '}', transactionID);
        var body = {};
        var handleResponse = function (err, response) {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                var msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['transaction'] !== undefined) {
                        response.body.transaction = Transaction.create(msg['transaction']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 404) {
                }
                else if (response.statusCode == 405) {
                }
                //
                // Assume standard error response with errorCode and errorMessage
                //
                else {
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
            }
            responseHandler(null, response);
        };
        return this.context.request('GET', path, body, undefined, handleResponse);
    };
    EntitySpec.prototype.range = function (accountID, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/transactions/idrange';
        queryParams = queryParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path + '?';
        if (typeof queryParams['from'] !== 'undefined') {
            path = path + 'from=' + queryParams['from'] + '&';
        }
        if (typeof queryParams['to'] !== 'undefined') {
            path = path + 'to=' + queryParams['to'] + '&';
        }
        if (typeof queryParams['type'] !== 'undefined') {
            path = path + 'type=' + queryParams['type'] + '&';
        }
        var body = {};
        var handleResponse = function (err, response) {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                var msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['transactions'] !== undefined) {
                        response.body.transactions = msg['transactions'].map(function (x) { return Transaction.create(x); });
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                }
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 404) {
                }
                else if (response.statusCode == 405) {
                }
                else if (response.statusCode == 416) {
                }
                //
                // Assume standard error response with errorCode and errorMessage
                //
                if (msg['errorCode'] !== undefined) {
                    response.body.errorCode = msg['errorCode'];
                }
                if (msg['errorMessage'] !== undefined) {
                    response.body.errorMessage = msg['errorMessage'];
                }
            }
            responseHandler(null, response);
        };
        return this.context.request('GET', path, body, undefined, handleResponse);
    };
    EntitySpec.prototype.since = function (accountID, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/transactions/sinceid';
        queryParams = queryParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path + '?';
        if (typeof queryParams['id'] !== 'undefined') {
            path = path + 'id=' + queryParams['id'] + '&';
        }
        var body = {};
        var handleResponse = function (err, response) {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                var msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['transactions'] !== undefined) {
                        response.body.transactions = msg['transactions'].map(function (x) { return Transaction.create(x); });
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                }
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 404) {
                }
                else if (response.statusCode == 405) {
                }
                else if (response.statusCode == 416) {
                }
                //
                // Assume standard error response with errorCode and errorMessage
                //
                else {
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
            }
            responseHandler(null, response);
        };
        return this.context.request('GET', path, body, undefined, handleResponse);
    };
    EntitySpec.prototype.stream = function (accountID, streamChunkHandler, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        if (!streamChunkHandler) {
            throw 'No streamChunkHandler provided for streaming API call';
        }
        var path = '/v3/accounts/{accountID}/transactions/stream';
        path = path.replace('{' + 'accountID' + '}', accountID);
        var body = {};
        var handleResponse = function (err, response) {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                var msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['transaction'] !== undefined) {
                        response.body.transaction = Transaction.create(msg['transaction']);
                    }
                    if (msg['heartbeat'] !== undefined) {
                        response.body.heartbeat = new TransactionHeartbeat(msg['heartbeat']);
                    }
                }
                else if (response.statusCode == 400) {
                }
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 404) {
                }
                else if (response.statusCode == 405) {
                }
                //
                // Assume standard error response with errorCode and errorMessage
                //
                else {
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
            }
            responseHandler(null, response);
        };
        function generateStreamParser(streamChunkHandler) {
            return function (chunk) {
                try {
                    var msg = JSON.parse(chunk);
                    if (msg.type == 'HEARTBEAT') {
                        streamChunkHandler(new TransactionHeartbeat(msg));
                    }
                    else if (msg.type) {
                        streamChunkHandler(Transaction.create(msg));
                    }
                }
                catch (err) {
                    // failed to parse chunk so ignore
                }
            };
        }
        return this.context.request('GET', path, body, generateStreamParser(streamChunkHandler), handleResponse);
    };
    return EntitySpec;
}());
exports.EntitySpec = EntitySpec;
//# sourceMappingURL=transaction.js.map