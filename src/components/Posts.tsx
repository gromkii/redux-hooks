import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { AppState } from '../reducers';
import { Link } from 'react-router-dom';
import { Dispatch } from 'redux';

interface Props {
  [key: string]: any;
}

interface State {
  posts: Post[];
}

interface Post {
  id: string,
  title: string,
  body: string,
}


const useFetchPosts = (dispatch: Dispatch) => {
  useEffect(() => {
    async function mount() {
      await fetchPosts(dispatch);
    };

    mount();
  }, [dispatch]);
} 

const Posts: FunctionComponent = () => {
 
  const dispatch = useDispatch();
  const {posts} = useSelector((state: AppState) => ({ posts: state.posts.items}));

  useFetchPosts(dispatch);

  const postItems = posts.map((post: Post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));

  return (
    <div>

      <Link to={'/list'}>List</Link>

      <h1>Posts</h1>
      { postItems }
    </div>
  );
  
}

export default Posts;