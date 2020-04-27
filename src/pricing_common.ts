import { Definition, Property, Field } from './base'
import * as primitives from './primitives'

export const PriceBucket_Properties = [
  new Property(
    'price',
    'Price',
    'The Price offered by the PriceBucket',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'liquidity',
    'Liquidity',
    'The amount of liquidity offered by the PriceBucket',
    'primitive',
    'integer',
  ),
]

export class PriceBucket extends Definition {
  /**
   * The Price offered by the PriceBucket
   */
  public price: primitives.PriceValue

  /**
   * The amount of liquidity offered by the PriceBucket
   */
  public liquidity: number

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = PriceBucket_Properties

    data = data || {}

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['liquidity'] !== undefined) {
      this.liquidity = data['liquidity']
    }
  }
}

export const Price_Properties = [
  new Property(
    'instrument',
    'Instrument',
    "The Price's Instrument.",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'tradeable',
    'Is Tradeable',
    'Flag indicating if the Price is tradeable or not',
    'primitive',
    'boolean',
  ),
  new Property(
    'timestamp',
    'Timestamp',
    'The date/time when the Price was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'baseBid',
    'Base Bid',
    'The base bid price as calculated by pricing.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'baseAsk',
    'Base Ask',
    'The base ask price as calculated by pricing.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'bids',
    'Bids',
    "The list of prices and liquidity available on the Instrument's bid side. It is possible for this list to be empty if there is no bid liquidity currently available for the Instrument in the Account.",
    'array_object',
    'PriceBucket',
  ),
  new Property(
    'asks',
    'Asks',
    "The list of prices and liquidity available on the Instrument's ask side. It is possible for this list to be empty if there is no ask liquidity currently available for the Instrument in the Account.",
    'array_object',
    'PriceBucket',
  ),
  new Property(
    'closeoutBid',
    'Closeout Bid',
    'The closeout bid price. This price is used when a bid is required to closeout a Position (margin closeout or manual) yet there is no bid liquidity. The closeout bid is never used to open a new position.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'closeoutAsk',
    'Closeout Ask',
    'The closeout ask price. This price is used when an ask is required to closeout a Position (margin closeout or manual) yet there is no ask liquidity. The closeout ask is never used to open a new position.',
    'primitive',
    'pricing_common.PriceValue',
  ),
]

export class Price extends Definition {
  /**
   * The Price's Instrument.
   */
  public instrument: primitives.InstrumentName

  /**
   * Flag indicating if the Price is tradeable or not
   */
  public tradeable: boolean

  /**
   * The date/time when the Price was created.
   */
  public timestamp: primitives.DateTime

  /**
   * The base bid price as calculated by pricing.
   */
  public baseBid: primitives.PriceValue

  /**
   * The base ask price as calculated by pricing.
   */
  public baseAsk: primitives.PriceValue

  /**
   * The list of prices and liquidity available on the Instrument's bid side. It is possible for this list to be empty if there is no bid liquidity currently available for the Instrument in the Account.
   */
  public bids: PriceBucket[]

  /**
   * The list of prices and liquidity available on the Instrument's ask side. It is possible for this list to be empty if there is no ask liquidity currently available for the Instrument in the Account.
   */
  public asks: PriceBucket[]

  /**
   * The closeout bid price. This price is used when a bid is required to closeout a Position (margin closeout or manual) yet there is no bid liquidity. The closeout bid is never used to open a new position.
   */
  public closeoutBid: primitives.PriceValue

  /**
   * The closeout ask price. This price is used when an ask is required to closeout a Position (margin closeout or manual) yet there is no ask liquidity. The closeout ask is never used to open a new position.
   */
  public closeoutAsk: primitives.PriceValue

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = Price_Properties

    data = data || {}

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['tradeable'] !== undefined) {
      this.tradeable = data['tradeable']
    }

    if (data['timestamp'] !== undefined) {
      this.timestamp = data['timestamp']
    }

    if (data['baseBid'] !== undefined) {
      this.baseBid = data['baseBid']
    }

    if (data['baseAsk'] !== undefined) {
      this.baseAsk = data['baseAsk']
    }

    if (data['bids'] !== undefined) {
      this.bids = data['bids'].map((x) => new PriceBucket(x))
    }

    if (data['asks'] !== undefined) {
      this.asks = data['asks'].map((x) => new PriceBucket(x))
    }

    if (data['closeoutBid'] !== undefined) {
      this.closeoutBid = data['closeoutBid']
    }

    if (data['closeoutAsk'] !== undefined) {
      this.closeoutAsk = data['closeoutAsk']
    }
  }
}

export class EntitySpec {
  public PriceBucket = PriceBucket
  public Price = Price

  constructor(public context: any) {}
}
