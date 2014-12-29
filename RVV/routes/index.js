

tekst = "Reeds 95 jaar lang is er slechts 1 dag waar iedere wielerliefhebber echt naar uit kijkt, de dag van de Ronde van Vlaanderen. Ieder jaar hopen duizenden wielerfans een spannende wedstrijd te zien en ieder jaar weer vieren we een gekende held of verwelkomen we een nieuwe.Tientallen renners wisten Vlaanderens Mooiste aan hun palmares toe te voegen. Elk in hun eigen tijdsgeest, elk met verschillend materiaal, maar allemaal met dezelfde overgave. Met een kleine greep uit 95 jaar wielergeschiedenis, geven wij op deze site een overzicht van enkele historische momenten en hun hoofdrolspelers.";
sub = "Vroeger en nu!";

var mongoose = require('mongoose');
var connectDB = require("../data/ConnectDb");
var schema = new mongoose.Schema({ jaar: String, info: String }, { collection: 'info_parcours' });
schema.set('collection', 'info_parcours');
var M = mongoose.model('info_parcours', schema, 'info_parcours');

exports.index = function (req, res) {
    
    M.find({}, function (err, info_parcours) {
        console.log(info_parcours[0].info);
        res.render('index', { title: 'De Ronde van Vlaanderen', info_parc: JSON.stringify(info_parcours) });
    });
    
    
};
exports.helloworld = function (req, res) {
    res.render('helloWorld', {title:'Ronde Van Vlaanderen', sub: sub, tekst: tekst });
};

