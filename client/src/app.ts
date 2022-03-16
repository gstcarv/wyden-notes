import socket from "./socket";
import $ from "jquery";
import { NoteSocketClient } from "./socket/note";

$(() => {
    socket.on("connect", () => {
        $("#noteForm").on("submit", (e) => {
            const noteField = $("#addnote");

            const noteMessage = noteField.val();

            if (noteMessage) {
                NoteSocketClient.sendNote(noteMessage.toString());
            }

            noteField.val("");

            e.preventDefault();
        });
    });
});
