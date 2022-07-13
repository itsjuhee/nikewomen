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
    direction: "horizontal",
    slidesPerView: 2.5,
    spaceBetween: 10,
    mousewheel: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    breakpoints: {
    640: {
        slidesPerView: 2.5,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 3.5,
        spaceBetween: 30,
    },
    1024: {
        slidesPerView: 3.5,
        spaceBetween: 40,
    },
    },
});

// mobile menu //

const elBtnMenu = document.querySelector('.m-btn-menu');
const elMenu = document.querySelector('.m-menu');
const elMenuClose = document.querySelector('.close');

elBtnMenu.addEventListener('click', function(){elMenu.classList.add('active');});
elMenuClose.addEventListener('click', function(){elMenu.classList.remove('active');});
