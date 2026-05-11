import { createSlice } from '@reduxjs/toolkit'

const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    list: []
  },
  reducers: {
    addMessage: (state, action) => {
      state.list.push(action.payload)
    },
    clearMessages: (state) => {
      state.list = []
    }
  }
})

export const { addMessage, clearMessages } = messagesSlice.actions
export default messagesSlice.reducer