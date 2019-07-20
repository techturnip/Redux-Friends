import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getFriends, deleteFriend } from '../../actions'
import { Card, Col, Preloader, Button } from 'react-materialize'

class FriendsList extends Component {
  componentDidMount() {
    this.props.getFriends()
  }

  render() {
    const { friends, isLoading } = this.props

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
            <Card className="friend-card hoverable" key={id} title={name}>
              <div className="no-flex">
                <p>Age: {age}</p>
                <p>Email: {email}</p>
              </div>
              <div className="no-flex">
                <Button
                  className="red"
                  icon="delete"
                  onClick={() => this.props.deleteFriend(id)}
                />
                <Button
                  onClick={() => {
                    this.props.history.push(`/friends/${id}`)
                  }}
                  className="green lighten-1"
                  icon="edit"
                />
              </div>
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
  getFriends,
  deleteFriend
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FriendsList)
)
