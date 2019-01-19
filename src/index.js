import React from 'react';
import ReactDOM from 'react-dom';
import App from './shared/App';

const title = 'React Webpack Babel Nodemon';

ReactDOM.render(
  <App data={title} />,
  document.getElementById('app')
);

module.hot.accept();