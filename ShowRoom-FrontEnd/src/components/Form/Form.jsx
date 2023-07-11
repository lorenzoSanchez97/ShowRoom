import React from "react";
import "./form.css"

function Form({ title, labels, labelIcons, inputTypes, button }) {

    return (
        <div className="form-cover">
            <div className="form-main-container">
                <h2>{title}</h2>
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
        </div>
    )
}

export default Form;