import { NoteMessage } from "../types/NoteMessage";
import tinycolor from "tinycolor2";

export const NoteUtils = {
    createNoteElement: (note: NoteMessage) => {
        const color = tinycolor(note.color);

        const fontColor = color.isDark() ? "#fff" : "#000";

        return `
            <div class="note" style="background-color: ${note.color}">
                <p style="color: ${fontColor}">${note.message}</p>
            </div>
        `;
    },
};
