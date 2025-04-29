exports.getAdd = (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).send('Invalid numbers provided');
    }
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is: ${sum}`);
};

exports.postAdd = (req, res) => {
    const { num1, num2 } = req.body;
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    const sum = parsedNum1 + parsedNum2;
    res.json({ message: `The sum of ${parsedNum1} and ${parsedNum2} is: ${sum}` });
};