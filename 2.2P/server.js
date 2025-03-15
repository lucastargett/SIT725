var express = require("express");
const path = require("path");
var app = express()
var port = process.env.port || 3000;

// Middleware to parse JSON bodies (for post requests)
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')))

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

app.listen(port, () => {
    console.log(`Serve is running on http://localhost:${port}`);
});