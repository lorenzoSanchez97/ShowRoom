import React from 'react'
import "./sideMenu.css"

export default function SideMenu() {
  return (
    <section className='side-menu-main-container'>
      <header className='side-menu-header'>
        <figure className='side-menu-user-image'>
          <img src="/images/profile-image.jpeg" alt="" />
        </figure>
        <div className='side-menu-name-and-profile'>
          <h2 className='side-menu-user-name'>Hola, Lorenzo Sanchez!</h2>
          <h3 className='side-menu-profile'>Ver perfil <i className="fa-solid fa-chevron-right"></i></h3>
        </div>
      </header>
      <div className='side-menu-buttons-container'>
        <p><i className="fa-solid fa-house"></i> Inicio</p>
        <p><i class="fa-solid fa-star"></i> Favoritos</p>
        <p><i class="fa-solid fa-bag-shopping"></i> Historial de compras</p>
        <p><i className="fa-solid fa-list-ul"></i> Categorias</p>
        <p><i className="fa-solid fa-hand-holding-dollar"></i> Ofertas</p>
        <p><i className="fa-solid fa-bell"></i> Novedades</p>
        <p><i className="fa-solid fa-info"></i> Información</p>
        <p><i class="fa-solid fa-right-from-bracket"></i> Cerrar sesión </p>
        </div>
    </section>
  )
}
