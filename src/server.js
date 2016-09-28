var path = require('path');
var express = require('express');
var React = require('react');
var renderToString = require('react-dom/server').renderToString;
var ChatApp = require('./components/ChatApp');

var app = express();
var server = require('http').createServer(app);

var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'production';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function (req, res) {
  var markup = renderToString(<ChatApp/>);
  return res.render('index', {markup})
})

server.listen(port, function(err){
  if(err){
    return console.error(err);
  }
  console.info('Server running on http://localhost:' + port);
});
