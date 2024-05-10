// $(document).ready(function() {
//     $('.burger-menu, .burger-menu-close').click(function(event) {
//        $('.nav,.burger-menu-close, .burger-menu').toggleClass('active');
//        $('body').toggleClass('lock');

//     });
//     //  tabs
//   $(".contact__item > a").click(function (e) {
//    e.preventDefault();

//    var currentAttrValue = $(this).attr("href");

//    console.log(currentAttrValue);

//    // Показываем содержимое вкладки
//    $(".contact__body").removeClass("active");
//    $(currentAttrValue).addClass("active");

//    // Делаем текущую вкладку активной
//    $(".contact__item > a").removeClass("active");
//    $(this).addClass("active");
//  });
// });

$(document).ready(function () {
  $(".burger-menu, .burger-menu-close").click(function (event) {
    $(".nav,.burger-menu-close, .burger-menu").toggleClass("active");
    //  $('body').toggleClass('lock');
  });
  showDrop();

  $(window).resize(function () {
    showDrop();
  });

  //   $(document).click(function (event) {
  //     if (!$(event.target).closest(".nav__list").length) {
  //       // Если клик произошел не внутри .nav__menu, скрываем все открытые дропдауны
  //       $("a.drop-btn").removeClass("active");
  //     }
  //   });
});

function showDrop() {
  var screenWidth = $(window).width();
  console.log(screenWidth);
  if (screenWidth < 768) {
    $(".nav__link").click(function (event) {
      $(".nav__item").not($(this).parent()).removeClass("active");
      $(this).parent(".nav__item").toggleClass("active");

      event.stopPropagation();
    });
  } else {
    $(".nav__item").removeClass("active");
  }
}

$(".owl-carousel").owlCarousel({
  items: 1,
  // margin: 10,
  autoHeight: true,
  dots: false,
  nav: true,
  navText: false,
  autoplaySpeed: 1000,
  autoplay: true,
  slideSpeed: 2000,
});

$(".reviews-carousel").owlCarousel({
  items: 1,
  // margin: 10,
  autoHeight: true,
  dots: false,
  nav: true,
  navText: false,
  autoplaySpeed: 1000,
  autoplay: true,
  slideSpeed: 2000,
});

$(document).ready(function () {
  $(".star").on("click", function () {
    var rating = parseInt($(this).attr("data-rating"));

    // Очищаем все звезды
    $(".star").removeClass("active");

    // Отмечаем выбранное количество звезд
    for (var i = 1; i <= rating; i++) {
      $('.star[data-rating="' + i + '"]').addClass("active");
    }

    // // Здесь можно отправить данные оценки на сервер или выполнить другие действия
    // console.log('Оценка: ' + rating);
  });
});
