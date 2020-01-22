declare module '@narative/oanda-v20/site' {

declare const MT4TransactionHeartbeat_base: typeof import('./base').Definition
export class MT4TransactionHeartbeat extends MT4TransactionHeartbeat_base {
  constructor(data: any)
  type: any
  time: any
}
export class EntitySpec {
  constructor(context: any)
  context: any
  MT4TransactionHeartbeat: typeof MT4TransactionHeartbeat
}
export {}
}