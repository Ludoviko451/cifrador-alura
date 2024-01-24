let abecedario = Array.from("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWyYxXzZáéíóúÁÉÍÓÚ.,")

let cifradoArreglo = Array.from("♀!<0♪1>2/5?3;6:4]7}9[8{√=±+→-_←)↑(↓ *♥&♠^♦%♣$©#®@™°~☰☽♃♄↗↘↙↖∑∆♫►")

abecedario.push(" ")
cifradoArreglo.push("☼")

let cifrado = "";
let palabra = ""
let palabraLongitud = 0
let textoDescifrado = ""

const cifrar = function() {
   
    
    palabra = document.getElementById("texto").value
    palabraLongitud = palabra.length;


    for (let j = 0; j < palabraLongitud; j++) {
        for (let i = 0; i < abecedario.length; i++) {
            if (palabra[j] == abecedario[i]){
                
                cifrado += `${cifradoArreglo[i]}`
        
            }
            
        }
    }


    let campoCifrado = document.getElementById("texto-cifrado")
    let titulo = document.getElementsByClassName("titulo")
    
    
    let contenedorOculto = document.getElementById("contenedor-oculto")

    if (contenedorOculto.className == "contenedor"){
        campoCifrado.textContent = cifrado
    }
    else{
        contenedorOculto.className = "contenedor"
        titulo[0].textContent = "Texto Cifrado"
        campoCifrado.textContent = cifrado
    }

    const existeBoton = document.getElementById("botonCopiar")

    if (existeBoton == null) {
        const nuevoBoton = document.createElement("button")
        nuevoBoton.textContent = "Copiar Texto";
        nuevoBoton.id = "botonCopiar"
        nuevoBoton.onclick = copiar;
        campoCifrado.insertAdjacentElement("afterend", nuevoBoton)
    }

    
    existeBoton.textContent = "Copiar Texto"
    cifrado = ""
}

const descifrar = function() {

    textoDescifrado = ""
    cifrado = document.getElementById("texto").value
   
    for (let j = 0; j < cifrado.length; j++) {
        for (let i = 0; i < cifradoArreglo.length; i++) {
    
          if (cifrado[j] == cifradoArreglo[i] ){

            textoDescifrado += abecedario[i];
          }
        }

    }

    let campoCifrado = document.getElementById("texto-cifrado")
    let titulo = document.getElementsByClassName("titulo")
    
    let contenedorOculto = document.getElementById("contenedor-oculto")

    if (contenedorOculto.className == "contenedor"){
        campoCifrado.textContent = textoDescifrado
    }
    else{ 
    contenedorOculto.className = "contenedor"
  
    titulo[0].textContent = "Texto Descifrado"
    campoCifrado.textContent = textoDescifrado
    }
    
    const existeBoton = document.getElementById("botonCopiar")

    if (existeBoton == null) {
        const nuevoBoton = document.createElement("button")
        nuevoBoton.textContent = "Copiar Texto";
        nuevoBoton.id = "botonCopiar"
        nuevoBoton.onclick = copiar;
        campoCifrado.insertAdjacentElement("afterend", nuevoBoton)
    }

    existeBoton.textContent = "Copiar Texto"


    cifrado = ""

}

const copiar = function () {


    let campoCifrado = document.getElementById("texto-cifrado")
    const botonCopiar = document.getElementById("botonCopiar")

    navigator.clipboard.writeText(campoCifrado.textContent)

    
    botonCopiar.textContent = "Texto Copiado"
    alert("Texto Copiado al Portapapeles")
}