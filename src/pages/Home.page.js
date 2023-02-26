import React from 'react';
// import { Link } from 'react-router-dom';
import Card from '../components/Card.component';
import classes from './Home.module.css';

const HomePage = () => {
    return (
        <>
            <h1>SoleStride</h1>
            <p>Step Forward With Confidence</p>
            <div className={classes.cardsContainer}>
                <Card></Card>
                <Card></Card>
            </div>
            {/* <p>Go to <Link to='products'>List of products</Link></p> */}
        </>
    )
}

export default HomePage