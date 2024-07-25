
const nombreU = document.getElementById("nombreU");
const apellidoU = document.getElementById("apellidosU");
const emailU = document.getElementById("emailU");
const contraseñaU = document.getElementById("contraseñaU");

const btnRegistro = document.getElementById("btnRegistro");

//Para guardar los datos del usuario en una lista
let usuarios = [];

btnRegistro.addEventListener("click", function() {
    // para obtener el valor de los campos...
    const nombre = nombreU.value.trim(); // (trim)  Es para eliminar los espacios en blanco al principio y al final del input
    const apellido = apellidoU.value.trim();
    const email = emailU.value.trim();
    const contraseña = contraseñaU.value;

    // para que los campos no queden vacios
    if (nombre === '' || apellido === '' || email === '' || contraseña === '') {
        alert("Anotar los datos solicitados.");
        return;
    }

    // objeto de usuario
    const nuevoUsuario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        contraseña: contraseña
    };

    // agregar el nuevo usuario al arreglo o sea al objeto usuario(arreglo)
    usuarios.push(nuevoUsuario);

    // Guardar en localStorage (clave: "listaUsuarios")
    
        localStorage.setItem("listaUsuarios", JSON.stringify(usuarios));
    

    // Limpiar los campos después de guardar
    nombreU.value = "";
    apellidoU.value = "";
    emailU.value = "";
    contraseñaU.value = "";

    // Mostrar alert despued de registrar
    alert("Usuario registrado correctamente");
})
