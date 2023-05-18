const caja = document.querySelector(".caja");
const botones = document.querySelectorAll(".boton");

//caja.innerHTML = "<h1>ESTA ES UNA CAJA</h1>";

botones.forEach(function(boton) {
    boton.addEventListener("click", function() {
        caja.innerHTML += boton.outerText;
    })
})