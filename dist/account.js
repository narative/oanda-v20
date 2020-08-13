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
var order = require("./order");
var position = require("./position");
var primitives = require("./primitives");
var trade = require("./trade");
var transaction = require("./transaction");
exports.Account_Properties = [
    new base_1.Property('id', 'Account ID', "The Account's identifier", 'primitive', 'account.AccountID'),
    new base_1.Property('alias', 'Alias', 'Client-assigned alias for the Account. Only provided if the Account has an alias set', 'primitive', 'string'),
    new base_1.Property('currency', 'Home Currency', 'The home currency of the Account', 'primitive', 'primitives.Currency'),
    new base_1.Property('balance', 'Balance', 'The current balance of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('createdByUserID', 'Created by User ID', 'ID of the user that created the Account.', 'primitive', 'integer'),
    new base_1.Property('createdTime', 'Create Time', 'The date/time when the Account was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('guaranteedStopLossOrderMode', 'Guaranteed Stop Loss Order Mode', 'The current guaranteed Stop Loss Order mode of the Account.', 'primitive', 'account.GuaranteedStopLossOrderMode'),
    new base_1.Property('pl', 'Profit/Loss', 'The total profit/loss realized over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('resettablePL', 'Resettable Profit/Loss', 'The total realized profit/loss for the Account since it was last reset by the client.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('resettablePLTime', 'Profit/Loss Reset Time', "The date/time that the Account's resettablePL was last reset.", 'primitive', 'primitives.DateTime'),
    new base_1.Property('financing', 'Financing', 'The total amount of financing paid/collected over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('commission', 'Commission', 'The total amount of commission paid over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('guaranteedExecutionFees', 'Guaranteed Execution Fees', 'The total amount of fees charged over the lifetime of the Account for the execution of guaranteed Stop Loss Orders.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginRate', 'Margin Rate', "Client-provided margin rate override for the Account. The effective margin rate of the Account is the lesser of this value and the OANDA margin rate for the Account's division. This value is only provided if a margin rate override exists for the Account.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('marginCallEnterTime', 'Margin Call Enter Time', 'The date/time when the Account entered a margin call state. Only provided if the Account is in a margin call.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('marginCallExtensionCount', 'Margin Call Extension Count', "The number of times that the Account's current margin call was extended.", 'primitive', 'integer'),
    new base_1.Property('lastMarginCallExtensionTime', 'Last Margin Call Extension Time', "The date/time of the Account's last margin call extension.", 'primitive', 'primitives.DateTime'),
    new base_1.Property('openTradeCount', 'Open Trade Count', 'The number of Trades currently open in the Account.', 'primitive', 'integer'),
    new base_1.Property('openPositionCount', 'Open Position Count', 'The number of Positions currently open in the Account.', 'primitive', 'integer'),
    new base_1.Property('pendingOrderCount', 'Pending Order Count', 'The number of Orders currently pending in the Account.', 'primitive', 'integer'),
    new base_1.Property('hedgingEnabled', 'Hedging Enabled', 'Flag indicating that the Account has hedging enabled.', 'primitive', 'boolean'),
    new base_1.Property('lastOrderFillTimestamp', 'Last Order Fill timestamp.', 'The date/time of the last order that was filled for this account.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('unrealizedPL', 'Unrealized Profit/Loss', 'The total unrealized profit/loss for all Trades currently open in the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('NAV', 'Net Asset Value', 'The net asset value of the Account. Equal to Account balance + unrealizedPL.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginUsed', 'Margin Used', 'Margin currently used for the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginAvailable', 'Margin Available', 'Margin available for Account currency.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('positionValue', 'Position Value', "The value of the Account's open positions represented in the Account's home currency.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutUnrealizedPL', 'Closeout UPL', "The Account's margin closeout unrealized PL.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutNAV', 'Closeout NAV', "The Account's margin closeout NAV.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutMarginUsed', 'Closeout Margin Used', "The Account's margin closeout margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutPercent', 'Margin Closeout Percentage', "The Account's margin closeout percentage. When this value is 1.0 or above the Account is in a margin closeout situation.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('marginCloseoutPositionValue', 'Margin Closeout Position Value', "The value of the Account's open positions as used for margin closeout calculations represented in the Account's home currency.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('withdrawalLimit', 'Withdrawal Limit', 'The current WithdrawalLimit for the account which will be zero or a positive value indicating how much can be withdrawn from the account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallMarginUsed', 'Margin Call Margin Used', "The Account's margin call margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallPercent', 'Margin Call Percentage', "The Account's margin call percentage. When this value is 1.0 or above the Account is in a margin call situation.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('lastTransactionID', 'Last Transaction ID', 'The ID of the last Transaction created for the Account.', 'primitive', 'transaction.TransactionID'),
    new base_1.Property('trades', 'Open Trades', 'The details of the Trades currently open in the Account.', 'array_object', 'TradeSummary'),
    new base_1.Property('positions', 'Positions', 'The details all Account Positions.', 'array_object', 'Position'),
    new base_1.Property('orders', 'Pending Orders', 'The details of the Orders currently pending in the Account.', 'array_object', 'Order'),
];
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Account {id}';
        _this._nameFormat = '';
        _this._properties = exports.Account_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['alias'] !== undefined) {
            _this.alias = data['alias'];
        }
        if (data['currency'] !== undefined) {
            _this.currency = data['currency'];
        }
        if (data['balance'] !== undefined) {
            _this.balance = data['balance'];
        }
        if (data['createdByUserID'] !== undefined) {
            _this.createdByUserID = data['createdByUserID'];
        }
        if (data['createdTime'] !== undefined) {
            _this.createdTime = data['createdTime'];
        }
        if (data['guaranteedStopLossOrderMode'] !== undefined) {
            _this.guaranteedStopLossOrderMode = data['guaranteedStopLossOrderMode'];
        }
        if (data['pl'] !== undefined) {
            _this.pl = data['pl'];
        }
        if (data['resettablePL'] !== undefined) {
            _this.resettablePL = data['resettablePL'];
        }
        if (data['resettablePLTime'] !== undefined) {
            _this.resettablePLTime = data['resettablePLTime'];
        }
        if (data['financing'] !== undefined) {
            _this.financing = data['financing'];
        }
        if (data['commission'] !== undefined) {
            _this.commission = data['commission'];
        }
        if (data['guaranteedExecutionFees'] !== undefined) {
            _this.guaranteedExecutionFees = data['guaranteedExecutionFees'];
        }
        if (data['marginRate'] !== undefined) {
            _this.marginRate = data['marginRate'];
        }
        if (data['marginCallEnterTime'] !== undefined) {
            _this.marginCallEnterTime = data['marginCallEnterTime'];
        }
        if (data['marginCallExtensionCount'] !== undefined) {
            _this.marginCallExtensionCount = data['marginCallExtensionCount'];
        }
        if (data['lastMarginCallExtensionTime'] !== undefined) {
            _this.lastMarginCallExtensionTime = data['lastMarginCallExtensionTime'];
        }
        if (data['openTradeCount'] !== undefined) {
            _this.openTradeCount = data['openTradeCount'];
        }
        if (data['openPositionCount'] !== undefined) {
            _this.openPositionCount = data['openPositionCount'];
        }
        if (data['pendingOrderCount'] !== undefined) {
            _this.pendingOrderCount = data['pendingOrderCount'];
        }
        if (data['hedgingEnabled'] !== undefined) {
            _this.hedgingEnabled = data['hedgingEnabled'];
        }
        if (data['lastOrderFillTimestamp'] !== undefined) {
            _this.lastOrderFillTimestamp = data['lastOrderFillTimestamp'];
        }
        if (data['unrealizedPL'] !== undefined) {
            _this.unrealizedPL = data['unrealizedPL'];
        }
        if (data['NAV'] !== undefined) {
            _this.NAV = data['NAV'];
        }
        if (data['marginUsed'] !== undefined) {
            _this.marginUsed = data['marginUsed'];
        }
        if (data['marginAvailable'] !== undefined) {
            _this.marginAvailable = data['marginAvailable'];
        }
        if (data['positionValue'] !== undefined) {
            _this.positionValue = data['positionValue'];
        }
        if (data['marginCloseoutUnrealizedPL'] !== undefined) {
            _this.marginCloseoutUnrealizedPL = data['marginCloseoutUnrealizedPL'];
        }
        if (data['marginCloseoutNAV'] !== undefined) {
            _this.marginCloseoutNAV = data['marginCloseoutNAV'];
        }
        if (data['marginCloseoutMarginUsed'] !== undefined) {
            _this.marginCloseoutMarginUsed = data['marginCloseoutMarginUsed'];
        }
        if (data['marginCloseoutPercent'] !== undefined) {
            _this.marginCloseoutPercent = data['marginCloseoutPercent'];
        }
        if (data['marginCloseoutPositionValue'] !== undefined) {
            _this.marginCloseoutPositionValue = data['marginCloseoutPositionValue'];
        }
        if (data['withdrawalLimit'] !== undefined) {
            _this.withdrawalLimit = data['withdrawalLimit'];
        }
        if (data['marginCallMarginUsed'] !== undefined) {
            _this.marginCallMarginUsed = data['marginCallMarginUsed'];
        }
        if (data['marginCallPercent'] !== undefined) {
            _this.marginCallPercent = data['marginCallPercent'];
        }
        if (data['lastTransactionID'] !== undefined) {
            _this.lastTransactionID = data['lastTransactionID'];
        }
        if (data['trades'] !== undefined) {
            _this.trades = data['trades'].map(function (x) { return new trade.TradeSummary(x); });
        }
        if (data['positions'] !== undefined) {
            _this.positions = data['positions'].map(function (x) { return new position.Position(x); });
        }
        if (data['orders'] !== undefined) {
            _this.orders = data['orders'].map(function (x) { return order.Order.create(x); });
        }
        return _this;
    }
    return Account;
}(base_1.Definition));
exports.Account = Account;
exports.AccountChangesState_Properties = [
    new base_1.Property('unrealizedPL', 'Unrealized Profit/Loss', 'The total unrealized profit/loss for all Trades currently open in the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('NAV', 'Net Asset Value', 'The net asset value of the Account. Equal to Account balance + unrealizedPL.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginUsed', 'Margin Used', 'Margin currently used for the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginAvailable', 'Margin Available', 'Margin available for Account currency.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('positionValue', 'Position Value', "The value of the Account's open positions represented in the Account's home currency.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutUnrealizedPL', 'Closeout UPL', "The Account's margin closeout unrealized PL.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutNAV', 'Closeout NAV', "The Account's margin closeout NAV.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutMarginUsed', 'Closeout Margin Used', "The Account's margin closeout margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutPercent', 'Margin Closeout Percentage', "The Account's margin closeout percentage. When this value is 1.0 or above the Account is in a margin closeout situation.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('marginCloseoutPositionValue', 'Margin Closeout Position Value', "The value of the Account's open positions as used for margin closeout calculations represented in the Account's home currency.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('withdrawalLimit', 'Withdrawal Limit', 'The current WithdrawalLimit for the account which will be zero or a positive value indicating how much can be withdrawn from the account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallMarginUsed', 'Margin Call Margin Used', "The Account's margin call margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallPercent', 'Margin Call Percentage', "The Account's margin call percentage. When this value is 1.0 or above the Account is in a margin call situation.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('orders', 'Order States', 'The price-dependent state of each pending Order in the Account.', 'array_object', 'DynamicOrderState'),
    new base_1.Property('trades', 'Trade States', 'The price-dependent state for each open Trade in the Account.', 'array_object', 'CalculatedTradeState'),
    new base_1.Property('positions', 'Position States', 'The price-dependent state for each open Position in the Account.', 'array_object', 'CalculatedPositionState'),
];
var AccountChangesState = /** @class */ (function (_super) {
    __extends(AccountChangesState, _super);
    function AccountChangesState(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.AccountChangesState_Properties;
        data = data || {};
        if (data['unrealizedPL'] !== undefined) {
            _this.unrealizedPL = data['unrealizedPL'];
        }
        if (data['NAV'] !== undefined) {
            _this.NAV = data['NAV'];
        }
        if (data['marginUsed'] !== undefined) {
            _this.marginUsed = data['marginUsed'];
        }
        if (data['marginAvailable'] !== undefined) {
            _this.marginAvailable = data['marginAvailable'];
        }
        if (data['positionValue'] !== undefined) {
            _this.positionValue = data['positionValue'];
        }
        if (data['marginCloseoutUnrealizedPL'] !== undefined) {
            _this.marginCloseoutUnrealizedPL = data['marginCloseoutUnrealizedPL'];
        }
        if (data['marginCloseoutNAV'] !== undefined) {
            _this.marginCloseoutNAV = data['marginCloseoutNAV'];
        }
        if (data['marginCloseoutMarginUsed'] !== undefined) {
            _this.marginCloseoutMarginUsed = data['marginCloseoutMarginUsed'];
        }
        if (data['marginCloseoutPercent'] !== undefined) {
            _this.marginCloseoutPercent = data['marginCloseoutPercent'];
        }
        if (data['marginCloseoutPositionValue'] !== undefined) {
            _this.marginCloseoutPositionValue = data['marginCloseoutPositionValue'];
        }
        if (data['withdrawalLimit'] !== undefined) {
            _this.withdrawalLimit = data['withdrawalLimit'];
        }
        if (data['marginCallMarginUsed'] !== undefined) {
            _this.marginCallMarginUsed = data['marginCallMarginUsed'];
        }
        if (data['marginCallPercent'] !== undefined) {
            _this.marginCallPercent = data['marginCallPercent'];
        }
        if (data['orders'] !== undefined) {
            _this.orders = data['orders'].map(function (x) { return new order.DynamicOrderState(x); });
        }
        if (data['trades'] !== undefined) {
            _this.trades = data['trades'].map(function (x) { return new trade.CalculatedTradeState(x); });
        }
        if (data['positions'] !== undefined) {
            _this.positions = data['positions'].map(function (x) { return new position.CalculatedPositionState(x); });
        }
        return _this;
    }
    return AccountChangesState;
}(base_1.Definition));
exports.AccountChangesState = AccountChangesState;
exports.AccountProperties_Properties = [
    new base_1.Property('id', 'ID', "The Account's identifier", 'primitive', 'account.AccountID'),
    new base_1.Property('mt4AccountID', 'MT4 Account ID', "The Account's associated MT4 Account ID. This field will not be present if the Account is not an MT4 account.", 'primitive', 'integer'),
    new base_1.Property('tags', 'Account Tags', "The Account's tags", 'array_primitive', 'string'),
];
var AccountProperties = /** @class */ (function (_super) {
    __extends(AccountProperties, _super);
    function AccountProperties(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.AccountProperties_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['mt4AccountID'] !== undefined) {
            _this.mt4AccountID = data['mt4AccountID'];
        }
        if (data['tags'] !== undefined) {
            _this.tags = data['tags'];
        }
        return _this;
    }
    return AccountProperties;
}(base_1.Definition));
exports.AccountProperties = AccountProperties;
exports.AccountSummary_Properties = [
    new base_1.Property('id', 'Account ID', "The Account's identifier", 'primitive', 'account.AccountID'),
    new base_1.Property('alias', 'Alias', 'Client-assigned alias for the Account. Only provided if the Account has an alias set', 'primitive', 'string'),
    new base_1.Property('currency', 'Home Currency', 'The home currency of the Account', 'primitive', 'primitives.Currency'),
    new base_1.Property('balance', 'Balance', 'The current balance of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('createdByUserID', 'Created by User ID', 'ID of the user that created the Account.', 'primitive', 'integer'),
    new base_1.Property('createdTime', 'Create Time', 'The date/time when the Account was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('guaranteedStopLossOrderMode', 'Guaranteed Stop Loss Order Mode', 'The current guaranteed Stop Loss Order mode of the Account.', 'primitive', 'account.GuaranteedStopLossOrderMode'),
    new base_1.Property('pl', 'Profit/Loss', 'The total profit/loss realized over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('resettablePL', 'Resettable Profit/Loss', 'The total realized profit/loss for the Account since it was last reset by the client.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('resettablePLTime', 'Profit/Loss Reset Time', "The date/time that the Account's resettablePL was last reset.", 'primitive', 'primitives.DateTime'),
    new base_1.Property('financing', 'Financing', 'The total amount of financing paid/collected over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('commission', 'Commission', 'The total amount of commission paid over the lifetime of the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('guaranteedExecutionFees', 'Guaranteed Execution Fees', 'The total amount of fees charged over the lifetime of the Account for the execution of guaranteed Stop Loss Orders.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginRate', 'Margin Rate', "Client-provided margin rate override for the Account. The effective margin rate of the Account is the lesser of this value and the OANDA margin rate for the Account's division. This value is only provided if a margin rate override exists for the Account.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('marginCallEnterTime', 'Margin Call Enter Time', 'The date/time when the Account entered a margin call state. Only provided if the Account is in a margin call.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('marginCallExtensionCount', 'Margin Call Extension Count', "The number of times that the Account's current margin call was extended.", 'primitive', 'integer'),
    new base_1.Property('lastMarginCallExtensionTime', 'Last Margin Call Extension Time', "The date/time of the Account's last margin call extension.", 'primitive', 'primitives.DateTime'),
    new base_1.Property('openTradeCount', 'Open Trade Count', 'The number of Trades currently open in the Account.', 'primitive', 'integer'),
    new base_1.Property('openPositionCount', 'Open Position Count', 'The number of Positions currently open in the Account.', 'primitive', 'integer'),
    new base_1.Property('pendingOrderCount', 'Pending Order Count', 'The number of Orders currently pending in the Account.', 'primitive', 'integer'),
    new base_1.Property('hedgingEnabled', 'Hedging Enabled', 'Flag indicating that the Account has hedging enabled.', 'primitive', 'boolean'),
    new base_1.Property('lastOrderFillTimestamp', 'Last Order Fill timestamp.', 'The date/time of the last order that was filled for this account.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('unrealizedPL', 'Unrealized Profit/Loss', 'The total unrealized profit/loss for all Trades currently open in the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('NAV', 'Net Asset Value', 'The net asset value of the Account. Equal to Account balance + unrealizedPL.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginUsed', 'Margin Used', 'Margin currently used for the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginAvailable', 'Margin Available', 'Margin available for Account currency.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('positionValue', 'Position Value', "The value of the Account's open positions represented in the Account's home currency.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutUnrealizedPL', 'Closeout UPL', "The Account's margin closeout unrealized PL.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutNAV', 'Closeout NAV', "The Account's margin closeout NAV.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutMarginUsed', 'Closeout Margin Used', "The Account's margin closeout margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutPercent', 'Margin Closeout Percentage', "The Account's margin closeout percentage. When this value is 1.0 or above the Account is in a margin closeout situation.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('marginCloseoutPositionValue', 'Margin Closeout Position Value', "The value of the Account's open positions as used for margin closeout calculations represented in the Account's home currency.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('withdrawalLimit', 'Withdrawal Limit', 'The current WithdrawalLimit for the account which will be zero or a positive value indicating how much can be withdrawn from the account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallMarginUsed', 'Margin Call Margin Used', "The Account's margin call margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallPercent', 'Margin Call Percentage', "The Account's margin call percentage. When this value is 1.0 or above the Account is in a margin call situation.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('lastTransactionID', 'Last Transaction ID', 'The ID of the last Transaction created for the Account.', 'primitive', 'transaction.TransactionID'),
];
var AccountSummary = /** @class */ (function (_super) {
    __extends(AccountSummary, _super);
    function AccountSummary(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.AccountSummary_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['alias'] !== undefined) {
            _this.alias = data['alias'];
        }
        if (data['currency'] !== undefined) {
            _this.currency = data['currency'];
        }
        if (data['balance'] !== undefined) {
            _this.balance = data['balance'];
        }
        if (data['createdByUserID'] !== undefined) {
            _this.createdByUserID = data['createdByUserID'];
        }
        if (data['createdTime'] !== undefined) {
            _this.createdTime = data['createdTime'];
        }
        if (data['guaranteedStopLossOrderMode'] !== undefined) {
            _this.guaranteedStopLossOrderMode = data['guaranteedStopLossOrderMode'];
        }
        if (data['pl'] !== undefined) {
            _this.pl = data['pl'];
        }
        if (data['resettablePL'] !== undefined) {
            _this.resettablePL = data['resettablePL'];
        }
        if (data['resettablePLTime'] !== undefined) {
            _this.resettablePLTime = data['resettablePLTime'];
        }
        if (data['financing'] !== undefined) {
            _this.financing = data['financing'];
        }
        if (data['commission'] !== undefined) {
            _this.commission = data['commission'];
        }
        if (data['guaranteedExecutionFees'] !== undefined) {
            _this.guaranteedExecutionFees = data['guaranteedExecutionFees'];
        }
        if (data['marginRate'] !== undefined) {
            _this.marginRate = data['marginRate'];
        }
        if (data['marginCallEnterTime'] !== undefined) {
            _this.marginCallEnterTime = data['marginCallEnterTime'];
        }
        if (data['marginCallExtensionCount'] !== undefined) {
            _this.marginCallExtensionCount = data['marginCallExtensionCount'];
        }
        if (data['lastMarginCallExtensionTime'] !== undefined) {
            _this.lastMarginCallExtensionTime = data['lastMarginCallExtensionTime'];
        }
        if (data['openTradeCount'] !== undefined) {
            _this.openTradeCount = data['openTradeCount'];
        }
        if (data['openPositionCount'] !== undefined) {
            _this.openPositionCount = data['openPositionCount'];
        }
        if (data['pendingOrderCount'] !== undefined) {
            _this.pendingOrderCount = data['pendingOrderCount'];
        }
        if (data['hedgingEnabled'] !== undefined) {
            _this.hedgingEnabled = data['hedgingEnabled'];
        }
        if (data['lastOrderFillTimestamp'] !== undefined) {
            _this.lastOrderFillTimestamp = data['lastOrderFillTimestamp'];
        }
        if (data['unrealizedPL'] !== undefined) {
            _this.unrealizedPL = data['unrealizedPL'];
        }
        if (data['NAV'] !== undefined) {
            _this.NAV = data['NAV'];
        }
        if (data['marginUsed'] !== undefined) {
            _this.marginUsed = data['marginUsed'];
        }
        if (data['marginAvailable'] !== undefined) {
            _this.marginAvailable = data['marginAvailable'];
        }
        if (data['positionValue'] !== undefined) {
            _this.positionValue = data['positionValue'];
        }
        if (data['marginCloseoutUnrealizedPL'] !== undefined) {
            _this.marginCloseoutUnrealizedPL = data['marginCloseoutUnrealizedPL'];
        }
        if (data['marginCloseoutNAV'] !== undefined) {
            _this.marginCloseoutNAV = data['marginCloseoutNAV'];
        }
        if (data['marginCloseoutMarginUsed'] !== undefined) {
            _this.marginCloseoutMarginUsed = data['marginCloseoutMarginUsed'];
        }
        if (data['marginCloseoutPercent'] !== undefined) {
            _this.marginCloseoutPercent = data['marginCloseoutPercent'];
        }
        if (data['marginCloseoutPositionValue'] !== undefined) {
            _this.marginCloseoutPositionValue = data['marginCloseoutPositionValue'];
        }
        if (data['withdrawalLimit'] !== undefined) {
            _this.withdrawalLimit = data['withdrawalLimit'];
        }
        if (data['marginCallMarginUsed'] !== undefined) {
            _this.marginCallMarginUsed = data['marginCallMarginUsed'];
        }
        if (data['marginCallPercent'] !== undefined) {
            _this.marginCallPercent = data['marginCallPercent'];
        }
        if (data['lastTransactionID'] !== undefined) {
            _this.lastTransactionID = data['lastTransactionID'];
        }
        return _this;
    }
    return AccountSummary;
}(base_1.Definition));
exports.AccountSummary = AccountSummary;
exports.CalculatedAccountState_Properties = [
    new base_1.Property('unrealizedPL', 'Unrealized Profit/Loss', 'The total unrealized profit/loss for all Trades currently open in the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('NAV', 'Net Asset Value', 'The net asset value of the Account. Equal to Account balance + unrealizedPL.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginUsed', 'Margin Used', 'Margin currently used for the Account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginAvailable', 'Margin Available', 'Margin available for Account currency.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('positionValue', 'Position Value', "The value of the Account's open positions represented in the Account's home currency.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutUnrealizedPL', 'Closeout UPL', "The Account's margin closeout unrealized PL.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutNAV', 'Closeout NAV', "The Account's margin closeout NAV.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutMarginUsed', 'Closeout Margin Used', "The Account's margin closeout margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCloseoutPercent', 'Margin Closeout Percentage', "The Account's margin closeout percentage. When this value is 1.0 or above the Account is in a margin closeout situation.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('marginCloseoutPositionValue', 'Margin Closeout Position Value', "The value of the Account's open positions as used for margin closeout calculations represented in the Account's home currency.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('withdrawalLimit', 'Withdrawal Limit', 'The current WithdrawalLimit for the account which will be zero or a positive value indicating how much can be withdrawn from the account.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallMarginUsed', 'Margin Call Margin Used', "The Account's margin call margin used.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginCallPercent', 'Margin Call Percentage', "The Account's margin call percentage. When this value is 1.0 or above the Account is in a margin call situation.", 'primitive', 'primitives.DecimalNumber'),
];
var CalculatedAccountState = /** @class */ (function (_super) {
    __extends(CalculatedAccountState, _super);
    function CalculatedAccountState(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.CalculatedAccountState_Properties;
        data = data || {};
        if (data['unrealizedPL'] !== undefined) {
            _this.unrealizedPL = data['unrealizedPL'];
        }
        if (data['NAV'] !== undefined) {
            _this.NAV = data['NAV'];
        }
        if (data['marginUsed'] !== undefined) {
            _this.marginUsed = data['marginUsed'];
        }
        if (data['marginAvailable'] !== undefined) {
            _this.marginAvailable = data['marginAvailable'];
        }
        if (data['positionValue'] !== undefined) {
            _this.positionValue = data['positionValue'];
        }
        if (data['marginCloseoutUnrealizedPL'] !== undefined) {
            _this.marginCloseoutUnrealizedPL = data['marginCloseoutUnrealizedPL'];
        }
        if (data['marginCloseoutNAV'] !== undefined) {
            _this.marginCloseoutNAV = data['marginCloseoutNAV'];
        }
        if (data['marginCloseoutMarginUsed'] !== undefined) {
            _this.marginCloseoutMarginUsed = data['marginCloseoutMarginUsed'];
        }
        if (data['marginCloseoutPercent'] !== undefined) {
            _this.marginCloseoutPercent = data['marginCloseoutPercent'];
        }
        if (data['marginCloseoutPositionValue'] !== undefined) {
            _this.marginCloseoutPositionValue = data['marginCloseoutPositionValue'];
        }
        if (data['withdrawalLimit'] !== undefined) {
            _this.withdrawalLimit = data['withdrawalLimit'];
        }
        if (data['marginCallMarginUsed'] !== undefined) {
            _this.marginCallMarginUsed = data['marginCallMarginUsed'];
        }
        if (data['marginCallPercent'] !== undefined) {
            _this.marginCallPercent = data['marginCallPercent'];
        }
        return _this;
    }
    return CalculatedAccountState;
}(base_1.Definition));
exports.CalculatedAccountState = CalculatedAccountState;
exports.AccountChanges_Properties = [
    new base_1.Property('ordersCreated', 'Orders Created', 'The Orders created. These Orders may have been filled, cancelled or triggered in the same period.', 'array_object', 'Order'),
    new base_1.Property('ordersCancelled', 'Orders Cancelled', 'The Orders cancelled.', 'array_object', 'Order'),
    new base_1.Property('ordersFilled', 'Orders Filled', 'The Orders filled.', 'array_object', 'Order'),
    new base_1.Property('ordersTriggered', 'Orders Triggered', 'The Orders triggered.', 'array_object', 'Order'),
    new base_1.Property('tradesOpened', 'Trades Opened', 'The Trades opened.', 'array_object', 'TradeSummary'),
    new base_1.Property('tradesReduced', 'Trades Reduced', 'The Trades reduced.', 'array_object', 'TradeSummary'),
    new base_1.Property('tradesClosed', 'Trades Closed', 'The Trades closed.', 'array_object', 'TradeSummary'),
    new base_1.Property('positions', 'Positions', 'The Positions changed.', 'array_object', 'Position'),
    new base_1.Property('transactions', 'Transactions', 'The Transactions that have been generated.', 'array_object', 'Transaction'),
];
var AccountChanges = /** @class */ (function (_super) {
    __extends(AccountChanges, _super);
    function AccountChanges(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.AccountChanges_Properties;
        data = data || {};
        if (data['ordersCreated'] !== undefined) {
            _this.ordersCreated = data['ordersCreated'].map(function (x) { return order.Order.create(x); });
        }
        if (data['ordersCancelled'] !== undefined) {
            _this.ordersCancelled = data['ordersCancelled'].map(function (x) { return order.Order.create(x); });
        }
        if (data['ordersFilled'] !== undefined) {
            _this.ordersFilled = data['ordersFilled'].map(function (x) { return order.Order.create(x); });
        }
        if (data['ordersTriggered'] !== undefined) {
            _this.ordersTriggered = data['ordersTriggered'].map(function (x) { return order.Order.create(x); });
        }
        if (data['tradesOpened'] !== undefined) {
            _this.tradesOpened = data['tradesOpened'].map(function (x) { return new trade.TradeSummary(x); });
        }
        if (data['tradesReduced'] !== undefined) {
            _this.tradesReduced = data['tradesReduced'].map(function (x) { return new trade.TradeSummary(x); });
        }
        if (data['tradesClosed'] !== undefined) {
            _this.tradesClosed = data['tradesClosed'].map(function (x) { return new trade.TradeSummary(x); });
        }
        if (data['positions'] !== undefined) {
            _this.positions = data['positions'].map(function (x) { return new position.Position(x); });
        }
        if (data['transactions'] !== undefined) {
            _this.transactions = data['transactions'].map(function (x) { return transaction.Transaction.create(x); });
        }
        return _this;
    }
    return AccountChanges;
}(base_1.Definition));
exports.AccountChanges = AccountChanges;
var EntitySpec = /** @class */ (function () {
    function EntitySpec(context) {
        this.context = context;
        this.Account = Account;
        this.AccountChangesState = AccountChangesState;
        this.AccountProperties = AccountProperties;
        this.AccountSummary = AccountSummary;
        this.CalculatedAccountState = CalculatedAccountState;
        this.AccountChanges = AccountChanges;
    }
    EntitySpec.prototype.list = function (responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts';
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
                    if (msg['accounts'] !== undefined) {
                        response.body.accounts = msg['accounts'].map(function (x) { return new AccountProperties(x); });
                    }
                }
                else if (response.statusCode == 401) {
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
    EntitySpec.prototype.get = function (accountID, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}';
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
                    if (msg['account'] !== undefined) {
                        response.body.account = new Account(msg['account']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                }
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 405) {
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
    EntitySpec.prototype.summary = function (accountID, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/summary';
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
                    if (msg['account'] !== undefined) {
                        response.body.account = new AccountSummary(msg['account']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                }
                else if (response.statusCode == 401) {
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
    EntitySpec.prototype.instruments = function (accountID, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/instruments';
        queryParams = queryParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path + '?';
        if (typeof queryParams['instruments'] !== 'undefined') {
            path = path + 'instruments=' + queryParams['instruments'] + '&';
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
                    if (msg['instruments'] !== undefined) {
                        response.body.instruments = msg['instruments'].map(function (x) { return new primitives.Instrument(x); });
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                }
                else if (response.statusCode == 401) {
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
    EntitySpec.prototype.configure = function (accountID, bodyParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/configuration';
        bodyParams = bodyParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        var body = {};
        if (typeof bodyParams['alias'] !== 'undefined') {
            body['alias'] = bodyParams['alias'];
        }
        if (typeof bodyParams['marginRate'] !== 'undefined') {
            body['marginRate'] = bodyParams['marginRate'];
        }
        var handleResponse = function (err, response) {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                var msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['clientConfigureTransaction'] !== undefined) {
                        response.body.clientConfigureTransaction = new transaction.ClientConfigureTransaction(msg['clientConfigureTransaction']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                    if (msg['clientConfigureRejectTransaction'] !== undefined) {
                        response.body.clientConfigureRejectTransaction = new transaction.ClientConfigureRejectTransaction(msg['clientConfigureRejectTransaction']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
                else if (response.statusCode == 403) {
                    if (msg['clientConfigureRejectTransaction'] !== undefined) {
                        response.body.clientConfigureRejectTransaction = new transaction.ClientConfigureRejectTransaction(msg['clientConfigureRejectTransaction']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
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
        return this.context.request('PATCH', path, body, undefined, handleResponse);
    };
    EntitySpec.prototype.changes = function (accountID, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/changes';
        queryParams = queryParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path + '?';
        if (typeof queryParams['sinceTransactionID'] !== 'undefined') {
            path = path + 'sinceTransactionID=' + queryParams['sinceTransactionID'] + '&';
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
                    if (msg['changes'] !== undefined) {
                        response.body.changes = new AccountChanges(msg['changes']);
                    }
                    if (msg['state'] !== undefined) {
                        response.body.state = new AccountChangesState(msg['state']);
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
    return EntitySpec;
}());
exports.EntitySpec = EntitySpec;
//# sourceMappingURL=account.js.map