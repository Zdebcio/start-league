import { createReducer } from '@reduxjs/toolkit'
import {
  LoadingStatus,
  IUserLeaguesList,
  ILeagueTeam,
  ITeamFromList,
} from 'shared/types'
import {
  createLeague,
  resetCreatedLeagueStatus,
  fetchAllLeaguesList,
  fetchSelectedLeagueLadeboard,
  fetchSelectedLeagueTeams,
} from './actions'

interface State {
  createLeagueStatus: LoadingStatus
  fetchLeaguesListStatus: LoadingStatus
  userLeaguesList: IUserLeaguesList[] | null
  selectedLeagueLadeboard: ILeagueTeam[]
  selectedLeagueTeams: ITeamFromList[]
}

const initialState: State = {
  createLeagueStatus: LoadingStatus.Idle,
  fetchLeaguesListStatus: LoadingStatus.Idle,
  userLeaguesList: null,
  selectedLeagueLadeboard: [],
  selectedLeagueTeams: [],
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(resetCreatedLeagueStatus, (state) => ({
      ...state,
      createLeagueStatus: LoadingStatus.Idle,
    }))
    .addCase(createLeague.pending, (state) => ({
      ...state,
      createLeagueStatus: LoadingStatus.Pending,
    }))
    .addCase(createLeague.fulfilled, (state, action) => {
      return {
        ...state,
        createLeagueStatus: LoadingStatus.Succeeded,
      }
    })
    .addCase(createLeague.rejected, (state, action) => {
      return {
        ...state,
        createLeagueStatus: LoadingStatus.Failed,
      }
    })

    .addCase(fetchAllLeaguesList.pending, (state) => ({
      ...state,
      fetchLeaguesListStatus: LoadingStatus.Pending,
      userLeaguesList: state.userLeaguesList,
    }))
    .addCase(fetchAllLeaguesList.fulfilled, (state, action) => {
      const { response, status } = action.payload.data
      return {
        ...state,
        fetchLeaguesListStatus: LoadingStatus.Succeeded,
        userLeaguesList: response,
      }
    })
    .addCase(fetchAllLeaguesList.rejected, (state, action) => {
      return {
        ...state,
        fetchLeaguesListStatus: LoadingStatus.Failed,
        userLeaguesList: state.userLeaguesList,
      }
    })

    .addCase(fetchSelectedLeagueLadeboard.pending, (state) => ({
      ...state,
      selectedLeagueLadeboard: initialState.selectedLeagueLadeboard,
    }))
    .addCase(fetchSelectedLeagueLadeboard.fulfilled, (state, action) => {
      const { response, status } = action.payload.data
      return {
        ...state,
        selectedLeagueLadeboard: response,
      }
    })
    .addCase(fetchSelectedLeagueLadeboard.rejected, (state, action) => {
      return {
        ...state,
        selectedLeagueLadeboard: state.selectedLeagueLadeboard,
      }
    })

    .addCase(fetchSelectedLeagueTeams.pending, (state) => ({
      ...state,
      selectedLeagueTeams: initialState.selectedLeagueTeams,
    }))
    .addCase(fetchSelectedLeagueTeams.fulfilled, (state, action) => {
      const { response, status } = action.payload.data
      return {
        ...state,
        selectedLeagueTeams: response,
      }
    })
    .addCase(fetchSelectedLeagueTeams.rejected, (state, action) => {
      return {
        ...state,
        selectedLeagueTeams: state.selectedLeagueTeams,
      }
    })
)
