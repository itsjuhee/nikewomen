// menu //

const elBtnMenu = document.querySelector('.m-btn-menu');
const elMenu = document.querySelector('.m-menu');
const elMenuClose = document.querySelector('.close');

elBtnMenu.addEventListener('click', function(){elMenu.classList.add('active');});
elMenuClose.addEventListener('click', function(){elMenu.classList.remove('active');});

// quick-view //

const elQuickview = document.querySelector('.quickview');
const elPopup = document.querySelector('.popup');
const elQuickClose = document.querySelector('.quick-close');


elQuickview.addEventListener('click', function(){elPopup.classList.add('active');});
elQuickClose.addEventListener('click', function(){elPopup.classList.remove('active');});

// collection popup //

const elBtndetail = document.querySelector('.btn-detail');
const elCollectmore = document.querySelector('.collect-more');


elBtndetail.addEventListener('click', function(){elCollectmore.classList.add('active');});
elCollectmore.addEventListener('click', function(){elCollectmore.classList.remove('active');});


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

