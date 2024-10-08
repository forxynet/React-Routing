import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigations.module.css'

export default function MainNavigations() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Product</Link></li>
                </ul>
            </nav>
        </header>
    )
}
