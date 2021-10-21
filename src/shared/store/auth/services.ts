import qs from 'qs'
import config from 'config'
import { Api } from 'shared/services'
import { LoginPayload } from 'shared/types'

export default class AuthApi extends Api {
  public async login({ email, passwd }: LoginPayload) {
    const API = `${config.API_URL}/auth/login`

    const configRequest = {
      params: {
        email,
        passwd,
      },
    }

    return this.api.post(API, null, configRequest).then((response) => {
      return response.data
    })
  }
}
