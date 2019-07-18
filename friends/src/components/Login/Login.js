import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button, TextInput, Icon, Row, Col } from 'react-materialize'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  onSubmit = e => {
    e.preventDefault()

    console.log('Login Form Submitted')

    this.setState({ username: '', password: '' })
  }

  onChange = e => {
    e.preventDefault()

    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { username, password } = this.state

    return (
      <Row className="login card">
        <Col offset="s3" s={6}>
          <h4 className="login-title">Login to see your friends</h4>

          <form onSubmit={this.onSubmit}>
            <TextInput
              type="text"
              name="username"
              label="Username"
              value={username}
              onChange={this.onChange}
            />
            <TextInput
              type="password"
              name="password"
              label="Password"
              value={password}
              onChange={this.onChange}
            />
            <Button type="submit" waves="light" className="teal lighten-1">
              Submit <Icon right>send</Icon>
            </Button>
          </form>
        </Col>
      </Row>
    )
  }
}

export default withRouter(
  connect(
    null,
    null
  )(Login)
)
