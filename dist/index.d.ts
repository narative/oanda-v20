import * as context from './context';
import * as account from './account';
import * as position from './position';
import * as pricing from './pricing';
import * as transaction from './transaction';
import * as trade from './trade';
import * as order from './order';
import * as instrument from './instrument';
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
