import React from "react";
import "./productImages.css"


function ProductImages() {

    let images = ["mascarilla.png", "mascarilla2.jpg", "mascarilla3.jpg", "mascarilla4.jpg"]

    let [slide, setSlide] = React.useState(0)

    const handlePrevButton = () => {
    setSlide (slide - 1)
    }

    const handleNextButton = () => {
        setSlide (slide + 1)
    }

    const handleMouseEnter = (index) => {
        setSlide(index)
    }

    React.useEffect(() => {
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
        <div className="product-images-main-container">
            <div className="mini-imagenes-container">
                {images.map ((img, index) => {
                   return <img key={index} className={`slide-mini ${index == slide ? "mini-imagenes-hover" : ""}`} onMouseEnter={() => handleMouseEnter(index)} src={`/images/${img}`} alt="" />
                })}
            </div>
            <figure className="imagen-producto">
                <img className="mainSlide" src={`/images/${images[slide]}`} alt="" />
            <div className="botones">
                    <button className="image-button prev" onClick={handlePrevButton}><i className="fa-solid fa-arrow-left"></i></button>
                    <button className="image-button next" onClick={handleNextButton}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            </figure>
        </div>
    )
}

export default ProductImages;