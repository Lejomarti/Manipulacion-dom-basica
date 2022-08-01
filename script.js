const h1 = document.querySelector('h1')
const form = document.querySelector('#form')
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
const pResult= document.querySelector("#resultado")

btn.addEventListener('click',sumarInputValue)    //primero que evento queremos, segundo que queremos ejecutar. No se deben escribir los () despues de la funcion

function sumarInputValue(event){
    console.log(event)
    pResult.innerText = "resultado: " + (parseInt(input1.value) + parseInt(input2.value))
}