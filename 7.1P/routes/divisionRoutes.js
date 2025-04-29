const express = require('express');
const router = express.Router();
const divisionController = require('../controllers/divisionController');

router.post('/submit', divisionController.submitForm);

module.exports = router;