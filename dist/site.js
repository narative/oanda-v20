"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
exports.MT4TransactionHeartbeat_Properties = [
    new base_1.Property('type', 'type', 'The string "HEARTBEAT"', 'primitive', 'string'),
    new base_1.Property('time', 'time', 'The date/time when the TransactionHeartbeat was created.', 'primitive', 'primitives.DateTime'),
];
var MT4TransactionHeartbeat = /** @class */ (function (_super) {
    __extends(MT4TransactionHeartbeat, _super);
    function MT4TransactionHeartbeat(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = 'Transaction Heartbeat {time}';
        _this._nameFormat = '';
        _this._properties = exports.MT4TransactionHeartbeat_Properties;
        data = data || {};
        if (data['type'] !== undefined) {
            _this.type = data['type'];
        }
        else {
            _this.type = 'HEARTBEAT';
        }
        if (data['time'] !== undefined) {
            _this.time = data['time'];
        }
        return _this;
    }
    return MT4TransactionHeartbeat;
}(base_1.Definition));
exports.MT4TransactionHeartbeat = MT4TransactionHeartbeat;
var EntitySpec = /** @class */ (function () {
    function EntitySpec(context) {
        this.context = context;
        this.MT4TransactionHeartbeat = MT4TransactionHeartbeat;
    }
    return EntitySpec;
}());
exports.EntitySpec = EntitySpec;
//# sourceMappingURL=site.js.map