import i18next from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const DEFAULT_LANGUAGE = 'en'

const i18n = {
  init: () =>
    i18next
      .use(Backend)
      .use(initReactI18next)
      .init({
        lng: DEFAULT_LANGUAGE,
        fallbackLng: DEFAULT_LANGUAGE,
        interpolation: {
          escapeValue: false,
        },
        backend: {
          loadPath: '/locales/{{lng}}.json',
        },
      }),
}

export default i18n
