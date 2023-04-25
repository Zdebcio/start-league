import type { RootState } from 'store'

export const getLoggedUserInfo = (state: RootState) =>
  state.reducer.user.userInfo
