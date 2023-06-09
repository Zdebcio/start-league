import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import config from 'config'
import { Api, Auth } from 'shared/services'
import { LoginPayload, LoginResponse, RegistrationPayload } from 'shared/types'
import { setRegistrationErrors } from './actions'

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

  public async registration(
    dispatch: ThunkDispatch<unknown, unknown, AnyAction>,
    payload: RegistrationPayload
  ) {
    const API = `${config.API_URL}/auth/register`

    const options = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }

    return this.api
      .post<RegistrationPayload, AxiosResponse<any>>(API, payload, options)
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        dispatch(setRegistrationErrors(err.response.data.response))
        throw new Error(err)
      })
  }
}
