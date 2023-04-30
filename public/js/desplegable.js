let desplegable = document.querySelectorAll(".desplegable")
let listaDesplegable = document.querySelectorAll(".lista-desplegable")
let navBar = document.querySelector(".nav-bar")

for (let i = 0; i < desplegable.length; i++) {
    desplegable[i].addEventListener("mouseenter", () => {
    listaDesplegable[i].classList.add("lista-desplegable-mostrar")
    navBar.classList.add("nav-bar-desplegar")
    })
    
    desplegable[i].addEventListener("mouseleave", () => {
    listaDesplegable[i].classList.remove("lista-desplegable-mostrar")
    navBar.classList.remove("nav-bar-desplegar")
    })
}