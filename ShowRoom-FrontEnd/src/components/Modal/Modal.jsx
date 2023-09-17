import { useState, useContext } from "react"
import Form from "../Form/Form";
import "./modal.css"
import { modalContext } from "../../contexts/modalContext";

function Modal() {

    let modal = useContext(modalContext);

    let [userOperation, setUserOperation] = useState(modal.userOperation)
    let [closingAnimation, setClosingAnimation] = useState(false)

    const closeModal = () => {
        setClosingAnimation(true)
        setTimeout(() => {
            modal.setModal("");
        }, 300);
    }

    return (
        <section className={closingAnimation ? "modal-main-container hidde-modal" : "modal-main-container"} onClick={closeModal}>

            {userOperation === "register" &&
                <>
                    <Form
                        closeModal={closeModal}
                        userOperation={userOperation}
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
                        closeModal={closeModal}
                        userOperation={userOperation}
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
                        closeModal={closeModal}
                        userOperation={userOperation}
                        title="Ingresá tu información de envío"
                        labels={["Ciudad", "Código postal", "Dirección"]}
                        labelIcons={["fa-solid fa-city", "fa-solid fa-envelopes-bulk", "fa-solid fa-location-dot"]}
                        inputNames={["city", "zip", "address"]}
                        inputTypes={["text", "text", "text"]}
                        button="Cargar datos"
                    />
                </>
            }
        </section>

    )
}

export default Modal;