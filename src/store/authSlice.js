import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: false
    },
    reducers: {
        onLogin: (state) => {
            state.value = true
        }
    }
})

// Action creators are generated for each case reducer function
export const { onLogin } = authSlice.actions

export default authSlice.reducer
