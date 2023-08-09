import { configureStore } from "@reduxjs/toolkit"
import LoginSlice from "./slices/LoginSlice"

const myStore = configureStore({
    reducer: {
        login: LoginSlice,
    }
})

export default myStore