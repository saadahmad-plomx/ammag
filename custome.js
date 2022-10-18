function sticky_header() {
    "use strict";
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50){  
            $('#main-navigation').addClass("sticky");
        }
        else{
            $('#main-navigation').removeClass("sticky");
        }
        if ($(this).scrollTop() > 150) {
            $('.scrolltop') .addClass('left') .removeClass('right');
        } 
        else {
            $('.scrolltop') .addClass('right') .removeClass('left');
        }
    });
}
function gototop() {
    "use strict";
    $('.scrolltop').on("click", function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
}
jQuery(document).ready(function($) {
    sticky_header();
        gototop();
});
$(document).ready(function(){
    $(".navbar-toggler").click(function(){
      $(".navbar-toggler").toggleClass("active");
    });
});
$(document).click((event) => {
    if (!$(event.target).closest('#main-navigation').length) {
        $(".navbar-toggler").removeClass("active");
        $('.collapse').collapse('hide');
    }        
});
$(".about-btn").click(function () { $('html, body').animate({ scrollTop: $("#about").offset().top }, 1000); });
$(".services-btn").click(function () { $('html, body').animate({ scrollTop: $("#services").offset().top }, 1000); });
$(".portfolio-btn").click(function () { $('html, body').animate({ scrollTop: $("#portfolio").offset().top }, 1000); });
$(".blog-btn").click(function () { $('html, body').animate({ scrollTop: $("#blog").offset().top }, 1000); });
$(".contact-btn").click(function () { $('html, body').animate({ scrollTop: $("#footer").offset().top }, 1000); });