let palabraAleatoria;
let opcion=document.getElementById("cantidad_letras");
const letra = document.querySelector("#input_letra");
const btn_aleatorio = document.querySelector("#btn_aleatorio");
const btn_pc = document.querySelector(".btn_pc");
const btn_palabra = document.querySelector("#btn_palabra");
const btn_atras = document.querySelector("#btn_atras");
const btn_empezar = document.querySelector("#btn_empezar");
const input_palabra = document.querySelector("#input_palabra");
const abecedario = "qwertyuiopasdfghjklñzxcvbnm";
btn_atras.style.display="none";
btn_empezar.style.display="none";
input_palabra.style.display="none";
letra.style.display="none";
document.querySelector("h2").style.display="none";
document.querySelector("ul").style.display="none";
let listas = document.querySelector("li");
let vidas = 5;
let estado = true;
letra.value="";
document.querySelector(".teclas").style.display="none";
for(let i=0;i<abecedario.length;i++){
    let botones = document.createElement("button");
    botones.classList.add(abecedario.charAt(i));
    botones.addEventListener("click", teclaPulsada);
    document.querySelector(".teclas").appendChild(botones).appendChild(document.createTextNode(abecedario.charAt(i)));
}
async function obtenerPalabra(opcion) {
    let palabra;
    try {
        const res = await fetch("https://palabras-aleatorias-public-api.herokuapp.com/random-by-length?length="+opcion);
        palabra = await res.json();
        palabra = palabra.body.Word;       
        return palabra.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    } catch (error) {
        console.log("Api caida :c intenta mas tarde");
        document.querySelector("h1").innerText="Servicio caido, intenta en 20 min :c";
    }

}

function teclaPulsada(){
    //console.log(this.classList.value);
    letra.value=this.classList.value;
    //console.log("vidas restantes "+vidas);
        if (document.querySelector("ul").textContent==palabraAleatoria){
            input_palabra.style.display="none";
            document.querySelector("h1").innerText="Has ganado";
        }else{
            if(vidas>1){
                verificarLetra(letra);
                this.style.color="red";
                document.querySelector("h1").innerText="Intentos restantes : "+vidas;
            }else if(vidas==1){
                document.querySelector(".teclas").style.display="none";
                //console.log("vidas terminadas");
                document.querySelector(".ahorcado").src=`img/ahorcado_1.png`;
                letra.style.display="none";
                document.querySelector("h1").innerText="Has perdido";
                document.querySelector("h2").style.display="block"
                document.querySelector("h2").innerText="La palabra era: "+palabraAleatoria;
            }
        }
        if (document.querySelector("ul").textContent==palabraAleatoria){
            letra.style.display="none";
            document.querySelector("h1").innerText="Has ganado";
        }
}

function verificarLetra(letra){
    let counter=1;
    for(let i=0; i<palabraAleatoria.length;i++){
        if(letra.value==palabraAleatoria.charAt(i)){
            document.querySelector("ul").childNodes[i].innerText=palabraAleatoria[i];
        }else if(palabraAleatoria.charAt(i)==" "){
            document.querySelector("ul").childNodes[i].innerText=palabraAleatoria[i];
            
        }else{
            counter++;
        }
    }
    if(counter>palabraAleatoria.length){
        document.querySelector(".ahorcado").src=`img/ahorcado_${vidas}.png`;
        vidas--;
    }
}

async function setPalabra(opcion){
    palabraAleatoria = await obtenerPalabra(opcion);
    console.log(palabraAleatoria);
    document.querySelector("ul").innerHTML="";
    for(let i=0;i<opcion;i++){
        if (palabraAleatoria.charAt(i)==" ") {
            let li = document.createElement("li");
            document.querySelector("ul").appendChild(li).appendChild(document.createTextNode(" "));
        }else{
            let li = document.createElement("li");
            document.querySelector("ul").appendChild(li).appendChild(document.createTextNode("-"));
        }
    }
    
}

function limpiarLetra(){
    letra.value="";
}


btn_aleatorio.addEventListener("click",function(){

    vidas=5;
    document.querySelector(".ahorcado").src=`img/ahorcado_0.png`;
    setTimeout(setPalabra(opcion.value),2000);
    btn_aleatorio.style.display="none";
    btn_atras.style.display="flex";
    document.querySelector(".teclas").style.display="block";
    document.querySelector(".opcion").style.display="none";
    letra.style.display="none";
    document.querySelector("ul").style.display="flex";
    document.querySelector("p").style.display="none";

    document.querySelector("h1").innerText="Intentos restantes : "+vidas;

    letra.focus();
    letra.addEventListener("input", function(){
        letra.value = letra.value.toLowerCase();
        //console.log("vidas restantes "+vidas);
        if (document.querySelector("ul").textContent==palabraAleatoria){
            input_palabra.style.display="none";
            document.querySelector("h1").innerText="Has ganado";
        }else{
            if(vidas>1){
                verificarLetra(letra);
                document.querySelector("h1").innerText="Intentos restantes : "+vidas;
            }else if(vidas==1){
                //console.log("vidas terminadas");
                document.querySelector(".ahorcado").src=`img/ahorcado_1.png`;
                letra.style.display="none";
                document.querySelector("h1").innerText="Has perdido";
                document.querySelector("h2").innerText="La palabra era: "+palabraAleatoria;
            }
        }
        if (document.querySelector("ul").textContent==palabraAleatoria){
            letra.style.display="none";
            document.querySelector("h1").innerText="Has ganado";
        }

  

        setTimeout(limpiarLetra,400);
    })
})


btn_pc.addEventListener("click",function(){

    vidas=5;
    document.querySelector(".ahorcado").src=`img/ahorcado_0.png`;
    setTimeout(setPalabra(opcion.value),2000);
    btn_aleatorio.style.display="none";
    btn_atras.style.display="flex";
    document.querySelector(".teclas").style.display="block";
    document.querySelector(".opcion").style.display="none";
    letra.style.display="block";
    document.querySelector("ul").style.display="flex";
    document.querySelector("p").style.display="none";
    document.querySelector(".teclas").style.display="none";
    btn_pc.style.display="none";

    document.querySelector("h1").innerText="Intentos restantes : "+vidas;

    letra.focus();
    letra.addEventListener("input", function(){
        letra.value = letra.value.toLowerCase();
        //console.log("vidas restantes "+vidas);
        if (document.querySelector("ul").textContent==palabraAleatoria){
            input_palabra.style.display="none";
            document.querySelector("h1").innerText="Has ganado";
        }else{
            if(vidas>1){
                verificarLetra(letra);
                document.querySelector("h1").innerText="Intentos restantes : "+vidas;
            }else if(vidas==1){
                //console.log("vidas terminadas");
                document.querySelector(".ahorcado").src=`img/ahorcado_1.png`;
                letra.style.display="none";
                document.querySelector("h1").innerText="Has perdido";
                document.querySelector("h2").style.display="block";
                document.querySelector("h2").innerText="La palabra era: "+palabraAleatoria;
            }
        }
        if (document.querySelector("ul").textContent==palabraAleatoria){
            letra.style.display="none";
            document.querySelector("h1").innerText="Has ganado";
        }

  

        setTimeout(limpiarLetra,400);
    })
})




btn_atras.addEventListener("click",function(){
    window.location.reload();
})





