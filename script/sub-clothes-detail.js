
    const
    quantity = document.querySelector('.quantity > div > input'),
    btn_plus = document.querySelector('.plus'),
    btn_minus = document.querySelector('.minus');

    let
    num = 1;
    
    btn_plus.addEventListener('click', function(){
        quantity.value = ++ num;
    });
    btn_minus.addEventListener('click', function(){
        quantity.value = -- num;
    });
