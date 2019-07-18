import React, { Component } from 'react'
// Materialize CSS
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

// Router
import { Route } from 'react-router-dom'
import PrivateRoute from './components/Router/PrivateRoute'

// Components
import Navigation from './components/Navigation/Navigation'
import FriendsList from './components/Friends/FriendsList'
import Login from './components/Login/Login'
import Footer from './components/Footer/Footer'

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
          <PrivateRoute exact path="/" component={FriendsList} />

          <Route exact path="/login" component={Login} />
        </section>

        <Footer />
      </div>
    )
  }
}

export default App
