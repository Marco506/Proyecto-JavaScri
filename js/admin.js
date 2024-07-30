const datoTxt = document.getElementById("datoTxt")
const selectPrioridad = document.getElementById('tipo')
const agregar = document.getElementById("agregar")

const contenedorTareas = document.getElementById("contenedorTareas") 

let ListaTareas = [];

function cargarDatos() {
    JSON.parse(localStorage.getItem('task'))
}



agregar.addEventListener("click",function () {
    
    let objetTareas = {
        titulo: datoTxt.value,
        seleccion: selectPrioridad.value
}
    ListaTareas.push(objetTareas)

    localStorage.setItem("task", JSON.stringify(ListaTareas))

    let datosEscribir = document.createElement("p");
    let selectorPrioridad = document.createElement('p')
    let btnEliminar = document.createElement("button");
    let btnEditar = document.createElement("button")

    
    datosEscribir.innerHTML = datoTxt.value;
    selectorPrioridad.innerHTML = selectPrioridad.value
    datosEscribir.id="datos"

    btnEliminar.innerHTML="Eliminar"
    btnEliminar.id="Eliminarbtn"

    btnEditar.innerHTML="Editar"
    btnEditar.id="Editarbtn"


    contenedorTareas.id = "contenedorTareas";

    contenedorTareas.appendChild(datosEscribir);
    contenedorTareas.appendChild(selectorPrioridad);
    contenedorTareas.appendChild(btnEliminar);
    contenedorTareas.appendChild(btnEditar);

    btnEliminar.addEventListener("click", function(){
    contenedorTareas.removeChild(datosEscribir);
    contenedorTareas.removeChild(selectorPrioridad);
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


//......................................................................................................................

/*JavaScript tiene una función incorporada para convertir cadenas JSON en objetos JavaScript:
JSON.parse()

JavaScript también tiene una función incorporada para convertir un objeto en una cadena JSON:
JSON.stringify()
*/
const datoEvento = document.getElementById("datoEvento");
const fechaEvento = document.getElementById("fecha");

const agregarEvento = document.getElementById("agregarEven");
const contenedorEventos = document.getElementById("contenedorEventos")

let listaEventos = [];
function cargarEvento() {
    JSON.parse(localStorage.getItem('cargarEventos'))
}

 



agregarEvento.addEventListener("click",function(){

      
    let objetEvent = {
        dateEvento: datoEvento.value,
        fechaeven: fechaEvento.value
}
    listaEventos.push(objetEvent)


    localStorage.setItem("cargarEvento", JSON.stringify(listaEventos))
    

    


    
    
    let escribirEvento = document.createElement("p");
    let eliminarEvento = document.createElement("button");
    let editarEvento = document.createElement("button")
    let fechaE= document.createElement("p")
    //añadimos id para poder añadirlos al contenedor 
       
        

        escribirEvento.innerHTML=datoEvento.value;
        escribirEvento.id="añadeEvento"

        fechaE.innerHTML= fechaEvento.value;
        fechaE.id="fechaE"

        eliminarEvento.innerHTML= "EliminarEvento"
        eliminarEvento.id = "borrarEvento"

        editarEvento.innerHTML="EditarEvento"
        editarEvento.id="modificarEvento"

    

        
    //Se llama al contenedor con un id  
        contenedorEventos.id="contenedorEventos";

        
        
        contenedorEventos.appendChild(escribirEvento);
        contenedorEventos.appendChild(fechaE);
        contenedorEventos.appendChild(eliminarEvento);
        contenedorEventos.appendChild(editarEvento);
       

        eliminarEvento.addEventListener("click", function(){
        
            contenedorEventos.removeChild(escribirEvento);
            contenedorEventos.removeChild(fechaE);
            contenedorEventos.removeChild(eliminarEvento);
            contenedorEventos.removeChild(editarEvento);
            
        })

        editarEvento.addEventListener("click",function(){
        let nuevoEvento=prompt("Editar el evento",escribirEvento)
        if (nuevoEvento !== null && nuevoEvento !== ""){
        escribirEvento.textContent=nuevoEvento
        }            
        })

    


})

