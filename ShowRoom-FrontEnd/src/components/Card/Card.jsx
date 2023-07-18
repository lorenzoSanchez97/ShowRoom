import React from 'react'
import "./card.css"

export default function Card({ title, data, width }) {

    const containerStyle = width ? { width: width } : {};

    return (
        <div className='card-main-container' style={containerStyle}>
            <p className='card-title'>{title}</p>
            {typeof data !== "string" && typeof data !== "number" ? data : <p className="card-data">{data}</p>}
        </div >

    )
}