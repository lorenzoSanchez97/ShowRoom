import React from "react";
import Form from "../Form/Form";
import "./modal.css"

function Modal() {

    let [register, setRegister] = React.useState(false);
    let [login, setLogin] = React.useState(false);

    const handleRegisterButton = () => {
        setRegister(true)
    }

    const handleLoginButton = () => {
        setLogin(true)
    }

    return (
        <section className="modal-main-container">
            <div className="modal-cover">
                <div className={`register-container ${login || register ? "ocultar" : null}`}>
                    <h2>¿No tienes una cuenta? Crea una!</h2>
                    <button onClick={handleRegisterButton}>Registrate</button>
                </div>
                <div className={`login-container ${login || register ? "ocultar" : null}`}>
                    <h2>¿Ya tienes una cuenta? <br></br>
                        Iniciá sesión</h2>
                    <button onClick={handleLoginButton}>Iniciá sesión</button>
                </div>
            </div>
            {register &&
                <>
                    <Form
                        title="Ingresá los siguientes datos para crear tu cuenta"
                        labels={["Elegí tu nombre de usuario", "Ingresá tu e-mail", "Creá tu contraseña", "Confirmá tu contraseña"]}
                        labelIcons={["fa-solid fa-id-card-clip", "fa-solid fa-envelope", "fa-solid fa-lock", "fa-solid fa-lock"]}
                        inputTypes={["text", "email", "password", "password"]}
                        button="Crear tu cuenta"
                    />
                </>
            }
            {login &&
                <>
                    <Form
                        title="Ingresá los siguientes datos para iniciar sesión"
                        labels={["Ingresá tu email", "Ingresá tu contraseña"]}
                        labelIcons={["fa-solid fa-envelope", "fa-solid fa-lock"]}
                        inputTypes={["email", "password"]}
                        button="Iniciar sesión"
                    />
                </>
            }
        </section>

    )
}

export default Modal;