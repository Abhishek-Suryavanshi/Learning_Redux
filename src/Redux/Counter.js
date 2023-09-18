import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 10,
        products: [1, 2, 4, 5]
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
        },
        add20: (state) => {
            state.products.shift();
        }
    }
})

export const { increment, decrement, incrementBy25, add20 } = counterSlice.actions
export default counterSlice.reducer