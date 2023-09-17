import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 10
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementBy25: (state) => {
            state.count += 25;
        }
    }
})

export const { increment, decrement, incrementBy25 } = counterSlice.actions
export default counterSlice.reducer