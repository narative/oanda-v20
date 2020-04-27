import { Definition, Property } from './base';
export declare const UserInfo_Properties: Property[];
export declare class UserInfo extends Definition {
    /**
     * The user-provided username.
     */
    username: string;
    /**
     * The user's OANDA-assigned user ID.
     */
    userID: number;
    /**
     * The country that the user is based in.
     */
    country: string;
    /**
     * The user's email address.
     */
    emailAddress: string;
    constructor(data: any);
}
export declare const UserInfoExternal_Properties: Property[];
export declare class UserInfoExternal extends Definition {
    /**
     * The user's OANDA-assigned user ID.
     */
    userID: number;
    /**
     * The country that the user is based in.
     */
    country: string;
    /**
     * Flag indicating if the the user's Accounts adhere to FIFO execution rules.
     */
    FIFO: boolean;
    constructor(data: any);
}
export declare class EntitySpec {
    context: any;
    UserInfo: typeof UserInfo;
    UserInfoExternal: typeof UserInfoExternal;
    constructor(context: any);
    getInfo(userSpecifier: any, responseHandler: any): any;
    getExternalInfo(userSpecifier: any, responseHandler: any): any;
}
