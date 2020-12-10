# OANDA v20 (Narative fork)

## Why

- Typescript friendly (WIP)
- Bug fixing

## Installation

```shell
yarn add @narative/oanda-v20
```

## Usage

```javascript
import * as oandaAPI from '@narative/oanda-v20'

const client = new oandaAPI.Rest('my-app-name', '1234567890qwfpgjluy1234567890', true) // user token on OANDA practice server
const result = await client.account.list()
console.log('OANDA result', result) // should show the data from GET /v3/accounts (https://developer.oanda.com/rest-live-v20/account-ep/)
```

## Publish

- update version in package.json
- `yarn build`
- `npm publish`
