import React from 'react'
import Product from '../Product/Product'
import "./productsList.css"

export default function ProductsSection() {
  return (
    <section className='product-list-section'>
      <Product />
      <Product />
    </section>
  )
}
