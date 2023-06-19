let N1 = document.getElementById("N1")
let N2 = document.getElementById("N2")
let N3 = document.getElementById("N3")
let N4 = document.getElementById("N4")
let aprovado = document.getElementById("resultado")
let GerarMedia;

function media(){
    GerarMedia = ( N1.value + N2.value + N3.value + N4.value ) /4 ;
    aprovado.innerHTML = GerarMedia; 
}