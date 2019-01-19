import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
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
      <div>
        <h1>React SSR</h1>
        <p><code>data</code> prop: {data ? data : 'N/A'}</p>
        {
          posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>Link: <a href={post.url}>{post.url}</a></p>
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
