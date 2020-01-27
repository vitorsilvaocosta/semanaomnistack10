import socketio from 'socket.io-client';

// nao colocar socketio.create da pau
const socket = socketio('http://192.168.0.3:3333', {
    autoConnect: false,
    transports:["websocket"]
});

function subscribeToNewDevs (subscribeFunction){
    socket.on('newDev' , subscribeFunction);
}

function connect(latitude , longitude, techs){
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };

    socket.connect();
};

function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
};

export {
    connect,
    disconnect,
    subscribeToNewDevs
};