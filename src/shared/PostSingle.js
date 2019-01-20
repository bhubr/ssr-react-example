// shared/PostSingle.js
import React from 'react';

const PostSingle = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <p className="text-italic">{post.author}</p>
    <a href={post.url} className="btn btn-primary">Read &raquo;</a>
  </div>
);

export default PostSingle;
