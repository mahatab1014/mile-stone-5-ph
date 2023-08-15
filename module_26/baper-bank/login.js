document.getElementById('login-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if (userEmail === "admin@baap.com" && userPassword === "$12345") {
        location.replace("dashboard.html")
    } else {
        wrongInfo.showModal();
    }
});
