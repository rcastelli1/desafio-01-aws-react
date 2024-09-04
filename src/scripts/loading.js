function redirect() {
    setTimeout(function() {
        window.location.href = '../pages/presentation.html';
    }, 4000);
}

window.onload = redirect();