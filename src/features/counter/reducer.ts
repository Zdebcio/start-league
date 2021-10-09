import { createReducer } from '@reduxjs/toolkit'
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './actions'

interface State {
  value: number
}

const initialState: State = {
  value: 0,
}

export default createReducer(initialState, (builder) =>
  builder
    .addCase(INCREMENT_COUNTER, (state) => {
      return { ...state, value: state.value + 1 }
    })
    .addCase(DECREMENT_COUNTER, (state) => {
      return { ...state, value: state.value - 1 }
    })
)
