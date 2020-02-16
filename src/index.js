import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NextDate extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.instanceOf(Date)
  }
  state = { currentDate: this.props.value || new Date() }

  handleLeftClick = e => {
    let updateDate = new Date(
      this.state.currentDate.getFullYear(),
      this.state.currentDate.getMonth(),
      this.state.currentDate.getDate() - 1
    )
    this.setState(
      {
        currentDate: updateDate
      },
      () => {
        this.props.onChange(this.state.currentDate)
      }
    )
  }
  handleRightClick = e => {
    let updateDate = new Date(
      this.state.currentDate.getFullYear(),
      this.state.currentDate.getMonth(),
      this.state.currentDate.getDate() + 1
    )
    this.setState(
      {
        currentDate: updateDate
      },
      () => {
        this.props.onChange(this.state.currentDate)
      }
    )
  }
  render() {
    return (
      <div>
        <span style={{ cursor: 'pointer' }} onClick={this.handleLeftClick}>
          &larr;
        </span>
        <span>{this.state.currentDate.toLocaleDateString()}</span>
        <span style={{ cursor: 'pointer' }} onClick={this.handleRightClick}>
          &rarr;
        </span>
      </div>
    )
  }
}
