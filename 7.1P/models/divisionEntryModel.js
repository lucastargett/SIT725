const mongoose = require('mongoose');

const DivisionEntrySchema = new mongoose.Schema({
  division: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

module.exports = mongoose.model('DivisionEntry', DivisionEntrySchema);