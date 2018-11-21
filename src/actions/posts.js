import { NEW_POST, DELETE_POST } from './actionTypes';

export const newPost = (post) => ({ 
  type: NEW_POST,
  post,
}); 

export const deletePost = (id) => ({
  type: DELETE_POST,
  id,
}); 
