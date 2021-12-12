import { combineReducers } from 'redux'
import auth from './auth'
import leagues from './leagues'

export const actions = {
  auth: auth.actions,
  leagues: leagues.actions,
}

export const selectors = {
  auth: auth.selectors,
  leagues: leagues.selectors,
}

export const reducer = combineReducers({
  auth: auth.reducer,
  leagues: leagues.reducer,
})
