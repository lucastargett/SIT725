var express = require("express")
const path = require('path'); // Make sure to include this
var app = express()
var port = process.env.port || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// GET endpoint to calculate the square of a number
// Example: http://localhost:3000/square?num=5
app.get('/square', (req, res) => {
  const num = parseFloat(req.query.num);
  
  if (isNaN(num)) {
    return res.send("Error: Please provide a valid number using query parameter 'num'.");
  }
  
  const square = num * num;
  res.send(`The square of ${num} is: ${square}`);
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
