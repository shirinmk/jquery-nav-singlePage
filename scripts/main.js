$(document).ready(function(){
    var headerHeight = $('header').outerHeight();// the height of header
    $('.main_menu ul li a').click(function(event){
        $('.main_menu ul li a').removeClass('active');
        $(this).addClass('active');
        thisAttrHref = $(this).attr('href');
        thisAttrHrefoffset = $(thisAttrHref).offset().top - headerHeight;
        $('html,body').animate({
          scrollTop:thisAttrHrefoffset},1000);
          event.preventDefault();

    });
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