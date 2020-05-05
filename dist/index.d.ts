import * as context from './context';
import * as account from './api/account';
import * as position from './api/position';
import * as pricing from './api/pricing';
import * as transaction from './api/transaction';
import * as trade from './api/trade';
import * as order from './api/order';
import * as instrument from './api/instrument';
declare class OANDA {
    context: context.Context;
    account: account.API;
    position: position.API;
    pricing: pricing.API;
    transaction: transaction.API;
    trade: trade.API;
    order: order.API;
    instrument: instrument.API;
    constructor(applicationName: string, url: string, token: string, dateFormat?: 'UNIX' | 'RFC3339');
}
export declare class Rest extends OANDA {
    constructor(applicationName: string, token: string, practice?: boolean, dateFormat?: 'UNIX' | 'RFC3339');
}
export declare class Stream extends OANDA {
    constructor(applicationName: string, token: string, practice?: boolean, dateFormat?: 'UNIX' | 'RFC3339');
}
export {};
