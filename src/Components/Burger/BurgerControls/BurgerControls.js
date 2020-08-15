import React, { Component } from 'react';
import classes from './BurgerControls.module.css';
import BurgerControl from './BurgerControl/BurgerControl';


class BurgerControls extends Component {
  
  render() {
    let controls = [
      {label : 'Salad', type : 'salad'},
      {label : 'Bacon', type : 'bacon'},
      {label : 'Cheese', type : 'cheese'},
      {label : 'Meat', type : 'meat'},
    ];
    return (
      <div className = {classes.BurgerControls}>
        <p>Current Price: <strong>{this.props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
          <BurgerControl 
          added = {() => this.props.ingredientsAdded(ctrl.type)}  
          removed = { ()=> this.props.ingredientsRemoved(ctrl.type)}
          key = {ctrl.label} 
          label = {ctrl.label}
          isButtonDisabled = {this.props.ingredientsDisabledInfo[ctrl.type]}
          purchasable = {this.props.purchasable}
          />
        ))}
        <button 
        className = {classes}
        onClick = {this.props.clicked}
        disabled = {!this.props.purchasable}><strong>Order</strong></button>
      </div>
    );
  }
}

export default BurgerControls;