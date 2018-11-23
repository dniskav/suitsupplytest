import React, { Component } from 'react';
import { connect } from 'react-redux';
import Flexbox from 'flexbox-react';
import { newPost, postsLoaded} from '../../actions/posts';
import PostList from '../PostList';
import NewPost from '../NewPost';
import './App.css';
import postsListExample from '../../data';
import SearchBox from '../SearchBox';

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
  newPostTitle = (ev) => this.setState({ newPostTitle: ev.target.value });//saves the title in the internal state while writing
  newPostData = (ev) => this.setState({ newPostData: ev.target.value }); //saves the content in the internal state while writing
  render() {
    const { postsList } = this.props;
    return (
      <Flexbox className="App" flexDirection="column">
        <header className="App-header">
          Post List!
          <SearchBox />
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

//to share global Redux state with the component by props
const mapStateToProps = (state) => ({
  counter: state.count,
  postsList: state.postsList,
});

//to share Redux actions with the component by props
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

//connect all with redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
