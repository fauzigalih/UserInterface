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
})