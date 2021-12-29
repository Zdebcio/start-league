import { createReducer } from '@reduxjs/toolkit'
import { LoadingStatus, IUserLeaguesList, ILeagueTeam } from 'shared/types'
import {
  createLeague,
  resetCreatedLeagueStatus,
  fetchAllLeaguesList,
  fetchSelectedLeagueLadeboard,
} from './actions'

interface State {
  createLeagueStatus: LoadingStatus
  fetchLeaguesListStatus: LoadingStatus
  userLeaguesList: IUserLeaguesList[] | null
  selectedLeagueLadeboard: ILeagueTeam[]
}

const initialState: State = {
  createLeagueStatus: LoadingStatus.Idle,
  fetchLeaguesListStatus: LoadingStatus.Idle,
  userLeaguesList: null,
  selectedLeagueLadeboard: [],
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
      fetchLeaguesListStatus: LoadingStatus.Pending,
      selectedLeagueLadeboard: initialState.selectedLeagueLadeboard,
    }))
    .addCase(fetchSelectedLeagueLadeboard.fulfilled, (state, action) => {
      const { response, status } = action.payload.data
      return {
        ...state,
        fetchLeaguesListStatus: LoadingStatus.Succeeded,
        selectedLeagueLadeboard: response,
      }
    })
    .addCase(fetchSelectedLeagueLadeboard.rejected, (state, action) => {
      return {
        ...state,
        fetchLeaguesListStatus: LoadingStatus.Failed,
        selectedLeagueLadeboard: state.selectedLeagueLadeboard,
      }
    })
)
