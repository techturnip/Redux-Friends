import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { TextInput, Button, Icon } from 'react-materialize'
import { addFriend } from '../../actions'
import { connect } from 'react-redux'

class AddFriend extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      age: '',
      email: ''
    }
  }

  onSubmit = e => {
    e.preventDefault()

    console.log(this.props)
    const { name, age, email } = this.state

    const friend = {
      name,
      age,
      email
    }

    this.props
      .addFriend(friend)
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
        <h3>Add a Friend:</h3>
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
              value={age}
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

const mapDispatchToProps = {
  addFriend
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(AddFriend)
)
