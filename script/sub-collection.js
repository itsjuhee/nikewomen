const elBtndetail = document.querySelector('.btn-detail');
const elCollectmore = document.querySelector('.collect-more');


elBtndetail.addEventListener('click', function(){elCollectmore.classList.add('active');});
elCollectmore.addEventListener('click', function(){elCollectmore.classList.remove('active');});