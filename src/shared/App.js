import React, { Component } from 'react';
import Grid from './Grid';
import PostList from './PostList.js';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import NoMatch from './NoMatch';

class App extends Component {
  constructor(props) {
    console.log(__isBrowser__ ? 'Running in browser' : 'Running in Node.js');
    super(props);
    this.state = {
      posts: []
    };
  }

  render() {
    const { data } = this.props;
    const { posts } = this.state;
    return (
      <div className="container">
        <Navbar />
        <h1>React SSR</h1>

        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <C {...props} {...rest} />
              )}
            />
          ))}
          <Route render={(props) => <NoMatch {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
