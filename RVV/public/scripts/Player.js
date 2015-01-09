var Player = function(startX) {
	var x = startX,       
        id,
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
    return {		
        getX: getX,
        setX: setX,
        getReady: getReady,
        setReady: setReady, 
        getID: getID
        

	}
};