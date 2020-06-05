import * as oanda from '../src'

import { parseAll as parseAllDefinitions } from './definitions'
import { parseAll as parseAllEndpoints } from './endpoints'

async function main() {
  // const client = new oanda.Rest('test', process.env.OANDA_TOKEN, true)
  // const accountIDs = await client.account.list({})

  // if (accountIDs.accounts.length === 0) {
  //   console.log(`No accounts`)
  //   return
  // }

  // const accounts = await Promise.all(
  //   accountIDs.accounts.map((a) => client.account.summary({ accountID: a.id })),
  // )
  // console.log(`Your list of accounts`)
  // accounts.forEach((a: any) => {
  //   console.log(
  //     `• ${a.account.id} balance=${a.account.balance} transactions=${a.lastTransactionID}`,
  //   )
  // })

  // const transactions = await client.transaction.range({
  //   accountID: `101-002-12706983-001`,
  //   query: { from: '1365', to: '1367' },
  // })

  // console.log(`Last transaction`)
  // transactions.transactions.forEach((t) => {
  //   const jsonObj: any = t.toJSON()
  //   console.log(
  //     `• ${t.id} ${jsonObj.type} ${
  //       jsonObj.type === 'ORDER_FILL' ? Object.keys(jsonObj.fullPrice) : ''
  //     }`,
  //   )
  // })

  await parseAllDefinitions()
  await parseAllEndpoints()
}

main()
