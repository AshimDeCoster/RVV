var util = require("util"), io = require("socket.io"),
Player = require("./Player").Player;
var socket, players;

function init() {
    players = [];
    console.log("socket initialized");
    socket = io.listen(3000);
    
    //console.log(socket);
    //gebruik enkel WebSocket
    // socket.configure(function () {
    //socket.set("transports", ["websocket"]);
    socket.set('transports', ['websocket', 'xhr-polling']);
        socket.set("log level", 2);
   // });

   setEventHandlers();
};
var setEventHandlers = function () {
    socket.sockets.on("connection", onSocketConnection);
};
function onSocketConnection(client) {   
    util.log("New player has connected: " + client.id);
    client.on("disconnect", onClientDisconnect);
    client.on("new player", onNewPlayer);
    client.on("move player", onMovePlayer);
    client.on("remove player", onreMovePlayer);
};
function onClientDisconnect() {
    util.log("Player has disconnected: " + this.id);
};

function onNewPlayer(data) {
    
    var newPlayer = new Player(data.x);
    newPlayer.id = this.id;
    this.broadcast.emit("new player", { id: newPlayer.id, x: newPlayer.getX()});
    var i, existingPlayer;
    for (i = 0; i < players.length; i++) {
        existingPlayer = players[i];
        this.emit("new player", { id: existingPlayer.id, x: existingPlayer.getX()});
    }    ;
    players.push(newPlayer);
};

function onMovePlayer(data) {
    

};
function onreMovePlayer(data) {
    var removePlayer = playerById(this.id);
    
    if (!removePlayer) {
        util.log("Player not found: " + this.id);
        return;
    }    ;
    
    players.splice(players.indexOf(removePlayer), 1);
    this.broadcast.emit("remove player", { id: this.id });

};
function playerById(id) {
    var i;
    for (i = 0; i < players.length; i++) {
        if (players[i].id == id)
            return players[i];
    }    ;
    
    return false;
};
init();