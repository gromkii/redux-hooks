import { FETCH_NAMES, ListActionTypes } from './../actions/types';

export interface ListState {
  names: string[];
}

const initialState = {
  names: [],
};

export default (state: {} = initialState, action: ListActionTypes) => {
  switch(action.type) {
    case FETCH_NAMES:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}