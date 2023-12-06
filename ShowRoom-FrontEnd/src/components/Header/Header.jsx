import { useState, useContext } from "react"
import "./header.css";
import { modalContext } from "../../contexts/modalContext";
import { Link } from "react-router-dom";

function Header({ setSideMenu }) {

    let modal = useContext(modalContext)

    let [mouseEvent, setMouseEvent] = useState(5)

    const handleSessionButtonsClick = (data) => {
        modal.setModal(data)
    }

    return (
        <header>
            <section className="header-top-bar">
                <figure className="logo-container">
                    <img id="logo" src="/images/luna-store-logo.png" alt="" />
                </figure>
                <div className="menu-hamburguesa" onClick={() => setSideMenu(true)}>
                    <i className="fa-solid fa-bars"></i>
                </div>
                <form className="search-bar" action="" method="GET">
                    <input type="text" placeholder="Buscar productos" />
                    <button><i className="fa fa-search"></i></button>
                </form>
                <div className="user-session-buttons">
                    <button className="sesion registro" href="" onClick={() => handleSessionButtonsClick("register")}>Registrarse</button>
                    <button className="sesion login" href="" onClick={() => handleSessionButtonsClick("login")}>Iniciar sesión</button>
                </div>
                <div>
                    <Link to="/cart"><button className="carrito"><i className="fa-solid fa-cart-shopping"></i></button></Link>
                    <button className="responsive-carrito-button"><i className="fa-solid fa-cart-shopping responsive-carrito"></i></button>
                </div>
                <div>
                    <Link to="/dashboard"><button className="dashboard-admin-button">Dashboard <i class="fa-solid fa-chart-pie"></i></button></Link>
                    <button className="responsive-carrito-button"><i className="fa-solid fa-cart-shopping responsive-carrito"></i></button>
                </div>
            </section>
            <nav className="nav-bar">
                <ul className="nav-bar-list">
                    <Link to="/">
                        <li className="nav-bar-element-container">
                            <p className="nav-bar-category">Inicio</p>
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="nav-bar-element-container" onMouseEnter={() => setMouseEvent(1)} onMouseLeave={() => setMouseEvent(5)}>
                            <Link to="/products"><p className="nav-bar-category desplegable">Productos <i className="fa-solid fa-angle-down"></i></p></Link>
                            <ul className={`lista-desplegable ${mouseEvent === 1 ? "lista-desplegable-mostrar" : ""}`}>
                                <li className="transparent-stripe"></li>
                                <li className="subcategoria"><a href="">Mascarillas</a></li>
                                <li className="subcategoria"><a href="">Depilación</a></li>
                                <li className="subcategoria"><a href="">Maquillaje</a></li>
                                <li className="subcategoria"><a href="">Accesorios</a></li>
                            </ul>
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="nav-bar-element-container">
                            <p className="nav-bar-category">Ofertas</p>
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="nav-bar-element-container">
                            <p className="nav-bar-category">Novedades</p>
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="nav-bar-element-container" onMouseEnter={() => setMouseEvent(3)} onMouseLeave={() => setMouseEvent(5)}>
                            <p className="nav-bar-category desplegable">Información <i className="fa-solid fa-angle-down"></i></p>
                            <ul className={`lista-desplegable ${mouseEvent === 3 ? "lista-desplegable-mostrar" : ""}`}>
                                <li className="transparent-stripe"></li>
                                <li className="subcategoria"><a href="">Cómo comprar</a></li>
                                <li className="subcategoria"><a href="">Envíos</a></li>
                                <li className="subcategoria"><a href="">Sobre nosotras</a></li>
                            </ul>
                        </li>
                    </Link>
                </ul>
            </nav>
        </header >
    )
}

export default Header;