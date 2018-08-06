$('.list').slick({
    vertical: true,
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                // arrows: false,
                // centerMode: true,
                // centerPadding: '40px',
                slidesToShow: 3,
                vertical: false
            }
        }
    ]
});
$('.list').find('.slick-slide.slick-active').last().css('opacity', 0.4);

$(function () {
    $('.list').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(this).find('.slick-slide').css('opacity', 1);
        $(this).find('.slick-slide.slick-active').last().css('opacity', 0.4);
        return false
    });
})

// $navTabList.on('afterChange', function (event, slick, currentSlide, nextSlide) {
//     $(this).parents('.tab__wrapper').find('.tabCont').addClass('hide');
//     $(this).find('.slick-current').siblings().removeClass('active');
//     var id = $(this).find('.slick-current a').attr('href');
//     $(id).removeClass('hide');
//     $(this).parent().find('.slick-current').addClass('active');
//     return false;
// });
