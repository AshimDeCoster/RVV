

tekst = "Reeds 95 jaar lang is er slechts 1 dag waar iedere wielerliefhebber echt naar uit kijkt, de dag van de Ronde van Vlaanderen. Ieder jaar hopen duizenden wielerfans een spannende wedstrijd te zien en ieder jaar weer vieren we een gekende held of verwelkomen we een nieuwe.Tientallen renners wisten Vlaanderens Mooiste aan hun palmares toe te voegen. Elk in hun eigen tijdsgeest, elk met verschillend materiaal, maar allemaal met dezelfde overgave. Met een kleine greep uit 95 jaar wielergeschiedenis, geven wij op deze site een overzicht van enkele historische momenten en hun hoofdrolspelers.";
sub = "Vroeger en nu!";

var mongoose = require('mongoose');
var connectDB = require("../data/ConnectDb");
var flandriens = require('../data/models/flandrienModel');
var infoParcours = require('../data/models/infoParcoursModel');


exports.index = function (req, res) {
    
    infoParcours.find({}, function (err, info_parcours) {
        flandriens.find({}, function (err, docs) {
            console.log(info_parcours[0].info);
            res.render('index', { title: 'De Ronde van Vlaanderen', info_parc: JSON.stringify(info_parcours), flandriens: docs });
        });
    });
    
    
};
exports.helloworld = function (req, res) {
    res.render('helloWorld', {title:'Ronde Van Vlaanderen', sub: sub, tekst: tekst });
};

