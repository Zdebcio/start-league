import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import Auth from 'shared/store/leagues/services'
import { CreateLeaguePayload, SelectedLeaguePayload } from 'shared/types'

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

export const fetchAllLeaguesList = createAsyncThunk(
  `leagues/fetchAllLeaguesList`,
  async () => api.fetchAllLeaguesList()
)

export const fetchSelectedLeagueLadeboard = createAsyncThunk(
  `leagues/fetchSelectedLeagueLadeboard`,
  async (payload: SelectedLeaguePayload) =>
    api.fetchSelectedLeagueLadeboard(payload)
)

export const fetchSelectedLeagueTeams = createAsyncThunk(
  `leagues/fetchSelectedLeagueTeams`,
  async (payload: SelectedLeaguePayload) =>
    api.fetchSelectedLeagueTeams(payload)
)
