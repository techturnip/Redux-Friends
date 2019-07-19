import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row } from 'react-materialize'
import FriendsList from './FriendsList'

class Friends extends Component {
  render() {
    return (
      <div className="friends">
        <div className="friends-title">
          <h3>Friends List:</h3>
          <Link to="/add">Add Friend</Link>
        </div>
        <Row>
          <FriendsList />
        </Row>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.friendsReducer.friends
})

export default withRouter(
  connect(
    null,
    null
  )(Friends)
)
