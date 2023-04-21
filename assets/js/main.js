visualSlide(); // visual Slide
todayEngSlide(); // today English Slide
bannerSlide(); // banner Slide
reviewSlide(); // review Slide

// visual Slide
function visualSlide() {
    $(".visualSlide").slick({
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 700,
        dots: true,
        appendDots: $(".visualDots"),
        infinite: true,
        pauseOnHover: false,
        arrows: true,
        prevArrow: $(".visualArrow .prev"),
        nextArrow: $(".visualArrow .next")
    });
}

// today English Slide
function todayEngSlide() {
    $(".todayEngSlide").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 700,
        dots: false,
        infinite: true,
        pauseOnHover: false,
        arrows: true,
        prevArrow: $(".todayEngArrow .prev"),
        nextArrow: $(".todayEngArrow .next")
    });
}

// banner Slide
function bannerSlide() {
    $(".bannerSlide").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 700,
        dots: true,
        infinite: true,
        pauseOnHover: false,
        arrows: false
    });
}

// review Slide
function reviewSlide() {
    $(".reviewSlide").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 700,
        centerMode: true,
        centerPadding: "0",
        dots: false,
        infinite: true,
        pauseOnHover: false,
        arrows: true,
        prevArrow: $(".reviewArrow .prev"),
        nextArrow: $(".reviewArrow .next")
    });
}