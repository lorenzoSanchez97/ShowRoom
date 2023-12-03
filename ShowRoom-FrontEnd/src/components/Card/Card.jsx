import React from 'react'
import "./card.css"


export default function Card({ title, data, icon }) {


    return (
        <div className='card-main-container'>
            <div className='card-header'>
            <span className='card-title'>{title}</span>
            {icon && icon}
            </div>
            <p className="card-data">{data}</p>
        </div >

    )
}