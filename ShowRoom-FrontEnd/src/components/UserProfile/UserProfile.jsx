import React from "react";
import "./userProfile.css";
import InfoBox from "../InfoBox/InfoBox";
import Tabla from "../Tabla/Tabla";
import Card from "../Card/Card";

export default function UserProfile() {

  let [infoEnvio, setInfoEnvio] = React.useState(null)

  // provincia: "Córdoba",
  //   ciudad: "Rio Cuarto",
  //   códigoPostal: "6587",
  //   dirección: "Tosco 123"

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
          {infoEnvio ?
            <InfoBox
              title="Información de envío"
              subtitles={["Provincia", "Ciudad", "Código postal", "Dirección"]}
              data={["Córdoba", "Rio Cuarto", "6587", "Tosco 123"]} />
            :
            <div className="no-data-envio">
              <Card
                title={"Aún no ha cargado su información de envío"}
                data={<button><i class="fa-solid fa-plus"></i></button>}
                width={"100%"}
              />
            </div>
          }
        </section>
        <section className="historial-compras">
          <div className="historial-header">
            <h1>Historial de compras</h1>
            <div className="historial-header-cards-container">
              <Card
                title={"Total de productos comprados:"}
                data={"3"}
              />
              <Card
                title={"Fecha de última compra:"}
                data={"15/7/2023"}
              />
              <Card
                title={"Último producto comprado:"}
                data={"Mascarilla de coco"}
              />
            </div>
          </div>
          <Tabla
            historial={true}
          />
        </section>
      </main>
    </>
  );
}
