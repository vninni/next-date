import React, { Component } from 'react'

import NextDate from 'next-date'

export default class App extends Component {
  handleChange = date => {
    console.log(date)
  }
  render() {
    return (
      <div>
        <NextDate onChange={this.handleChange} />
      </div>
    )
  }
}
