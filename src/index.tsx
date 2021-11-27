import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { i18n, theme } from 'config'
import { ThemeProvider } from '@mui/material/styles'
import store from './store'
import App from './app/App'

i18n.init()

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
