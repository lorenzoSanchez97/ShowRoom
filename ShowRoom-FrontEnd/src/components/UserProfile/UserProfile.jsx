import React from "react";
import "./userProfile.css";

export default function UserProfile() {
  return (
    <>
      <main className="user-profile-main-container">
        <div className="user-personal-info-container">
          <div className="user-image-container">
            <img src="/images/profile-image.jpeg" alt="" />
          </div>
          <div className="user-data-container">
            <div className="user-info-title-and-button">
              <h2 className="user-data-title">Información personal</h2>
              <button><i class="fa-solid fa-pen-to-square"></i></button>
            </div>
            <div className="user-info-item-container">
              <p className="user-info-subtitle">Nombre y apellido</p>
              <p>Lorenzo Sanchez</p>
            </div>
            <div className="user-info-item-container">
              <p className="user-info-subtitle">Número de teléfono</p>
              <p>+542946584612</p>
            </div>
            <div className="user-info-item-container">
              <p className="user-info-subtitle">Email</p>
              <p>lorenzo.sanchez@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="datos-envio-container">
          <h1>HOLAAAAAAAAAAAA</h1>
        </div>
      </main>
    </>
  );
}
