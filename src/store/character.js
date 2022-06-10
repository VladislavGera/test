import { createSlice } from '@reduxjs/toolkit'

const characterSlice = createSlice({
  name: 'character',
  initialState: {
    characters: [],
    character: null,
    pages: 0,
  },
  reducers: {
    setListCharacters(state, action) {
      const data = action.payload
      state.characters = data.characters
      state.pages = data.pages
    },
    setCharacter(state, action) {
      const data = action.payload
      state.character = data.character
    },
  },
})

export const { setListCharacters, setCharacter } = characterSlice.actions

export default characterSlice.reducer
