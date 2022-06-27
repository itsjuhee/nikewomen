let data;

$.ajax({
    url: './json/data.json', 
    success:function(data){        
        let elMain = '';

        // 클릭하는 태그에 data-code 입력
        // new
        $.each(data.m_new, function(key, pro){
            elMain = `  <li>
                            <div class="pro-img">
                                <a class="btn-wish"> wishlist </a>
                                <a class="product-img" href="./sub-clothes-detail.html"> 
                                    <img src="${pro.img}" alt="product-img"> 
                                    <img src="${pro.img5}" alt="product-img">
                                </a>
                                <span class="quickview" data-code=${pro.code}> QUICK VIEW </span>
                            </div>
                            <div class="pro-txt">
                                <p> ${pro.cate} </p>
                                <p> ${pro.model} </p>
                                <p><span>${pro.price}</span>원</p>
                            </div>
                        </li>`;
            $('.main-02:nth-of-type(1) ul').append(elMain)
        })
        // recommendation
        $.each(data.m_rec, function(key, pro){
            elMain = `  <li>
                            <div class="pro-img">
                                <a class="btn-wish"> wishlist </a>
                                <a class="product-img" href="./sub-clothes-detail.html"> 
                                    <img src="${pro.img}" alt="product-img">
                                    <img src="${pro.img5}" alt="product-img">
                                </a>
                                <span class="quickview" data-code=${pro.code}> QUICK VIEW </span>
                            </div>
                            <div class="pro-txt">
                                <p> ${pro.cate} </p>
                                <p> ${pro.model} </p>
                                <p><span>${pro.price}</span>원</p>
                            </div>
                        </li>`;
            $('.main-02:nth-of-type(2) ul').append(elMain)
        })
        
        // quick view
        
        $('.quickview').on('click', function(){
            
            let code = $(this).data('code');
            let f = data.m_new.filter(num => num.code == code);

            let elPopup = `
            <div class="img">
            <!-- Swiper -->
                <div class="swiper mySwiper2" style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="${f[0].img1}" alt="detail-01"></div>
                        <div class="swiper-slide"><img src="${f[0].img2}" alt="detail-02"></div>
                        <div class="swiper-slide"><img src="${f[0].img3}" alt="detail-03"></div>
                        <div class="swiper-slide"><img src="${f[0].img4}" alt="detail-04"></div>
                        <div class="swiper-slide"><img src="${f[0].img5}" alt="detail-05"></div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                <div thumbsSlider="" class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="${f[0].img1}" alt="detail-01"></div>
                        <div class="swiper-slide"><img src="${f[0].img2}" alt="detail-02"></div>
                        <div class="swiper-slide"><img src="${f[0].img3}" alt="detail-03"></div>
                        <div class="swiper-slide"><img src="${f[0].img4}" alt="detail-04"></div>
                        <div class="swiper-slide"><img src="${f[0].img5}" alt="detail-05"></div>
                    </div>
                </div>
            </div>
    
            <div class="detail">
                <div class="txt">
                    <p> ${f[0].cate} </p>
                    <p> ${f[0].model} </p>
                    <p><span>${f[0].price}</span>원</p>
                </div>
                <div class="option">
                    <div class="size">
                        <p> 사이즈 </p>
                        <ul>
                            <li>
                                <input type="checkbox" id="75(XS)">
                                <label for="75(XS)"> ${f[0].size1} </label>
                            </li>
                            <li>
                                <input type="checkbox" id="80(S)">
                                <label for="80(S)"> ${f[0].size2} </label>
                            </li>
                            <li>
                                <input type="checkbox" id="85(M)">
                                <label for="85(M)"> ${f[0].size3} </label>
                            </li>
                            <li>
                                <input type="checkbox" id="90(L)">
                                <label for="90(L)"> ${f[0].size4} </label>
                            </li>
                            <li>
                                <input type="checkbox" id="95(XL)">
                                <label for="95(XL)"> ${f[0].size5} </label>
                            </li>
                            <li>
                                <input type="checkbox" id="100(2XL)">
                                <label for="100(2XL)"> ${f[0].size6} </label>
                            </li>
                        </ul>
                    </div>
                    <div class="color">
                        <p> 색상 </p>
                        <div>
                            <input type="checkbox" id="color" checked>
                            <label for="color"> ${f[0].color} </label>
                        </div>
                    </div>
                    <div class="quantity">
                        <p> 수량 </p>
                        <div>
                            <div class="qua-res"> 0 </div>
                            <a class="plus"> + </a> <a class="minus"> - </a>
                        </div>
                    </div>
                </div>
                <span class="quick-close"> X </span>
                <div class="btn">
                    <span> 장바구니 담기 </span>
                    <span> 바로 구매하기 </span>
                </div>
            </div>
        
        <!-- Swiper JS -->
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
        
        <!-- Initialize Swiper -->
        <script>
            var swiper = new Swiper(".mySwiper", {
                loop: true,
                spaceBetween: 10,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,
            });
            var swiper2 = new Swiper(".mySwiper2", {
                loop: true,
                spaceBetween: 10,
                navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                },
                thumbs: {
                swiper: swiper,
                },
            });
        </script>
        `;
        
            $('.popup').html(elPopup);
            $('.popup').addClass('active');

            // close
            $('.quick-close').on('click', function(){

                // if(event.target.className == 'popup active')
                $('.popup').removeClass('active');
            })
            
            // quantity + - 
            let amount = 1;
            const quantity = document.querySelector('.qua-res');
            $('.plus').on('click', function(){
                if (amount < 5) quantity.textContent = ++ amount;
            })
            $('.minus').on('click', function(){
                if (amount > 0) quantity.textContent = -- amount;
            })
        })
    }
});



// menu //

const elBtnMenu = document.querySelector('.m-btn-menu');
const elMenu = document.querySelector('.m-menu');
const elMenuClose = document.querySelector('.close');

elBtnMenu.addEventListener('click', function(){elMenu.classList.add('active');});
elMenuClose.addEventListener('click', function(){elMenu.classList.remove('active');});
