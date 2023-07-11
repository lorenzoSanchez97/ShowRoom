import React from "react";
import Form from "../Form/Form";
import "./modal.css"

function Modal() {

    let [ register, setRegister ] = React.useState(false);
    let [ login, setLogin ] = React.useState(false);

    const handleRegisterButton = () => {
        setRegister(true)
    }

    const handleLoginButton = () => {
        setLogin(true)
    }

    return (
        <section className="modal-main-container">
            { !(register) && !(login) ?
            <div className="modal-cover">
                <div className="register-container">
                    <h1>¿No tienes una cuenta? Crea una!</h1>
                    <button onClick={handleRegisterButton}>REGISTRATE</button>
                </div>
                <div className="login-container">
                    <h1>¿Ya tienes una cuenta? Iniciá sesión</h1>
                    <button onClick={handleLoginButton}>Inicia sesión</button>
                </div>
            </div>
            : null
            }
            { register && 
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
            { login &&
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