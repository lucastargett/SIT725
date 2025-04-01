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
    title: "Kitten 1",
    image: "images/kitten-1.jpg",
    link: "About Kitten 1",
    description: "Fluffy and adorable kitten",
  },
  {
    title: "Kitten 2",
    image: "images/kitten-2.jpg",
    link: "About Kitten 2",
    description: "Loves to nap in sunbeams",
  },
];

Project.insertMany(sampleData)
  .then(() => {
    console.log("Sample data inserted");
    mongoose.connection.close();
  })
  .catch(err => console.error(err));