import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counter'

export const store = configureStore({
    reducer: {
        mycounter: counterReducer
    },
})