import React, { Component } from 'react'

export default class IconInput extends Component {
  render() {
    return (
      <div className='input-item'>
        <i className={'iconfont icon-' + this.props.iconClass}></i>
        <input type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    )
  }
}
