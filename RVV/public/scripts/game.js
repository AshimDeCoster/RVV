var localPlayer,
    remotePlayers,
    socket,
    opponent;
var rand = Math.floor(Math.random() * (5 - 1) + 1);
$(document).ready(function () {
    init();
    $('#play').prop('disabled', true);
   
});

$('#play').live('click', function (e) {    
    
    if (opponent === undefined || opponent == null) {
        alert("please wait");
    }
    else {
        $('#result').hide();
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);        
        $("#speler1").attr("src", "/images/spel/" + rand + ".gif");   
        socket.emit("race", { id: localPlayer.id, opp: opponent.id, rand: rand });
    }

});
$('#speler1').click(function (e) {     
    if ($('#txt_start').is(":visible")) {
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
    
    
    localPlayer = new Player(4);
    // Start listening for events 
    socket = io.connect();

    //socket = io.connect();  
    setEventHandlers();
    remotePlayers = [];
};

var setEventHandlers = function () {
    socket.on("connect", onSocketConnected);
    socket.on("disconnect", onSocketDisconnect);
    socket.on("new player", onNewPlayer);
    socket.on("move player", onMovePlayer);
    socket.on("remove player", onRemovePlayer);
    socket.on("global player", onNewPlayerGlobal);
    socket.on("set opponent", onSetOpponent);
    socket.on("race", onRace);
    socket.on("end game", onEndGame);
    
};
function onEndGame(data) {
    $('#result').show();
    if (data.isWon == true) {        
        $('#result').text("Je bent gewonnen");
        opponent = null;
        $('#speler1').animate({ bottom: '4%' }, 50);
        $('#speler2').animate({ bottom: '4%' }, 50);
    }
    else if (data.isWon == false) {
        $('#result').text("Je bent verloren");
        opponent = null;
        $('#speler1').animate({ bottom: '4%' }, 50);
        $('#speler2').animate({ bottom: '4%' }, 50);
    } else { }
    localPlayer.setX(4);
    $("#txt_wachten").show();
    $("#txt_start").hide();
    socket.emit("remove player", { id: localPlayer.id });
    socket.emit("new player", { x: localPlayer.getX() });
}
function onRace(data) {    
    if (data.isGelijk == true) {
        rand++;
        if (rand == 5)
            rand = 1;
        $("#speler1").attr("src", "/images/spel/" + rand + ".gif");        
    }
    $("#speler2").attr("src", "/images/spel/" + data.rand + ".gif");
    console.log(data.id + " is ready to race");
    $("#txt_start").show();
    $("#txt_wachten").hide();
   
    
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
        socket.emit("player ready", { id: opponent.id, myId: localPlayer.id });
        //remotePlayers[playerById(opponent.id)].setReady(false);
        //remotePlayers[playerById(localPlayer.id)].setReady(false);
        $('#play').prop('disabled', false);
    }
        
   
};

function onMovePlayer(data) {
    console.log("New move registered: " + data.x + "door: " + data.id);
    var top = (document.documentElement && document.documentElement.scrollTop) || 
              document.body.scrollTop;
    //var positie = $("body").scrollTop();
    if (data.id == localPlayer.id) {
        if (data.x <= 78) {


            $("html, body").animate({ scrollTop: (top - (($('body').height() - window.innerHeight) * 0.006)) }, 50);           
            $('#speler1').animate({ bottom: data.x + "%" }, 50);
        }
        else {
            socket.emit("end game", { win: data.id, los: opponent.id });
        }
    }
    else if (data.id == opponent.id) {
        if (data.x <= 78) {
            $('#speler2').animate({ bottom: data.x + "%" }, 50);
        }
        else {
            socket.emit("end game", { win: data.id, los: localPlayer.id });
        }
    } else { }
};

function onRemovePlayer(data) {
    var removePlayer = remotePlayers[playerById(data.id)];
    
    if (!removePlayer) {
        console.log("Player not found: " + data.id);
        if (typeof (opponent) != undefined && opponent != null) {
            if (opponent.id == data.id) {
                opponent = null;
                $('#play').prop('disabled', true);
            }
        }
        return;
    }    ;
    if (typeof (opponent) != undefined && opponent != null) {
        if (opponent.id == data.id) {
            opponent = null;
            $('#play').prop('disabled', true);
        }
    }
    remotePlayers.splice(remotePlayers.indexOf(removePlayer), 1);
    console.log("removed " + remotePlayers.length);
};

function playerById(id) {
    var i;
    for (i = 0; i < remotePlayers.length; i++) {
        if (remotePlayers[i].id == id)
            return i;
    }    ;
    
    return false;
};