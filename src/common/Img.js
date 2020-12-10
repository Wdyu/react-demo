import React, { Component } from 'react'

export default class Img extends Component {
  render() {
    return (
      <div className='img-item'>
        <img src={require('../assets/images/' + this.props.src)} alt='react-demo' />
      </div>
    )
  }
}
