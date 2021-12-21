import axios, { AxiosInstance } from 'axios'
import config from 'config'
import { Auth } from '..'

class Api {
  public api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: config.API_URL,
    })

    this.api.interceptors.request.use((requestConfig) => {
      let newConfig = { ...requestConfig }

      if (!newConfig) {
        newConfig = {}
      }
      if (!newConfig.headers) {
        newConfig.headers = {}
      }

      const token = Auth.getToken()
      newConfig.headers.Authorization = token ? `Bearer ${token}` : ''
      return newConfig
    })

    this.api.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        const { status } = error.response
        if (status === 401 || status === 403) {
          localStorage.clear()
          window.location.replace('/')
        }
        return error
      }
    )
  }
}

export default Api
