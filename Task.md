# Socket.io Chatroom - Complete Lesson Plan

## Socket.io basics
What Are WebSockets?

* HTTP vs. WebSockets:
HTTP - Client requests → server responds → connection closes.
WebSockets - Persistent connection → server can push data anytime.

* Why Socket.io?
Library for real-time client-server communication.
Used in chats, live notifications, multiplayer games.

* Key Concepts
connection – When a client connects.
emit() – Sends a message (client→server or server→client).
on() – Listens for events.

* Basic example
In this repo you have a minimal exampleClient and exampleServer files provided in example folder. Analyse and run it (run server in terminal, than client in browser and inspect element -> network to see what happened)

* Your task:
# Minimal Socket.io Chatroom: What You Need to Build

Goal: Create a real-time chat where users on the same network (or via tunnel) can exchange messages.

1. Backend (Node.js + Socket.io)

Your tasks:

Set up a server that:
1) Creates an HTTP server (using Express).
2) Initializes Socket.io with CORS enabled (for cross-origin requests).
3) Listens for client connections.
4) Handle real-time events:
When a client connects:
    Store their connection.
    Send them all previous messages (if any).
When a client sends a message:
    Broadcast it to all connected clients.
    Store it in memory (array).
When a client disconnects:
    Clean up their connection.
    Run the server on port 3000.

2. Frontend (Vanilla JS or Vue.js)

Your tasks:

Create an HTML page with:
1) A message display area (scrollable).
2) Input fields for:
    Username (optional).
    Message text.
    A "Send" button (or Enter key submission).
3) Connect to the server using Socket.io:
4) Initialize a connection to http://SERVER_IP:3000. Handle connection success/errors.
5) Implement messaging logic:
When the user sends a message:
    Emit a send_message event to the server with:
    { user: username, text: message}. (user can be optional first)
When receiving messages (new_message event):
    Display them in the chat area with:
    [User]: Message. (user can be optional)

* Solution is provided in chat folder if stuck

4. Network Setup
# First try to test each on your own pc, run the server locally in terminal than open multiple tabs in browser as clients
    * Don't open html client with live server, just locally in browser

# For local testing (same WiFi):
Now, you want to test if the app is working for multiple users
One student runs the server (node server.js).
Others connect to the server’s local IP (e.g., http://192.168.1.100:3000).
(use ipconfig command to find your exact ip address)

* if working on the device of the student who ran it but not on the rest of the devices, 
it is probably the firewall blocking the connections

# For remote testing (tunnel) - if neccessary:

try using ngrok (e.g. ngrok http 3000)

- see ngrok docs if needed


* Resources to use:
# Socket.io docs (https://socket.io/docs/v4/)


* Homework:
Finish your task, if you haven't. Feel free to add aditional features to chat or just style it so it looks better.