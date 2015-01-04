var Player = function (startX) {
    var x = startX,        
        id, isReady;
    isReady = true;
    
    var getX = function () {
        return x;
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
        id: id
    }
};

exports.Player = Player;