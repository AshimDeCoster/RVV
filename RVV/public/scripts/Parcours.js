$(document).ready(function () {
    var clicks = false;
    $("#controls").on('click', 'span', function () {
        LoadImages(this);
    });
    $("#btnToonInfo").click(function () {
        if (clicks == false) {
            GetParcourInfo();
            clicks = true;
        } else {
            $('#infoOverParcours').fadeOut();
            clicks = false;
        }
        
    });
});

function LoadImages(object) {
    var fileNames = ["Parcours_1913","Parcours_1939","Parcours_1969","Parcours_1977","Parcours_1998","Parcours_2010","Parcours_2012"];
    var dir = "/images/Parcours/";
    var firstImg = $('#parcourImg');
    var btnToonInfo = $("#btnToonInfo");
    btnToonInfo.fadeOut();
    
    $("#controls span").removeClass("selected");
    $(object).addClass("selected");
    
    firstImg.fadeOut(800, function () {
        firstImg.attr("src", dir + fileNames[$(object).index()] + ".jpg");
        firstImg.fadeIn(800);
        btnToonInfo.fadeIn(800);
    });
}
function GetParcourInfo() {
    var info = $.parseJSON($('#info').text());
    
    
    for (var i = 0; i < info.length; i++) {
        if (info[i].jaar == $(".selected").text()) {
            $('#infoOverParcours>p:first-of-type').html(info[i].info);
            $('#infoOverParcours ul').html('<li> 1. ' + info[i].eerste + '</li><li> 2. ' + info[i].tweede + '</li><li> 3. ' + info[i].derde + '</li>');
            $('#infoOverParcours').fadeIn();
        }
    }
}