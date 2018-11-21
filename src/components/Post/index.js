import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import { deletePost } from '../../actions/posts';


const PostTitle = ({ title, date, deletePost, id }) => (
  <Flexbox className="post-title" justifyContent="space-between">
    <span>{title}</span>
    <span>{new Date(date).toLocaleString()}</span>
    <button onClick={() => deletePost(id)} >Delete</button>
  </Flexbox>
);

const PostContent = ({ data }) => (
  <span className="post-data">{data}</span>
);

class Post extends PureComponent {
  render() {
    const { id, title, data, date, deletePost } = this.props;
    return (
      <Flexbox flexDirection="column">
        <PostTitle title={title} date={date} deletePost={deletePost} id={id} />
        <PostContent data={data} />
      </Flexbox>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (postId) => {
      dispatch(deletePost(postId));
    },
  }
}

export default connect(null, mapDispatchToProps)(Post);

