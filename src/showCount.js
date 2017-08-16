import React from 'react'
import PropTypes from 'prop-types'

class ShowCount extends React.Component {
  state = {
    count: this.props.startCount
  }
  componentDidMount () {
    let timer = setInterval( () => {
      let count = this.state.count
      if (count > 0) {
        count--
        this.setState({ count }, () => console.log(this.state.count))
      } else {
        clearInterval(timer)
      }
    }, 1000)
  }
  render () {
    return this.props.children(this.state.count)
  }
}

ShowCount.propTypes = {
  children: PropTypes.func.isRequired,
  startCount: PropTypes.number.isRequired
}

export default ShowCount
