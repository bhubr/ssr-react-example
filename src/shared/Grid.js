// shared/Grid.js
import React, { Component } from 'react';

class Grid extends Component {
  constructor(props) {
    super(props)

    let repos
    if (__isBrowser__) {
      repos = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      repos = props.staticContext.data
    }

    this.state = {
      repos,
    };
  }

  render() {
    const { repos } = this.state;

    return (
      <div className="row">
        {repos.map(({ name, owner, stargazers_count, html_url }) => (
          <div className="col-sm-6" key={name}>
            <div className="card mb-2">
              <div className="card-body">
                <h5 className="card-title">@{owner.login}</h5>
                <p className="card-text">{stargazers_count} stars</p>
                <a href={html_url} className="btn btn-primary">{ `${name}'s profile`}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;
