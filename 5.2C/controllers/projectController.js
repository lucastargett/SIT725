const projectService = require('../services/projectService');

// Controller to handle GET /api/projects 
exports.getProjects = async (req, res) => {
    const projects = await projectService.getAllProjects();
    res.json({ 
        status: 200,
        data: projects,
        message: 'Success'
    });
}