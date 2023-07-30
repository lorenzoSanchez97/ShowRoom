import React from 'react'
import "./cartProduct.css"

export default function CartProduct({ history }) {
    return (
        <section className='cart-product-main-container'>
            <figure className='cart-product-image-container'>
                <img src="/images/mascarilla.png" alt="" />
            </figure>
            <div className='product-cart-info-main-container'>
                <div className='cart-product-info'>
                    <div className='cart-product-data-container'>
                        <h1 className='cart-product-title'>Mascarilla de Coco</h1>
                        <p className='cart-product-color'>Color: Marrón</p>
                        {history ? <p className='fecha-de-compra'>Fecha de compra: <br></br>
                        30/7/2023</p> : <> <button className='cart-product-delete-button'>Eliminar</button>
                        <button className='cart-product-delete-icon'><i className="fa-solid fa-trash"></i></button></>}
                    </div>
                    {history ? <p className='cantidad-comprada'>5 u.</p> :
                    <div className='product-cart-quantity-selector'>
                        <form action="">
                            <i className="fa-solid fa-plus cart-product-add"></i>
                            <input type="number" />
                            <p className='cart-product-stock'>Stock: 25 u.</p>
                            <i className="fa-solid fa-minus cart-product-substract"></i>
                        </form>
                    </div>
                    }
                    <p className='cart-product-total'>$2215</p>
                </div>
                <div className='cart-product-envio-data'>
                    <h1>Costo de envío: </h1>
                    <p>$1000</p>
                </div>
            </div>
        </section>
    )
}
