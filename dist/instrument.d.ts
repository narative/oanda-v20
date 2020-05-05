import { Definition, Property } from './base';
import * as primitives from './primitives';
export declare const Candlestick_Properties: Property[];
export declare class Candlestick extends Definition {
    /**
     * The start time of the candlestick
     */
    time: primitives.DateTime;
    /**
     * The candlestick data based on bids. Only provided if bid-based candles were requested.
     */
    bid: CandlestickData;
    /**
     * The candlestick data based on asks. Only provided if ask-based candles were requested.
     */
    ask: CandlestickData;
    /**
     * The candlestick data based on midpoints. Only provided if midpoint-based candles were requested.
     */
    mid: CandlestickData;
    /**
     * The number of prices created during the time-range represented by the candlestick.
     */
    volume: number;
    /**
     * A flag indicating if the candlestick is complete. A complete candlestick is one whose ending time is not in the future.
     */
    complete: boolean;
    constructor(data: any);
}
export declare const CandlestickData_Properties: Property[];
export declare class CandlestickData extends Definition {
    /**
     * The first (open) price in the time-range represented by the candlestick.
     */
    o: primitives.PriceValue;
    /**
     * The highest price in the time-range represented by the candlestick.
     */
    h: primitives.PriceValue;
    /**
     * The lowest price in the time-range represented by the candlestick.
     */
    l: primitives.PriceValue;
    /**
     * The last (closing) price in the time-range represented by the candlestick.
     */
    c: primitives.PriceValue;
    constructor(data: any);
}
export declare const OrderBook_Properties: Property[];
export declare class OrderBook extends Definition {
    /**
     * The order book's instrument
     */
    instrument: primitives.InstrumentName;
    /**
     * The time when the order book snapshot was created.
     */
    time: primitives.DateTime;
    /**
     * The price (midpoint) for the order book's instrument at the time of the order book snapshot
     */
    price: primitives.PriceValue;
    /**
     * The price width for each bucket. Each bucket covers the price range from the bucket's price to the bucket's price + bucketWidth.
     */
    bucketWidth: primitives.PriceValue;
    /**
     * The partitioned order book, divided into buckets using a default bucket width. These buckets are only provided for price ranges which actually contain order or position data.
     */
    buckets: OrderBookBucket[];
    constructor(data: any);
}
export declare const OrderBookBucket_Properties: Property[];
export declare class OrderBookBucket extends Definition {
    /**
     * The lowest price (inclusive) covered by the bucket. The bucket covers the price range from the price to price + the order book's bucketWidth.
     */
    price: primitives.PriceValue;
    /**
     * The percentage of the total number of orders represented by the long orders found in this bucket.
     */
    longCountPercent: primitives.DecimalNumber;
    /**
     * The percentage of the total number of orders represented by the short orders found in this bucket.
     */
    shortCountPercent: primitives.DecimalNumber;
    constructor(data: any);
}
export declare const PositionBook_Properties: Property[];
export declare class PositionBook extends Definition {
    /**
     * The position book's instrument
     */
    instrument: primitives.InstrumentName;
    /**
     * The time when the position book snapshot was created
     */
    time: primitives.DateTime;
    /**
     * The price (midpoint) for the position book's instrument at the time of the position book snapshot
     */
    price: primitives.PriceValue;
    /**
     * The price width for each bucket. Each bucket covers the price range from the bucket's price to the bucket's price + bucketWidth.
     */
    bucketWidth: primitives.PriceValue;
    /**
     * The partitioned position book, divided into buckets using a default bucket width. These buckets are only provided for price ranges which actually contain order or position data.
     */
    buckets: PositionBookBucket[];
    constructor(data: any);
}
export declare const PositionBookBucket_Properties: Property[];
export declare class PositionBookBucket extends Definition {
    /**
     * The lowest price (inclusive) covered by the bucket. The bucket covers the price range from the price to price + the position book's bucketWidth.
     */
    price: primitives.PriceValue;
    /**
     * The percentage of the total number of positions represented by the long positions found in this bucket.
     */
    longCountPercent: primitives.DecimalNumber;
    /**
     * The percentage of the total number of positions represented by the short positions found in this bucket.
     */
    shortCountPercent: primitives.DecimalNumber;
    constructor(data: any);
}
export declare class EntitySpec {
    context: any;
    Candlestick: typeof Candlestick;
    CandlestickData: typeof CandlestickData;
    OrderBook: typeof OrderBook;
    OrderBookBucket: typeof OrderBookBucket;
    PositionBook: typeof PositionBook;
    PositionBookBucket: typeof PositionBookBucket;
    constructor(context: any);
    candles(instrument: any, queryParams: any, responseHandler: any): any;
    price(instrument: any, queryParams: any, responseHandler: any): any;
    prices(instrument: any, queryParams: any, responseHandler: any): any;
    orderBook(instrument: any, queryParams: any, responseHandler: any): any;
    positionBook(instrument: any, queryParams: any, responseHandler: any): any;
}
