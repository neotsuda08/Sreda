

function opacity1overlay(){
    $("#bm-overlay").css({ transition: "0.3s ease-in all", opacity: 1});
}
function opacity0overlay(){
    $("#bm-overlay").css({ transition: "0.3s ease-in all", opacity: 0});
}
function waitoverlay(){
    $("#bm-overlay").css({ transition: "0.3s ease-in all" , translate: "-100%"});
}

$("#bm-openbutton").on( 'click', function() {
    $("#burgermenu").css({ transition: "0.3s ease-in all" , translate: "0px"});
    $("#bm-overlay").css({ transition: "0.3s ease-in all" , translate: "0px"});
    window.setTimeout( opacity1overlay, 300 );
});

$("#bm-closebutton").click(function (e) {
    opacity0overlay();
    $("#burgermenu").css({ transition: "0.3s ease-in all" , translate: "-100%"});
    window.setTimeout( waitoverlay, 300 );
});
$("#bm-overlay").click(function (e) {
    opacity0overlay();
    $("#burgermenu").css({ transition: "0.3s ease-in all" , translate: "-100%"});
    window.setTimeout( waitoverlay, 300 );
});

