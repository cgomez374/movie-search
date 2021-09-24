import React from 'react';
import Styles from "./Showcase.module.css";
import Navigation from '../Navigation/Navigation';


const Showcase = () => {
    return (
        <header className={Styles.showcase}>
            <Navigation />
            <h1>welcome to the movies</h1>
        </header>
    )
}

export default Showcase
