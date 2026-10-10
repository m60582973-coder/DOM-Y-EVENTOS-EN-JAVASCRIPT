
const titulo = document.getElementById("titulo");
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("boton");

let esAzul = false;

if (boton && titulo && mensaje) {
    boton.addEventListener("click", function(event) {
        mensaje.textContent = "El botón fue presionado";

        if (esAzul) {
            titulo.style.color = "red";
        } else {
            titulo.style.color = "blue";
        }

        esAzul = !esAzul;

        console.log("El evento funciona");
        console.log(event.target);
    });
}
