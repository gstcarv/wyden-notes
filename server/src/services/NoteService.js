const NoteSchema = require("../schemas/NoteSchema");

const NoteService = {
    saveNote: async ({ message }) => {
        const availableColors = [
            "#1abc9c",
            "#2ecc71",
            "#3498db",
            "#9b59b6",
            "#34495e",
            "#16a085",
            "#27ae60",
            "#2980b9",
            "#8e44ad",
            "#2c3e50",
            "#f1c40f",
            "#e67e22",
            "#e74c3c",
            "#95a5a6",
            "#f39c12",
            "#d35400",
            "#c0392b",
            "#bdc3c7",
            "#8c7ae6",
            "#40739e",
            "#f8a5c2",
            "#546de5",
            "#cf6a87",
            "#786fa6",
            "#f3a683",
        ];

        const random = Math.floor(Math.random() * availableColors.length - 1);

        const color = availableColors[random];

        const note = await NoteSchema.create({ message, color });

        return note;
    },

    getAll: () => NoteSchema.find(),
};

module.exports = NoteService;
