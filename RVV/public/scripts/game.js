var localPlayer,
    remotePlayers,
    socket;
var canvas,			
    ctx;
$(document).ready(function () {
    init();    
});
var btnTest = $('#test');
btnTest.click(function () {
    localPlayer.setX((localPlayer.getX() + 1));
    socket.emit("move player", { x: localPlayer.getX() });
});

function init() {
       
    //canvas = document.getElementById("gameCanvas");
    //ctx = canvas.getContext("2d");
    localPlayer = new Player(2);    
    // Start listening for events   
     socket = io.connect("http://localhost:1338");  
    //socket = io.connect();  
    setEventHandlers();
    remotePlayers = [];    
};

var setEventHandlers = function() {	
	socket.on("connect", onSocketConnected);
	socket.on("disconnect", onSocketDisconnect);
	socket.on("new player", onNewPlayer);
	socket.on("move player", onMovePlayer);
	socket.on("remove player", onRemovePlayer);
};

function onSocketConnected() {
    console.log("Connected to socket server");
   
    socket.emit("new player", { x: localPlayer.getX() });
};

function onSocketDisconnect() {
    console.log("Disconnected from socket server");
};

function onNewPlayer(data) {   
    console.log("New player connected: " + data.id);
    var newPlayer = new Player(data.x);
    newPlayer.id = data.id;
    remotePlayers.push(newPlayer);
    
};

function onMovePlayer(data) {
    console.log("New move registered: "+ data.x);
};

function onRemovePlayer(data) {
    var removePlayer = playerById(data.id);
    
    if (!removePlayer) {
        console.log("Player not found: " + data.id);
        return;
    }    ;
    
    remotePlayers.splice(remotePlayers.indexOf(removePlayer), 1);
};

function draw() {
    // Wipe the canvas clean
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw the local player
    //localPlayer.draw(ctx);

    //var i;
    //for (i = 0; i < remotePlayers.length; i++) {
    //    remotePlayers[i].draw(ctx);
    //}    ;
};
function playerById(id) {
    var i;
    for (i = 0; i < remotePlayers.length; i++) {
        if (remotePlayers[i].id == id)
            return remotePlayers[i];
    }    ;
    
    return false;
};

