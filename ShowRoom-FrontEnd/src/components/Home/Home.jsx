import React from "react";
import "./home.css"
import Product from "../Product/Product";

function Home() {

    return (
        <section className="body-section">
            <div id="banner">
                <img src="/images/Banner.png" alt="" />
            </div>
            <main>
                <h1 className="title">Productos en oferta</h1>
                <section className="seccion-principal">
                    <Product/>
                    <Product/>
                </section>
            </main>

        </section>

    )
}

export default Home;