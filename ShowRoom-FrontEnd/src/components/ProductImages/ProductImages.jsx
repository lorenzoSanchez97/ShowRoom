import { useState, useEffect } from "react"
import "./productImages.css"


function ProductImages() {

    let images = ["mascarilla.png", "mascarilla2.jpg", "mascarilla3.jpg", "mascarilla4.jpg"]

    let [slide, setSlide] = useState(0)
    let [posicionInicial, setPosicionInicial] = useState(0);
    let [desplazamiento, setDesplazamiento] = useState(0);

    const handlePrevButton = () => {
        setSlide(slide - 1)
    }

    const handleNextButton = () => {
        setSlide(slide + 1)
    }

    const handleMouseEnter = (index) => {
        setSlide(index)
    }

    const handleTouchStart = (e) => {
        setPosicionInicial(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setDesplazamiento(e.touches[0].clientX - posicionInicial);
    };

    const handleTouchEnd = () => {
        if (Math.abs(desplazamiento) > 50) {
            if (desplazamiento > 0) {
                handlePrevButton();
            } else {
                handleNextButton();
            }
        }
        setDesplazamiento(0);
    };


    useEffect(() => {
        if (images.length > 0) {
            if (slide > images.length - 1) {
                setSlide(0)
            }
            if (slide < 0) {
                setSlide(images.length - 1)
            }
        }
    }, [slide])

    return (

        <div className="product-images-main-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}>
            <div className="mini-imagenes-container">
                {images.map((img, index) => {
                    return <img key={index} className={`slide-mini ${index == slide ? "mini-imagenes-hover" : ""}`} onMouseEnter={() => handleMouseEnter(index)} src={`/images/${img}`} alt="" />
                })}
            </div>
            <figure className="imagen-producto">
                <div className="images-counter">
                    <p>{slide + 1} / {images.length}</p>
                </div>
                <img className="mainSlide" src={`/images/${images[slide]}`} alt="" />
                <div className="botones">
                    <button className="image-button prev" onClick={handlePrevButton}><i className="fa-solid fa-angle-left"></i></button>
                    <button className="image-button next" onClick={handleNextButton}><i className="fa-solid fa-angle-right"></i></button>
                </div>
            </figure>
        </div>
    )
}

export default ProductImages;