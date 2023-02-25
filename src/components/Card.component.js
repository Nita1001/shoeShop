import React from 'react'
import classes from './Card.module.css'


const Card = ({classN = classes.container}) => {
    return (
        <div className={classN}>            
            Card
        </div>
    )
}

export default Card