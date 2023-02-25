import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import items from '../mock/Data';

import classes from './Products.module.css'

// const PRODUCTS = [{ id: 'p1', title: 'Product1' }, { id: 'p2', title: 'Product2' }, { id: 'p3', title: 'Product3' }];

const Products = () => {
  const [data, setData] = useState(items);

  useEffect(() => {
    const response = axios.post(
      "https://63f7c3f2833c7c9c608aeae0.mockapi.io/items",
      data
    );
    console.log(response);
  }, [data])

  return (
    <div className={classes.container}>
      <h3>Our Collection</h3>
      <ul className={classes.list}>
        {data.map(product => <Link to={product.id} key={product.id}>{product.title}</Link>)}
      </ul>
    </div>
  )
}

export default Products