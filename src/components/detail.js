import React, { Component } from 'react'

export default class detail extends Component {
  render() {
    return (
      <div>
        <h1>详情页</h1>
        <p>{this.props.match.params.pgid}</p>
      </div>
    )
  }
}
