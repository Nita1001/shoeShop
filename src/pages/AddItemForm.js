import React, { useState } from 'react';
import axios from 'axios';
import uniqid from 'uniqid';
import classes from './EditItemForm.module.css'

const AddItemForm = () => {

    const [data, setData] = useState([]);
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newItem = {
            id: uniqid(),
            product,
            price,
            image,
        };
        try {
            const response = await axios.post('https://63f7c3f2833c7c9c608aeae0.mockapi.io/items', newItem);
            setData((prevData) => [...prevData, response.data]);
            setProduct('');
            setPrice('');
            setImage('');
        } catch (err) {
            console.log('status:', err);
        }
        console.log(data);
    };

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="product">Product:</label>
                    <input type="text" id="product" value={product} onChange={(e) => setProduct(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="price">Price:</label>
                    <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="image">Image (URL):</label>
                    <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <button type="submit">Add New Item</button>
            </form>
        </div>
    )
}

export default AddItemForm