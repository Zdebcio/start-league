import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { reducer } from 'shared/store'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  reducer,
})

const store = configureStore(
  { reducer: rootReducer }

  // /* preloadedState, */ devToolsEnhancer({})
)

export type RootState = ReturnType<typeof store.getState>

export default store
