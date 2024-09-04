document.addEventListener('DOMContentLoaded', function() {
   
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');

    document.getElementById('user-name').textContent = userName;
    document.getElementById('user-email').textContent = userEmail;
});
