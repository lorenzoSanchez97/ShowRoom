import React from "react";
import Form from "../Form/Form";
import "./modal.css"
import { modalContext } from "../../contexts/modalContext";

function Modal({ userOption }) {

    let [userOperation, setUserOperation] = React.useState(userOption)

    let modal = React.useContext(modalContext);

    const closeModal = () => {
        modal.setModal("");
    }

    return (
        <section className="modal-main-container" onClick={closeModal}>

            {userOperation === "register" &&
                <>
                    <Form
                        closeButton={true}
                        title="Ingresá los siguientes datos para crear tu cuenta"
                        labels={["Nombre completo", "E-mail", "Creá tu contraseña", "Confirmá tu contraseña"]}
                        labelIcons={["fa-solid fa-id-card-clip", "fa-solid fa-envelope", "fa-solid fa-lock", "fa-solid fa-lock"]}
                        inputNames={["name", "email", "password", "confirmPassword"]}
                        inputTypes={["text", "email", "password", "password"]}
                        button="Crear tu cuenta"
                    />
                </>
            }
            {userOperation === "login" &&
                <>
                    <Form
                        closeButton={true}
                        title="Ingresá los siguientes datos para iniciar sesión"
                        labels={["E-mail", "Contraseña"]}
                        labelIcons={["fa-solid fa-envelope", "fa-solid fa-lock"]}
                        inputNames={["email", "password"]}
                        inputTypes={["email", "password"]}
                        button="Iniciar sesión"
                    />
                </>
            }
            {userOperation === "data-envio" &&
                <>
                    <Form
                        closeButton={true}
                        title="Ingresá tu información de envío"
                        labels={["Provincia", "Ciudad", "Código postal", "Dirección"]}
                        labelIcons={["fa-solid fa-map-location-dot", "fa-solid fa-city", "fa-solid fa-envelopes-bulk", "fa-solid fa-location-dot"]}
                        inputNames={["region", "city", "zip", "address"]}
                        inputTypes={["text", "text", "text", "text"]}
                        button="Cargar datos"
                    />
                </>
            }
        </section>

    )
}

export default Modal;