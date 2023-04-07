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
new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
});
