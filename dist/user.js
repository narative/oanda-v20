"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
exports.UserInfo_Properties = [
    new base_1.Property('username', 'username', 'The user-provided username.', 'primitive', 'string'),
    new base_1.Property('userID', 'userID', "The user's OANDA-assigned user ID.", 'primitive', 'integer'),
    new base_1.Property('country', 'country', 'The country that the user is based in.', 'primitive', 'string'),
    new base_1.Property('emailAddress', 'emailAddress', "The user's email address.", 'primitive', 'string'),
];
class UserInfo extends base_1.Definition {
    constructor(data) {
        super();
        this._summaryFormat = '';
        this._nameFormat = '';
        this._properties = exports.UserInfo_Properties;
        data = data || {};
        if (data['username'] !== undefined) {
            this.username = data['username'];
        }
        if (data['userID'] !== undefined) {
            this.userID = data['userID'];
        }
        if (data['country'] !== undefined) {
            this.country = data['country'];
        }
        if (data['emailAddress'] !== undefined) {
            this.emailAddress = data['emailAddress'];
        }
    }
}
exports.UserInfo = UserInfo;
exports.UserInfoExternal_Properties = [
    new base_1.Property('userID', 'userID', "The user's OANDA-assigned user ID.", 'primitive', 'integer'),
    new base_1.Property('country', 'country', 'The country that the user is based in.', 'primitive', 'string'),
    new base_1.Property('FIFO', 'FIFO', "Flag indicating if the the user's Accounts adhere to FIFO execution rules.", 'primitive', 'boolean'),
];
class UserInfoExternal extends base_1.Definition {
    constructor(data) {
        super();
        this._summaryFormat = '';
        this._nameFormat = '';
        this._properties = exports.UserInfoExternal_Properties;
        data = data || {};
        if (data['userID'] !== undefined) {
            this.userID = data['userID'];
        }
        if (data['country'] !== undefined) {
            this.country = data['country'];
        }
        if (data['FIFO'] !== undefined) {
            this.FIFO = data['FIFO'];
        }
    }
}
exports.UserInfoExternal = UserInfoExternal;
class EntitySpec {
    constructor(context) {
        this.context = context;
        this.UserInfo = UserInfo;
        this.UserInfoExternal = UserInfoExternal;
    }
    getInfo(userSpecifier, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        let path = '/v3/users/{userSpecifier}';
        path = path.replace('{' + 'userSpecifier' + '}', userSpecifier);
        let body = {};
        let handleResponse = (err, response) => {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                let msg = JSON.parse(response.rawBody);
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
    }
    getExternalInfo(userSpecifier, responseHandler) {
        if (!responseHandler) {
            throw 'No responseHandler provided for API call';
        }
        let path = '/v3/users/{userSpecifier}/externalInfo';
        path = path.replace('{' + 'userSpecifier' + '}', userSpecifier);
        let body = {};
        let handleResponse = (err, response) => {
            if (err) {
                responseHandler(err, null);
                return;
            }
            if (response.contentType.startsWith('application/json')) {
                let msg = JSON.parse(response.rawBody);
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
    }
}
exports.EntitySpec = EntitySpec;
//# sourceMappingURL=user.js.map