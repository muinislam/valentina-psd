$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    $('.ceo_content').slick({
        prevArrow:'.prev_arrow',
        nextArrow:'.next_arrow',
        slidesToShow:2,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        infinite:true
        
      });
})
$(window).scroll(function(){
  var scrolling =$(this).scrollTop();
  if(scrolling > 200){
    $(".top_to_bottom").fadeIn(500);
    $(".top_to_bottom").css({bottom:"50px"});
}else{
  $(".top_to_bottom").fadeOut(500);
  $(".top_to_bottom").css({bottom:"100px"});
}
})

//scrool body
$(function(){
  $(".top_to_bottom").click(function(){
    $("body,html").scrollTop(0)
  })
})