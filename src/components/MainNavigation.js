import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'
const MainNavigation = () => {

    return (
        <header className={classes.header} >
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to='/'
                            className={({ isActive }) => (
                                isActive ?
                                    classes.active : undefined
                            )} end>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/products'
                            className={({ isActive }) => (
                                isActive ?
                                    classes.active : undefined
                            )}>Collection</NavLink>
                    </li>
                    <NavLink
                        to="/AddItemForm"
                        className={({ isActive }) => (isActive ? classes.active : undefined)}>
                        Edit Products
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation