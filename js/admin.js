

const datoTxt = document.getElementById("datoTxt")
const agregar = document.getElementById("agregar")

const contenedorTareas = document.getElementById("contenedorTareas")

let ListaTareas = [];

agregar.addEventListener("click",function () {

    let datos = datoTxt.value;

    localStorage.setItem("task",datos)

    let datosEscribir = document.createElement("p");
    let btnEliminar = document.createElement("button");
    let btnEditar = document.createElement("button")

    datosEscribir.innerHTML=datos;
    datosEscribir.id="datos"

    btnEliminar.innerHTML="Eliminar"
    btnEliminar.id="Eliminar"

    btnEditar.innerHTML="Editar"
    btnEditar.id="Editar"

    contenedorTareas.id = "contenedorTareas";

    contenedorTareas.appendChild(datosEscribir);
    contenedorTareas.appendChild(btnEliminar);
    contenedorTareas.appendChild(btnEditar);

    btnEliminar.addEventListener("click", function(){
    contenedorTareas.removeChild(datosEscribir);
    contenedorTareas.removeChild(btnEliminar);
    contenedorTareas.removeChild(btnEditar);    
    })

    btnEditar.addEventListener("click", function(){
    let nuevoTexto=prompt("editar tarea", datosEscribir);
    if (nuevoTexto !== null && nuevoTexto !== "") {
        datosEscribir.textContent = nuevoTexto;
        
    }
           }) 
})