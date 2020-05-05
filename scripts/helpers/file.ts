import * as fs from 'fs'

export class Filewriter {
  constructor(private filepath: string, private buffer: string[] = []) {}

  public async clean() {
    await fs.promises.writeFile(this.filepath, '')
  }

  public appendFile(data: string) {
    this.buffer.push(data)
  }

  public async flush() {
    await fs.promises.writeFile(this.filepath, this.buffer.join(''))
  }
}
