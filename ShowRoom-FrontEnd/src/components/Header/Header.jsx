import React from "react";
import "./header.css";
import { modalContext } from "../../contexts/modalContext";

function Header({ setSideMenu }) {

    let modal = React.useContext(modalContext)

    let [mouseEvent, setMouseEvent] = React.useState(5)

    const handleMouseEnter = (action) => {
        if (action === "e1") {
            setMouseEvent(1)
        } else if (action === "e2") {
            setMouseEvent(3)
        }
    }

    const handleClickButtons = (data) => {
        modal.setModal(data)
    }

    return (
        <header>
            <div className="cat">
                <img src="/images/Cat.png" alt="" />
            </div>
            <section className="header-top-bar">
                <div className="logo-container">
                    <h1 id="logo">LOGO</h1>
                </div>
                <div className="menu-hamburguesa" onClick={() => setSideMenu(true)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <form className="search-bar" action="" method="GET">
                    <input type="text" placeholder="Buscar productos" />
                    <button><i className="fa fa-search"></i></button>
                </form>
                <div className="user-session-buttons">
                    <button className="sesion registro" href="" onClick={() => handleClickButtons("register")}>Registrarse <i className="fa-solid fa-user-plus"></i></button>
                    <button className="sesion login" href="" onClick={() => handleClickButtons("login")}>Iniciar sesión <i className="fa-solid fa-arrow-right-to-bracket"></i></button>
                </div>
                <div>
                    <a className="carrito" href="/cart">Carrito <i className="fa-solid fa-cart-shopping"></i></a>
                    <i className="fa-solid fa-cart-shopping responsive-carrito"></i>
                </div>
            </section>
            <nav className="nav-bar">
                <ul className="nav-bar-list">
                    <div className="nav-bar-element-container">
                        <i className="fa-solid fa-house"></i>
                        <li className="nav-bar-category"><a href="/">Inicio</a></li>
                    </div>
                    <div className="nav-bar-element-container" onMouseEnter={() => handleMouseEnter("e1")} onMouseLeave={() => setMouseEvent(5)}>
                        <i className="fa-solid fa-list-ul"></i>
                        <li className="nav-bar-category desplegable" ><a href="">Categorias</a></li>
                        <ul className={`lista-desplegable ${mouseEvent === 1 ? "lista-desplegable-mostrar" : ""}`}>
                            <li className="transparent-stripe"></li>
                            <li className="subcategoria"><a href="">Mascarillas</a></li>
                            <li className="subcategoria"><a href="">Depilación</a></li>
                            <li className="subcategoria"><a href="">Limpieza</a></li>
                            <li className="subcategoria"><a href="">Maquillaje</a></li>
                            <li className="subcategoria"><a href="">Accesorios</a></li>
                        </ul>
                    </div>
                    <div className="nav-bar-element-container">
                        <i className="fa-solid fa-hand-holding-dollar"></i>
                        <li className="nav-bar-category"><a href="">Ofertas</a></li>
                    </div>
                    <div className="nav-bar-element-container">
                        <i className="fa-solid fa-bell"></i>
                        <li className="nav-bar-category"><a href="">Novedades</a></li>
                    </div>
                    <div className="nav-bar-element-container" onMouseEnter={() => handleMouseEnter("e2")} onMouseLeave={() => setMouseEvent(5)}>
                        <i className="fa-solid fa-info"></i>
                        <li className="nav-bar-category desplegable"><a href="">Información</a></li>
                        <ul className={`lista-desplegable ${mouseEvent === 3 ? "lista-desplegable-mostrar" : ""}`}>
                            <li className="transparent-stripe"></li>
                            <li className="subcategoria"><a href="">Cómo comprar</a></li>
                            <li className="subcategoria"><a href="">Envíos</a></li>
                            <li className="subcategoria"><a href="">Sobre nosotras</a></li>
                        </ul>
                    </div>
                </ul>
            </nav>
        </header >
    )
}

export default Header;