
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
const imagenMeme = document.querySelector(".imagen-meme")
const inputImagen = document.querySelector(".input-imagen")

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

//Funcion para texto superior y texto inferior
const textoSuperior=document.querySelector(".texto-superior")
const inputTextoSuperior=document.querySelector(".input-texto-superior")
const textoInferior=document.querySelector(".texto-inferior")
const inputTextoInferior=document.querySelector(".input-texto-inferior")

    inputTextoSuperior.oninput=()=>{
         textoSuperior.textContent=inputTextoSuperior.value
    }

    inputTextoInferior.oninput= () => {
        textoInferior.textContent=inputTextoInferior.value

    }

    /*

document.querySelector(".Brillo").onchange= aplicarFiltros
document.querySelector(".Opacidad")
document.querySelector(".Contraste")
document.querySelector(".Desenfoque")
document.querySelector(".Escala-de-grises")
document.querySelector(".Sepia")
document.querySelector(".Hue")
document.querySelector(".Negativo")


const aplicarFiltros=()=>{
 
}*/
//Funcion para seleccionar fuente
const selectFuente=document.getElementById("select-fuente")
selectFuente.onchange=()=>{
    textoSuperior.style.fontFamily= selectFuente.value
    textoInferior.style.fontFamily=selectFuente.value
}

//funcion para ocultar o mostrar texto superior
const checkboxTextoSuperior=document.querySelector(".checkbox-texto-superior")
checkboxTextoSuperior.onchange=()=>{
if (checkboxTextoSuperior.checked){
    textoSuperior.style.display="none"
}
else{
    textoSuperior.style.display="block"
}
}

//funcion para ocultar o mostrar inferior
const checkboxTextoInferior=document.querySelector(".checkbox-texto-inferior")

checkboxTextoInferior.onchange =()=>{
    if (checkboxTextoInferior.checked){
        textoInferior.style.display="none"
    }
    else {
        textoInferior.style.display="block" 
    }
}
//Funcion para modificar tamaño del texto
const inputTamanioFuente=document.querySelector(".input-tamanio-fuente")
inputTamanioFuente.oninput = () => {
    textoSuperior.style.fontSize=inputTamanioFuente.value+"px"
    textoInferior.style.fontSize=inputTamanioFuente.value+"px"
    
}

//Funcion para alinear el texto superior e inferior
const botonIzquierda=document.querySelector(".boton-izquierda")
const botonDerecha=document.querySelector(".boton-derecha")
const botonCentro=document.querySelector(".boton-centro")

botonIzquierda.onclick=()=>{
    textoSuperior.style.textAlign="left"
    textoInferior.style.textAlign="left"
}

botonDerecha.onclick=()=>{
    textoSuperior.style.textAlign="right"
    textoInferior.style.textAlign="right"
}

botonCentro.onclick=()=>{
    textoSuperior.style.textAlign="center"
    textoInferior.style.textAlign="center"
}

//Funcion para 
//const inputBrillo=document.querySelector(".Brillo")
//inputBrillo.onchange=()=>{
 //   imagenMeme.style.filter=`brightness(${inputBrillo.value})`

