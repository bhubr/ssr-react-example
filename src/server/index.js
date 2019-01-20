import express from 'express';
import cors from 'cors';
import path from 'path';
import { renderToString } from 'react-dom/server';
import React from 'react';
import serialize from 'serialize-javascript';
import { fetchPopularRepos } from '../shared/api';
import App from '../shared/App';

const PORT = 4040;
const app = express();

app.use(cors());
// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/api/posts', (req, res) => res.json([
  { id: 1, author: 'Robin Wieruch', title: 'React + Webpack 4 + Babel 7 Setup Tutorial', url: 'https://www.robinwieruch.de/minimal-react-webpack-babel-setup/' },
  { id: 2, author: 'Tyler McGinnis', title: 'Server Rendering with React and React Router', url: 'https://tylermcginnis.com/react-router-server-rendering/' },
  { id: 3, author: 'Aaron Young', title: 'How to Auto reload a full-stack JavaScript project using nodemon and webpack-dev-server', url: 'https://itnext.io/auto-reload-a-full-stack-javascript-project-using-nodemon-and-webpack-dev-server-together-a636b271c4e' },
  { id: 4, author: 'perilandmishap', title: 'Running a node express server using webpack-dev-server', url: 'https://stackoverflow.com/questions/35233291/running-a-node-express-server-using-webpack-dev-server#answer-41726825' },
  { id: 5, author: 'Anthony Ng', title: 'Use webpack with __dirname correctly', url: 'https://codeburst.io/use-webpack-with-dirname-correctly-4cad3b265a92' }
]));

app.get("*", (req, res, next) => {
  fetchPopularRepos()
    .then(data => {
      const markup = renderToString(
        <App data={data} />
      );

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>SSR with RR</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
          </head>

          <body>
            <div id="app">${markup}</div>

            <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
            <script src="/bundle.js" defer></script>
          </body>
        </html>
      `);

    });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
