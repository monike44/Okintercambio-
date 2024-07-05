const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 0,
    speed: 550,
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 3,
    
    autoplay: {
        delay: 2500,
    },

    keyboard:{
        enable: true,
    },


    breakpoints: {
        1200: {
            slidesPerView: 3,
            spaceBetween: 0
        },

        742: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        
        425: {
            slidesPerView: 1,
            spaceBetween: 50
        },
        
        267: {
            slidesPerView: 1.1,
            spaceBetween: 100,

        }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});