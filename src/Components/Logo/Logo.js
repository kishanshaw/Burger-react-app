import React from 'react';
import BurgerLogo from '../../assets/images/burger_logo.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return (
        <div className = {classes.Logo}>
            <img src = {BurgerLogo} alt = "BurgerLogo"></img>
        </div>
    );
}

export default logo;