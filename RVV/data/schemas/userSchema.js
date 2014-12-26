var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    Nickname: { type: String, unique: true },
    RennerID: String,
    Score: String,
    AantalGespeeld: String    
   
});

module.exports = userSchema