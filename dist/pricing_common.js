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
exports.PriceBucket_Properties = [
    new base_1.Property('price', 'Price', 'The Price offered by the PriceBucket', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('liquidity', 'Liquidity', 'The amount of liquidity offered by the PriceBucket', 'primitive', 'integer'),
];
var PriceBucket = /** @class */ (function (_super) {
    __extends(PriceBucket, _super);
    function PriceBucket(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.PriceBucket_Properties;
        data = data || {};
        if (data['price'] !== undefined) {
            _this.price = data['price'];
        }
        if (data['liquidity'] !== undefined) {
            _this.liquidity = data['liquidity'];
        }
        return _this;
    }
    return PriceBucket;
}(base_1.Definition));
exports.PriceBucket = PriceBucket;
exports.Price_Properties = [
    new base_1.Property('instrument', 'Instrument', "The Price's Instrument.", 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('tradeable', 'Is Tradeable', 'Flag indicating if the Price is tradeable or not', 'primitive', 'boolean'),
    new base_1.Property('timestamp', 'Timestamp', 'The date/time when the Price was created.', 'primitive', 'primitives.DateTime'),
    new base_1.Property('baseBid', 'Base Bid', 'The base bid price as calculated by pricing.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('baseAsk', 'Base Ask', 'The base ask price as calculated by pricing.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('bids', 'Bids', "The list of prices and liquidity available on the Instrument's bid side. It is possible for this list to be empty if there is no bid liquidity currently available for the Instrument in the Account.", 'array_object', 'PriceBucket'),
    new base_1.Property('asks', 'Asks', "The list of prices and liquidity available on the Instrument's ask side. It is possible for this list to be empty if there is no ask liquidity currently available for the Instrument in the Account.", 'array_object', 'PriceBucket'),
    new base_1.Property('closeoutBid', 'Closeout Bid', 'The closeout bid price. This price is used when a bid is required to closeout a Position (margin closeout or manual) yet there is no bid liquidity. The closeout bid is never used to open a new position.', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('closeoutAsk', 'Closeout Ask', 'The closeout ask price. This price is used when an ask is required to closeout a Position (margin closeout or manual) yet there is no ask liquidity. The closeout ask is never used to open a new position.', 'primitive', 'pricing_common.PriceValue'),
];
var Price = /** @class */ (function (_super) {
    __extends(Price, _super);
    function Price(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.Price_Properties;
        data = data || {};
        if (data['instrument'] !== undefined) {
            _this.instrument = data['instrument'];
        }
        if (data['tradeable'] !== undefined) {
            _this.tradeable = data['tradeable'];
        }
        if (data['timestamp'] !== undefined) {
            _this.timestamp = data['timestamp'];
        }
        if (data['baseBid'] !== undefined) {
            _this.baseBid = data['baseBid'];
        }
        if (data['baseAsk'] !== undefined) {
            _this.baseAsk = data['baseAsk'];
        }
        if (data['bids'] !== undefined) {
            _this.bids = data['bids'].map(function (x) { return new PriceBucket(x); });
        }
        if (data['asks'] !== undefined) {
            _this.asks = data['asks'].map(function (x) { return new PriceBucket(x); });
        }
        if (data['closeoutBid'] !== undefined) {
            _this.closeoutBid = data['closeoutBid'];
        }
        if (data['closeoutAsk'] !== undefined) {
            _this.closeoutAsk = data['closeoutAsk'];
        }
        return _this;
    }
    return Price;
}(base_1.Definition));
exports.Price = Price;
var EntitySpec = /** @class */ (function () {
    function EntitySpec(context) {
        this.context = context;
        this.PriceBucket = PriceBucket;
        this.Price = Price;
    }
    return EntitySpec;
}());
exports.EntitySpec = EntitySpec;
//# sourceMappingURL=pricing_common.js.map