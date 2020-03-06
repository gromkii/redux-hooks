import { FETCH_NAMES } from './types';
import { Dispatch } from 'redux';

const names = ['Sally', 'Polly', 'Wally'];

export const fetchNames = () => (dispatch: Dispatch) => {
  dispatch({
    type: FETCH_NAMES,
    payload: names,
  });
};