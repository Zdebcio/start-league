import { createReducer } from '@reduxjs/toolkit'
import { LoadingStatus } from 'shared/types'
import { login, registration } from './actions'

interface State {
  something: string
  loading: LoadingStatus
  error?: string | null
  loginSuccess: boolean
  registerSuccess: boolean
}

const initialState: State = {
  something: '',
  loading: LoadingStatus.Idle,
  loginSuccess: true,
  registerSuccess: true,
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
        loginSuccess: true,
      }
    })
    .addCase(login.rejected, (state, action) => {
      return {
        ...state,
        loginSuccess: false,
      }
    })
    .addCase(registration.pending, (state) => ({
      ...state,
    }))
    .addCase(registration.fulfilled, (state, action) => {
      return {
        ...state,
        registerSuccess: true,
      }
    })
    .addCase(registration.rejected, (state, action) => {
      return {
        ...state,
        registerSuccess: false,
      }
    })
)
