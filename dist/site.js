"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
exports.MT4TransactionHeartbeat_Properties = [
    new base_1.Property('type', 'type', 'The string "HEARTBEAT"', 'primitive', 'string'),
    new base_1.Property('time', 'time', 'The date/time when the TransactionHeartbeat was created.', 'primitive', 'primitives.DateTime'),
];
class MT4TransactionHeartbeat extends base_1.Definition {
    constructor(data) {
        super();
        this._summaryFormat = 'Transaction Heartbeat {time}';
        this._nameFormat = '';
        this._properties = exports.MT4TransactionHeartbeat_Properties;
        data = data || {};
        if (data['type'] !== undefined) {
            this.type = data['type'];
        }
        else {
            this.type = 'HEARTBEAT';
        }
        if (data['time'] !== undefined) {
            this.time = data['time'];
        }
    }
}
exports.MT4TransactionHeartbeat = MT4TransactionHeartbeat;
class EntitySpec {
    constructor(context) {
        this.context = context;
        this.MT4TransactionHeartbeat = MT4TransactionHeartbeat;
    }
}
exports.EntitySpec = EntitySpec;
//# sourceMappingURL=site.js.map