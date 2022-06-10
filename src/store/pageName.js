import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'pageName',
  initialState: {
    pageName: 'characters',
  },
  reducers: {
    setPageName(state, action) {
      state.pageName = action.payload.pageName
    },
  },
})

export const { setPageName } = todoSlice.actions

export default todoSlice.reducer
