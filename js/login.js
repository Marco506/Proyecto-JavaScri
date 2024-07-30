
    const btnLogin = document.getElementById("btnLogin");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    btnLogin.addEventListener("click", function(event) {
        event.preventDefault();

        // Obtener los valores de los campos de entrada
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        let usuarios = JSON.parse(localStorage.getItem("listaUsuarios")) ||[];

        let UsuarioEncontrado = usuarios.find(usuario =>
            usuario.nombre === username && usuario.contraseña === password
        );

        if (UsuarioEncontrado) {
            alert("Usuario correcto")
            window.location.href = "adminidracion.html"
            
        } else {
            alert("Los datos no coinsiden")
            
        }});


