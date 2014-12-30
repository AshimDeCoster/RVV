var mongoose = require('mongoose');

var infoParcoursSchema = new mongoose.Schema({
    jaar: String,
    info: String,
    eerste: String,
    tweede: String,
    derde: String
   
   
});

module.exports = infoParcoursSchema