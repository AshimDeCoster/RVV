$(document).ready(function () {
  
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


function LoadImages(object) {
    var fileNames = ["Parcours_1913","Parcours_19132","Parcours_19133","Parcours_19134"];
    var dir = "/images/Parcours/";
    var firstImg = $('#parcourImg');
    
    $("#controls span").removeClass("selected");
    $(object).addClass("selected");
    
    console.log(dir + $(object).index() + ".jpg");

    firstImg.fadeOut(800, function () {
        firstImg.attr("src", dir + fileNames[$(object).index()] + ".png");
        firstImg.fadeIn(800);
    });
    
    /*if ($(firstImg).is(":visible")) {
        //$("#parcourImg").attr("src", dir + "pony.jpg");
        secondImg.css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0, src: "images/Parcours/wiel.jpg" }, 1000);
        firstImg.css({ opacity: 1.0, visibility: "visible" }).animate({ opacity: 0 }, 1000);
        
    }
    else {
        firstImg.css({ opacity: 0.0, visibility: "visible" }).animate({ opacity: 1.0 }, 1000);
        secondImg.css({ opacity: 1.0, visibility: "visible" }).animate({ opacity: 0, visibility: "hidden" }, 1000);
        
    }*/
    
    
}
