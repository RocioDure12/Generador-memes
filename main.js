
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

//FUNCION PARA BOTON DE IMAGEN Y TEXTO
const botonPanelTexto = document.querySelector(".boton-panel-texto")
const panelTexto= document.querySelector(".contenedor-panel-texto")
const botonImagen= document.querySelector(".boton-panel-imagen")
const panelImagen= document.querySelector(".panel-imagen")

    botonImagen.onclick=()=>{
    panelTexto.style.display=("none")
    panelImagen.style.display=("block")

}

    botonPanelTexto.onclick=()=>{
    panelImagen.style.display=("none")
    panelTexto.style.display=("block")
    }

  

  
    





