// menu //

const elBtnMenu = document.querySelector('.m-btn-menu');
const elMenu = document.querySelector('.m-menu');
const elMenuClose = document.querySelector('.close');

elBtnMenu.addEventListener('click', function(){elMenu.classList.add('active');});
elMenuClose.addEventListener('click', function(){elMenu.classList.remove('active');});

// quantity + - //

const
quantity = document.querySelector('.qua-res'),
btn_plus = document.querySelector('.plus'),
btn_minus = document.querySelector('.minus');

let
num = 1;

btn_plus.addEventListener('click', function(){
    if (num < 5){
        quantity.textContent = ++ num;
    }
});
btn_minus.addEventListener('click', function(){
    if (num > 0){
        quantity.textContent = -- num;
    }
});

// scroll header //

let scrollState = {y: 0, y2: 0, state:'down'}
    
    function scrollHeader(){
        scrollState.y = $(window).scrollTop();

        if(scrollState.y > scrollState.y2){
            scrollState.state = true;
        }else{
            scrollState.state = false;
        }
        scrollState.y2 = scrollState.y;
    }

    function header(){
        scrollHeader();

        if(scrollState.state){
            $('.header-b').addClass('active');
        }else{
            $('.header-b').removeClass('active');
        }
    }
    
    $(window).on('scroll', header);

// swiper //

var swiper = new Swiper(".mySwiper", {
    loop: true,
    direction: "vertical",
    spaceBetween: 10,
    slidesPerView: 3.2,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    thumbs: {
    swiper: swiper,
    },
});