import express from 'express';
import cors from 'cors';
import path from 'path';
import { renderToString } from 'react-dom/server';
import App from '../shared/App';
import React from 'react';

const PORT = 4040;
const app = express();

app.use(cors());
// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static('public'));

app.get('/api/posts', (req, res) => res.json([
  { id: 1, title: 'React + Webpack 4 + Babel 7 Setup Tutorial', url: 'https://www.robinwieruch.de/minimal-react-webpack-babel-setup/' },
  { id: 2, title: 'Server Rendering with React and React Router', url: 'https://tylermcginnis.com/react-router-server-rendering/' },
  { id: 3, title: 'How to Auto reload a full-stack JavaScript project using nodemon and webpack-dev-server', url: 'https://itnext.io/auto-reload-a-full-stack-javascript-project-using-nodemon-and-webpack-dev-server-together-a636b271c4e' },
  { id: 4, title: 'Running a node express server using webpack-dev-server', url: 'https://stackoverflow.com/questions/35233291/running-a-node-express-server-using-webpack-dev-server#answer-41726825' }
]));

app.get("*", (req, res, next) => {
  const markup = renderToString(
    <App />
  )

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
