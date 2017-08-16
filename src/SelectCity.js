import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchWeather } from './actions.js'

class SelectCity extends Component {
  _handleChange = (e) => {
    const value = e.target.value
    console.log(value)
    this.props.getCityWeather(value)
    // this.props.dispatch(fetchWeather(value))
  }
  render() {
    return (
      <div>
        <select onChange={this._handleChange}>
          <option value="101010100">北京</option>
          <option value="101020100">上海</option>
          <option value="101280101">广州</option>
          <option value="101280601">深圳</option>
        </select>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    data: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCityWeather: (cityCode) => {
        dispatch(fetchWeather(cityCode))
      }
  }
}

// export default connect()(SelectCity)
export default connect(mapStateToProps, mapDispatchToProps)(SelectCity)
