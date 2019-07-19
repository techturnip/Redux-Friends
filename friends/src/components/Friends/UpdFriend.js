import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { TextInput, Button, Icon } from 'react-materialize'
import { updateFriend } from '../../actions'
import { connect } from 'react-redux'

class UpdFriend extends Component {
  constructor(props) {
    super(props)

    this.state = {
      friend: {},
      id: '',
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id)
    const friend = this.props.friends.find(friend => friend.id === id)

    if (!friend) {
      this.props.history.push('/')
    } else {
      this.setState({
        id: friend.id,
        name: friend.name,
        age: friend.age,
        email: friend.email
      })
    }
  }

  onSubmit = e => {
    e.preventDefault()

    const { id, name, age, email } = this.state

    const friend = {
      id,
      name,
      age,
      email
    }

    this.props
      .updateFriend(friend)
      .then(() => this.props.history.push('/'))
      .catch(err => console.error(err))
  }

  onChange = e => {
    e.preventDefault()

    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { name, age, email } = this.state
    return (
      <div className="add-friend">
        <h3>Update Friend:</h3>
        <div>
          <form onSubmit={this.onSubmit}>
            <TextInput
              type="text"
              name="name"
              label="Name"
              value={name}
              onChange={this.onChange}
            />
            <TextInput
              type="number"
              name="age"
              label="Age"
              value={`${age}`}
              onChange={this.onChange}
            />
            <TextInput
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={this.onChange}
            />
            <Button type="submit" waves="light" className="green lighten-1">
              Submit <Icon right>send</Icon>
            </Button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  friends: state.friendsReducer.friends
})

const mapDispatchToProps = {
  updateFriend
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UpdFriend)
)
