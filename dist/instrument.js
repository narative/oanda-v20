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
var pricing_common = require("./pricing_common");
exports.Candlestick_Properties = [
    new base_1.Property('time', 'time', 'The start time of the candlestick', 'primitive', 'primitives.DateTime'),
    new base_1.Property('bid', 'bid', 'The candlestick data based on bids. Only provided if bid-based candles were requested.', 'object', 'instrument.CandlestickData'),
    new base_1.Property('ask', 'ask', 'The candlestick data based on asks. Only provided if ask-based candles were requested.', 'object', 'instrument.CandlestickData'),
    new base_1.Property('mid', 'mid', 'The candlestick data based on midpoints. Only provided if midpoint-based candles were requested.', 'object', 'instrument.CandlestickData'),
    new base_1.Property('volume', 'volume', 'The number of prices created during the time-range represented by the candlestick.', 'primitive', 'integer'),
    new base_1.Property('complete', 'complete', 'A flag indicating if the candlestick is complete. A complete candlestick is one whose ending time is not in the future.', 'primitive', 'boolean'),
];
var Candlestick = /** @class */ (function (_super) {
    __extends(Candlestick, _super);
    function Candlestick(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.Candlestick_Properties;
        data = data || {};
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['bid'] !== undefined) {
            _this.bid = new CandlestickData(data['bid']);
        }
        if (data['ask'] !== undefined) {
            _this.ask = new CandlestickData(data['ask']);
        }
        if (data['mid'] !== undefined) {
            _this.mid = new CandlestickData(data['mid']);
        }
        if (data['volume'] !== undefined) {
            _this.volume = data['volume'];
        }
        if (data['complete'] !== undefined) {
            _this.complete = data['complete'];
        }
        return _this;
    }
    return Candlestick;
}(base_1.Definition));
exports.Candlestick = Candlestick;
exports.CandlestickData_Properties = [
    new base_1.Property('o', 'o', 'The first (open) price in the time-range represented by the candlestick.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('h', 'h', 'The highest price in the time-range represented by the candlestick.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('l', 'l', 'The lowest price in the time-range represented by the candlestick.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('c', 'c', 'The last (closing) price in the time-range represented by the candlestick.', 'primitive', 'pricing_common.PriceValue'),
];
var CandlestickData = /** @class */ (function (_super) {
    __extends(CandlestickData, _super);
    function CandlestickData(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.CandlestickData_Properties;
        data = data || {};
        if (data['o'] !== undefined) {
            _this.o = data['o'];
        }
        if (data['h'] !== undefined) {
            _this.h = data['h'];
        }
        if (data['l'] !== undefined) {
            _this.l = data['l'];
        }
        if (data['c'] !== undefined) {
            _this.c = data['c'];
        }
        return _this;
    }
    return CandlestickData;
}(base_1.Definition));
exports.CandlestickData = CandlestickData;
exports.OrderBook_Properties = [
    new base_1.Property('instrument', 'instrument', "The order book's instrument", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('time', 'time', 'The time when the order book snapshot was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('price', 'price', "The price (midpoint) for the order book's instrument at the time of the order book snapshot", 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('bucketWidth', 'bucketWidth', "The price width for each bucket. Each bucket covers the price range from the bucket's price to the bucket's price + bucketWidth.", 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('buckets', 'buckets', 'The partitioned order book, divided into buckets using a default bucket width. These buckets are only provided for price ranges which actually contain order or position data.', 'array_object', 'OrderBookBucket'),
];
var OrderBook = /** @class */ (function (_super) {
    __extends(OrderBook, _super);
    function OrderBook(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.OrderBook_Properties;
        data = data || {};
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['bucketWidth'] !== undefined) {
            _this.bucketWidth = data['bucketWidth'];
        }
        if (data['buckets'] !== undefined) {
            _this.buckets = data['buckets'].map(function (x) { return new OrderBookBucket(x); });
        }
        return _this;
    }
    return OrderBook;
}(base_1.Definition));
exports.OrderBook = OrderBook;
exports.OrderBookBucket_Properties = [
    new base_1.Property('price', 'price', "The lowest price (inclusive) covered by the bucket. The bucket covers the price range from the price to price + the order book's bucketWidth.", 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('longCountPercent', 'longCountPercent', 'The percentage of the total number of orders represented by the long orders found in this bucket.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('shortCountPercent', 'shortCountPercent', 'The percentage of the total number of orders represented by the short orders found in this bucket.', 'primitive', 'primitives.DecimalNumber'),
];
var OrderBookBucket = /** @class */ (function (_super) {
    __extends(OrderBookBucket, _super);
    function OrderBookBucket(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.OrderBookBucket_Properties;
        data = data || {};
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['longCountPercent'] !== undefined) {
            _this.longCountPercent = data['longCountPercent'];
        }
        if (data['shortCountPercent'] !== undefined) {
            _this.shortCountPercent = data['shortCountPercent'];
        }
        return _this;
    }
    return OrderBookBucket;
}(base_1.Definition));
exports.OrderBookBucket = OrderBookBucket;
exports.PositionBook_Properties = [
    new base_1.Property('instrument', 'instrument', "The position book's instrument", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('time', 'time', 'The time when the position book snapshot was created', 'primitive', 'primitives.DateTime'),
    new base_1.Property('price', 'price', "The price (midpoint) for the position book's instrument at the time of the position book snapshot", 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('bucketWidth', 'bucketWidth', "The price width for each bucket. Each bucket covers the price range from the bucket's price to the bucket's price + bucketWidth.", 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('buckets', 'buckets', 'The partitioned position book, divided into buckets using a default bucket width. These buckets are only provided for price ranges which actually contain order or position data.', 'array_object', 'PositionBookBucket'),
];
var PositionBook = /** @class */ (function (_super) {
    __extends(PositionBook, _super);
    function PositionBook(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.PositionBook_Properties;
        data = data || {};
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['bucketWidth'] !== undefined) {
            _this.bucketWidth = data['bucketWidth'];
        }
        if (data['buckets'] !== undefined) {
            _this.buckets = data['buckets'].map(function (x) { return new PositionBookBucket(x); });
        }
        return _this;
    }
    return PositionBook;
}(base_1.Definition));
exports.PositionBook = PositionBook;
exports.PositionBookBucket_Properties = [
    new base_1.Property('price', 'price', "The lowest price (inclusive) covered by the bucket. The bucket covers the price range from the price to price + the position book's bucketWidth.", 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('longCountPercent', 'longCountPercent', 'The percentage of the total number of positions represented by the long positions found in this bucket.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('shortCountPercent', 'shortCountPercent', 'The percentage of the total number of positions represented by the short positions found in this bucket.', 'primitive', 'primitives.DecimalNumber'),
];
var PositionBookBucket = /** @class */ (function (_super) {
    __extends(PositionBookBucket, _super);
    function PositionBookBucket(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.PositionBookBucket_Properties;
        data = data || {};
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['longCountPercent'] !== undefined) {
            _this.longCountPercent = data['longCountPercent'];
        }
        if (data['shortCountPercent'] !== undefined) {
            _this.shortCountPercent = data['shortCountPercent'];
        }
        return _this;
    }
    return PositionBookBucket;
}(base_1.Definition));
exports.PositionBookBucket = PositionBookBucket;
var EntitySpec = /** @class */ (function () {
    function EntitySpec(context) {
        this.context = context;
        this.Candlestick = Candlestick;
        this.CandlestickData = CandlestickData;
        this.OrderBook = OrderBook;
        this.OrderBookBucket = OrderBookBucket;
        this.PositionBook = PositionBook;
        this.PositionBookBucket = PositionBookBucket;
    }
    EntitySpec.prototype.candles = function (instrument, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/instruments/{instrument}/candles';
        queryParams = queryParams || {};
        path = path.replace('{' + 'instrument' + '}', instrument);
        path = path + '?';
        if (typeof queryParams['price'] !== 'undefined') {
            path = path + 'price=' + queryParams['price'] + '&';
        }
        if (typeof queryParams['granularity'] !== 'undefined') {
            path = path + 'granularity=' + queryParams['granularity'] + '&';
        }
        if (typeof queryParams['count'] !== 'undefined') {
            path = path + 'count=' + queryParams['count'] + '&';
        }
        if (typeof queryParams['from'] !== 'undefined') {
            path = path + 'from=' + queryParams['from'] + '&';
        }
        if (typeof queryParams['to'] !== 'undefined') {
            path = path + 'to=' + queryParams['to'] + '&';
        }
        if (typeof queryParams['smooth'] !== 'undefined') {
            path = path + 'smooth=' + queryParams['smooth'] + '&';
        }
        if (typeof queryParams['includeFirst'] !== 'undefined') {
            path = path + 'includeFirst=' + queryParams['includeFirst'] + '&';
        }
        if (typeof queryParams['dailyAlignment'] !== 'undefined') {
            path = path + 'dailyAlignment=' + queryParams['dailyAlignment'] + '&';
        }
        if (typeof queryParams['alignmentTimezone'] !== 'undefined') {
            path = path + 'alignmentTimezone=' + queryParams['alignmentTimezone'] + '&';
        }
        if (typeof queryParams['weeklyAlignment'] !== 'undefined') {
            path = path + 'weeklyAlignment=' + queryParams['weeklyAlignment'] + '&';
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
                    if (msg['instrument'] !== undefined) {
                        response.body.instrument = msg['instrument'];
                    }
                    if (msg['granularity'] !== undefined) {
                        response.body.granularity = msg['granularity'];
                    }
                    if (msg['candles'] !== undefined) {
                        response.body.candles = msg['candles'].map(function (x) { return new Candlestick(x); });
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
        return this.context.request('GET', path, body, undefined, handleResponse);
    };
    EntitySpec.prototype.price = function (instrument, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/instruments/{instrument}/price';
        queryParams = queryParams || {};
        path = path.replace('{' + 'instrument' + '}', instrument);
        path = path + '?';
        if (typeof queryParams['time'] !== 'undefined') {
            path = path + 'time=' + queryParams['time'] + '&';
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
                    if (msg['price'] !== undefined) {
                        response.body.price = new pricing_common.Price(msg['price']);
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
    EntitySpec.prototype.prices = function (instrument, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/instruments/{instrument}/price/range';
        queryParams = queryParams || {};
        path = path.replace('{' + 'instrument' + '}', instrument);
        path = path + '?';
        if (typeof queryParams['from'] !== 'undefined') {
            path = path + 'from=' + queryParams['from'] + '&';
        }
        if (typeof queryParams['to'] !== 'undefined') {
            path = path + 'to=' + queryParams['to'] + '&';
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
                    if (msg['prices'] !== undefined) {
                        response.body.prices = msg['prices'].map(function (x) { return new pricing_common.Price(x); });
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
        return this.context.request('GET', path, body, undefined, handleResponse);
    };
    EntitySpec.prototype.orderBook = function (instrument, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/instruments/{instrument}/orderBook';
        queryParams = queryParams || {};
        path = path.replace('{' + 'instrument' + '}', instrument);
        path = path + '?';
        if (typeof queryParams['time'] !== 'undefined') {
            path = path + 'time=' + queryParams['time'] + '&';
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
                    if (msg['orderBook'] !== undefined) {
                        response.body.orderBook = new OrderBook(msg['orderBook']);
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
        return this.context.request('GET', path, body, undefined, handleResponse);
    };
    EntitySpec.prototype.positionBook = function (instrument, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/instruments/{instrument}/positionBook';
        queryParams = queryParams || {};
        path = path.replace('{' + 'instrument' + '}', instrument);
        path = path + '?';
        if (typeof queryParams['time'] !== 'undefined') {
            path = path + 'time=' + queryParams['time'] + '&';
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
                    if (msg['positionBook'] !== undefined) {
                        response.body.positionBook = new PositionBook(msg['positionBook']);
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
        return this.context.request('GET', path, body, undefined, handleResponse);
    };
    return EntitySpec;
}());
exports.EntitySpec = EntitySpec;
//# sourceMappingURL=instrument.js.map