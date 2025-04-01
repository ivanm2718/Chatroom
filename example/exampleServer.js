const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*" // Temporary for development, enable cors connection for all origins
  }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  
  socket.on("ping", (data) => {
    console.log("Received ping:", data);
    socket.emit("pong", "Server reply: " + data);
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});