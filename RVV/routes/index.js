
var mongoose = require('mongoose');
var connectDB = require("../Helpers/ConnectDb");
var flandriens = require('../Data/models/flandrienModel');
var infoParcours = require('../Data/models/infoParcoursModel');


exports.index = function (req, res) {
    
    infoParcours.find({}, function (err, info_parcours) {
        flandriens.find({}, function (err, docs) {
            console.log(info_parcours[0].info);
            res.render('index', { title: 'De Ronde van Vlaanderen', info_parc: JSON.stringify(info_parcours), flandriens: docs });
            
        });
    });    
};


