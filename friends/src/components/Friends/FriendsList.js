import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getFriends } from '../../actions'
import { Card, Col, Preloader } from 'react-materialize'

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    console.log(this.props)
    const { friends, isLoading } = this.props

    console.log(typeof isLoading)

    if (isLoading) {
      return (
        <Col>
          <Preloader size="big" />
        </Col>
      )
    }

    return (
      <ul>
        {friends.map(friend => {
          const { name, age, email, id } = friend
          return (
            <Card className="friend-card" key={id} title={name}>
              <p>Age: {age}</p>
              <p>Email: {email}</p>
            </Card>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends,
  isLoading: state.friendsReducer.isLoading
})

const mapDispatchToProps = {
  getFriends
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FriendsList)
)
