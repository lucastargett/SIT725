var express = require("express");
var app = express()
var port = process.env.port || 3000;
const mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

// Mount projectRoutes
const projectRoutes = require('./routes/projects');
app.use('/api/projects', projectRoutes);

// Mount AddRoutes
const addRoutes = require('./routes/add');
app.use('/add', addRoutes);

app.listen(port, () => {
    console.log(`Serve is running on http://localhost:${port}`);
});