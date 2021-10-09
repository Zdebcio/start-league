import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { CounterReducer } from './features/counter'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  count: CounterReducer,
})

const store = configureStore(
  { reducer: rootReducer }

  // /* preloadedState, */ devToolsEnhancer({})
)

export default store
