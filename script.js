const express = require('express');
const app = express();

app.use('/store', function(req, res, next){
  console.log('This is a middleware on a /store request');
  next();
});

app.get('/', function (req, res) {
  res.send('Hello world!');
});

app.get('/store', function (req, res) {
  res.send('This is the shop!');
});

app.listen(3000);
app.use(function (req, res, next) {
  res.status(404).send("I'm sorry, we coudln't find what you were looking for!")
});
