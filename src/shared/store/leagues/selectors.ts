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

export const getAddNewResultStatus = (state: RootState) =>
  state.reducer.leagues.addNewResultStatus

export const getRemoveLeagueStatus = (state: RootState) =>
  state.reducer.leagues.removeLeagueStatus

export const getRemoveTeamStatus = (state: RootState) =>
  state.reducer.leagues.removeTeamStatus

export const getRemoveResultStatus = (state: RootState) =>
  state.reducer.leagues.removeResultStatus

export const getCreatingLeagueError = (state: RootState) =>
  state.reducer.leagues.createLeagueError

export const getAddingNewTeamError = (state: RootState) =>
  state.reducer.leagues.addNewTeamError
