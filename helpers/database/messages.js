import { io } from "socket.io-client";

function socketConnection() {

    const socket = io('http://localhost:3002');
    
    socket.on('connect', () => {
        console.log('connected')
    });
    
    return socket;
}


export {
    socketConnection
}