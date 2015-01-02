/**************************************************
** GAME VARIABLES
**************************************************/
var localPlayer,	// Local player
    socket;

/**************************************************
** GAME INITIALISATION
**************************************************/
$(document).ready(function () {
    init();    
});

function init() {
    
    
    localPlayer = new Player(0, 0);
    
    // Start listening for events
   
    socket = io.connect("http://localhost:8000", { port: 8000, transports: ["websocket"] });   
    setEventHandlers();
   
    
};


/**************************************************
** GAME EVENT HANDLERS
**************************************************/
var setEventHandlers = function() {	
	socket.on("connect", onSocketConnected);
	socket.on("disconnect", onSocketDisconnect);
	socket.on("new player", onNewPlayer);
	socket.on("move player", onMovePlayer);
	socket.on("remove player", onRemovePlayer);
};

function onSocketConnected() {
    console.log("Connected to socket server");
};

function onSocketDisconnect() {
    console.log("Disconnected from socket server");
};

function onNewPlayer(data) {
    console.log("New player connected: " + data.id);
};

function onMovePlayer(data) {

};

function onRemovePlayer(data) {

};
