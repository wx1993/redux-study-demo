import React from 'react'

class Weather extends React.Component {
  state = {
    weather: null
  }
  componentDidMount () {
    const cityCode = 101210101
    const url = `/data/cityinfo/${cityCode}.html`
    fetch(url).then(res => {
      res.json().then(resJson => {
        this.setState({
          weather: resJson.weatherinfo
        }, () => console.log(this.state.weather))
      })
    })
  }
  render () {
    const {  weather } = this.state
    return (
      <div>
        { this.state.weather
          ? <ul>
              <li>city: { weather.city }</li>
              <li>cityid: { weather.cityid }</li>
              <li>ptime: { weather.city }</li>
              <li>weather: { weather.weather }</li>
              <li>temp1: { weather.temp1 }</li>
              <li>temp2: { weather.temp2 }</li>
            </ul>
          : <p>暂无数据</p>
        }
      </div>
    )
  }
}

export default Weather
