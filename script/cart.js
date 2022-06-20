// menu //

const elBtnMenu = document.querySelector('.m-btn-menu');
const elMenu = document.querySelector('.m-menu');
const elMenuClose = document.querySelector('.close');

elBtnMenu.addEventListener('click', function(){elMenu.classList.add('active');});
elMenuClose.addEventListener('click', function(){elMenu.classList.remove('active');});

// quantity + - //

// const
// quantity = document.querySelector('.qua-res'),
// btn_plus = document.querySelector('.plus'),
// btn_minus = document.querySelector('.minus');

// let
// num = 1;

// btn_plus.addEventListener('click', function(){
//     if (num < 5){
//         quantity.textContent = ++ num;
//     }
// });
// btn_minus.addEventListener('click', function(){
//     if (num > 0){
//         quantity.textContent = -- num;
//     }
// });

