import React from 'react'
import { useParams, Link } from 'react-router-dom'
const ProductDetail = () => {
    const params = useParams();

    return (
        <>
        <h3>Take bold steps</h3>
        <p>{params.productId}</p>
        <p><Link to=".." relative='path'>Back</Link></p>
        </>
    )
}

export default ProductDetail