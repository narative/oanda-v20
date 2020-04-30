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
var context = require("./context");
var account = require("./account");
var position = require("./position");
var pricing = require("./pricing");
var transaction = require("./transaction");
var trade = require("./trade");
var order = require("./order");
var instrument = require("./instrument");
var url = {
    practice: {
        api: 'api-fxpractice.oanda.com',
        stream: 'stream-fxpractice.oanda.com',
    },
    production: {
        api: 'https://api-fxtrade.oanda.com',
        stream: 'https://stream-fxtrade.oanda.com',
    },
};
function resolver(resolve, reject) {
    return function (err, res) {
        if (err) {
            reject(err);
            return;
        }
        switch (res.statusCode) {
            case '400':
                reject(new Error('Bad request: https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400'));
                return;
            case '401':
                reject(new Error('Unauthorized: https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400'));
                return;
            case '403':
                reject(new Error('Forbidden: https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400'));
                return;
            case '404':
                reject(new Error('Not found: https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400'));
                return;
            case '405':
                reject(new Error('Method not allowed: https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400'));
                return;
            default: {
                if (res.statusCode.startsWith('2')) {
                    resolve(res.body);
                    return;
                }
                reject(new Error("Unhandled status code: " + res.statusCode));
                return;
            }
        }
    };
}
var OANDA = /** @class */ (function () {
    function OANDA(applicationName, url, token, dateFormat) {
        if (dateFormat === void 0) { dateFormat = 'UNIX'; }
        var ctx = new context.Context(url, 443, true, applicationName);
        ctx.setToken(token);
        if (dateFormat === 'UNIX') {
            ctx.headers['Accept-Datetime-Format'] = 'UNIX';
        }
        this.context = ctx;
        this.account = new account.API(ctx, resolver);
        this.position = new position.API(ctx, resolver);
        this.pricing = new pricing.API(ctx, resolver);
        this.transaction = new transaction.API(ctx, resolver);
        this.trade = new trade.API(ctx, resolver);
        this.order = new order.API(ctx, resolver);
        this.instrument = new instrument.API(ctx, resolver);
    }
    return OANDA;
}());
var Rest = /** @class */ (function (_super) {
    __extends(Rest, _super);
    function Rest(applicationName, token, practice, dateFormat) {
        if (practice === void 0) { practice = false; }
        if (dateFormat === void 0) { dateFormat = 'UNIX'; }
        return _super.call(this, applicationName, practice ? url.practice.api : url.production.api, token, dateFormat) || this;
    }
    return Rest;
}(OANDA));
exports.Rest = Rest;
var Stream = /** @class */ (function (_super) {
    __extends(Stream, _super);
    function Stream(applicationName, token, practice, dateFormat) {
        if (practice === void 0) { practice = false; }
        if (dateFormat === void 0) { dateFormat = 'UNIX'; }
        return _super.call(this, applicationName, practice ? url.practice.stream : url.production.stream, token, dateFormat) || this;
    }
    return Stream;
}(OANDA));
exports.Stream = Stream;
//# sourceMappingURL=index.js.map