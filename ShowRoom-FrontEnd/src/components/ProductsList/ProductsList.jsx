import { useEffect, useState } from 'react'
import Product from '../Product/Product'
import "./productsList.css"

export default function ProductsSection({ data }) {

  return (
    <section className='product-list-section'>
      {data.map((product, index) => (<Product key={index} data={product} />))}
    </section>
  )
}
