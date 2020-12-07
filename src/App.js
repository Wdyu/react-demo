import React, { Component } from 'react'
import './assets/css/style.css'
import Img from './assets/images/am7.jpg'

let name = '小明',
  age = 10,
  list = [10, 20, 30, 40]

export default class App extends Component {
  render() {
    return (
      <div>
        <p>姓名：{name}</p>
        <p>年龄：{age}</p>
        <ul>
          {list.map((el, key) => {
            return <li key={key}>{el}</li>
          })}
        </ul>
        <br />
        <img src={Img} width='200' alt='el' />
        <br />
        <label htmlFor='username'>
          用户名：
          <input type='text' id='username' />
        </label>
        <p>Hello, is me!</p>
      </div>
    )
  }
}
