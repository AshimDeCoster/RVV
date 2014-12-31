$(document).ready(function () {
    
    var linkHome = $('a[href="#Startpagina"]');
    var btnNaarOver = $('#btnNaarOver');
    var linkOver = $('a[href="#over"]');
    var btnNaarParcours = $('#btnNaarParcours');
    var linkParcours = $('a[href="#Parcours"]');
    var linkRenners = $('a[href="#Renners"]');
    
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
    linkRenners.click(function () {
        ScrollNaarRenners();
    });
    $(document).on('scroll', function () {
        ControllLocation();
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
function ScrollNaarRenners() {
    $('#Renners').goTo();
}
function ControllLocation() {
    var positie = $("body").scrollTop();
    console.log((positie+1) + "  " + ($("#Parcours").offset().top) + "     " + $("#over").offset().top);

    if (positie >= 0 && positie < $("#over").offset().top) {
        $("nav ul").children('li').removeClass("active");
        //$("#controls span").removeClass("selected");
        $("nav ul li:first-of-type").addClass("active");
       
    }
    else if (positie >= $("#over").offset().top && positie < ($("#Parcours").offset().top-1) ) {
        $("nav ul").children('li').removeClass("active");
        $("nav ul li:first-of-type").next().addClass("active");
        
    }
    
    else if ((positie+1) >= ($("#Parcours").offset().top) && positie < $("#Renners").offset().top) {
        
        $("nav ul").children('li').removeClass("active");
        $("nav ul li:first-of-type").next().next().addClass("active");        
    }
    else if ((positie) >= ($("#Renners").offset().top)) {
        
        $("nav ul").children('li').removeClass("active");
        $("nav ul li:first-of-type").next().next().next().addClass("active");
    }
    

    
   
}

(function ($) {
    $.fn.goTo = function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this;
    }
})(jQuery);
