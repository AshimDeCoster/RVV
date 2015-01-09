$(document).ready(function () {    
    VeranderFoto();   
    $('#Renners').live('click', function (e) {
        ShowInfo(e.target.id);
    });
    $('img[alt="arrow_openinfo_indication"]').click(function () {
        ShowInfo('foto1');
    });
    $("#span1").click(function () { 
        ShowInfo('foto1');
    });
    $('#div1').click(function () {
        HideInfo();
    });
});
var i = 1;
var myTimeOut;
var modus = false;
function VeranderFoto() {
    var img = $("#foto1");
    var imgArrow = $('img[alt="arrow_openinfo_indication"]');
    var span = $("#span1");
    var div = $("#div1");
    var dir = "/images/Flandriens/";    
    var flandrien = $.parseJSON($('#flandriens').val());
    var random = Math.floor(Math.random() * (13 - 0) + 0);
    var src1 = $("#foto1").attr('src');
    while (src1 == dir + flandrien[random].img) {
        random = Math.floor(Math.random() * (13 - 0) + 0);
    }    
    div.children('h2').text(flandrien[random].naam);
    div.children('p').text(flandrien[random].beschrijving);
    div.children('span').text("Carrière: " + flandrien[random].carriere);    
    img.fadeOut(800, function () {        
        img.attr("src", dir + flandrien[random].img);        
        img.fadeIn(800);
    });
    span.fadeOut(800, function () {
        span.text(flandrien[random].naam);
        span.fadeIn(800);
    });
    imgArrow.fadeOut(800, function () {
        imgArrow.fadeIn(800);
    });    
    if (i < 4)
        i++;
    else
        i = 1;
    myTimeOut = setTimeout("VeranderFoto()", 7000);
}
function ShowInfo(id) {
    var div1 = $('#div1');
    var positiondiv1 = div1.position();    
    if (id == "foto1") {
        if (modus == false) {            
            $('img[alt="arrow_openinfo_indication"]').fadeOut(200);
            clearTimeout(myTimeOut);
            $('#div1').css({ visibility: "visible" }).animate({ "left": "0" }, 500);
            modus = true;
        } 
    }
}
function HideInfo() {
    $('#div1').css({ visibility: "visible" }).animate({ "left": "-100%" }, 500);
    modus = false;
    myTimeOut = setTimeout("VeranderFoto()", 5000);
    $('img[alt="arrow_openinfo_indication"]').fadeIn(800);
}