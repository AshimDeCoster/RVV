var mongoose = require("mongoose");
var userSchema = require("../schemas/user");

var user = mongoose.model('user', userSchema, "users");  //model-schema-collection
//default collection = model + "s"

module.exports = user;

