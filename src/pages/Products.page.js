import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import classes from './Products.module.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://63f7c3f2833c7c9c608aeae0.mockapi.io/items');
        setProducts(response.data);
      } catch (err) {
        console.log('status:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={classes.container}>
      <h3>Products List</h3>
      <ul className={classes.list}>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

