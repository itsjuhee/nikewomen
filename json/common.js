
// new

$.ajax({
    url: './json/data.json', 
    success:function(data){        
        let elNew = '';
        $.each(data.new, function(key, pro){
            elNew += 
            `<li>
                <div class="pro-img">
                    <a class="btn-wish"> wishlist </a>
                    <a class="product-img"> 
                        <img src="${pro.img}" alt="product-img"> </a>
                    <span> QUICK VIEW </span>
                </div>
                <div class="pro-txt">
                    <p> ${pro.cate} </p>
                    <p> ${pro.model} </p>
                    <p><span>${pro.price}</span>원</p>
                </div>
            </li>`;
        })
        $('.product ul').html(elNew)
    }
});


// shoes

$.ajax({
    url: './json/data.json', 
    success:function(data){
        let elShoes = '';
        $.each(data.shoes, function(key, pro){
            elShoes += 
            `<li>
                <div class="pro-img">
                    <a class="btn-wish"> wishlist </a>
                    <a class="product-img"> 
                        <img src="${pro.img}" alt="product-img"> </a>
                    <span> QUICK VIEW </span>
                </div>
                <div class="pro-txt">
                    <p> ${pro.cate} </p>
                    <p> ${pro.model} </p>
                    <p><span>${pro.price}</span>원</p>
                </div>
            </li>`;
        })
        $('.product ul').html(elShoes)
    }
});


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
                    <span> QUICK VIEW </span>
                </div>
                <div class="pro-txt">
                    <p> ${pro.cate} </p>
                    <p> ${pro.model} </p>
                    <p><span>${pro.price}</span>원</p>
                </div>
            </li>`;
        })
        $('.product ul').html(elClothes)
    }
});
