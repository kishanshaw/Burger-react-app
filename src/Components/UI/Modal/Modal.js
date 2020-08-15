
import React from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hod/Aux'
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <Backdrop show = {props.show} modalClosed = {props.modalClosed} />
        <div
            style ={
                {
                    transform: props.show ? 'translateY(0)' : 'translate(-100vh)',
                    opacity: props.show ? '1' : '0'
                }
            }   
            className = {classes.Modal}>
            {props.children}
        </div>
    </Aux>
);
export default modal;