
$(document).ready(function(){
    $("#SizeS").css({border: '#DDD9CF solid 1px'});
    $("#SizeM").css({border: '#DDD9CF solid 1px'});
    $("#SizeL").css({border: '#DDD9CF solid 1px'});
    $("#SizeXS").css({border: '#DDD9CF solid 1px'});
    $("#SizeS").on( 'click', function() {
        $("#SizeS").css({ transition: "0.3s ease-in all" , border: '#191919 solid 1px'});
        $("#SizeM").css({ transition: "0.3s ease-in all" , border: '#DDD9CF solid 1px'});
        $("#SizeL").css({ transition: "0.3s ease-in all" , border: '#DDD9CF solid 1px'});
        $("#SizeXS").css({ transition: "0.3s ease-in all" , border: '#DDD9CF solid 1px'});
    });
    $("#SizeM").on( 'click', function() {
        $("#SizeM").css({ transition: "0.3s ease-in all" , border: '#191919 solid 1px'});
        $("#SizeS").css({ transition: "0.3s ease-in all" , border: '#DDD9CF solid 1px'});
        $("#SizeL").css({ transition: "0.3s ease-in all" , border: '#DDD9CF solid 1px'});
        $("#SizeXS").css({ transition: "0.3s ease-in all" , border: '#DDD9CF solid 1px'});
        
    });
    $("#SizeL").on( 'click', function() {
        $("#SizeL").css({ transition: "0.3s ease-in all" , border: '#191919 solid 1px'});
        $("#SizeS").css({ transition: "0.3s ease-in all" , border: '#DDD9CF solid 1px'});
        $("#SizeM").css({ transition: "0.3s ease-in all" , border: '#DDD9CF solid 1px'});
        $("#SizeXS").css({ transition: "0.3s ease-in all" , border: '#DDD9CF solid 1px'});
    });
    $("#SizeXS").on( 'click', function() {
        $("#SizeXS").css({ transition: "0.3s ease-in all" , border: '#191919 solid 1px'});
        $("#SizeS").css({ transition: "0.3s ease-in all" , border: '#DDD9CF solid 1px'});
        $("#SizeM").css({ transition: "0.3s ease-in all" , border: '#DDD9CF solid 1px'});
        $("#SizeL").css({ transition: "0.3s ease-in all" , border: '#DDD9CF solid 1px'});
    });
});

var flagsize = false;

$(document).ready(function(){
    var h = document.getElementById('contsize').clientHeight;
    $('#contsize').css({height:'53px'}, 250);
    $('#presssize').click(function(){
        if(flagsize == false)
        {
            $('#contsize').animate({height: h}, 250);
            $('#contsizebutton').css({ transition: "0.25s ease-in all" , rotate:'180deg'});
            flagsize = true;
            return;
        }
        if(flagsize == true)
        {
            $('#contsize').animate({height:'53px'}, 250);
            $('#contsizebutton').css({ transition: "0.25s ease-in all" , rotate:'0deg'});
            flagsize = false;
            return;
        }
    });
});

var flagdescription = false;

$(document).ready(function(){
    var h = document.getElementById('contdescription').clientHeight;
    $('#contdescription').css({height:'53px'}, 150);
    $('#descriptionChild').click(function(){
        if(flagdescription == false)
        {
            $('#contdescription').animate({height: h}, 150);
            $('#contdescriptionbutton').css({ transition: "0.15s ease-in all" , rotate:'180deg'});
            flagdescription = true;
            return;
        }
        if(flagdescription == true)
        {
            $('#contdescription').animate({height:'53px'}, 150);
            $('#contdescriptionbutton').css({ transition: "0.15s ease-in all" , rotate:'0deg'});
            flagdescription = false;
            return;
        }
    });
});

var flagrule = false;

$(document).ready(function(){
    var h = document.getElementById('contrule').clientHeight;
    $('#contrule').css({height:'53px'}, 50);
    $('#ruleChild').click(function(){
        if(flagrule == false)
        {
            $('#contrule').animate({height: h}, 50);
            $('#contrulebutton').css({ transition: "0.15s ease-in all" , rotate:'180deg'});
            flagrule = true;
            return;
        }
        if(flagrule == true)
        {
            $('#contrule').animate({height:'53px'}, 50);
            $('#contrulebutton').css({ transition: "0.15s ease-in all" , rotate:'0deg'});
            flagrule = false;
            return;
        }
    });
});