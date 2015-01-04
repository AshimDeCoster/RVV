/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(startX) {
	var x = startX,       
        id,
		moveAmount = 0, isReady;
        isReady = true;
    
    var getX = function () {
        return x;
    };
    var getID = function () {
        return id;
    };    
    var setX = function (newX) {
        x = newX;
    };
    var getReady = function () {
        return isReady;
    };
    var setReady = function (newIsReady) {
        isReady = newIsReady;
    };    
	var update = function() {
        moveAmount++;
	};

	var draw = function(ctx) {
		ctx.fillRect(x-5, y-5, 10, 10);
	};

	return {
		update: update,
        draw: draw,
        getX: getX,
        setX: setX,
        getReady: getReady,
        setReady: setReady, 
        getID: getID
        

	}
};