import React, { Component } from 'react';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import { newPost, postsLoaded} from '../../actions/posts';
import PostList from '../PostList';
import NewPost from '../NewPost';
import './App.css';
import postsListExample from '../../data';

class App extends Component {
  state = {
    newPostTitle: '',
    newPostData: '',
  }
  componentDidMount = () => {
    this.getPosts();
  }
  getPosts = () => {
    const url = 'API/postsList';
    fetch(url, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then((data) => {
        // I dont have a backend or light server to mock the response then I use a json example 
        // to (postsListExample) emulate it
        this.props.postsLoaded(postsListExample);
      });
  };
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
    postsLoaded: (postList) => {
      dispatch(postsLoaded(postList));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
