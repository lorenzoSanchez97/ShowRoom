import React from "react";
import "./cart.css"

function Cart() {
    return (
        <main>
            <h1 className="titulo-carrito">Tu carrito de compras</h1>
            <div className="carrito-main-container">
                <section className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><img src="/images/mascarilla.png" alt=""/> </td>
                                <td>Mascarilla de Coco <br/>
                                    Color: blanco</td>
                                <td>$1111</td>
                                <td>5u</td>
                                <td className="total-producto">$5555</td>
                            </tr>
                            <tr>
                                <td><img src="/images/mascarilla.png" alt=""/></td>
                                <td>Mascarilla de Coco <br/>
                                    Color: negro</td>
                                <td>$2222</td>
                                <td>22u</td>
                                <td className="total-producto">$99999</td>
                            </tr>
                            <tr>
                                <td><img src="/images/mascarilla.png" alt=""/></td>
                                <td>Mascarilla de Aloe Vera <br/>
                                    Color: verde</td>
                                <td>$9741</td>
                                <td>1u</td>
                                <td className="total-producto">$777</td>
                            </tr>
                        </tbody>
                    </table>
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