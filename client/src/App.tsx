import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import Profile from './pages/Profile'

class App extends Component {
  public render () {
    return (
      <Router>
        <div className="container">
          <Route exact={true} path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    )
  }
}

export default App
