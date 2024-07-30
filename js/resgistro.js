document.addEventListener("DOMContentLoaded", function() {
    const nombreU = document.getElementById("nombreU");
    const apellidoU = document.getElementById("apellidosU");
    const emailU = document.getElementById("emailU");
    const contraseñaU = document.getElementById("contraseñaU");

    const btnRegistro = document.getElementById("btnRegistro");
    const registroForm = document.getElementById("registroForm");

    // Para guardar los datos del usuario en una lista
    let usuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];

    btnRegistro.addEventListener("click", function(event) {
        event.preventDefault(); 

       
        const nombre = nombreU.value;
        const apellido = apellidoU.value;
        const email = emailU.value;
        const contraseña = contraseñaU.value;

        // Para que los campos no queden vacíos
        if (nombre === '' || apellido === '' || email === '' || contraseña === '') {
            alert("Por favor, complete todos los campos.");
            return;
        }
        const nuevoUsuario = {
            nombre: nombre,
            apellido: apellido,
            email: email,
            contraseña: contraseña
        };

        // Agregar el nuevo usuario al arreglo
        usuarios.push(nuevoUsuario);

        // Guardar en localStorage (clave: "listaUsuarios")
        localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));

        // Limpiar los campos después de guardar
        nombreU.value = "";
        apellidoU.value = "";
        emailU.value = "";
        contraseñaU.value = "";

        // Mostrar alerta después de registrar
        alert("Usuario registrado correctamente");
    });
});

