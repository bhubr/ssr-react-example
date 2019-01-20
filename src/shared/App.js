import React, { Component } from 'react';
import Grid from './Grid';
import PostList from './PostList.js';

class App extends Component {
  constructor(props) {
    console.log(__isBrowser__ ? 'Running in browser' : 'Running in Node.js');
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch('/api/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    const { data } = this.props;
    const { posts } = this.state;
    return (
      <div className="container">
        <h1>React SSR</h1>
        <div className="row">
          <div className="col-sm-6">
            <PostList posts={posts} />
          </div>
          <div className="col-sm-6">
            <Grid data={data} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
