import { createSlice } from '@reduxjs/toolkit'

export const deleteSlice = createSlice({
    name: 'auth',
    initialState: {
        value: false
    },
    reducers: {
        onDelete: (state) => {
            state.value = true
        }
    }
})

// Action creators are generated for each case reducer function
export const { onDelete } = deleteSlice.actions

export default deleteSlice.reducer
