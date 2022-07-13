// menu //

const elBtnMenu = document.querySelector('.m-btn-menu');
const elMenu = document.querySelector('.m-menu');
const elMenuClose = document.querySelector('.close');

elBtnMenu.addEventListener('click', function(){elMenu.classList.add('active');});
elMenuClose.addEventListener('click', function(){elMenu.classList.remove('active');});


// login

const
        elId = document.querySelector('.id > input'),
        elPassword = document.querySelector('.password > input'),
        elBtn_login = document.querySelector('.login');

        elBtn_login.addEventListener('click', function(){

            if(elId.value == 'juhee'){

                if(elPassword.value == '123'){
                    alert('WELCOME JUHEE');
                }else{elPassword.style = "border-bottom: 2px solid #FF0000;";}

            }else{
                alert('Please, try again');
            }
        })

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
                $('.header-b').addClass('active');
            }else{
                $('.header-b').removeClass('active');
            }
        }
        
        $(window).on('scroll', header);