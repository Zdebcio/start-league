import config from 'config'

class Auth {
  static setToken(token: string) {
    return localStorage.setItem(config.TOKEN_FIELD, token)
  }

  static getToken() {
    return localStorage.getItem(config.TOKEN_FIELD)
  }

  static isAuthenticated() {
    return !!Auth.getToken()
  }
}

export default Auth
