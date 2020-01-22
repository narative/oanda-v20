declare module '@narative/oanda-v20/position' {

declare const Position_base: typeof import('./base').Definition
export class Position extends Position_base {
  constructor(data: any)
  instrument: any
  pl: any
  unrealizedPL: any
  marginUsed: any
  resettablePL: any
  financing: any
  commission: any
  guaranteedExecutionFees: any
  long: PositionSide
  short: PositionSide
}
declare const PositionSide_base: typeof import('./base').Definition
export class PositionSide extends PositionSide_base {
  constructor(data: any)
  units: any
  averagePrice: any
  tradeIDs: any
  pl: any
  unrealizedPL: any
  resettablePL: any
  financing: any
  guaranteedExecutionFees: any
}
declare const CalculatedPositionState_base: typeof import('./base').Definition
export class CalculatedPositionState extends CalculatedPositionState_base {
  constructor(data: any)
  instrument: any
  netUnrealizedPL: any
  longUnrealizedPL: any
  shortUnrealizedPL: any
  marginUsed: any
}
export class EntitySpec {
  constructor(context: any)
  context: any
  Position: typeof Position
  PositionSide: typeof PositionSide
  CalculatedPositionState: typeof CalculatedPositionState
  list(accountID: any, responseHandler: any): void
  listOpen(accountID: any, responseHandler: any): void
  get(accountID: any, instrument: any, responseHandler: any): void
  close(accountID: any, instrument: any, bodyParams: any, responseHandler: any): void
}
export {}
}