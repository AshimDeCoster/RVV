$(document).ready(function () {
    $("#controls").on('click', 'span', function () {
        LoadImages(this);
    });
});

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
            $('#infoOverParcours p').html(info[i].info);
        }
    }
}