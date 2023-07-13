import React from "react";
import "./header.css";

function Header({ sendDataToApp }) {

    let [mouseEvent, setMouseEvent] = React.useState(5)

    const handleMouseEnter = (action) => {
        if (action === "e1") {
            setMouseEvent(1)
        } else if (action === "e2") {
            setMouseEvent(3)
        }
    }

    const handleClickButtons = (data) => {
        sendDataToApp(data)
    }

    return (
        <header>
            <div className="cat">
                <img src="/images/Cat.png" alt="" />
            </div>
            <section className="header-top-bar">
                <div>
                    <h1>LOGO</h1>
                </div>
                <form className="search-bar" action="" method="GET">
                    <input type="text" placeholder="Buscar productos" />
                    <button><i className="fa fa-search"></i></button>
                </form>
                <div>
                    <button className="sesion" href="" onClick={() => handleClickButtons("register")}>Creá tu cuenta</button>
                </div>
                <div>
                    <button className="sesion" href="" onClick={() => handleClickButtons("login")}>Iniciar sesión <i className="fa-solid fa-arrow-right-to-bracket"></i></button>
                </div>
                <div>
                    <a className="carrito" href="/cart">Carrito <i className="fa-solid fa-cart-shopping"></i></a>
                </div>
            </section>
            <nav className="nav-bar">
                <ul className="nav-bar-list">
                    <div className="nav-bar-element-container">
                    <i class="fa-solid fa-house"></i>
                    <li className="nav-bar-category"><a href="/">Inicio</a></li>
                    </div>
                    <div className="nav-bar-element-container">
                    <i class="fa-solid fa-boxes-stacked"></i>
                    <li className="nav-bar-category desplegable" onMouseEnter={() => handleMouseEnter("e1")} onMouseLeave={() => setMouseEvent(5)}><a href="">Productos</a>
                        <ul className={`lista-desplegable ${mouseEvent === 1 ? "lista-desplegable-mostrar" : ""}`}>
                            <li className="subcategoria"><a href="">Mascarillas</a></li>
                            <li className="subcategoria"><a href="">Depilación</a></li>
                            <li className="subcategoria"><a href="">Limpieza</a></li>
                            <li className="subcategoria"><a href="">Maquillaje</a></li>
                            <li className="subcategoria"><a href="">Accesorios</a></li>
                        </ul>
                    </li>
                    </div>
                    <div className="nav-bar-element-container">
                    <i class="fa-solid fa-hand-holding-dollar"></i>
                    <li className="nav-bar-category"><a href="">Ofertas</a></li>
                    </div>
                    <div className="nav-bar-element-container">
                    <i class="fa-solid fa-bell"></i>
                    <li className="nav-bar-category"><a href="">Novedades</a></li>
                    </div>
                    <div className="nav-bar-element-container">
                    <i class="fa-solid fa-info"></i>
                    <li className="nav-bar-category desplegable" onMouseEnter={() => handleMouseEnter("e2")} onMouseLeave={() => setMouseEvent(5)}><a href="">Información</a>
                        <ul className={`lista-desplegable ${mouseEvent === 3 ? "lista-desplegable-mostrar" : ""}`}>
                            <li className="subcategoria"><a href="">Cómo comprar</a></li>
                            <li className="subcategoria"><a href="">Envíos</a></li>
                            <li className="subcategoria"><a href="">Sobre nosotras</a></li>
                        </ul>
                    </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header;