var mongoose = require("mongoose");
var flandrienSchema = require("../schemas/flandrienSchema");

var flandrien = mongoose.model('flandrien', flandrienSchema, "flandriens_fotos");  //model-schema-collection
//default collection = model + "s"

module.exports = flandrien;

