$(document).ready(function () {
    var img = $("#foto1");
    VeranderFoto(img);
});

function VeranderFoto(img) {
    var dir = "/images/Flandriens/";
    
    var flandrien = $.parseJSON($('#flandriens').val());
    var random = Math.floor(Math.random() * (13 - 0) + 0);
    img.fadeOut(800, function () {
        img.attr("src", dir + flandrien[random].img);
        img.fadeIn(800);
    });
    //setTimeout(VeranderFoto(img), 3000);
}

