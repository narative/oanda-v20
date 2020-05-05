import * as path from 'path'

import * as cheerio from 'cheerio'

import { Request } from './request'
import {
  parseComments,
  parseTypes,
  convertType,
  toModuleName,
  convertEnumName,
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

    self.file.appendFile(
      `${moduleNames
        .filter((m) => m !== this.moduleName)
        .map((m) => `import * as ${toModuleName(m)} from './${toModuleName(m)}'`)
        .join('\n')}\n`,
    )

    $('.endpoint_header').each(function () {
      const $this = $(this)
      const name = $this.find('.method').text()
      const description = $this.find('.definition').text()

      self.file.appendFile(`
/**
 * ${description} ${self.url}
 */
`)

      const type = $this.next().find('.parameter_table > tbody > tr:first-child > th')
      if (type.text() === 'Type') {
        const typeValue = convertType(type.next().text())
        self.file.appendFile(`export type ${name} = ${typeValue}\n`)
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

        const enumValue = `export enum ${name} {
${values
  .map(
    (v) => `  /**
   * ${v.description}
   */
  ${convertEnumName(v.value)} = '${v.value}',
`,
  )
  .join('\n')}}`
        self.file.appendFile(`${enumValue}\n`)
        return
      }

      const schema = $this.next().find('.json_schema').html()
      if (schema) {
        const result = parseTypes(parseComments(schema), self.moduleName)
        self.file.appendFile(`export interface ${name} ${result}`)
        return
      }

      const implementation = $this.next().find('p > a')
      if (implementation) {
        const implementations = []
        implementation.each(function () {
          implementations.push($(this).text())
        })
        self.file.appendFile(`export type ${name} = ${implementations.join(' | ')}\n`)
        return
      }

      self.file.appendFile(`UNKNOWN \n`)
    })
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
