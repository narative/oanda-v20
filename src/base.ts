export class Property {
  public name: string
  public displayName: string
  public description: string
  public typeClass: string
  public typeName: string

  constructor(
    name: string,
    displayName: string,
    description: string,
    typeClass: string,
    typeName: string,
  ) {
    this.name = name
    this.displayName = displayName
    this.description = description
    this.typeClass = typeClass
    this.typeName = typeName
  }
}

export class Field extends Property {
  public value: any

  constructor(property: Property, value: any) {
    super(
      property.name,
      property.displayName,
      property.description,
      property.typeClass,
      property.typeName,
    )
    this.value = value
  }
}

export class Definition {
  protected _summaryFormat: string = ''
  protected _nameFormat: string = ''
  protected _properties: Property[] = []

  constructor() {}

  public toJSON() {
    return Object.entries(this)
      .filter(([k, v]) => !['_summaryFormat', '_nameFormat', '_properties'].includes(k))
      .reduce((acc, [k, v]) => {
        acc[k] = v
        return acc
      }, {})
  }

  public name() {
    let nameStr = this._nameFormat

    let re = /{([^}]+)}/g

    let matches = nameStr.match(re)

    for (let match of matches || []) {
      let key = match.slice(1, -1)

      let value = this[key] || match

      nameStr = nameStr.replace(match, value)
    }

    return nameStr
  }

  public summary() {
    let summaryStr = this._summaryFormat

    let re = /{([^}]+)}/g

    let matches = summaryStr.match(re)

    console.log('AAAAA', matches)

    for (let match of matches || []) {
      console.log('BBBBBBB', match)
      let key = match.slice(1, -1)

      let value = this[key] || match

      summaryStr = summaryStr.replace(match, value)
    }

    return summaryStr
  }

  public title() {
    let nameStr = this.name()
    let summaryStr = this.summary()

    let titleStr = nameStr

    if (nameStr.length > 0 && summaryStr.length > 0) {
      titleStr += ': '
    }

    titleStr += summaryStr

    return titleStr
  }

  public toString() {
    let s = this.title()

    this._properties.forEach((prop) => {
      let value = this[prop.name]

      if (value === undefined) {
        return
      }

      s += '\n' + prop.displayName + ': '

      if (value instanceof Array) {
        s += '[' + value.length + ']'
      } else {
        s += value
      }
    })

    return s
  }

  public fields() {
    let ret = []

    this._properties.forEach((prop) => {
      let value = this[prop.name]

      if (typeof value != 'undefined') {
        ret.push(new Field(prop, value))
      }
    })

    return ret
  }
}
