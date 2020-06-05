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
exports.UserInfo_Properties = [
    new base_1.Property('username', 'username', 'The user-provided username.', 'primitive', 'string'),
    new base_1.Property('userID', 'userID', "The user's OANDA-assigned user ID.", 'primitive', 'integer'),
    new base_1.Property('country', 'country', 'The country that the user is based in.', 'primitive', 'string'),
    new base_1.Property('emailAddress', 'emailAddress', "The user's email address.", 'primitive', 'string'),
];
var UserInfo = /** @class */ (function (_super) {
    __extends(UserInfo, _super);
    function UserInfo(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.UserInfo_Properties;
        data = data || {};
        if (data['username'] !== undefined) {
            _this.username = data['username'];
        }
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['country'] !== undefined) {
            _this.country = data['country'];
        }
        if (data['emailAddress'] !== undefined) {
            _this.emailAddress = data['emailAddress'];
        }
        return _this;
    }
    return UserInfo;
}(base_1.Definition));
exports.UserInfo = UserInfo;
exports.UserInfoExternal_Properties = [
    new base_1.Property('userID', 'userID', "The user's OANDA-assigned user ID.", 'primitive', 'integer'),
    new base_1.Property('country', 'country', 'The country that the user is based in.', 'primitive', 'string'),
    new base_1.Property('FIFO', 'FIFO', "Flag indicating if the the user's Accounts adhere to FIFO execution rules.", 'primitive', 'boolean'),
];
var UserInfoExternal = /** @class */ (function (_super) {
    __extends(UserInfoExternal, _super);
    function UserInfoExternal(data) {
        var _this = _super.call(this) || this;
        _this._summaryFormat = '';
        _this._nameFormat = '';
        _this._properties = exports.UserInfoExternal_Properties;
        data = data || {};
        if (data['userID'] !== undefined) {
            _this.userID = data['userID'];
        }
        if (data['country'] !== undefined) {
            _this.country = data['country'];
        }
        if (data['FIFO'] !== undefined) {
            _this.FIFO = data['FIFO'];
        }
        return _this;
    }
    return UserInfoExternal;
}(base_1.Definition));
exports.UserInfoExternal = UserInfoExternal;
var EntitySpec = /** @class */ (function () {
    function EntitySpec(context) {
        this.context = context;
        this.UserInfo = UserInfo;
        this.UserInfoExternal = UserInfoExternal;
    }
    EntitySpec.prototype.getInfo = function (userSpecifier, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/users/{userSpecifier}';
        path = path.replace('{' + 'userSpecifier' + '}', userSpecifier);
        var body = {};
        var handleResponse = function (err, response) {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                var msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['userInfo'] !== undefined) {
                        response.body.userInfo = new UserInfo(msg['userInfo']);
                    }
                }
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 403) {
                }
                else if (response.statusCode == 405) {
                }
                //
                // Assume standard error response with errorCode and errorMessage
                //
                else {
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
            }
            responseHandler(null, response);
        };
        return this.context.request('GET', path, body, undefined, handleResponse);
    };
    EntitySpec.prototype.getExternalInfo = function (userSpecifier, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        var path = '/v3/users/{userSpecifier}/externalInfo';
        path = path.replace('{' + 'userSpecifier' + '}', userSpecifier);
        var body = {};
        var handleResponse = function (err, response) {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                var msg = JSON.parse(response.rawBody);
                response.body = {};
                if (response.statusCode == 200) {
                    if (msg['userInfo'] !== undefined) {
                        response.body.userInfo = new UserInfoExternal(msg['userInfo']);
                    }
                }
                else if (response.statusCode == 401) {
                }
                else if (response.statusCode == 403) {
                }
                else if (response.statusCode == 405) {
                }
                //
                // Assume standard error response with errorCode and errorMessage
                //
                else {
                    if (msg['errorCode'] !== undefined) {
                        response.body.errorCode = msg['errorCode'];
                    }
                    if (msg['errorMessage'] !== undefined) {
                        response.body.errorMessage = msg['errorMessage'];
                    }
                }
            }
            responseHandler(null, response);
        };
        return this.context.request('GET', path, body, undefined, handleResponse);
    };
    return EntitySpec;
}());
exports.EntitySpec = EntitySpec;
//# sourceMappingURL=user.js.map