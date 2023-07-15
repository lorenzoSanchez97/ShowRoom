import React from 'react'
import "./infoBox.css"

export default function InfoBox({ title, subtitles, data }) {
    return (

        <div className="info-box-main-container">
            <div className="info-title-and-button">
                <h2 className="data-title">{title}</h2>
                <button><i className="fa-solid fa-pen-to-square"></i></button>
            </div>
            {subtitles.map((element, index) => {
                return (<React.Fragment key={index}>
                    <div className="info-item-container">
                        <p className="info-subtitle">{element}</p>
                        <p>{data[index]}</p>
                    </div>
                </React.Fragment>)
            })}
        </div >
    )
}
