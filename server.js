var app = require('express')();
var http = require('http').createServer(app);
const PORT = 3000;
var io = require('socket.io')(http);

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => { 
    console.log('new client connected');
    socket.emit('chat message', null);
});
