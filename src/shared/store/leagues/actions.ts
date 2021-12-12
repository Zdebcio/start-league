import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import Auth from 'shared/store/leagues/services'
import { LoginPayload, CreateLeaguePayload } from 'shared/types'

const api = new Auth()

export const doSomethingAsync = createAsyncThunk(
  `auth/doSomethingAsync`,
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve('Done'), 1000)
    ) as Promise<string>
)

export const createLeague = createAsyncThunk(
  `leagues/createLeague`,
  async (payload: CreateLeaguePayload) => api.createLeague(payload)
)

export const resetCreatedLeagueStatus = createAction<void>(
  'leagues/resetCreateLeagueStatus'
)
