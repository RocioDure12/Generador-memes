
//FUNCION MODO OSCURO-MODO CLARO
const botonModoOscuro=document.querySelector(".boton-modo-oscuro")
const body= document.querySelector("body")

    botonModoOscuro.onclick = () =>{
    body.classList.toggle("modo-oscuro")

    if(body.classList.contains("modo-oscuro")) {
        botonModoOscuro.textContent="Modo claro"
    }
    else {botonModoOscuro.textContent="Modo oscuro"}
}

//FUNCION PARA CARGAR IMAGEN
const inputImagen = document.querySelector(".input-imagen")
const imagenMeme = document.querySelector(".imagen-meme")

    inputImagen.oninput= () => {
    imagenMeme.src = inputImagen.value
    }



