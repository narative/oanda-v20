import * as path from 'path'

import * as cheerio from 'cheerio'

import { Request } from './request'
import {
  convertType,
  toModuleName,
  convertEnumName,
  parseTypes,
  parseComments,
} from './helpers/types'
import { Filewriter } from './helpers/file'

export const moduleNames = [
  'account',
  'instrument',
  'order',
  'trade',
  'position',
  'transaction',
  'pricing',
  'pricing-common',
  'primitives',
]

class Parser {
  constructor(
    private moduleName: string,
    private url = `https://developer.oanda.com/rest-live-v20/${moduleName}-df/`,
    private file = new Filewriter(
      path.join(__dirname, `../src/definitions/${toModuleName(moduleName)}.ts`),
    ),
  ) {
    this.file.clean()
  }

  public async parse() {
    const request = new Request()
    const body = await request.get(this.url)
    const $ = cheerio.load(body)
    await this.parseDefinitions($)
    await this.file.flush()
  }

  private async parseDefinitions($: CheerioStatic) {
    const self = this

    const missingImport = []
    const resultExport = []
    const resultTypes = []
    const resultEnums = []
    const resultUnknown = []

    this.file.appendFile(
      `${moduleNames
        .map((m) => `import * as ${toModuleName(m)} from './${toModuleName(m)}'`)
        .join(`\n`)}\n`,
    )

    $('.endpoint_header').each(function () {
      const $this = $(this)
      const name = $this.find('.method').text()
      const description = $this.find('.definition').text()

      const type = $this.next().find('.parameter_table > tbody > tr:first-child > th')
      if (type.text() === 'Type') {
        const typeValue = convertType(type.next().text())
        resultTypes.push(`/**
 * ${description} ${self.url}
 */
export type ${name} = ${typeValue}`)
        return
      }

      const value = $this.next().find('.parameter_table > thead > tr:first-child > th:first-child')
      if (value.text() === 'Value') {
        const values: { value: string; description: string }[] = []
        value
          .parent()
          .parent()
          .parent()
          .find('tbody > tr')
          .each(function (i, e) {
            const first = $(e).children().first()
            const value = first.text()
            const description = first.next().text()
            values.push({ value, description })
          })

        // handle enums
        const enumValue = `/**
 * ${description} ${self.url}
 */
export enum ${name} {
${values
  .map(
    (v) => `  /**
   * ${v.description}
   */
  ${convertEnumName(v.value)} = '${v.value}',
`,
  )
  .join('\n')}}`

        // enum description
        const enumDescription = `export const ${name}Description = {
${values.map((v) => `  ${convertEnumName(v.value)}: '${v.description}',`).join('\n')}\n}`

        resultEnums.push(`${enumValue}\n\n${enumDescription}`)
        return
      }

      // handle schema
      const schema = $this.next().find('.json_schema').html()
      if (schema) {
        if (self.isMissing(name)) {
          const result = parseTypes(parseComments(schema), self.moduleName)
          missingImport.push(`export class ${name} ${result}`)
          return
        }

        resultExport.push(name)
        return
      }

      // handle implementations
      const implementation = $this.next().find('p > a')
      if (implementation) {
        const implementations = []
        implementation.each(function () {
          const impl = $(this).text()
          implementations.push(impl)
        })
        resultTypes.push(`/**
 * ${description} ${self.url}
 */
export type ${name} = ${implementations.join(' | ')}`)
        return
      }

      resultUnknown.push(`/**
 * ${description} ${self.url}
 */
UNKNOWN`)
    })

    this.file.appendFile(`import { ${resultExport.join(', ')} } from '../${toModuleName(
      this.moduleName,
      true,
    )}'${resultUnknown.length > 0 ? `${resultUnknown.join('\n\n')}\n\n` : ''}
export { ${resultExport.join(', ')} } from '../${toModuleName(this.moduleName, true)}'${
      resultUnknown.length > 0 ? `${resultUnknown.join('\n\n')}\n\n` : ''
    }

${resultTypes.join('\n\n')}

${resultEnums.join('\n\n')}

${missingImport.join('\n\n')}`)
  }

  private isMissing(name: string) {
    if (this.moduleName === 'account' && ['AccumulatedAccountState'].includes(name)) {
      return true
    }

    if (
      this.moduleName === 'instrument' &&
      [
        'CandlestickResponse',
        'RawMarketPriceLevel',
        'RawMarketPriceDepthOfMarket',
        'PriceAdjustment',
        'RawMarketPrice',
      ].includes(name)
    ) {
      return true
    }

    if (
      this.moduleName === 'primitives' &&
      ['Tag', 'FinancingDayOfWeek', 'InstrumentFinancing'].includes(name)
    ) {
      return true
    }

    if (
      this.moduleName === 'transaction' &&
      ['DividendAdjustmentTransaction', 'OpenTradeDividendAdjustment'].includes(name)
    ) {
      return true
    }

    return false
  }
}

export async function parseAll() {
  await Promise.all(
    moduleNames.map(async (moduleName) => {
      const request = new Parser(moduleName)
      await request.parse()
    }),
  )
}
