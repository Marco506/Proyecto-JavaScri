/*JavaScript tiene una función incorporada para convertir cadenas JSON en objetos JavaScript:
JSON.parse()

JavaScript también tiene una función incorporada para convertir un objeto en una cadena JSON:
JSON.stringify()
*/

const datoTxt = document.getElementById("datoTxt")
const selectPrioridad = document.getElementById('tipo')
const agregar = document.getElementById("agregar")

const contenedorTareas = document.getElementById("contenedorTareas") 

let ListaTareas = JSON.parse(localStorage.getItem("task")) || [];



function cargaDatos() {
   for (let index = 0; index < ListaTareas.length; index++) {
    let item = ListaTareas[index];
    
    let datosEscribir = document.createElement("p");
    let selectorPrioridad = document.createElement('p')
    let btnEliminar = document.createElement("button");
    let btnEditar = document.createElement("button")

    datosEscribir.innerHTML = item.titulo;
    selectorPrioridad.innerHTML = item.seleccion;
    datosEscribir.id="datos"

    btnEliminar.innerHTML="Eliminar"
    btnEliminar.id="Eliminarbtn"

    btnEditar.innerHTML="Editar"
    btnEditar.id="Editarbtn"
    contenedorTareas.appendChild(datosEscribir);
    contenedorTareas.appendChild(selectorPrioridad);
    contenedorTareas.appendChild(btnEliminar);
    contenedorTareas.appendChild(btnEditar);

    btnEliminar.addEventListener("click", function(){
        contenedorTareas.removeChild(datosEscribir);
        contenedorTareas.removeChild(selectorPrioridad);
        contenedorTareas.removeChild(btnEliminar);
        contenedorTareas.removeChild(btnEditar); 

          // Actualizar lista y localStorage
        ListaTareas= ListaTareas.filter(t => t.titulo !== item.titulo)
        localStorage.setItem("task", JSON.stringify(ListaTareas));
          
       
        

        })

        btnEditar.addEventListener("click", function(){
            let nuevoTexto=prompt("editar tarea", datosEscribir);
            if (nuevoTexto !== null && nuevoTexto !== "") {
                datosEscribir.textContent = nuevoTexto;
                
                item.titulo = nuevoTexto;
                localStorage.setItem("task", JSON.stringify(ListaTareas))
                
        }
            })
 }
   
}

 cargaDatos()



agregar.addEventListener("click",function () {

    let daTarea = datoTxt.value.trim();

    if (daTarea === "") {
      alert("Complete todos los campos")  
      return;
    }
    
    let objetTareas = {
        titulo: datoTxt.value,
        seleccion: selectPrioridad.value
}
    ListaTareas.push(objetTareas)

    localStorage.setItem("task", JSON.stringify(ListaTareas))

    let datosEscribir = document.createElement("p");
    let selectorPrioridad = document.createElement('p');
    let btnEliminar = document.createElement("button");
    let btnEditar = document.createElement("button");

    datosEscribir.innerHTML = objetTareas.titulo;
    selectorPrioridad.innerHTML = objetTareas.seleccion;
   


    contenedorTareas.id = "contenedorTareas";
    contenedorTareas.appendChild(datosEscribir)
    contenedorTareas.appendChild(selectorPrioridad);
    
    btnEliminar.innerHTML="Eliminar"
    btnEliminar.id="Eliminarbtn"

    btnEditar.innerHTML="Editar"
    btnEditar.id="Editarbtn"
    contenedorTareas.appendChild(datosEscribir);
    contenedorTareas.appendChild(selectorPrioridad);
    contenedorTareas.appendChild(btnEliminar);
    contenedorTareas.appendChild(btnEditar);

    btnEliminar.addEventListener("click", function(){
        contenedorTareas.removeChild(datosEscribir);
        contenedorTareas.removeChild(selectorPrioridad);
        contenedorTareas.removeChild(btnEliminar);
        contenedorTareas.removeChild(btnEditar); 
        ListaTareas= ListaTareas.filter(t => t.titulo !== item.titulo)
        localStorage.setItem("task", JSON.stringify(ListaTareas))
        
        
        

        });

        btnEditar.addEventListener("click", function(){
            let nuevoTexto=prompt("editar tarea", datosEscribir);
            if (nuevoTexto !== null && nuevoTexto !== "") {
                datosEscribir.textContent = nuevoTexto;

                item.titulo = nuevoTexto;
                localStorage.setItem("task", JSON.stringify(ListaTareas))
                
                
        }
            })
 
   

    
})


//......................................................................................................................



const datoEvento = document.getElementById("datoEvento");
const fechaEvento = document.getElementById("fecha");
const agregarEvento = document.getElementById("agregarEven");
const contenedorEventos = document.getElementById("contenedorEventos");

// Cargar eventos desde localStorage, o inicializar un array vacío si no hay datos guardados
let listaEventos = JSON.parse(localStorage.getItem("cargarEvento")) || [];

// Función para cargar los eventos guardados en la página
function cargaEvento() {
    contenedorEventos.innerHTML = ''; // Limpia el contenedor antes de cargar nuevos eventos
    for (let index = 0; index < listaEventos.length; index++) {
        let item = listaEventos[index];

        let escribirEvento = document.createElement("p");
        let fechaE = document.createElement("p");
        let eliminarEvento = document.createElement("button");
        let editarEvento = document.createElement("button");

        escribirEvento.innerHTML = item.dateEvento;
        fechaE.innerHTML = item.fechaeven;
        escribirEvento.id = "evento"
        fechaE.id = "fecha"
        eliminarEvento.innerHTML = "Eliminar Evento";
        eliminarEvento.id = "eliminar"
        editarEvento.innerHTML = "Editar Evento";
        editarEvento.id = "editar"

        contenedorEventos.appendChild(escribirEvento);
        contenedorEventos.appendChild(fechaE);
        contenedorEventos.appendChild(eliminarEvento);
        contenedorEventos.appendChild(editarEvento);

        eliminarEvento.addEventListener("click", function() {
            // Elimina el evento de la lista y actualiza localStorage
            listaEventos.splice(index, 1);
            localStorage.setItem("cargarEvento", JSON.stringify(listaEventos));
            cargaEvento(); // Recarga los eventos para mostrar la lista actualizada
        });

        editarEvento.addEventListener("click", function() {
            // Edita el evento en la lista y actualiza localStorage
            let nuevoEvento = prompt("Editar el evento", escribirEvento.textContent);
            if (nuevoEvento !== null && nuevoEvento !== "") {
                listaEventos[index].dateEvento = nuevoEvento;
                localStorage.setItem("cargarEvento", JSON.stringify(listaEventos));
                cargaEvento(); // Recarga los eventos para mostrar el evento actualizado
            }
        });
    }
}

// Llama a la función para cargar los eventos al cargar la página
cargaEvento();

agregarEvento.addEventListener("click", function() {
    let dato = datoEvento.value.trim();
    let fecha = fechaEvento.value.trim();

  if (dato === "" || fecha === "") {
        alert("completa todos los campos");
        return;
    }
    let objetEvent = {
        dateEvento: datoEvento.value,
        fechaeven: fechaEvento.value
    };

    listaEventos.push(objetEvent);
    localStorage.setItem("cargarEvento", JSON.stringify(listaEventos));
    cargaEvento(); // Recarga los eventos para mostrar el nuevo evento
}); 