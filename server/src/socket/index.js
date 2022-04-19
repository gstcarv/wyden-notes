const { Server } = require("socket.io");
const NoteService = require("../services/NoteService");
const http = require("http");

const NoteSocket = {
    setup: (app) => {
        const server = http.createServer(app);

        const io = new Server(server, {
            cors: {
                origin: "*",
            },
        });

        io.on("connection", (socket) => {
            console.log("User Connected: " + socket.id);

            NoteSocket.onUserConnected(socket);

            socket.on("note", async (message) => {
                const note = await NoteSocket.onNoteReceived(message);
                io.emit("note", note);
            });
        });

        return server;
    },

    onUserConnected: async (socket) => {
        socket.emit("all_messages", await NoteService.getAll());
    },

    onNoteReceived: async (message) => await NoteService.saveNote({ message }),
};

module.exports = NoteSocket;
