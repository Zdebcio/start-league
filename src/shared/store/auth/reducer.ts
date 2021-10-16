import { createReducer } from '@reduxjs/toolkit'
import { LoadingStatus } from 'shared/types'
import { doSomethingAsync } from './actions'

interface State {
  something: string
  loading: LoadingStatus
  error?: string | null
}

const initialState: State = {
  something: '',
  loading: LoadingStatus.Idle,
  error: null,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(doSomethingAsync.pending, (state) => ({
      ...state,
      loading: LoadingStatus.Pending,
      error: null,
    }))
    .addCase(doSomethingAsync.fulfilled, (state, action) => ({
      ...state,
      something: action.payload,
      loading: LoadingStatus.Succeeded,
      error: null,
    }))
    .addCase(doSomethingAsync.rejected, (state, action) => ({
      ...state,
      loading: LoadingStatus.Failed,
      error: action.error.message,
    }))
)
