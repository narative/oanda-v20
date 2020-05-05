import { Definition, Property, Field } from './base'

import * as pricing_common from './pricing_common'
import * as primitives from './primitives'

export const Candlestick_Properties = [
  new Property(
    'time',
    'time',
    'The start time of the candlestick',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'bid',
    'bid',
    'The candlestick data based on bids. Only provided if bid-based candles were requested.',
    'object',
    'instrument.CandlestickData',
  ),
  new Property(
    'ask',
    'ask',
    'The candlestick data based on asks. Only provided if ask-based candles were requested.',
    'object',
    'instrument.CandlestickData',
  ),
  new Property(
    'mid',
    'mid',
    'The candlestick data based on midpoints. Only provided if midpoint-based candles were requested.',
    'object',
    'instrument.CandlestickData',
  ),
  new Property(
    'volume',
    'volume',
    'The number of prices created during the time-range represented by the candlestick.',
    'primitive',
    'integer',
  ),
  new Property(
    'complete',
    'complete',
    'A flag indicating if the candlestick is complete. A complete candlestick is one whose ending time is not in the future.',
    'primitive',
    'boolean',
  ),
]

export class Candlestick extends Definition {
  /**
   * The start time of the candlestick
   */
  public time: primitives.DateTime

  /**
   * The candlestick data based on bids. Only provided if bid-based candles were requested.
   */
  public bid: CandlestickData

  /**
   * The candlestick data based on asks. Only provided if ask-based candles were requested.
   */
  public ask: CandlestickData

  /**
   * The candlestick data based on midpoints. Only provided if midpoint-based candles were requested.
   */
  public mid: CandlestickData

  /**
   * The number of prices created during the time-range represented by the candlestick.
   */
  public volume: number

  /**
   * A flag indicating if the candlestick is complete. A complete candlestick is one whose ending time is not in the future.
   */
  public complete: boolean

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = Candlestick_Properties

    data = data || {}

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['bid'] !== undefined) {
      this.bid = new CandlestickData(data['bid'])
    }

    if (data['ask'] !== undefined) {
      this.ask = new CandlestickData(data['ask'])
    }

    if (data['mid'] !== undefined) {
      this.mid = new CandlestickData(data['mid'])
    }

    if (data['volume'] !== undefined) {
      this.volume = data['volume']
    }

    if (data['complete'] !== undefined) {
      this.complete = data['complete']
    }
  }
}

export const CandlestickData_Properties = [
  new Property(
    'o',
    'o',
    'The first (open) price in the time-range represented by the candlestick.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'h',
    'h',
    'The highest price in the time-range represented by the candlestick.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'l',
    'l',
    'The lowest price in the time-range represented by the candlestick.',
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'c',
    'c',
    'The last (closing) price in the time-range represented by the candlestick.',
    'primitive',
    'pricing_common.PriceValue',
  ),
]

export class CandlestickData extends Definition {
  /**
   * The first (open) price in the time-range represented by the candlestick.
   */
  public o: primitives.PriceValue

  /**
   * The highest price in the time-range represented by the candlestick.
   */
  public h: primitives.PriceValue

  /**
   * The lowest price in the time-range represented by the candlestick.
   */
  public l: primitives.PriceValue

  /**
   * The last (closing) price in the time-range represented by the candlestick.
   */
  public c: primitives.PriceValue

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = CandlestickData_Properties

    data = data || {}

    if (data['o'] !== undefined) {
      this.o = data['o']
    }

    if (data['h'] !== undefined) {
      this.h = data['h']
    }

    if (data['l'] !== undefined) {
      this.l = data['l']
    }

    if (data['c'] !== undefined) {
      this.c = data['c']
    }
  }
}

export const OrderBook_Properties = [
  new Property(
    'instrument',
    'instrument',
    "The order book's instrument",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'time',
    'time',
    'The time when the order book snapshot was created.',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'price',
    'price',
    "The price (midpoint) for the order book's instrument at the time of the order book snapshot",
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'bucketWidth',
    'bucketWidth',
    "The price width for each bucket. Each bucket covers the price range from the bucket's price to the bucket's price + bucketWidth.",
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'buckets',
    'buckets',
    'The partitioned order book, divided into buckets using a default bucket width. These buckets are only provided for price ranges which actually contain order or position data.',
    'array_object',
    'OrderBookBucket',
  ),
]

export class OrderBook extends Definition {
  /**
   * The order book's instrument
   */
  public instrument: primitives.InstrumentName

  /**
   * The time when the order book snapshot was created.
   */
  public time: primitives.DateTime

  /**
   * The price (midpoint) for the order book's instrument at the time of the order book snapshot
   */
  public price: primitives.PriceValue

  /**
   * The price width for each bucket. Each bucket covers the price range from the bucket's price to the bucket's price + bucketWidth.
   */
  public bucketWidth: primitives.PriceValue

  /**
   * The partitioned order book, divided into buckets using a default bucket width. These buckets are only provided for price ranges which actually contain order or position data.
   */
  public buckets: OrderBookBucket[]

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = OrderBook_Properties

    data = data || {}

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['bucketWidth'] !== undefined) {
      this.bucketWidth = data['bucketWidth']
    }

    if (data['buckets'] !== undefined) {
      this.buckets = data['buckets'].map((x) => new OrderBookBucket(x))
    }
  }
}

export const OrderBookBucket_Properties = [
  new Property(
    'price',
    'price',
    "The lowest price (inclusive) covered by the bucket. The bucket covers the price range from the price to price + the order book's bucketWidth.",
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'longCountPercent',
    'longCountPercent',
    'The percentage of the total number of orders represented by the long orders found in this bucket.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'shortCountPercent',
    'shortCountPercent',
    'The percentage of the total number of orders represented by the short orders found in this bucket.',
    'primitive',
    'primitives.DecimalNumber',
  ),
]

export class OrderBookBucket extends Definition {
  /**
   * The lowest price (inclusive) covered by the bucket. The bucket covers the price range from the price to price + the order book's bucketWidth.
   */
  public price: primitives.PriceValue

  /**
   * The percentage of the total number of orders represented by the long orders found in this bucket.
   */
  public longCountPercent: primitives.DecimalNumber

  /**
   * The percentage of the total number of orders represented by the short orders found in this bucket.
   */
  public shortCountPercent: primitives.DecimalNumber

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = OrderBookBucket_Properties

    data = data || {}

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['longCountPercent'] !== undefined) {
      this.longCountPercent = data['longCountPercent']
    }

    if (data['shortCountPercent'] !== undefined) {
      this.shortCountPercent = data['shortCountPercent']
    }
  }
}

export const PositionBook_Properties = [
  new Property(
    'instrument',
    'instrument',
    "The position book's instrument",
    'primitive',
    'primitives.InstrumentName',
  ),
  new Property(
    'time',
    'time',
    'The time when the position book snapshot was created',
    'primitive',
    'primitives.DateTime',
  ),
  new Property(
    'price',
    'price',
    "The price (midpoint) for the position book's instrument at the time of the position book snapshot",
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'bucketWidth',
    'bucketWidth',
    "The price width for each bucket. Each bucket covers the price range from the bucket's price to the bucket's price + bucketWidth.",
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'buckets',
    'buckets',
    'The partitioned position book, divided into buckets using a default bucket width. These buckets are only provided for price ranges which actually contain order or position data.',
    'array_object',
    'PositionBookBucket',
  ),
]

export class PositionBook extends Definition {
  /**
   * The position book's instrument
   */
  public instrument: primitives.InstrumentName

  /**
   * The time when the position book snapshot was created
   */
  public time: primitives.DateTime

  /**
   * The price (midpoint) for the position book's instrument at the time of the position book snapshot
   */
  public price: primitives.PriceValue

  /**
   * The price width for each bucket. Each bucket covers the price range from the bucket's price to the bucket's price + bucketWidth.
   */
  public bucketWidth: primitives.PriceValue

  /**
   * The partitioned position book, divided into buckets using a default bucket width. These buckets are only provided for price ranges which actually contain order or position data.
   */
  public buckets: PositionBookBucket[]

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = PositionBook_Properties

    data = data || {}

    if (data['instrument'] !== undefined) {
      this.instrument = data['instrument']
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['bucketWidth'] !== undefined) {
      this.bucketWidth = data['bucketWidth']
    }

    if (data['buckets'] !== undefined) {
      this.buckets = data['buckets'].map((x) => new PositionBookBucket(x))
    }
  }
}

export const PositionBookBucket_Properties = [
  new Property(
    'price',
    'price',
    "The lowest price (inclusive) covered by the bucket. The bucket covers the price range from the price to price + the position book's bucketWidth.",
    'primitive',
    'pricing_common.PriceValue',
  ),
  new Property(
    'longCountPercent',
    'longCountPercent',
    'The percentage of the total number of positions represented by the long positions found in this bucket.',
    'primitive',
    'primitives.DecimalNumber',
  ),
  new Property(
    'shortCountPercent',
    'shortCountPercent',
    'The percentage of the total number of positions represented by the short positions found in this bucket.',
    'primitive',
    'primitives.DecimalNumber',
  ),
]

export class PositionBookBucket extends Definition {
  /**
   * The lowest price (inclusive) covered by the bucket. The bucket covers the price range from the price to price + the position book's bucketWidth.
   */
  public price: primitives.PriceValue

  /**
   * The percentage of the total number of positions represented by the long positions found in this bucket.
   */
  public longCountPercent: primitives.DecimalNumber

  /**
   * The percentage of the total number of positions represented by the short positions found in this bucket.
   */
  public shortCountPercent: primitives.DecimalNumber

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = PositionBookBucket_Properties

    data = data || {}

    if (data['price'] !== undefined) {
      this.price = data['price']
    }

    if (data['longCountPercent'] !== undefined) {
      this.longCountPercent = data['longCountPercent']
    }

    if (data['shortCountPercent'] !== undefined) {
      this.shortCountPercent = data['shortCountPercent']
    }
  }
}

export class EntitySpec {
  public Candlestick = Candlestick
  public CandlestickData = CandlestickData
  public OrderBook = OrderBook
  public OrderBookBucket = OrderBookBucket
  public PositionBook = PositionBook
  public PositionBookBucket = PositionBookBucket

  constructor(public context: any) {}

  candles(instrument, queryParams, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/instruments/{instrument}/candles'

    queryParams = queryParams || {}

    path = path.replace('{' + 'instrument' + '}', instrument)

    path = path + '?'
    if (typeof queryParams['price'] !== 'undefined') {
      path = path + 'price=' + queryParams['price'] + '&'
    }
    if (typeof queryParams['granularity'] !== 'undefined') {
      path = path + 'granularity=' + queryParams['granularity'] + '&'
    }
    if (typeof queryParams['count'] !== 'undefined') {
      path = path + 'count=' + queryParams['count'] + '&'
    }
    if (typeof queryParams['from'] !== 'undefined') {
      path = path + 'from=' + queryParams['from'] + '&'
    }
    if (typeof queryParams['to'] !== 'undefined') {
      path = path + 'to=' + queryParams['to'] + '&'
    }
    if (typeof queryParams['smooth'] !== 'undefined') {
      path = path + 'smooth=' + queryParams['smooth'] + '&'
    }
    if (typeof queryParams['includeFirst'] !== 'undefined') {
      path = path + 'includeFirst=' + queryParams['includeFirst'] + '&'
    }
    if (typeof queryParams['dailyAlignment'] !== 'undefined') {
      path = path + 'dailyAlignment=' + queryParams['dailyAlignment'] + '&'
    }
    if (typeof queryParams['alignmentTimezone'] !== 'undefined') {
      path = path + 'alignmentTimezone=' + queryParams['alignmentTimezone'] + '&'
    }
    if (typeof queryParams['weeklyAlignment'] !== 'undefined') {
      path = path + 'weeklyAlignment=' + queryParams['weeklyAlignment'] + '&'
    }

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['instrument'] !== undefined) {
            response.body.instrument = msg['instrument']
          }

          if (msg['granularity'] !== undefined) {
            response.body.granularity = msg['granularity']
          }

          if (msg['candles'] !== undefined) {
            response.body.candles = msg['candles'].map((x) => new Candlestick(x))
          }
        } else if (response.statusCode == 400) {
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('GET', path, body, undefined, handleResponse)
  }

  price(instrument, queryParams, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/instruments/{instrument}/price'

    queryParams = queryParams || {}

    path = path.replace('{' + 'instrument' + '}', instrument)

    path = path + '?'
    if (typeof queryParams['time'] !== 'undefined') {
      path = path + 'time=' + queryParams['time'] + '&'
    }

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['price'] !== undefined) {
            response.body.price = new pricing_common.Price(msg['price'])
          }
        } else if (response.statusCode == 400) {
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('GET', path, body, undefined, handleResponse)
  }

  prices(instrument, queryParams, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/instruments/{instrument}/price/range'

    queryParams = queryParams || {}

    path = path.replace('{' + 'instrument' + '}', instrument)

    path = path + '?'
    if (typeof queryParams['from'] !== 'undefined') {
      path = path + 'from=' + queryParams['from'] + '&'
    }
    if (typeof queryParams['to'] !== 'undefined') {
      path = path + 'to=' + queryParams['to'] + '&'
    }

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['prices'] !== undefined) {
            response.body.prices = msg['prices'].map((x) => new pricing_common.Price(x))
          }
        } else if (response.statusCode == 400) {
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('GET', path, body, undefined, handleResponse)
  }

  orderBook(instrument, queryParams, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/instruments/{instrument}/orderBook'

    queryParams = queryParams || {}

    path = path.replace('{' + 'instrument' + '}', instrument)

    path = path + '?'
    if (typeof queryParams['time'] !== 'undefined') {
      path = path + 'time=' + queryParams['time'] + '&'
    }

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['orderBook'] !== undefined) {
            response.body.orderBook = new OrderBook(msg['orderBook'])
          }
        } else if (response.statusCode == 400) {
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('GET', path, body, undefined, handleResponse)
  }

  positionBook(instrument, queryParams, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/instruments/{instrument}/positionBook'

    queryParams = queryParams || {}

    path = path.replace('{' + 'instrument' + '}', instrument)

    path = path + '?'
    if (typeof queryParams['time'] !== 'undefined') {
      path = path + 'time=' + queryParams['time'] + '&'
    }

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['positionBook'] !== undefined) {
            response.body.positionBook = new PositionBook(msg['positionBook'])
          }
        } else if (response.statusCode == 400) {
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 404) {
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        else {
          if (msg['errorCode'] !== undefined) {
            response.body.errorCode = msg['errorCode']
          }

          if (msg['errorMessage'] !== undefined) {
            response.body.errorMessage = msg['errorMessage']
          }
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('GET', path, body, undefined, handleResponse)
  }
}
