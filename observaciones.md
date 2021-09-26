# Observaciones

Ro, felicitaciones por la entrega de tu trabajo. Estoy muy contenta recorriendolo. Veo que solucionaste muy bien, de manera muy creativa algunos de los desafíos, y que el código no sacrifica legibilidad para alcanzar este objetivo. Noto además una marcada mejora respecto al TP anterior. Felicitaciones por eso!

## Estructura correcta de documento HTML

Cumplido, aunque hay cositas por mejorar que te dejo comentadas. 

## Respeta el diseño dado

No para escritorio en el formulario, ni cumplido  en general para el responsive. Entiendo que el menú era desafiante en celulares, pero tomá en cuenta para futuros trabajos, y para el mundo laboral si deseas seguir una carrera en esta industria, que el diseño nunca es optativo, ni una sugerencia: debemos seguirlo a rajatabla. Este punto es el que más puntaje te quita de la nota final, ya que si bien el codigo esta fantastico, consideramos este requisito muy importante para prepararlas para las exigencias de la industria. Si tenes dudas de como resolver el menu en celulares no dejen de escribirme! 

## Respeta el funcionamiento

Cumplido salvo excepciones, 

Cuando quiero cambiar el color de fondo tengo un error en la consola: 

```
main.js:60 Uncaught TypeError: Cannot read properties of null (reading 'style')
    at HTMLInputElement.inputColorFondoImg.oninput (main.js:60)
```
 
Ese error significa que al dar la orden "imagenMemeContenedor.style.backgroundColor=inputColorFondoImg.value", la variable "imagenMemeContenedor" es null, es decir, javascript no la encuentra. Fijate que definis ese selector asi: `const imagenMemeContenedor=document.querySelector(".contenedor-imagen")`. Pero no existe esa clase en tu HTML por un error: en tu HTML tenes esto `<div contenedor-imagen>` en lugar de `<div class="contenedor-imagen">`

La imagen parece moverse cuando hago click en los checkbox para sacar el texto superior. Darle display none en este caso al parrafo no parece una buena idea ya que la imagen percibe que ese espacio dejó de ocuparse y se mueve en consecuencia. Hay que cubrir de alguna manera el espacio que antes ocupaba ese elemento. Dos sugerencias serían, en lugar de darle display none, darle visibility hidden o hacerlo transparente. o alcanza con darle display none, hay que cubrir de alfguna manera el espacio q ocupada ese elemento. por ejemplo podriamos decir que es transparente en lugar de display none, o visibility hidden 

Al darle un color de fondo al texto no se colorea toda la caja hasta los bordes, sino solo lo que rodea al texto. Los margin no toman background-color: preferible usar padding para el espaciado alli. 

## Responsive funciona correctamente

Cumplido, tomando en cuenta que se aleja del diseño.

## Buena estructura de proyecto

Falta con urgencia un favicon. 

## Código bien indentado

Cumplido en HTML, desprolijo en CSS. Hay extensiones de VSCode para acomodar el CSS, te recomiendo probar alguna. JS esta muy deprolijo, te dejo varios comentrarios en el archivo.  

## Comentarios que permiten mejorar la legibilidad del código

Cumplido.

## Uso correcto de etiquetas semánticas

Cumplido salvo por reemplazar los label del form por h3, una mala decision que impacta negativamente en la accesibilidad. 

## Buenos nombres de clases

Cumplido. 

## Buenos nombres de funciones y variables

Cumplido. 

## Reutilización de estilos

Cumplido, dejo un par de comentarios en CSS. 

## Funciones pequeñas

Cumplido. 

## Accesibilidad

Cumplido a medias. Tu pagina es aceptable a nivel accesibilidad, pero hay muchisimo para mejorar. 
- Los label del formulario deben o bien rodear al elemento, o bien tener el atributo "for". Eso es asi para que el lector de pantalla pueda identificar a que elemento se esta describiendo. En tu caso el lector no sabe para que elemento es cada label. 
- Esto tambien impacta en la usabilidad. Cuando el label rodea al elemento, el click en el label es un click en el elemento. Esto ayuda por ejemplo a usuarios con dificultades motrices: es dificil hacer click en un checkbox chiquitito, pero mas facil hacer click en el label. Eso no ocurre en tu pagina. 

Un label ayuda en terminos de accesibilidad para describir un elemento de formulario como un input al lector de pantalla y para aumentar el espacio de cliqueo en dispositivos moviles.  
Para que el lector de pantalla y el navegador puedan saber que un label y un elemento de formulario estan relacionados, el label debe 
- o bien rodear al elemento
- o bien contar con un atributo "for" que haga referencia al **id** del elemento. 

## Commits con mensajes adecuados

No cumplido. Si bien aprecio la enorme cantidad de commits, no sirven de nada si son "...". Necesito al ver el commit saber exactamente qué hiciste, aunque sea un cambio muy pequeño ("arreglé el margen del parrafo"). Esto es un requisito en muchos trabajos, pueden rechazar tus cambios si no estan bien descriptos por el mensaje de commit. 

# Nota final: 8
