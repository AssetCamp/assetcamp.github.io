document.addEventListener('DOMContentLoaded', function(){
    Typed.new('.customers', {
        strings: ["Game Developers.", "VR Developers.", "other 3D artists.", "AR Developers.", "Animators."],
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


    // hides form on submit
  $('#mc-embedded-subscribe').click(function() {
    $('#signup-form__inputs').hide();
    $('.alpha-text').hide();
    $(this).hide();
    $('#mce-responses').show(500);
  });
    

    // Add smooth scrolling to all links
    $(".scroll").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });
    
});

function clearInputs() {
    scroll(0,0)
    var inputs = document.querySelectorAll('input');
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}