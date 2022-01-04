import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import Auth from 'shared/store/leagues/services'
import {
  AddNewTeamPayload,
  CreateLeaguePayload,
  SelectedLeaguePayload,
} from 'shared/types'

const api = new Auth()

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

export const fetchSelectedLeagueResults = createAsyncThunk(
  `leagues/fetchSelectedLeagueResults`,
  async (payload: SelectedLeaguePayload) =>
    api.fetchSelectedLeagueResults(payload)
)

export const fetchSelectedLeagueInfo = createAsyncThunk(
  `leagues/fetchSelectedLeagueInfo`,
  async (payload: SelectedLeaguePayload) => api.fetchSelectedLeagueInfo(payload)
)

export const addNewLeague = createAsyncThunk(
  `leagues/addNewLeague`,
  async (payload: AddNewTeamPayload) => api.addNewLeague(payload)
)

export const resetAddNewLeagueStatus = createAction<void>(
  'leagues/resetAddNewLeagueStatus'
)
