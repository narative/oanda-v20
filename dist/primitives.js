"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
exports.Instrument_Properties = [
    new base_1.Property('name', 'name', 'The name of the Instrument', 'primitive', 'primitives.InstrumentName'),
    new base_1.Property('type', 'type', 'The type of the Instrument', 'primitive', 'primitives.InstrumentType'),
    new base_1.Property('displayName', 'displayName', 'The display name of the Instrument', 'primitive', 'string'),
    new base_1.Property('pipLocation', 'pipLocation', 'The location of the "pip" for this instrument. The decimal position of the pip in this Instrument\'s price can be found at 10 ^ pipLocation (e.g. -4 pipLocation results in a decimal pip position of 10 ^ -4 = 0.0001).', 'primitive', 'integer'),
    new base_1.Property('displayPrecision', 'displayPrecision', 'The number of decimal places that should be used to display prices for this instrument. (e.g. a displayPrecision of 5 would result in a price of "1" being displayed as "1.00000")', 'primitive', 'integer'),
    new base_1.Property('tradeUnitsPrecision', 'tradeUnitsPrecision', 'The amount of decimal places that may be provided when specifying the number of units traded for this instrument.', 'primitive', 'integer'),
    new base_1.Property('minimumTradeSize', 'minimumTradeSize', 'The smallest number of units allowed to be traded for this instrument.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('maximumTrailingStopDistance', 'maximumTrailingStopDistance', 'The maximum trailing stop distance allowed for a trailing stop loss created for this instrument. Specified in price units.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('minimumTrailingStopDistance', 'minimumTrailingStopDistance', 'The minimum trailing stop distance allowed for a trailing stop loss created for this instrument. Specified in price units.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('maximumPositionSize', 'maximumPositionSize', 'The maximum position size allowed for this instrument. Specified in units.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('maximumOrderUnits', 'maximumOrderUnits', 'The maximum units allowed for an Order placed for this instrument. Specified in units.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('marginRate', 'marginRate', 'The margin rate for this instrument.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('commission', 'commission', 'The commission structure for this instrument.', 'object', 'primitives.InstrumentCommission'),
];
class Instrument extends base_1.Definition {
    constructor(data) {
        super();
        this._summaryFormat = '';
        this._nameFormat = '';
        this._properties = exports.Instrument_Properties;
        data = data || {};
        if (data['name'] !== undefined) {
            this.name = data['name'];
        }
        if (data['type'] !== undefined) {
            this.type = data['type'];
        }
        if (data['displayName'] !== undefined) {
            this.displayName = data['displayName'];
        }
        if (data['pipLocation'] !== undefined) {
            this.pipLocation = data['pipLocation'];
        }
        if (data['displayPrecision'] !== undefined) {
            this.displayPrecision = data['displayPrecision'];
        }
        if (data['tradeUnitsPrecision'] !== undefined) {
            this.tradeUnitsPrecision = data['tradeUnitsPrecision'];
        }
        if (data['minimumTradeSize'] !== undefined) {
            this.minimumTradeSize = data['minimumTradeSize'];
        }
        if (data['maximumTrailingStopDistance'] !== undefined) {
            this.maximumTrailingStopDistance = data['maximumTrailingStopDistance'];
        }
        if (data['minimumTrailingStopDistance'] !== undefined) {
            this.minimumTrailingStopDistance = data['minimumTrailingStopDistance'];
        }
        if (data['maximumPositionSize'] !== undefined) {
            this.maximumPositionSize = data['maximumPositionSize'];
        }
        if (data['maximumOrderUnits'] !== undefined) {
            this.maximumOrderUnits = data['maximumOrderUnits'];
        }
        if (data['marginRate'] !== undefined) {
            this.marginRate = data['marginRate'];
        }
        if (data['commission'] !== undefined) {
            this.commission = new InstrumentCommission(data['commission']);
        }
    }
}
exports.Instrument = Instrument;
exports.InstrumentCommission_Properties = [
    new base_1.Property('commission', 'commission', "The commission amount (in the Account's home currency) charged per unitsTraded of the instrument", 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('unitsTraded', 'unitsTraded', 'The number of units traded that the commission amount is based on.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('minimumCommission', 'minimumCommission', "The minimum commission amount (in the Account's home currency) that is charged when an Order is filled for this instrument.", 'primitive', 'primitives.DecimalNumber'),
];
class InstrumentCommission extends base_1.Definition {
    constructor(data) {
        super();
        this._summaryFormat = '';
        this._nameFormat = '';
        this._properties = exports.InstrumentCommission_Properties;
        data = data || {};
        if (data['commission'] !== undefined) {
            this.commission = data['commission'];
        }
        if (data['unitsTraded'] !== undefined) {
            this.unitsTraded = data['unitsTraded'];
        }
        if (data['minimumCommission'] !== undefined) {
            this.minimumCommission = data['minimumCommission'];
        }
    }
}
exports.InstrumentCommission = InstrumentCommission;
exports.GuaranteedStopLossOrderLevelRestriction_Properties = [
    new base_1.Property('volume', 'volume', 'Applies to Trades with a guaranteed Stop Loss Order attached for the specified Instrument. This is the total allowed Trade volume that can exist within the priceRange based on the trigger prices of the guaranteed Stop Loss Orders.', 'primitive', 'primitives.DecimalNumber'),
    new base_1.Property('priceRange', 'priceRange', 'The price range the volume applies to. This value is in price units.', 'primitive', 'primitives.DecimalNumber'),
];
class GuaranteedStopLossOrderLevelRestriction extends base_1.Definition {
    constructor(data) {
        super();
        this._summaryFormat = '';
        this._nameFormat = '';
        this._properties = exports.GuaranteedStopLossOrderLevelRestriction_Properties;
        data = data || {};
        if (data['volume'] !== undefined) {
            this.volume = data['volume'];
        }
        if (data['priceRange'] !== undefined) {
            this.priceRange = data['priceRange'];
        }
    }
}
exports.GuaranteedStopLossOrderLevelRestriction = GuaranteedStopLossOrderLevelRestriction;
class EntitySpec {
    constructor(context) {
        this.context = context;
        this.Instrument = Instrument;
        this.InstrumentCommission = InstrumentCommission;
        this.GuaranteedStopLossOrderLevelRestriction = GuaranteedStopLossOrderLevelRestriction;
    }
}
exports.EntitySpec = EntitySpec;
//# sourceMappingURL=primitives.js.map