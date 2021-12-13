import type { RootState } from 'store'

export const getCreateLeagueStatus = (state: RootState) =>
  state.reducer.leagues.createLeagueStatus
