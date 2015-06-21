$(document).ready(function(){

    $('.bs-click').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('.bs-categories').offset().top }, 1000);
        e.preventDefault();
    });

});