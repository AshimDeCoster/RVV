$(document).ready(function () {
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

});

window.onscroll = function (event) {
    var scroll = parseInt($(window).scrollTop());
    
    if(scroll > 80) 
        $('nav').addClass("f-nav");
    
    else
        $('nav').removeClass("f-nav");
    

    console.log("" + $(window).scrollTop());
    //if (scroll > 0 && scroll < 5) { $('#over').goTo(); console.log("nu" + ($('#over').offsetTop()));}
    //if (scroll == ($('#over').scrollTop() + 5)) { $('#Parcours').goTo(); }
    //$('#over').goTo();
}



function ScrollNaarOver() {
    $('#over').goTo();
}
function ScrollNaarParcours() {
    $('#Parcours').goTo();
}

(function ($) {
    $.fn.goTo = function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this;
    }
})(jQuery);