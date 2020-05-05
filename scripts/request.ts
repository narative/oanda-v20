import * as http from 'https'

import { Cachable } from './cachable'

export class Request {
  constructor() {}

  @Cachable()
  public async get(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const req = http.request(url, (response) => {
        let responseBody = ''

        response.on('data', (d) => {
          responseBody += d
        })

        response.on('end', () => {
          resolve(responseBody)
        })
      })

      req.on('error', (err) => {
        reject(err)
      })

      req.end()
    })
  }
}
