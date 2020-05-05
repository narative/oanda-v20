// import * as oanda from '../src'

import { parseAll as parseAllDefinitions } from './definitions'
import { parseAll as parseAllEndpoints } from './endpoints'

async function main() {
  // const client = new oanda.Rest('test', process.env.OANDA_TOKEN, true)
  // const accountIDs = await client.account.list()

  // if (accountIDs.accounts.length === 0) {
  //   console.log(`No accounts`)
  //   return
  // }

  // const accounts = await Promise.all(accountIDs.accounts.map((a) => client.account.summary(a.id)))
  // console.log(`Your list of accounts`)
  // accounts.forEach((a) => {
  //   console.log(
  //     `• ${a.account.id} balance=${a.account.balance} transactions=${a.lastTransactionID}`,
  //   )
  // })

  // const accountID = accountIDs.accounts[0].id
  // const trades = await client.trade.list(accountID, { state: ['ALL'], count: 10 } as any)
  // console.log(`Trades for ${accountID}`)
  // trades.trades.forEach((t) => {
  //   console.log(`• ${t.instrument} (${t.clientExtensions?.id})`)
  // })

  await parseAllDefinitions()
  await parseAllEndpoints()
}

main()
