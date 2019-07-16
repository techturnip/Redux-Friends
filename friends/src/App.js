import React, { Component } from 'react'
// Materialize CSS
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

// Components
import Navigation from './components/Navigation/Navigation'
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
          <h1>Friends app</h1>
        </header>

        <Footer />
      </div>
    )
  }
}

export default App
