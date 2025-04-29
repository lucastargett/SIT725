var express = require("express");
var app = express()
const http = require('http').createServer(app); // Create HTTP server from app
const io = require('socket.io')(http);          // Pass http server to socket.io
var PORT = process.env.PORT || 3000;            
const mongoose = require('mongoose');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Mount Routes
// projectRoutes
const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);

// addRoutes
const addRoutes = require('./routes/add');
app.use('/add', addRoutes);

// divisionRoutes
const divisionRoutes = require('./routes/divisionRoutes');
app.use('/division', divisionRoutes);

// Socket connection logic
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnect');
    });

    // emit a random number every second
    setInterval(() => {
        const randomNum = Math.floor(Math.random() * 100);
        socket.emit('number', randomNum);
    }, 1000);
});

// Start Server
http.listen(PORT, () => {
    console.log(`Serve is running on http://localhost:${PORT}`);
});