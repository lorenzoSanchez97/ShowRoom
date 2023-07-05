import React from "react";
import "./header.css";

function Header() {
    return (
        <header>
    <div className="cat">
        <img src="/images/Cat.png" alt=""/>
    </div>
    <section className="header-top-bar">
        <div>
            <h1>LOGO</h1>
        </div>
        <form className="search-bar" action="" method="GET">
            <input type="text" placeholder="Buscar productos"/>
            <button><i className="fa fa-search"></i></button>
        </form>
        <div>
            <a className="sesion" href="">Iniciar sesión <i className="fa-solid fa-arrow-right-to-bracket"></i></a>
        </div>
        <div>
            <a className="carrito" href="/cart">Carrito <i className="fa-solid fa-cart-shopping"></i></a>         
        </div>
    </section>
    <nav className="nav-bar">
        <ul className="nav-bar-list">
            <li className="nav-bar-category"><a href="/">Inicio</a></li>
            <li className="nav-bar-category desplegable"><a href="">Productos</a>
                <ul className="lista-desplegable">
                    <li className="subcategoria"><a href="">Mascarillas</a></li>
                    <li className="subcategoria"><a href="">Depilación</a></li>
                    <li className="subcategoria"><a href="">Limpieza</a></li>
                    <li className="subcategoria"><a href="">Maquillaje</a></li>
                    <li className="subcategoria"><a href="">Accesorios</a></li>
                </ul>
            </li>
            <li className="nav-bar-category"><a href="">Ofertas</a></li>
            <li className="nav-bar-category"><a href="">Novedades</a></li>
            <li className="nav-bar-category desplegable"><a href="">Información</a>
                <ul className="lista-desplegable">
                    <li className="subcategoria"><a href="">Cómo comprar</a></li>
                    <li className="subcategoria"><a href="">Envíos</a></li>
                    <li className="subcategoria"><a href="">Sobre nosotras</a></li>
                </ul>
            </li>
        </ul>
    </nav>
</header>
    )
}

export default Header;