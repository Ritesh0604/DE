import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/counterSlice'
import facultyReducer from '../store/facultySlice'
export default configureStore({
    reducer: {
        counter: counterReducer,
        faculty: facultyReducer
    },
})
