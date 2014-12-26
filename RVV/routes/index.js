
/*
 * GET home page.
 */
tekst = "Reeds 95 jaar lang is er slechts 1 dag waar iedere wielerliefhebber echt naar uit kijkt, de dag van de Ronde van Vlaanderen. Ieder jaar hopen duizenden wielerfans een spannende wedstrijd te zien en ieder jaar weer vieren we een gekende held of verwelkomen we een nieuwe.Tientallen renners wisten Vlaanderens Mooiste aan hun palmares toe te voegen. Elk in hun eigen tijdsgeest, elk met verschillend materiaal, maar allemaal met dezelfde overgave. Met een kleine greep uit 95 jaar wielergeschiedenis, geven wij op deze site een overzicht van enkele historische momenten en hun hoofdrolspelers.";
sub = "Vroeger en nu!";
exports.index = function (req, res) {
    res.render('index', { title: 'Express' });
};
exports.helloworld = function (req, res) {
    res.render('helloWorld', {title:'Ronde Van Vlaanderen', sub: sub, tekst: tekst });
};

