var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');
var PORT = 4200;

// serve static files from the server
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
  io.emit('info message', 'A user has connected', {'for': 'everyone'});

  socket.on('chat message', function(msg){
    io.emit('chat message', msg, {'for': 'everyone'});
  });

  socket.on('disconnect', function(){
    io.emit('info message', 'A user has disconnected', {'for': 'everyone'});
  });

});

http.listen(PORT, function(){
  console.log('[UP] http://bunshin:'+ PORT)
});
