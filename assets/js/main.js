document.addEventListener('DOMContentLoaded', function(){
    Typed.new('.customers', {
        strings: ["Game Developers.", "VR Developers.", "3D artists.", "AR Developers.", "Animators."],
        typeSpeed: 20,
        loop: true,
        backDelay: 1500,
        showCursor: false,
    });

    document.querySelector('#contact-btn').addEventListener('click', function() {
        // console.log('clicked');
        this.style.display = 'none';
        document.querySelector('#contact-form').style.display = 'block'; 
    });

    document.querySelector('.close').addEventListener('click', function() {
        // console.log('closed');
        document.querySelector('#contact-btn').style.display = 'block';
        document.querySelector('#contact-form').style.display = 'none';
    });

    var login_form = document.querySelector('#login-form');
    var signup_form = document.querySelector('#signup-form');

    if (login_form) {
        login_form.addEventListener('submit', function(e) {
            document.querySelector('.error-login').innerHTML = '';
            document.querySelector('.error-signup').innerHTML = '';
            e.preventDefault();
            document.querySelector('.error-login').innerHTML = 'Wrong email or password.';
            clearInputs();
        });
    }

    if (signup_form) {
        signup_form.addEventListener('submit', function(e) {
            document.querySelector('.error-login').innerHTML = '';
            document.querySelector('.error-signup').innerHTML = '';
            e.preventDefault();
            document.querySelector('.error-signup').innerHTML = 'Wrong email or invite code.';
            clearInputs();
        });
    }

    

    
});

function clearInputs() {
    scroll(0,0)
    var inputs = document.querySelectorAll('input');
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}