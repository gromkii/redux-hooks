import { FETCH_POSTS, NEW_POST, PostCreate } from './types';
import { Dispatch } from 'redux';

export const fetchPosts = async (dispatch: Dispatch) => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();
    dispatch({
      type: FETCH_POSTS,
      payload: posts,
    });
  } catch (err) {
    console.error(err);
  }
}

export const createPost = async (post: PostCreate, dispatch: Dispatch) => {
  dispatch({
    type: NEW_POST,
    payload: post,
  });
}