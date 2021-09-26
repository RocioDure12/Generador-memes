
// Esta bastante desprolijo este codigo. 
// Siempre dejá espacios entre operadores, es decir, los signos como =, {}, (), 

//FUNCION MODO OSCURO-MODO CLARO
// Deja espacios entre el igual
// const botonModoOscuro = document.querySelector(".boton-modo-oscuro")
const botonModoOscuro=document.querySelector(".boton-modo-oscuro")
const body= document.querySelector("body")

    botonModoOscuro.onclick = () =>{
        body.classList.toggle("modo-oscuro")

        // deja espacio entre el if y el parentesis, y el else y la llave 
        if(body.classList.contains("modo-oscuro")) {
            botonModoOscuro.textContent="Modo claro"
        }
        // deja un salto de linea entre la llave y la orden
        // else {
        //     botonModoOscuro.textContent="Modo oscuro"
        // }
        else {botonModoOscuro.textContent="Modo oscuro"}
}

//FUNCION PARA CARGAR IMAGEN
const imagenMeme = document.querySelector(".imagen-meme")
const inputImagen = document.querySelector(".input-imagen")

    inputImagen.oninput= () => {
    // no dejes estos saltos de linea que no hacen nada

    
    imagenMeme.src = inputImagen.value
   }

//FUNCION PARA BOTON DE IMAGEN Y TEXTO
const botonPanelTexto = document.querySelector(".boton-panel-texto")
const panelTexto= document.querySelector(".contenedor-panel-texto")
const botonImagen= document.querySelector(".boton-panel-imagen")
const panelImagen= document.querySelector(".contenedor-panel-imagen")

    botonImagen.onclick=()=>{
        // los parentesis no son necesarios aca 
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

// deja espacios
// inputTextoSuperior.oninput = () => {
    inputTextoSuperior.oninput=()=>{
         textoSuperior.textContent=inputTextoSuperior.value
    }

    inputTextoInferior.oninput= () => {
        textoInferior.textContent=inputTextoInferior.value

    }
//funcion para cambiar fondo meme
const imagenMemeContenedor=document.querySelector(".contenedor-imagen")
const inputColorFondoImg= document.querySelector(".input-color-fondo-img")
inputColorFondoImg.oninput=()=>{
    imagenMemeContenedor.style.backgroundColor=inputColorFondoImg.value
}

const selectBlendMode = document.querySelector(".select-blend-mode")
selectBlendMode.oninput=()=>{
    imagenMeme.style.mixBlendMode=selectBlendMode.value
}

  
//funcion actualizar filtros

// usas dos veces estos selectores (aca y dentro de la funcion aplicarFiltros)
// Seleccionalos con una variable asi no te repetis
document.querySelector(".Brillo").oninput=aplicarFiltros;
document.querySelector(".Opacidad").oninput=aplicarFiltros
document.querySelector(".Contraste").oninput=aplicarFiltros
document.querySelector(".Desenfoque").oninput=aplicarFiltros
document.querySelector(".Escala-grises").oninput=aplicarFiltros
document.querySelector(".Sepia").oninput=aplicarFiltros
document.querySelector(".Hue").oninput=aplicarFiltros
document.querySelector(".Saturado").oninput=aplicarFiltros
document.querySelector(".Negativo").oninput=aplicarFiltros

// no uses esta sintaxis, usa la funcion flecha 
 function aplicarFiltros ()
{
// Nunca declares variables que empiezan en mayuscula. 
// Las variables que empiezan con mayuscula significan algo muy especifico: 
// una clase o un componente, que veremos mas adelante
    const brillo = document.querySelector(".Brillo").value;
    const opacidad = document.querySelector(".Opacidad").value;
    const contraste =  document.querySelector(".Contraste").value;
    const Desenfoque= document.querySelector(".Desenfoque").value;
    const escalaGrises=document.querySelector(".Escala-grises").value;
    const sepia = document.querySelector(".Sepia").value;
    const hue= document.querySelector(".Hue").value;
    const saturado=document.querySelector(".Saturado").value;
    const Negativo=document.querySelector(".Negativo").value;

    // cuando la orden es muy larga, usa saltos de linea para que el lector no deba hacer scroll
    // imagenMeme.style.filter =`
    //     brightness(${brillo}) invert(${Negativo}) opacity(${opacidad}) 
    //     blur(${Desenfoque}px) contrast(${contraste}%) grayscale(${escalaGrises}%) 
    //     hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturado}%) 
    //     invert(${Negativo})`  
  imagenMeme.style.filter =`brightness(${brillo}) invert(${Negativo}) opacity(${opacidad}) blur(${Desenfoque}px) contrast(${contraste}%) grayscale(${escalaGrises}%) hue-rotate(${hue}deg) sepia(${sepia}%) saturate(${saturado}%) invert(${Negativo})`
}
  
//funcion reestablecer filtros
    const reestablecerFiltros=document.querySelector(".boton-reestablecer-filtros")
    reestablecerFiltros.onclick = () => {
    document.querySelector(".Brillo").value = 1
    document.querySelector(".Opacidad").value = 1
    document.querySelector(".Contraste").value = 100
    document.querySelector(".Desenfoque").value = 0
    document.querySelector(".Escala-grises").value = 0
    document.querySelector(".Hue").value = 0
    document.querySelector(".Sepia").value = 0
    document.querySelector(".Saturado").value = 100
    document.querySelector(".Negativo").value = 0
  
    aplicarFiltros()
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