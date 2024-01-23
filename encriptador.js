let abecedario = Array.from("aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWyYxXzZáéíóúÁÉÍÓÚ.,")

let cifradoArreglo = Array.from("♀!<0♪1>2/5?3;6:4]7}9[8{√=±+→-_←)↑(↓ *♥&♠^♦%♣$©#®@™°~☰☽♃♄↗↘↙↖∑∆♫►")

abecedario.push(" ")
cifradoArreglo.push("☼")
console.log(abecedario)
console.log(cifradoArreglo)

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


    let campoCifrado = document.getElementsByClassName("texto-cifrado")
    let titulo = document.getElementsByClassName("titulo")
    
    
    let contenedorOculto = document.getElementById("contenedor-oculto")

    if (contenedorOculto.className == "contenedor"){
        campoCifrado[0].textContent = cifrado
    }
    else{
        contenedorOculto.className = "contenedor"
        titulo[0].textContent = "Texto Cifrado"
        campoCifrado[0].textContent = cifrado
    }

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

    let campoCifrado = document.getElementsByClassName("texto-cifrado")
    let titulo = document.getElementsByClassName("titulo")
    
    let contenedorOculto = document.getElementById("contenedor-oculto")

    if (contenedorOculto.className == "contenedor"){
        campoCifrado[0].textContent = textoDescifrado
    }
    else{ 
    contenedorOculto.className = "contenedor"
  
    titulo[0].textContent = "Texto Descifrado"
    campoCifrado[0].textContent = textoDescifrado
    }
    cifrado = ""

}

