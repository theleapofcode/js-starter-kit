var express = require('express');
var path = require('path');
var open = require('open');
var chalk = require('chalk');

var port = 3000;
var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(chalk.red('Error in starting dev server'), err);
  } else {
    open('http://localhost:' + port);
  }
});
