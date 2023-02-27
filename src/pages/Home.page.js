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
                    <div className={classes.flipBox}>
                        <div className={classes.flipBoxInner}>
                            <img src='https://images.pexels.com/photos/4066968/pexels-photo-4066968.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt='' />
                        </div>
                    </div>
                <Card></Card>
            </div>
            {/* <p>Go to <Link to='products'>List of products</Link></p> */}
        </>
    )
}

export default HomePage