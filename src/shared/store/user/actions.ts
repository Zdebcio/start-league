import { createAsyncThunk } from '@reduxjs/toolkit'
import Auth from 'shared/store/user/services'

const api = new Auth()

export const fetchLoggedUserInfo = createAsyncThunk(
  `leagues/fetchLoggedUserInfo`,
  async () => api.fetchLoggedUserInfo()
)
