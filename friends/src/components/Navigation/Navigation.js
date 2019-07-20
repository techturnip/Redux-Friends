import React, { Component } from 'react'
import { Navbar, NavItem } from 'react-materialize'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { logout } from '../../actions'

class Navigation extends Component {
  handleClick = e => {
    e.preventDefault()

    this.props.logout()
    this.props.history.push('/login')
  }

  render() {
    const { isLoggedIn } = this.props

    return (
      <Navbar
        className="main-nav green lighten-1"
        brand={<Link to="/">Friends App</Link>}
        fixed
        alignLinks="right"
      >
        {isLoggedIn && <NavItem onClick={this.handleClick}>Logout</NavItem>}
      </Navbar>
    )
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.friendsReducer.isLoggedIn
})

const mapDispatchToProps = {
  logout
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navigation)
)
