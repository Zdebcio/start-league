import { createReducer } from '@reduxjs/toolkit'
import { LoadingStatus } from 'shared/types'
import { login, registration, clearRegistrationStatus } from './actions'

interface State {
  something: string
  loading: LoadingStatus
  error?: string | null
  loginSuccess: boolean
  registerSuccess: boolean
  registerStatus: LoadingStatus
}

const initialState: State = {
  something: '',
  loading: LoadingStatus.Idle,
  loginSuccess: true,
  registerSuccess: true,
  registerStatus: LoadingStatus.Idle,
  error: null,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(login.pending, (state) => ({
      ...state,
    }))
    .addCase(login.fulfilled, (state) => {
      return {
        ...state,
        loginSuccess: true,
      }
    })
    .addCase(login.rejected, (state) => {
      return {
        ...state,
        loginSuccess: false,
      }
    })
    .addCase(registration.pending, (state) => ({
      ...state,
      registerStatus: LoadingStatus.Pending,
    }))
    .addCase(registration.fulfilled, (state) => {
      return {
        ...state,
        registerSuccess: true,
        registerStatus: LoadingStatus.Succeeded,
      }
    })
    .addCase(registration.rejected, (state) => {
      return {
        ...state,
        registerSuccess: false,
        registerStatus: LoadingStatus.Failed,
      }
    })
    .addCase(clearRegistrationStatus, (state) => {
      return {
        ...state,
        registerSuccess: true,
        registerStatus: LoadingStatus.Idle,
      }
    })
)
