import { createReducer } from '@reduxjs/toolkit'
import { LoadingStatus, IUserInfo } from 'shared/types'
import { fetchLoggedUserInfo } from './actions'

interface State {
  fetchLoggedUserInfoStatus: LoadingStatus
  userInfo: IUserInfo | null
}

const initialState: State = {
  fetchLoggedUserInfoStatus: LoadingStatus.Idle,
  userInfo: null,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(fetchLoggedUserInfo.pending, (state) => ({
      ...state,
      fetchLoggedUserInfoStatus: LoadingStatus.Pending,
    }))
    .addCase(fetchLoggedUserInfo.fulfilled, (state, action) => {
      const { response } = action.payload.data
      return {
        ...state,
        fetchLoggedUserInfoStatus: LoadingStatus.Succeeded,
        userInfo: response,
      }
    })
    .addCase(fetchLoggedUserInfo.rejected, (state) => {
      return {
        ...state,
        fetchLoggedUserInfoStatus: LoadingStatus.Failed,
        userInfo: null,
      }
    })
)
