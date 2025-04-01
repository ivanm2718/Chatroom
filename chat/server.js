const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// Configure Socket.io to allow connections from any origin (for testing)
const io = new Server(server, {
  cors: { origin: "*" }
});

const messages = []; // Stores all messages

io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  // Send all past messages to the new user
  socket.emit('all_messages', messages);

  // Listen for new messages
  socket.on('send_message', (data) => {
    messages.push(data); // Save the message
    io.emit('new_message', data); // Broadcast to everyone
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});