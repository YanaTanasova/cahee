$(function() {

    var pageH = $("#js--main-page").height();
    
    $(document).on("scroll", function(){

        var documentScroll = $(this).scrollTop();

        if(documentScroll > pageH){
            $("#js--header").addClass("header--fixed");
        } else{
            $("#js--header").removeClass("header--fixed");
        }
    });

    $("#js--nav").on("click","a", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });


    $("#js--responsive-btn").on("click", function(){

        $("#js--nav__list").slideToggle();

    });


    $("#js--scroll").on("click", function(){
        
        var aboutOffset = $("#js--about").offset().top;

        $("html, body").animate({
            scrollTop: aboutOffset
        }, 400);
    });

    $(document).on("scroll", onScroll);

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#js--nav a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('#js--nav ul li a').removeClass("current");
                currLink.addClass("current");
            }
            else{
                currLink.removeClass("current");
            }
        });
    }

});


