import { Definition, Field, Property } from './base'

export const UserInfo_Properties = [
  new Property('username', 'username', 'The user-provided username.', 'primitive', 'string'),
  new Property('userID', 'userID', "The user's OANDA-assigned user ID.", 'primitive', 'integer'),
  new Property(
    'country',
    'country',
    'The country that the user is based in.',
    'primitive',
    'string',
  ),
  new Property('emailAddress', 'emailAddress', "The user's email address.", 'primitive', 'string'),
]

export class UserInfo extends Definition {
  /**
   * The user-provided username.
   */
  public username: string

  /**
   * The user's OANDA-assigned user ID.
   */
  public userID: number

  /**
   * The country that the user is based in.
   */
  public country: string

  /**
   * The user's email address.
   */
  public emailAddress: string

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = UserInfo_Properties

    data = data || {}

    if (data['username'] !== undefined) {
      this.username = data['username']
    }

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['country'] !== undefined) {
      this.country = data['country']
    }

    if (data['emailAddress'] !== undefined) {
      this.emailAddress = data['emailAddress']
    }
  }
}

export const UserInfoExternal_Properties = [
  new Property('userID', 'userID', "The user's OANDA-assigned user ID.", 'primitive', 'integer'),
  new Property(
    'country',
    'country',
    'The country that the user is based in.',
    'primitive',
    'string',
  ),
  new Property(
    'FIFO',
    'FIFO',
    "Flag indicating if the the user's Accounts adhere to FIFO execution rules.",
    'primitive',
    'boolean',
  ),
]

export class UserInfoExternal extends Definition {
  /**
   * The user's OANDA-assigned user ID.
   */
  public userID: number

  /**
   * The country that the user is based in.
   */
  public country: string

  /**
   * Flag indicating if the the user's Accounts adhere to FIFO execution rules.
   */
  public FIFO: boolean

  constructor(data) {
    super()

    this._summaryFormat = ''

    this._nameFormat = ''

    this._properties = UserInfoExternal_Properties

    data = data || {}

    if (data['userID'] !== undefined) {
      this.userID = data['userID']
    }

    if (data['country'] !== undefined) {
      this.country = data['country']
    }

    if (data['FIFO'] !== undefined) {
      this.FIFO = data['FIFO']
    }
  }
}

export class EntitySpec {
  public UserInfo = UserInfo
  public UserInfoExternal = UserInfoExternal

  constructor(public context: any) {}

  getInfo(userSpecifier, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/users/{userSpecifier}'

    path = path.replace('{' + 'userSpecifier' + '}', userSpecifier)

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['userInfo'] !== undefined) {
            response.body.userInfo = new UserInfo(msg['userInfo'])
          }
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 403) {
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        if (msg['errorCode'] !== undefined) {
          response.body.errorCode = msg['errorCode']
        }

        if (msg['errorMessage'] !== undefined) {
          response.body.errorMessage = msg['errorMessage']
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('GET', path, body, undefined, handleResponse)
  }

  getExternalInfo(userSpecifier, responseHandler) {
    if (!responseHandler) {
      throw 'No responseHandler provided for API call'
    }

    let path = '/v3/users/{userSpecifier}/externalInfo'

    path = path.replace('{' + 'userSpecifier' + '}', userSpecifier)

    let body = {}

    let handleResponse = (err, response) => {
      if (err) {
        responseHandler(err, null)
        return
      }
      if (response.contentType.startsWith('application/json')) {
        let msg = JSON.parse(response.rawBody)

        response.body = {}

        if (response.statusCode == 200) {
          if (msg['userInfo'] !== undefined) {
            response.body.userInfo = new UserInfoExternal(msg['userInfo'])
          }
        } else if (response.statusCode == 401) {
        } else if (response.statusCode == 403) {
        } else if (response.statusCode == 405) {
        }
        //
        // Assume standard error response with errorCode and errorMessage
        //
        if (msg['errorCode'] !== undefined) {
          response.body.errorCode = msg['errorCode']
        }

        if (msg['errorMessage'] !== undefined) {
          response.body.errorMessage = msg['errorMessage']
        }
      }

      responseHandler(null, response)
    }

    return this.context.request('GET', path, body, undefined, handleResponse)
  }
}
