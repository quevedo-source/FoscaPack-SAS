// Mensaje inicial al cargar la pagina
alert("Bienvenido a FoscaPack SAS! Gracias por visitarnos.");

// Cambiar color del fondo al hacer clic en el encabezado
const header = document.querySelector("header");
header.addEventListener("click", () => {
    document.body.style.backgroundColor = document.body.style.backgroundColor === "rgb(251, 169, 83)"? "white" : "rgb(251,169,83)";
    alert("Has cambiado el color de fondo!");
})

// Sorpresa al pasar el mouse sobre el logo
const logo = document.querySelector("img");
logo.addEventListener("mouseenter", () => {
    alert("Gracias por apoyar los productos ecológicos de FoscaPack!");
});

// ====== Variables y Operadores ======
let visitas = 0; // Contador de visitas simuladas
visitas++; // Operador de incremento
console.log("Visitas actuales: ", visitas);

// Mostrar una alerta si el usuario recarga la pagina mas de 1 vez
if(visitas > 1) {
    alert("Gracias por seguir explorando nuestra web!");
}
else {
    console.log("Primera visita detectada");
}

// ====== Funcion para Validar Formualrio ======
function validarFormualrio() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Verificar que los campos no esten vacios
    if(nombre === "" || email === "" || mensaje === "") {
        alert("Por favor completa todos los campos antes de enviar.");
        return false; // Evitar el envio
    }
    else {
        alert("Gracias por contactarnos, " + nombre + "! Te responderemos pronto.");
        return true; // Permitir el envio
    }
}

// Capturar el formulario y asignar la funcion de validacion
const formualrio = document.querySelector("form");
formualrio.addEventListener("submit", function(event){
    if(!validarFormualrio()){
        event.preventDefault(); // Evitar el envio si la validacion falla
    }
})

// ====== Ciclo For ======
// Muestra los primeros 5 productos que se fabrican
let productos = ["Cubeta estandar", "Cubeta reforzada", "Cubeta pequeña", "Empaque industrial", "Cubeta premium"];
console.log("Productos disponibles:");
for(let i = 0; i < productos.length; i++) {
    console.log("- " + productos[i]);
    if(i === 3) {
        console.log("Mostramos solo los 4 primeros productos con un 'break'");
        break; // Salir del ciclo despues de 4 productos
    }
}

// ====== Ciclo While ======
// Simula un conteo para el proceso de secado de cubetas 
let tiempoSecado = 0;
while(tiempoSecado < 3) {
    console.log("Secando cubetas... (" + tiempoSecado + " min)");
    tiempoSecado++;
}
console.log("Proceso de secado completado.");

// ====== Operadores de Igualdad y Relaciones ======
let precioEstandar = 500;
let precioReforzada = 800;

if(precioEstandar < precioReforzada) {
    console.log("La cubeta reforzada es mas costosa que la estandar.");
}

if(precioEstandar == 500) {
    console.log("Precio correcto de la cubeta estandar confirmado.");
}