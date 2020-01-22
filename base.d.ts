declare module '@oanda/v20/base' {

export class Definition {
  _summaryFormat: string
  _nameFormat: string
  _properties: Property[]
  toJSON(key: string): any
  name(): string
  summary(): string
  title(): string
  toString(): string
  fields(): Field[]
}
export class Property {
  constructor(
    name: string,
    displayName: string,
    description: string,
    typeClass: string,
    typeName: string,
  )
  name: string
  displayName: string
  description: string
  typeClass: string
  typeName: string
}
export class Field extends Property {
  constructor(property: string, value: string)
  value: any
}

}