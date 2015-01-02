var clicks = 0;
$(document).ready(function () {
    
    var linkHome = $('a[href="#Startpagina"]');
    var btnNaarOver = $('#btnNaarOver');
    var linkOver = $('a[href="#over"]');
    var btnNaarParcours = $('#btnNaarParcours');
    var linkParcours = $('a[href="#Parcours"]');
    var linkRenners = $('a[href="#Renners"]');
    var hamburgerbutton = $('label[for="nav-trigger"]');
    var menuListItem = $('nav ul li');
    
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
    if ($("nav ul li").css("float") == "left") {
        $(document).on('scroll', function () {
            ControlLocation();
        });
    }
    menuListItem.click(function () {
        if ($("nav ul li").css("float") == "none")
            showHideMobileMenu();
    });
    hamburgerbutton.click(function () { 
        showHideMobileMenu();
    });
});

window.onscroll = function (event) {
    if ($("nav ul li").css("float") == "left") {
        var scroll = parseInt($(window).scrollTop());
        
        if (scroll > 80)
            $('nav').addClass("f-nav");
    
        else
            $('nav').removeClass("f-nav");
    }
}



function ScrollNaarOver() {
    $('#over').goTo();
}
function ScrollNaarParcours() {
    $('#Parcours').goTo();
}
function ScrollNaarStart() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}
function ScrollNaarRenners() {
    $('#Renners').goTo();
}

function ControlLocation() {
    var positie = $("body").scrollTop();
    
   if (positie >= 0 && positie < $("#over").offset().top) {
        $("nav ul").children('li').removeClass("active");
        $("nav ul li:first-of-type").addClass("active");
       
    }
    else if (positie >= $("#over").offset().top && positie < ($("#Parcours").offset().top-1) ) {
        $("nav ul").children('li').removeClass("active");
        $("nav ul li:first-of-type").next().addClass("active");
        
    }
    
    else if ((positie+1) >= ($("#Parcours").offset().top) && positie < $("#Renners").offset().top-10) {
        
        $("nav ul").children('li').removeClass("active");
        $("nav ul li:first-of-type").next().next().addClass("active");        
    }
    else if ((positie+10) >= ($("#Renners").offset().top)) {
        
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

function showHideMobileMenu() {
    if (clicks == 0) {
        $("nav").animate({ "left": "0px" });
        clicks = 1;
    } else {
        $("nav").animate({ "left": "-350px" });
        clicks = 0;
    }
}
