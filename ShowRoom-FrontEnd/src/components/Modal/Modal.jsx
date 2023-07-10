import React from "react";
import "./modal.css"

function Modal() {

    return (
        <>
            <section className="modal-main-container">
                <div className="register">
                    <h2>Ingresá los siguientes datos para crear tu cuenta</h2>
                    <form action="">
                        <label htmlFor=""> <i class="fa-solid fa-id-card-clip"></i> Elegí tu nombre de usuario</label>
                        <input type="text" />
                        <label htmlFor=""> <i class="fa-solid fa-envelope"></i> Agregá tu e-mail</label>
                        <input type="email" name="" id="" />
                        <label htmlFor=""> <i class="fa-solid fa-lock"></i> Creá tu contraseña</label>
                        <input type="password" />
                        <label htmlFor=""> <i class="fa-solid fa-lock"></i> Confirmá tu contraseña</label>
                        <input type="password" />
                        <button type="submit" id="create-account-button">Creá tu cuenta</button>
                    </form>
                </div>
                <div className="login">
                    <h2>INICIA SESIÓN</h2>
                </div>
            </section>
        </>
    )
}

export default Modal;