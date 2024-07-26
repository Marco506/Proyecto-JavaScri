document.addEventListener("DOMContentLoaded", function() {
    const btnLogin = document.getElementById("btnLogin");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    btnLogin.addEventListener("click", function(event) {
        event.preventDefault(); // Prevenir el envío del formulario

        // Obtener los valores de los campos de entrada
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Recuperar valores desde localStorage
        const savedUsername = localStorage.getItem('nombre');
        const savedPassword = localStorage.getItem('contraseña');

        // Comparar los valores ingresados con los valores guardados
        if (username === savedUsername && password === savedPassword) {
            alert('Inicio de sesión exitoso!');
        } else {
            alert('Nombre de usuario o contraseña incorrectos.');
        }
    });
});



