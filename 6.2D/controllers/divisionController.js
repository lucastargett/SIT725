const divisionService = require('../services/divisionService');

exports.submitForm = async (req, res) => {
  try {
    const newEntry = await divisionService.addEntry(req.body);
    res.status(201).json({ message: 'Entry submitted', data: newEntry });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit entry' });
  }
};