import React from "react";
import Form from "../Form/Form";
import "./modal.css"

function Modal() {
    return (
        <section className="modal-main-container">
            <Form
                title="Ingresá los siguientes datos para crear tu cuenta"
                labels={["Elegí tu nombre de usuario", "Agregá tu e-mail", "Creá tu contraseña", "Confirmá tu contraseña"]}
                labelIcons={["fa-solid fa-id-card-clip", "fa-solid fa-envelope", "fa-solid fa-lock", "fa-solid fa-lock" ]}
                inputTypes={["text", "email", "password", "password"]}
                button="Creá tu cuenta"
            />
            <Form
            title="Ingresá los siguientes datos para iniciar sesión"
            labels={["Ingresá tu email", "Ingresá tu contraseña"]}
            labelIcons={["fa-solid fa-envelope", "fa-solid fa-lock"]}
            inputTypes={["email", "password"]}
            button="Iniciá sesión" 
            />
        </section>

    )
}

export default Modal;