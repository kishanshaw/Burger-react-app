import React, { Component } from 'react';
import classes from './BurgerControl.module.css';

class BurgerControl extends Component {

  render() {
    return (
      <div className = {classes.BuildControl}> 
        <div className = {classes.Label}>{this.props.label}</div>
        <button className = {classes.Less} onClick = {this.props.removed} disabled = {this.props.isButtonDisabled}>Less</button>
        <button className = {classes.More} onClick = {this.props.added}>More</button>
      </div>
    );
  }
}

export default BurgerControl;