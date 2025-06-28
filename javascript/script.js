$(document).ready(function(){
  const $slider = $('.card__slider');
  const $counter = $('.slider-counter');

  $slider.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.slider-prev'),
    nextArrow: $('.slider-next')
  });

  $slider.on('init afterChange', function(event, slick, currentSlide){
    const currentPage = Math.floor(currentSlide / slick.options.slidesToShow);
    const totalPages = Math.ceil(slick.slideCount / slick.options.slidesToShow);
    $counter.text(`${currentPage + 1} из ${totalPages}`);
  });

  // вручную вызываем событие init, если нужно сразу отобразить счётчик
  $slider.slick('setPosition');
});

  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu__list');

  burger.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
