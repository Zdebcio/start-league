import qs from 'qs'
import config from 'config'
import { Api, Auth } from 'shared/services'
import { LoginPayload, LoginResponse } from 'shared/types'
import { AxiosResponse } from 'axios'

export default class AuthApi extends Api {
  public async login({ email, passwd }: LoginPayload) {
    const API = `${config.API_URL}/auth/login`

    const configRequest = {
      params: {
        email,
        passwd,
      },
    }

    return this.api
      .post<LoginPayload, AxiosResponse<LoginResponse>>(
        API,
        configRequest.params
      )
      .then((response) => {
        Auth.setToken(response.data.response)
        return response.data
      })
  }
}
