import { useState, useContext, useEffect } from "react"
import "./form.css"
import { modalContext } from "../../contexts/modalContext";
import { useFormik } from 'formik';
import { loginFormSchema, registerFormSchema, dataEnvioFormSchema } from "../../schemas/form";
import registerServices from "../../services/register"

function Form({ closeModal, userOperation, title, labels, labelIcons, inputNames, inputTypes, button }) {

    let [provinces, setProvinces] = useState([])

    const initialValues = inputNames.reduce((accumulator, inputName) => {
        accumulator[inputName] = "";
        return accumulator;
    }, {})

    let validationSchema = userOperation === "register" ? registerFormSchema : userOperation === "login" ? loginFormSchema : dataEnvioFormSchema

    const formik = useFormik({
        initialValues: {
            ...initialValues
        },
        validationSchema,
        onSubmit: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
            formik.resetForm();
        }
    });

    let modal = useContext(modalContext)

    const stopPropagation = e => {
        e.stopPropagation();
    }

    const getProvincesFromApi = async () => {
        try {
            let provincesFromApi = await registerServices.getProvinces();
            setProvinces(provincesFromApi)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (userOperation === "data-envio") {
            getProvincesFromApi();
        }
    }, [])

    return (
        <div className="form-main-container" onClick={stopPropagation}>
            <button id="form-close-button" onClick={closeModal}><i className="fa-regular fa-circle-xmark"></i></button>
            <div className="form-title-section">
                <h2>{title}</h2>
            </div>
            <form action="" onSubmit={formik.handleSubmit}>
                {userOperation === "data-envio" &&
                    <div className="province-selector-container">
                        <label>Provincia</label> <br></br>
                        <select name="province" id="province-selector">
                            <option value="" disabled>Elige</option>
                            {provinces.map((element, index) => (
                                <option key={index} value={element.id}>{element.nombre}</option>
                            ))}
                        </select>
                    </div>
                }
                {labels.map((label, index) => (
                    <div key={index} className={formik.touched[inputNames[index]] && formik.errors[inputNames[index]] ? "form-input-container input-error" : "form-input-container"}>
                        <label htmlFor={inputNames[index]}> <i className={labelIcons[index]}></i> {label}</label>
                        <input type={inputTypes[index]} name={inputNames[index]} {...formik.getFieldProps(inputNames[index])} className="form-input" />
                        {formik.touched[inputNames[index]] && formik.errors[inputNames[index]] ? <p className="form-error-msg"> <i className="fa-solid fa-triangle-exclamation"></i> {formik.errors[inputNames[index]]}</p> : null}
                    </div>
                ))}
                <button disabled={formik.isSubmitting} type="submit" className="form-button">{button}</button>
            </form>
        </div>
    )
}

export default Form;