import React, { Component } from 'react'
import { Footer as MFooter } from 'react-materialize'

class Footer extends Component {
  render() {
    const date = new Date()

    return (
      <MFooter
        copyrights={`© ${date.getFullYear()} Tyler Turnipseed`}
        moreLinks={<a />}
        links={
          <ul className="footer-links">
            <li>
              <a className="footer-link" href="#">
                Login
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Logout
              </a>
            </li>
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

export default Footer
