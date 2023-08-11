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