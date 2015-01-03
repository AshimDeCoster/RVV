
var mongoose = require('mongoose');
var connectDB = require("../Helpers/ConnectDb");
var flandriens = require('../Data/models/flandrienModel');
var infoParcours = require('../Data/models/infoParcoursModel');


exports.index = function (req, res) {
    
    infoParcours.find({}, function (err, info_parcours) {
        flandriens.find({}, function (err, docs) {
            var url =req.protocol + '://' + req.get('host') + req.originalUrl + ":8000/socket.io / socket.io.js";
              
            res.render('index', { title: 'De Ronde van Vlaanderen', info_parc: JSON.stringify(info_parcours), flandriens: docs, url:url });
            
        });
    });    
};



