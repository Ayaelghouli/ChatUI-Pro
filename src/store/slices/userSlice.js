import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: 'Agent NeoCare',
        avatar: '👨‍⚕️'
    },
    reducers: {
        updateName: (state, action) => {
            state.name = action.payload
        },
        updateAvatar: (state, action) => {
            state.avatar = action.payload
        }
    }
})

export const { updateName, updateAvatar } = userSlice.actions
export default userSlice.reducer