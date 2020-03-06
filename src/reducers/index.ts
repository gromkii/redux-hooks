import { combineReducers } from 'redux';
import postReducer, { PostState } from './postReducer';
import listReducer, { ListState } from './listReducer';

export interface AppState {
  posts: PostState;
  list: ListState;
}

export default combineReducers({
  posts: postReducer,
  list: listReducer,
});