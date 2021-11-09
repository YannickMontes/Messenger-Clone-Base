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

    socket.on("@authenticate", ({ username, password }, callback) => { callback({code:"SUCCESS", data:{}}); });
    
    socket.on("@getUsers", ({token}, callback) => { callback({code:"SUCCESS", data:{}}); });
    socket.on("@getOrCreateOneToOneConversation", ({token, username}, callback) => { callback({code:"SUCCESS", data:{}});  });
    socket.on("@createManyToManyConversation", ({token, usernames}, callback) => {callback({code:"SUCCESS", data:{}});});
    socket.on("@getConversations", ({token}, callback) => {callback({code:"SUCCESS", data:{}});});
    
    socket.on("@postMessage", ({token, conversation_id, content}, callback) => {callback({code:"SUCCESS", data:{}});});
    socket.on("@seeConversation", ({token, conversation_id, message_id}, callback) => {callback({code:"SUCCESS", data:{}}); });
    socket.on("@replyMessage", ({token, conversation_id, message_id, content}, callback) => {callback({code:"SUCCESS", data:{}});});
    socket.on("@editMessage", ({token, conversation_id, message_id, content}, callback) => {callback({code:"SUCCESS", data:{}});});
    socket.on("@reactMessage", ({token, conversation_id, message_id, reaction}) => {callback({code:"SUCCESS", data:{}});});
    socket.on("@deleteMessage", ({token, conversation_id, message_id, content}) => {callback({code:"SUCCESS", data:{}});});

    socket.on("disconnect", (reason) =>{ });
});

// Addresse du serveur démo: wss://teach-vue-chat-server.glitch.me