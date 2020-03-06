import { FETCH_POSTS, NEW_POST, PostActionTypes } from './../actions/types';

export interface PostState  {
  items: any[];
  item: any;
}

const initialState = {
  items: [],
  item: {}
};

export default (state: any = initialState, action: PostActionTypes) => {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      }
    case NEW_POST:
      return {
        ...state,
        items: [
          {
            ...action.payload,
            id: state.items.length + 1,
          },
          ...state.items,
        ],
      }
    default:
      return state;
  }
};