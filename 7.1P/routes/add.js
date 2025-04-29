const express = require('express');
const router = express.Router();
const addController = require('../controllers/addController');

// Connect each controller function to the route
router.get('/', addController.getAdd);
router.post('/', addController.postAdd);

module.exports = router;