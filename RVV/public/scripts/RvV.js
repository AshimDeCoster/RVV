$(document).ready(function () {
    var btnNaarOver = $('#btnNaarOver');
    btnNaarOver.click(function () { 
        ScrollNaarOver();
    });
});



function ScrollNaarOver() {    
    $('#over').goTo();
}

(function ($) {
    $.fn.goTo = function () {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this;
    }
})(jQuery);