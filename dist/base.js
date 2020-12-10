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
var Property = /** @class */ (function () {
    function Property(name, displayName, description, typeClass, typeName) {
        this.name = name;
        this.displayName = displayName;
        this.description = description;
        this.typeClass = typeClass;
        this.typeName = typeName;
    }
    return Property;
}());
exports.Property = Property;
var Field = /** @class */ (function (_super) {
    __extends(Field, _super);
    function Field(property, value) {
        var _this = _super.call(this, property.name, property.displayName, property.description, property.typeClass, property.typeName) || this;
        _this.value = value;
        return _this;
    }
    return Field;
}(Property));
exports.Field = Field;
var Definition = /** @class */ (function () {
    function Definition() {
        this._summaryFormat = '';
        this._nameFormat = '';
        this._properties = [];
    }
    Definition.prototype.toJSON = function () {
        var recursiveConvert = function (value) {
            if (Array.isArray(value)) {
                return value.map(function (v) { return recursiveConvert(v); });
            }
            else if (value === null || value === void 0 ? void 0 : value.toJSON) {
                return value.toJSON();
            }
            else {
                return value;
            }
        };
        return Object.entries(this)
            .filter(function (_a) {
            var k = _a[0], v = _a[1];
            return !['_summaryFormat', '_nameFormat', '_properties'].includes(k);
        })
            .reduce(function (acc, _a) {
            var k = _a[0], v = _a[1];
            acc[k] = recursiveConvert(v);
            return acc;
        }, {});
    };
    Definition.prototype.name = function () {
        var nameStr = this._nameFormat;
        var re = /{([^}]+)}/g;
        var matches = nameStr.match(re);
        for (var _i = 0, _a = matches || []; _i < _a.length; _i++) {
            var match = _a[_i];
            var key = match.slice(1, -1);
            var value = this[key] || match;
            nameStr = nameStr.replace(match, value);
        }
        return nameStr;
    };
    Definition.prototype.summary = function () {
        var summaryStr = this._summaryFormat;
        var re = /{([^}]+)}/g;
        var matches = summaryStr.match(re);
        for (var _i = 0, _a = matches || []; _i < _a.length; _i++) {
            var match = _a[_i];
            var key = match.slice(1, -1);
            var value = this[key] || match;
            summaryStr = summaryStr.replace(match, value);
        }
        return summaryStr;
    };
    Definition.prototype.title = function () {
        var nameStr = this.name();
        var summaryStr = this.summary();
        var titleStr = nameStr;
        if (nameStr.length > 0 && summaryStr.length > 0) {
            titleStr += ': ';
        }
        titleStr += summaryStr;
        return titleStr;
    };
    Definition.prototype.toString = function () {
        var _this = this;
        var s = this.title();
        this._properties.forEach(function (prop) {
            var value = _this[prop.name];
            if (value === undefined) {
                return;
            }
            s += '\n' + prop.displayName + ': ';
            if (value instanceof Array) {
                s += '[' + value.length + ']';
            }
            else {
                s += value;
            }
        });
        return s;
    };
    Definition.prototype.fields = function () {
        var _this = this;
        var ret = [];
        this._properties.forEach(function (prop) {
            var value = _this[prop.name];
            if (typeof value != 'undefined') {
                ret.push(new Field(prop, value));
            }
        });
        return ret;
    };
    return Definition;
}());
exports.Definition = Definition;
//# sourceMappingURL=base.js.map