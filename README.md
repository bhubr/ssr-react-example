# SSR React Boilerplate

Sources:

1. [React + Webpack 4 + Babel 7 Setup Tutorial](https://www.robinwieruch.de/minimal-react-webpack-babel-setup/)
2. [Server Rendering with React and React Router](https://tylermcginnis.com/react-router-server-rendering/)
3. [How to Auto reload a full-stack JavaScript project using nodemon and webpack-dev-server](https://itnext.io/auto-reload-a-full-stack-javascript-project-using-nodemon-and-webpack-dev-server-together-a636b271c4e)
4. [Running a node express server using webpack-dev-server](https://stackoverflow.com/questions/35233291/running-a-node-express-server-using-webpack-dev-server#answer-41726825)
5. [Use webpack with __dirname correctly](https://codeburst.io/use-webpack-with-dirname-correctly-4cad3b265a92)
6. [SSR and Server Only Modules](https://arunoda.me/blog/ssr-and-server-only-modules)

## Log

* On commit number 4 (trying to mix stuff from the #2 and #2 tutorials), got Webpack working to build both server + client apps, but without hot reloading. Also, the server had to be run from `dist` as a working dir.
* Finally got it by mixing info from tutorial #3 and SO post #4: gotta run `npm start` in a terminal, `npm run dev-server` in another and `npm run dev-client` in yet another.
* Next step: render React from server. Now the server on 4040 serves its own HTML page, while the server on 3030 gets `dist/devserver/index.html`. To get it working, had to use tutorial #5 in order to have the server @4040 to properly read `bundle.js` from `dist/public` (`__dirname` was incorrectly set).
* Use Webpack's [resolve.alias](https://webpack.js.org/configuration/resolve/#resolve-alias) option to get different APIs on client and server