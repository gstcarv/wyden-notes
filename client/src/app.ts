import socket from "./socket";
import $ from "jquery";
import { NoteModule } from "./modules/NoteModule";
import "./index.css";

$(() => {
    socket.on("connect", () => NoteModule.setup(socket));
});
