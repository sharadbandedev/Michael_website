$(document).ready(function() {
    console.log('Login js Loaded...');

    var storedUserID = localStorage.getItem('userID');
    var storedPassword = localStorage.getItem('password');

    // Check if the credentials are set
    if (storedUserID == 'RJMC' || storedPassword == 'Michael@123') {
        // Redirect to login page
        window.location.href = 'dashboard.html';
    } else {
        // Credentials are correct, allow access to dashboard
        console.log('Welcome to the dashboard');
    }



    $('#loginForm').parsley().on('form:submit', function() {
        var userID = $('#userID').val();
        var password = $('#password').val();

        console.log(userID);
        console.log(password);

        if (userID === 'RJMC' && password === 'Abcd1234!') {
            // Store credentials in local storage
            localStorage.setItem('userID', userID);
            localStorage.setItem('password', password);
        // Show loader
        $('body').append(`
            <div id="overlay" style="
                position: fixed; 
                top: 0; 
                left: 0; 
                width: 100%; 
                height: 100%; 
                background: rgba(0, 0, 0, 0.3); 
                z-index: 999; 
                display: flex; 
                align-items: center; 
                justify-content: center;
            ">
                <div id="loader" style="
                    font-size: 20px; 
                    color: #fff;
                ">Loading...</div>
            </div>
        `);

        // Wait for 3 seconds before redirecting
        setTimeout(function() {
            // Hide overlay and loader
            $('#overlay').remove(); 
            window.location.href = 'dashboard.html';
        }, 3000);

        
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Unauthorized user',
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 7000,
                timerProgressBar: true
            });
        }

        return false; // Prevent form submission
    });
});
