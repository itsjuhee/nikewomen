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