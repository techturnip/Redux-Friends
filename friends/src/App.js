import React, { Component } from 'react'
// Materialize CSS
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
// Styles
import './App.css'

class App extends Component {
  componentDidMount() {
    // Auto initialize Materialize CSS
    M.AutoInit()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Friends app</h1>
        </header>
      </div>
    )
  }
}

export default App
