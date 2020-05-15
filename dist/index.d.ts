import * as context from './context';
import * as accountAPI from './api/account';
import * as positionAPI from './api/position';
import * as pricingAPI from './api/pricing';
import * as transactionAPI from './api/transaction';
import * as tradeAPI from './api/trade';
import * as orderAPI from './api/order';
import * as instrumentAPI from './api/instrument';
export * from './context';
export * as account from './api/account';
export * as position from './api/position';
export * as pricing from './api/pricing';
export * as transaction from './api/transaction';
export * as trade from './api/trade';
export * as order from './api/order';
export * as instrument from './api/instrument';
export * from './definitions/account';
export * from './definitions/instrument';
export * from './definitions/order';
export * from './definitions/position';
export * from './definitions/pricing';
export * from './definitions/pricingCommon';
export * from './definitions/primitives';
export * from './definitions/trade';
export * from './definitions/transaction';
declare class OANDA {
    applicationName: string;
    url: string;
    token: string;
    dateFormat: 'UNIX' | 'RFC3339';
    context: context.Context;
    constructor(applicationName: string, url: string, token: string, dateFormat?: 'UNIX' | 'RFC3339');
}
export declare class Rest extends OANDA {
    account: accountAPI.API;
    position: positionAPI.API;
    pricing: pricingAPI.API;
    transaction: transactionAPI.API;
    trade: tradeAPI.API;
    order: orderAPI.API;
    instrument: instrumentAPI.API;
    constructor(applicationName: string, token: string, practice?: boolean, dateFormat?: 'UNIX' | 'RFC3339');
}
export declare class Stream extends OANDA {
    pricing: pricingAPI.Stream;
    transaction: transactionAPI.Stream;
    constructor(applicationName: string, token: string, practice?: boolean, dateFormat?: 'UNIX' | 'RFC3339');
}
export declare class APIError extends Error {
    helpURL: string;
    hostname: string;
    path: string;
    body: any;
    constructor(message: string, helpURL: string, hostname: string, path: string, body: any);
}
export declare function toOANDATime(date: Date, dateFormat?: 'UNIX' | 'RFC3339'): string;
export declare function oandaTimeToDate(data: any, dateFormat?: 'UNIX' | 'RFC3339'): Date;
