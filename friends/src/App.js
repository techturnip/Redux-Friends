import React, { Component } from 'react'
// Materialize CSS
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

// Components
import Navigation from './components/Navigation/Navigation'
import FriendsList from './components/Friends/FriendsList'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'
import { Row, Col } from 'react-materialize'

class App extends Component {
  componentDidMount() {
    // Auto initialize Materialize CSS
    M.AutoInit()
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navigation />
        </header>

        <section className="container">
          <FriendsList />

          <Login />
        </section>

        <Footer />
      </div>
    )
  }
}

export default App
