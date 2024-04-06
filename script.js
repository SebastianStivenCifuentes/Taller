// script.js
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Por favor, ingrese un nombre de usuario y una contraseña válidos.');
        return false;
    }

    return true;
}

