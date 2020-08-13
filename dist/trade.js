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
var transaction = require("./transaction");
exports.Trade_Properties = [
    new base_1.Property('id', 'Trade ID', "The Trade's identifier, unique within the Trade's Account.", 'primitive', 'trade.TradeID'),
    new base_1.Property('instrument', 'Instrument', "The Trade's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('price', 'Fill Price', 'The execution price of the Trade.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('openTime', 'Open Time', 'The date/time when the Trade was opened.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('state', 'State', 'The current state of the Trade.', 'primitive', 'trade.TradeState'),
    new base_1.Property('initialUnits', 'Initial Trade Units', 'The initial size of the Trade. Negative values indicate a short Trade, and positive values indicate a long Trade.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('initialMarginRequired', 'Initial Margin Required', "The margin required at the time the Trade was created. Note, this is the 'pure' margin required, it is not the 'effective' margin used that factors in the trade risk if a GSLO is attached to the trade.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('currentUnits', 'Current Open Trade Units', 'The number of units currently open for the Trade. This value is reduced to 0.0 as the Trade is closed.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('realizedPL', 'Realized Profit/Loss', 'The total profit/loss realized on the closed portion of the Trade.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('unrealizedPL', 'Unrealized Profit/Loss', 'The unrealized profit/loss on the open portion of the Trade.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginUsed', 'Margin Used', 'Margin currently used by the Trade.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('averageClosePrice', 'Average Close Price', 'The average closing price of the Trade. Only present if the Trade has been closed or reduced at least once.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('closingTransactionIDs', 'Closing Transaction IDs', 'The IDs of the Transactions that have closed portions of this Trade.', 'array_primitive', 'TransactionID'),
    new base_1.Property('financing', 'Financing', 'The financing paid/collected for this Trade.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('closeTime', 'Close Time', 'The date/time when the Trade was fully closed. Only provided for Trades whose state is CLOSED.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions of the Trade.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOrder', 'Take Profit Order', "Full representation of the Trade's Take Profit Order, only provided if such an Order exists.", 'object', 'order.TakeProfitOrder'),
    new base_1.Property('stopLossOrder', 'Stop Loss Order', "Full representation of the Trade's Stop Loss Order, only provided if such an Order exists.", 'object', 'order.StopLossOrder'),
    new base_1.Property('trailingStopLossOrder', 'Trailing Stop Loss Order', "Full representation of the Trade's Trailing Stop Loss Order, only provided if such an Order exists.", 'object', 'order.TrailingStopLossOrder'),
];
var Trade = /** @class */ (function (_super) {
    __extends(Trade, _super);
    function Trade(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '{currentUnits} ({initialUnits}) of {instrument} @ {price}';
        _this._nameFormat = 'Trade {id}';
        _this._properties = exports.Trade_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['openTime'] !== undefined) {
            _this.openTime = data['openTime'];
        }
        if (data['state'] !== undefined) {
            _this.state = data['state'];
        }
        if (data['initialUnits'] !== undefined) {
            _this.initialUnits = data['initialUnits'];
        }
        if (data['initialMarginRequired'] !== undefined) {
            _this.initialMarginRequired = data['initialMarginRequired'];
        }
        if (data['currentUnits'] !== undefined) {
            _this.currentUnits = data['currentUnits'];
        }
        if (data['realizedPL'] !== undefined) {
            _this.realizedPL = data['realizedPL'];
        }
        if (data['unrealizedPL'] !== undefined) {
            _this.unrealizedPL = data['unrealizedPL'];
        }
        if (data['marginUsed'] !== undefined) {
            _this.marginUsed = data['marginUsed'];
        }
        if (data['averageClosePrice'] !== undefined) {
            _this.averageClosePrice = data['averageClosePrice'];
        }
        if (data['closingTransactionIDs'] !== undefined) {
            _this.closingTransactionIDs = data['closingTransactionIDs'];
        }
        if (data['financing'] !== undefined) {
            _this.financing = data['financing'];
        }
        if (data['closeTime'] !== undefined) {
            _this.closeTime = data['closeTime'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOrder'] !== undefined) {
            _this.takeProfitOrder = new order.TakeProfitOrder(data['takeProfitOrder']);
        }
        if (data['stopLossOrder'] !== undefined) {
            _this.stopLossOrder = new order.StopLossOrder(data['stopLossOrder']);
        }
        if (data['trailingStopLossOrder'] !== undefined) {
            _this.trailingStopLossOrder = new order.TrailingStopLossOrder(data['trailingStopLossOrder']);
        }
        return _this;
    }
    return Trade;
}(base_1.Definition));
exports.Trade = Trade;
exports.TradeSummary_Properties = [
    new base_1.Property('id', 'Trade ID', "The Trade's identifier, unique within the Trade's Account.", 'primitive', 'trade.TradeID'),
    new base_1.Property('instrument', 'Instrument', "The Trade's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('price', 'Fill Price', 'The execution price of the Trade.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('openTime', 'Open Time', 'The date/time when the Trade was opened.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('state', 'State', 'The current state of the Trade.', 'primitive', 'trade.TradeState'),
    new base_1.Property('initialUnits', 'Initial Trade Units', 'The initial size of the Trade. Negative values indicate a short Trade, and positive values indicate a long Trade.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('initialMarginRequired', 'Initial Margin Required', "The margin required at the time the Trade was created. Note, this is the 'pure' margin required, it is not the 'effective' margin used that factors in the trade risk if a GSLO is attached to the trade.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('currentUnits', 'Current Open Trade Units', 'The number of units currently open for the Trade. This value is reduced to 0.0 as the Trade is closed.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('realizedPL', 'Realized Profit/Loss', 'The total profit/loss realized on the closed portion of the Trade.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('unrealizedPL', 'Unrealized Profit/Loss', 'The unrealized profit/loss on the open portion of the Trade.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginUsed', 'Margin Used', 'Margin currently used by the Trade.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('averageClosePrice', 'Average Close Price', 'The average closing price of the Trade. Only present if the Trade has been closed or reduced at least once.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('closingTransactionIDs', 'Closing Transaction IDs', 'The IDs of the Transactions that have closed portions of this Trade.', 'array_primitive', 'TransactionID'),
    new base_1.Property('financing', 'Financing', 'The financing paid/collected for this Trade.', 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('closeTime', 'Close Time', 'The date/time when the Trade was fully closed. Only provided for Trades whose state is CLOSED.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions of the Trade.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOrderID', 'Take Profit Order ID', "ID of the Trade's Take Profit Order, only provided if such an Order exists.", 'primitive', 'order.OrderID'),
    new base_1.Property('stopLossOrderID', 'Stop Loss Order ID', "ID of the Trade's Stop Loss Order, only provided if such an Order exists.", 'primitive', 'order.OrderID'),
    new base_1.Property('trailingStopLossOrderID', 'Trailing Stop Loss Order ID', "ID of the Trade's Trailing Stop Loss Order, only provided if such an Order exists.", 'primitive', 'order.OrderID'),
];
var TradeSummary = /** @class */ (function (_super) {
    __extends(TradeSummary, _super);
    function TradeSummary(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '{currentUnits} ({initialUnits}) of {instrument} @ {price}';
        _this._nameFormat = 'Trade {id}';
        _this._properties = exports.TradeSummary_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['openTime'] !== undefined) {
            _this.openTime = data['openTime'];
        }
        if (data['state'] !== undefined) {
            _this.state = data['state'];
        }
        if (data['initialUnits'] !== undefined) {
            _this.initialUnits = data['initialUnits'];
        }
        if (data['initialMarginRequired'] !== undefined) {
            _this.initialMarginRequired = data['initialMarginRequired'];
        }
        if (data['currentUnits'] !== undefined) {
            _this.currentUnits = data['currentUnits'];
        }
        if (data['realizedPL'] !== undefined) {
            _this.realizedPL = data['realizedPL'];
        }
        if (data['unrealizedPL'] !== undefined) {
            _this.unrealizedPL = data['unrealizedPL'];
        }
        if (data['marginUsed'] !== undefined) {
            _this.marginUsed = data['marginUsed'];
        }
        if (data['averageClosePrice'] !== undefined) {
            _this.averageClosePrice = data['averageClosePrice'];
        }
        if (data['closingTransactionIDs'] !== undefined) {
            _this.closingTransactionIDs = data['closingTransactionIDs'];
        }
        if (data['financing'] !== undefined) {
            _this.financing = data['financing'];
        }
        if (data['closeTime'] !== undefined) {
            _this.closeTime = data['closeTime'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOrderID'] !== undefined) {
            _this.takeProfitOrderID = data['takeProfitOrderID'];
        }
        if (data['stopLossOrderID'] !== undefined) {
            _this.stopLossOrderID = data['stopLossOrderID'];
        }
        if (data['trailingStopLossOrderID'] !== undefined) {
            _this.trailingStopLossOrderID = data['trailingStopLossOrderID'];
        }
        return _this;
    }
    return TradeSummary;
}(base_1.Definition));
exports.TradeSummary = TradeSummary;
exports.CalculatedTradeState_Properties = [
    new base_1.Property('id', 'Trade ID', "The Trade's ID.", 'primitive', 'trade.TradeID'),
    new base_1.Property('unrealizedPL', 'Trade UPL', "The Trade's unrealized profit/loss.", 'primitive', 'primitives.AccountUnits'),
    new base_1.Property('marginUsed', 'Margin Used', 'Margin currently used by the Trade.', 'primitive', 'primitives.AccountUnits'),
];
var CalculatedTradeState = /** @class */ (function (_super) {
    __extends(CalculatedTradeState, _super);
    function CalculatedTradeState(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.CalculatedTradeState_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['unrealizedPL'] !== undefined) {
            _this.unrealizedPL = data['unrealizedPL'];
        }
        if (data['marginUsed'] !== undefined) {
            _this.marginUsed = data['marginUsed'];
        }
        return _this;
    }
    return CalculatedTradeState;
}(base_1.Definition));
exports.CalculatedTradeState = CalculatedTradeState;
var EntitySpec = /** @class */ (function () {
    function EntitySpec(context) {
        this.context = context;
        this.Trade = Trade;
        this.TradeSummary = TradeSummary;
        this.CalculatedTradeState = CalculatedTradeState;
    }
    EntitySpec.prototype.list = function (accountID, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/trades';
        queryParams = queryParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path + '?';
        if (typeof queryParams['ids'] !== 'undefined') {
            path = path + 'ids=' + queryParams['ids'] + '&';
        }
        if (typeof queryParams['state'] !== 'undefined') {
            path = path + 'state=' + queryParams['state'] + '&';
        }
        if (typeof queryParams['instrument'] !== 'undefined') {
            path = path + 'instrument=' + queryParams['instrument'] + '&';
        }
        if (typeof queryParams['count'] !== 'undefined') {
            path = path + 'count=' + queryParams['count'] + '&';
        }
        if (typeof queryParams['beforeID'] !== 'undefined') {
            path = path + 'beforeID=' + queryParams['beforeID'] + '&';
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
                    if (msg['trades'] !== undefined) {
                        response.body.trades = msg['trades'].map(function (x) { return new Trade(x); });
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
    EntitySpec.prototype.listOpen = function (accountID, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/openTrades';
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
                    if (msg['trades'] !== undefined) {
                        response.body.trades = msg['trades'].map(function (x) { return new Trade(x); });
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
    EntitySpec.prototype.get = function (accountID, tradeSpecifier, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/trades/{tradeSpecifier}';
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path.replace('{' + 'tradeSpecifier' + '}', tradeSpecifier);
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
                    if (msg['trade'] !== undefined) {
                        response.body.trade = new Trade(msg['trade']);
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
    EntitySpec.prototype.close = function (accountID, tradeSpecifier, bodyParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/trades/{tradeSpecifier}/close';
        bodyParams = bodyParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path.replace('{' + 'tradeSpecifier' + '}', tradeSpecifier);
        var body = {};
        if (typeof bodyParams['units'] !== 'undefined') {
            body['units'] = bodyParams['units'];
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
                    if (msg['orderCreateTransaction'] !== undefined) {
                        response.body.orderCreateTransaction = new transaction.MarketOrderTransaction(msg['orderCreateTransaction']);
                    }
                    if (msg['orderFillTransaction'] !== undefined) {
                        response.body.orderFillTransaction = new transaction.OrderFillTransaction(msg['orderFillTransaction']);
                    }
                    if (msg['orderCancelTransaction'] !== undefined) {
                        response.body.orderCancelTransaction = new transaction.OrderCancelTransaction(msg['orderCancelTransaction']);
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                    if (msg['orderRejectTransaction'] !== undefined) {
                        response.body.orderRejectTransaction = new transaction.MarketOrderRejectTransaction(msg['orderRejectTransaction']);
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
                    if (msg['orderRejectTransaction'] !== undefined) {
                        response.body.orderRejectTransaction = new transaction.MarketOrderRejectTransaction(msg['orderRejectTransaction']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
                    }
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
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
        return this.context.request('PUT', path, body, undefined, handleResponse);
    };
    EntitySpec.prototype.setClientExtensions = function (accountID, tradeSpecifier, bodyParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/trades/{tradeSpecifier}/clientExtensions';
        bodyParams = bodyParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path.replace('{' + 'tradeSpecifier' + '}', tradeSpecifier);
        var body = {};
        if (typeof bodyParams['clientExtensions'] !== 'undefined') {
            body['clientExtensions'] = bodyParams['clientExtensions'];
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
                    if (msg['tradeClientExtensionsModifyTransaction'] !== undefined) {
                        response.body.tradeClientExtensionsModifyTransaction = new transaction.TradeClientExtensionsModifyTransaction(msg['tradeClientExtensionsModifyTransaction']);
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                    if (msg['tradeClientExtensionsModifyRejectTransaction'] !== undefined) {
                        response.body.tradeClientExtensionsModifyRejectTransaction = new transaction.TradeClientExtensionsModifyRejectTransaction(msg['tradeClientExtensionsModifyRejectTransaction']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
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
                    if (msg['tradeClientExtensionsModifyRejectTransaction'] !== undefined) {
                        response.body.tradeClientExtensionsModifyRejectTransaction = new transaction.TradeClientExtensionsModifyRejectTransaction(msg['tradeClientExtensionsModifyRejectTransaction']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
                    }
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
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
        return this.context.request('PUT', path, body, undefined, handleResponse);
    };
    EntitySpec.prototype.setDependentOrders = function (accountID, tradeSpecifier, bodyParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/trades/{tradeSpecifier}/orders';
        bodyParams = bodyParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path.replace('{' + 'tradeSpecifier' + '}', tradeSpecifier);
        var body = {};
        if (typeof bodyParams['takeProfit'] !== 'undefined') {
            body['takeProfit'] = bodyParams['takeProfit'];
        }
        if (typeof bodyParams['stopLoss'] !== 'undefined') {
            body['stopLoss'] = bodyParams['stopLoss'];
        }
        if (typeof bodyParams['trailingStopLoss'] !== 'undefined') {
            body['trailingStopLoss'] = bodyParams['trailingStopLoss'];
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
                    if (msg['takeProfitOrderCancelTransaction'] !== undefined) {
                        response.body.takeProfitOrderCancelTransaction = new transaction.OrderCancelTransaction(msg['takeProfitOrderCancelTransaction']);
                    }
                    if (msg['takeProfitOrderTransaction'] !== undefined) {
                        response.body.takeProfitOrderTransaction = new transaction.TakeProfitOrderTransaction(msg['takeProfitOrderTransaction']);
                    }
                    if (msg['takeProfitOrderFillTransaction'] !== undefined) {
                        response.body.takeProfitOrderFillTransaction = new transaction.OrderFillTransaction(msg['takeProfitOrderFillTransaction']);
                    }
                    if (msg['takeProfitOrderCreatedCancelTransaction'] !== undefined) {
                        response.body.takeProfitOrderCreatedCancelTransaction = new transaction.OrderCancelTransaction(msg['takeProfitOrderCreatedCancelTransaction']);
                    }
                    if (msg['stopLossOrderCancelTransaction'] !== undefined) {
                        response.body.stopLossOrderCancelTransaction = new transaction.OrderCancelTransaction(msg['stopLossOrderCancelTransaction']);
                    }
                    if (msg['stopLossOrderTransaction'] !== undefined) {
                        response.body.stopLossOrderTransaction = new transaction.StopLossOrderTransaction(msg['stopLossOrderTransaction']);
                    }
                    if (msg['stopLossOrderFillTransaction'] !== undefined) {
                        response.body.stopLossOrderFillTransaction = new transaction.OrderFillTransaction(msg['stopLossOrderFillTransaction']);
                    }
                    if (msg['stopLossOrderCreatedCancelTransaction'] !== undefined) {
                        response.body.stopLossOrderCreatedCancelTransaction = new transaction.OrderCancelTransaction(msg['stopLossOrderCreatedCancelTransaction']);
                    }
                    if (msg['trailingStopLossOrderCancelTransaction'] !== undefined) {
                        response.body.trailingStopLossOrderCancelTransaction = new transaction.OrderCancelTransaction(msg['trailingStopLossOrderCancelTransaction']);
                    }
                    if (msg['trailingStopLossOrderTransaction'] !== undefined) {
                        response.body.trailingStopLossOrderTransaction = new transaction.TrailingStopLossOrderTransaction(msg['trailingStopLossOrderTransaction']);
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
                    if (msg['takeProfitOrderCancelRejectTransaction'] !== undefined) {
                        response.body.takeProfitOrderCancelRejectTransaction = new transaction.OrderCancelRejectTransaction(msg['takeProfitOrderCancelRejectTransaction']);
                    }
                    if (msg['takeProfitOrderRejectTransaction'] !== undefined) {
                        response.body.takeProfitOrderRejectTransaction = new transaction.TakeProfitOrderRejectTransaction(msg['takeProfitOrderRejectTransaction']);
                    }
                    if (msg['stopLossOrderCancelRejectTransaction'] !== undefined) {
                        response.body.stopLossOrderCancelRejectTransaction = new transaction.OrderCancelRejectTransaction(msg['stopLossOrderCancelRejectTransaction']);
                    }
                    if (msg['stopLossOrderRejectTransaction'] !== undefined) {
                        response.body.stopLossOrderRejectTransaction = new transaction.StopLossOrderRejectTransaction(msg['stopLossOrderRejectTransaction']);
                    }
                    if (msg['trailingStopLossOrderCancelRejectTransaction'] !== undefined) {
                        response.body.trailingStopLossOrderCancelRejectTransaction = new transaction.OrderCancelRejectTransaction(msg['trailingStopLossOrderCancelRejectTransaction']);
                    }
                    if (msg['trailingStopLossOrderRejectTransaction'] !== undefined) {
                        response.body.trailingStopLossOrderRejectTransaction = new transaction.TrailingStopLossOrderRejectTransaction(msg['trailingStopLossOrderRejectTransaction']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
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
        return this.context.request('PUT', path, body, undefined, handleResponse);
    };
    return EntitySpec;
}());
exports.EntitySpec = EntitySpec;
//# sourceMappingURL=trade.js.map