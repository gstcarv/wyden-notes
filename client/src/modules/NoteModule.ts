import { NoteSocketClient } from "../socket/note";
import $ from "jquery";
import { Socket } from "socket.io-client";
import { NoteMessage } from "../types/NoteMessage";
import { NoteUtils } from "../utils/notes";

export const NoteModule = {
    setup: (socket: Socket) => {
        socket.on("all_messages", (data: NoteMessage[]) => {
            $(".sent-notes").html(data.reverse().map(NoteUtils.createNoteElement) as any);
        });

        $(".btn-send-message").on("click", (e) => {
            const noteField = $(".note-field");

            let noteMessage = noteField.val() as string;

            noteMessage = noteMessage.trim();
            noteMessage = noteMessage.replace("[\uFEFF-\uFFFF]", "");

            if (!noteMessage) {
                alert();
            }

            if (noteMessage) {
                NoteSocketClient.sendNote(noteMessage.toString());
            }

            noteField.val("");

            e.preventDefault();
        });

        $(".click-to-write").on("click", (e) => {
            $(".click-to-write").css({ display: "none" });
            $("textarea").trigger("focus");
        });
    },
};
