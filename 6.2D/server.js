var express = require("express");
var app = express()
var port = process.env.port || 3000;
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

// Start Server
app.listen(port, () => {
    console.log(`Serve is running on http://localhost:${port}`);
});