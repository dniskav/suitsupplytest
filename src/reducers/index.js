import initialState from './initialState';
import { NEW_POST, DELETE_POST, POSTS_LOADED, POSTS_SEARCH } from '../actions/actionTypes';

//Reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_POST:
      state.unfilteredList = state.unfilteredList.filter((el) => el.id !== action.id);
      state.filteredList = state.filteredList.filter((el) => el.id !== action.id);
      return {...state, postsList: returnPostsLists(state)};
    case NEW_POST:
      if(action.post.title === '' || action.post.data === '') {
        alert('you cannot create a post without title or content');
        return state;
      }
      state.unfilteredList.push(action.post);
      state.filteredList.push(action.post);
      return {...state, postsList: returnPostsLists(state)};
    case POSTS_LOADED:
      return {...state, postsList: action.postsList, unfilteredList: action.postsList};
    case POSTS_SEARCH:
      state.isFiltered = action.searchString !== ''; 
      state.filteredList = searchPost(state.unfilteredList, action.searchString);
      return {...state, postsList: returnPostsLists(state)};
    default:
      return state;
  }
};

//search helper function
const searchPost = (postsList, searchString) => postsList.filter(
  (el) => el.data.search(searchString) >= 0);

  //here decides what list will be returned bases un the filtered state
const returnPostsLists = (state) => {
  if(state.isFiltered) {
    return state.filteredList;
  } else {
    return state.unfilteredList;
  }
};