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

    let nuevoDiv = document.createElement("div")
    let titulo = document.createElement("p")
    let textoCifrado = document.createElement("p")

    titulo.className = "titulo"
  

    let contenedorOculto = document.getElementById("contenedor-oculto")

    if (contenedorOculto.className == "contenedor-padre"){
        contenedorOculto.appendChild(nuevoDiv)
        nuevoDiv.appendChild(titulo)
        nuevoDiv.appendChild(textoCifrado)
        nuevoDiv.className = "contenedor"
        textoCifrado.textContent = cifrado
        titulo.textContent = "Texto Cifrado"
    }
    else{

        contenedorOculto.appendChild(nuevoDiv)
        nuevoDiv.appendChild(titulo)
        nuevoDiv.appendChild(textoCifrado)
        nuevoDiv.className = "contenedor"
        textoCifrado.textContent = cifrado
        contenedorOculto.className = "contenedor-padre"
        titulo.textContent = "Texto Cifrado"
    }
    
    const enviar = cifrado

    const nuevoBoton = document.createElement("button")
    nuevoBoton.textContent = "Copiar Texto";
    nuevoBoton.id = "botonCopiar"
    nuevoBoton.addEventListener("click", async function() {

        try {
            console.log(enviar)
            await  copiar(enviar);
            console.log("Texto copiado al portapapeles");
        } catch (error) {
            console.error("Error al copiar al portapapeles:", error);
        }
    });
    nuevoDiv.appendChild(nuevoBoton)
   
    const botonEliminar = document.createElement("button")

    botonEliminar.textContent = "Eliminar"
    botonEliminar.id = "botonEliminar"

    botonEliminar.onclick = function () {
        eliminar(nuevoDiv);
    }
    nuevoDiv.appendChild(botonEliminar)

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

    let nuevoDiv = document.createElement("div")
    let titulo = document.createElement("p")
    let textoCifrado = document.createElement("p")

    titulo.className = "titulo"
  

    let contenedorOculto = document.getElementById("contenedor-oculto")

    if (contenedorOculto.className == "contenedor-padre"){
        contenedorOculto.appendChild(nuevoDiv)
        nuevoDiv.appendChild(titulo)
        nuevoDiv.appendChild(textoCifrado)
        nuevoDiv.className = "contenedor"
        textoCifrado.textContent = textoDescifrado
        titulo.textContent = "Texto Descifrado"
    }
    else{

        contenedorOculto.appendChild(nuevoDiv)
        nuevoDiv.appendChild(titulo)
        nuevoDiv.appendChild(textoCifrado)
        nuevoDiv.className = "contenedor"
        textoCifrado.textContent = textoDescifrado
        contenedorOculto.className = "contenedor-padre"
        titulo.textContent = "Texto Descifrado"
    }

   
    const nuevoBoton = document.createElement("button")
    nuevoBoton.textContent = "Copiar Texto";
    nuevoBoton.id = "botonCopiar"
    nuevoBoton.addEventListener("click", async function() {

        try {
            console.log(textoDescifrado)
            await  copiar(textoDescifrado);
            console.log("Texto copiado al portapapeles");
        } catch (error) {
            console.error("Error al copiar al portapapeles:", error);
        }
    });
    nuevoDiv.appendChild(nuevoBoton)

    const botonEliminar = document.createElement("button")

    botonEliminar.textContent = "Eliminar"
    botonEliminar.id = "botonEliminar"

    botonEliminar.onclick = function () {
        eliminar(nuevoDiv);
    }
    nuevoDiv.appendChild(botonEliminar)

    textoCifrado = ""
}

const copiar = function (contenido) {




    navigator.clipboard.writeText(contenido)
    
    
    alert("Texto Copiado al Portapapeles")
}

const eliminar = function (div) {
    
    div.remove();
    alert("Ha sido eliminado con exito")
}