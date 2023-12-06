import "./product.css"

function Product({ data }) {
    
    return (
        <>
            <article className="producto">
                <img src={data.images[0].url} alt="" />
                <div className="product-card-data-container">
                    <p className="nombre-producto">{data.name}</p>
                    <i className="fa-solid fa-truck product-card-envio-icon"></i>
                    <p className="precio-producto">{`$ ${data.price}`}</p>
                    <p className="descuento-producto">{data.discount !== 0 ? `> ${data.discount}% OFF` : null}</p>
                    <div className="product-card-buttons-container">
                        <button className="product-card-cart-button"> <i className="fa-solid fa-cart-plus product-card-cart-icon"></i></button>
                        <button className="product-card-fav-button"><i className="fa-regular fa-star product-card-fav-icon"></i></button>
                    </div>
                </div>
            </article>
        </>
    )
}

export default Product;