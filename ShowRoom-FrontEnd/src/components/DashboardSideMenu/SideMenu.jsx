import React from "react";
import "./SideMenu.css";
import { Link } from "react-router-dom";

function SideMenu() {
    return (
        <>
            <div className="sidemenu">
                <Link to="/"><img className="logo" src="/images/luna-store-logo.png" alt="Mi Tech Store"></img></Link>
                <Link className="link-button" to="/dashboard"><button className="menu-button">
                    <i class="fa-solid fa-chart-pie"></i>
                    <span>Dashboard</span>
                </button></Link>
                <hr></hr>
                <Link className="link-button" to="/dashboard/users"><button className="menu-button">
                    <i class="fa-solid fa-users"></i>
                    <span>Usuarios</span>
                </button></Link>
                <Link className="link-button" to="/dashboard/products"><button className="menu-button">
                    <i class="fa-solid fa-boxes-stacked"></i>
                    <span>Productos</span>
                </button></Link>
                <Link className="link-button" to="/dashboard/categories"><button className="menu-button">
                    <i class="fa-solid fa-list-ul"></i>
                    <span>Categorías</span>
                </button></Link>
                <Link className="link-button" to="/dashboard/sales"><button className="menu-button">
                    <i class="fa-solid fa-truck-ramp-box"></i>
                    <span>Ventas</span>
                </button></Link>
                <Link className="link-button" to="/dashboard/financial-balance"><button className="menu-button">
                <i class="fa-solid fa-chart-column"></i>
                    <span>Balance</span>
                </button></Link>
            </div >
        </>
    )
}

export default SideMenu;