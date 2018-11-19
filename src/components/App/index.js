import React, { Component } from 'react';
import Flexbox from 'flexbox-react';
import PostList from '../PostList';
import NewPost from '../NewPost';
import './App.css';

const posts = [
  { id: 0, title: 'lorem title', data: 'lorem ipsum dolor sit amet blandit plantendo', date: 1542599219926 },
];

class App extends Component {
  state = {
    postsList : [],
    newPostTitle: '',
    newPostData: '',
  }
  componentDidMount = () => {
    this.setState({ postsList:  posts})
  }
  getPosts = () => this.state.posts;
  deletePost = (id) => console.log(id); 
  addNewPost = () => {
    this.setState({newPostData:'', newPostTitle: '', postsList: [...this.state.postsList, { id: this.state.postsList.length, title: this.state.newPostTitle, data: this.state.newPostData, date: new Date().getTime() }] });
  };
  newPostTitle = (ev) => this.setState({ newPostTitle: ev.target.value });
  newPostData = (ev) => this.setState({ newPostData: ev.target.value }); 
  render() {
    const { postsList } = this.state;
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

export default App;
