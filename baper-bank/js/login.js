document.getElementById('login-submit').addEventListener('click',function(){

    // get user Email
    const emailField = document.getElementById('user-email');

    const userEmail = emailField.value;

    // get user Password
        const passwordField = document.getElementById('user-password');
        
        const userPassword = passwordField.value;

        if (userEmail == 'ma@bap.com' && userPassword == 'secret'){
            // console.log('valid user');

            window.location.href = 'banking.html'
        }
    
})

