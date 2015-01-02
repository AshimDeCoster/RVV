/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(startX) {
	var x = startX,       
        id,
		moveAmount = 0;
    
    var getX = function () {
        return x;
    };    
    var setX = function (newX) {
        x = newX;
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
        setX: setX

	}
};