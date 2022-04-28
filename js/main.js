function validarNombre(nombre) {
    if (nombre.length === 0) {
        return "Nombre debe tener al menos 1 caracter";
    }
    if (nombre.length > 50) {
        return "Nombre debe tener menos de 50 caracteres";
    }
    if (!/^[a-z]+$/i.test(nombre)) {
        return "Nombre debe contener solo letras";
    }
    return "";
}
function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "Ciudad no puede quedar vacio";
    }
    return "";
}
function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return "Descripcion del regalo debe tener al menos 1 caracter";
    }
    if (descripcionRegalo.length > 100) {
        return "Descripcion del regalo debe tener menos de 100 caracteres";
    }
    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return "Descripcion del regalo debe contener solo letras y numeros";
    }
    return "";
}

function validarFormulario(event) {
    const $form = document.formulario;
    const nombre = $form.nombre.value
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errores = {
        nombre: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        "descripcion-regalo": validarDescripcionRegalo(descripcionRegalo)
    }

    manejarErrores(errores);
    
    event.preventDefault();
}

function manejarErrores(errores) {
    let numeroErrores = 0;
    document.querySelector("#errores").innerHTML = "";
    Object.keys(errores).forEach(function(data) {
        if (errores[data]) {         
            manejarElementoError(document.formulario[data]);
            agregarTextoPorID(errores[data],"errores");
        } else {
            manejarElementoOK(document.formulario[data]);
        }
        numeroErrores = numeroErrores + errores[data].length;
    })
    if (numeroErrores === 0) {

        document.formulario.className = "oculto";
        document.querySelector("#exito").className = "";
        
        setTimeout(function(){
            window.location.href = "./wishlist.html";
        }, 5000);
    }
}

function manejarElementoError(elemento) {
    elemento.className = "error";
    elemento.value = "";
}

function manejarElementoOK(elemento) {
    elemento.className = "";
}


function agregarTextoPorID(texto,ID) {
    const hijo = document.createElement("li");
    hijo.innerText = texto;
    const padre = document.querySelector(`#${ID}`);
    padre.appendChild(hijo);
}


document.formulario.onsubmit = validarFormulario;
