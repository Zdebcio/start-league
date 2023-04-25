import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import leagues from './leagues'

export const actions = {
  auth: auth.actions,
  user: user.actions,
  leagues: leagues.actions,
}

export const selectors = {
  auth: auth.selectors,
  user: user.selectors,
  leagues: leagues.selectors,
}

export const reducer = combineReducers({
  auth: auth.reducer,
  user: user.reducer,
  leagues: leagues.reducer,
})
