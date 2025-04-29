const express = require('express');
const router = express.Router();

// Import controller
const projectController = require('../controllers/projectController');

// Define the GET route for /api/projects
router.get('/', projectController.getProjects);

// Export this router so it can be used in server.js
module.exports = router;