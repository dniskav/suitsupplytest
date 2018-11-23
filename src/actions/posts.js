/**
 * action to be dispatched and gain accces to the Redux store
 */
import { NEW_POST, DELETE_POST, POSTS_LOADED, POSTS_SEARCH } from './actionTypes';

export const postsLoaded = (postsList) => ({ 
  type: POSTS_LOADED,
  postsList,
}); 

export const newPost = (post) => ({ 
  type: NEW_POST,
  post,
}); 

export const deletePost = (id) => ({
  type: DELETE_POST,
  id,
}); 

export const searchPost = (searchString) => ({
  type: POSTS_SEARCH,
  searchString,
}); 
