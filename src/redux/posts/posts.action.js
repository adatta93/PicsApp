import axios from 'axios';

export const fetchPostsAndUser = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = [];
  getState().posts.forEach(post => {
    if (userIds.indexOf(post.userId) === -1) {
      userIds.push(post.userId);
    }
  });
  userIds.forEach(id => dispatch(fetchUser(id)));
}

const fetchPosts = () => {
  return async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    });
  };
};

const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: 'FETCH_USER',
      payload: response.data
    });
  };
};