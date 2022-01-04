import type { RootState } from 'store'

export const getCreateLeagueStatus = (state: RootState) =>
  state.reducer.leagues.createLeagueStatus

export const getUserLeaguesList = (state: RootState) =>
  state.reducer.leagues.userLeaguesList

export const getSelectedLeagueLadeboard = (state: RootState) =>
  state.reducer.leagues.selectedLeagueLadeboard

export const getSelectedLeagueTeams = (state: RootState) =>
  state.reducer.leagues.selectedLeagueTeams

export const getSelectedLeagueResults = (state: RootState) =>
  state.reducer.leagues.selectedLeagueResults

export const getSelectedLeagueInfo = (state: RootState) =>
  state.reducer.leagues.selectedLeagueInfo

export const getAddNewTeamStatus = (state: RootState) =>
  state.reducer.leagues.addNewTeamStatus
