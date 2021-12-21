import type { RootState } from 'store'

export const getCreateLeagueStatus = (state: RootState) =>
  state.reducer.leagues.createLeagueStatus

export const getUserLeaguesList = (state: RootState) =>
  state.reducer.leagues.userLeaguesList
