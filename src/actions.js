export const GET_NAME = 'GET_NAME'
export const GET_AGE = 'GET_AGE'
export const FETCH_STARTED = 'WEATHER_FETCH_STARTED'
export const FETCH_SUCCESS = 'WEATHER_FETCH_SUCCESS'
export const FETCH_FAILURE = 'WEATHER_FETCH_FAILURE'

// 这里的 action 在组件中被触发， this.props.dispatch(add())
export const fetchWeatherStarted = () => {
  return {
    type: FETCH_STARTED
  }
}

export const fetchWeatherSuccess = (result) => ({
  type: FETCH_SUCCESS,
  result
})

export const fetchWeatherFailure = (error) => ({
  type: FETCH_FAILURE
})

export const fetchWeather = (cityCode) => {
  return (dispatch, getState) => {
    const apiUrl = `/data/cityinfo/${cityCode}.html`
    dispatch(fetchWeatherStarted())
    fetch(apiUrl).then(response => {
      response.json().then(res => {
        console.log(res)
        dispatch(fetchWeatherSuccess(res.weatherinfo))
        // dispatch({
        //   type: FETCH_SUCCESS,
        //   result: res.weatherinfo
        // })
      })
    }).catch(err => {
      dispatch(fetchWeatherFailure(err))
    })
  }
}
