"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var account = require("./account");
var user = require("./user");
var position = require("./position");
var pricing = require("./pricing");
var transaction = require("./transaction");
var primitives = require("./primitives");
var trade = require("./trade");
var site = require("./site");
var pricing_common = require("./pricing_common");
var order = require("./order");
var instrument = require("./instrument");
var Response = /** @class */ (function () {
    function Response(hostname, method, path, statusCode, statusMessage, contentType, rawBody, body) {
        if (body === void 0) { body = null; }
        this.hostname = hostname;
        this.method = method;
        this.path = path;
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.contentType = contentType;
        this.rawBody = rawBody;
        this.body = body;
        this.statusCode = statusCode.toString();
    }
    Response.prototype.isSuccess = function () {
        return this.statusCode.startsWith('2');
    };
    Response.prototype.isRedirection = function () {
        return this.statusCode.startsWith('3');
    };
    Response.prototype.isClientError = function () {
        return this.statusCode.startsWith('4');
    };
    Response.prototype.isServerError = function () {
        return this.statusCode.startsWith('5');
    };
    Response.prototype.isError = function () {
        return this.isClientError() || this.isServerError();
    };
    return Response;
}());
exports.Response = Response;
var Context = /** @class */ (function () {
    function Context(hostname, port, ssl, application, username, headers, token, 
    // @ts-ignore
    http) {
        if (username === void 0) { username = ''; }
        if (headers === void 0) { headers = {
            'Content-Type': 'application/json',
            'OANDA-Agent': "v20-javascript/3.0.25 (" + application + ")",
        }; }
        if (token === void 0) { token = ''; }
        if (http === void 0) { http = ssl ? require('https') : require('http'); }
        this.hostname = hostname;
        this.port = port;
        this.ssl = ssl;
        this.application = application;
        this.username = username;
        this.headers = headers;
        this.token = token;
        this.http = http;
        this.account = new account.EntitySpec(this);
        this.position = new position.EntitySpec(this);
        this.pricing = new pricing.EntitySpec(this);
        this.transaction = new transaction.EntitySpec(this);
        this.trade = new trade.EntitySpec(this);
        this.order = new order.EntitySpec(this);
        this.instrument = new instrument.EntitySpec(this);
        this.site = new site.EntitySpec(this);
        this.primitives = new primitives.EntitySpec(this);
        this.user = new user.EntitySpec(this);
        this.pricing_common = new pricing_common.EntitySpec(this);
        application = application || '';
    }
    Context.prototype.setToken = function (token) {
        this.token = token;
        this.headers['Authorization'] = 'Bearer ' + this.token;
    };
    Context.prototype.request = function (method, path, body, streamChunkHandler, responseHandler) {
        var _this = this;
        var headers = JSON.parse(JSON.stringify(this.headers));
        var postData = '';
        if (Object.keys(body).length > 0) {
            postData = JSON.stringify(body);
            headers['Content-Length'] = postData.length;
        }
        var options = {
            hostname: this.hostname,
            port: this.port,
            method: method,
            path: path,
            headers: headers,
        };
        var req = this.http.request(options, function (response) {
            var responseBody = '';
            response.on('data', function (d) {
                responseBody += d;
                if (streamChunkHandler) {
                    var chunks = responseBody.split('\n');
                    chunks.forEach(function (chunk) {
                        if (chunk.length > 0) {
                            streamChunkHandler(chunk);
                        }
                        responseBody = chunk;
                    });
                }
            });
            response.on('end', function () {
                if (responseHandler) {
                    responseHandler(null, new Response(_this.hostname, method, path, response.statusCode, response.statusMessage, response.headers['content-type'], responseBody));
                }
            });
        });
        req.on('error', function (err) {
            if (responseHandler) {
                responseHandler(err, null);
                req.abort();
            }
        });
        if (postData.length > 0) {
            req.write(postData);
        }
        req.end();
        return req;
    };
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=context.js.map