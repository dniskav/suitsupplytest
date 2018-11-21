import initialState from './initialState';
import { NEW_POST, DELETE_POST } from '../actions/actionTypes';

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST:
      return {...state, postsList: state.postsList.filter((el) => el.id !== action.id)};
    case NEW_POST:
      state.postsList.push(action.post);
      return state;
    default:
      return state;
  }
};
