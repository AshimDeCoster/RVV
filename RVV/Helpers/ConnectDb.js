var mongoose = require("mongoose");
module.exports = (function () {
    var mongodbURL = 'mongodb://rvv:rvv007@ds029541.mongolab.com:29541/rvvdb';
    var db = mongoose.connect(mongodbURL); //async connectie aanmaken    
    mongoose.connection.on("error", function () {
        console.log(error);
    });
    mongoose.connection.on("open", function () {
        console.log("connection met mongo server " + mongodbURL);
        // get collection (table) names
        mongoose.connection.db.collectionNames(function (err, names) {
            console.log("collection list:");
            console.log(names);
        });
    });
    return { db: db }
})();