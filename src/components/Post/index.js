/**
 * Post component, this component manage a single post, shows title bar and readmore link 
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import PropTypes from 'prop-types';
import { deletePost } from '../../actions/posts';


const PostTitle = ({ title, date, deletePost, id }) => (
  <Flexbox className="post-title" justifyContent="space-between">
    <span>{title}</span>
    <span>{new Date(date).toLocaleString()}</span>
    <button onClick={() => deletePost(id)} >Delete</button>
  </Flexbox>
);

PostTitle.propTypes = {
  title: PropTypes.string,
  date: PropTypes.number,
  deletePost: PropTypes.func,
  id: PropTypes.number,
};

class PostContent extends Component {
  state = {
    expanded: false,
    overflowed: false, 
  }
  readMore = () => {
    this.setState({ expanded: !this.state.expanded })
  }
  componentDidMount() {
    const element = this.element;
    const overflowed = element.offsetHeight < element.scrollHeight ||
                                   element.offsetWidth < element.scrollWidth;
    this.setState({ overflowed });
  }  
  render() {
    const { data } = this.props;
    const { expanded, overflowed } = this.state;
    return (
      <Flexbox className="read-more" flexDirection="column">
        <div ref={(el) => {this.element = el}} className={expanded ? 'post-data-expaned' : 'post-data'} ><span>{data}</span></div>
        { overflowed &&
        <div onClick={this.readMore} className="read-more-trigger">
          {expanded && <span style={{color: 'red'}}>Close</span>}
          {!expanded && <span style={{color: 'green'}}>Read more...</span>}
        </div>
        }
      </Flexbox>
    )
  }
};

PostContent.propTypes = {
  data: PropTypes.any,
}

const Post = ({ id, title, data, date, deletePost }) => (
  <Flexbox flexDirection="column">
    <PostTitle title={title} date={date} deletePost={deletePost} id={id} />
    <PostContent data={data} />
  </Flexbox>
);

Post.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  data: PropTypes.any,
  date: PropTypes.number,
  deletePost: PropTypes.func,
}

//to share Redux actions with the component by props
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (postId) => {
      dispatch(deletePost(postId));
    },
  }
}
//conect component with redux
export default connect(null, mapDispatchToProps)(Post);

