import { createSlice } from "@reduxjs/toolkit";


const LoginSlice = createSlice({
    name: "Login",

    initialState: {
        isLoggedIn: false,
        isLoading: false,
        token: ''
    },

    reducers: {
        setLogin: (state) => {
            state.isLoggedIn = !state.isLoggedIn
        },

        setLoading: (state) => {
            state.isLoading = !state.isLoading
        }

    }
})

export const { setLogin, setLoading } = LoginSlice.actions

export const isLoggedSelector = (state) => (state.login.isLoggedIn)


export default LoginSlice.reducer