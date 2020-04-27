import { Definition, Property, Field } from './base'
import * as primitives from './primitives'

export const MT4TransactionHeartbeat_Properties = [
  new Property('type', 'type', 'The string "HEARTBEAT"', 'primitive', 'string'),
  new Property(
    'time',
    'time',
    'The date/time when the TransactionHeartbeat was created.',
    'primitive',
    'primitives.DateTime',
  ),
]

export class MT4TransactionHeartbeat extends Definition {
  /**
   * The string "HEARTBEAT"
   */
  public type: string

  /**
   * The date/time when the TransactionHeartbeat was created.
   */
  public time: primitives.DateTime

  constructor(data) {
    super()

    this._summaryFormat = 'Transaction Heartbeat {time}'

    this._nameFormat = ''

    this._properties = MT4TransactionHeartbeat_Properties

    data = data || {}

    if (data['type'] !== undefined) {
      this.type = data['type']
    } else {
      this.type = 'HEARTBEAT'
    }

    if (data['time'] !== undefined) {
      this.time = data['time']
    }
  }
}

export class EntitySpec {
  public MT4TransactionHeartbeat = MT4TransactionHeartbeat

  constructor(public context: any) {}
}
