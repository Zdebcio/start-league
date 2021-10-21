import axios, { AxiosInstance } from 'axios'
import config from 'config'
import Auth from '../Auth'
import { LoginPayload, LoginResponse } from './Api.types'

class Api {
  public api: AxiosInstance

  constructor() {
    this.api = axios.create({ baseURL: config.API_URL })
  }
}

export default Api
