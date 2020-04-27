export declare class Property {
    name: string;
    displayName: string;
    description: string;
    typeClass: string;
    typeName: string;
    constructor(name: string, displayName: string, description: string, typeClass: string, typeName: string);
}
export declare class Field extends Property {
    value: any;
    constructor(property: Property, value: any);
}
export declare class Definition {
    protected _summaryFormat: string;
    protected _nameFormat: string;
    protected _properties: Property[];
    constructor();
    toJSON(key: any): {};
    name(): string;
    summary(): string;
    title(): string;
    toString(): string;
    fields(): any[];
}
