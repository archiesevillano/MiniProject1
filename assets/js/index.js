var swiper;
var air_swiper;
var news_swiper;

fitSlides();

window.addEventListener('resize', () => {
    fitSlides(); //Adjusts the slideViewCount when the screen size changed
})

function fitSlides() {
    if (screen.width <= 900) {
        air_swiper = new Swiper(".air-stats", {
            slidesPerView: 1,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
    else if (screen.width <= 1550) {
        air_swiper = new Swiper(".air-stats", {
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
    else {
        //SwiperJS Short Clips Script
        swiper = new Swiper(".mySwiper", {
            slidesPerView: 7,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        //SwiperJS Short Clips Script
        news_swiper = new Swiper(".newsSwiper", {
            slidesPerView: 5,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        //SwiperJS Short Clips Script
        air_swiper = new Swiper(".air-stats", {
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        //SwiperJS Short Clips Script
        short_clips = new Swiper(".short-clips-section", {
            slidesPerView: 5,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

}

