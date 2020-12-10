import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { createHashHistory } from 'history'

import Index from '../components/index'
import List from '../components/list'
import Detail from '../components/detail'

import Child from '../components/child'

const hashHistory = createHashHistory()

export default class BrowerRouter extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/index' exact component={Index}></Route>
        <Route path='/index/child' exact component={Child}></Route>
        <Route path='/list' component={List}></Route>
        <Route path='/detail/:pgid' component={Detail}></Route>
      </Router>
    )
  }
}
