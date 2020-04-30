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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var transaction = require("./transaction");
var primitives = require("./primitives");
exports.OrderIdentifier_Properties = [
    new base_1.Property('orderID', 'orderID', 'The OANDA-assigned Order ID', 'primitive', 'order.OrderID'),
    new base_1.Property('clientOrderID', 'clientOrderID', 'The client-provided client Order ID', 'primitive', 'transaction.ClientID'),
];
var OrderIdentifier = /** @class */ (function (_super) {
    __extends(OrderIdentifier, _super);
    function OrderIdentifier(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.OrderIdentifier_Properties;
        data = data || {};
        if (data['orderID'] !== undefined) {
            _this.orderID = data['orderID'];
        }
        if (data['clientOrderID'] !== undefined) {
            _this.clientOrderID = data['clientOrderID'];
        }
        return _this;
    }
    return OrderIdentifier;
}(base_1.Definition));
exports.OrderIdentifier = OrderIdentifier;
exports.DynamicOrderState_Properties = [
    new base_1.Property('id', 'Order ID', "The Order's ID.", 'primitive', 'order.OrderID'),
    new base_1.Property('trailingStopValue', 'Trailing Stop Value', "The Order's calculated trailing stop value.", 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('triggerDistance', 'Trigger Distance', "The distance between the Trailing Stop Loss Order's trailingStopValue and the current Market Price. This represents the distance (in price units) of the Order from a triggering price. If the distance could not be determined, this value will not be set.", 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('isTriggerDistanceExact', 'Trigger Distance Is Exact', 'True if an exact trigger distance could be calculated. If false, it means the provided trigger distance is a best estimate. If the distance could not be determined, this value will not be set.', 'primitive', 'boolean'),
];
var DynamicOrderState = /** @class */ (function (_super) {
    __extends(DynamicOrderState, _super);
    function DynamicOrderState(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.DynamicOrderState_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['trailingStopValue'] !== undefined) {
            _this.trailingStopValue = data['trailingStopValue'];
        }
        if (data['triggerDistance'] !== undefined) {
            _this.triggerDistance = data['triggerDistance'];
        }
        if (data['isTriggerDistanceExact'] !== undefined) {
            _this.isTriggerDistanceExact = data['isTriggerDistanceExact'];
        }
        return _this;
    }
    return DynamicOrderState;
}(base_1.Definition));
exports.DynamicOrderState = DynamicOrderState;
exports.Order_Properties = [
    new base_1.Property('id', 'Order ID', "The Order's identifier, unique within the Order's Account.", 'primitive', 'order.OrderID'),
    new base_1.Property('createTime', 'Create Time', 'The time when the Order was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('state', 'State', 'The current state of the Order.', 'primitive', 'order.OrderState'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
];
var Order = /** @class */ (function (_super) {
    __extends(Order, _super);
    function Order(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = 'Order {id}';
        _this._properties = exports.Order_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['createTime'] !== undefined) {
            _this.createTime = data['createTime'];
        }
        if (data['state'] !== undefined) {
            _this.state = data['state'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        return _this;
    }
    Order.create = function (order) {
        if (!order['type']) {
            return new Order(order);
        }
        else if (order['type'] == 'TAKE_PROFIT') {
            return new TakeProfitOrder(order);
        }
        else if (order['type'] == 'STOP_LOSS') {
            return new StopLossOrder(order);
        }
        else if (order['type'] == 'TRAILING_STOP_LOSS') {
            return new TrailingStopLossOrder(order);
        }
        else if (order['type'] == 'MARKET') {
            return new MarketOrder(order);
        }
        else if (order['type'] == 'FIXED_PRICE') {
            return new FixedPriceOrder(order);
        }
        else if (order['type'] == 'LIMIT') {
            return new LimitOrder(order);
        }
        else if (order['type'] == 'STOP') {
            return new StopOrder(order);
        }
        else if (order['type'] == 'MARKET_IF_TOUCHED') {
            return new MarketIfTouchedOrder(order);
        }
        return new Order(order);
    };
    return Order;
}(base_1.Definition));
exports.Order = Order;
exports.MarketOrder_Properties = [
    new base_1.Property('id', 'Order ID', "The Order's identifier, unique within the Order's Account.", 'primitive', 'order.OrderID'),
    new base_1.Property('createTime', 'Create Time', 'The time when the Order was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('state', 'State', 'The current state of the Order.', 'primitive', 'order.OrderState'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('type', 'Type', 'The type of the Order. Always set to "MARKET" for Market Orders.', 'primitive', 'order.OrderType'),
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
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', "TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.", 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', "StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', "TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('fillingTransactionID', 'Filling Transaction ID', "ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('filledTime', 'Filled Time', "Date/time when the Order was filled (only provided when the Order's state is FILLED)", 'primitive', 'primitives.DateTime'),
    new base_1.Property('tradeOpenedID', 'Trade Opened ID', "Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeReducedID', 'Trade Reduced ID', "Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeClosedIDs', 'Trade Closed IDs', "Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)", 'array_primitive', 'TradeID'),
    new base_1.Property('cancellingTransactionID', 'Cancelling Transction ID', "ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('cancelledTime', 'Cancelled Time', 'Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)', 'primitive', 'primitives.DateTime'),
];
var MarketOrder = /** @class */ (function (_super) {
    __extends(MarketOrder, _super);
    function MarketOrder(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '{units} units of {instrument}';
        _this._nameFormat = 'Market Order {id}';
        _this._properties = exports.MarketOrder_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['createTime'] !== undefined) {
            _this.createTime = data['createTime'];
        }
        if (data['state'] !== undefined) {
            _this.state = data['state'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'MARKET';
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
            _this.tradeClose = new transaction.MarketOrderTradeClose(data['tradeClose']);
        }
        if (data['longPositionCloseout'] !== undefined) {
            _this.longPositionCloseout = new transaction.MarketOrderPositionCloseout(data['longPositionCloseout']);
        }
        if (data['shortPositionCloseout'] !== undefined) {
            _this.shortPositionCloseout = new transaction.MarketOrderPositionCloseout(data['shortPositionCloseout']);
        }
        if (data['marginCloseout'] !== undefined) {
            _this.marginCloseout = new transaction.MarketOrderMarginCloseout(data['marginCloseout']);
        }
        if (data['delayedTradeClose'] !== undefined) {
            _this.delayedTradeClose = new transaction.MarketOrderDelayedTradeClose(data['delayedTradeClose']);
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new transaction.TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new transaction.StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new transaction.TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new transaction.ClientExtensions(data['tradeClientExtensions']);
        }
        if (data['fillingTransactionID'] !== undefined) {
            _this.fillingTransactionID = data['fillingTransactionID'];
        }
        if (data['filledTime'] !== undefined) {
            _this.filledTime = data['filledTime'];
        }
        if (data['tradeOpenedID'] !== undefined) {
            _this.tradeOpenedID = data['tradeOpenedID'];
        }
        if (data['tradeReducedID'] !== undefined) {
            _this.tradeReducedID = data['tradeReducedID'];
        }
        if (data['tradeClosedIDs'] !== undefined) {
            _this.tradeClosedIDs = data['tradeClosedIDs'];
        }
        if (data['cancellingTransactionID'] !== undefined) {
            _this.cancellingTransactionID = data['cancellingTransactionID'];
        }
        if (data['cancelledTime'] !== undefined) {
            _this.cancelledTime = data['cancelledTime'];
        }
        return _this;
    }
    return MarketOrder;
}(base_1.Definition));
exports.MarketOrder = MarketOrder;
exports.FixedPriceOrder_Properties = [
    new base_1.Property('id', 'Order ID', "The Order's identifier, unique within the Order's Account.", 'primitive', 'order.OrderID'),
    new base_1.Property('createTime', 'Create Time', 'The time when the Order was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('state', 'State', 'The current state of the Order.', 'primitive', 'order.OrderState'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('type', 'Type', 'The type of the Order. Always set to "FIXED_PRICE" for Fixed Price Orders.', 'primitive', 'order.OrderType'),
    new base_1.Property('instrument', 'Instrument', "The Fixed Price Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the Fixed Price Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Price', 'The price specified for the Fixed Price Order. This price is the exact price that the Fixed Price Order will be filled at.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('tradeState', 'TradeState', 'The state that the trade resulting from the Fixed Price Order should be set to.', 'primitive', 'string'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', "TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.", 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', "StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', "TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('fillingTransactionID', 'Filling Transaction ID', "ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('filledTime', 'Filled Time', "Date/time when the Order was filled (only provided when the Order's state is FILLED)", 'primitive', 'primitives.DateTime'),
    new base_1.Property('tradeOpenedID', 'Trade Opened ID', "Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeReducedID', 'Trade Reduced ID', "Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeClosedIDs', 'Trade Closed IDs', "Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)", 'array_primitive', 'TradeID'),
    new base_1.Property('cancellingTransactionID', 'Cancelling Transction ID', "ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('cancelledTime', 'Cancelled Time', 'Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)', 'primitive', 'primitives.DateTime'),
];
var FixedPriceOrder = /** @class */ (function (_super) {
    __extends(FixedPriceOrder, _super);
    function FixedPriceOrder(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '{units} units of {instrument} @ {price}';
        _this._nameFormat = 'Fixed Price Order {id}';
        _this._properties = exports.FixedPriceOrder_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['createTime'] !== undefined) {
            _this.createTime = data['createTime'];
        }
        if (data['state'] !== undefined) {
            _this.state = data['state'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'FIXED_PRICE';
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
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new transaction.TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new transaction.StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new transaction.TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new transaction.ClientExtensions(data['tradeClientExtensions']);
        }
        if (data['fillingTransactionID'] !== undefined) {
            _this.fillingTransactionID = data['fillingTransactionID'];
        }
        if (data['filledTime'] !== undefined) {
            _this.filledTime = data['filledTime'];
        }
        if (data['tradeOpenedID'] !== undefined) {
            _this.tradeOpenedID = data['tradeOpenedID'];
        }
        if (data['tradeReducedID'] !== undefined) {
            _this.tradeReducedID = data['tradeReducedID'];
        }
        if (data['tradeClosedIDs'] !== undefined) {
            _this.tradeClosedIDs = data['tradeClosedIDs'];
        }
        if (data['cancellingTransactionID'] !== undefined) {
            _this.cancellingTransactionID = data['cancellingTransactionID'];
        }
        if (data['cancelledTime'] !== undefined) {
            _this.cancelledTime = data['cancelledTime'];
        }
        return _this;
    }
    return FixedPriceOrder;
}(base_1.Definition));
exports.FixedPriceOrder = FixedPriceOrder;
exports.LimitOrder_Properties = [
    new base_1.Property('id', 'Order ID', "The Order's identifier, unique within the Order's Account.", 'primitive', 'order.OrderID'),
    new base_1.Property('createTime', 'Create Time', 'The time when the Order was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('state', 'State', 'The current state of the Order.', 'primitive', 'order.OrderState'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('type', 'Type', 'The type of the Order. Always set to "LIMIT" for Limit Orders.', 'primitive', 'order.OrderType'),
    new base_1.Property('instrument', 'Instrument', "The Limit Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the Limit Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the Limit Order. The Limit Order will only be filled by a market price that is equal to or better than this price.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the Limit Order.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the Limit Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', "TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.", 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', "StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', "TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('fillingTransactionID', 'Filling Transaction ID', "ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('filledTime', 'Filled Time', "Date/time when the Order was filled (only provided when the Order's state is FILLED)", 'primitive', 'primitives.DateTime'),
    new base_1.Property('tradeOpenedID', 'Trade Opened ID', "Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeReducedID', 'Trade Reduced ID', "Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeClosedIDs', 'Trade Closed IDs', "Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)", 'array_primitive', 'TradeID'),
    new base_1.Property('cancellingTransactionID', 'Cancelling Transction ID', "ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('cancelledTime', 'Cancelled Time', 'Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)', 'primitive', 'primitives.DateTime'),
    new base_1.Property('replacesOrderID', 'Replaces Order ID', 'The ID of the Order that was replaced by this Order (only provided if this Order was created as part of a cancel/replace).', 'primitive', 'order.OrderID'),
    new base_1.Property('replacedByOrderID', 'Replaced by Order ID', 'The ID of the Order that replaced this Order (only provided if this Order was cancelled as part of a cancel/replace).', 'primitive', 'order.OrderID'),
];
var LimitOrder = /** @class */ (function (_super) {
    __extends(LimitOrder, _super);
    function LimitOrder(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '{units} units of {instrument} @ {price}';
        _this._nameFormat = 'Limit Order {id}';
        _this._properties = exports.LimitOrder_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['createTime'] !== undefined) {
            _this.createTime = data['createTime'];
        }
        if (data['state'] !== undefined) {
            _this.state = data['state'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'LIMIT';
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
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new transaction.TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new transaction.StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new transaction.TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new transaction.ClientExtensions(data['tradeClientExtensions']);
        }
        if (data['fillingTransactionID'] !== undefined) {
            _this.fillingTransactionID = data['fillingTransactionID'];
        }
        if (data['filledTime'] !== undefined) {
            _this.filledTime = data['filledTime'];
        }
        if (data['tradeOpenedID'] !== undefined) {
            _this.tradeOpenedID = data['tradeOpenedID'];
        }
        if (data['tradeReducedID'] !== undefined) {
            _this.tradeReducedID = data['tradeReducedID'];
        }
        if (data['tradeClosedIDs'] !== undefined) {
            _this.tradeClosedIDs = data['tradeClosedIDs'];
        }
        if (data['cancellingTransactionID'] !== undefined) {
            _this.cancellingTransactionID = data['cancellingTransactionID'];
        }
        if (data['cancelledTime'] !== undefined) {
            _this.cancelledTime = data['cancelledTime'];
        }
        if (data['replacesOrderID'] !== undefined) {
            _this.replacesOrderID = data['replacesOrderID'];
        }
        if (data['replacedByOrderID'] !== undefined) {
            _this.replacedByOrderID = data['replacedByOrderID'];
        }
        return _this;
    }
    return LimitOrder;
}(base_1.Definition));
exports.LimitOrder = LimitOrder;
exports.StopOrder_Properties = [
    new base_1.Property('id', 'Order ID', "The Order's identifier, unique within the Order's Account.", 'primitive', 'order.OrderID'),
    new base_1.Property('createTime', 'Create Time', 'The time when the Order was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('state', 'State', 'The current state of the Order.', 'primitive', 'order.OrderState'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('type', 'Type', 'The type of the Order. Always set to "STOP" for Stop Orders.', 'primitive', 'order.OrderType'),
    new base_1.Property('instrument', 'Instrument', "The Stop Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the Stop Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the Stop Order. The Stop Order will only be filled by a market price that is equal to or worse than this price.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('priceBound', 'Price Bound', 'The worst market price that may be used to fill this Stop Order. If the market gaps and crosses through both the price and the priceBound, the Stop Order will be cancelled instead of being filled.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the Stop Order.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the Stop Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', "TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.", 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', "StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', "TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('fillingTransactionID', 'Filling Transaction ID', "ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('filledTime', 'Filled Time', "Date/time when the Order was filled (only provided when the Order's state is FILLED)", 'primitive', 'primitives.DateTime'),
    new base_1.Property('tradeOpenedID', 'Trade Opened ID', "Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeReducedID', 'Trade Reduced ID', "Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeClosedIDs', 'Trade Closed IDs', "Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)", 'array_primitive', 'TradeID'),
    new base_1.Property('cancellingTransactionID', 'Cancelling Transction ID', "ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('cancelledTime', 'Cancelled Time', 'Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)', 'primitive', 'primitives.DateTime'),
    new base_1.Property('replacesOrderID', 'Replaces Order ID', 'The ID of the Order that was replaced by this Order (only provided if this Order was created as part of a cancel/replace).', 'primitive', 'order.OrderID'),
    new base_1.Property('replacedByOrderID', 'Replaced by Order ID', 'The ID of the Order that replaced this Order (only provided if this Order was cancelled as part of a cancel/replace).', 'primitive', 'order.OrderID'),
];
var StopOrder = /** @class */ (function (_super) {
    __extends(StopOrder, _super);
    function StopOrder(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '{units} units of {instrument} @ {price}';
        _this._nameFormat = 'Stop Order {id}';
        _this._properties = exports.StopOrder_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['createTime'] !== undefined) {
            _this.createTime = data['createTime'];
        }
        if (data['state'] !== undefined) {
            _this.state = data['state'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'STOP';
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
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new transaction.TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new transaction.StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new transaction.TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new transaction.ClientExtensions(data['tradeClientExtensions']);
        }
        if (data['fillingTransactionID'] !== undefined) {
            _this.fillingTransactionID = data['fillingTransactionID'];
        }
        if (data['filledTime'] !== undefined) {
            _this.filledTime = data['filledTime'];
        }
        if (data['tradeOpenedID'] !== undefined) {
            _this.tradeOpenedID = data['tradeOpenedID'];
        }
        if (data['tradeReducedID'] !== undefined) {
            _this.tradeReducedID = data['tradeReducedID'];
        }
        if (data['tradeClosedIDs'] !== undefined) {
            _this.tradeClosedIDs = data['tradeClosedIDs'];
        }
        if (data['cancellingTransactionID'] !== undefined) {
            _this.cancellingTransactionID = data['cancellingTransactionID'];
        }
        if (data['cancelledTime'] !== undefined) {
            _this.cancelledTime = data['cancelledTime'];
        }
        if (data['replacesOrderID'] !== undefined) {
            _this.replacesOrderID = data['replacesOrderID'];
        }
        if (data['replacedByOrderID'] !== undefined) {
            _this.replacedByOrderID = data['replacedByOrderID'];
        }
        return _this;
    }
    return StopOrder;
}(base_1.Definition));
exports.StopOrder = StopOrder;
exports.MarketIfTouchedOrder_Properties = [
    new base_1.Property('id', 'Order ID', "The Order's identifier, unique within the Order's Account.", 'primitive', 'order.OrderID'),
    new base_1.Property('createTime', 'Create Time', 'The time when the Order was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('state', 'State', 'The current state of the Order.', 'primitive', 'order.OrderState'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('type', 'Type', 'The type of the Order. Always set to "MARKET_IF_TOUCHED" for Market If Touched Orders.', 'primitive', 'order.OrderType'),
    new base_1.Property('instrument', 'Instrument', "The MarketIfTouched Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the MarketIfTouched Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Price', "The price threshold specified for the MarketIfTouched Order. The MarketIfTouched Order will only be filled by a market price that crosses this price from the direction of the market price at the time when the Order was created (the initialMarketPrice). Depending on the value of the Order's price and initialMarketPrice, the MarketIfTouchedOrder will behave like a Limit or a Stop Order.", 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('priceBound', 'Price Value', 'The worst market price that may be used to fill this MarketIfTouched Order.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the MarketIfTouched Order. Restricted to "GTC", "GFD" and "GTD" for MarketIfTouched Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the MarketIfTouched Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('initialMarketPrice', 'Initial Market Price', 'The Market price at the time when the MarketIfTouched Order was created.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', "TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.", 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', "StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', "TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('fillingTransactionID', 'Filling Transaction ID', "ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('filledTime', 'Filled Time', "Date/time when the Order was filled (only provided when the Order's state is FILLED)", 'primitive', 'primitives.DateTime'),
    new base_1.Property('tradeOpenedID', 'Trade Opened ID', "Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeReducedID', 'Trade Reduced ID', "Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeClosedIDs', 'Trade Closed IDs', "Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)", 'array_primitive', 'TradeID'),
    new base_1.Property('cancellingTransactionID', 'Cancelling Transction ID', "ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('cancelledTime', 'Cancelled Time', 'Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)', 'primitive', 'primitives.DateTime'),
    new base_1.Property('replacesOrderID', 'Replaces Order ID', 'The ID of the Order that was replaced by this Order (only provided if this Order was created as part of a cancel/replace).', 'primitive', 'order.OrderID'),
    new base_1.Property('replacedByOrderID', 'Replaced by Order ID', 'The ID of the Order that replaced this Order (only provided if this Order was cancelled as part of a cancel/replace).', 'primitive', 'order.OrderID'),
];
var MarketIfTouchedOrder = /** @class */ (function (_super) {
    __extends(MarketIfTouchedOrder, _super);
    function MarketIfTouchedOrder(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '{units} units of {instrument} @ {price}';
        _this._nameFormat = 'MIT Order {id}';
        _this._properties = exports.MarketIfTouchedOrder_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['createTime'] !== undefined) {
            _this.createTime = data['createTime'];
        }
        if (data['state'] !== undefined) {
            _this.state = data['state'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'MARKET_IF_TOUCHED';
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
        if (data['initialMarketPrice'] !== undefined) {
            _this.initialMarketPrice = data['initialMarketPrice'];
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new transaction.TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new transaction.StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new transaction.TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new transaction.ClientExtensions(data['tradeClientExtensions']);
        }
        if (data['fillingTransactionID'] !== undefined) {
            _this.fillingTransactionID = data['fillingTransactionID'];
        }
        if (data['filledTime'] !== undefined) {
            _this.filledTime = data['filledTime'];
        }
        if (data['tradeOpenedID'] !== undefined) {
            _this.tradeOpenedID = data['tradeOpenedID'];
        }
        if (data['tradeReducedID'] !== undefined) {
            _this.tradeReducedID = data['tradeReducedID'];
        }
        if (data['tradeClosedIDs'] !== undefined) {
            _this.tradeClosedIDs = data['tradeClosedIDs'];
        }
        if (data['cancellingTransactionID'] !== undefined) {
            _this.cancellingTransactionID = data['cancellingTransactionID'];
        }
        if (data['cancelledTime'] !== undefined) {
            _this.cancelledTime = data['cancelledTime'];
        }
        if (data['replacesOrderID'] !== undefined) {
            _this.replacesOrderID = data['replacesOrderID'];
        }
        if (data['replacedByOrderID'] !== undefined) {
            _this.replacedByOrderID = data['replacedByOrderID'];
        }
        return _this;
    }
    return MarketIfTouchedOrder;
}(base_1.Definition));
exports.MarketIfTouchedOrder = MarketIfTouchedOrder;
exports.TakeProfitOrder_Properties = [
    new base_1.Property('id', 'Order ID', "The Order's identifier, unique within the Order's Account.", 'primitive', 'order.OrderID'),
    new base_1.Property('createTime', 'Create Time', 'The time when the Order was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('state', 'State', 'The current state of the Order.', 'primitive', 'order.OrderState'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('type', 'Type', 'The type of the Order. Always set to "TAKE_PROFIT" for Take Profit Orders.', 'primitive', 'order.OrderType'),
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade to close when the price threshold is breached.', 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', 'The client ID of the Trade to be closed when the price threshold is breached.', 'primitive', 'transaction.ClientID'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the TakeProfit Order. The associated Trade will be closed by a market price that is equal to or better than this threshold.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the TakeProfit Order. Restricted to "GTC", "GFD" and "GTD" for TakeProfit Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the TakeProfit Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('fillingTransactionID', 'Filling Transaction ID', "ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('filledTime', 'Filled Time', "Date/time when the Order was filled (only provided when the Order's state is FILLED)", 'primitive', 'primitives.DateTime'),
    new base_1.Property('tradeOpenedID', 'Trade Opened ID', "Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeReducedID', 'Trade Reduced ID', "Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeClosedIDs', 'Trade Closed IDs', "Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)", 'array_primitive', 'TradeID'),
    new base_1.Property('cancellingTransactionID', 'Cancelling Transction ID', "ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('cancelledTime', 'Cancelled Time', 'Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)', 'primitive', 'primitives.DateTime'),
    new base_1.Property('replacesOrderID', 'Replaces Order ID', 'The ID of the Order that was replaced by this Order (only provided if this Order was created as part of a cancel/replace).', 'primitive', 'order.OrderID'),
    new base_1.Property('replacedByOrderID', 'Replaced by Order ID', 'The ID of the Order that replaced this Order (only provided if this Order was cancelled as part of a cancel/replace).', 'primitive', 'order.OrderID'),
];
var TakeProfitOrder = /** @class */ (function (_super) {
    __extends(TakeProfitOrder, _super);
    function TakeProfitOrder(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Take Profit for Trade {tradeID} @ {price}';
        _this._nameFormat = 'TP Order {id}';
        _this._properties = exports.TakeProfitOrder_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['createTime'] !== undefined) {
            _this.createTime = data['createTime'];
        }
        if (data['state'] !== undefined) {
            _this.state = data['state'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'TAKE_PROFIT';
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
        if (data['fillingTransactionID'] !== undefined) {
            _this.fillingTransactionID = data['fillingTransactionID'];
        }
        if (data['filledTime'] !== undefined) {
            _this.filledTime = data['filledTime'];
        }
        if (data['tradeOpenedID'] !== undefined) {
            _this.tradeOpenedID = data['tradeOpenedID'];
        }
        if (data['tradeReducedID'] !== undefined) {
            _this.tradeReducedID = data['tradeReducedID'];
        }
        if (data['tradeClosedIDs'] !== undefined) {
            _this.tradeClosedIDs = data['tradeClosedIDs'];
        }
        if (data['cancellingTransactionID'] !== undefined) {
            _this.cancellingTransactionID = data['cancellingTransactionID'];
        }
        if (data['cancelledTime'] !== undefined) {
            _this.cancelledTime = data['cancelledTime'];
        }
        if (data['replacesOrderID'] !== undefined) {
            _this.replacesOrderID = data['replacesOrderID'];
        }
        if (data['replacedByOrderID'] !== undefined) {
            _this.replacedByOrderID = data['replacedByOrderID'];
        }
        return _this;
    }
    return TakeProfitOrder;
}(base_1.Definition));
exports.TakeProfitOrder = TakeProfitOrder;
exports.StopLossOrder_Properties = [
    new base_1.Property('id', 'Order ID', "The Order's identifier, unique within the Order's Account.", 'primitive', 'order.OrderID'),
    new base_1.Property('createTime', 'Create Time', 'The time when the Order was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('state', 'State', 'The current state of the Order.', 'primitive', 'order.OrderState'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('type', 'Type', 'The type of the Order. Always set to "STOP_LOSS" for Stop Loss Orders.', 'primitive', 'order.OrderType'),
    new base_1.Property('guaranteedExecutionPremium', 'Guaranteed Execution Fee', 'The premium that will be charged if the Stop Loss Order is guaranteed and the Order is filled at the guaranteed price. It is in price units and is charged for each unit of the Trade.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade to close when the price threshold is breached.', 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', 'The client ID of the Trade to be closed when the price threshold is breached.', 'primitive', 'transaction.ClientID'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the Stop Loss Order. If the guaranteed flag is false, the associated Trade will be closed by a market price that is equal to or worse than this threshold. If the flag is true the associated Trade will be closed at this price.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('distance', 'Price Distance', "Specifies the distance (in price units) from the Account's current price to use as the Stop Loss Order price. If the Trade is short the Instrument's bid price is used, and for long Trades the ask is used.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the StopLoss Order. Restricted to "GTC", "GFD" and "GTD" for StopLoss Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('guaranteed', 'Guaranteed', 'Flag indicating that the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.', 'primitive', 'boolean'),
    new base_1.Property('fillingTransactionID', 'Filling Transaction ID', "ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('filledTime', 'Filled Time', "Date/time when the Order was filled (only provided when the Order's state is FILLED)", 'primitive', 'primitives.DateTime'),
    new base_1.Property('tradeOpenedID', 'Trade Opened ID', "Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeReducedID', 'Trade Reduced ID', "Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeClosedIDs', 'Trade Closed IDs', "Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)", 'array_primitive', 'TradeID'),
    new base_1.Property('cancellingTransactionID', 'Cancelling Transction ID', "ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('cancelledTime', 'Cancelled Time', 'Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)', 'primitive', 'primitives.DateTime'),
    new base_1.Property('replacesOrderID', 'Replaces Order ID', 'The ID of the Order that was replaced by this Order (only provided if this Order was created as part of a cancel/replace).', 'primitive', 'order.OrderID'),
    new base_1.Property('replacedByOrderID', 'Replaced by Order ID', 'The ID of the Order that replaced this Order (only provided if this Order was cancelled as part of a cancel/replace).', 'primitive', 'order.OrderID'),
];
var StopLossOrder = /** @class */ (function (_super) {
    __extends(StopLossOrder, _super);
    function StopLossOrder(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Stop Loss for Trade {tradeID} @ {price}';
        _this._nameFormat = 'SL Order {id}';
        _this._properties = exports.StopLossOrder_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['createTime'] !== undefined) {
            _this.createTime = data['createTime'];
        }
        if (data['state'] !== undefined) {
            _this.state = data['state'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'STOP_LOSS';
        }
        if (data['guaranteedExecutionPremium'] !== undefined) {
            _this.guaranteedExecutionPremium = data['guaranteedExecutionPremium'];
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
        if (data['fillingTransactionID'] !== undefined) {
            _this.fillingTransactionID = data['fillingTransactionID'];
        }
        if (data['filledTime'] !== undefined) {
            _this.filledTime = data['filledTime'];
        }
        if (data['tradeOpenedID'] !== undefined) {
            _this.tradeOpenedID = data['tradeOpenedID'];
        }
        if (data['tradeReducedID'] !== undefined) {
            _this.tradeReducedID = data['tradeReducedID'];
        }
        if (data['tradeClosedIDs'] !== undefined) {
            _this.tradeClosedIDs = data['tradeClosedIDs'];
        }
        if (data['cancellingTransactionID'] !== undefined) {
            _this.cancellingTransactionID = data['cancellingTransactionID'];
        }
        if (data['cancelledTime'] !== undefined) {
            _this.cancelledTime = data['cancelledTime'];
        }
        if (data['replacesOrderID'] !== undefined) {
            _this.replacesOrderID = data['replacesOrderID'];
        }
        if (data['replacedByOrderID'] !== undefined) {
            _this.replacedByOrderID = data['replacedByOrderID'];
        }
        return _this;
    }
    return StopLossOrder;
}(base_1.Definition));
exports.StopLossOrder = StopLossOrder;
exports.TrailingStopLossOrder_Properties = [
    new base_1.Property('id', 'Order ID', "The Order's identifier, unique within the Order's Account.", 'primitive', 'order.OrderID'),
    new base_1.Property('createTime', 'Create Time', 'The time when the Order was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('state', 'State', 'The current state of the Order.', 'primitive', 'order.OrderState'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions of the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('type', 'Type', 'The type of the Order. Always set to "TRAILING_STOP_LOSS" for Trailing Stop Loss Orders.', 'primitive', 'order.OrderType'),
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade to close when the price threshold is breached.', 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', 'The client ID of the Trade to be closed when the price threshold is breached.', 'primitive', 'transaction.ClientID'),
    new base_1.Property('distance', 'Price Distance', 'The price distance (in price units) specified for the TrailingStopLoss Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the TrailingStopLoss Order. Restricted to "GTC", "GFD" and "GTD" for TrailingStopLoss Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('trailingStopValue', 'Trailing Stop Loss Value', 'The trigger price for the Trailing Stop Loss Order. The trailing stop value will trail (follow) the market price by the TSL order\'s configured "distance" as the market price moves in the winning direction. If the market price moves to a level that is equal to or worse than the trailing stop value, the order will be filled and the Trade will be closed.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('fillingTransactionID', 'Filling Transaction ID', "ID of the Transaction that filled this Order (only provided when the Order's state is FILLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('filledTime', 'Filled Time', "Date/time when the Order was filled (only provided when the Order's state is FILLED)", 'primitive', 'primitives.DateTime'),
    new base_1.Property('tradeOpenedID', 'Trade Opened ID', "Trade ID of Trade opened when the Order was filled (only provided when the Order's state is FILLED and a Trade was opened as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeReducedID', 'Trade Reduced ID', "Trade ID of Trade reduced when the Order was filled (only provided when the Order's state is FILLED and a Trade was reduced as a result of the fill)", 'primitive', 'trade.TradeID'),
    new base_1.Property('tradeClosedIDs', 'Trade Closed IDs', "Trade IDs of Trades closed when the Order was filled (only provided when the Order's state is FILLED and one or more Trades were closed as a result of the fill)", 'array_primitive', 'TradeID'),
    new base_1.Property('cancellingTransactionID', 'Cancelling Transction ID', "ID of the Transaction that cancelled the Order (only provided when the Order's state is CANCELLED)", 'primitive', 'transaction.TransactionID'),
    new base_1.Property('cancelledTime', 'Cancelled Time', 'Date/time when the Order was cancelled (only provided when the state of the Order is CANCELLED)', 'primitive', 'primitives.DateTime'),
    new base_1.Property('replacesOrderID', 'Replaces Order ID', 'The ID of the Order that was replaced by this Order (only provided if this Order was created as part of a cancel/replace).', 'primitive', 'order.OrderID'),
    new base_1.Property('replacedByOrderID', 'Replaced by Order ID', 'The ID of the Order that replaced this Order (only provided if this Order was cancelled as part of a cancel/replace).', 'primitive', 'order.OrderID'),
];
var TrailingStopLossOrder = /** @class */ (function (_super) {
    __extends(TrailingStopLossOrder, _super);
    function TrailingStopLossOrder(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Trailing Stop Loss for Trade {tradeID} @ {trailingStopValue}';
        _this._nameFormat = 'TSL Order {id}';
        _this._properties = exports.TrailingStopLossOrder_Properties;
        data = data || {};
        if (data['id'] !== undefined) {
            _this.id = data['id'];
        }
        if (data['createTime'] !== undefined) {
            _this.createTime = data['createTime'];
        }
        if (data['state'] !== undefined) {
            _this.state = data['state'];
        }
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'TRAILING_STOP_LOSS';
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
        if (data['trailingStopValue'] !== undefined) {
            _this.trailingStopValue = data['trailingStopValue'];
        }
        if (data['fillingTransactionID'] !== undefined) {
            _this.fillingTransactionID = data['fillingTransactionID'];
        }
        if (data['filledTime'] !== undefined) {
            _this.filledTime = data['filledTime'];
        }
        if (data['tradeOpenedID'] !== undefined) {
            _this.tradeOpenedID = data['tradeOpenedID'];
        }
        if (data['tradeReducedID'] !== undefined) {
            _this.tradeReducedID = data['tradeReducedID'];
        }
        if (data['tradeClosedIDs'] !== undefined) {
            _this.tradeClosedIDs = data['tradeClosedIDs'];
        }
        if (data['cancellingTransactionID'] !== undefined) {
            _this.cancellingTransactionID = data['cancellingTransactionID'];
        }
        if (data['cancelledTime'] !== undefined) {
            _this.cancelledTime = data['cancelledTime'];
        }
        if (data['replacesOrderID'] !== undefined) {
            _this.replacesOrderID = data['replacesOrderID'];
        }
        if (data['replacedByOrderID'] !== undefined) {
            _this.replacedByOrderID = data['replacedByOrderID'];
        }
        return _this;
    }
    return TrailingStopLossOrder;
}(base_1.Definition));
exports.TrailingStopLossOrder = TrailingStopLossOrder;
exports.OrderRequest_Properties = [];
var OrderRequest = /** @class */ (function (_super) {
    __extends(OrderRequest, _super);
    function OrderRequest(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = 'OrderRequest';
        _this._properties = exports.OrderRequest_Properties;
        data = data || {};
        return _this;
    }
    return OrderRequest;
}(base_1.Definition));
exports.OrderRequest = OrderRequest;
exports.MarketOrderRequest_Properties = [
    new base_1.Property('type', 'Type', 'The type of the Order to Create. Must be set to "MARKET" when creating a Market Order.', 'primitive', 'order.OrderType'),
    new base_1.Property('instrument', 'Instrument', "The Market Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the Market Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the Market Order. Restricted to FOK or IOC for a MarketOrder.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('priceBound', 'Price Bound', 'The worst price that the client is willing to have the Market Order filled at.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions to add to the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', "TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.", 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', "StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', "TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
];
var MarketOrderRequest = /** @class */ (function (_super) {
    __extends(MarketOrderRequest, _super);
    function MarketOrderRequest(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '{units} units of {instrument}';
        _this._nameFormat = 'Market Order Request';
        _this._properties = exports.MarketOrderRequest_Properties;
        data = data || {};
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'MARKET';
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
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new transaction.TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new transaction.StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new transaction.TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new transaction.ClientExtensions(data['tradeClientExtensions']);
        }
        return _this;
    }
    return MarketOrderRequest;
}(base_1.Definition));
exports.MarketOrderRequest = MarketOrderRequest;
exports.LimitOrderRequest_Properties = [
    new base_1.Property('type', 'Type', 'The type of the Order to Create. Must be set to "LIMIT" when creating a Market Order.', 'primitive', 'order.OrderType'),
    new base_1.Property('instrument', 'Instrument', "The Limit Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the Limit Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the Limit Order. The Limit Order will only be filled by a market price that is equal to or better than this price.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the Limit Order.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the Limit Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions to add to the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', "TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.", 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', "StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', "TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
];
var LimitOrderRequest = /** @class */ (function (_super) {
    __extends(LimitOrderRequest, _super);
    function LimitOrderRequest(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '{units} units of {instrument} @ {price}';
        _this._nameFormat = 'Limit Order Request';
        _this._properties = exports.LimitOrderRequest_Properties;
        data = data || {};
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'LIMIT';
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
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new transaction.TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new transaction.StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new transaction.TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new transaction.ClientExtensions(data['tradeClientExtensions']);
        }
        return _this;
    }
    return LimitOrderRequest;
}(base_1.Definition));
exports.LimitOrderRequest = LimitOrderRequest;
exports.StopOrderRequest_Properties = [
    new base_1.Property('type', 'Type', 'The type of the Order to Create. Must be set to "STOP" when creating a Stop Order.', 'primitive', 'order.OrderType'),
    new base_1.Property('instrument', 'Instrument', "The Stop Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the Stop Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the Stop Order. The Stop Order will only be filled by a market price that is equal to or worse than this price.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('priceBound', 'Price Bound', 'The worst market price that may be used to fill this Stop Order. If the market gaps and crosses through both the price and the priceBound, the Stop Order will be cancelled instead of being filled.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the Stop Order.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the Stop Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions to add to the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', "TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.", 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', "StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', "TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
];
var StopOrderRequest = /** @class */ (function (_super) {
    __extends(StopOrderRequest, _super);
    function StopOrderRequest(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '{units} units of {instrument} @ {price}';
        _this._nameFormat = 'Stop Order Request';
        _this._properties = exports.StopOrderRequest_Properties;
        data = data || {};
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'STOP';
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
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new transaction.TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new transaction.StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new transaction.TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new transaction.ClientExtensions(data['tradeClientExtensions']);
        }
        return _this;
    }
    return StopOrderRequest;
}(base_1.Definition));
exports.StopOrderRequest = StopOrderRequest;
exports.MarketIfTouchedOrderRequest_Properties = [
    new base_1.Property('type', 'Type', 'The type of the Order to Create. Must be set to "MARKET_IF_TOUCHED" when creating a Market If Touched Order.', 'primitive', 'order.OrderType'),
    new base_1.Property('instrument', 'Instrument', "The MarketIfTouched Order's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('units', 'Amount', 'The quantity requested to be filled by the MarketIfTouched Order. A posititive number of units results in a long Order, and a negative number of units results in a short Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('price', 'Price', "The price threshold specified for the MarketIfTouched Order. The MarketIfTouched Order will only be filled by a market price that crosses this price from the direction of the market price at the time when the Order was created (the initialMarketPrice). Depending on the value of the Order's price and initialMarketPrice, the MarketIfTouchedOrder will behave like a Limit or a Stop Order.", 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('priceBound', 'Price Value', 'The worst market price that may be used to fill this MarketIfTouched Order.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the MarketIfTouched Order. Restricted to "GTC", "GFD" and "GTD" for MarketIfTouched Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the MarketIfTouched Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('positionFill', 'Position Fill', 'Specification of how Positions in the Account are modified when the Order is filled.', 'primitive', 'order.OrderPositionFill'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions to add to the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
    new base_1.Property('takeProfitOnFill', 'Take Profit On Fill', "TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Take Profit, or when a Trade's dependent Take Profit Order is modified directly through the Trade.", 'object', 'transaction.TakeProfitDetails'),
    new base_1.Property('stopLossOnFill', 'Stop Loss On Fill', "StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Stop Loss, or when a Trade's dependent Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.StopLossDetails'),
    new base_1.Property('trailingStopLossOnFill', 'Trailing Stop Loss On Fill', "TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client. This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss, or when a Trade's dependent Trailing Stop Loss Order is modified directly through the Trade.", 'object', 'transaction.TrailingStopLossDetails'),
    new base_1.Property('tradeClientExtensions', 'Trade Client Extensions', 'Client Extensions to add to the Trade created when the Order is filled (if such a Trade is created). Do not set, modify, or delete tradeClientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
];
var MarketIfTouchedOrderRequest = /** @class */ (function (_super) {
    __extends(MarketIfTouchedOrderRequest, _super);
    function MarketIfTouchedOrderRequest(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '{units} units of {instrument} @ {price}';
        _this._nameFormat = 'MIT Order Request';
        _this._properties = exports.MarketIfTouchedOrderRequest_Properties;
        data = data || {};
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'MARKET_IF_TOUCHED';
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
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        if (data['takeProfitOnFill'] !== undefined) {
            _this.takeProfitOnFill = new transaction.TakeProfitDetails(data['takeProfitOnFill']);
        }
        if (data['stopLossOnFill'] !== undefined) {
            _this.stopLossOnFill = new transaction.StopLossDetails(data['stopLossOnFill']);
        }
        if (data['trailingStopLossOnFill'] !== undefined) {
            _this.trailingStopLossOnFill = new transaction.TrailingStopLossDetails(data['trailingStopLossOnFill']);
        }
        if (data['tradeClientExtensions'] !== undefined) {
            _this.tradeClientExtensions = new transaction.ClientExtensions(data['tradeClientExtensions']);
        }
        return _this;
    }
    return MarketIfTouchedOrderRequest;
}(base_1.Definition));
exports.MarketIfTouchedOrderRequest = MarketIfTouchedOrderRequest;
exports.TakeProfitOrderRequest_Properties = [
    new base_1.Property('type', 'Type', 'The type of the Order to Create. Must be set to "TAKE_PROFIT" when creating a Take Profit Order.', 'primitive', 'order.OrderType'),
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade to close when the price threshold is breached.', 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', 'The client ID of the Trade to be closed when the price threshold is breached.', 'primitive', 'transaction.ClientID'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the TakeProfit Order. The associated Trade will be closed by a market price that is equal to or better than this threshold.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the TakeProfit Order. Restricted to "GTC", "GFD" and "GTD" for TakeProfit Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the TakeProfit Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions to add to the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
];
var TakeProfitOrderRequest = /** @class */ (function (_super) {
    __extends(TakeProfitOrderRequest, _super);
    function TakeProfitOrderRequest(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Take Profit for Trade {tradeID} @ {price}';
        _this._nameFormat = 'TP Order Request';
        _this._properties = exports.TakeProfitOrderRequest_Properties;
        data = data || {};
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'TAKE_PROFIT';
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
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        return _this;
    }
    return TakeProfitOrderRequest;
}(base_1.Definition));
exports.TakeProfitOrderRequest = TakeProfitOrderRequest;
exports.StopLossOrderRequest_Properties = [
    new base_1.Property('type', 'Type', 'The type of the Order to Create. Must be set to "STOP_LOSS" when creating a Stop Loss Order.', 'primitive', 'order.OrderType'),
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade to close when the price threshold is breached.', 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', 'The client ID of the Trade to be closed when the price threshold is breached.', 'primitive', 'transaction.ClientID'),
    new base_1.Property('price', 'Price', 'The price threshold specified for the Stop Loss Order. If the guaranteed flag is false, the associated Trade will be closed by a market price that is equal to or worse than this threshold. If the flag is true the associated Trade will be closed at this price.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('distance', 'Price Distance', "Specifies the distance (in price units) from the Account's current price to use as the Stop Loss Order price. If the Trade is short the Instrument's bid price is used, and for long Trades the ask is used.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the StopLoss Order. Restricted to "GTC", "GFD" and "GTD" for StopLoss Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('guaranteed', 'Guaranteed', 'Flag indicating that the Stop Loss Order is guaranteed. The default value depends on the GuaranteedStopLossOrderMode of the account, if it is REQUIRED, the default will be true, for DISABLED or ENABLED the default is false.', 'primitive', 'boolean'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions to add to the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
];
var StopLossOrderRequest = /** @class */ (function (_super) {
    __extends(StopLossOrderRequest, _super);
    function StopLossOrderRequest(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Stop Loss for Trade {tradeID} @ {price}';
        _this._nameFormat = 'SL Order Request';
        _this._properties = exports.StopLossOrderRequest_Properties;
        data = data || {};
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'STOP_LOSS';
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
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        return _this;
    }
    return StopLossOrderRequest;
}(base_1.Definition));
exports.StopLossOrderRequest = StopLossOrderRequest;
exports.TrailingStopLossOrderRequest_Properties = [
    new base_1.Property('type', 'Type', 'The type of the Order to Create. Must be set to "TRAILING_STOP_LOSS" when creating a Trailng Stop Loss Order.', 'primitive', 'order.OrderType'),
    new base_1.Property('tradeID', 'Trade ID', 'The ID of the Trade to close when the price threshold is breached.', 'primitive', 'trade.TradeID'),
    new base_1.Property('clientTradeID', 'Client Trade ID', 'The client ID of the Trade to be closed when the price threshold is breached.', 'primitive', 'transaction.ClientID'),
    new base_1.Property('distance', 'Price Distance', 'The price distance (in price units) specified for the TrailingStopLoss Order.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('timeInForce', 'Time In Force', 'The time-in-force requested for the TrailingStopLoss Order. Restricted to "GTC", "GFD" and "GTD" for TrailingStopLoss Orders.', 'primitive', 'order.TimeInForce'),
    new base_1.Property('gtdTime', 'GTD Time', 'The date/time when the StopLoss Order will be cancelled if its timeInForce is "GTD".', 'primitive', 'primitives.DateTime'),
    new base_1.Property('triggerCondition', 'Trigger Condition', 'Specification of which price component should be used when determining if an Order should be triggered and filled. This allows Orders to be triggered based on the bid, ask, mid, default (ask for buy, bid for sell) or inverse (ask for sell, bid for buy) price depending on the desired behaviour. Orders are always filled using their default price component.\nThis feature is only provided through the REST API. Clients who choose to specify a non-default trigger condition will not see it reflected in any of OANDA\'s proprietary or partner trading platforms, their transaction history or their account statements. OANDA platforms always assume that an Order\'s trigger condition is set to the default value when indicating the distance from an Order\'s trigger price, and will always provide the default trigger condition when creating or modifying an Order.\nA special restriction applies when creating a guaranteed Stop Loss Order. In this case the TriggerCondition value must either be "DEFAULT", or the "natural" trigger side "DEFAULT" results in. So for a Stop Loss Order for a long trade valid values are "DEFAULT" and "BID", and for short trades "DEFAULT" and "ASK" are valid.', 'primitive', 'order.OrderTriggerCondition'),
    new base_1.Property('clientExtensions', 'Client Extensions', 'The client extensions to add to the Order. Do not set, modify, or delete clientExtensions if your account is associated with MT4.', 'object', 'transaction.ClientExtensions'),
];
var TrailingStopLossOrderRequest = /** @class */ (function (_super) {
    __extends(TrailingStopLossOrderRequest, _super);
    function TrailingStopLossOrderRequest(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Trailing Stop Loss for Trade {tradeID} @ {trailingStopValue}';
        _this._nameFormat = 'TSL Order Request';
        _this._properties = exports.TrailingStopLossOrderRequest_Properties;
        data = data || {};
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'TRAILING_STOP_LOSS';
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
        if (data['clientExtensions'] !== undefined) {
            _this.clientExtensions = new transaction.ClientExtensions(data['clientExtensions']);
        }
        return _this;
    }
    return TrailingStopLossOrderRequest;
}(base_1.Definition));
exports.TrailingStopLossOrderRequest = TrailingStopLossOrderRequest;
exports.UnitsAvailableDetails_Properties = [
    new base_1.Property('long', 'Long', 'The units available for long Orders.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('short', 'Short', 'The units available for short Orders.', 'primitive', 'primitives.DecimalNumber'),
];
var UnitsAvailableDetails = /** @class */ (function (_super) {
    __extends(UnitsAvailableDetails, _super);
    function UnitsAvailableDetails(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.UnitsAvailableDetails_Properties;
        data = data || {};
        if (data['long'] !== undefined) {
            _this.long = data['long'];
        }
        if (data['short'] !== undefined) {
            _this.short = data['short'];
        }
        return _this;
    }
    return UnitsAvailableDetails;
}(base_1.Definition));
exports.UnitsAvailableDetails = UnitsAvailableDetails;
exports.UnitsAvailable_Properties = [
    new base_1.Property('default', 'Default', 'The number of units that are available to be traded using an Order with a positionFill option of "DEFAULT". For an Account with hedging enabled, this value will be the same as the "OPEN_ONLY" value. For an Account without hedging enabled, this value will be the same as the "REDUCE_FIRST" value.', 'object', 'order.UnitsAvailableDetails'),
    new base_1.Property('reduceFirst', 'Reduce First', 'The number of units that may are available to be traded with an Order with a positionFill option of "REDUCE_FIRST".', 'object', 'order.UnitsAvailableDetails'),
    new base_1.Property('reduceOnly', 'Reduce Only', 'The number of units that may are available to be traded with an Order with a positionFill option of "REDUCE_ONLY".', 'object', 'order.UnitsAvailableDetails'),
    new base_1.Property('openOnly', 'Open Only', 'The number of units that may are available to be traded with an Order with a positionFill option of "OPEN_ONLY".', 'object', 'order.UnitsAvailableDetails'),
];
var UnitsAvailable = /** @class */ (function (_super) {
    __extends(UnitsAvailable, _super);
    function UnitsAvailable(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.UnitsAvailable_Properties;
        data = data || {};
        if (data['default'] !== undefined) {
            _this.default = new UnitsAvailableDetails(data['default']);
        }
        if (data['reduceFirst'] !== undefined) {
            _this.reduceFirst = new UnitsAvailableDetails(data['reduceFirst']);
        }
        if (data['reduceOnly'] !== undefined) {
            _this.reduceOnly = new UnitsAvailableDetails(data['reduceOnly']);
        }
        if (data['openOnly'] !== undefined) {
            _this.openOnly = new UnitsAvailableDetails(data['openOnly']);
        }
        return _this;
    }
    return UnitsAvailable;
}(base_1.Definition));
exports.UnitsAvailable = UnitsAvailable;
exports.GuaranteedStopLossOrderEntryData_Properties = [
    new base_1.Property('minimumDistance', 'minimumDistance', "The minimum distance allowed between the Trade's fill price and the configured price for guaranteed Stop Loss Orders created for this instrument. Specified in price units.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('premium', 'premium', 'The amount that is charged to the account if a guaranteed Stop Loss Order is triggered and filled. The value is in price units and is charged for each unit of the Trade.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('levelRestriction', 'levelRestriction', 'The guaranteed Stop Loss Order level restriction for this instrument.', 'object', 'primitives.GuaranteedStopLossOrderLevelRestriction'),
];
var GuaranteedStopLossOrderEntryData = /** @class */ (function (_super) {
    __extends(GuaranteedStopLossOrderEntryData, _super);
    function GuaranteedStopLossOrderEntryData(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.GuaranteedStopLossOrderEntryData_Properties;
        data = data || {};
        if (data['minimumDistance'] !== undefined) {
            _this.minimumDistance = data['minimumDistance'];
        }
        if (data['premium'] !== undefined) {
            _this.premium = data['premium'];
        }
        if (data['levelRestriction'] !== undefined) {
            _this.levelRestriction = new primitives.GuaranteedStopLossOrderLevelRestriction(data['levelRestriction']);
        }
        return _this;
    }
    return GuaranteedStopLossOrderEntryData;
}(base_1.Definition));
exports.GuaranteedStopLossOrderEntryData = GuaranteedStopLossOrderEntryData;
var EntitySpec = /** @class */ (function () {
    function EntitySpec(context) {
        this.context = context;
        this.OrderIdentifier = OrderIdentifier;
        this.DynamicOrderState = DynamicOrderState;
        this.Order = Order;
        this.MarketOrder = MarketOrder;
        this.FixedPriceOrder = FixedPriceOrder;
        this.LimitOrder = LimitOrder;
        this.StopOrder = StopOrder;
        this.MarketIfTouchedOrder = MarketIfTouchedOrder;
        this.TakeProfitOrder = TakeProfitOrder;
        this.StopLossOrder = StopLossOrder;
        this.TrailingStopLossOrder = TrailingStopLossOrder;
        this.OrderRequest = OrderRequest;
        this.MarketOrderRequest = MarketOrderRequest;
        this.LimitOrderRequest = LimitOrderRequest;
        this.StopOrderRequest = StopOrderRequest;
        this.MarketIfTouchedOrderRequest = MarketIfTouchedOrderRequest;
        this.TakeProfitOrderRequest = TakeProfitOrderRequest;
        this.StopLossOrderRequest = StopLossOrderRequest;
        this.TrailingStopLossOrderRequest = TrailingStopLossOrderRequest;
        this.UnitsAvailableDetails = UnitsAvailableDetails;
        this.UnitsAvailable = UnitsAvailable;
        this.GuaranteedStopLossOrderEntryData = GuaranteedStopLossOrderEntryData;
    }
    EntitySpec.prototype.create = function (accountID, bodyParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/orders';
        bodyParams = bodyParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        var body = {};
        if (typeof bodyParams['order'] !== 'undefined') {
            body['order'] = bodyParams['order'];
        }
        var handleResponse = function (err, response) {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                var msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 201) {
                    if (msg['orderCreateTransaction'] !== undefined) {
                        response.body.orderCreateTransaction = transaction.Transaction.create(msg['orderCreateTransaction']);
                    }
                    if (msg['orderFillTransaction'] !== undefined) {
                        response.body.orderFillTransaction = new transaction.OrderFillTransaction(msg['orderFillTransaction']);
                    }
                    if (msg['orderCancelTransaction'] !== undefined) {
                        response.body.orderCancelTransaction = new transaction.OrderCancelTransaction(msg['orderCancelTransaction']);
                    }
                    if (msg['orderReissueTransaction'] !== undefined) {
                        response.body.orderReissueTransaction = transaction.Transaction.create(msg['orderReissueTransaction']);
                    }
                    if (msg['orderReissueRejectTransaction'] !== undefined) {
                        response.body.orderReissueRejectTransaction = transaction.Transaction.create(msg['orderReissueRejectTransaction']);
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
                        response.body.orderRejectTransaction = transaction.Transaction.create(msg['orderRejectTransaction']);
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
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
                else if (response.statusCode == 403) {
                }
                else if (response.statusCode == 404) {
                    if (msg['orderRejectTransaction'] !== undefined) {
                        response.body.orderRejectTransaction = transaction.Transaction.create(msg['orderRejectTransaction']);
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
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
        return this.context.request('POST', path, body, undefined, handleResponse);
    };
    EntitySpec.prototype.list = function (accountID, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/orders';
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
                    if (msg['orders'] !== undefined) {
                        response.body.orders = msg['orders'].map(function (x) { return Order.create(x); });
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                }
                else if (response.statusCode == 400) {
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
    EntitySpec.prototype.listPending = function (accountID, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/pendingOrders';
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
                    if (msg['orders'] !== undefined) {
                        response.body.orders = msg['orders'].map(function (x) { return Order.create(x); });
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
    EntitySpec.prototype.get = function (accountID, orderSpecifier, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/orders/{orderSpecifier}';
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path.replace('{' + 'orderSpecifier' + '}', orderSpecifier);
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
                    if (msg['order'] !== undefined) {
                        response.body.order = Order.create(msg['order']);
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
    EntitySpec.prototype.replace = function (accountID, orderSpecifier, bodyParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/orders/{orderSpecifier}';
        bodyParams = bodyParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path.replace('{' + 'orderSpecifier' + '}', orderSpecifier);
        var body = {};
        if (typeof bodyParams['order'] !== 'undefined') {
            body['order'] = bodyParams['order'];
        }
        var handleResponse = function (err, response) {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                var msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 201) {
                    if (msg['orderCancelTransaction'] !== undefined) {
                        response.body.orderCancelTransaction = new transaction.OrderCancelTransaction(msg['orderCancelTransaction']);
                    }
                    if (msg['orderCreateTransaction'] !== undefined) {
                        response.body.orderCreateTransaction = transaction.Transaction.create(msg['orderCreateTransaction']);
                    }
                    if (msg['orderFillTransaction'] !== undefined) {
                        response.body.orderFillTransaction = new transaction.OrderFillTransaction(msg['orderFillTransaction']);
                    }
                    if (msg['orderReissueTransaction'] !== undefined) {
                        response.body.orderReissueTransaction = transaction.Transaction.create(msg['orderReissueTransaction']);
                    }
                    if (msg['orderReissueRejectTransaction'] !== undefined) {
                        response.body.orderReissueRejectTransaction = transaction.Transaction.create(msg['orderReissueRejectTransaction']);
                    }
                    if (msg['replacingOrderCancelTransaction'] !== undefined) {
                        response.body.replacingOrderCancelTransaction = new transaction.OrderCancelTransaction(msg['replacingOrderCancelTransaction']);
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
                        response.body.orderRejectTransaction = transaction.Transaction.create(msg['orderRejectTransaction']);
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
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
                    if (msg['orderCancelRejectTransaction'] !== undefined) {
                        response.body.orderCancelRejectTransaction = transaction.Transaction.create(msg['orderCancelRejectTransaction']);
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
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
    EntitySpec.prototype.cancel = function (accountID, orderSpecifier, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/orders/{orderSpecifier}/cancel';
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path.replace('{' + 'orderSpecifier' + '}', orderSpecifier);
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
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 404) {
                    if (msg['orderCancelRejectTransaction'] !== undefined) {
                        response.body.orderCancelRejectTransaction = new transaction.OrderCancelRejectTransaction(msg['orderCancelRejectTransaction']);
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
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
    EntitySpec.prototype.setClientExtensions = function (accountID, orderSpecifier, bodyParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/orders/{orderSpecifier}/clientExtensions';
        bodyParams = bodyParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path.replace('{' + 'orderSpecifier' + '}', orderSpecifier);
        var body = {};
        if (typeof bodyParams['clientExtensions'] !== 'undefined') {
            body['clientExtensions'] = bodyParams['clientExtensions'];
        }
        if (typeof bodyParams['tradeClientExtensions'] !== 'undefined') {
            body['tradeClientExtensions'] = bodyParams['tradeClientExtensions'];
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
                    if (msg['orderClientExtensionsModifyTransaction'] !== undefined) {
                        response.body.orderClientExtensionsModifyTransaction = new transaction.OrderClientExtensionsModifyTransaction(msg['orderClientExtensionsModifyTransaction']);
                    }
                    if (msg['lastTransactionID'] !== undefined) {
                        response.body.lastTransactionID = msg['lastTransactionID'];
                    }
                    if (msg['relatedTransactionIDs'] !== undefined) {
                        response.body.relatedTransactionIDs = msg['relatedTransactionIDs'];
                    }
                }
                else if (response.statusCode == 400) {
                    if (msg['orderClientExtensionsModifyRejectTransaction'] !== undefined) {
                        response.body.orderClientExtensionsModifyRejectTransaction = new transaction.OrderClientExtensionsModifyRejectTransaction(msg['orderClientExtensionsModifyRejectTransaction']);
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
                    if (msg['orderClientExtensionsModifyRejectTransaction'] !== undefined) {
                        response.body.orderClientExtensionsModifyRejectTransaction = new transaction.OrderClientExtensionsModifyRejectTransaction(msg['orderClientExtensionsModifyRejectTransaction']);
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
    EntitySpec.prototype.market = function (accountID, orderSpec, responseCallback) {
        this.create(accountID, { order: new this.MarketOrder(orderSpec) }, responseCallback);
    };
    EntitySpec.prototype.limit = function (accountID, orderSpec, responseCallback) {
        this.create(accountID, { order: new this.LimitOrder(orderSpec) }, responseCallback);
    };
    EntitySpec.prototype.limitReplace = function (accountID, orderID, orderSpec, responseCallback) {
        this.replace(accountID, orderID, { order: new this.LimitOrder(orderSpec) }, responseCallback);
    };
    EntitySpec.prototype.stop = function (accountID, orderSpec, responseCallback) {
        this.create(accountID, { order: new this.StopOrder(orderSpec) }, responseCallback);
    };
    EntitySpec.prototype.stopReplace = function (accountID, orderID, orderSpec, responseCallback) {
        this.replace(accountID, orderID, { order: new this.StopOrder(orderSpec) }, responseCallback);
    };
    EntitySpec.prototype.marketIfTouched = function (accountID, orderSpec, responseCallback) {
        this.create(accountID, { order: new this.MarketIfTouchedOrder(orderSpec) }, responseCallback);
    };
    EntitySpec.prototype.marketIfTouchedReplace = function (accountID, orderID, orderSpec, responseCallback) {
        this.replace(accountID, orderID, { order: new this.MarketIfTouchedOrder(orderSpec) }, responseCallback);
    };
    EntitySpec.prototype.takeProfit = function (accountID, orderSpec, responseCallback) {
        this.create(accountID, { order: new this.TakeProfitOrder(orderSpec) }, responseCallback);
    };
    EntitySpec.prototype.takeProfitReplace = function (accountID, orderID, orderSpec, responseCallback) {
        this.replace(accountID, orderID, { order: new this.TakeProfitOrder(orderSpec) }, responseCallback);
    };
    EntitySpec.prototype.stopLoss = function (accountID, orderSpec, responseCallback) {
        this.create(accountID, { order: new this.StopLossOrder(orderSpec) }, responseCallback);
    };
    EntitySpec.prototype.stopLossReplace = function (accountID, orderID, orderSpec, responseCallback) {
        this.replace(accountID, orderID, { order: new this.StopLossOrder(orderSpec) }, responseCallback);
    };
    EntitySpec.prototype.trailingStopLoss = function (accountID, orderSpec, responseCallback) {
        this.create(accountID, { order: new this.StopLossOrder(orderSpec) }, responseCallback);
    };
    EntitySpec.prototype.trailingStopLossReplace = function (accountID, orderID, orderSpec, responseCallback) {
        this.replace(accountID, orderID, { order: new this.StopLossOrder(orderSpec) }, responseCallback);
    };
    return EntitySpec;
}());
exports.EntitySpec = EntitySpec;
var API = /** @class */ (function () {
    function API(context, resolver) {
        this.context = context;
        this.resolver = resolver;
    }
    API.prototype.create = function (accountID, body) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        new EntitySpec(_this.context).create(accountID, body, _this.resolver(resolve, reject));
                    })];
            });
        });
    };
    API.prototype.list = function (accountID, body) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        new EntitySpec(_this.context).list(accountID, body, _this.resolver(resolve, reject));
                    })];
            });
        });
    };
    API.prototype.listPending = function (accountID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        new EntitySpec(_this.context).listPending(accountID, _this.resolver(resolve, reject));
                    })];
            });
        });
    };
    API.prototype.get = function (accountID, orderSpecifier) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        new EntitySpec(_this.context).get(accountID, orderSpecifier, _this.resolver(resolve, reject));
                    })];
            });
        });
    };
    API.prototype.replace = function (accountID, orderSpecifier, body) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        new EntitySpec(_this.context).replace(accountID, orderSpecifier, body, _this.resolver(resolve, reject));
                    })];
            });
        });
    };
    API.prototype.cancel = function (accountID, orderSpecifier) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        new EntitySpec(_this.context).cancel(accountID, orderSpecifier, _this.resolver(resolve, reject));
                    })];
            });
        });
    };
    API.prototype.setClientExtensions = function (accountID, orderSpecifier, body) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        new EntitySpec(_this.context).setClientExtensions(accountID, orderSpecifier, body, _this.resolver(resolve, reject));
                    })];
            });
        });
    };
    return API;
}());
exports.API = API;
//# sourceMappingURL=order.js.map