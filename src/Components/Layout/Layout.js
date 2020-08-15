import React, { Component } from 'react';
import Aux from '../../hod/Aux'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer';


class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({
      showSideDrawer: false
    })
  }

  sideDrawerOpenHandler = () => {
    this.setState({
      showSideDrawer: true
    })
  }

  render() {
    return(
      <Aux>
        <Toolbar openSidedrawer = {this.sideDrawerOpenHandler}/>
        <Sidedrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/>
         <main className = {classes.content}> {this.props.children}</main>
      </Aux>
    );
  }
}


export default Layout;