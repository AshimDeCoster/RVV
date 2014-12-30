var mongoose = require("mongoose");
var infoParcoursSchema = require("../schemas/infoParcoursSchema");

var infoParcours = mongoose.model('infoParcours', infoParcoursSchema, "info_parcours");  //model-schema-collection
//default collection = model + "s"

module.exports = infoParcours;
