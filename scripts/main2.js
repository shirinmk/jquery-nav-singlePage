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
// this is for windows you use scroll baar
$(window).scroll(function(){
    $('.container_row').each(function(){
        containerRowTop = $(this).offset().top - 20;
        if($(document).scrollTop()> containerRowTop){
            thisOfs = $(this).attr('id');
            $('.container_row').removeClass('active');
            ActiveID = $(this).addClass('active').attr('id');
    
        }
    });
    $('.main_menu ul li').each(function(index,el){
        thisChildren = $(this).children('a');
        thisChildrenHref = $(this).children('a').attr('href');
        if(thisChildrenHref === '#'+ActiveID){
            $('.main_menu ul li a').removeClass('active');
            $(thisChildren).addClass('active');
    
        }
    });
    
    });