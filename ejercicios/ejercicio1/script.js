
//  Ejercicio 1 - Seleccionar elementos del DOM

/** 1.1. Selecionar x id
 * 1. Seleccionar el elemento por su id "titulo"
 * 2. Mostrar su contenido en consola
 */

/*
let titulo = document.getElementById ("titulo")
console.log (titulo)
*/

// para cambiar algo por medio del DOM

/*
let titulo = document.querySelector ("#titulo")
titulo.innerText = "HOLA MUNDO"
console.log (titulo)
*/

/** 1.2. Seleccionar x clase
 * 1. Seleccionar el div por su clase main-div 
 * 2. Mostrar su contenido en consola
 * 3. Mostrar su contenido en consola con innerHTML
 * 4. Mostrar su contenido en consola con innerText
 */

/*
const miDiv = document.querySelector (".main-div")
console.log (miDiv.innerHTML) // muestra el contenido HTML que está dentro del div
console.log (miDiv.innerText) // muestra el texto del div
console.log (miDiv)
*/

// 1.3. Por etiqueta
/**
 * 1. Seleccionar el elemento por su etiqueta "img"
 * 2. Mostrar su contenido en consola
 * 3. Mostrar el contenido de los atributos src y alt por consola
 */

/*
let miImg = document.getElementsByTagName("img") [0] // se pone cero para mostrar solamente el div que lo contiene, para que no se muestre toda la colección
console.log (miImg)
*/

// 1.4. Por querySelector
/**
 * 1. Seleccionar el elemento por su id "titulo"
 * 2. Mostrar su contenido en consola
 * 3. Seleccionar el div por su clase main-div 
 * 4. Mostrar su contenido en consola
 * 5. Seleccionar el elemento por su etiqueta "img"
 * 6. Mostrar su contenido en consola
 * 7. Mostrar el contenido de los atributos src y alt por consola
 */

/*
let titulo = document.querySelector ("#titulo")
console.log (titulo)
let div = document.querySelector (".main-div")
console.log (div)
let img = document.querySelector ("img")
console.log (img)
console.log (img.src) // muestra la ruta de la imagen
console.log (img.alt) // muestra el texto del atributo
*/