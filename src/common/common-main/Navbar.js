import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <ul className='navbar'>
        <li>
          <a href='#/index'>首页</a>
        </li>
        <li>
          <a href='#/list'>列表页</a>
        </li>
        <li>
          <a href='#/detail/999'>详情页</a>
        </li>
      </ul>
    )
  }
}
