import React from "react";
import "./userProfile.css";
import InfoBox from "../InfoBox/InfoBox";
import Tabla from "../Tabla/Tabla";

export default function UserProfile() {
  return (
    <>
      <main className="user-profile-main-container">
        <section className="user-personal-info-container">
          <div className="user-image-container">
            <img src="/images/profile-image.jpeg" alt="" />
          </div>
          <InfoBox
            title="Información personal"
            subtitles={["Nombre y apellido", "Número de teléfono", "Email"]}
            data={["Lorenzo Sanchez", "+54287962189", "lorenzo.sanchez@gmail.com"]} />
          <InfoBox
            title="Información de envío"
            subtitles={["Provincia", "Ciudad", "Código postal", "Dirección"]}
            data={["Córdoba", "Rio Cuarto", "6587", "Tosco 123"]} />
        </section>
        <section className="historial-compras">
        <div className="historial-header">
        <h1>Historial de compras</h1>
        <p>Total de productos comprados:</p>
        <p className="cantidad-total-productos">5</p>
        </div>
        <Tabla 
        historial={true}
        />
        </section>
      </main>
    </>
  );
}
