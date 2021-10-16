import { createAsyncThunk } from '@reduxjs/toolkit'

export const doSomethingAsync = createAsyncThunk(
  `auth/doSomethingAsync`,
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve('Done'), 1000)
    ) as Promise<string>
)
