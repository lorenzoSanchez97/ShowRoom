import React from 'react'
import "./cartProduct.css"

export default function CartProduct() {
    return (
        <article className='cart-product-container'>
            <figure className='cart-product-image-container'>
                <img src="/images/mascarilla.png" alt="" />
            </figure>
            <div className='cart-product-data-container'>
            <h1 className='cart-product-title'>Mascarilla de Coco</h1>
            <p className='cart-product-color'>Color: Marrón</p>
            <button className='cart-product-delete-button'>Eliminar</button>
            </div>
            <div className='product-cart-quantity-selector'>
                <form action="">
                    <input type="number" defaultValue={1} />
                </form>
            </div>
        </article>
    )
}
