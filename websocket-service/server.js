const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', ws => {
    const sendMessage = () => {
        const message = `Hola desde websocket: ${new Date().toLocaleTimeString()}`;
        ws.send(message);
    };

    const intervalId = setInterval(sendMessage, 2000);

    ws.send('Bienvenido al servidor WebSocket');
    ws.on('message', message => {
        ws.send(`Echo: ${message}`);
    });

    ws.on('close', () => {
        console.log('Cliente desconectado');
        clearInterval(intervalId);
    });
});

console.log('WebSocket corriendo en ws://localhost:3000');