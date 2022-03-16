const NoteSchema = require('../schemas/NoteSchema');

const NoteService = {
    saveNote: async ({ message }) => {
        const note = await NoteSchema.create({ message });

        return note;
    }
}

module.exports = NoteService;