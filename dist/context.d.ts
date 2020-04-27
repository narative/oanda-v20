import * as account from './account';
import * as user from './user';
import * as position from './position';
import * as pricing from './pricing';
import * as transaction from './transaction';
import * as primitives from './primitives';
import * as trade from './trade';
import * as site from './site';
import * as pricing_common from './pricing_common';
import * as order from './order';
import * as instrument from './instrument';
export declare class Response {
    method: any;
    path: any;
    statusCode: any;
    statusMessage: any;
    contentType: any;
    rawBody: any;
    body: any;
    constructor(method: any, path: any, statusCode: any, statusMessage: any, contentType: any, rawBody: any, body?: any);
    isSuccess(): any;
    isRedirection(): any;
    isClientError(): any;
    isServerError(): any;
    isError(): any;
}
export declare class Context {
    hostname: any;
    port: any;
    ssl: any;
    application: any;
    username: string;
    headers: {
        'Content-Type': string;
        'OANDA-Agent': string;
    };
    token: string;
    http: any;
    account: account.EntitySpec;
    position: position.EntitySpec;
    pricing: pricing.EntitySpec;
    transaction: transaction.EntitySpec;
    trade: trade.EntitySpec;
    order: order.EntitySpec;
    instrument: instrument.EntitySpec;
    site: site.EntitySpec;
    primitives: primitives.EntitySpec;
    user: user.EntitySpec;
    pricing_common: pricing_common.EntitySpec;
    constructor(hostname: any, port: any, ssl: any, application: any, username?: string, headers?: {
        'Content-Type': string;
        'OANDA-Agent': string;
    }, token?: string, http?: any);
    setToken(token: any): void;
    request(method: any, path: any, body: any, streamChunkHandler: any, responseHandler: any): any;
}
