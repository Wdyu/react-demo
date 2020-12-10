import React, { Component } from 'react'
import '../../assets/css/style.css'
export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='header-logo'>我是Header组件</div>
        <div className='header-navbar'>{this.props.children}</div>
      </header>
    )
  }
}
