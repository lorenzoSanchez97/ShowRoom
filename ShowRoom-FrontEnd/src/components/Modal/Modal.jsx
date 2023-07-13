import React from "react";
import Form from "../Form/Form";
import "./modal.css"

function Modal({ userOption, setModalStatus }) {

    let [userOperation, setUserOperation] = React.useState(userOption)

    const closeModal = () => {
        setModalStatus("");
    }

    return (
        <section className="modal-main-container" onClick={closeModal}>

            {userOperation === "register" &&
                <>
                    <Form
                        closeButton={true}
                        title="Ingresá los siguientes datos para crear tu cuenta"
                        labels={["Elegí tu nombre de usuario", "Ingresá tu e-mail", "Creá tu contraseña", "Confirmá tu contraseña"]}
                        labelIcons={["fa-solid fa-id-card-clip", "fa-solid fa-envelope", "fa-solid fa-lock", "fa-solid fa-lock"]}
                        inputTypes={["text", "email", "password", "password"]}
                        button="Crear tu cuenta"
                        setModalStatus={setModalStatus}
                    />
                </>
            }
            {userOperation === "login" &&
                <>
                    <Form
                        closeButton={true}
                        title="Ingresá los siguientes datos para iniciar sesión"
                        labels={["Ingresá tu email", "Ingresá tu contraseña"]}
                        labelIcons={["fa-solid fa-envelope", "fa-solid fa-lock"]}
                        inputTypes={["email", "password"]}
                        button="Iniciar sesión"
                        setModalStatus={setModalStatus}
                    />
                </>
            }
        </section>

    )
}

export default Modal;