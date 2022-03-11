const mongoose = require('mongoose');

const NoteSchema = mongoose.model('Note', { message: String });

module.exports = NoteSchema;