import React from "react";
import "./productDetail.css"

function ProductDetail () {
    return (
        <body>
            <main className="product-detail-main">
                <div class="mini-imagenes-container">
                    <img class="slide-mini" src="/images/mascarilla.png" alt=""/>
                    <img class="slide-mini" src="/images/mascarilla2.jpg" alt=""/>
                    <img class="slide-mini" src="/images/mascarilla3.jpg" alt=""/>
                    <img class="slide-mini" src="/images/mascarilla4.jpg" alt=""/>
                </div>
                <figure class="imagen-producto">
                    <img class="mainSlide" src="/images/mascarilla.png" alt=""/>
                </figure>
                <div class="botones">
                    <button class="image-button prev"><i class="fa-solid fa-arrow-left"></i></button>
                    <button class="image-button next"><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <section class="detalle-producto">
                    <h1 class="titulo-producto">Titulo producto</h1>
                    <h1 class="precio-producto">$9999</h1>
                    <div class="incons-container">
                        <i class="fa-solid fa-credit-card" id="cuotas-producto-icon"></i>
                        <h1 class="cuotas"> 12 cuotas sin interés</h1>
                    </div>
                    <div class="incons-container">
                        <i class="fa-solid fa-hand-holding-dollar" id="descuento-producto-icon"></i>
                        <h1 class="descuento"> 10% de descuento</h1>
                    </div>
                    <div class="incons-container">
                        <i class="fa-solid fa-truck" id="envio-producto-icon"></i>
                        <h1 class="envio-producto">Envio gratis!</h1>
                    </div>
                    <h1 class="stock-producto">Stock: 25 unidades</h1>
                    <form class="cantidad-formulario" action="" method="">
                        <label for="cantidad">Cantidad</label>
                        <input id="cantidad" type="number"/>
                        <button class="agregar-carrito">Agregar al carrito</button>
                    </form>
                    <h1 class="descripcion-producto-titulo">Descripción</h1>
                    <p class="descripcion-producto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
                        doloremque consequatur cumque eius, provident excepturi laudantium officia incidunt corrupti
                        optio ratione omnis tempore quaerat eveniet? Fuga quos delectus repellendus in?</p>
                </section>
            </main>
    </body>
    )
}

export default ProductDetail;