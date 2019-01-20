// shared/Navbar.js
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar () {
  const languages = [{
    name: 'All',
    param: 'all'
  }, {
    name: 'JavaScript',
    param: 'javascript',
  }, {
    name: 'Ruby',
    param: 'ruby',
  }, {
    name: 'Python',
    param: 'python',
  }, {
    name: 'Java',
    param: 'java',
  }];

  const posts = [1, 2, 3, 4, 5, 6];

  const liStyle = { listStyleType: 'none', display: 'inline-block', padding: '5px 10px' };

  return (
    <ul>
      {languages.map(({ name, param }) => (
        <li key={param} style={liStyle}>
          <NavLink activeStyle={{fontWeight: 'bold'}} to={`/popular/${param}`}>
            {name}
          </NavLink>
        </li>
      ))}
      <li style={liStyle}>|</li>
      <li key='all-posts' style={liStyle}>
        <NavLink activeStyle={{fontWeight: 'bold'}} to="/posts">
          All posts
        </NavLink>
      </li>
      {posts.map(id => (
        <li key={id} style={liStyle}>
          <NavLink activeStyle={{fontWeight: 'bold'}} to={`/posts/${id}`}>
            #{id}
          </NavLink>
        </li>
      ))}
    </ul>
  )
};