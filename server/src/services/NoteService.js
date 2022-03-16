const NoteSchema = require("../schemas/NoteSchema");
const faker = require("@faker-js/faker").default;

const NoteService = {
    saveNote: async ({ message }) => {
        const color = faker.internet.color();
        const note = await NoteSchema.create({ message, color });

        return note;
    },
};

module.exports = NoteService;
