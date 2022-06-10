import { createSlice } from '@reduxjs/toolkit';
import episodes from '../episodeData/data'
import { v4 as uuidv4 } from 'uuid'

const episodeSlice = createSlice({
    name: 'episodes',
    initialState: {
        episodes,
    },
    reducers: {
        addEpisode(state, action) {
            state.episodes.push({
              id: uuidv4(),
              text: action.payload.text,
              completed: false,
            });
        },
        toggleComplete(state, action) {
            const toggledTodo = state.episodes.find(episode => episode.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        },
        removeEpisode(state, action) {
            state.episodes = state.episodes.filter(episode => episode.id !== action.payload.id);
        }
    },
});

export const {addEpisode, toggleComplete, removeEpisode} = episodeSlice.actions;

export default episodeSlice.reducer;