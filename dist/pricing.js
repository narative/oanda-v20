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
var instrumentModule = require("./instrument");
var order = require("./order");
var pricing_common = require("./pricing_common");
exports.ClientPrice_Properties = [
    new base_1.Property('type', 'Type', 'The string "PRICE". Used to identify the a Price object when found in a stream.', 'primitive', 'string'),
    new base_1.Property('instrument', 'Instrument', "The Price's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('time', 'Time', 'The date/time when the Price was created', 'primitive', 'primitives.DateTime'),
    new base_1.Property('status', 'Status', 'The status of the Price.', 'primitive', 'pricing.PriceStatus'),
    new base_1.Property('tradeable', 'Is Tradeable', 'Flag indicating if the Price is tradeable or not', 'primitive', 'boolean'),
    new base_1.Property('bids', 'Bids', "The list of prices and liquidity available on the Instrument's bid side. It is possible for this list to be empty if there is no bid liquidity currently available for the Instrument in the Account.", 'array_object', 'PriceBucket'),
    new base_1.Property('asks', 'Asks', "The list of prices and liquidity available on the Instrument's ask side. It is possible for this list to be empty if there is no ask liquidity currently available for the Instrument in the Account.", 'array_object', 'PriceBucket'),
    new base_1.Property('closeoutBid', 'Closeout Bid', 'The closeout bid Price. This Price is used when a bid is required to closeout a Position (margin closeout or manual) yet there is no bid liquidity. The closeout bid is never used to open a new position.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('closeoutAsk', 'Closeout Ask', 'The closeout ask Price. This Price is used when a ask is required to closeout a Position (margin closeout or manual) yet there is no ask liquidity. The closeout ask is never used to open a new position.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('quoteHomeConversionFactors', 'Quote Home Conversions', "The factors used to convert quantities of this price's Instrument's quote currency into a quantity of the Account's home currency. When the includeHomeConversions is present in the pricing request (regardless of its value), this field will not be present.", 'object', 'pricing.QuoteHomeConversionFactors'),
    new base_1.Property('unitsAvailable', 'Units Available', 'Representation of how many units of an Instrument are available to be traded by an Order depending on its postionFill option.', 'object', 'order.UnitsAvailable'),
];
var ClientPrice = /** @class */ (function (_super) {
    __extends(ClientPrice, _super);
    function ClientPrice(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.ClientPrice_Properties;
        data = data || {};
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'PRICE';
        }
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        if (data['status'] !== undefined) {
            _this.status = data['status'];
        }
        if (data['tradeable'] !== undefined) {
            _this.tradeable = data['tradeable'];
        }
        if (data['bids'] !== undefined) {
            _this.bids = data['bids'].map(function (x) { return new pricing_common.PriceBucket(x); });
        }
        if (data['asks'] !== undefined) {
            _this.asks = data['asks'].map(function (x) { return new pricing_common.PriceBucket(x); });
        }
        if (data['closeoutBid'] !== undefined) {
            _this.closeoutBid = data['closeoutBid'];
        }
        if (data['closeoutAsk'] !== undefined) {
            _this.closeoutAsk = data['closeoutAsk'];
        }
        if (data['quoteHomeConversionFactors'] !== undefined) {
            _this.quoteHomeConversionFactors = new QuoteHomeConversionFactors(data['quoteHomeConversionFactors']);
        }
        if (data['unitsAvailable'] !== undefined) {
            _this.unitsAvailable = new order.UnitsAvailable(data['unitsAvailable']);
        }
        return _this;
    }
    return ClientPrice;
}(base_1.Definition));
exports.ClientPrice = ClientPrice;
exports.QuoteHomeConversionFactors_Properties = [
    new base_1.Property('positiveUnits', 'Positive Units', "The factor used to convert a positive amount of the Price's Instrument's quote currency into a positive amount of the Account's home currency.  Conversion is performed by multiplying the quote units by the conversion factor.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('negativeUnits', 'Negative Units', "The factor used to convert a negative amount of the Price's Instrument's quote currency into a negative amount of the Account's home currency.  Conversion is performed by multiplying the quote units by the conversion factor.", 'primitive', 'primitives.DecimalNumber'),
];
var QuoteHomeConversionFactors = /** @class */ (function (_super) {
    __extends(QuoteHomeConversionFactors, _super);
    function QuoteHomeConversionFactors(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.QuoteHomeConversionFactors_Properties;
        data = data || {};
        if (data['positiveUnits'] !== undefined) {
            _this.positiveUnits = data['positiveUnits'];
        }
        if (data['negativeUnits'] !== undefined) {
            _this.negativeUnits = data['negativeUnits'];
        }
        return _this;
    }
    return QuoteHomeConversionFactors;
}(base_1.Definition));
exports.QuoteHomeConversionFactors = QuoteHomeConversionFactors;
exports.HomeConversions_Properties = [
    new base_1.Property('currency', 'currency', 'The currency to be converted into the home currency.', 'primitive', 'primitives.Currency'),
    new base_1.Property('accountGain', 'Account Gain', "The factor used to convert any gains for an Account in the specified currency into the Account's home currency. This would include positive realized P/L and positive financing amounts. Conversion is performed by multiplying the positive P/L by the conversion factor.", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('accountLoss', "Account Loss The factor used to convert any losses for an Account in the specified currency into the Account's home currency. This would include negative realized P/L and negative financing amounts. Conversion is performed by multiplying the positive P/L by the conversion factor.", 'The string representation of a decimal number.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('positionValue', 'Position Value', "The factor used to convert a Position or Trade Value in the specified currency into the Account's home currency. Conversion is performed by multiplying the Position or Trade Value by the conversion factor.", 'primitive', 'primitives.DecimalNumber'),
];
var HomeConversions = /** @class */ (function (_super) {
    __extends(HomeConversions, _super);
    function HomeConversions(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.HomeConversions_Properties;
        data = data || {};
        if (data['currency'] !== undefined) {
            _this.currency = data['currency'];
        }
        if (data['accountGain'] !== undefined) {
            _this.accountGain = data['accountGain'];
        }
        if (data['accountLoss'] !== undefined) {
            _this.accountLoss = data['accountLoss'];
        }
        if (data['positionValue'] !== undefined) {
            _this.positionValue = data['positionValue'];
        }
        return _this;
    }
    return HomeConversions;
}(base_1.Definition));
exports.HomeConversions = HomeConversions;
exports.PricingHeartbeat_Properties = [
    new base_1.Property('type', 'Type', 'The string "HEARTBEAT"', 'primitive', 'string'),
    new base_1.Property('time', 'Time', 'The date/time when the Heartbeat was created.', 'primitive', 'primitives.DateTime'),
];
var PricingHeartbeat = /** @class */ (function (_super) {
    __extends(PricingHeartbeat, _super);
    function PricingHeartbeat(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Pricing Heartbeat {time}';
        _this._nameFormat = '';
        _this._properties = exports.PricingHeartbeat_Properties;
        data = data || {};
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'HEARTBEAT';
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        return _this;
    }
    return PricingHeartbeat;
}(base_1.Definition));
exports.PricingHeartbeat = PricingHeartbeat;
var EntitySpec = /** @class */ (function () {
    function EntitySpec(context) {
        this.context = context;
        this.ClientPrice = ClientPrice;
        this.QuoteHomeConversionFactors = QuoteHomeConversionFactors;
        this.HomeConversions = HomeConversions;
        this.PricingHeartbeat = PricingHeartbeat;
    }
    EntitySpec.prototype.basePrices = function (queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/pricing';
        queryParams = queryParams || {};
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
    EntitySpec.prototype.getPriceRange = function (instrument, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/pricing/range';
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
    EntitySpec.prototype.get = function (accountID, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/pricing';
        queryParams = queryParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path + '?';
        if (typeof queryParams['instruments'] !== 'undefined') {
            path = path + 'instruments=' + queryParams['instruments'] + '&';
        }
        if (typeof queryParams['since'] !== 'undefined') {
            path = path + 'since=' + queryParams['since'] + '&';
        }
        if (typeof queryParams['includeUnitsAvailable'] !== 'undefined') {
            path = path + 'includeUnitsAvailable=' + queryParams['includeUnitsAvailable'] + '&';
        }
        if (typeof queryParams['includeHomeConversions'] !== 'undefined') {
            path = path + 'includeHomeConversions=' + queryParams['includeHomeConversions'] + '&';
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
                        response.body.prices = msg['prices'].map(function (x) { return new ClientPrice(x); });
                    }
                    if (msg['homeConversions'] !== undefined) {
                        response.body.homeConversions = msg['homeConversions'].map(function (x) { return new HomeConversions(x); });
                    }
                    if (msg['time'] !== undefined) {
                        response.body.time = msg['time'];
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
    EntitySpec.prototype.stream = function (accountID, queryParams, streamChunkHandler, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        if (!streamChunkHandler) {
            throw 'No streamChunkHandler provided for streaming API call';
        }
        var path = '/v3/accounts/{accountID}/pricing/stream';
        queryParams = queryParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
        path = path + '?';
        if (typeof queryParams['instruments'] !== 'undefined') {
            path = path + 'instruments=' + queryParams['instruments'] + '&';
        }
        if (typeof queryParams['snapshot'] !== 'undefined') {
            path = path + 'snapshot=' + queryParams['snapshot'] + '&';
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
                        response.body.price = new ClientPrice(msg['price']);
                    }
                    if (msg['heartbeat'] !== undefined) {
                        response.body.heartbeat = new PricingHeartbeat(msg['heartbeat']);
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
                        streamChunkHandler(new PricingHeartbeat(msg));
                    }
                    else if (msg.type == 'PRICE') {
                        streamChunkHandler(new ClientPrice(msg));
                    }
                }
                catch (err) {
                    // failed to parse chunk so ignore it
                }
            };
        }
        return this.context.request('GET', path, body, generateStreamParser(streamChunkHandler), handleResponse);
    };
    EntitySpec.prototype.candles = function (accountID, instrument, queryParams, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/accounts/{accountID}/instruments/{instrument}/candles';
        queryParams = queryParams || {};
        path = path.replace('{' + 'accountID' + '}', accountID);
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
        if (typeof queryParams['units'] !== 'undefined') {
            path = path + 'units=' + queryParams['units'] + '&';
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
                        response.body.candles = msg['candles'].map(function (x) { return new instrumentModule.Candlestick(x); });
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
//# sourceMappingURL=pricing.js.map