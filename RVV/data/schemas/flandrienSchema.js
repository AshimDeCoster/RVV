var mongoose = require('mongoose');

var flandrienSchema = new mongoose.Schema({
    naam: String,
    img: String,
    beschrijving: String,
   
   
});

module.exports = flandrienSchema