window.addEventListener("load", () => {

    let mainSlide = document.querySelector(".mainSlide");
    let miniSlides = document.querySelectorAll(".slide-mini");

    let buttonPrev = document.querySelector(".prev")
    let buttonNext = document.querySelector(".next")

    miniSlides[0].classList.add("mini-imagenes-hover")

    miniSlides.forEach(miniSlide => {
        miniSlide.addEventListener("mouseover", () => {
            miniSlides.forEach(slide => {
                slide.classList.remove("mini-imagenes-hover");
            });
            miniSlide.classList.add("mini-imagenes-hover")
            mainSlide.src = miniSlide.src;
        })
    });

    buttonPrev.addEventListener("click", () => {
        let currentSlide = document.querySelector(".mini-imagenes-hover")
        currentSlide.classList.remove("mini-imagenes-hover")
        let prevSlide = currentSlide.previousElementSibling;
        if (prevSlide) {
            prevSlide.classList.add("mini-imagenes-hover");
            mainSlide.src = prevSlide.src;
        } else {
            miniSlides[miniSlides.length - 1].classList.add("mini-imagenes-hover");
            mainSlide.src = miniSlides[miniSlides.length - 1].src;
        }
    })

    buttonNext.addEventListener("click", () => {
        let currentSlide = document.querySelector(".mini-imagenes-hover")
        currentSlide.classList.remove("mini-imagenes-hover")
        let nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            nextSlide.classList.add("mini-imagenes-hover");
            mainSlide.src = nextSlide.src;
        } else {
            miniSlides[0].classList.add("mini-imagenes-hover");
            mainSlide.src = miniSlides[0].src;

        }
    })
})