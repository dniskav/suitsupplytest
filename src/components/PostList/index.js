import React from 'react';
import Post from '../Post';

const PostList = ({ list }) => (
  <div>
    {
      list.sort((a, b) => b.date - a.date).map((item) => (
        <Post key={item.id} title={item.title} data={item.data} date={item.date} id={item.id}/>
      ))
    }
  </div>
);

export default PostList;
