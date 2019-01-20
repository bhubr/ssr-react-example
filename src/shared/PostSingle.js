// shared/PostSingle.js
import React, { Component } from 'react';

class PostSingle extends Component {
  constructor(props) {
    super(props)

    let post
    if (__isBrowser__) {
      post = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      post = props.staticContext.data
    }

    this.state = {
      post
    };
  }

  render() {
    const { post } = this.state;
    return (
      <div>
        <h2>{post.title}</h2>
        <p className="text-italic">{post.author}</p>
        <p>{post.content}</p>
        <a href={post.url} className="btn btn-primary">Read original article &raquo;</a>
      </div>
    );
  }
}

export default PostSingle;
