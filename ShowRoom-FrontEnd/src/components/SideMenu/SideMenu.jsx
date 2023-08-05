import React from 'react'
import "./sideMenu.css"

export default function SideMenu({ setSideMenu }) {

  let [closingAnimation, setClosingAnimation] = React.useState(false)

    const closeSideMenu = () => {
    setClosingAnimation(true)
    setTimeout(() => {
      setSideMenu(false)
    }, 300);
    }

  return (
  <>
  <section className={closingAnimation ?'sideMenu-background-cover sideMenu-background-cover-hidde' : 'sideMenu-background-cover'} onClick={closeSideMenu}></section>
    <section className={closingAnimation ? 'side-menu-main-container closing-animation' : 'side-menu-main-container'}>
      <header className='side-menu-header'>
        <i className="fa-regular fa-circle-xmark" id='side-menu-header-close-button' onClick={closeSideMenu}></i>
        <figure className='side-menu-user-image'>
          <img src="/images/profile-image.jpeg" alt="" />
        </figure>
        <div className='side-menu-user-name-container'>
          <h2 className='side-menu-user-name'>Hola, Lorenzo Sanchez!</h2>
        </div>
      </header>
      <div className='side-menu-buttons-container'>
        <p><i className="fa-solid fa-house"></i> Inicio</p>
        <p><i className="fa-solid fa-user"></i> Perfil</p>
        <p><i className="fa-solid fa-star"></i> Favoritos</p>
        <p><i className="fa-solid fa-bag-shopping"></i> Historial de compras</p>
        <p><i className="fa-solid fa-list-ul"></i> Categorias</p>
        <p><i className="fa-solid fa-hand-holding-dollar"></i> Ofertas</p>
        <p><i className="fa-solid fa-bell"></i> Novedades</p>
        <p><i className="fa-solid fa-info"></i> Información</p>
        <p><i className="fa-solid fa-right-from-bracket"></i> Cerrar sesión </p>
      </div>
    </section>
    </>
  )
}
