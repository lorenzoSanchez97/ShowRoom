import React from "react";
import "./header.css";
import { modalContext } from "../../contexts/modalContext";
import { Link } from "react-router-dom";

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

    const handleClickSessionButtons = (data) => {
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
                    <button className="sesion registro" href="" onClick={() => handleClickSessionButtons("register")}>Registrarse <i className="fa-solid fa-user-plus"></i></button>
                    <button className="sesion login" href="" onClick={() => handleClickSessionButtons("login")}>Iniciar sesión <i className="fa-solid fa-arrow-right-to-bracket"></i></button>
                </div>
                <div>
                   <Link to="/cart"><button className="carrito" href="/cart">Carrito <i className="fa-solid fa-cart-shopping"></i></button></Link>
                    <i className="fa-solid fa-cart-shopping responsive-carrito"></i>
                </div>
            </section>
            <nav className="nav-bar">
                <ul className="nav-bar-list">
                    <li className="nav-bar-element-container">
                        <a href="">
                            <i className="fa-solid fa-house"></i>
                            <p className="nav-bar-category">Inicio</p>
                        </a>
                    </li>
                    <li className="nav-bar-element-container" onMouseEnter={() => handleMouseEnter("e1")} onMouseLeave={() => setMouseEvent(5)}>
                        <a href="">
                            <i className="fa-solid fa-list-ul"></i>
                            <p className="nav-bar-category desplegable">Categorias  <i className="fa-solid fa-caret-right"></i></p></a>
                        <ul className={`lista-desplegable ${mouseEvent === 1 ? "lista-desplegable-mostrar" : ""}`}>
                            <li className="transparent-stripe"></li>
                            <li className="subcategoria"><a href="">Mascarillas</a></li>
                            <li className="subcategoria"><a href="">Depilación</a></li>
                            <li className="subcategoria"><a href="">Limpieza</a></li>
                            <li className="subcategoria"><a href="">Maquillaje</a></li>
                            <li className="subcategoria"><a href="">Accesorios</a></li>
                        </ul>
                    </li>
                    <li className="nav-bar-element-container">
                        <a href="">
                            <i className="fa-solid fa-hand-holding-dollar"></i>
                            <p className="nav-bar-category">Ofertas</p>
                        </a>
                    </li>
                    <li className="nav-bar-element-container">
                        <a href="">
                            <i className="fa-solid fa-bell"></i>
                            <p className="nav-bar-category">Novedades</p>
                        </a>
                    </li>
                    <li href="" className="nav-bar-element-container" onMouseEnter={() => handleMouseEnter("e2")} onMouseLeave={() => setMouseEvent(5)}>
                        <a href="">
                            <i className="fa-solid fa-info"></i>
                            <p className="nav-bar-category desplegable">Información <i className="fa-solid fa-caret-right"></i></p> </a>
                        <ul className={`lista-desplegable ${mouseEvent === 3 ? "lista-desplegable-mostrar" : ""}`}>
                            <li className="transparent-stripe"></li>
                            <li className="subcategoria"><a href="">Cómo comprar</a></li>
                            <li className="subcategoria"><a href="">Envíos</a></li>
                            <li className="subcategoria"><a href="">Sobre nosotras</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default Header;