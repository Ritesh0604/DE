import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import deleteReducer from './deleteSlice'
export default configureStore({
    reducer: {
        auth: authReducer,
        delete: deleteReducer
    }
})
