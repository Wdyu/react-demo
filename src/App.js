import React, { Component } from 'react'
import Header from './common/common-main/Header'
import Navbar from './common/common-main/Navbar'
import Sidebar from './common/common-main/Sidebar'

import './assets/css/style.css'

import BrowerRouter from './router/index'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <Navbar />
        </Header>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='routepage'>
          <BrowerRouter />
        </div>
      </div>
    )
  }
}
