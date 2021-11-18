import { createReducer } from '@reduxjs/toolkit'
import { LoadingStatus } from 'shared/types'
import { login } from './actions'

interface State {
  something: string
  loading: LoadingStatus
  error?: string | null
  loginSuccess: boolean
}

const initialState: State = {
  something: '',
  loading: LoadingStatus.Idle,
  loginSuccess: true,
  error: null,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(login.pending, (state) => ({
      ...state,
    }))
    .addCase(login.fulfilled, (state, action) => {
      return {
        ...state,
        auth: action.payload,
        loginSuccess: true,
      }
    })
    .addCase(login.rejected, (state, action) => {
      console.log(action)
      return {
        ...state,
        auth: action.payload,
        loginSuccess: false,
      }
    })
)
