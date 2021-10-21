import { createAsyncThunk } from '@reduxjs/toolkit'
import Auth from 'shared/store/auth/services'
import { LoginPayload } from 'shared/types'

const api = new Auth()

export const doSomethingAsync = createAsyncThunk(
  `auth/doSomethingAsync`,
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve('Done'), 1000)
    ) as Promise<string>
)

export const login = createAsyncThunk(`auth/login`, (payload: LoginPayload) =>
  api.login(payload)
)
