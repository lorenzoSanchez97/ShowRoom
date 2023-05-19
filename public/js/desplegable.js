let desplegable = document.querySelectorAll(".desplegable")
let listaDesplegable = document.querySelectorAll(".lista-desplegable")

for (let i = 0; i < desplegable.length; i++) {
    desplegable[i].addEventListener("mouseenter", () => {
    listaDesplegable[i].classList.add("lista-desplegable-mostrar")
    })
    
    desplegable[i].addEventListener("mouseleave", () => {
    listaDesplegable[i].classList.remove("lista-desplegable-mostrar")
    })
}