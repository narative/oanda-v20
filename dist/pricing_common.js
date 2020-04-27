"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
exports.PriceBucket_Properties = [
    new base_1.Property('price', 'Price', 'The Price offered by the PriceBucket', 'primitive', 'pricing_common.PriceValue'),
    new base_1.Property('liquidity', 'Liquidity', 'The amount of liquidity offered by the PriceBucket', 'primitive', 'integer'),
];
class PriceBucket extends base_1.Definition {
    constructor(data) {
        super();
        this._summaryFormat = '';
        this._nameFormat = '';
        this._properties = exports.PriceBucket_Properties;
        data = data || {};
        if (data['price'] !== undefined) {
            this.price = data['price'];
        }
        if (data['liquidity'] !== undefined) {
            this.liquidity = data['liquidity'];
        }
    }
}
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
class Price extends base_1.Definition {
    constructor(data) {
        super();
        this._summaryFormat = '';
        this._nameFormat = '';
        this._properties = exports.Price_Properties;
        data = data || {};
        if (data['instrument'] !== undefined) {
            this.instrument = data['instrument'];
        }
        if (data['tradeable'] !== undefined) {
            this.tradeable = data['tradeable'];
        }
        if (data['timestamp'] !== undefined) {
            this.timestamp = data['timestamp'];
        }
        if (data['baseBid'] !== undefined) {
            this.baseBid = data['baseBid'];
        }
        if (data['baseAsk'] !== undefined) {
            this.baseAsk = data['baseAsk'];
        }
        if (data['bids'] !== undefined) {
            this.bids = data['bids'].map((x) => new PriceBucket(x));
        }
        if (data['asks'] !== undefined) {
            this.asks = data['asks'].map((x) => new PriceBucket(x));
        }
        if (data['closeoutBid'] !== undefined) {
            this.closeoutBid = data['closeoutBid'];
        }
        if (data['closeoutAsk'] !== undefined) {
            this.closeoutAsk = data['closeoutAsk'];
        }
    }
}
exports.Price = Price;
class EntitySpec {
    constructor(context) {
        this.context = context;
        this.PriceBucket = PriceBucket;
        this.Price = Price;
    }
}
exports.EntitySpec = EntitySpec;
//# sourceMappingURL=pricing_common.js.map