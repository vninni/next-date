# next-date

> 

[![NPM](https://img.shields.io/npm/v/next-date.svg)](https://www.npmjs.com/package/next-date) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo Page

You can find a demo [Here](https://yuledev.github.io/next-date/)

## Install

```bash
npm install --save next-date
```

## Usage

```jsx
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
        <NextDate
          value={this.state.date}
          onChange={this.handleChange}
          days={5}
        />
      </div>
    )
  }
}
```

## License

MIT © [](https://github.com/)
