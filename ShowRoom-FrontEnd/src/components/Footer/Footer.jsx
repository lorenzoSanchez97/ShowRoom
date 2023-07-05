import React from "react";
import "./footer.css"

function Footer() {
    return (
        <footer>
            <div className="footer-main-container">
                <h1 className="titulo-footer">LOGO</h1>
                <div>
                    <h1 className="titulo-footer">Redes sociales</h1>
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            <h1 className="made-by"><a href="https://www.linkedin.com/in/lorenzo-j-sanchez/" target="_blank">Made by Lorenzo Sanchez</a></h1>
        </footer>
    )
}

export default Footer;