import socket from "./socket";
import $ from "jquery";
import { NoteModule } from "./modules/NoteModule";

$(() => {
    socket.on("connect", () => NoteModule.setup(socket));
});
