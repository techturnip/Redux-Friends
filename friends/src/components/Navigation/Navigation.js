import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'

class Navigation extends Component {
  render() {
    return (
      <Navbar
        className="main-nav green lighten-1"
        brand={<span>Friends App</span>}
        fixed
        alignLinks="right"
      >
        <NavItem href="#">Login</NavItem>
        <NavItem href="#">Logout</NavItem>
      </Navbar>
    )
  }
}

export default Navigation
