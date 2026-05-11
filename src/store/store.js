import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from './slices/messagesSlice'
import userReducer from './slices/userSlice'
import settingsReducer from './slices/settingsSlice'
const store = configureStore({
    reducer: {
        messages: messagesReducer,
        user: userReducer,
        settings: settingsReducer
    }
})

export default store