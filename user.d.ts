declare module '@narative/oanda-v20/user' {
  declare const UserInfo_base: typeof import('./base').Definition
  export class UserInfo extends UserInfo_base {
    constructor(data: any)
    username: any
    userID: any
    country: any
    emailAddress: any
  }
  declare const UserInfoExternal_base: typeof import('./base').Definition
  export class UserInfoExternal extends UserInfoExternal_base {
    constructor(data: any)
    userID: any
    country: any
    FIFO: any
  }
  export class EntitySpec {
    constructor(context: any)
    context: any
    UserInfo: typeof UserInfo
    UserInfoExternal: typeof UserInfoExternal
    getInfo(userSpecifier: any, responseHandler: any): void
    getExternalInfo(userSpecifier: any, responseHandler: any): void
  }
  export {}
}
