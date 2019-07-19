import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Row } from 'react-materialize'
import FriendsList from './FriendsList'

class Friends extends Component {
  render() {
    return (
      <div className="friends">
        <Row>
          <h3>Friends List:</h3>
        </Row>
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
