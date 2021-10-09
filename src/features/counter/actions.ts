import { createAction } from '@reduxjs/toolkit'

export const INCREMENT_COUNTER = createAction<void>(`COUNTER/INCREMENT_COUNTER`)

export const DECREMENT_COUNTER = createAction<void>(`COUNTER/DECREMENT_COUNTER`)
