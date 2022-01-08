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
  resetAddNewTeamStatus,
  fetchAllLeaguesList,
  fetchSelectedLeagueLadeboard,
  fetchSelectedLeagueTeams,
  fetchSelectedLeagueResults,
  fetchSelectedLeagueInfo,
  addNewTeam,
  addNewResult,
  resetAddNewResultStatus,
} from './actions'

interface State {
  createLeagueStatus: LoadingStatus
  addNewTeamStatus: LoadingStatus
  addNewResultStatus: LoadingStatus
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
  addNewResultStatus: LoadingStatus.Idle,
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
    .addCase(resetAddNewTeamStatus, (state) => ({
      ...state,
      addNewTeamStatus: LoadingStatus.Idle,
    }))
    .addCase(resetAddNewResultStatus, (state) => ({
      ...state,
      addNewResultStatus: LoadingStatus.Idle,
    }))
    .addCase(createLeague.pending, (state) => ({
      ...state,
      createLeagueStatus: LoadingStatus.Pending,
    }))
    .addCase(createLeague.fulfilled, (state) => {
      return {
        ...state,
        createLeagueStatus: LoadingStatus.Succeeded,
      }
    })
    .addCase(createLeague.rejected, (state) => {
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
      const { response } = action.payload.data
      return {
        ...state,
        fetchLeaguesListStatus: LoadingStatus.Succeeded,
        userLeaguesList: response,
      }
    })
    .addCase(fetchAllLeaguesList.rejected, (state) => {
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
      const { response } = action.payload.data
      return {
        ...state,
        selectedLeagueLadeboard: response,
      }
    })
    .addCase(fetchSelectedLeagueLadeboard.rejected, (state) => {
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
      const { response } = action.payload.data
      return {
        ...state,
        selectedLeagueTeams: response,
      }
    })
    .addCase(fetchSelectedLeagueTeams.rejected, (state) => {
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
      const { response } = action.payload.data
      return {
        ...state,
        selectedLeagueResults: response,
      }
    })
    .addCase(fetchSelectedLeagueResults.rejected, (state) => {
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
      const { response } = action.payload.data
      return {
        ...state,
        selectedLeagueInfo: response,
      }
    })
    .addCase(fetchSelectedLeagueInfo.rejected, (state) => {
      return {
        ...state,
        selectedLeagueInfo: state.selectedLeagueInfo,
      }
    })

    .addCase(addNewTeam.pending, (state) => ({
      ...state,
      addNewTeamStatus: LoadingStatus.Pending,
    }))
    .addCase(addNewTeam.fulfilled, (state) => {
      return {
        ...state,
        addNewTeamStatus: LoadingStatus.Succeeded,
      }
    })
    .addCase(addNewTeam.rejected, (state) => {
      return {
        ...state,
        addNewTeamStatus: LoadingStatus.Failed,
      }
    })

    .addCase(addNewResult.pending, (state) => ({
      ...state,
      addNewResultStatus: LoadingStatus.Pending,
    }))
    .addCase(addNewResult.fulfilled, (state) => {
      return {
        ...state,
        addNewResultStatus: LoadingStatus.Succeeded,
      }
    })
    .addCase(addNewResult.rejected, (state) => {
      return {
        ...state,
        addNewResultStatus: LoadingStatus.Failed,
      }
    })
)
