var socket = io();
socket.on('chat message', function(msg){
  $('#messages').append($('<li>').text(msg));
});
socket.on('info message', function(msg){
  $('#info').text(msg)
});
$(function(){
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
});

