import config from 'config'
import { Api } from 'shared/services'

export default class UserApi extends Api {
  public async fetchLoggedUserInfo() {
    const API = `${config.API_URL}/user/me`

    return this.api.get(API)
  }
}
