
    const btnLogin = document.getElementById("btnLogin");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    btnLogin.addEventListener("click", function(event) {
        event.preventDefault(); // para controlar el comportamiento del navegador, para evitar el envio de datos.

        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        let usuarios = JSON.parse(localStorage.getItem("listaUsuarios")) ||[];
        //recorre la lista de Usuario
        let UsuarioEncontrado = usuarios.find(usuario =>
            usuario.nombre === username && usuario.contraseña === password
        );

        if (UsuarioEncontrado) {
            alert("Usuario correcto")
            window.location.href = "adminidracion.html"
            
        } else {
            alert("Los datos no coinsiden")
            
        }});


