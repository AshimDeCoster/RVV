var localPlayer,
    remotePlayers,
    socket, opponent;

$(document).ready(function () {
    init();    
    $('#play').prop('disabled', true);
    
   
});

$('#play').click(function () {
   
   
    if (opponent === undefined || opponent == null) {
        alert("please wait");
    }
    else {
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
        socket.emit("race", { id: localPlayer.id, opp: opponent.id });
    }

});
$('#weg').click(function () {
   
    if ($('#btnSpeler2').val() == "Klaar !!") {
        console.log(typeof (localPlayer));
        localPlayer.setX((localPlayer.getX() + 1));
        socket.emit("move player", { x: localPlayer.getX(), id: localPlayer.id, opp: opponent.id });
    }
});

window.onbeforeunload = function () {
console.log(localPlayer.getID());
    socket.emit("remove player", { id: localPlayer.id });
};

function init() {
       
    //canvas = document.getElementById("gameCanvas");
    //ctx = canvas.getContext("2d");
    localPlayer = new Player(4);    
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
    socket.on("global player", onNewPlayerGlobal);
    socket.on("set opponent", onSetOpponent);
    socket.on("race", onRace);
    
};
function onRace(data) {
    console.log(data.id + " is ready to race");
    $("#btnSpeler2").prop('value', "Klaar !!");
   
}
function onSetOpponent(data) {
    var play = new Player(4);
    play.id = data.id;    
    opponent = play;
    $('#play').prop('disabled', false);
}

function onSocketConnected() {
    console.log("Connected to socket server");
   
    socket.emit("new player", { x: localPlayer.getX() });
};

function onSocketDisconnect() {
    console.log("Disconnected from socket server");
    socket.emit("remove player", { id: localPlayer.getID() });
};

function onNewPlayer(data) {   
    
    var newPlayer = new Player(data.x);
    newPlayer.id = data.id;
    
    console.log("New player connected: " + data.id + "   " + localPlayer.id);    
    localPlayer = newPlayer;
    remotePlayers.push(newPlayer);
    console.log(localPlayer.id);
       
   
};
function onNewPlayerGlobal(data) {
    
    var newPlayer = new Player(data.x);
    newPlayer.id = data.id;
    remotePlayers.push(newPlayer);
    console.log("New Global player connected: " + data.id);
    if (opponent === undefined || opponent == null) {
        opponent = newPlayer;
        socket.emit("player ready", { id: opponent.id, myId: localPlayer.id  });        
        remotePlayers[playerById(opponent.id)].setReady(false);
        remotePlayers[playerById(localPlayer.id)].setReady(false);
        $('#play').prop('disabled', false);
    }
        
   
};

function onMovePlayer(data) {
    console.log("New move registered: " + data.x + "door: " + data.id);
    var positie = $("body").scrollTop();
    if (data.id == localPlayer.id) {
        
        $("html, body").animate({ scrollTop: (positie -50)  }, 50);
        $('#speler1').animate({ bottom: data.x + "%" }, 50);
        console.log(positie - 50);
    }
    else if (data.id == opponent.id) {
        $("html, body").animate({ scrollTop: (positie -50)  }, 50);
        $('#speler2').animate({ bottom: data.x + "%" }, 50);
    } else { }
};

function onRemovePlayer(data) {
    var removePlayer = remotePlayers[playerById(data.id)];
    
    if (!removePlayer) {
        console.log("Player not found: " + data.id);
        if (opponent.id == data.id) {
            opponent = null;
            $('#play').prop('disabled', true);
        }
        return;
    }    ;
    if (opponent.id == data.id) {
        opponent = null;
        $('#play').prop('disabled', true);
    }
    remotePlayers.splice(remotePlayers.indexOf(removePlayer), 1);
    console.log("removed " + remotePlayers.length);
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
            return i;
    }    ;
    
    return false;
};

