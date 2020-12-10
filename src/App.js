import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { createHashHistory } from 'history'

import Link from './components/link'
import Index from './components/index'
import List from './components/list'

const hashHistory = createHashHistory()

export default class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' exact component={Link}></Route>
        <Route path='/index' component={Index}></Route>
        <Route path='/list' component={List}></Route>
      </Router>
    )
  }
}
