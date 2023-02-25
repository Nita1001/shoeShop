import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card.component';
import Home from './Home.module.css';

const HomePage = () => {
    return (
        <>
            <h1>SoleStride</h1>
            <p>Step forward with confidence.</p>
                <Card classN=''></Card>
                <Card></Card>
            {/* <p>Go to <Link to='products'>List of products</Link></p> */}
        </>
    )
}

export default HomePage