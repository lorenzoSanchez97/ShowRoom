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
                    <button className="sesion registro" href="" onClick={() => handleSessionButtonsClick("register")}>Registrarse</button>
                    <button className="sesion login" href="" onClick={() => handleSessionButtonsClick("login")}>Iniciar sesión</button>
                </div>
                <div>
                    <Link to="/cart"><button className="carrito" href="/cart"><i className="fa-solid fa-cart-shopping"></i></button></Link>
                    <i className="fa-solid fa-cart-shopping responsive-carrito"></i>
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
                            <p className="nav-bar-category desplegable">Categorias <i class="fa-solid fa-angle-down"></i></p>
                            <ul className={`lista-desplegable ${mouseEvent === 1 ? "lista-desplegable-mostrar" : ""}`}>
                                <li className="transparent-stripe"></li>
                                <li className="subcategoria"><a href="">Mascarillas</a></li>
                                <li className="subcategoria"><a href="">Depilación</a></li>
                                <li className="subcategoria"><a href="">Limpieza</a></li>
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
                            <p className="nav-bar-category desplegable">Información <i class="fa-solid fa-angle-down"></i></p>
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