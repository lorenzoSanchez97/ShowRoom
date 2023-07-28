import React from "react";
import "./cart.css"
import SectionTitle from "../SectionTitle/SectionTitle";
import CartProduct from "../CartProduct/CartProduct";

function Cart() {
    return (
        <main>
            <SectionTitle title={"Tu carrito de compras"} />
            <div className="carrito-main-container">
                <section className="cart-products-container">
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                <CartProduct />
                </section>
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