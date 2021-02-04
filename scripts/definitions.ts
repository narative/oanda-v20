import * as path from 'path'
import * as cheerio from 'cheerio'
import { Filewriter } from './helpers/file'
import {
  convertEnumName,
  convertType,
  parseComments,
  parseTypes,
  toModuleName,
} from './helpers/types'
import { Request } from './request'

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
    ), // private fileMain = new Filewriter( //   path.join(__dirname, `../src/${toModuleName(moduleName)}.ts`),
  ) // ),
  {
    this.file.clean()
  }

  public async parse() {
    const request = new Request()
    const body = await request.get(this.url)
    const $ = cheerio.load(body)
    await this.parseDefinitions($)
    await this.file.flush()
    // await this.fileMain.flush()
  }

  private async parseDefinitions($: CheerioStatic) {
    const self = this

    const missingImport = []
    const resultExport = []
    const resultTypes = []
    const resultEnums = []
    const resultUnknown = []
    const resultSchema = []
    const resultSchemaImport = []

    this.file.appendFile(
      `${moduleNames
        .map((m) => `import * as ${toModuleName(m)} from './${toModuleName(m)}'`)
        .join(`\n`)}\n`,
    )
    // this.fileMain.appendFile(
    //   `${moduleNames
    //     .map((m) => `import * as ${toModuleName(m)} from './definitions/${toModuleName(m)}'`)
    //     .join(`\n`)}\n`,
    // )

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
        resultSchemaImport.push(name)
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
        resultSchemaImport.push(name)
        return
      }

      // handle schema
      const schema = $this.next().find('.json_schema').html()
      if (schema) {
        const result = `export class ${name} ${parseTypes(parseComments(schema), self.moduleName)}`

        if (self.isMissing(name)) {
          missingImport.push(`${result}`)
          return
        }

        resultExport.push(name)
        resultSchema.push(result)
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

        resultSchemaImport.push(name)
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

    // this.fileMain.appendFile(
    //   `import { ${resultSchemaImport.join(', ')} } from './definitions/${toModuleName(
    //     this.moduleName,
    //     true,
    //   )}'\n\n${resultSchema.join('\n')}`,
    // )
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
      [
        'Tag',
        'FinancingDayOfWeek',
        'InstrumentFinancing',
        'ConversionFactor',
        'HomeConversionFactors',
      ].includes(name)
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
