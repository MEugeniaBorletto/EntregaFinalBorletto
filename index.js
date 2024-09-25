let modo = localStorage.getItem("Modo");

document.addEventListener("DOMContentLoaded", function () {
const cuerpo = document.body;
const boton = document.getElementById("toggle-button");

if (modo === "mode-dark") {
    cuerpo.classList.add("mode-dark");
}

function cambiarTexto() {
    if (cuerpo.classList.contains("mode-dark")) {
    boton.textContent = "🌞";
    boton.style.backgroundColor = "white";
    boton.style.color = "black";
    } else {
    boton.textContent = "🌙";
    boton.style.backgroundColor = "black";
    boton.style.color = "white";
    }
}

function guardarModoObscuroLstorage() {
    if (cuerpo.classList.contains("mode-dark")) {
    localStorage.setItem("Modo", "mode-dark");
    } else {
    localStorage.removeItem("Modo");
    }
}

cambiarTexto();

boton.addEventListener("click", () => {
    cuerpo.classList.toggle("mode-dark");

    guardarModoObscuroLstorage();

    cambiarTexto();
});
});
setTimeout(() => {Swal.fire("Seguinos en nuestras redes sociales, nos vemos.");

}, 120000); 