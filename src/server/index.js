import express from 'express';
import cors from 'cors';
import path from 'path';
import serialize from 'serialize-javascript';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';

import { fetchPopularRepos } from '../shared/api';
import App from '../shared/App';
import routes from '../shared/routes';
import posts from '../shared/data/posts';

const PORT = 4040;
const app = express();

app.use(cors());
// We're going to serve up the public
// folder since that's where our
// client bundle.js file will end up.
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/api/posts', (req, res) => res.json(posts));

app.get("*", (req, res, next) => {
  const activeRoute = routes.find(
    (route) => matchPath(req.url, route)
  ) || {};

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise.then(data => {
    const markup = renderToString(
      <StaticRouter location={req.url} context={{}}>
        <App data={data} />
      </StaticRouter>
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
  }).catch(next);
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
