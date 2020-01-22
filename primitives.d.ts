declare module '@oanda/v20/primitives' {

declare const Instrument_base: typeof import('./base').Definition
export class Instrument extends Instrument_base {
  constructor(data: any)
  name: any
  type: any
  displayName: any
  pipLocation: any
  displayPrecision: any
  tradeUnitsPrecision: any
  minimumTradeSize: any
  maximumTrailingStopDistance: any
  minimumTrailingStopDistance: any
  maximumPositionSize: any
  maximumOrderUnits: any
  marginRate: any
  commission: InstrumentCommission
}
declare const InstrumentCommission_base: typeof import('./base').Definition
export class InstrumentCommission extends InstrumentCommission_base {
  constructor(data: any)
  commission: any
  unitsTraded: any
  minimumCommission: any
}
declare const GuaranteedStopLossOrderLevelRestriction_base: typeof import('./base').Definition
export class GuaranteedStopLossOrderLevelRestriction extends GuaranteedStopLossOrderLevelRestriction_base {
  constructor(data: any)
  volume: any
  priceRange: any
}
export class EntitySpec {
  constructor(context: any)
  context: any
  Instrument: typeof Instrument
  InstrumentCommission: typeof InstrumentCommission
  GuaranteedStopLossOrderLevelRestriction: typeof GuaranteedStopLossOrderLevelRestriction
}
export {}

}