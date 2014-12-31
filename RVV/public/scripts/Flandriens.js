$(document).ready(function () {
    
    VeranderFoto();


    $('#Renners').live('click', function (e) {
        console.log(e.target.id);
        ShowInfo(e.target.id); 
    });
});



var i = 1;
var myTimeOut;
var modus = false;
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
    $($('#Renners').children()[(i - 1)]).children('p').text(flandrien[random].beschrijving);
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
    var positiondiv2 = div2.position();
    var positiondiv1 = div1.position();
    var positiondiv3 = div3.position();
    if (id == "foto1") {
        if (modus == false) {
            console.log("lala");
            clearTimeout(myTimeOut);
            div1.children('p').css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0, left: '100%' }, 500);            
            div2.animate({ opacity: 0 }, 500);
            div3.animate({ opacity: 0 }, 500);
            modus = true;
        }
        else {
            div1.children('p').css({ opacity: 1.0, visibility: "visible" }).animate({ opacity: 0, left: '0', visibility: "hidden" }, 500);
            div2.animate({ opacity: 1.0 }, 500);
            div3.animate({ opacity: 1.0 }, 500);
            modus = false;
            myTimeOut = setTimeout("VeranderFoto()", 5000);
        }
    }
    else if (id == "foto3") {
        if (modus == false) {
            clearTimeout(myTimeOut);
            
            div1.css({ position: "absolute", left: positiondiv1.left, top: positiondiv1.top });
            div2.css({ position: "absolute", left: positiondiv2.left, top: positiondiv2.top });
            div3.css({ position: "absolute", left: positiondiv3.left, top: positiondiv3.top });
            div3.animate({ left: '0' }, 500);
            div3.children('p').css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0, left: '100%' }, 500);
            div1.animate({ opacity: 0 }, 500);
            div2.animate({ opacity: 0 }, 500);
            modus = true;
        }
        else {
            div3.animate({ left: '66.66%' }, 400);
            setTimeout(function () {
                div2.css({ position: "relative" , left: "", top: "" });
                div1.css({ position: "relative" , left: "", top: "" });
                div3.css({ position: "relative" , left: "", top: "" });
            }, 500);
            
            div3.children('p').css({ opacity: 1.0, visibility: "visible" }).animate({ opacity: 0, left: '100%', visibility: "hidden" }, 500);
            div1.animate({ opacity: 1.0 }, 500);
            div2.animate({ opacity: 1.0 }, 500);
            modus = false;
            myTimeOut = setTimeout("VeranderFoto()", 5000);
        }

    }
    else if (id == "foto2") {
        
        if (modus == false) {
            clearTimeout(myTimeOut);           
            div1.css({ position: "absolute", left: positiondiv1.left, top: positiondiv1.top });
            div2.css({ position: "absolute", left: positiondiv2.left, top: positiondiv2.top });
            div3.css({ position: "absolute", left: positiondiv3.left, top: positiondiv3.top });
            div2.animate({ left: '0'}, 500);
            div2.children('p').css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0, left: '100%' }, 500);
            div1.animate({ opacity: 0 }, 500);
            div3.animate({ opacity: 0 }, 500);
            modus = true;
        }
        else {            
           div2.animate({ left: '33.33%' }, 400);            
           setTimeout(function () {
                div2.css({ position: "relative" , left: "", top: "" });
                div1.css({ position: "relative" , left: "", top: "" });
                div3.css({ position: "relative" , left: "", top: "" });  
            }, 500);
                     
            div2.children('p').css({ opacity: 1.0, visibility: "visible" }).animate({ opacity: 0, left: '100%', visibility: "hidden" }, 500);
            div1.animate({ opacity: 1.0 }, 500);
            div3.animate({ opacity: 1.0 }, 500);
            modus = false;
            myTimeOut = setTimeout("VeranderFoto()", 5000);
        }

    }
    else { 
        if (modus == false) {
            console.log("lala");
            clearTimeout(myTimeOut);
            div1.children('p').css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0, left: '100%' }, 500);
            div2.animate({ opacity: 0 }, 500);
            div3.animate({ opacity: 0 }, 500);
            modus = true;
        }
        else {
            div1.children('p').css({ opacity: 1.0, visibility: "visible" }).animate({ opacity: 0, left: '0', visibility: "hidden" }, 500);
            div2.animate({ opacity: 1.0 }, 500);
            div3.animate({ opacity: 1.0 }, 500);
            modus = false;
            myTimeOut = setTimeout("VeranderFoto()", 5000);
        }    
    }
       
}




