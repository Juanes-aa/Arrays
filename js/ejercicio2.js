let listaNumeros = [];

let formulario = document.getElementById("formulario");
let numero = document.getElementById("numero");
let lista = document.getElementById("lista");
let suma = document.getElementById("suma");
let promedio = document.getElementById("promedio");
let mayor = document.getElementById("mayor");
let menor = document.getElementById("menor");

formulario.addEventListener("submit", function(event){
    event.preventDefault();
    if (numero.value.trim() === ""){
        alert("Por favor, ingrese un número.");
    } else {
        let valor = parseFloat(numero.value);

        listaNumeros.push(valor);
        numero.value = "";
        mostrarResultados();
    }
});

function mostrarResultados(){
    lista.innerHTML = "";

    let total = 0;
    let numMayor = listaNumeros[0];
    let numMenor = listaNumeros[0];

    for (let i = 0; i < listaNumeros.length; i++) {
        lista.innerHTML += `<li>${listaNumeros[i]}</li>`;
        total += listaNumeros[i];

        if (listaNumeros[i] > numMayor) {
            numMayor = listaNumeros[i];
        }
        if (listaNumeros[i] < numMenor) {
            numMenor = listaNumeros[i];
        }
    }

    let media = total / listaNumeros.length;

    suma.innerHTML = `Suma: ${total}`;
    promedio.innerHTML = `Promedio: ${media}`;
    mayor.innerHTML = `Número mayor: ${numMayor}`;
    menor.innerHTML = `Número menor: ${numMenor}`;
}