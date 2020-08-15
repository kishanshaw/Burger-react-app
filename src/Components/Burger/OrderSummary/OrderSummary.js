import React from 'react';
import Aux from '../../../hod/Aux'
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientSummaryList = Object.keys(props.ingredients)
    .map( igKey => {
            return (
                <li key = {igKey}>
                    <span style = {{textTransform : 'capitalize'}}> {igKey}:{props.ingredients[igKey]}</span>
                </li>
            );
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious order with following ingredients </p>
            <ul>
                {ingredientSummaryList}
            </ul>
            <p><strong>Total price: {props.totalPrice.toFixed(2)}</strong></p>
            <h3>Continue to checkout?</h3> 
             <Button btnType = "Danger" clicked = {props.purchaseCancelled}>Cancel</Button>
             <Button btnType = "Success" clicked = {props.purchaseContinued}>Continue</Button>
        </Aux>
    );
}

export default orderSummary;