const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema(
    {
        message: String,
        color: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Note", NoteSchema);
