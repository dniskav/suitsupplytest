import React, { Component } from 'react';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import { newPost} from '../../actions/posts';
import PostList from '../PostList';
import NewPost from '../NewPost';
import './App.css';

class App extends Component {
  state = {
    newPostTitle: '',
    newPostData: '',
  }
  componentDidMount = () => {
    this.getPosts();
  }
  getPosts = () => console.log('loading post from backend!');
  addNewPost = () => {
    this.props.newPost({
      id: this.props.postsList.length,
      title: this.state.newPostTitle,
      data: this.state.newPostData,
      date: new Date().getTime(),
    });
    this.setState({newPostData:'', newPostTitle: ''});
  };
  newPostTitle = (ev) => this.setState({ newPostTitle: ev.target.value });
  newPostData = (ev) => this.setState({ newPostData: ev.target.value }); 
  render() {
    const { postsList } = this.props;
    return (
      <Flexbox className="App" flexDirection="column">
        <header className="App-header">
          Post List!
        </header>
        <PostList list={postsList} />
        <NewPost 
          title={this.state.newPostTitle}
          data={this.state.newPostData}
          onChangeTitle={this.newPostTitle}
          onChangeData={this.newPostData}
          savePost={this.addNewPost} 
        />
      </Flexbox>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.count,
  postsList: state.postsList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    newPost: (post) => {
      dispatch(newPost(post));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
