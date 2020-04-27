import { Definition, Property, Field } from './base'

// account
export type AccountFinancingMode = string
export type AccountID = string
export type GuaranteedStopLossOrderMode = string

// order
export type OrderID = string
export type OrderPositionFill = string
export type OrderState = string
export type OrderTriggerCondition = string
export type OrderType = string
export type TimeInForce = string
export type OrderSpecifier = string
export type OrderStateFilter = string
export type TakeProfitDetails = string
export type StopLossDetails = string
export type TrailingStopLossDetails = string

// pricing_common
export type PriceValue = string

// pricing
export type PriceStatus = string
export type PricingComponent = string
export type CandlestickGranularity = string
export type WeeklyAlignment = string

// primitives
export type AccountUnits = string
export type Currency = string
export type DateTime = string
export type DecimalNumber = string
export type InstrumentName = string
export type InstrumentType = string

// trades
export type TradeID = string
export type TradeState = string
export type TradeStateFilter = string
export type TradeSpecifier = string

// transactions
export type ClientComment = string
export type ClientID = string
export type ClientTag = string
export type FixedPriceOrderReason = string
export type FundingReason = string
export type LimitOrderReason = string
export type MarketIfTouchedOrderReason = string
export type MarketOrderMarginCloseoutReason = string
export type MarketOrderReason = string
export type OrderCancelReason = string
export type OrderFillReason = string
export type RequestID = string
export type StopLossOrderReason = string
export type StopOrderReason = string
export type TakeProfitOrderReason = string
export type TrailingStopLossOrderReason = string
export type TransactionID = string
export type TransactionRejectReason = string
export type TransactionType = string
export type TransactionFilter = string
export type ClientExtensions = string

export const Instrument_Properties = [
  new Property(
    'name',
    'name',
    'The name of the Instrument',
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'type',
    'type',
    'The type of the Instrument',
    'primitive',
    'primitives.InstrumentType',
  ),
  new Property(
    'displayName',
    'displayName',
    'The display name of the Instrument',
    'primitive',
    'string',
  ),
  new Property(
    'pipLocation',
    'pipLocation',
    'The location of the "pip" for this instrument. The decimal position of the pip in this Instrument\'s price can be found at 10 ^ pipLocation (e.g. -4 pipLocation results in a decimal pip position of 10 ^ -4 = 0.0001).',
    'primitive',
    'integer',
  ),
  new Property(
    'displayPrecision',
    'displayPrecision',
    'The number of decimal places that should be used to display prices for this instrument. (e.g. a displayPrecision of 5 would result in a price of "1" being displayed as "1.00000")',
    'primitive',
    'integer',
  ),
  new Property(
    'tradeUnitsPrecision',
    'tradeUnitsPrecision',
    'The amount of decimal places that may be provided when specifying the number of units traded for this instrument.',
    'primitive',
    'integer',
  ),
  new Property(
    'minimumTradeSize',
    'minimumTradeSize',
    'The smallest number of units allowed to be traded for this instrument.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'maximumTrailingStopDistance',
    'maximumTrailingStopDistance',
    'The maximum trailing stop distance allowed for a trailing stop loss created for this instrument. Specified in price units.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'minimumTrailingStopDistance',
    'minimumTrailingStopDistance',
    'The minimum trailing stop distance allowed for a trailing stop loss created for this instrument. Specified in price units.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'maximumPositionSize',
    'maximumPositionSize',
    'The maximum position size allowed for this instrument. Specified in units.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'maximumOrderUnits',
    'maximumOrderUnits',
    'The maximum units allowed for an Order placed for this instrument. Specified in units.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'marginRate',
    'marginRate',
    'The margin rate for this instrument.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'commission',
    'commission',
    'The commission structure for this instrument.',
    'object',
    'primitives.InstrumentCommission',
  ),
]

export class Instrument extends Definition {
  /**
   * The name of the Instrument
   */
  public name: any // InstrumentName

  /**
   * The type of the Instrument
   */
  public type: InstrumentType

  /**
   * The display name of the Instrument
   */
  public displayName: string

  /**
   * The location of the "pip" for this instrument. The decimal position of the pip in this Instrument's price can be found at 10 ^ pipLocation (e.g. -4 pipLocation results in a decimal pip position of 10 ^ -4 = 0.0001).
   */
  public pipLocation: number

  /**
   * The number of decimal places that should be used to display prices for this instrument. (e.g. a displayPrecision of 5 would result in a price of "1" being displayed as "1.00000")
   */
  public displayPrecision: number

  /**
   * The amount of decimal places that may be provided when specifying the number of units traded for this instrument.
   */
  public tradeUnitsPrecision: number

  /**
   * The smallest number of units allowed to be traded for this instrument.
   */
  public minimumTradeSize: DecimalNumber

  /**
   * The maximum trailing stop distance allowed for a trailing stop loss created for this instrument. Specified in price units.
   */
  public maximumTrailingStopDistance: DecimalNumber

  /**
   * The minimum trailing stop distance allowed for a trailing stop loss created for this instrument. Specified in price units.
   */
  public minimumTrailingStopDistance: DecimalNumber

  /**
   * The maximum position size allowed for this instrument. Specified in units.
   */
  public maximumPositionSize: DecimalNumber

  /**
   * The maximum units allowed for an Order placed for this instrument. Specified in units.
   */
  public maximumOrderUnits: DecimalNumber

  /**
   * The margin rate for this instrument.
   */
  public marginRate: DecimalNumber

  /**
   * The commission structure for this instrument.
   */
  public commission: InstrumentCommission

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = Instrument_Properties

    data = data || {}

    if (data['name'] !== undefined) {
      this.name = data['name']
    }

    if (data['type'] !== undefined) {
      this.type = data['type']
    }

    if (data['displayName'] !== undefined) {
      this.displayName = data['displayName']
    }

    if (data['pipLocation'] !== undefined) {
      this.pipLocation = data['pipLocation']
    }

    if (data['displayPrecision'] !== undefined) {
      this.displayPrecision = data['displayPrecision']
    }

    if (data['tradeUnitsPrecision'] !== undefined) {
      this.tradeUnitsPrecision = data['tradeUnitsPrecision']
    }

    if (data['minimumTradeSize'] !== undefined) {
      this.minimumTradeSize = data['minimumTradeSize']
    }

    if (data['maximumTrailingStopDistance'] !== undefined) {
      this.maximumTrailingStopDistance = data['maximumTrailingStopDistance']
    }

    if (data['minimumTrailingStopDistance'] !== undefined) {
      this.minimumTrailingStopDistance = data['minimumTrailingStopDistance']
    }

    if (data['maximumPositionSize'] !== undefined) {
      this.maximumPositionSize = data['maximumPositionSize']
    }

    if (data['maximumOrderUnits'] !== undefined) {
      this.maximumOrderUnits = data['maximumOrderUnits']
    }

    if (data['marginRate'] !== undefined) {
      this.marginRate = data['marginRate']
    }

    if (data['commission'] !== undefined) {
      this.commission = new InstrumentCommission(data['commission'])
    }
  }
}

export const InstrumentCommission_Properties = [
  new Property(
    'commission',
    'commission',
    "The commission amount (in the Account's home currency) charged per unitsTraded of the instrument",
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'unitsTraded',
    'unitsTraded',
    'The number of units traded that the commission amount is based on.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'minimumCommission',
    'minimumCommission',
    "The minimum commission amount (in the Account's home currency) that is charged when an Order is filled for this instrument.",
    'primitive',
    'primitives.DecimalNumber',
  ),
]

export class InstrumentCommission extends Definition {
  /**
   * The commission amount (in the Account's home currency) charged per unitsTraded of the instrument
   */
  public commission: DecimalNumber

  /**
   * The number of units traded that the commission amount is based on.
   */
  public unitsTraded: DecimalNumber

  /**
   * The minimum commission amount (in the Account's home currency) that is charged when an Order is filled for this instrument.
   */
  public minimumCommission: DecimalNumber

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = InstrumentCommission_Properties

    data = data || {}

    if (data['commission'] !== undefined) {
      this.commission = data['commission']
    }

    if (data['unitsTraded'] !== undefined) {
      this.unitsTraded = data['unitsTraded']
    }

    if (data['minimumCommission'] !== undefined) {
      this.minimumCommission = data['minimumCommission']
    }
  }
}

export const GuaranteedStopLossOrderLevelRestriction_Properties = [
  new Property(
    'volume',
    'volume',
    'Applies to Trades with a guaranteed Stop Loss Order attached for the specified Instrument. This is the total allowed Trade volume that can exist within the priceRange based on the trigger prices of the guaranteed Stop Loss Orders.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'priceRange',
    'priceRange',
    'The price range the volume applies to. This value is in price units.',
    'primitive',
    'primitives.DecimalNumber',
  ),
]

export class GuaranteedStopLossOrderLevelRestriction extends Definition {
  /**
   * Applies to Trades with a guaranteed Stop Loss Order attached for the specified Instrument. This is the total allowed Trade volume that can exist within the priceRange based on the trigger prices of the guaranteed Stop Loss Orders.
   */
  public volume: DecimalNumber

  /**
   * The price range the volume applies to. This value is in price units.
   */
  public priceRange: DecimalNumber

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = GuaranteedStopLossOrderLevelRestriction_Properties

    data = data || {}

    if (data['volume'] !== undefined) {
      this.volume = data['volume']
    }

    if (data['priceRange'] !== undefined) {
      this.priceRange = data['priceRange']
    }
  }
}

export class EntitySpec {
  public Instrument = Instrument
  public InstrumentCommission = InstrumentCommission
  public GuaranteedStopLossOrderLevelRestriction = GuaranteedStopLossOrderLevelRestriction

  constructor(public context: any) {}
}
