var Player = function (startX) {
    var x = startX,        
        id, random = 0 ,isReady= true;
    
    
    var getX = function () {
        return x;
    };  
    var setX = function (newX) {
        x = newX;
    };
    var getRandom = function () {
        return random;
    };
    var setRandom = function (newRandom) {
        random = newRandom;
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
        getRandom: getRandom,
        setRandom: setRandom,
        id: id
    }
};

exports.Player = Player;