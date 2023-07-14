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
          <h2 className="user-data-title">Información personal</h2>
          </div>
        </div>
        <div className="datos-envio-container">
          <h1>HOLAAAAAAAAAAAA</h1>
        </div>
      </main>
    </>
  );
}
