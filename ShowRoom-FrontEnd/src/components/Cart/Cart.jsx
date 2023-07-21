import React from "react";
import "./cart.css"
import Tabla from "../Tabla/Tabla";
import SectionTitle from "../SectionTitle/SectionTitle";

function Cart() {
    return (
        <main>
            <SectionTitle title={"Tu carrito de compras"} />
            <div className="carrito-main-container">
                <Tabla/>
                <section className="resumen">
                    <h1>Resumen</h1>
                    <div className="resumen-info-container">
                        <p>3 artículos</p>
                        <p>$106.331</p>
                    </div>
                    <div className="resumen-info-container">
                        <p>Costo de envío</p>
                        <p>$2000</p>
                    </div>
                    <div className="total-final">
                        <p>Total</p>
                        <p>$108.331</p>
                    </div>
                    <form action="">
                        <button className="boton-compra">Finalizar compra</button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default Cart;