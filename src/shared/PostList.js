// shared/PostList.js
import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props)

    let posts
    if (__isBrowser__) {
      posts = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      posts = props.staticContext.data
    }

    this.state = {
      posts
    };
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        {
          posts.map(post => (
            <div key={post.id} className="card mb-2">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.author}</p>
                <a href={post.url} className="btn btn-primary">Read &raquo;</a>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default PostList;
