const botonModoOscuro=document.querySelector(".boton-modo-oscuro")

const body= document.querySelector("body")


const intercambiarModoOscuro= () =>{
    body.classList.toggle("modo-oscuro")

    if(body.classList.contains("modo-oscuro") === true){
        botonModoOscuro.textContent="Modo claro"
    }
    else {botonModoOscuro.textContent="Modo oscuro"}
}



botonModoOscuro.onclick=intercambiarModoOscuro

