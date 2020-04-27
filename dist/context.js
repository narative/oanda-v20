"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account = require("./account");
const user = require("./user");
const position = require("./position");
const pricing = require("./pricing");
const transaction = require("./transaction");
const primitives = require("./primitives");
const trade = require("./trade");
const site = require("./site");
const pricing_common = require("./pricing_common");
const order = require("./order");
const instrument = require("./instrument");
class Response {
    constructor(method, path, statusCode, statusMessage, contentType, rawBody, body = null) {
        this.method = method;
        this.path = path;
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.contentType = contentType;
        this.rawBody = rawBody;
        this.body = body;
        this.statusCode = statusCode.toString();
    }
    isSuccess() {
        return this.statusCode.startsWith('2');
    }
    isRedirection() {
        return this.statusCode.startsWith('3');
    }
    isClientError() {
        return this.statusCode.startsWith('4');
    }
    isServerError() {
        return this.statusCode.startsWith('5');
    }
    isError() {
        return this.isClientError() || this.isServerError();
    }
}
exports.Response = Response;
class Context {
    constructor(hostname, port, ssl, application, username = '', headers = {
        'Content-Type': 'application/json',
        'OANDA-Agent': `v20-javascript/3.0.25 (${application})`,
    }, token = '', 
    // @ts-ignore
    http = ssl ? require('https') : require('http')) {
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
    setToken(token) {
        this.token = token;
        this.headers['Authorization'] = 'Bearer ' + this.token;
    }
    request(method, path, body, streamChunkHandler, responseHandler) {
        let headers = JSON.parse(JSON.stringify(this.headers));
        let postData = '';
        if (Object.keys(body).length > 0) {
            postData = JSON.stringify(body);
            headers['Content-Length'] = postData.length;
        }
        let options = {
            hostname: this.hostname,
            port: this.port,
            method: method,
            path: path,
            headers: headers,
        };
        let req = this.http.request(options, (response) => {
            let responseBody = '';
            response.on('data', (d) => {
                responseBody += d;
                if (streamChunkHandler) {
                    let chunks = responseBody.split('\n');
                    chunks.forEach((chunk) => {
                        if (chunk.length > 0) {
                            streamChunkHandler(chunk);
                        }
                        responseBody = chunk;
                    });
                }
            });
            response.on('end', () => {
                if (responseHandler) {
                    responseHandler(null, new Response(method, path, response.statusCode, response.statusMessage, response.headers['content-type'], responseBody));
                }
            });
        });
        req.on('error', (err) => {
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
    }
}
exports.Context = Context;
//# sourceMappingURL=context.js.map