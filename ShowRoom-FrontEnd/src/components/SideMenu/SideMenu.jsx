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
    </section>
  )
}
