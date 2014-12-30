$(document).ready(function () {
    
    VeranderFoto();
});
var i = 1;
var myTimeOut;
function VeranderFoto() {
    //var randomImg = Math.floor(Math.random() * (4 - 1) + 1);
    var img = $("#foto" + i);
    var span = $("#span" + i);
    var dir = "/images/Flandriens/";
    
    var flandrien = $.parseJSON($('#flandriens').val());
    var random = Math.floor(Math.random() * (13 - 0) + 0);
    var src1 = $("#foto1").attr('src');
    var src2 = $("#foto2").attr('src');
    var src3 = $("#foto3").attr('src');
    while(src1 == dir + flandrien[random].img || src2 == dir + flandrien[random].img || src3 == dir + flandrien[random].img) {
        random = Math.floor(Math.random() * (13 - 0) + 0);
    }
    img.fadeOut(800, function () {
           
            img.attr("src", dir + flandrien[random].img);
            
            img.fadeIn(800);
        });
    span.fadeOut(800, function () {
        span.text(flandrien[random].naam);
        span.fadeIn(800);
    });
    
    if (i < 4)
        i++;
    else
        i = 1;
    myTimeOut =setTimeout("VeranderFoto()", 3000);
}

