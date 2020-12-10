import React, { Component } from 'react'

export default class link extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href='#/index'>首页</a>
          </li>
          <li>
            <a href='#/list'>列表页</a>
          </li>
        </ul>
      </div>
    )
  }
}
