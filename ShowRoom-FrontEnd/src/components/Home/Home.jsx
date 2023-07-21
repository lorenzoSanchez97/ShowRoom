import React from "react";
import "./home.css"
import Product from "../Product/Product";
import SectionTitle from "../SectionTitle/SectionTitle";

function Home() {

    return (
        <section className="body-section">
            <div id="banner">
                <img src="/images/Banner.png" alt="" />
            </div>
            <main>
                <SectionTitle title={"Productos en oferta"} />
                <section className="seccion-principal">
                    <Product/>
                    <Product/>
                </section>
            </main>

        </section>

    )
}

export default Home;