'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// ======================== CRA Configuration Ends ==========================

/**
 * Express server to replace webpack-dev-server
 * Source: https://medium.com/@johnstew/webpack-hmr-with-express-app-76ef42dbac17
 */
const express = require('express');
const app = express();
const path = require('path');

// attach webpack middleware
// const webpack = require('webpack');
// const webpackConfigFactory = require('./config/webpack.config.js');
// const webpackConfig = webpackConfigFactory(process.env.DEV_MODE);
// const compiler = webpack(webpackConfig);

// /**
//  * For HMR to work, use the webpack-dev-middleware and webpack-hot-middleware modules.
//  * These will allow the Express app to track changes, and push those changes to the client code.
//  */
// const isHMREnabled = process.env.REACT_APP_EXPRESS_HMR_ENABLED === 'true';
// console.log(`isHMREnabled: `, isHMREnabled);
// app.use(
//   require('webpack-dev-middleware')(compiler, {
//     // watchOptions: {
//     //   ignored: '*'
//     // },
//     // watch: false,
//     noInfo: true,
//     stats: {
//       colors: true
//     },
//     publicPath: webpackConfig.output.publichPath
//   })
// );
// if (isHMREnabled) {
//   app.use(require('webpack-hot-middleware')(compiler));
// }

// static assets
app.use(express.static('build'));

// main route
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './build/index.html'));
});

// app start up
const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));



