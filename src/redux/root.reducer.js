import { combineReducers } from 'redux';
import { songsReducers, selectedSongReducers } from './songs/songs.reducers';
import { fetchPostReducer, fetchUserReducer } from './posts/posts.reducers';

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducers,
  posts: fetchPostReducer,
  users: fetchUserReducer
});