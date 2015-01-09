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
    menuListItem.click(function () {
        showHideMobileMenu();
    });
    hamburgerbutton.click(function (e) {
        e.preventDefault();
        showHideMobileMenu();
    });
});
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