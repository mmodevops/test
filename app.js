// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');




var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'src/resources/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('home');
})




var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running http://localhost:3000");
});

