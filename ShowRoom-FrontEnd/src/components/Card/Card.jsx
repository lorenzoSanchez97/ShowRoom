import React from 'react'
import "./card.css"


export default function Card({ title, data }) {


    return (
        <div className='card-main-container'>
            <p className='card-title'>{title}</p>
            <p className="card-data">{data}</p>
        </div >

    )
}