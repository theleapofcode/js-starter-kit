import express from 'express';
import path from 'path';
import open from 'open';
import chalk from 'chalk';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
const app = express();

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../src/index.html')));

app.listen(port, err => {
  if (err) {
    console.log(chalk.red('Error in starting dev server'), err);
  } else {
    console.log(chalk.green('Starting app in dev mode'));
    open('http://localhost:' + port);
  }
});
