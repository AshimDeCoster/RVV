var Player = function (startX) {
    var x = startX,        
        id;
    
    var getX = function () {
        return x;
    };  
    var setX = function (newX) {
        x = newX;
    };   
    return {
        getX: getX,        
        setX: setX,        
        id: id
    }
};

exports.Player = Player;