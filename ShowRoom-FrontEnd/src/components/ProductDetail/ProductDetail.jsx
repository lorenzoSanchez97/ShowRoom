import React from "react";
import "./productDetail.css"
import ProductImages from "../ProductImages/ProductImages";

function ProductDetail() {

    return (
        <>
            <main className="product-detail-main">
                <ProductImages />
                <section className="detalle-producto">
                    <h1 className="titulo-producto">Titulo producto</h1>
                    <h1 className="precio-producto">$9999</h1>
                    <div className="incons-container">
                        <i className="fa-solid fa-credit-card" id="cuotas-producto-icon"></i>
                        <h1 className="cuotas"> 12 cuotas sin interés</h1>
                    </div>
                    <div className="incons-container">
                        <i className="fa-solid fa-hand-holding-dollar" id="descuento-producto-icon"></i>
                        <h1 className="descuento"> 10% de descuento</h1>
                    </div>
                    <div className="incons-container">
                        <i className="fa-solid fa-truck" id="envio-producto-icon"></i>
                        <h1 className="envio-producto">Envio gratis!</h1>
                    </div>
                    <h1 className="stock-producto">Stock: 25 unidades</h1>
                    <form className="cantidad-formulario" action="" method="">
                        <label htmlFor="cantidad">Cantidad</label>
                        <input id="cantidad" type="number" />
                        <button className="agregar-carrito">Agregar al carrito</button>
                    </form>
                    <h1 className="descripcion-producto-titulo">Descripción</h1>
                    <p className="descripcion-producto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
                        doloremque consequatur cumque eius, provident excepturi laudantium officia incidunt corrupti
                        optio ratione omnis tempore quaerat eveniet? Fuga quos delectus repellendus in?</p>
                </section>
            </main>
        </>
    )
}

export default ProductDetail;