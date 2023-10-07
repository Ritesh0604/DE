import { createSlice } from '@reduxjs/toolkit'
// import { useCookies } from 'react-cookie';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: false,
        email: null
    },
    reducers: {
        onLogin: (state) => {
            state.value = true;
        }
    },
})
export const {onLogin} = counterSlice.actions
export default counterSlice.reducer
