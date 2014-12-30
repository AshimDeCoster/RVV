﻿$(document).ready(function () {
    
    VeranderFoto();
});

function VeranderFoto() {
    var randomImg = Math.floor(Math.random() * (4 - 1) + 1);
    var img = $("#foto"+ randomImg);
    var dir = "/images/Flandriens/";
    
    var flandrien = $.parseJSON($('#flandriens').val());
    var random = Math.floor(Math.random() * (13 - 0) + 0);
    
    img.fadeOut(800, function () {
        img.attr("src", dir + flandrien[random].img);
        img.fadeIn(800);
    });
    setTimeout("VeranderFoto()", 3000);
}

