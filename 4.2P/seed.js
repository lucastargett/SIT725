const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String,
});

const Project = mongoose.model('Project', ProjectSchema);

const sampleData = [
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

Project.insertMany(sampleData)
  .then(() => {
    console.log("Sample data inserted");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));