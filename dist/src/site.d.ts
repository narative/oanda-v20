import { Definition, Property } from './base';
import * as primitives from './primitives';
export declare const MT4TransactionHeartbeat_Properties: Property[];
export declare class MT4TransactionHeartbeat extends Definition {
    /**
     * The string "HEARTBEAT"
     */
    type: string;
    /**
     * The date/time when the TransactionHeartbeat was created.
     */
    time: primitives.DateTime;
    constructor(data: any);
}
export declare class EntitySpec {
    context: any;
    MT4TransactionHeartbeat: typeof MT4TransactionHeartbeat;
    constructor(context: any);
}
