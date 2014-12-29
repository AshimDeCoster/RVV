$(document).ready(function () {
    
    var linkHome = $('a[href="#Startpagina"]');
    var btnNaarOver = $('#btnNaarOver');
    var linkOver = $('a[href="#over"]');
    var btnNaarParcours = $('#btnNaarParcours');
    var linkParcours = $('a[href="#Parcours"]');
    var secParcour = $('#Parcours');
    
    
    btnNaarOver.click(function () { 
        ScrollNaarOver();
    });
    linkOver.click(function () {
        ScrollNaarOver();
    });
    btnNaarParcours.click(function () {
        ScrollNaarParcours();
    });
    linkParcours.click(function () { 
        ScrollNaarParcours();
    });
    linkHome.click(function () {
        ScrollNaarStart();
    });
    $("#controls").on('click', 'span', function () {
        LoadImages(this);
    });

});

window.onscroll = function (event) {
    var scroll = parseInt($(window).scrollTop());
    
    if(scroll > 80) 
        $('nav').addClass("f-nav");
    
    else
        $('nav').removeClass("f-nav");
}



function ScrollNaarOver() {
    $('#over').goTo();
}
function ScrollNaarParcours() {
    $('#Parcours').goTo();
}
function ScrollNaarStart() {
    $('#Startpagina').goTo();
}

(function ($) {
    $.fn.goTo = function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this;
    }
})(jQuery);


function LoadImages(object) {
    var fileNames = ["Parcours_1913","Parcours_1939","Parcours_1969","Parcours_1977","Parcours_1998","Parcours_2010","Parcours_2012"];
    var dir = "/images/Parcours/";
    var firstImg = $('#parcourImg');
    
    $("#controls span").removeClass("selected");
    $(object).addClass("selected");

    firstImg.fadeOut(800, function () {
        firstImg.attr("src", dir + fileNames[$(object).index()] + ".jpg");
        firstImg.fadeIn(800);
    });
    GetParcourInfo();
}
function GetParcourInfo() {
    var info = $.parseJSON($('#info').text());
   

    for (var i = 0; i < info.length; i++) {
        if (info[i].jaar == $(".selected").text()) {
            console.log(info[i].info);
        }
    }
}
