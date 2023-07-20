import React from "react";
import "./form.css"
import { modalContext } from "../../contexts/modalContext";
import { useFormik } from 'formik';
import { loginFormSchema, registerFormSchema, dataEnvioFormSchema } from "../../schemas/form";

function Form({ closeButton, title, labels, labelIcons, inputNames, inputTypes, button }) {

    const initialValues = inputNames.reduce((accumulator, inputName) => {
        accumulator[inputName] = "";
        return accumulator;
    }, {})

    let validationSchema = button === "Crear tu cuenta" ? registerFormSchema : button === "Iniciar sesión" ? loginFormSchema : dataEnvioFormSchema

    console.log(initialValues);

    const formik = useFormik({
        initialValues: {
            ...initialValues
        },
        validationSchema: validationSchema,
    });

    console.log(formik);

    let modal = React.useContext(modalContext)

    const closeModal = () => {
        modal.setModal("")
    }

    const stopPropagation = e => {
        e.stopPropagation();
    }

    return (
        <div className="form-main-container" onClick={stopPropagation}>
            {closeButton ? <button id="form-close-button" onClick={closeModal}><i className="fa-solid fa-circle-xmark"></i></button> : null}
            <div className="form-title-section">
                <h2>{title}</h2>
            </div>
            <form action="" onSubmit={formik.handleSubmit}>
                {labels.map((label, index) => (
                    <React.Fragment key={index}>
                        <label htmlFor={inputNames[index]}> <i className={labelIcons[index]}></i> {label}</label>
                        <input type={inputTypes[index]} id={inputNames[index]} {...formik.getFieldProps(inputNames[index])} className={formik.errors[inputNames[index]] ? "input-error" : ""} />
                        {formik.errors[inputNames[index]] ? <p>{formik.errors[inputNames[index]]}</p> : null}
                    </React.Fragment>
                ))}
                <button type="submit" className="form-button">{button}</button>
            </form>
        </div>
    )
}

export default Form;