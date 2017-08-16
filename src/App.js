import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getName, getAge, fetchWeather } from './actions'
import './style.css'
// import CountDown from './showCount.js'
// import Weather from './weather.js'
import NewWeather from './newWeather.js'
import SelectCity from './SelectCity.js'
import * as Actions from './actions.js'
import TransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  componentDidMount () {
    this.props.getWeatherInfo()
    // this.props.dispatch(fetchWeather('101210101'))
  }
  render() {
    // const { name, age } = this.state
    console.log(this.props.data)
    return (
      <div className='App'>
        { /*
        <CountDown startCount={5}>
          {
            (count) => <div>{ count > 0 ? count : 'Happy New year!!!'}</div>
          }
        </CountDown>
        */}
        <SelectCity />
        <TransitionGroup transitionName="fade" transitionEnterTimeout={3000} transitionLeaveTimeout={2000}>
          <NewWeather />
        </TransitionGroup>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    data: state
  }
}

const mapDispathchToProps = (dispatch) => {
  return {
    getWeatherInfo: () => {
      dispatch(Actions.fetchWeather('101210101'))
    }
  }
}

// export default connect(mapStateToProps)(App)
export default connect(mapStateToProps, mapDispathchToProps)(App)
