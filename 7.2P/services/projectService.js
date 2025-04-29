const Project = require('../models/projectModel');

// Fetch all projects from the database
const getAllProjects = () => {
  return Project.find({});
};

const addProject = (projectData) => {
    const project = new Project(projectData);
    return project.save();
  };

module.exports = {
  getAllProjects,
  addProject
};