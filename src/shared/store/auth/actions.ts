import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import Auth from 'shared/store/auth/services'
import {
  LoginPayload,
  RegistrationPayload,
  RegistrationErrors,
} from 'shared/types'

const api = new Auth()

export const doSomethingAsync = createAsyncThunk(
  `auth/doSomethingAsync`,
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve('Done'), 1000)
    ) as Promise<string>
)

export const login = createAsyncThunk(
  `auth/login`,
  async (payload: LoginPayload) => api.login(payload)
)

export const registration = createAsyncThunk(
  `auth/registration`,
  async (payload: RegistrationPayload, { dispatch }) =>
    api.registration(dispatch, payload)
)

export const clearRegistrationStatus = createAction<void>(
  `auth/clearRegistrationStatus`
)

export const setRegistrationErrors = createAction<RegistrationErrors>(
  `auth/setRegistrationErrors`
)
