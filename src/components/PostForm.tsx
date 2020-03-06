import React, { FunctionComponent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/postActions';
import { PostCreate } from '../actions/types';

type Props = { 
  createPost: (post: PostCreate) => any;
 };

interface State {
  title: string;
  body: string;
}

const PostForm: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const post = {
      title,
      body,
    };

    await createPost(post, dispatch);
    resetForm();
  }

  const resetForm = () => {
    setTitle('');
    setBody('');
  }

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={ onSubmit }>
        <div>
          <label>Title: </label>
          <input type="text" name="title" onChange={e => setTitle(e.target.value)} value={title} />
        </div>
        <div>
          <label>Body: </label>
          <textarea name="body" onChange={e => setBody(e.target.value)} value={body} />
        </div>

        <button type="submit">Submit</button>

      </form>

    </div>
  );
};

export default PostForm;