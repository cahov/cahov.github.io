function encriptar(){
    var mensaje = document.querySelector("input").value;
    var texto = mensaje.replace(/i/igm, "imes");
    var texto = texto.replace(/a/igm, "ai");
    var texto = texto.replace(/e/igm, "enter");
    var texto = texto.replace(/o/igm, "ober");
    var texto = texto.replace(/u/igm, "ufat");
    document.getElementById("cajaresultado").innerHTML = texto;
    document.getElementById("nofound").innerHTML = "¡Mensaje encriptado!";
    document.querySelector("input").value = "";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function desencriptar(){
    var mensaje = document.querySelector("input").value;
    var texto = mensaje.replace(/imes/igm, "i");
    var texto = texto.replace(/ai/igm, "a");
    var texto = texto.replace(/enter/igm, "e");
    var texto = texto.replace(/ober/igm, "o");
    var texto = texto.replace(/ufat/igm, "u");
    document.getElementById("cajaresultado").innerHTML = texto;
    document.getElementById("nofound").innerHTML = "¡Mensaje desencriptado!";
    document.querySelector("input").value = "";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";
}

function copiar(){
    var texto = document.querySelector("#cajaresultado");
    texto.select();
    navigator.clipboard.writeText(texto.value);
}

