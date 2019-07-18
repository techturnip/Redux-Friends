// Import React
import React from 'react'
import ReactDOM from 'react-dom'
// Root Styles
import './index.scss'
// Root Component
import App from './App'
// Router
import { BrowserRouter as Router } from 'react-router-dom'
// Redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
// Redux Middleware
import thunk from 'redux-thunk'
import logger from 'redux-logger'
// Reducer
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
