// shared/PostSingle.js
import React from 'react';

const PostSingle = props => {
  const post = props.staticContext.data;
  return (
    <div>
      <h2>{post.title}</h2>
      <p className="text-italic">{post.author}</p>
      <p>{post.content}</p>
      <a href={post.url} className="btn btn-primary">Read original article &raquo;</a>
    </div>
  );
};

export default PostSingle;
