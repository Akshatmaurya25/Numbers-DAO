import { WebSocketServer } from 'ws';
import http from 'http';

const server = http.createServer();
const wss = new WebSocketServer({ server });

wss.on('connection', (socket) => {
  console.log('✅ Client connected');

  // ✅ Listen for messages from clients
  socket.on('message', (message) => {
    console.log('📩 Received:', message.toString());

    // ✅ Broadcast the message to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === 1) {
        client.send(message.toString());
      }
    });
  });

  // ✅ Handle disconnect
  socket.on('close', () => {
    console.log('❌ Client disconnected');
  });
});

server.listen(3001, () => {
  console.log('✅ WebSocket running on ws://localhost:3001');
});

// ✅ 🔥 THIS LINE KEEPS THE SERVER ALIVE FOREVER
process.stdin.resume();
