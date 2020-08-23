const socket = io('https://socket-io-chat-room-app-node.herokuapp.com/');
const op = document.getElementById("op");
const handle = document.getElementById("handle");
const message = document.getElementById("message");
const btn = document.getElementById("send");
const feedback = document.getElementById("feedback");

btn.addEventListener('click', function(){
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = '';    
});

socket.on('chat', function(data){
    op.innerHTML += '<p><strong>'+data.handle+'</strong>: '+ data.message+'</p>';
    feedback.innerHTML = '';
});

// message.addEventListener('keypress', function(){
//     socket.emit('typing', handle.value);
// });

// socket.on('typing', function(data){
//     feedback.innerHTML = '<p><em>'+data+' is typing a message...</em></p>';
// });
