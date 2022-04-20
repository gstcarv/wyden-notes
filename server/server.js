const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const NoteSocket = require("./src/socket");
const config = require("./src/config");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect(config.DATABASE.getConnectionString()).then(() => {
    app.use(express.static("public"));

    const server = NoteSocket.setup(app);

    server.listen(config.PORT, () => {
        console.log(`🚀 App listening on *:${config.PORT} 🚀`);
    });
});
