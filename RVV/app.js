
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var app = express();

//var server = http.createServer(app);
var io = require('socket.io').listen(28);
var util = require("util"), Player = require("./Helpers/Player").Player;
var players;
players = [];
//server.listen(1337);
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
    console.log("New player created " + data.x);
    var newPlayer = new Player(data.x);
    newPlayer.id = this.id;
    this.broadcast.emit("new player", { id: newPlayer.id, x: newPlayer.getX() });
    var i, existingPlayer;
    
    for (i = 0; i < players.length; i++) {
        console.log("test"+players.length);
        existingPlayer = players[i];
        this.emit("new player", { id: existingPlayer.id, x: existingPlayer.getX() });
    };
 
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
