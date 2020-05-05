/**
 * Parse comment # to /**
 */
export function parseComments(data: string) {
  return data
    .replace(/(?:&#x201C;|&#x201D;|&#x2019;)/g, `'`)
    .replace(
      /#\s*\n((?:\s*#[^\n]*\n)+)(\s*)#/g,
      (match, p1, space2) => `/**\n${p1.replace(/#\s/g, ' * ')}${space2} */`,
    )
}

/**
 * Parse line by line
 * instrument: <a href...>InstrumentName</>, required => instrument:
 */
export function parseTypes(data: string, moduleName?: string) {
  const result = data.replace(
    /(\S*)\s*:\s*\(([\S\s]*?)(,\srequired)?(,\sdeprecated)?(,\sdefault=\S+)?\),?/gm,
    (match, p1, p2, required, deprecated, defaultValue) => {
      return `${p1}${required ? '' : '?'}: ${convertType(p2, moduleName)}${
        defaultValue ? ` /* ${defaultValue.replace(/[,\s]*/, '')} */` : ''
      }\n`
    },
  )

  return result

  // .replace(
  //   /(\S+\??)\s*:\s*\(?([\s\S]*?)\)?,?\n/gm,
  //   (match, p1, p2) => `${p1}: ${convertType(p2, moduleName)}\n`,
  // )
}

export function convertType(type: string, moduleName?: string) {
  // check Array[...]
  if (type.startsWith('Array[')) {
    return type.replace(
      /Array\[([\s\S]*?)\]/,
      (match, p1) => `${convertSingleType(p1, moduleName)}[]`,
    )
  }

  if (type.startsWith('List of')) {
    return type.replace(
      /List of ([\s\S]*?)(\s*\(csv\))/,
      (match, p1, p2) => `${convertSingleType(p1, moduleName)}[]`,
    )
  }

  return convertSingleType(type, moduleName)
}

function convertSingleType(type: string, moduleName?: string) {
  // convert <a href="../primitives-df/ *DecimalNumber">DecimalNumber</a> => primitives.DecimalNumber
  if (type.startsWith('<a ')) {
    return type.replace(/<a href="..\/(\S*?)-df\/[\s\S]*?>(\S+?)<\/a>/, (match, p1, p2) => {
      if (moduleName && p1 === moduleName) {
        return `${p2}`
      }

      return `${toModuleName(p1)}.${p2}`
    })
  }

  switch (type) {
    case 'integer':
      return 'number'
    case 'string':
    default:
      return type
  }
}

export function toModuleName(name: string) {
  switch (name) {
    case 'pricing-common':
      return 'pricingCommon'
    default:
      return name
  }
}

export function convertEnumName(name: string) {
  if (name.indexOf('-')) {
    return `'${name}'`
  }

  return name
}
