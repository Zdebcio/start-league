import { createReducer } from '@reduxjs/toolkit'
import {
  LoadingStatus,
  IUserLeaguesList,
  ILeagueTeam,
  ITeamFromList,
  IResultFromList,
  ILeagueInfo,
} from 'shared/types'
import {
  createLeague,
  resetCreatedLeagueStatus,
  resetAddNewLeagueStatus,
  fetchAllLeaguesList,
  fetchSelectedLeagueLadeboard,
  fetchSelectedLeagueTeams,
  fetchSelectedLeagueResults,
  fetchSelectedLeagueInfo,
  addNewLeague,
} from './actions'

interface State {
  createLeagueStatus: LoadingStatus
  addNewTeamStatus: LoadingStatus
  selectedLeagueInfo: ILeagueInfo | null
  fetchLeaguesListStatus: LoadingStatus
  userLeaguesList: IUserLeaguesList[] | null
  selectedLeagueLadeboard: ILeagueTeam[]
  selectedLeagueTeams: ITeamFromList[]
  selectedLeagueResults: IResultFromList[]
}

const initialState: State = {
  createLeagueStatus: LoadingStatus.Idle,
  addNewTeamStatus: LoadingStatus.Idle,
  selectedLeagueInfo: null,
  fetchLeaguesListStatus: LoadingStatus.Idle,
  userLeaguesList: null,
  selectedLeagueLadeboard: [],
  selectedLeagueTeams: [],
  selectedLeagueResults: [],
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(resetCreatedLeagueStatus, (state) => ({
      ...state,
      createLeagueStatus: LoadingStatus.Idle,
    }))
    .addCase(resetAddNewLeagueStatus, (state) => ({
      ...state,
      addNewTeamStatus: LoadingStatus.Idle,
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

    .addCase(fetchSelectedLeagueResults.pending, (state) => ({
      ...state,
      selectedLeagueResults: initialState.selectedLeagueResults,
    }))
    .addCase(fetchSelectedLeagueResults.fulfilled, (state, action) => {
      const { response, status } = action.payload.data
      return {
        ...state,
        selectedLeagueResults: response,
      }
    })
    .addCase(fetchSelectedLeagueResults.rejected, (state, action) => {
      return {
        ...state,
        selectedLeagueResults: state.selectedLeagueResults,
      }
    })

    .addCase(fetchSelectedLeagueInfo.pending, (state) => ({
      ...state,
      selectedLeagueInfo: initialState.selectedLeagueInfo,
    }))
    .addCase(fetchSelectedLeagueInfo.fulfilled, (state, action) => {
      const { response, status } = action.payload.data
      return {
        ...state,
        selectedLeagueInfo: response,
      }
    })
    .addCase(fetchSelectedLeagueInfo.rejected, (state, action) => {
      return {
        ...state,
        selectedLeagueInfo: state.selectedLeagueInfo,
      }
    })

    .addCase(addNewLeague.pending, (state) => ({
      ...state,
      addNewTeamStatus: LoadingStatus.Pending,
    }))
    .addCase(addNewLeague.fulfilled, (state, action) => {
      return {
        ...state,
        addNewTeamStatus: LoadingStatus.Succeeded,
      }
    })
    .addCase(addNewLeague.rejected, (state, action) => {
      return {
        ...state,
        addNewTeamStatus: LoadingStatus.Failed,
      }
    })
)
