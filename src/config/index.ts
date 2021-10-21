const throwError = (message: string) => {
  throw new Error(message)
}

const config = {
  TOKEN_FIELD: 'authToken',
  API_URL:
    process.env.REACT_APP_API_URL ||
    throwError('Missing API URL env variable.'),
}

export default config

export { default as i18n } from './i18n'
export { default as theme } from './theme'
