getRick();


function getName(id){
    fetch('https://rickandmortyapi.com/api/character/'+id)
    .then(res => res.json())
    .then(data => {
        return data.name
    })
}

function getRandomIntInclusive() {
    min = Math.ceil(1);
    max = Math.floor(826);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
function getRick(){
    fetch('https://rickandmortyapi.com/api/character/'+getRandomIntInclusive())
    .then(res => res.json())
    .then(data => {
    console.log(data.name)
    document.getElementById("imagen").setAttribute("src",`${data.image}`)
    document.getElementById("nombre").innerText= `${data.name}`
    document.getElementById("estado").innerText= `Estado: ${data.status}`
    document.getElementById("especie").innerText= `Especie: ${data.species}`
    document.getElementById("origen").innerText= `Origen: ${data.origin.name}`
       
    })
}




