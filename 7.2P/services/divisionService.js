const DivisionEntry = require('../models/divisionEntryModel');

exports.addEntry = (entryData) => {
  const entry = new DivisionEntry(entryData);
  return entry.save();
};