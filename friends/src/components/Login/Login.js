import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../../actions'
import { Button, TextInput, Icon, Row, Col } from 'react-materialize'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  onSubmit = e => {
    e.preventDefault()

    console.log(this.props)
    const { username, password } = this.state
    this.props
      .login(username, password)
      .then(() => this.props.history.push('/'))
      .catch(err => console.error(err))
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

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  errorMessage: state.errorMessage
})

const mapDispatchToProps = {
  login
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
)
