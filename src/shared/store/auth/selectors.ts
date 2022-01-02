import type { RootState } from 'store'

export const getLoginSuccessStatus = (state: RootState) =>
  state.reducer.auth.loginSuccess

export const getRegisterStatus = (state: RootState) =>
  state.reducer.auth.registerStatus
