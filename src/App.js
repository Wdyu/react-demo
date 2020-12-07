import React, { Component } from 'react'
import './assets/css/style.css'
import Img from './assets/images/am7.jpg'

export default class App extends Component {
  render() {
    return (
      <div>
        <p style={{ color: 'red', fontSize: 30 }}>JSX语法注意事项</p>
        <p className='box'>JSX语法注意事项</p>
        <img src={Img} width='200' />
        <br />
        <label htmlFor='username'>
          用户名：
          <input type='text' id='username' />
        </label>
      </div>
    )
  }
}
