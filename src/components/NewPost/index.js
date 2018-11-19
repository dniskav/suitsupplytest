import React from 'react'
import PropTypes from 'prop-types';
import Flexbox from 'flexbox-react';

const NewPost = ({ onChangeTitle, onChangeData, savePost, title, data }) => (
    <Flexbox flexDirection="column" className="new-post-container">
        <span>Add new Post</span>
        <input type="text" value={title} onChange={onChangeTitle} placeholder="Post Title"/>
        <textarea value={data} onChange={onChangeData} placeholder="Post Content" />
        <button onClick={savePost} type="reset" className="button-base" >Add Post</button>
    </Flexbox>
);

NewPost.propTypes = {
    onChangeTitle: PropTypes.func,
    onChangeData: PropTypes.func,
    savePost: PropTypes.func.isRequired,
}

export default NewPost;
