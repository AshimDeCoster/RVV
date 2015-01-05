﻿
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var app = express();

var server = http.createServer(app);
var io = require('socket.io').listen(server);
var util = require("util"), Player = require("./Helpers/Player").Player;
var players;
players = [];
var clients = {};
server.listen(1338);
//var spel = require("./Helpers/Game_server");

// all environments

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));




// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());   
}

app.get('/', routes.index);
app.get('/mobiel', routes.mobiel);
app.get('/helloworld', function (req, res) {    
 
    
});
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});


/*io.configure(function () {
    io.set('transports', ['websocket']);
    io.set('match origin protocol', true);
});*/
io.sockets.on('connection',onSocketConnection);  

function onSocketConnection(client) {
    clients[client.id] = client;   
    util.log("New player has connected: " + client.id);
    client.on("disconnect", onClientDisconnect);
    client.on("new player", onNewPlayer);
    client.on("move player", onMovePlayer);
    client.on("remove player", onReMovePlayer);
    client.on("player ready", onPlayerReady);
    client.on("player notready", onPlayerNotReady);
    client.on("race", onRace);
    client.on("end game", onEndGame);
    
};
function onClientDisconnect() {
    util.log("Player has disconnected: " + this.id);
};

function onNewPlayer(data) {
    
    var newPlayer = new Player(data.x);
    newPlayer.id = this.id;
    //
    //var i, existingPlayer;    
    /*for (i = 0; i < players.length; i++) {       
        existingPlayer = players[i];
        this.emit("new player", { id: newPlayer.id, x: newPlayer.getX(), pos: players.length });
    };*/ 
    players.push(newPlayer);
    this.emit("new player", { id: newPlayer.id, x: newPlayer.getX() });
    this.broadcast.emit("global player", { id: newPlayer.id, x: newPlayer.getX() });    
    console.log("New player created " + players.length);
};
function onRace(data) {
    
    var opp = clients[data.opp];    
    opp.emit("race", { id: data.id });
}
function onMovePlayer(data) {
    
    var movePlayer = players[playerById(data.id)];
    players[playerById(data.id)].setX(data.x);
    console.log("New move registered " + players[playerById(data.id)].getX() + "  " + movePlayer.id);
    if (!movePlayer) {
        console.log("Player not found: " + data.id);
        return;
    }
    var opp = clients[data.opp];
    opp.emit("move player", { x: data.x, id: data.id });    
    this.emit("move player", { x:data.x, id: data.id});
};
function onPlayerReady(data) {
    if (typeof(players[playerById(data.id)]) != "undefined" && typeof (players[playerById(data.myId)]) != "undefined") {
        players[playerById(data.id)].setReady(false);
        players[playerById(data.myId)].setReady(false);        
        var opp = clients[data.id];
        opp.emit("set opponent", { id: data.myId });
    }
}
function onPlayerNotReady(data) {
    players[playerById(data.id)].setReady(true);
    console.log("Player " + data.id + players[playerById(data.id)].getReady());
}
function onReMovePlayer(data) {
    var removePlayer = players[playerById(this.id)];
    
    if (!removePlayer) {
        util.log("Player not found: " + this.id);
        return;
    }    ;
    
    players.splice(players.indexOf(removePlayer), 1);
    console.log("player removed " + removePlayer.id);
    this.broadcast.emit("remove player", { id: this.id });

}
function onEndGame(data) {
    var win = clients[data.win];
    win.emit("end game", { isWon: true });
    var los = clients[data.los];
    los.emit("end game", { isWon: false });
}
function playerById(id) {
    var i;
    for (i = 0; i < players.length; i++) {
        if (players[i].id == id)
            return i;
    }    ;
    
    return false;
};
