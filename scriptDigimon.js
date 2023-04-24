//MÉTODO GET

var carta = document.getElementById("imagenDigimon");

var contenido = document.querySelector("#contenido");

const url = 'https://digimon-api.vercel.app/api/digimon'

fetch(url)
    .then(response => response.json())
    .then(datos => {
        tabla(datos);
        
    });


function tabla(datos) {
    contenido.innerHTML = ""

    for (let temp of datos) {
        contenido.innerHTML +=
            `
        <tr> 
            <td> <img src = "${temp.img}"/></td> 
            <td>${temp.name}</td> 
            <td>${temp.level}</td> 
          </tr>
          `
        
    }
}


//MÉTODO POST BÚSQUEDA DE DIGIMON

//let url2 = 'https://digimon-api.vercel.app/api/digimon/name/'


function buscaDigimon() {

    let nombreDigimon = document.getElementById("digimonBuscado").value;
    console.log(nombreDigimon)
    document.getElementById("imagenDigimon").style.display = "block";
    
    let url2 = `https://digimon-api.vercel.app/api/digimon/name/${nombreDigimon}`
    fetch(url2)
        .then(response => response.json())
        .then(datos => {
            console.log(datos)
            tarjetaDigimon(datos)
       

        })

}



function tarjetaDigimon(datos) {
    carta.innerHTML = "";

    for (let temp of datos) {

        carta.innerHTML += `
        <div class="card mb-3 container" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${temp.img}" id="imagen" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">"NOMBRE: ${temp.name}"</h5>
              <p class="card-text">NIVEL: "${temp.level}"</p>
             </div>
          </div>
        </div>
      </div>
`
    }
}


$(document).ready(function(){
    $("#click1").mouseenter(function (){
        $("#imagenDigimon").hide();
    })
})

$(document).ready(function(){
    $("#click2").mouseenter(function (){
        $("#imagenDigimon").show();
    })
})