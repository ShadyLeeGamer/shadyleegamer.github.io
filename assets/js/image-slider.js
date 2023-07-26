var maxHeight = -1;
$('.slick-slide').each(function() {
  if ($(this).height() > maxHeight) {
    maxHeight = $(this).height();
  }
});
$('.slick-slide').each(function() {
    if ($(this).height() < maxHeight) {
    console.log($(this).height());
    $(this).css('margin', Math.ceil((maxHeight-$(this).height())/2) + 'px ');
  }
});

$(function()
{
      $('.template').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,

        // adaptiveHeight: true,
        
        responsive: [
          {
            breakpoint: 736,
            settings: {
              vertical: true,
              verticalSwiping: true,
              variableWidth: false,
              variableHeight: true,
              slidesToShow: 1
            }
          }
        ]
      });   
});