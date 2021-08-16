
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
//funcion para cambiar fondo meme//no funciona
const inputColorFondoImg= document.querySelector(".input-color-fondo-img")
inputColorFondoImg.oninput=()=>{
    imagenMeme.style.backgroundColorImage=inputColorFondoImg.value
}

//funcion actualizar filtros

document.querySelector(".Brillo").oninput=aplicarFiltros;
document.querySelector(".Opacidad").oninput=aplicarFiltros
document.querySelector(".Contraste").oninput=aplicarFiltros
document.querySelector(".Desenfoque").oninput=aplicarFiltros
document.querySelector(".Escala-grises").oninput=aplicarFiltros
document.querySelector(".Sepia").oninput=aplicarFiltros
document.querySelector(".Hue").oninput=aplicarFiltros
document.querySelector(".Saturado").oninput=aplicarFiltros
document.querySelector(".Negativo").oninput=aplicarFiltros

 function aplicarFiltros ()
{
    
    const brillo = document.querySelector(".Brillo").value;
    const opacidad = document.querySelector(".Opacidad").value;
    const contraste =  document.querySelector(".Contraste").value;
    const Desenfoque= document.querySelector(".Desenfoque").value;
    const escalaGrises=document.querySelector(".Escala-grises").value;
    const sepia = document.querySelector(".Sepia").value;
    const hue= document.querySelector(".Hue").value;
    const saturado=document.querySelector(".Saturado").value;
    const Negativo=document.querySelector(".Negativo").value;

  imagenMeme.style.filter =`invert(${Negativo}) opacity(${opacidad}) blur(${Desenfoque}px) contrast(${contraste}%) grayscale(${escalaGrises}%) hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturado}%) invert(${Negativo})`
}
  

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

//Funcion para cambiar color a la fuente
inputColorFuente=document.querySelector(".input-color-fuente")
inputColorFuente.oninput=()=>{
    textoSuperior.style.color=inputColorFuente.value
    textoInferior.style.color=inputColorFuente.value
}

//Funcion para cambiar color de fondo del texto superior e inferior
const inputColorFondo=document.querySelector(".input-color-fondo")
inputColorFondo.oninput=()=>{
    textoSuperior.style.backgroundColor=inputColorFondo.value
    textoInferior.style.backgroundColor=inputColorFondo.value
}

//Funcion para cambiar el fondo a transparente
const inputFondoTransparente=document.querySelector(".input-fondo-transparente")
inputFondoTransparente.onchange=()=>{
    if (inputFondoTransparente.checked){
        textoSuperior.style.backgroundColor="transparent"
        textoInferior.style.backgroundColor="transparent"
    }
    else{
        textoSuperior.style.backgroundColor=inputColorFondo.value
    }
    
}
//Funcion espaciado
const inputEspaciado=document.querySelector(".input-espaciado")
inputEspaciado.oninput = () => {
    textoSuperior.style.padding=inputEspaciado.value+"px"
    textoInferior.style.padding=inputEspaciado.value+"px"
    
}

//Funcion para interlineado
const selectInterlineado=document.querySelector(".select-interlineado")
selectInterlineado.onchange=()=>{

    textoSuperior.style.lineHeight=selectInterlineado.value
    textoInferior.style.lineHeight=selectInterlineado.value
}