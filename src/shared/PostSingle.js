// shared/PostSingle.js
import React, { Component } from 'react';
import { fetchSinglePost } from 'api';

class PostSingle extends Component {
  constructor(props) {
    super(props)

    let post
    if (__isBrowser__) {
      post = window.__INITIAL_DATA__|| null;
      delete window.__INITIAL_DATA__;
    } else {
      post = props.staticContext.data;
    }

    this.state = {
      post
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { post } = this.state;
    if(!post) {
      this.fetchPost(id);
    }
  }

  fetchPost(id) {
    this.props.fetchInitialData(id)
      .then(post => this.setState({ post }));
  }

  componentDidUpdate(prevProps) {
    const { id } = this.props.match.params;
    if(id !== prevProps.match.params.id) {
      this.fetchPost(id);
    }
  }

  render() {
    const { post } = this.state;
    if(!post) {
      return <div></div>;
    }
    return (
      <div>
        <h2>{post.title}</h2>
        <p style={{fontStyle: 'italic', color: '#666'}}>{post.author}</p>
        <p>{post.content}</p>
        <a href={post.url} className="btn btn-primary">Read original article &raquo;</a>
      </div>
    );
  }
}

export default PostSingle;
