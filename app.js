const express = require('express');
const app = express();
const socket = require('socket.io');

const server = app.listen(process.env.PORT || 8080);

app.use(express.static('public'));

const io = socket(server);

io.on('connection', function(socket){
    console.log("made socket connection");

    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
    });

    // socket.on('typing', function(data){
    //     socket.broadcast.emit('typing', data);
    // });
});