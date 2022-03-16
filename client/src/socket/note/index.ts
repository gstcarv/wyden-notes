import socket from "..";

export const NoteSocketClient = {
    sendNote(message: string) {
        socket.emit("note", message);
    },
};
