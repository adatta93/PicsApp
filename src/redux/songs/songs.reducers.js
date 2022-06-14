export const songsReducers = () => {
  return [
    { title: 'Boba Tunnel', duration: '5:40' },
    { title: 'Phir Kabhi', duration: '4:20' },
    { title: 'Ikk Kudi', duration: '4:50' },
    { title: 'Ove Janiya', duration: '3:25' }
  ]
};

const INITIAL_STATE = null;

export const selectedSongReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SELECT_SONG':
      return action.payload;
    default:
      return state;
  }
}