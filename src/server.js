var path = require('path');
var express = require('express');
var React = require('react');
var renderToString = require('react-dom/server').renderToString;
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server)

var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'production';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function (req, res) {
  var markup = renderToString(<LoginUI/>);
  return res.render('index', {markup})
})


io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    io.emit('chat message', socket.username + ':  ' + msg);
  });
  socket.on('add user', function (username) {
    //store username in session
    socket.username = username;
    io.sockets.emit('add user', socket.username)
  });
  socket.on('disconnect', function(username) {
    io.emit('disconnect', socket.username)
  })
})



server.listen(port, function(err){
  if(err){
    return console.error(err);
  }
  console.info('Server running on http://localhost:' + port);

});
