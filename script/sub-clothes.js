// clothes

$.ajax({
    url: './json/data.json', 
    success:function(data){
        let elClothes = '';
        $.each(data.clothes, function(key, pro){
            elClothes += 
            `<li>
                <div class="pro-img">
                    <a class="btn-wish"> wishlist </a>
                    <a class="product-img"> 
                        <img src="${pro.img}" alt="product-img"> </a>
                    <span class="quickview"> QUICK VIEW </span>
                </div>
                <div class="pro-txt">
                    <p> ${pro.cate} </p>
                    <p> ${pro.model} </p>
                    <p><span>${pro.price}</span>원</p>
                </div>
            </li>`;
        })
        $('.product ul').html(elClothes)


        // quick view

        $('.quickview').on('click', function(){
            $('.popup').addClass('active');
        })
        $('.quick-close').on('click', function(){
            $('.popup').removeClass('active');
        })
    }
});

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

