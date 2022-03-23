import { NoteSocketClient } from "../socket/note";
import $ from "jquery";

export const NoteModule = {
    setup: () => {
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
