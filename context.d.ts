declare module '@narative/oanda-v20/context' {
  export class Context {
    constructor(hostname: any, port: any, ssl: any, application: any)
    username: string
    hostname: any
    port: any
    headers: {
      'Content-Type': string
      'OANDA-Agent': string
    }
    token: string
    http: any
    account: import('./account').EntitySpec
    user: import('./user').EntitySpec
    position: import('./position').EntitySpec
    pricing: import('./pricing').EntitySpec
    transaction: import('./transaction').EntitySpec
    primitives: import('./primitives').EntitySpec
    trade: import('./trade').EntitySpec
    site: import('./site').EntitySpec
    pricing_common: import('./pricing_common').EntitySpec
    order: import('./order').EntitySpec
    instrument: import('./instrument').EntitySpec
    setToken(token: any): void
    request(method: any, path: any, body: any, streamChunkHandler: any, responseHandler: any): ClientRequest
  }
  export class Response {
    constructor(
      method: any,
      path: any,
      statusCode: any,
      statusMessage: any,
      contentType: any,
      rawBody: any,
    )
    method: any
    path: any
    statusCode: any
    statusMessage: any
    contentType: any
    rawBody: any
    body: any
    isSuccess(): any
    isRedirection(): any
    isClientError(): any
    isServerError(): any
    isError(): any
  }
}
