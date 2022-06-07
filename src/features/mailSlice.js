import { createSlice } from '@reduxjs/toolkit'

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectMail: null,
    sendMsgIsOpen: false,
  },

  reducers: {
    selectMail: (state, action) => {
      state.selectMail = action.payload
    },
    openSendMsg: (state) => {
      state.sendMsgIsOpen = true
    },
    closeSendMsg: (state) => {
      state.sendMsgIsOpen = false
    },
  },
})

export const { openSendMsg, closeSendMsg, selectMail } = mailSlice.actions
export const selectOpenMail = (state) => state.mail.selectMail
export const selectSendMsgIsOpen = (state) => state.mail.sendMsgIsOpen

export default mailSlice.reducer
