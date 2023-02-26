import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

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
                console.log(response.data)
                setIsLoading(false);
            }
        } catch (err) {
            console.log('status:', err);
        }
    };

    useEffect(() => {
        fetchItem();
    }, []);

useEffect(()=>{
    setSelected ( items.find((item) => item.id === params.productId));
    console.log(selected)
}, [items, params.productId, selected])

    return (
        <>
            <h3>Take bold steps</h3>
            <p>{params.productId}</p>
            {isLoading ? (
                <div>Loading...</div>
            ) : selected ? (
                <div>
                    <img src={selected.image} alt={selected.product} />
                </div>
            ) : (
                <div>Item not found</div>
            )}
            <p>
                <Link to=".." relative="path">
                    Back
                </Link>
            </p>
        </>
    );
};

export default ProductDetail;