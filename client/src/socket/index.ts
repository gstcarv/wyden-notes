import io from "socket.io-client";

export default io(process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://wyden-notes.vercel.app");
