const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const NoteSocket = require("./src/socket");
const config = require("./src/config");

const app = express();

mongoose.connect(config.DATABASE.getConnectionString()).then(() => {
    app.use(express.static("public"));

    const server = NoteSocket.setup(app);

    server.listen(3000, () => {
        console.log("🚀 App listening on *:3000 🚀");
    });
});
