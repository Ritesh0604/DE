import { createSlice } from '@reduxjs/toolkit'
// import { useCookies } from 'react-cookie';

export const facultySlice = createSlice({
    name: 'faculty',
    initialState: {
        // _id: null,
        email: null,
        fullName: null,
        blockName: null,
        time: null,
        notes:null,
    },
    reducers: {
        onShow: (state, action) => {
            // console.log(action.payload);
            // state._id = action.payload._id;
            state.email = action.payload.email;
            state.fullName = action.payload.fullName;
            state.blockName = action.payload.blockName;
            state.time = action.payload.time;
            state.notes = action.payload.notes;
        }
    },
})
export const { onShow } = facultySlice.actions
export default facultySlice.reducer
