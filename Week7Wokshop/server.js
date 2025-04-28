const express = require('express');
const app = express();
const http = require('http').createServer(app); // Create HTTP server from app
const io = require('socket.io')(http);          // Pass http server to socket.io

const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static('public'));

// Socket connection logic
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  // Emit a random number every second
  setInterval(() => {
    const randomNum = Math.floor(Math.random() * 100);
    socket.emit('number', randomNum);
  }, 1000);
});

// Start server
http.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});