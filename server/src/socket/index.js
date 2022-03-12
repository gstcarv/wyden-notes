const { Server } = require("socket.io");
const NoteService = require('../services/NoteService');
const http = require('http');

const NoteSocket = {
    setup: (app) => {
        const server = http.createServer(app);
        const io = new Server(server);

        io.on('connection', (socket) => {
            console.log('a user connected');
        });
        
        return server;
    }
}

module.exports = NoteSocket;
