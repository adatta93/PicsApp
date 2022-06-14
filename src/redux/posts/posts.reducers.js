const INITIAL_STATE = [];

export const fetchPostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const fetchUserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload];
    default:
      return state;
  }
}