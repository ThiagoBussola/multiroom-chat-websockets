//importação das configurações do servidor
var app = require('./config/server');

//Parametrizando a porta de escuta
var server = app.listen(3000, function() {
    console.log('Servidor online')
})

var io = require('socket.io').listen(server);

// criando conexão por websocket
io.on('connection', function(socket){
    console.log('Usuário conectou')

    socket.on('disconnect', function() {
        console.log('Usuário desconectou')
    })
})