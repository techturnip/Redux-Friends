import React, { Component } from 'react'
import { Footer as MFooter } from 'react-materialize'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions'

class Footer extends Component {
  handleClick = e => {
    e.preventDefault()

    this.props.logout()
    this.props.history.push('/login')
  }

  render() {
    const date = new Date()
    const { isLoggedIn } = this.props

    return (
      <MFooter
        copyrights={`© ${date.getFullYear()} Tyler Turnipseed`}
        moreLinks={<span className="footer-link" />}
        links={
          <ul className="footer-links">
            {isLoggedIn && (
              <li>
                <span
                  className="footer-link"
                  onClick={this.handleClick}
                  href="#"
                >
                  Logout
                </span>
              </li>
            )}
          </ul>
        }
        className="green lighten-1"
      >
        <h5>Friends App</h5>
        <p>Created using React &amp; Redux and styled with Materialize CSS</p>
      </MFooter>
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
  )(Footer)
)
