const elQuickview = document.querySelector('.quickview');
const elPopup = document.querySelector('.popup');
const elClose = document.querySelector('.close');


elQuickview.addEventListener('click', function(){elPopup.classList.add('active');});
elClose.addEventListener('click', function(){elPopup.classList.remove('active');});