import * as fs from 'fs'
import * as crypto from 'crypto'
import * as path from 'path'

/**
 * Decorator for Prometheus counters
 */
export const Cachable = () => (
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor,
) => {
  const method = descriptor.value

  descriptor.value = async function (...args: any[]) {
    const key = args.reduce((acc, arg) => `${acc}-${arg.toString()}`, '')
    const md5sum = crypto.createHash('md5')
    const file = md5sum.update(key).digest('hex')
    const cachePath = path.join(__dirname, `../tmp/cache/${file}`)
    const exists = await new Promise((resolve) =>
      fs.access(cachePath, fs.constants.F_OK, (e) => resolve(!e)),
    )
    if (exists) {
      return (await fs.promises.readFile(cachePath)).toString()
    }

    const res = await method.apply(this, args)

    await fs.promises.writeFile(cachePath, res)

    return res
  }
}
