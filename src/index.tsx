import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { i18n } from 'config'
import store from './store'

import './index.css'

import App from './App'

i18n.init()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
