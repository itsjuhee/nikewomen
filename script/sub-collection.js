// menu //

const elBtnMenu = document.querySelector('.m-btn-menu');
const elMenu = document.querySelector('.m-menu');
const elMenuClose = document.querySelector('.close');

elBtnMenu.addEventListener('click', function(){elMenu.classList.add('active');});
elMenuClose.addEventListener('click', function(){elMenu.classList.remove('active');});

// collection popup //

const elBtndetail = document.querySelector('.btn-detail');
const elCollectmore = document.querySelector('.collect-more');


elBtndetail.addEventListener('click', function(){elCollectmore.classList.add('active');});
elCollectmore.addEventListener('click', function(){elCollectmore.classList.remove('active');});

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
        $('.header-w').addClass('active');
    }else{
        $('.header-w').removeClass('active');
    }
}

$(window).on('scroll', header);