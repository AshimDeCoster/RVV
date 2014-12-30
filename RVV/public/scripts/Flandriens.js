$(document).ready(function () {
    
    VeranderFoto();
});
var i = 1;
function VeranderFoto() {
    var randomImg = Math.floor(Math.random() * (4 - 1) + 1);
    var img = $("#foto"+ i);
    var dir = "/images/Flandriens/";
    
    var flandrien = $.parseJSON($('#flandriens').val());
    var random = Math.floor(Math.random() * (13 - 0) + 0);
    
    img.fadeOut(800, function () {
        img.attr("src", dir + flandrien[random].img);
        img.fadeIn(800);
    });
    if (i < 4)
        i++;
    else
        i = 1;
    setTimeout("VeranderFoto()", 3000);
}

