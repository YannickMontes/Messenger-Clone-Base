require('dotenv/config');
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, { cors: { origin: "*" } });

app.get("/", (req, res) => {
    res.send("A utiliser pour du debug si vous avez besoin...");
});

server.listen(process.env.PORT, () => {
    console.log("Server is listening");
});

io.on("connection", socket => {
    //Penser a conserver le socket pour pouvoir s'en servir plus tard
    //Remplacer les callbacks par des fonctions dans d'autres fichiers.

    socket.on("@authenticate", () => {});
    socket.on("@getUsers", () => {});
    socket.on("@getOrCreateOneToOneConversation", () => {});
    socket.on("@createManyToManyConversation", () => {});
    socket.on("@getConversations", () => {});
    socket.on("@postMessage", () => {});
    socket.on("@seeConversation", () => {});
    socket.on("@replyMessage", () => {});
    socket.on("@editMessage", () => {});
    socket.on("@reactMessage", () => {});
    socket.on("@deleteMessage", () => {});

    socket.on("disconnect", (reason) =>{ });
});

// Addresse du serveur démo: wss://teach-vue-chat-server.glitch.me