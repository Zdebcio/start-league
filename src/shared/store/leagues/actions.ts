import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import Auth from 'shared/store/leagues/services'
import {
  AddNewTeamPayload,
  CreateLeaguePayload,
  SelectedLeaguePayload,
  AddNewResultPayload,
  RemoveLeaguePayload,
  RemoveTeamPayload,
  RemoveResultPayload,
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

export const addNewTeam = createAsyncThunk(
  `leagues/addNewTeam`,
  async (payload: AddNewTeamPayload) => api.addNewTeam(payload)
)

export const resetAddNewTeamStatus = createAction<void>(
  'leagues/resetAddNewTeamStatus'
)

export const addNewResult = createAsyncThunk(
  `leagues/addNewResult`,
  async (payload: AddNewResultPayload) => api.addNewResult(payload)
)

export const resetAddNewResultStatus = createAction<void>(
  'leagues/resetAddNewResultStatus'
)

export const removeLeague = createAsyncThunk(
  `leagues/removeLeague`,
  async (payload: RemoveLeaguePayload) => api.removeLeague(payload)
)

export const removeTeam = createAsyncThunk(
  `leagues/removeTeam`,
  async (payload: RemoveTeamPayload) => api.removeTeam(payload)
)

export const removeResult = createAsyncThunk(
  `leagues/removeResult`,
  async (payload: RemoveResultPayload) => api.removeResult(payload)
)
