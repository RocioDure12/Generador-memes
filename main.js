const botonModoOscuro=document.querySelector(".boton-modo-oscuro")

const body= document.querySelector("body")



    botonModoOscuro.onclick = () =>{
    body.classList.toggle("modo-oscuro")

    if(body.classList.contains("modo-oscuro")) {
        botonModoOscuro.textContent="Modo claro"
    }
    else {botonModoOscuro.textContent="Modo oscuro"}
}




