import '../App.css';
import React from 'react';
import PostForm from './PostForm';
import Posts from './Posts';

const PostContainer = () => (
  <div className="App">
    <PostForm />
    <Posts />
  </div>
);

export default PostContainer;