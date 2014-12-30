$(document).ready(function () {
    
    VeranderFoto();


    $('#Renners').live('click', function (e) {
        console.log(e.target.id);
        ShowInfo(e.target.id); 
    });
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
    myTimeOut =setTimeout("VeranderFoto()", 5000);
}
function ShowInfo(id) {
    var div2 = $($('#Renners').children()[1]);
    var div3 = $($('#Renners').children()[2]);
    var div1 = $($('#Renners').children()[0]);
    if (id == "foto1") {
        clearTimeout(myTimeOut);
        
        div1.children('p').css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0, left: '120%'},1000);
        
        
        div2.fadeOut(1000, function () { });
        div3.fadeOut(1000, function () { });

    }
    else
        myTimeOut = setTimeout("VeranderFoto()", 5000);
}




