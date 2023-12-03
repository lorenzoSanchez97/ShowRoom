import React from "react";
import "./SideMenu.css";
import { Link } from "react-router-dom";

function SideMenu() {
    return (
        <>
            <div className="sidemenu">
                <img className="logo" src="/images/luna-store-logo.png" alt="Mi Tech Store"></img>
                <Link className="link-button" to="/"><button className="menu-button">
                    <i class="fa-solid fa-chart-pie"></i>
                    <span>Dashboard</span>
                </button></Link>
                <hr></hr>
                <Link className="link-button" to="/users"><button className="menu-button">
                    <i class="fa-solid fa-user"></i>
                    <span>Usuarios</span>
                </button></Link>
                <Link className="link-button" to="/products"><button className="menu-button">
                    <i class="fa-solid fa-boxes-stacked"></i>
                    <span>Productos</span>
                </button></Link>
                <Link className="link-button" to="/categories"><button className="menu-button">
                    <i class="fa-solid fa-list-ul"></i>
                    <span>Categorías</span>
                </button></Link>
            </div >
        </>
    )
}

export default SideMenu;