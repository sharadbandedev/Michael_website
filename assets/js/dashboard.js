console.log("dashboard js Loaded...21mb");
$(document).ready(function() {
    // Retrieve credentials from local storage
    var storedUserID = localStorage.getItem('userID');
    var storedPassword = localStorage.getItem('password');
console.log("storedUserID: "+storedUserID);
console.log("storedPassword: "+storedPassword);
    // Check if the credentials are set
    if (storedUserID !== 'RJMC' || storedPassword !== 'Abcd1234!') {
        // Redirect to login page
        window.location.href = 'login.html';
    } else {
        // Credentials are correct, allow access to dashboard
        console.log('Welcome to the dashboard');
    }



    // Toggle the sidebar
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});

function logout() {
     localStorage.clear(); 
    window.location.href = 'login.html';
}