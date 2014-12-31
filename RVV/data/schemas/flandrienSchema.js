var mongoose = require('mongoose');

var flandrienSchema = new mongoose.Schema({
    naam: String,
    img: String,
    beschrijving: String,
    carriere: String
   
   
});

module.exports = flandrienSchema