$(document).ready(function () {
    
    var linkHome = $('a[href="#Startpagina"]');
    var btnNaarOver = $('#btnNaarOver');
    var linkOver = $('a[href="#over"]');
    var btnNaarParcours = $('#btnNaarParcours');
    var linkParcours = $('a[href="#Parcours"]');
    
    
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
