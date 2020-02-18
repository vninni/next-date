import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

export default class NextDate extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.instanceOf(Date),
    days: PropTypes.number
  }
  state = {
    currentDate: this.props.value || new Date(),
    listOpen: false,
    keySelected: this.props.days
  }

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
        currentDate: updateDate,
        keySelected: this.state.keySelected - 1
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
        currentDate: updateDate,
        keySelected: this.state.keySelected + 1
      },
      () => {
        this.props.onChange(this.state.currentDate)
      }
    )
  }
  handleClick = (e, val, key) => {
    this.setState(
      {
        currentDate: val,
        listOpen: false,
        keySelected: key
      },
      () => {
        this.props.onChange(this.state.currentDate)
      }
    )
  }
  addDays = () => {
    const date = new Date()
    let datesCollection = []

    for (var i = -this.props.days; i < this.props.days + 1; i++) {
      const newDate = new Date(date.getTime() + i * 1000 * 60 * 60 * 24)
      datesCollection.push(newDate)
    }
    return datesCollection
  }

  renderList() {
    const days = this.addDays()
    return days.map((item, key) => (
      <li
        onClick={e => this.handleClick(e, item, key)}
        key={key}
        className={`${styles.nextdate_list} ${
          this.state.keySelected === key ? styles.selected : ''
        }
          `}
      >
        {key === this.props.days ? 'today' : item.toLocaleDateString()}
      </li>
    ))
  }

  render() {
    const { listOpen } = this.state
    return (
      <div style={{ position: 'relative' }}>
        {this.state.keySelected === 0 ? (
          ''
        ) : (
          <span style={{ cursor: 'pointer' }} onClick={this.handleLeftClick}>
            &larr;
          </span>
        )}
        <span style={{ cursor: 'pointer' }} onClick={() => this.toggleList()}>
          {this.state.currentDate.toLocaleDateString()}
        </span>
        {this.state.keySelected === this.props.days * 2 ? (
          ''
        ) : (
          <span style={{ cursor: 'pointer' }} onClick={this.handleRightClick}>
            &rarr;
          </span>
        )}
        {listOpen ? (
          <ul className={styles.nextdate_dropdown}>{this.renderList()}</ul>
        ) : (
          ''
        )}
      </div>
    )
  }
}
