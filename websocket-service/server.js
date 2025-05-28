const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('New client connected');

    const sendMessage = () => {
        const message = `Hello from WebSocket server! Time: ${new Date().toLocaleTimeString()}`;
        socket.send(message);
    };

    const intervalId = setInterval(sendMessage, 3000);

    socket.on('close', () => {
        console.log('Client disconnected');
        clearInterval(intervalId);
    });
});

console.log('WebSocket server is running on ws://localhost:8080');