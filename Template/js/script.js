$(document).ready(function(){
    $(".nav-icon").click(function(){
        $(".full-nav").addClass("open");
    });
    
    $(".nav-close").click(function(){
        $(".full-nav").removeClass("open");
    });

    $(window).scroll(function(){
        const scr = $(window).scrollTop();
        if(scr > 75) $(".nav").addClass("sticky");
        else $(".nav").removeClass("sticky");

    });
    
    $(".bxslider").bxSlider({
        mode: 'horzontal',
        moveSlides:1,
        infiniteLoop:true,
        minSlides:1,
        maxSlides:1,
        stopAutoOnClick: true,
        // auto: true,
        autoControls: true,
        pager: true,
        speed:1200,
    });
})
