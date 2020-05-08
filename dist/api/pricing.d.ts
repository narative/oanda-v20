/// <reference types="node" />
import * as account from '../definitions/account';
import * as instrument from '../definitions/instrument';
import * as pricing from '../definitions/pricing';
import * as primitives from '../definitions/primitives';
import * as http from 'http';
export interface GetRequest {
    accountID: account.AccountID;
    query: GetRequestQuery;
}
export interface GetRequestQuery {
    instruments?: primitives.InstrumentName[];
    since?: primitives.DateTime;
    includeUnitsAvailable?: boolean;
    includeHomeConversions?: boolean;
}
export declare type GetResponse = GetResponse200;
export interface GetResponse200 {
    /**
     * The list of Price objects requested.
     */
    prices: pricing.ClientPrice[];
    /**
     * The list of home currency conversion factors requested. This field will
     * only be present if includeHomeConversions was set to true in the request.
     */
    homeConversions?: pricing.HomeConversions[];
    /**
     * The DateTime value to use for the 'since' parameter in the next poll
     * request.
     */
    time?: primitives.DateTime;
}
export interface StreamRequest {
    accountID: account.AccountID;
    query: StreamRequestQuery;
}
export interface StreamRequestQuery {
    instruments?: primitives.InstrumentName[];
    snapshot?: boolean;
}
export declare type StreamResponse = void;
export interface CandlesRequest {
    instrument: primitives.InstrumentName;
    accountID: account.AccountID;
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
    units?: primitives.DecimalNumber;
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
export declare class API {
    private context;
    private resolver;
    constructor(context: any, resolver: any);
    /**
     * get
     * GET /v3/accounts/{accountID}/pricing
     */
    get(request: GetRequest): Promise<GetResponse>;
    /**
     * candles
     * GET /v3/accounts/{accountID}/instruments/{instrument}/candles
     */
    candles(request: CandlesRequest): Promise<CandlesResponse>;
}
export declare class Stream {
    private context;
    private resolver;
    constructor(context: any, resolver: any);
    /**
     * stream
     * GET /v3/accounts/{accountID}/pricing/stream
     */
    stream(request: StreamRequest, streamHandler: (data: any) => void, doneHandler: (err: any, data: any) => void): http.ClientRequest;
}
