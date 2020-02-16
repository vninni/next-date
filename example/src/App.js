import React, { Component } from 'react'

import NextDate from 'next-date'

export default class App extends Component {
  state = {
    date: new Date()
  }

  handleChange = date => {
    console.log(date)
  }
  render() {
    return (
      <div>
        <NextDate value={this.state.date} onChange={this.handleChange} />
      </div>
    )
  }
}
