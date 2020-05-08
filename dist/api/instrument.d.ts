import * as instrument from '../definitions/instrument';
import * as primitives from '../definitions/primitives';
export interface CandlesRequest {
    instrument: primitives.InstrumentName;
    query: CandlesRequestQuery;
}
export interface CandlesRequestQuery {
    price?: primitives.PricingComponent;
    granularity?: instrument.CandlestickGranularity;
    count?: number;
    from?: primitives.DateTime;
    to?: primitives.DateTime;
    smooth?: boolean;
    includeFirst?: boolean;
    dailyAlignment?: number;
    alignmentTimezone?: string;
    weeklyAlignment?: instrument.WeeklyAlignment;
}
export declare type CandlesResponse = CandlesResponse200;
export interface CandlesResponse200 {
    /**
     * The instrument whose Prices are represented by the candlesticks.
     */
    instrument?: primitives.InstrumentName;
    /**
     * The granularity of the candlesticks provided.
     */
    granularity?: instrument.CandlestickGranularity;
    /**
     * The list of candlesticks that satisfy the request.
     */
    candles?: instrument.Candlestick[];
}
export interface OrderBookRequest {
    instrument: primitives.InstrumentName;
    query: OrderBookRequestQuery;
}
export interface OrderBookRequestQuery {
    time?: primitives.DateTime;
}
export declare type OrderBookResponse = OrderBookResponse200;
export interface OrderBookResponse200 {
    /**
     * The instrument's order book
     */
    orderBook?: instrument.OrderBook;
}
export interface PositionBookRequest {
    instrument: primitives.InstrumentName;
    query: PositionBookRequestQuery;
}
export interface PositionBookRequestQuery {
    time?: primitives.DateTime;
}
export declare type PositionBookResponse = PositionBookResponse200;
export interface PositionBookResponse200 {
    /**
     * The instrument's position book
     */
    positionBook?: instrument.PositionBook;
}
export declare class API {
    private context;
    private resolver;
    constructor(context: any, resolver: any);
    /**
     * candles
     * GET /v3/instruments/{instrument}/candles
     */
    candles(request: CandlesRequest): Promise<CandlesResponse>;
    /**
     * orderBook
     * GET /v3/instruments/{instrument}/orderBook
     */
    orderBook(request: OrderBookRequest): Promise<OrderBookResponse>;
    /**
     * positionBook
     * GET /v3/instruments/{instrument}/positionBook
     */
    positionBook(request: PositionBookRequest): Promise<PositionBookResponse>;
}
export declare class Stream {
    private context;
    private resolver;
    constructor(context: any, resolver: any);
}
