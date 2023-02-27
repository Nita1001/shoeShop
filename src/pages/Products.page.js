import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import classes from './Products.module.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState();
  const params = useParams();

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

  useEffect(() => {
    setSelected(products.find((item) => item.id === params.productId));
  }, [products, params.productId, selected])

  return (
    <div className={classes.container}>
      <h3>Products List</h3>
      <div>
        <ul className={classes.list}>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.product}</Link>
            </li>
          ))}
        </ul>
        {products.map((product) => (
          <img href={`/products/${product.id}`} src={product.image} key={product.id} alt='' />
        ))}
        <h3>ok</h3>
      </div>
      <h6>don't stress, do your best</h6>
    </div>
  );
};

export default Products;

