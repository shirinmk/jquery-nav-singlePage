$(document).ready(function(){
    var headerHeight = $('header').outerHeight();// the height of header
    $('.slide-section').click(function(e){
        // alert('click');
        var linkHref = $(this).attr('href');
        var headerHeight = $('header').outerHeight();// the height of header
        console.log(headerHeight);
        console.log(linkHref);
        console.log($(linkHref).offset().top);
        //want to scrool than  to that position
        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - headerHeight
        },1000);
        e.preventDefault(); //doesent show on address bar location
    })

});