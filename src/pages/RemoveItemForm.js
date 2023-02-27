import React, { useState } from 'react';
import axios from 'axios';
import classes from './EditItemForm.module.css'

const RemoveItemForm = () => {

    const [data, setData] = useState([]);
    const [product, setProduct] = useState('');

    const onRemoveItem = async () => {
        try {
            const response = await axios.delete(`https://63f7c3f2833c7c9c608aeae0.mockapi.io/items/${product}`);
            if (response) setData(prevData => prevData.filter(item => item.id !== product));
        } catch (err) {
            console.log('status:', err);
        }
    };

    return (
        <div>
            <h1 class='hide'>{data}</h1>
            <form className={classes.removeItem}>
                <label htmlFor="product">Products Id:</label>
                <input type="text" id="product" value={product} onChange={(e) => setProduct(e.target.value)} />
                <button onClick={onRemoveItem}>Remove Item</button>
            </form>
        </div>
    )
}

export default RemoveItemForm