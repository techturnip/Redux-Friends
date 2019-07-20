import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Icon } from 'react-materialize'
import FriendsList from './FriendsList'

class Friends extends Component {
  render() {
    return (
      <div className="friends">
        <div className="friends-title">
          <h3>Friends List:</h3>
          <Link className="btn green lighten-1" to="/add">
            <Icon left>add</Icon> Add Friend
          </Link>
        </div>
        <Row>
          <FriendsList />
        </Row>
      </div>
    )
  }
}

export default Friends
