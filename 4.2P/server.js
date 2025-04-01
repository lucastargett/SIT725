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

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers provided');
    }
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is: ${sum}`);
});

// POST endpoint to add two numbers
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body; // Extract numbers from request body
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    const sum = parsedNum1 + parsedNum2;
    res.json({ message: `The sum of ${parsedNum1} and ${parsedNum2} is: ${sum}` });
});

const cardList = [
    {
        title: "Women",
        image: "images/womens.png",
        link: "Womens Division",
        description: "Description for Womens Division"
    },
    {
        title: "Mens",
        image: "images/mens.png",
        link: "Mens Division",
        description: "Description for Mens Division"
    },
    {
        title: "Adaptive",
        image: "images/adaptive.png",
        link: "Adaptive Division",
        description: "Description for Adaptive Division"
    },
];

app.get('/api/projects', async (req, res) => {
    const projects = await Project.find({});
    res.json({ statusCode: 200, data: projects, message: 'Success' });
});

app.listen(port, () => {
    console.log(`Serve is running on http://localhost:${port}`);
});