
$(".present__slider .slider__item-image").each(function(index){
    $(this).attr('data-id', index);
    $(this).clone().removeClass("big-image").appendTo('.present__popup-slider')
})

$(".present_adaptive .slider__item-image").each(function(index){
    $(this).attr('data-id', index);
})

$(".present__slider").slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.present__arrow.arrow_back'),
    nextArrow: $('.present__arrow.arrow_next')   
})


$(".present__slider").on("click",function(ev){
    let imgWrp = $(ev.target).closest('.slider__item-image');
    if (imgWrp.hasClass("slider__item-image")) {
        $(".present__popup").fadeIn(300)
        $(".present__popup-slider").slick('refresh')
        $('.present__popup-slider').slick('slickGoTo', imgWrp.attr('data-id'));
    }
})

$(".present_adaptive .present__content").on("click",function(ev){
    let imgWrp = $(ev.target).closest('.slider__item-image');
    if (imgWrp.hasClass("slider__item-image")) {
        $(".present__popup").fadeIn(300)
        $(".present__popup-slider").slick('refresh')
        $('.present__popup-slider').slick('slickGoTo', imgWrp.attr('data-id'));
    }
})



$(".present__popup-slider").slick({
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.present__popup-arrow.arrow_back'),
    nextArrow: $('.present__popup-arrow.arrow_next')   
})

$(".present__popup-exit").on("click",function(){
    $(".present__popup").fadeOut(300)
})