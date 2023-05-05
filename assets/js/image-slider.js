// const slider = document.querySelector('.slider');
// const items = document.querySelectorAll('.slider-item');
// const itemCount = items.length;
// const itemWidth = slider.clientWidth / 3;
// const totalWidth = itemWidth * itemCount;

// slider.style.width = `${totalWidth}px`;

// Add event listeners for the previous and next buttons
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');

// prevBtn.addEventListener('click', () => {
//   slider.scrollBy({
//     left: -itemWidth,
//     behavior: 'smooth'
//   });
// });

// nextBtn.addEventListener('click', () => {
//   slider.scrollBy({
//     left: itemWidth,
//     behavior: 'smooth'
//   });
// });

// const sliderContainer = document.querySelector('.slider-container');
// const slider = document.querySelector('.slider');

// let clicked = false;
// let xAxis;
// let x;

// sliderContainer.addEventListener('mouseup', () => {
//     sliderContainer.style.cursor = `grab`;
// }) 
// sliderContainer.addEventListener('mousedown', e => {
//     clicked = true
//     xAxis = e.offsetX - slider.offsetLeft;
//     // tells the current position

//     sliderContainer.style.cursor = `grabbing`
// })

// window.addEventListener('mouseup', () => {
//     clicked = false
// })

// sliderContainer.addEventListener('mousemove', e => {
//     if (!clicked) return;
//     e.preventDefault();

//     x = e.offsetX;
//     slider.style.left = `${x - xAxis}px`;
//     // but we dont want it to scroll forever

//     checkSize()
// })

// function checkSize () {
//     let sliderContainerOut = sliderContainer.getBoundingClientRect();
//     let sliderIn = slider.getBoundingClientRect();

//     if (parseInt(slider.style.left) > 0) {
//         slider.style.left = `0px`;
//     } else if (sliderIn.right < sliderContainerOut.right) {
//         slider.style.left = `-${sliderIn.width - sliderContainerOut.width}px`
//     }
// }

// Calculate the heighest slide and set a top/bottom margin for other children.
// As variableHeight is not supported yet: https://github.com/kenwheeler/slick/issues/1803


// var maxHeight = -1;
// $('.slick-slide').each(function() {
//   if ($(this).height() > maxHeight) {
//   maxHeight = $(this).height();
//   }
// });
// $('.slick-slide').each(function() {
//   if ($(this).height() < maxHeight) {
//     $(this).css('margin', Math.ceil((maxHeight-$(this).height())/2) + 'px 0');
//   }
// });

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


    $('.variable-width').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
      });

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

      $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
              
});