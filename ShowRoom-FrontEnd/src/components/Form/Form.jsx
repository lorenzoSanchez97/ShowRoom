import React from "react";
import "./form.css"

function Form({ setModalStatus, closeButton, title, labels, labelIcons, inputTypes, button }) {

    const closeModal = () => {
        setModalStatus("")
    }

    const stopPropagation = e => {
        e.stopPropagation();
    }

    return (
            <div className="form-main-container" onClick={stopPropagation}>
                <div className="form-title-section">
                <h2>{title}</h2>
                {closeButton ? <button id="form-close-button" onClick={closeModal}><i className="fa-solid fa-circle-xmark"></i></button> : null}
                </div>
                <form action="">
                    {labels.map((label, index) => (
                        <React.Fragment key={index}>
                            <label htmlFor=""> <i className={labelIcons[index]}></i> {label}</label>
                            <input type={inputTypes[index]} />
                        </React.Fragment>
                    ))}
                    <button type="submit" className="form-button">{button}</button>
                </form>
            </div>
    )
}

export default Form;