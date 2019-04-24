﻿function init() {
    bindearEventoClickSubmit();
    bindearEventoTerminosYCondiciones();
}

function bindearEventoClickSubmit() {
    $(".boton-submit").on('click', validarCampos);
    validarTerminos;
}

function bindearEventoTerminosYCondiciones() {
    $(".texto-terminos").click(mostrarTerminos);
}

function validarCampos() {
    validarDniIngresado();
}

function validarDniIngresado() {
    var DNI = document.getElementById("inputDni").value;
    if (DNI.length != 8) {
        alert("El DNI debe tener 8 caracteres");
    }
    event.cancelBubble = true;
}

function validarTerminos() {
    var terminos = $("#TYC").val();
    if (terminos === ':checked') {
        alert("Debe aceptar los términos y condiciones.");
    }
}

function mostrarTerminos() {
    $("#modalTerminos").css('display', 'inline-block');
}

document.getElementById("email").addEventListener("input", function () {
    var email = document.getElementById("email");
    var val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (val.test(email.value)) {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
    } else {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
    }
});

$(document).ready(init); 





