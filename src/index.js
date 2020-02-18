import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NextDate extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.instanceOf(Date),
    days: PropTypes.number
  }
  state = { currentDate: this.props.value || new Date(), listOpen: false }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

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
  handleClick = (e, val) => {
    this.setState(
      {
        currentDate: val,
        listOpen: false
      },
      () => {
        this.props.onChange(this.state.currentDate)
      }
    )
  }
  addDays = () => {
    const date = new Date()
    let datesCollection = []

    for (var i = -this.props.days / 2; i < this.props.days / 2; i++) {
      const newDate = new Date(date.getTime() + i * 1000 * 60 * 60 * 24)
      datesCollection.push(newDate)
    }

    return datesCollection
  }

  renderList() {
    const days = this.addDays()
    return days.map((item, key) => (
      <li onClick={e => this.handleClick(e, item)} key={key}>
        {item.toLocaleDateString()}
      </li>
    ))
  }

  render() {
    const { listOpen } = this.state
    return (
      <div style={{ position: 'relative' }}>
        <span style={{ cursor: 'pointer' }} onClick={this.handleLeftClick}>
          &larr;
        </span>
        <span style={{ cursor: 'pointer' }} onClick={() => this.toggleList()}>
          {this.state.currentDate.toLocaleDateString()}
        </span>
        <span style={{ cursor: 'pointer' }} onClick={this.handleRightClick}>
          &rarr;
        </span>
        {listOpen ? (
          <ul
            style={{
              listStyleType: 'none',
              position: 'absolute',
              margin: '0',
              padding: '0',
              left: '16px',
              cursor: 'pointer'
            }}
          >
            {this.renderList()}
          </ul>
        ) : (
          ''
        )}
      </div>
    )
  }
}
