import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidedrawer.module.css';
import Logo from '../../Logo/Logo'
import Aux from '../../../hod/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidedrawer = (props) => {

    let attachedClasses = [classes.Sidedrawer, classes.Close];
    
    if(props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }

    return(
        <Aux>
            <Backdrop show = {props.open} clicked = {props.closed}/>
            <div className = {attachedClasses.join(' ')}>
                <div className = {classes.Logo}>
                    <Logo />
                </div>    
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>   
    );
}

export default sidedrawer;