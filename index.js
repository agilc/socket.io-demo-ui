let express = require('express');
let app = express();
let cors = require('cors');

app.use(cors());

// let server = require('http').createServer(app);
let socket = require('socket.io');
server = app.listen(8080, function(){
  console.log('server is running on port 8080')
});
// io = socket(server);
var io = require('socket.io').listen(server);

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', function(data){
    io.emit('RECEIVE_MESSAGE', data);
  });
});