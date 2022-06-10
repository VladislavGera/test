import { createSlice } from '@reduxjs/toolkit'

const characterSlice = createSlice({
  name: 'character',
  initialState: {
    characters: [],
    character: {
      gender:'',
      species:'',
      image:'',
      status:'',
      name:''
    },
    pages: 0,
  },
  reducers: {
    setListCharacters(state, action) {
      const data = action.payload
       state.pages = data.pages
       state.characters = data.characters
    },
    setCharacter(state, action) {
      const data = action.payload
      state.character = data.character
    },
  },
})

export const { setListCharacters, setCharacter } = characterSlice.actions

export default characterSlice.reducer
