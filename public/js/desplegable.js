let desplegable = document.querySelectorAll(".desplegable")
let listaDesplegable = document.querySelectorAll(".lista-desplegable")

for (let i = 0; i < desplegable.length; i++) {
    desplegable[i].addEventListener("mouseenter", () => {
        listaDesplegable[i].classList.add("lista-desplegable-mostrar")
        listaDesplegable[i].classList.remove("lista-desplegable-ocultar")
    })

    desplegable[i].addEventListener("mouseleave", () => {
        listaDesplegable[i].classList.add("lista-desplegable-ocultar")
        listaDesplegable[i].classList.remove("lista-desplegable-mostrar")
    })
}