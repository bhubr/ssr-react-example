import React from 'react';
import ReactDOM from 'react-dom';
import App from './shared/App';

const title = 'React Webpack Babel Nodemon';

ReactDOM.hydrate(
  <App data={title} />,
  document.getElementById('app')
);

module.hot.accept();