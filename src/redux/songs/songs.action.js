export const selectSong = (song) => {
  console.log(song);
  return {
    type: 'SELECT_SONG',
    payload: song
  };
};