const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const NoteSocket = require("./src/socket");
const config = require("./src/config");

const app = express();

mongoose.connect(config.DATABASE.URL + config.DATABASE.NAME).then(() => {
    app.get("/", (req, res) => {
        res.redirect('https://notes-fe.loca.lt');
    });

    const server = NoteSocket.setup(app);

    server.listen(3000, () => {
        console.log("🚀 App listening on *:3000 🚀");
    });
});
