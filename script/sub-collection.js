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