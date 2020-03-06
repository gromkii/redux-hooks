// Posts | PostForm
export const FETCH_POSTS = 'FETCH_POSTS';
export const NEW_POST = 'NEW_POST';

export interface PostCreate {
  title: string,
  body: string,
}

export interface Post extends PostCreate {
  id: string,
}

interface FetchPostsAction {
  type: typeof FETCH_POSTS,
  payload: Post[],
};

interface NewPostAction {
  type: typeof NEW_POST,
  payload: PostCreate,
}
export type PostActionTypes = FetchPostsAction | NewPostAction;


// List
export const FETCH_NAMES = 'FETCH_NAMES';

interface FetchNamesAction {
  type: typeof FETCH_NAMES,
  payload: string[],
}

export type ListActionTypes = FetchNamesAction;
