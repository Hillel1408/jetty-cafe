const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 2000,
    },
    loop: true,
});
