document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return;
    }

    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);

    window.location.href = 'success.html';
});
