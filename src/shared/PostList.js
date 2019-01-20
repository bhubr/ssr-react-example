// shared/PostList.js
import React from 'react';

const PostList = props => {
  const posts = props.staticContext.data;
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
};

export default PostList;
