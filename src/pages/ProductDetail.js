import React from 'react'
import { useParams } from 'react-router-dom'
const ProductDetail = () => {
    const params = useParams();

    return (
        <>
        <h3>ProductDetail</h3>
        <p>{params.productId}</p>
        </>
    )
}

export default ProductDetail