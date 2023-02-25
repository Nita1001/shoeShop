import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Products.module.css'


const PRODUCTS = [{id: 'p1', title: 'Product1'},{id: 'p2', title: 'Product2'},{id: 'p3', title: 'Product3'}];

const Products = () => {

  return (
    <div className={classes.container}>
      <h3>Products</h3>
      <ul className={classes.list}>
        {PRODUCTS.map(products => <Link to={`/products/${products.id}`} key={products.id}>{products.title}</Link>)}
      </ul>
    </div>
  )
}

export default Products