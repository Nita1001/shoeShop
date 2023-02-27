import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import classes from './ProductDetail.module.css'

const ProductDetail = () => {
    const [items, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const [selected, setSelected] = useState();

    const fetchItem = async () => {
        try {
            const response = await axios.get(`https://63f7c3f2833c7c9c608aeae0.mockapi.io/items`);
            if (response) {
                setItem(response.data);
                setIsLoading(false);
            }
        } catch (err) {
            console.log('status:', err);
        }
    };

    useEffect(() => {
        fetchItem();
    }, []);

    useEffect(() => {
        setSelected(items.find((item) => item.id === params.productId));
    }, [items, params.productId, selected])

    return (
        <div className={classes.container}>
            <h3>Take bold steps</h3>
            {isLoading ? (
                <div className={classes.loading}></div>
            ) : selected ? (
                <>
                    <h1>{selected.name}</h1>
                    <div className={classes.img}>
                        <img src={selected.image} alt={selected.product} />
                    </div>
                    <h3>Price: {selected.price}$</h3>
                </>
            ) : (
                <div>Item not found</div>
            )}
            <p>
                <Link className={classes.link} to=".." relative="path">
                    Back
                </Link>
            </p>
        </div>
    );
};

export default ProductDetail;