import { createReducer } from '@reduxjs/toolkit'
import { LoadingStatus } from 'shared/types'
import { createLeague, resetCreatedLeagueStatus } from './actions'

interface State {
  createLeagueStatus: LoadingStatus
}

const initialState: State = {
  createLeagueStatus: LoadingStatus.Idle,
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
)
