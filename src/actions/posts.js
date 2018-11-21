import { NEW_POST, DELETE_POST, POSTS_LOADED } from './actionTypes';

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
