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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var context = require("./context");
var accountAPI = require("./api/account");
var positionAPI = require("./api/position");
var pricingAPI = require("./api/pricing");
var transactionAPI = require("./api/transaction");
var tradeAPI = require("./api/trade");
var orderAPI = require("./api/order");
var instrumentAPI = require("./api/instrument");
__export(require("./context"));
exports.account = require("./api/account");
exports.position = require("./api/position");
exports.pricing = require("./api/pricing");
exports.transaction = require("./api/transaction");
exports.trade = require("./api/trade");
exports.order = require("./api/order");
exports.instrument = require("./api/instrument");
__export(require("./definitions/account"));
__export(require("./definitions/instrument"));
__export(require("./definitions/order"));
__export(require("./definitions/position"));
__export(require("./definitions/pricing"));
__export(require("./definitions/pricingCommon"));
__export(require("./definitions/primitives"));
__export(require("./definitions/trade"));
__export(require("./definitions/transaction"));
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
var OANDA = /** @class */ (function () {
    function OANDA(applicationName, url, token, dateFormat) {
        if (dateFormat === void 0) { dateFormat = 'UNIX'; }
        this.applicationName = applicationName;
        this.url = url;
        this.token = token;
        this.dateFormat = dateFormat;
        var ctx = new context.Context(url, 443, true, applicationName);
        ctx.setToken(token);
        if (dateFormat === 'UNIX') {
            ctx.headers['Accept-Datetime-Format'] = 'UNIX';
        }
        this.context = ctx;
    }
    return OANDA;
}());
var Rest = /** @class */ (function (_super) {
    __extends(Rest, _super);
    function Rest(applicationName, token, practice, dateFormat) {
        if (practice === void 0) { practice = false; }
        if (dateFormat === void 0) { dateFormat = 'UNIX'; }
        var _this = _super.call(this, applicationName, practice ? url.practice.api : url.production.api, token, dateFormat) || this;
        _this.account = new accountAPI.API(_this.context, resolver);
        _this.position = new positionAPI.API(_this.context, resolver);
        _this.pricing = new pricingAPI.API(_this.context, resolver);
        _this.transaction = new transactionAPI.API(_this.context, resolver);
        _this.trade = new tradeAPI.API(_this.context, resolver);
        _this.order = new orderAPI.API(_this.context, resolver);
        _this.instrument = new instrumentAPI.API(_this.context, resolver);
        return _this;
    }
    return Rest;
}(OANDA));
exports.Rest = Rest;
var Stream = /** @class */ (function (_super) {
    __extends(Stream, _super);
    function Stream(applicationName, token, practice, dateFormat) {
        if (practice === void 0) { practice = false; }
        if (dateFormat === void 0) { dateFormat = 'UNIX'; }
        var _this = _super.call(this, applicationName, practice ? url.practice.stream : url.production.stream, token, dateFormat) || this;
        _this.pricing = new pricingAPI.Stream(_this.context, resolver);
        _this.transaction = new transactionAPI.Stream(_this.context, resolver);
        return _this;
    }
    return Stream;
}(OANDA));
exports.Stream = Stream;
var APIError = /** @class */ (function (_super) {
    __extends(APIError, _super);
    function APIError(message, helpURL, path, body) {
        var _this = _super.call(this, message + ": " + helpURL + "\npath=" + path + " errorCode=" + (body === null || body === void 0 ? void 0 : body.errorCode) + " errorMessage=" + (body === null || body === void 0 ? void 0 : body.errorMessage)) || this;
        _this.helpURL = helpURL;
        _this.path = path;
        _this.body = body;
        return _this;
    }
    return APIError;
}(Error));
exports.APIError = APIError;
function resolver(resolve, reject) {
    return function (err, res) {
        if (err) {
            reject(err);
            return;
        }
        switch (res.statusCode) {
            case '400':
                reject(new APIError('Bad request', 'https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400', res === null || res === void 0 ? void 0 : res.path, res === null || res === void 0 ? void 0 : res.body));
                return;
            case '401':
                reject(new APIError('Unauthorized', 'https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400', res === null || res === void 0 ? void 0 : res.path, res === null || res === void 0 ? void 0 : res.body));
                return;
            case '403':
                reject(new APIError('Forbidden', 'https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400', res === null || res === void 0 ? void 0 : res.path, res === null || res === void 0 ? void 0 : res.body));
                return;
            case '404':
                reject(new APIError('Not found', 'https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400', res === null || res === void 0 ? void 0 : res.path, res === null || res === void 0 ? void 0 : res.body));
                return;
            case '405':
                reject(new APIError('Method not allowed', 'https://developer.oanda.com/rest-live-v20/troubleshooting-errors/#400', res === null || res === void 0 ? void 0 : res.path, res === null || res === void 0 ? void 0 : res.body));
                return;
            default: {
                if (res.statusCode.startsWith('2')) {
                    resolve(res.body);
                    return;
                }
                reject(new APIError('Unhandled status code', "" + res.statusCode, res === null || res === void 0 ? void 0 : res.path, res === null || res === void 0 ? void 0 : res.body));
                return;
            }
        }
    };
}
function toOANDATime(date, dateFormat) {
    if (dateFormat === void 0) { dateFormat = 'UNIX'; }
    return dateFormat === 'UNIX' ? "" + date.getTime() / 1000 : date.toString();
}
exports.toOANDATime = toOANDATime;
function oandaTimeToDate(data, dateFormat) {
    if (dateFormat === void 0) { dateFormat = 'UNIX'; }
    return dateFormat === 'UNIX' ? new Date(Number(data) * 1000) : new Date(data);
}
exports.oandaTimeToDate = oandaTimeToDate;
//# sourceMappingURL=index.js.map